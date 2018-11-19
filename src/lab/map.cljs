(ns lab.map
  (:require [lab.views :refer [components views set-mode!]]
            [cljsjs.leaflet]
            [cljsjs.leaflet-omnivore])
  (:require-macros [lab.macros :refer [with-view markers]]))

(defn- map-for [id]
  (let [view (get @views id)
        instance (.map js/L (.querySelector view ".map"))
        tile (.tileLayer js/L
              "//server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
              #js {:attribution "Source: Esri, DigitalGlobe, GeoEye, i-cubed, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community."})]
    (.setView instance #js [60.4530898 22.3139035] 15)
    (.addTo tile instance)
    instance))

(defn map! [view]
  (set-mode! view :map)
  (swap! components assoc-in [view :map] (map-for view)))

(defn map-center! [view center & {:keys [zoom] :or {zoom 13}}]
  (let [l (get-in @components [view :map])]
    (set-mode! view :map)
    (.setView l (clj->js center) zoom)))

(defn clear-markers! [view]
  (let [l (get-in @components [view :map])]
    (.eachLayer l (fn [layer]
                    (when (>= (.indexOf (.-className (.getPane layer)) "marker") 0)
                      (.remove layer))))))

(defn add-marker! [view lat lon & {:keys [rev] :or {rev false}}]
  (set-mode! view :map)
  (let [l (get-in @components [view :map])
        coords (if-not rev [lat lon] [lon lat])
        m (.marker js/L (clj->js coords))]
    (.addTo m l)
    (map-center! view coords #js {:padding 5})
    m))

(defn add-markers! [view points & {:keys [rev] :or {rev false}}]
  (doseq [point points]
    (apply add-marker! view point rev)))

(defn add-geojson! [view data]
  (set-mode! view :map)
  (let [l (get-in @components [view :map])
        m (.geoJSON js/L (clj->js data))]
    (.addTo m l)
    m))

(defn add-polyline! [view points & {:keys [rev as-list] :or {rev false as-list false}}]
  (set-mode! view :map)
  (let [l (get-in @components [view :map])
        points (if-not as-list points (mapv vec (partition 2 points)))
        points (if-not rev points (mapv (fn [[lat lng]] [lng lat]) points))
        m (.polyline js/L (clj->js points) #js {:color "#0cc2aa" })]
    (.addTo m l)
    m))

(defn polyline-from-str! [view points]
  (-> points
    (clojure.string/split #"\n")
    (->> (map #(clojure.string/split % #","))
    	 (mapv #(mapv js/parseFloat %))
         (add-polyline! view))))

(defn polyline-from-dbdump! [view dump]
  (->> (re-seq #"\|\s*(\d+\.\d+,\d+\.\d+)\s*\|" dump)
       (map #(clojure.string/split (second %) #","))
       (mapv #(mapv js/parseFloat %))
       (add-polyline! view)))

(defn add-wkt! [view wkt-string]
  (set-mode! view :map)
  (let [m (get-in @components [view :map])
        layer (js/omnivore.wkt.parse wkt-string)]
    (.addTo layer m)
    (.fitBounds m (.getBounds layer))))

(comment
  (with-view
      (clear-markers!)
      (add-marker! 60.4436501 22.2673988)
      (add-marker! 60.4456601 22.2673988))
  (markers :view 60.4504278,22.2738248,60.4485448,22.2538258))
