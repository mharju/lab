(ns console.core
  (:require-macros  [cljs.core.async.macros :refer  [go go-loop]])
  (:require [clojure.core.async :refer [>! <! chan]]
            [clojure.string :as string]
            [cljsjs.leaflet]
            [cljsjs.c3]
            [cljsjs.jquery]
            [cljsjs.vis]
            [cljsjs.codemirror]
            [cljsjs.codemirror.mode.clojure]
            [replumb.core :as rpl]
            [console.io :as rpl-io]))

(enable-console-print!)

(def color-pattern {:pattern ["#0cc2aa" "#fcc100" "#a88add"]})

(defonce views (atom {}))
(defonce components (atom {}))

(defn make-map-for [id]
  (let [view (get @views id)
        instance (.map js/L (.querySelector view ".map"))
        tile (.tileLayer js/L
              ;"http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
              "http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
              #js {:attribution "&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a> &copy; <a href=\"http://cartodb.com/attributions\">CartoDB</a>"})]
    (.setView instance #js [60.4530898 22.3139035] 15)
    (.addTo tile instance)
    instance))

(defn add-view!
  ([id] (add-view! (js/document.querySelector "body") id))
  ([parent id]
    (let [template (str "<div class=\"view\" id=\"" (name id) "\"><div class=\"info\"><span class=\"id\">" id "</span><span class=\"connection-status\"></span></div><div class=\"map\"></div><div class=\"graph\"></div><div class=\"vis\"></div><div class=\"console\"></div>")]
      (.append (js/$ parent) template)
      (swap! views assoc id (js/document.getElementById (name id)))
      (swap! components assoc id {:map (make-map-for id)}))))

(defn remove-view! [id]
  (swap! views dissoc id)
  (swap! components dissoc id)
  (.remove (js/document.querySelector (str "#" (name id)))))

(defonce data-connection (atom {:ws nil :listeners {}}))
(defn listen! [id target-view listener]
  (let [selector (str "#" (name target-view) " .connection-status")]
    (.addClass (js/$ selector) "connected")
    (swap! data-connection assoc-in [:listeners id] listener)))
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


(defn set-mode [view mode]
  (let [p (js/$ (get @views view))]
    (do  (.show (.find p (str "." (name mode))))
         (.hide (.find p (str "> div:not(." (name mode) ", .info)"))))))

;; map functions
(defn map-center [view center & {:keys [zoom] :or {zoom 13}}]
  (let [l (get-in @components [view :map])]
    (set-mode view :map)
    (.setView l (clj->js center) zoom)))

(defn clear-markers! [view]
  (let [l (get-in @components [view :map])]
    (.eachLayer l (fn [layer]
                    (when (>= (.indexOf (.-className (.getPane layer)) "marker") 0)
                      (.remove layer))))))

(defn marker [view center]
  (set-mode view :map)
  (let [l (get-in @components [view :map])
        m (.marker js/L (clj->js center))]
    (.addTo m l)
    m))

(defn geojson [view data]
  (set-mode view :map)
  (let [l (get-in @components [view :map])
        m (.geoJSON js/L (clj->js data))]
    (.addTo m l)
    m))

(defn polyline [view points]
  (set-mode view :map)
  (let [l (get-in @components [view :map])
        m (.polyline js/L points)]
    (.addTo m l)
    m))


;; graph functions

(defn line-graph! [view values & {:keys [title] :or {title "data"}}]
  (set-mode view :graph)
  (swap! components assoc-in [view :graph]
    (.generate js/c3
      (clj->js {:bindto (str "#" (name view) " .graph")
                :color color-pattern
                :data {
                :columns (if (vector? (first values))
                           values
                           [(into [title] values)])}}))))

(defn bar-graph! [view values & {:keys [title type categories] :or {title "data" type :indexed categories nil}}]
  (set-mode view :graph)
  (let [x-axis (into {:type type} (when (= type :category) {:categories categories}))]
    (swap! components assoc-in [view :graph]
      (.generate js/c3
        (clj->js {:bindto (str "#" (name view) " .graph")
                  :axis {
                    :x x-axis}
                  :color color-pattern
                  :data {
                    :type "bar"
                    :columns (if (vector? (first values))
                               values
                               [(into [title] values)])}})))))

(defn scatter-plot! [view values & {:keys [title] :or {title "data"}}]
  (set-mode view :graph)
  (swap! components assoc-in [view :graph]
    (.generate js/c3
      (clj->js {
               :bindto (str "#" (name view) " .graph")
               :color color-pattern
               :data {
                  :type "scatter"
                  :xs {
                      title (str title "_x")
                  }
                  :columns values}}))))

(defn flow [view values]
  (let [graph (get-in @components [view :graph])]
    (.flow graph (clj->js
                   {:columns
                     (if (vector? (first values))
                       values
                       [values])
                    :color color-pattern
                    :duration 500
                    :length 0}))))

(defn load-data [view data]
  (let [graph (get-in @components [view :graph])]
    (.load graph (clj->js {:columns data :type "bar"}))))

;; vis functions
(defn data-set [data] (js/vis.DataSet. (clj->js data)))
(defn vis! [view nodes edges]
  (set-mode view :vis)
  (swap! components assoc-in [view :vis]
     (js/vis.Network.
        (.querySelector (get @views view) ".vis")
        (js-obj "nodes" (data-set nodes) "edges" (data-set edges))
        (js-obj))))


;; console functions
(defn console! [view]
  (set-mode view :console)
  (let [element (.find (js/$ (get-in @views [view])) ".console")]
    (.css element #js {:height js/window.innerHeight})))

(defn append-to-console! [view text]
  (let [element (.find (js/$ (get-in @views [view])) ".console")]
    (.append element (str "<span class=\"row\"><span class=\"date\">" (.replace (.slice (.toISOString (js/Date.)) 0 -1) "T" " ") "</span> " text "</span>"))))

(defn clear-console! [view]
  (let [element (.find (js/$ (get-in @views [view])) ".console")]
    (.html element "")))

;; editor functions
(defn- try-eval [cm]
  (let [repl-opts (merge (rpl/options :browser
                           ["/js/compiled/out"]
                           rpl-io/fetch-file!)
                          {:warning-as-error false
                           :preloads {:require '#{[console.core :as c]}}})
        part (if-not (string/blank? (.getSelection cm)) (.getSelection cm) (.getValue cm))]
    (rpl/read-eval-call repl-opts
                        (fn [result]
                          (.setValue cm (str (.getValue cm) "\r\n" ";; " (rpl/unwrap-result result))))
                        part)))

(defonce cm-inst (atom nil))
(defn- handle-key [e]
  (when (.-metaKey e)
    (case (.-keyCode e)
      72 (do
           (.toggle (js/$ "#repl"))
           (when (.is (js/$ "#repl") ":visible")
             (.focus @cm-inst))
           (.preventDefault e))
      true)))

(defonce init
  (.ready (js/$ js/document)
    (fn [e]
      (.on (js/$ js/document) "keydown" handle-key)
      (let [cm (js/CodeMirror. (js/document.querySelector "#repl")
                     #js {:mode "clojure"
                          :lineNumbers false
                          :theme "solarized dark"
                          :value ";; Welcome to Console REPL.\r\n;; Enter value and press cmd-e to evaluate.\r\n" })]
        (reset! cm-inst cm)
        (.setOption cm "extraKeys"
                    #js {"Cmd-E" (fn [cm] (try-eval cm))})
        (.focus cm)
        (.setCursor cm #js {:line 3 :ch 0})
        (add-view! :view)))))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  (.off (js/$ js/document) "keydown")
  (.on (js/$ js/document) "keydown" handle-key)
  )

(comment
  (add-view! :view)
  (add-view! :view-2)

  (vis! :view-2 [{:id 1 :label "First"} {:id 2 :label "Second"} {:id 3 :label "Third"}]
               [{:from 1 :to 2} {:from 1 :to 3} {:from 2 :to 3}])
  (map-center :view [60.4486401 22.2673988])
  (marker :view-2 [60.4486401 22.2673988])
  (marker :view [60.4436501 22.2673988])
  (marker :view [60.4456601 22.2673988])

  (clear-markers! :view)
  (set-mode :view :graph)
  (scatter-plot! :view-2 [["data_x" 10 20 30 40] ["data" 11 12 13 14]])
  (line-graph! :view-2 [] :title "foobar")
  (line-graph! :view-2 [["foobar" 1 2 3 4 4 3 2 1]
               ["bazbaz" 1 2 3 2 2 1 2 3]])

  (bar-graph! :view [1 5 2 3] :title "Number of Stuffs" :type :category :categories ["seppo" "teppo" "lappo" "nappo"])

  (dotimes [n 100]
    (append-to-console! :view "Hello world"))
  (clear-console! :view)

  (do
    (console! :view)
    (clear-console! :view)
    (connect!)
    (listen! "console" :view
      (fn [data] (append-to-console! :view data))))

  (do
    (connect!)
    (line-graph! :view-2 [] :title "foobar")
    (listen!
      "delay"
      (fn [data]
        (flow :view-2 (into ["data"] data)))))

  (let [markers (atom {})]
    (set-mode :view :map)
    (clear-markers! :view)
    (connect!)
    (listen!
      "vehicles"
      (fn [{:strs [vehicle lat lon]}]
        (if-let [marker (get @markers vehicle)]
          (.setLatLng marker (js/L.LatLng. lat lon))
          (swap! markers assoc
                 vehicle (marker :view [lat lon]))))))

  (do
    (connect!)
    (let [graph (bar-graph [3 3 2 3] :title "data")]
      (listen!
        "test"
        (fn [data]
          (print "load" data)
          (load-data graph [(into ["data"] data)])))))

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
