(ns lab.vis
  (:require [lab.views :refer [views components set-mode!]]
            [cljsjs.vis]))

(defn- data-set [data] (js/vis.DataSet. (clj->js data)))

(defn update! [view nodes edges]
  (let [v (get-in @components [view :vis])
        js-nodes (data-set nodes)
        js-edges (data-set edges)
        data #js {:nodes js-nodes :edges js-edges}]
    (.setData v data)))

(defn set-items! [view items]
  (let [v (get-in @components [view :vis])
        items (data-set items)]
    (swap! components assoc-in [view :vis-ds] items)
    (.setItems v items)))

(defn set-groups! [view groups]
  (let [v (get-in @components [view :vis])
        groups (data-set groups)]
    (swap! components assoc-in [view :vis-groups] groups)
    (.setGroups v groups)))

(defn append-item! [view item]
  (let [items (get-in @components [view :vis-ds])]
    (.add items (clj->js item))))

(defn vis!
  ([view nodes edges]
   (vis! view nodes edges {}))
  ([view nodes edges options]
    (set-mode! view :vis)
    (swap! components assoc-in [view :vis]
       (js/vis.Network.
          (.querySelector (get @views view) ".vis")
          (js-obj "nodes" (data-set nodes) "edges" (data-set edges))
          (clj->js options)))))

(defn timeline!
  ([view items]
   (timeline! view items {}))
  ([view items options]
   (set-mode! view :vis)
   (let [items (data-set items)]
     (swap! components update view assoc :vis (js/vis.Timeline.
                                                (.querySelector (get @views view) ".vis")
                                                items
                                                (clj->js options))
                                         :vis-ds items))))

(defn grouped-timeline!
  ([view items groups]
   (grouped-timeline! view items groups {}))
  ([view items groups options]
   (set-mode! view :vis)
   (let [items (data-set items)
         groups (data-set groups)
         c (get-in @components [view :vis])]
     (when c
       (.destroy c))
     (swap! components update view assoc :vis (js/vis.Timeline.
                                                (.querySelector (get @views view) ".vis")
                                                items
                                                groups
                                                (clj->js options))
            :vis-ds items
            :vis-groups groups))))

(comment
  (vis! :view [{:id 1 :label "First"} {:id 2 :label "Second"} {:id 3 :label "Third"}]
              [{:from 1 :to 2} {:from 1 :to 3} {:from 2 :to 3}])

  (grouped-timeline! :view
             [{:id 1 :content "Mikko" :start "2019-07-20" :group 1}
              {:id 2 :content "Teemu" :start "2019-07-21" :group 1}
              {:id 3 :content "Simo" :start "2019-07-19" :group 2}]
             [{:id 1 :content "Taiste"}
              {:id 2 :content "Awake"}])

  (set-groups! :view
               [{:id 1 :content "Taiste"}
                {:id 2 :content "Awake"}
                {:id 3 :content "Gofore"}])

  (set-items! :view [{:id 1 :content "Mikko" :start "2019-07-20" :group 1}
                {:id 2 :content "Teemu" :start "2019-07-21" :group 1}
                {:id 3 :content "Simo" :start "2019-07-19" :group 2}
                {:id 4 :content "Sami" :start "2019-07-19" :group 3}])

  (deref components)
  (append-item! :view [{:id 5 :content "Kimmo" :start "2019-07-15" :group 2}]))

