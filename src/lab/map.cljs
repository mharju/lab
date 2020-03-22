(ns lab.map
  (:require [lab.views :refer [components views set-mode!]]
            ["leaflet" :refer [tileLayer Icon LatLng marker polyline] :as L]
            ["leaflet-omnivore"]
            ["leaflet-draw" :as LD]))

(def esri (tileLayer
              "//server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
              #js {:attribution "Source: Esri, DigitalGlobe, GeoEye, i-cubed, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community."}))

(def rotterdam (tileLayer
              "//tiles.arcgis.com/tiles/lQWQklF3MTod4sFp/arcgis/rest/services/50k/MapServer/tile/{z}/{x}/{y}"
              #js {:attribution "Source: Esri, DigitalGlobe, GeoEye, i-cubed, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community."}))

(def cartodb-positron (tileLayer
                        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        #js {
                          :attribution "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>"
                          :subdomains "abcd"
                          :maxZoom 19}))

(def cartodb-voyager (tileLayer
                        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                        #js {
                          :attribution "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>"
                          :subdomains "abcd"
                          :maxZoom 19}))

(def providers {:esri esri :rotterdam rotterdam :cartodb-positron cartodb-positron :cartodb-voyager cartodb-voyager})

(defn- map-for [id provider draw-mode?]
  (let [view (get @views id)
        instance (L/map (.querySelector view ".map") #js {:zoomControl false})
        tile (get providers provider)]
    (.setView instance #js [60.4530898 22.3139035] 15)
    (.addTo tile instance)
    (when (boolean draw-mode?)
      (let [toolbar (LD/Control.Draw. (clj->js {:draw {:circle false :circlemarker false}}))]
        (.addControl instance toolbar)))
    instance))

(defn map!
  "Create a new map for view. Optional provider (:esri, :cartodb-positron or :cartodb-voyager)"
  [view & {:keys [provider draw-mode?] :or {provider :cartodb-voyager draw-mode? nil}}]
  (set-mode! view :map)
  (when-let [current (get-in @components [view :map])]
    (.remove current))
  (let [component (map-for view provider draw-mode?)]
  (swap! components assoc-in [view :map] component)
   (when-not (nil? draw-mode?)
     (.on component "draw:created" (if (fn? draw-mode?) draw-mode? (resolve 'lab.core/on-draw-created))))
   component))

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

(defn add-marker!
  "Add a new marker to view with latitude and longitude."
  [view lat lon & {:keys [rev center? zoom center-opts icon] :or {rev false center? true zoom 13 center-opts {:padding [10 10]}}}]
  (set-mode! view :map)
  (let [l (get-in @components [view :map])
        coords (if-not rev [lat lon] [lon lat])
        m (if icon
            (let [ic (Icon. (clj->js icon))]
              (marker (clj->js coords) (clj->js {:icon ic})))
            (marker (clj->js coords)))]
    (.addTo m l)
    (when center? (map-center! view coords zoom center-opts))
    m))

(defn add-custom-layer! [view layer]
  "Add a custom layer to the view."
  (let [m (get-in @components [view :map])]
    (.addTo layer m)))

(defn add-markers! [view points & {:keys [rev] :or {rev false}}]
  "Add markers from the provided seq of lat-lon -pairs to the view."
  (doseq [point points]
    (apply add-marker! view point rev)))

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
  [view wkt-string]
  (set-mode! view :map)
  (let [m (get-in @components [view :map])
        layer (js/omnivore.wkt.parse wkt-string)]
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
