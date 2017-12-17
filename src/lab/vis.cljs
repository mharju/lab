(ns lab.vis
  (:require [lab.views :refer [views components set-mode!]]
            [cljsjs.vis]))

(defn- data-set [data] (js/vis.DataSet. (clj->js data)))
(defn vis! [view nodes edges]
  (set-mode! view :vis)
  (swap! components assoc-in [view :vis]
     (js/vis.Network.
        (.querySelector (get @views view) ".vis")
        (js-obj "nodes" (data-set nodes) "edges" (data-set edges))
        (js-obj))))

(comment
  (vis! :view [{:id 1 :label "First"} {:id 2 :label "Second"} {:id 3 :label "Third"}]
               [{:from 1 :to 2} {:from 1 :to 3} {:from 2 :to 3}]))
