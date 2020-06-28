(ns lab.graph
  (:require [lab.views :refer [components set-mode!]]
            [lab.layout :as layout]
            ["c3" :as c3]
            [goog.object :as gobj]))

(def color-pattern {:pattern ["#0cc2aa" "#fcc100" "#a88add"]})

(defn columnize
  "Convert rows of data to columnar format. Handy if you should want pie charts out of JSON.

  Example:
  (g/columnize [{:type :foo :value 1} {:type :bar :value 2}] :type :value)"
  [data x y]
  (->> data
       (reduce (fn [columns row]
                 (update columns (get row x) conj (get row y)))
               {})
       (mapv (fn [[k v]]
               (into [k] v)))))

(defn graph!
  "Generate a graph with C3.js. By default contains a default color pattern and binding to the view's graph container.

  Example:
  (g/graph! :view {:data {:columns [[\"data\" 1 2 3 4 3 2 1]]}})
  (g/graph! :view {:data {:columns (g/columnize [{:type :foo :value 1} {:type :bar :value 2}] :type :value) :type :pie}})"
  [view opts]
  (set-mode! view :graph)
  (swap! components assoc-in [view :graph]
    (c3/generate (clj->js
                      (merge
                        {:bindto (str "#" (name view) " .graph")
                         :color color-pattern
                         :padding {:top 30 :left 60 :right 60}}
                        opts)))))

(defn invalidate-size! []
  (doall
    (for [[k v] @components
          :let [{g :graph} v
                p (js/document.getElementById (name k))
                width (gobj/get p "clientWidth")
                height (gobj/get p "clientHeight")]
          :when (not (nil? g))]
      (do
        (.resize g #js {:width width :height height})
        (.flush g)))))
(layout/register-handler! invalidate-size!)

(defn load!
  "Load data into existing graph in view.

  Example:
  (g/load! :view {:data {:columns [\"data\" 2 3 4 5 6]}})"
  [view opts]
  (let [graph (get-in @components [view :graph])]
    (.load graph (clj->js opts))))

(defn flow!
  "Flow data into existing graph in view.

  Example:
  (g/flow! :view {:columns [[\"x\" 8 9 10 11 12 13] [\"data\" 1 3 4 5 6 7]]}})"
  [view opts]
  (let [graph (get-in @components [view :graph])]
    (.flow graph (clj->js opts))))

(comment
  (graph! :view {:data {:columns [["data" 1 2 3 4 3 2 1]]}}))
