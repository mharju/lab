(ns lab.graph
  (:require [lab.views :refer [components set-mode!]]
            [cljsjs.c3]))

(def color-pattern {:pattern ["#0cc2aa" "#fcc100" "#a88add"]})

(defn columnize [data x y]
  (->> data
       (reduce (fn [columns row]
                 (update columns (get row x) conj (get row y)))
               {})
       (mapv (fn [[k v]]
               (into [k] v)))))

(defn graph!
  "Generate a graph with C3.js. By default contains a default color pattern and binding to the view's graph container."
  [view opts]
  (set-mode! view :graph)
  (swap! components assoc-in [view :graph]
    (js/c3.generate (clj->js
                      (merge
                        {:bindto (str "#" (name view) " .graph")
                         :color color-pattern}
                        opts)))))
