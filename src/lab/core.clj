(ns lab.core
  (:refer-clojure :exclude [ns-publics ns-resolve])
  (:require [hiccup.core :refer [html]]
            [clojure.string :as str]
            [clojure.java.io]
            [cljs.analyzer]
            [cljs.analyzer.api :refer [ns-publics ns-resolve]])
  (:import (java.io File)))

(def ns-list '[lab.map lab.graph lab.console lab.vis lab.core lab.views])

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
      (for [file (only-cljs-files (file-seq directory))]
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
