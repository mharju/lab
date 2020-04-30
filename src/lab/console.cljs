(ns lab.console
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [clojure.string :as str]
            [lab.views :refer [components views set-mode!]]))

(defn console! [view]
  (set-mode! view :console))

(defn make-row [text]
  [:span.row
   [:span.date (.replace (.slice (.toISOString (js/Date.)) 0 -1) "T" " ")]
   text])

(defn find-element [view]
  (.find (js/$ (get-in @views [view])) ".console"))

(defn- map-to-table [m]
  [:table.map
   (->> m
        (mapv
          (fn [[k v]]
            [:tr
             [:td k]
             (if (map? v)
               (into [:td] (map-to-table v))
               [:td (str v)])]))
        (into [:tbody]))])

(defn make-table-row [m]
  (conj
    [:span.row
     [:span.date (.replace (.slice (.toISOString (js/Date.)) 0 -1) "T" " ")]]
    (map-to-table m)))

(defn scroll-to-bottom! [view]
  (let [v (.get (find-element view) 0)]
    (set! (.-scrollTop v) (.-scrollHeight v))))

(defn append! [view & text]
  (.append (find-element view) (html (make-row text)))
  (scroll-to-bottom! view))

(defn append-map! [view m]
  (.append (find-element view) (html (make-table-row m)))
  (scroll-to-bottom! view))

(defn append-vec! [view v & {:keys [titles]}]
  (let [titles (if titles
                 titles
                 (mapv str (range (count (first v)))))]
    (.append
      (find-element view)
      (html
        [:span.row
         [:span.date (.replace (.slice (.toISOString (js/Date.)) 0 -1) "T" " ")]
         [:table.vec
          (->> titles
               (mapv (fn [h] [:th h]) )
               (into [:thead]))
          (->> v
               (mapv (fn [row]
                       (into [:tr]
                             (mapv
                               (fn [c] [:td c])
                               (if (map? row)
                                 (vals row)
                                 row)))))
               (into [:tbody]))]]))))

(defn prepend! [view & text]
  (.prepend (find-element view) (html (make-row text))))

(defn prepend-map! [view m]
  (.prepend (find-element view) (html (make-table-row m))))

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
