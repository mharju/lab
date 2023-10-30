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

(defn split! [id after def-key {views :views :as data}]
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

(defn find-view-info
  ([id]
   (find-view-info id (:views @view-info)))
  ([id views]
   (->> views
        (filter (comp (partial = id) :id))
        first)))

(defn- siblings [pred {:keys [views row-defs col-defs]} id]
  (let [{[start-col-target start-row-target] :start [size-col-target size-row-target] :size id :id}
        (find-view-info id views)
        end-col-target (find-end start-col-target size-col-target col-defs)
        end-row-target (find-end start-row-target size-row-target row-defs)]
    (->>
      views
      (filterv
        (fn [{[start-col start-row] :start [size-col size-row] :size id' :id}]
          (let [end-col (find-end start-col size-col col-defs)
                end-row (find-end start-row size-row row-defs)]
            (and (not= id' id)
                 (pred [start-col end-col start-row end-row]
                       [start-col-target end-col-target start-row-target end-row-target])))))
      (mapv :id)
      (into #{}))))

(def left-siblings
  (partial siblings (fn [[_ end-col start-row end-row]
                         [start-col-target _ start-row-target end-row-target]]
                      (and (= end-col start-col-target)
                           (<= start-row-target start-row end-row end-row-target)))))
(def right-siblings
  (partial siblings (fn [[start-col _ start-row end-row]
                         [_ end-col-target start-row-target end-row-target]]
                      (and (= start-col end-col-target)
                           (<= start-row-target start-row end-row end-row-target)))))
(def up-siblings
  (partial siblings (fn [[start-col end-col _ end-row]
                         [start-col-target end-col-target start-row-target _]]
                      (and (= end-row start-row-target)
                           (<= start-col-target start-col end-col end-col-target)))))
(def down-siblings
  (partial siblings (fn [[start-col end-col start-row _]
                         [start-col-target end-col-target _ end-row-target]]
                      (and (= start-row end-row-target)
                           (<= start-col-target start-col end-col end-col-target)))))

  ;; Expand direction always "up" and "left"
(defn unsplit-left [{views :views :as data col-defs :col-defs row-defs :row-defs} id]
  (if (= (count views) 2)
    {:views [{:id (->> views (remove (comp (partial = id) :id)) first :id) :size [100 100] :start [1 1]}] :col-defs [100] :row-defs [100]}
    (let [grow      (left-siblings {:views views :col-defs col-defs :row-defs row-defs} id)
          [is-left? grow] (if (seq grow)
                            [true grow]
                            [false (right-siblings {:views views :col-defs col-defs :row-defs row-defs} id)])
          [grow-size _] (->> (find-view-info id views)
                             :size)
          views     (->> views
                         (map (fn [{:keys [id] [w h] :size [sx sy] :start :as v}]
                                (if (contains? grow id)
                                  (assoc v
                                         :size [(+ w grow-size) h]
                                         :start (if is-left? [sx sy] [(dec sx) sy]))
                                  v)))
                         (remove (comp (partial = id) :id)) vec)]
      (assoc data
             :views    views
             :row-defs row-defs
             :col-defs col-defs))))

(defn unsplit-up [{views :views :as data col-defs :col-defs row-defs :row-defs} id]
  (if (= (count views) 2)
    {:views [{:id (->> views (remove (comp (partial = id) :id)) first :id) :size [100 100] :start [1 1]}] :col-defs [100] :row-defs [100]}
    (let [grow      (up-siblings {:views views :col-defs col-defs :row-defs row-defs} id)
          [is-up? grow] (if (seq grow)
                            [true grow]
                            [false (down-siblings {:views views :col-defs col-defs :row-defs row-defs} id)])
          [_ grow-size] (->> views
                             (filter (comp (partial = id) :id))
                             first
                             :size)
          views     (->> views
                         (map (fn [{:keys [id] [w h] :size [sx sy] :start :as v}]
                                (if (contains? grow id)
                                  (assoc v
                                         :size [w (+ h grow-size)]
                                         :start (if is-up? [sx sy] [sx (dec sy)]))
                                  v)))
                         (remove (comp (partial = id) :id)) vec)]
      (assoc data
             :views    views
             :row-defs row-defs
             :col-defs col-defs))))

(defn unsplit [views id]
  (let [up-sib    (-> (up-siblings views id) count)
        down-sib  (-> (down-siblings views id) count)
        left-sib  (-> (left-siblings views id) count)
        right-sib (-> (right-siblings views id) count)]
    (println left-sib right-sib up-sib down-sib)
    (if (or (pos? left-sib) (pos? right-sib))
      (do (println "left/right it is!") (unsplit-left views id))
      (do (println "up/down it is!") (unsplit-up views id)))))

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

(defn ->element [html]
  (let [container (js/document.createElement "div")]
    (set! (.-innerHTML container) html)
    (.-firstChild container)))

(defn update-styles! [styles]
  (let [stylesheet (js/document.getElementById "dashboard-styles")]
    (set! (.-innerHTML stylesheet) styles)))

(def direction-map
  {:vertical :col-defs
   :horizontal :row-defs})

(defn set-views! [& {:keys [col-defs row-defs] declared-views :views}]
  (let [parent (js/document.getElementById "dashboard")]
    (set! (.-innerHTML parent) "")
    (doseq [{:keys [id]} declared-views]
      (.appendChild parent (-> (new-view id) ->element))
      (swap! views assoc id (js/document.getElementById (name id)))
      (swap! components assoc id {}))
    (->> (reset! view-info {:views declared-views :row-defs row-defs :col-defs col-defs})
         ->css
         update-styles!)))

(defn add-view!
  ([id] (add-view! id (some-> @view-info :views last :id) :vertical))
  ([id after] (add-view! id after :vertical))
  ([id after direction]
    (when-not (contains? @components id)
      (let [$parent ($ "#dashboard")]
        (cond->> (new-view id)
          after (.after ($ (str "#" (name after))))
          (not after) (.append $parent))
        (layout/invalidate-sizes!)
        (->> (swap! view-info
               (fn [old-views]
                 (split! id after (get direction-map direction) old-views)))
             ->css
             update-styles!)

        (swap! views assoc id (js/document.getElementById (name id)))
        (swap! components assoc id {})))))

(defn remove-view! [id]
  (swap! views dissoc id)
  (swap! components dissoc id)
  (.remove (js/document.querySelector (str "#" (name id))))
  (->> (swap! view-info unsplit id)
       ->css
       update-styles!)
  (layout/invalidate-sizes!))

(defn rename-view! [id new-id]
  (when-not (contains? @components new-id)
    (let [view (js/document.getElementById (name id))]
      (.setAttribute view "id" (name new-id))
      (set! (.-innerHTML (.querySelector view ".id")) new-id)
      (swap! views clojure.set/rename-keys {id new-id})
      (swap! components clojure.set/rename-keys {id new-id})
      (swap! view-info (fn [old-info]
                         (assoc old-info :views
                                (mapv (fn [{id' :id :as data}]
                                        (if (= id id')
                                          (assoc data :id new-id)
                                          data))
                                      (:views old-info))))))))

(defn swap-view! [id another-id]
  (let [view-data (find-view-info id)
        another-data (find-view-info another-id)]
    (->> (swap! view-info (fn [{:keys [views] :as old-info}]
                            (assoc old-info :views
                                   (->>
                                     (map
                                       (fn [{id' :id :as data}]
                                         (cond (= id' another-id)
                                               (assoc data :size (:size view-data) :start (:start view-data))

                                               (= id' id)
                                               (assoc data :size (:size another-data) :start (:start another-data))

                                               :else
                                               data))
                                       views)
                                     (sort-by :start)))))
         ->css
         update-styles!)))

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
  (let [views    [{:id :view-1 :size [50 100] :start [1 1]}
                  {:id :view-2 :size [25 100] :start [2 1]}
                  {:id :view-3 :size [25 100] :start [3 1]}]
        col-defs  [50 25 25]
        row-defs  [100]
        id        :view-2]
      (unsplit-left {:views views :col-defs col-defs :row-defs row-defs} id))

  (unsplit {:views
            [{:id :data :size [30 100] :start [1 1]}
             {:id :dash :size [70 25] :start [2 1]}
             {:id :table :size [70 75] :start [2 2]}]
            :row-defs [25 75]
            :col-defs [30 70]}
     :data)

  (->>
    {}
    (split! :view1 nil :col-defs)
    (split! :view2 :view1 :col-defs)
    (split! :view3 :view1 :row-defs)
    (split! :view4 :view3 :col-defs)
    (split! :view5 :view3 :col-defs)
    (split! :view6 :view5 :row-defs)
    (split! :view7 :view1 :col-defs)
    (split! :view8 :view2 :row-defs)
    ->css
    update-styles!))

