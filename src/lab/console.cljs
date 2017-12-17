(ns lab.console
  (:require [lab.views :refer [components views set-mode!]]))

(defn console! [view]
  (set-mode! view :console)
  (let [element (.find (js/$ (get-in @views [view])) ".console")]
    (.css element #js {:height js/window.innerHeight})))

(defn append! [view text]
  (let [element (.find (js/$ (get-in @views [view])) ".console")]
    (.append element (str "<span class=\"row\"><span class=\"date\">" (.replace (.slice (.toISOString (js/Date.)) 0 -1) "T" " ") "</span> " text "</span>"))))

(defn clear! [view]
  (let [element (.find (js/$ (get-in @views [view])) ".console")]
    (.html element "")))

(comment
  (dotimes [n 100]
    (append! :view-2 "Hello world"))
  (clear! :view)

  (do
    (console! :view)
    (clear! :view)
    (lab.core/connect!)
    (listen! "console" :view
      (fn [data] (append-to-console! :view data)))))

