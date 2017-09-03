(ns console.core
  (:require-macros  [cljs.core.async.macros :refer  [go go-loop]])
  (:require [cljsjs.leaflet]
            [cljsjs.c3]
            [cljsjs.jquery]
            [cljsjs.vis]
            [clojure.core.async :refer [>! <! chan]]))

(enable-console-print!)

(defonce data-connection (atom {:ws nil :listeners {}}))
(defn listen! [id listener]
  (swap! data-connection assoc-in [:listeners id] listener))
(defn connect! []
  (when-let [{:keys [ws]} @data-connection]
    (if-not (nil? ws)
      ws
      (swap! data-connection assoc :ws
        (let [s (js/WebSocket. "ws://localhost:7889")]
          (set!  (.-onopen s) #(.log js/console "Data socket opened at ws://localhost:7889"))
          (set!  (.-onmessage s) (fn [e]
                                   (let [{:strs [id data] :or {id "unknown" data nil} :as p} (js->clj (.parseJSON js/$(.-data e)))
                                       listener (get-in @data-connection [:listeners id])]
                                     (when listener
                                       (apply listener [data])))))
          s)))))

(defonce l
  (let [instance (.map js/L "map")
        tile (.tileLayer js/L
              ;"http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
              "http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
              #js {:attribution "&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a> &copy; <a href=\"http://cartodb.com/attributions\">CartoDB</a>"})]
    (.setView instance #js [60.4530898 22.3139035] 15)
    (.addTo tile instance)
    instance))

(defn set-mode [mode]
  (do  (.show (js/$ (str "#" (name mode))))
       (.hide (js/$ (str "body > div:not(#" (name mode) ")")))))

;; map functions
(defn map-center [center & {:keys [zoom] :or {zoom 13}}]
  (set-mode :map)
  (.setView l (clj->js center) zoom))

(defn clear-markers! []
  (.eachLayer l (fn [layer]
                  (when (>= (.indexOf (.-className (.getPane layer)) "marker") 0)
                    (.remove layer)))))

(defn marker [center]
  (set-mode :map)
  (let [m (.marker js/L (clj->js center))]
    (.addTo m l)))

(defn geojson [data]
  (set-mode :map)
  (let [m (.geoJSON js/L (clj->js data))]
    (.addTo m l)))

(defn polyline [points]
  (set-mode :map)
  (let [m (.polyline js/L points)]
    (.addTo m l)))


;; graph functions

(defn line-graph [values & {:keys [title] :or {title "data"}}]
  (set-mode :graph)
  (.generate js/c3
    (clj->js {:bindto "#graph"
              :data {
              :columns (if (vector? (first values))
                         values
                         [(into [title] values)])}})))
(defn bar-graph [values & {:keys [title] :or {title "data"}}]
  (set-mode :graph)
  (.generate js/c3
    (clj->js {:bindto "#graph"
              :data {
              :type "bar"
              :columns (if (vector? (first values))
                         values
                         [(into [title] values)])}})))

(defn scatter-plot [values & {:keys [title] :or {title "data"}}]
  (set-mode :graph)
  (.generate js/c3
    (clj->js {
             :bindto "#graph"
             :data {
                :type "scatter"
                :xs {
                    title (str title "_x")
                }
                :columns values}})))

(defn flow [graph values]
  (.flow graph (clj->js
                 {:columns
                   (if (vector? (first values))
                     values
                     [values])
                  :duration 500
                  :length 0})))

;; vis functions
(defn data-set [data] (js/vis.DataSet. (clj->js data)))
(defn vis [nodes edges]
  (set-mode :vis)
  (js/vis.Network.
    (.getElementById js/document "vis")
    (js-obj "nodes" (data-set nodes) "edges" (data-set edges))
    (js-obj)))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)


(comment
  (vis [{:id 1 :label "WESSA"} {:id 2 :label "KEPPO"} {:id 3 :label "SALAATTI"}]
       [{:from 1 :to 2} {:from 1 :to 3} {:from 2 :to 3}])
  (map-center [60.4486401 22.2673988])
  (marker [60.4486401 22.2673988])
  (marker [60.4436501 22.2673988])
  (marker [60.4456601 22.2673988])

  (do
    (connect!)
    (let [graph (line-graph [] :title "data")]
      (listen!
        "test"
        (fn [data]
          (flow graph ["data" data])))))

  (do
    (connect!)
    (let [graph (bar-graph [] :title "data")]
      (listen!
        "test"
        (fn [data]
          (flow graph ["data" data])))))

  (do
    (clear-markers!)
    (connect!)
    (let [m (polyline [])]
      (listen!
        "test"
        (fn [data]
          (.setLatLngs m (clj->js data))))))

  (do
    (let [graph (scatter-plot [] :title "data")]
      (connect!)
      (listen!
        "points"
        (fn [data]
          (println data)
          (.flow graph (clj->js {:columns data
                                 :duration 500
                                 :length 0})))))))

(comment
  (clear-markers!)

  (set-mode :graph)
  (scatter-plot [["data_x" 10 20 30 40] ["data" 11 12 13 14]])
  (line-graph [1 2 3 4 3 2 1 2 3 4 2] :title "foobar")
  (line-graph [["foobar" 1 2 3 4 4 3 2 1]
               ["bazbaz" 1 2 3 2 2 1 2 3]])
  (bar-graph [1 2 2 3 2 2] :title "baba"))
