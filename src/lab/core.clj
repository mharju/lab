(ns lab.core
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
                  (for [part (partition 1
                               (remove nil?
                                 (for [[fn-name fn-info] fns]
                                   (when (get-in fn-info [:fn-var])
                                     [:td fn-name " " #_(str
                                                         (first (or (get-in fn-info [:top-fn :arglists])
                                                                    (second (get fn-info :arglists)))))]))))]
                    [:tr part]))]]))])))

(defmacro with-view [& body]
  `(do
     ~@(for [[f & params] body]
         (cons f (cons :view params)))))
