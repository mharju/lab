(ns lab.core
  (:refer-clojure :exclude [ns-publics ns-resolve])
  (:require [hiccup.core :refer [html]]
            [cljs.analyzer]
            [cljs.analyzer.api :refer [ns-publics ns-resolve]]))

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
                                   [:td "(" fn-name (when args (str " " args))   ")"])
                               (partition 1)
                               (remove nil?))]
                    [:tr part]))]]))])))
