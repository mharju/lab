(ns lab.console
  (:require [clojure.string :as str]
            [lab.views :refer [components views set-mode!]]))

(defn console! [view]
  (set-mode! view :console))

(defn make-row [text]
  (str "<span class=\"row\"><span class=\"date\">" (.replace (.slice (.toISOString (js/Date.)) 0 -1) "T" " ") "</span>" (str/join " " text) "</span>"))

(defn find-element [view]
  (.find (js/$ (get-in @views [view])) ".console"))

(defn- map-to-table [m]
  (str "<table><tbody>"
       (str/join
         " "
         (mapv
           (fn [[k v]]
             (str "<tr><td>" k "</td><td>" (if (map? v)
                                             (map-to-table v)
                                             v) "</td></tr>"))
           m))
       "</table>"))

(defn make-table-row [m]
  (str "<span class=\"row\">
       <span class=\"date\">" (.replace (.slice (.toISOString (js/Date.)) 0 -1) "T" " ") "</span>"
       (map-to-table m)
       "</span>"))

(defn scroll-to-bottom! [view]
  (let [v (.get (find-element view) 0)]
    (set! (.-scrollTop v) (.-scrollHeight v))))

(defn append! [view & text]
  (.append (find-element view) (make-row text))
  (scroll-to-bottom! view))

(defn append-map! [view m]
  (.append (find-element view) (make-table-row m))
  (scroll-to-bottom! view))

(defn prepend! [view & text]
  (.prepend (find-element view) (make-row text)))

(defn prepend-map! [view m]
  (.prepend (find-element view) (make-table-row m)))

(defn clear! [view]
  (let [element (.find (js/$ (get-in @views [view])) ".console")]
    (.html element "")))

(comment
  (dotimes [_ 100]
    (append! :view-2 "Hello world"))

  (clear! :view)

  (do
    (console! :view)
    (clear! :view)
    (lab.core/connect!)
    (listen! "console" :view
      (fn [data] (append-to-console! :view data)))))
