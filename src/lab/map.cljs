(ns lab.map
  (:require [lab.views :refer [components views set-mode!]]
            [cljsjs.leaflet]))

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

(defn add-marker! [view lat lon]
  (set-mode! view :map)
  (let [l (get-in @components [view :map])
        m (.marker js/L (clj->js [lat lon]))]
    (.addTo m l)
    (map-center! view [lat lon] #js {:padding 5})
    m))

(defn add-markers! [view points]
  (doseq [point points]
    (apply add-marker! view point)))

(defn add-geojson! [view data]
  (set-mode! view :map)
  (let [l (get-in @components [view :map])
        m (.geoJSON js/L (clj->js data))]
    (.addTo m l)
    m))

(defn add-polyline! [view points]
  (set-mode! view :map)
  (js/console.info view points)
  (let [l (get-in @components [view :map])
        m (.polyline js/L (clj->js points) #js {:color "#0cc2aa" })]
    (.addTo m l)
    m))

(defn polyline-from-str! [view points]
  (-> points
    (clojure.string/split #"\n")
    (->> (map #(clojure.string/split % #","))
    	 (mapv #(mapv js/parseFloat %))
         (add-polyline! view))))

(comment
  (map-center :view 60.4486401 22.2673988)
  (add-marker! :view-2 60.4486401 22.2673988)
  (add-marker! :view 60.4436501 22.2673988)
  (add-marker! :view 60.4456601 22.2673988))
