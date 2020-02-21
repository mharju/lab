(ns lab.core
  (:refer-clojure :exclude [ns-publics ns-resolve])
  (:require [hiccup.core :refer [html]]
            [clojure.string :as str]
            [cljs.analyzer]
            [cljs.analyzer.api :refer [ns-publics ns-resolve]]))

(def symbols
  (let [ns-list '[lab.map lab.graph lab.console lab.vis lab.core]]
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
      (into []))))

(defmacro resolve-symbol [part]
  `(if-not (str/blank? ~part)
     (filterv (fn [sym#]
              (when (str/includes? sym# ~part)
                sym#))
     ~symbols)
     ~symbols))

(defmacro render-help []
  (let [ns-list '[lab.map lab.graph lab.console lab.vis lab.core]]
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
                    [:tr part]))]]))])))
