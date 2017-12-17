(ns lab.views
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [hiccups.runtime]
            [cljsjs.jquery]))

(defonce views (atom {}))
(defonce components (atom {}))

(defn add-view!
  ([id] (add-view! (js/document.querySelector "body") id))
  ([parent id]
    (let [template (html [:div.view {:id (name id)}
                             [:div.info [:span.id id] [:span.connection-status]]
                             [:div.map] [:div.graph] [:div.vis] [:div.console]])]
      (.append (js/$ parent) template)
      (swap! views assoc id (js/document.getElementById (name id)))
      (swap! components assoc id {}))))

(defn remove-view! [id]
  (swap! views dissoc id)
  (swap! components dissoc id)
  (.remove (js/document.querySelector (str "#" (name id)))))

(defn rename-view! [id new-id]
  (let [view (js/document.getElementById (name id))]
    (.setAttribute view "id" (name new-id))
    (set! (.-innerHTML (.querySelector view ".id")) new-id)
    (swap! views clojure.set/rename-keys {id new-id})
    (swap! components clojure.set/rename-keys {id new-id})))

(defn set-mode! [view mode]
  (let [p (js/$ (get @views view))]
    (do  (.show (.find p (str "." (name mode))))
         (.hide (.find p (str "> div:not(." (name mode) ", .info)"))))))

