(ns lab.dashboard
  (:require-macros [hiccups.core :as hiccups])
  (:require [lab.views :as v]
            [hiccups.runtime]
            [goog.object :as gobj]))

(defn dashboard! [view]
  (v/set-mode! view :dashboard))

(defn metric! [view id value & {:keys [title unit]}]
  (when-not (.querySelector js/document (str ".metric." (name id)))
    (.insertAdjacentHTML
      (.querySelector (get @v/views view) ".dashboard")
      "beforeend"
      (hiccups/html
        (cond-> [:div {:class (str "metric " (name id))}]
          title   (conj [:div.title title])
          :always (conj [:div.value value])
          unit    (conj [:div.unit unit]))))))

(defn update! [view id value]
  (gobj/set
    (.querySelector (get @v/views view) (str ".dashboard .metric." (name id) " .value"))
    "innerHTML"
    value))

(defn clear! [view]
  (gobj/set (.querySelector (get @v/views view) ".dashboard") "innerHTML" ""))

(comment
  (dashboard! :view)
  (metric! :view :mik "10" :title "Web" :unit "req/s")
  (metric! :view :sep "129" :title "Mobile" :unit "req/s")
  (update! :view :mik "21")
  (clear! :view))

