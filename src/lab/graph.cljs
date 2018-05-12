(ns lab.graph
  (:require [lab.views :refer [components set-mode!]]
            [cljsjs.c3]))

(def color-pattern {:pattern ["#0cc2aa" "#fcc100" "#a88add"]})

(defn line-graph! [view data axis]
  (set-mode! view :graph)
  (swap! components assoc-in [view :graph]
    (.generate js/c3
      (clj->js (merge {:bindto (str "#" (name view) " .graph")
                 :color color-pattern
                 :data data}
                 (when axis {:axis axis}))))))

(defn bar-graph! [view values & {:keys [title type categories] :or {title "data" type :indexed categories nil}}]
  (set-mode! view :graph)
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

(defn scatter-plot! [view data axis]
  (set-mode! view :graph)
  (swap! components assoc-in [view :graph]
    (.generate js/c3
      (clj->js (merge {
                 :bindto (str "#" (name view) " .graph")
                 :color color-pattern
                 :data (merge {:type "scatter"} data)}
                 (when axis {:axis axis}))))))

(defn flow [view data]
  (let [graph (get-in @components [view :graph])]
    (.flow graph (clj->js
                   (merge {:color color-pattern
                    :duration 500
                    :length 0}
                    data)))))

(defn load-data [view data]
  (let [graph (get-in @components [view :graph])]
    (.load graph (clj->js {:columns data :type "bar"}))))

(defn time-series! [view]
  (line-graph! view
     {:columns [["t"] ["y"]] :x "t"}
     {:x {:type "timeseries" :tick {:format "%H:%M:%S"}}}))

(defn time-flow [view ts value & args]
  (flow :view (merge {:columns [["t" ts] ["y" value]] :length 0} (or (first args) {}))))

(comment
  (scatter-plot! :view
     {:columns [["x" 10 20 30 40] ["data" 11 12 13 14]] :x "x"})

  (with-connection
    (time-series! :view)
    (fn [data]
      ()))

  (time-series! :view)
  (def iv (js/setInterval (fn [] (time-flow :view (js/Date.) (js/Math.random) {:length 1})) 1000))
  (js/clearInterval iv)

  (flow :view {:columns [["x" 1522647282000] ["latency" 5] ["id" 7]] :length 1})

  (bar-graph! :view [1 5 2 3] :title "Number of Stuffs" :type :category :categories ["seppo" "teppo" "lappo" "pappo"]))
