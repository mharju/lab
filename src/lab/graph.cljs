(ns lab.graph
  (:require [lab.views :refer [components set-mode!]]
            [cljsjs.c3]))

(def color-pattern {:pattern ["#0cc2aa" "#fcc100" "#a88add"]})

(defn line-graph! [view values & {:keys [title] :or {title "data"}}]
  (set-mode! view :graph)
  (swap! components assoc-in [view :graph]
    (.generate js/c3
      (clj->js {:bindto (str "#" (name view) " .graph")
                :color color-pattern
                :data {
                :columns (if (vector? (first values))
                           values
                           [(into [title] values)])}}))))

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

(defn scatter-plot! [view values & {:keys [title] :or {title "data"}}]
  (set-mode! view :graph)
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


(comment
  (scatter-plot! :view-2 [["data_x" 10 20 30 40] ["data" 11 12 13 14]])
  (line-graph! :view-2 [] :title "foobar")
  (line-graph! :view-2 [["foobar" 1 2 3 4 4 3 2 1]
               ["bazbaz" 1 2 3 2 2 1 2 3]])

  (bar-graph! :view [1 5 2 3] :title "Number of Stuffs" :type :category :categories ["seppo" "teppo" "lappo" "pappo"]))

