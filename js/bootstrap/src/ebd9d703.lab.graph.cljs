(ns lab.graph
  (:require [lab.views :refer [components set-mode!]]
            [lab.layout :as layout]
            [goog.object :as gobj]
            ["c3" :as c3]))

(def color-pattern {:pattern ["#0cc2aa" "#fcc100" "#a88add"]})

(defn columnize
  "Convert rows of data to columnar format. Handy if you should want pie charts out of JSON.

  Example:
  (g/columnize [{:type :foo :value 1} {:type :bar :value 2}] :type :value)"
  [data column value & {:keys [x-axis]}]
  (->> data
       (reduce (fn [columns row]
                 (cond-> (update columns (name (or (get row column) column)) (fnil conj []) (get row value))
                         x-axis (update (name x-axis) (fnil conj []) (get row x-axis))))
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

(defn simple!
  "Simple plot generated from `data` using the `y` and `x` as key
  to retrieve the y axis with an optional x-axis parameter."
  ([view data y]
   (simple! view data nil y))
  ([view data x y]
    (graph! :view {:data {:xs      (when x {"data" "x"})
                          :columns (columnize data :data y :x-axis x)}})))

(defn ->freqs-columns [data k]
  (->> data
       (map k)
       (frequencies)
       (sort-by (comp - val))
       (reduce conj [])))

(defn frequencies! [view data k]
  (graph! view {:data {:columns (->freqs-columns data k)
                       :type :bar}}))

(comment
  (simple! :view [{:x 0 :y 1} {:x 1 :y 2} {:x 5 :y 3}] :y)

  (graph! :view {:data {:xs      {"data" "x"}
                        :columns (columnize [{:x 0 :y 1} {:x 1 :y 2} {:x 10 :y 3}]
                                            :data
                                            :y
                                            :x-axis :x)}})

  (frequencies! :view [{:foo "bar"} {:foo "baz"} {:foo "baz"} {:foo "qux"}] :foo)

  (graph! :view {:data {:columns [["data" 1 2 3 4 3 2 1]]}})
  (graph! :view {:data {:columns (columnize [{:type :foo :value 1} {:type :bar :value 2}] :type :value) :type :pie}}))
