(ns lab.core
  (:refer-clojure :exclude [ns-publics ns-resolve])
  (:require [hiccup.core :refer [html]]
            [clojure.string :as str]
            [clojure.java.io]
            [cljs.analyzer]
            [cljs.analyzer.api :refer [ns-publics ns-resolve]])
  (:import (java.io File)))

(def ns-list '[lab.map lab.graph lab.console lab.vis lab.core lab.views lab.dashboard lab.helpers])

(defn internal-symbols []
  (->>
    (doall
      (for [current-namespace ns-list
                              :let [fns (ns-publics current-namespace)]]
        (doall
          (for [[fn-name fn-info] (sort-by first fns)
                                  :let [fn-info (if (nil? fn-info) (get-in fn-info [:fn-var]) fn-info)]
                                  args (or (get-in fn-info [:top-fn :arglists])
                                           (second (get fn-info :arglists)))]
            (str current-namespace "/" fn-name)))))
    flatten
    (into [])))

(defmacro resolve-symbol [part]
  `(if-not (str/blank? ~part)
     (let [source# (cond
                     (str/starts-with? ~part ":")
                     (lab.views/list-views)

                     :else
                     ~(internal-symbols))]
       (filterv (fn [sym#]
                  (when (str/includes? sym# ~part)
                    sym#))
                source#))
     ~(internal-symbols)))

(defmacro render-help []
  (html
    [:div.help
      [:a.close "Close"]
      [:table
       [:thead
        [:tr
         [:th "Keyboard shortcut"] [:th "Description"]]]
       [:tbody
        [:tr
         [:td "Cmd-Shift-L"] [:td "Evaluate current editor content form by form."]]
        [:tr
         [:td "Cmd-(Shift)-E"] [:td "Evaluate (topmost) expression in current cursor position. Show result in HUD."]]
        [:tr
         [:td "Cmd-(Shift)-R"] [:td "Evaluate (topmost) expression in current cursor position. Append result to the next row in editor."]]
        [:tr
         [:td "Control-Space"] [:td "Get autosuggestions of built in functions and currently available view name keywords."]]
        [:tr
         [:td "Cmd-Shift-F"] [:td "Toggle Full REPL view."]]
        [:tr
         [:td "Cmd-(Shift)-Y"] [:td "Make REPL bigger / smaller"]]
        [:tr
         [:td "Cmd-G"] [:td "Toggle help."]]
        [:tr
         [:td "Cmd-H"] [:td "Toggle REPL visibility."]] [:tr [:td "Cmd-J"] [:td "Paste var content"]]]]
      (doall
        (for [current-namespace ns-list
                                :let [fns (ns-publics current-namespace)]]
          [:div.section
            [:h3 current-namespace]
            [:table
              (doall
                (for [part (->>
                             (for [[fn-name fn-info] (sort-by first fns)
                                                     :let [fn-info (if (nil? fn-info) (get-in fn-info [:fn-var]) fn-info)]
                                                     args (or (get-in fn-info [:top-fn :arglists])
                                                              (second (get fn-info :arglists)))]
                               [:td (when (:doc fn-info) {:class "has-doc"}) "(" fn-name (when args (str " " args))   ")"
                                    [:div.doc (:doc fn-info)]])
                             (partition 1)
                             (remove nil?))]
                  [:tr part]))]]))]))


(defn only-cljs-files
  [file-s]
  (filter #(and (clojure.string/ends-with? (.getPath %) ".cljs")) file-s))

(defn list-files [input-dir]
  (let [directory (clojure.java.io/file input-dir)]
    (->>
      (for [file (->> (file-seq directory)
                      (remove #(str/includes? % "private"))
                      only-cljs-files)]
          (.getPath file))
      (into []))))

(defn sessions []
  (->> (list-files "src/lab/experiments")
       (mapv (fn [file]
               [(keyword (-> (str/split file #"\.")
                             (first)
                             (str/split #"/")
                             (last)))
                (slurp file)]))
       (into {})))

(defmacro default-sessions []
  (sessions))
