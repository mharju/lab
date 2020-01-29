(ns lab.views
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [hiccups.runtime]
            [cljsjs.jquery]
            [clojure.set]))

(defonce views (atom {}))
(defonce components (atom {}))

(defn add-view!
  ([id] (add-view! (js/document.querySelector "#dashboard") id))
  ([parent id]
    (when-not (contains? @components id)
      (let [template (html [:div.view {:id (name id)}
                               [:div.info [:span.id id] [:span.connection-status]]
                               [:div.map] [:div.graph] [:div.vis] [:div.console]])]
        (.append (js/$ parent) template)
        (.attr (js/$ parent) "class" (str "n-" (inc (count @views))))
        (swap! views assoc id (js/document.getElementById (name id)))
        (swap! components assoc id {})))))

(defn remove-view! [id]
  (swap! views dissoc id)
  (swap! components dissoc id)
  (.attr (js/$ "#dashboard") "class" (str "n-" (count @views)))
  (.remove (js/document.querySelector (str "#" (name id)))))

(defn rename-view! [id new-id]
  (when-not (contains? @components new-id)
    (let [view (js/document.getElementById (name id))]
      (.setAttribute view "id" (name new-id))
      (set! (.-innerHTML (.querySelector view ".id")) new-id)
      (swap! views clojure.set/rename-keys {id new-id})
      (swap! components clojure.set/rename-keys {id new-id}))))

(defn swap-view! [index another-index]
  (let [subject (-> (js/$ "#dashboard") (.children) (.get index) js/$)
        object (-> (js/$ "#dashboard") (.children) (.get another-index))]
    (.insertAfter subject object)))

(defn set-mode! [view mode]
  (let [p (js/$ (get @views view))]
    (.show (.find p (str "." (name mode))))
    (.hide (.find p (str "> div:not(." (name mode) ", .info)")))))
