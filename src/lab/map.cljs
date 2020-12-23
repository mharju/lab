(ns lab.map
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [lab.views :refer [components views set-mode!]]
            [lab.layout :as layout]
            [lab.console :refer [map-to-table]]
            ["leaflet" :refer [tileLayer Icon LatLng marker polyline] :as L]
            ["leaflet-omnivore" :as om]
            ["leaflet-draw"]))

(defn cartodb-positron []
  (tileLayer
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
    #js {
         :attribution "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>"
         :subdomains "abcd"
         :maxZoom 19}))

(defn cartodb-voyager []
  (tileLayer
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
    #js {
         :attribution "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>"
         :subdomains "abcd"
         :maxZoom 19}))

(def providers {:cartodb-positron cartodb-positron :cartodb-voyager cartodb-voyager})

(defn- map-for [id provider draw-mode?]
  (let [view (get @views id)
        instance (L/map (.querySelector view ".map") #js {:zoomControl false})
        tile ((get providers provider))]
    (.setView instance #js [60.4530898 22.3139035] 15)
    (.addTo tile instance)
    (when (boolean draw-mode?)
      (let [toolbar (L/Control.Draw. (clj->js {:draw {:circle false :circlemarker false}}))]
        (.addControl instance toolbar)))
    instance))

(defn map!
  "Create a new map for view. Optional provider :cartodb-positron"
  [view & {:keys [provider draw-mode?] :or {provider :cartodb-voyager draw-mode? nil}}]
  (set-mode! view :map)
  (when-let [current (get-in @components [view :map])]
    (.remove current))
  (let [component (map-for view provider draw-mode?)]
  (swap! components assoc-in [view :map] component)
   (when-not (nil? draw-mode?)
     (.on component "draw:created" (if (fn? draw-mode?) draw-mode? (resolve 'lab.core/on-draw-created))))
   component))

(defn invalidate-size! []
  (doall
    (for [m (map :map (vals @components))
          :when (not (nil? m))]
      (.invalidateSize m))))
(layout/register-handler! invalidate-size!)

(defn map-center!
  "Center the map to the given point and zoom level. Zoom defaults to 13."
  ([view center]
    (map-center! view center 13))
  ([view center zoom]
    (map-center! view center zoom {:padding [0 0]}))
  ([view center zoom opts]
    (let [l (get-in @components [view :map])]
      (set-mode! view :map)
      (.setView l (clj->js center) zoom (clj->js opts)))))

(defn clear-markers! [view]
  "Clear all markers in the given view."
  (let [l (get-in @components [view :map])]
    (.eachLayer l (fn [layer]
                    (when (>= (.indexOf (.-className (.getPane layer)) "marker") 0)
                      (.remove layer))))))

(defn clear! [view]
  "Clear all layers from the given view."
  (let [l (get-in @components [view :map])]
    (.eachLayer l (fn [layer]
                    (when-not (>= (.indexOf (.-className (.getPane layer)) "tile") 0)
                      (.remove layer))))))

(defn update-data! [marker data]
  (.bindPopup marker (html (map-to-table data))))

(defn add-marker!
  "Add a new marker to view with latitude and longitude."
  [view lat lon & {:keys [rev center? zoom center-opts icon data on-click] :or {rev false center? true zoom 13 center-opts {:padding [10 10]}}}]
  (set-mode! view :map)
  (let [l (get-in @components [view :map])
        coords (if-not rev [lat lon] [lon lat])
        m (if icon
            (let [ic (Icon. (clj->js icon))]
              (marker (clj->js coords) (clj->js {:icon ic})))
            (marker (clj->js coords)))]
    (.addTo m l)
    (when center? (map-center! view coords zoom center-opts))
    (when on-click (.on m "click" on-click))
    (when data (update-data! m data))
    m))

(defn add-custom-layer! [view layer]
  "Add a custom layer to the view."
  (let [m (get-in @components [view :map])]
    (.addTo layer m)))

(defn add-markers! [view points & {:keys [key-fn data-fn] :as args :or {key-fn identity data-fn nil}}]
  "Add markers from the provided seq of lat-lon -pairs to the view."
  (doseq [point points]
    (apply add-marker! view (->> (into (key-fn point) (cond-> args
                                                          data-fn (assoc :data (data-fn point))
                                                          true    (dissoc :data-fn)))
                                 flatten))))

(defn add-geojson! [view data]
  "Add a GeoJSON object to the view."
  (set-mode! view :map)
  (let [l (get-in @components [view :map])
        m (.geoJSON L (clj->js data))]
    (.addTo m l)
    m))

(def line-colors ["#0cc2aa" "#fcc100" "#a88add"])
(let [index (atom 0)]
  (defn next-color []
    "Cycles through colors defined in line-colors vector."
    (let [result (nth line-colors (mod @index (count line-colors)))]
      (swap! index inc)
      result)))

(defn add-polyline!
  "Add a polyline with the given seq of lat-lon pairs or flattened list (:as-list true)."
  [view points & {:keys [rev as-list fit-bounds] :or {rev false as-list false fit-bounds true}}]
  (set-mode! view :map)
  (let [l (get-in @components [view :map])
        points (if-not as-list points (mapv vec (partition 2 points)))
        points (if-not rev points (mapv (fn [[lat lng]] [lng lat]) points))
        m (polyline (clj->js points) #js {:color (next-color)})]
    (.addTo m l)
    (when fit-bounds (.fitBounds l (.getBounds m)))
    m))

(defn polyline-from-str!
  "Add a polyline from a string value with each row containing comma-separated lat and long values."
  [view points]
  (-> points
    (clojure.string/split #"\n")
    (->> (map #(clojure.string/split % #","))
    	 (mapv #(mapv js/parseFloat %))
         (add-polyline! view))))

(defn polyline-from-dbdump!
  "Parse a Postgres DB dump and get latitude-longitude pairs from a column that has comma-separated lat and long value."
  [view dump]
  (->> (re-seq #"\|\s*(\d+\.\d+,\d+\.\d+)\s*\|" dump)
       (map #(clojure.string/split (second %) #","))
       (mapv #(mapv js/parseFloat %))
       (add-polyline! view)))

(defn add-wkt!
  "Add a WKT object to the view"
  [view wkt-string & {:keys [fit-bounds? options] :or {fit-bounds? false options nil}}]
  (set-mode! view :map)
  (let [m (get-in @components [view :map])
        custom-layer (when options
                       (L/geoJson nil options))
        layer (om/wkt.parse wkt-string nil custom-layer)]
    (.addTo layer m)
    (when fit-bounds?
      (.fitBounds m (.getBounds layer)))
    layer))

(defn add-kml!
  "Add a KML object to the view"
  [view kml-string]
  (set-mode! view :map)
  (let [m (get-in @components [view :map])
        layer (om/kml.parse kml-string)]
    (.addTo layer m)
    (.fitBounds m (.getBounds layer))))

;; Helpers
(defn map-center-and-radius
  "Get the map's current center and radius"
  [view]
  (let [m (get-in @components [view :map])
        bounds (.getBounds m)
        center (.getCenter bounds)
        radius (.distanceTo center (.getSouthWest bounds))]
    {:center (js->clj center :keywordize-keys true) :radius radius}))

(defn pan-to!
  "Pan the map to the given latitude and longitude position."
  ([view lat lon]
   (pan-to! view lat lon false))
  ([view lat lon animate?]
   (let [m (get-in @components [view :map])]
     (.panTo m (LatLng. lat lon) #js {:animate animate?}))))

(comment
  (clear! :view)
  (add-marker! :view 60.22 21.22)
  (markers :view 60.4504278,22.2738248,60.4485448,22.2538258))
