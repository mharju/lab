(ns lab.views
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [hiccups.runtime]
            [clojure.set]
            [clojure.string :as str]
            [lab.layout :as layout]
            ["jquery" :as $]))

(defonce views (atom {}))
(defonce view-info (atom {}))
(defonce components (atom {}))

(defn find-end [start size defs]
  (when (<= 0 (dec start) (dec (count defs)))
    (let [end (:result (reduce (fn [{:keys [cumulative index] :as acc} cumulative']
                                (if (>= (+ cumulative cumulative') size)
                                  (reduced {:result index})
                                  (-> acc
                                      (update :cumulative + cumulative')
                                      (update :index inc))))
                              {:cumulative 0 :index 1}
                              (subvec defs (dec start))))]
      (when end
        (+ start end)))))

(defn need-new-def? [col-index original-size new-size defs]
  (let [end-old (dec (find-end (inc col-index) original-size defs))]
    (if-let [usable-columns (when (and (<= (+ col-index end-old) (count defs))
                                       (<= 2 (- end-old col-index)))
                              (subvec defs col-index end-old))]
      (let [a (find-end 1 new-size usable-columns)
              b (find-end a new-size usable-columns)]
        (not (and a b)))
      true)))

(defn split [id after def-key {views :views :as data}]
  (if (empty? data)
    {:views [{:id id :size [100 100] :start [1 1]}] :col-defs [100] :row-defs [100]}
    (let [defs (get data def-key)
          index (->> views (map-indexed (fn [i {id' :id}] (when (= after id') i))) (remove nil?) first)
          {[size-col size-row] :size [start-col start-row] :start :as sibling} (nth views index)
          col-index (dec (if (= :row-defs def-key) start-row start-col))
          original-size (if (= :row-defs def-key) size-row size-col)
          new-size (/ original-size 2)
          new-size-def (if (= :row-defs def-key)
                         [size-col new-size]
                         [new-size size-row])
          create-def? (need-new-def? col-index original-size new-size defs)
          col-def (nth defs col-index)
          new-col-def  (/ col-def 2)
          col-defs (if create-def?
                     (->> (concat (subvec defs 0 col-index)
                                  [new-col-def new-col-def]
                                  (subvec defs (inc col-index)))
                          (into []))
                     defs)
          move-if-needed (partial mapv (fn [{[vc vr] :start :as v}]
                                         (assoc v :start (if (= :row-defs def-key)
                                                           [vc (if (< start-row vr) (inc vr) vr)]
                                                           [(if (< start-col vc) (inc vc) vc) vr]))))
          views (->> (concat (subvec views 0 index)
                             [(assoc sibling :size new-size-def)
                              {:id id
                               :start (if (= :row-defs def-key)
                                       [start-col (find-end (inc col-index) new-size defs)]
                                       [(find-end (inc col-index) new-size defs) start-row])
                               :size new-size-def}]
                             (cond->> (subvec views (inc index))
                               create-def?
                               move-if-needed))
                     (into []))]
      (assoc data def-key col-defs
             :views views))))

(defn ->css [{:keys [views col-defs row-defs]}]
  (str
    (str ".container { grid-template: "
         (->> row-defs (map #(str % "%")) (str/join " "))
         " / "
         (->> col-defs (map #(str % "vw")) (str/join " "))
         "; }\n")
    (->>
      views
      (map (fn [{[start-col start-row] :start [size-col size-row] :size id :id}]
             (let [end-col (find-end start-col size-col col-defs)
                   end-row (find-end start-row size-row row-defs)]
               (str "#" (name id) " { grid-area: " start-row " / " start-col " / " end-row " / " end-col "; }"))))
      (str/join "\n"))))

(defn new-view [id]
  (html [:div.view
          {:id (name id)}
          [:div.info [:span.id id] [:span.connection-status]]
          [:div.map] [:div.graph] [:div.vis] [:div.console] [:div.dashboard]]))

(defn update-styles! [styles]
  (let [stylesheet (js/document.getElementById "dashboard-styles")]
    (set! (.-innerHTML stylesheet) styles)))

(def direction-map
  {:vertical :col-defs
   :horizontal :row-defs})

(defn add-view!
  ([id] (add-view! id (some-> @view-info :views last) :vertical))
  ([id after direction]
    (when-not (contains? @components id)
      (let [$parent ($ "#dashboard")]
        (cond->> (new-view id)
          after (.after ($ (str "#" (name after))))
          (not after) (.append $parent))
        (layout/invalidate-sizes!)
        (->> (swap! view-info
               (fn [old-views]
                 (split id after (get direction-map direction) old-views)))
             ->css
             update-styles!)

        (swap! views assoc id (js/document.getElementById (name id)))
        (swap! components assoc id {})))))

(defn remove-view! [id]
  (swap! views dissoc id)
  (swap! components dissoc id)
  (.remove (js/document.querySelector (str "#" (name id))))
  (->> (swap! view-info
         (fn [old-views]
           ;; unsplit
           old-views))
       ->css
       update-styles!)
  (layout/invalidate-sizes!))


(defn rename-view! [id new-id]
  (when-not (contains? @components new-id)
    (let [view (js/document.getElementById (name id))]
      (.setAttribute view "id" (name new-id))
      (set! (.-innerHTML (.querySelector view ".id")) new-id)
      (swap! views clojure.set/rename-keys {id new-id})
      (swap! components clojure.set/rename-keys {id new-id}))))

(defn swap-view! [index another-index]
  (let [subject (-> ($ "#dashboard") (.children) (.get index) $)
        object (-> ($ "#dashboard") (.children) (.get another-index))]
    (.insertAfter subject object)))

(defn set-mode! [view mode]
  (let [p ($ (get @views view))]
    (.show (.find p (str "." (name mode))))
    (.hide (.find p (str "> div:not(." (name mode) ", .info)")))))

(defn list-views []
  (->> (keys @views)
       (map str)
       (into [])))

(comment
  (find-end 1 100 [50 25 25])
  (->>
    {}
    (split :view1 nil :col-defs)
    (split :view2 :view1 :col-defs)
    (split :view3 :view1 :row-defs)
    (split :view4 :view3 :col-defs)
    (split :view5 :view3 :col-defs)
    (split :view6 :view5 :row-defs)
    (split :view7 :view1 :col-defs)
    (split :view8 :view2 :row-defs)
    ->css
    update-styles!))

