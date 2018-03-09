(ns lab.eval
  (:require [clojure.string :as string]
            [replumb.core :as rpl]
            [lab.io :as rpl-io]
            [lab.map :as m]
            [lab.graph :as g]
            [lab.console :as console]
            [lab.views :as v]
            [lab.vis :as vis]))

(defn try-eval! [cm & {:keys [comment-evaled] :or {comment-evaled true}}]
  (let [repl-opts (merge (rpl/options :browser
                           ["/js/compiled/out"]
                           rpl-io/fetch-file!)
                          {:warning-as-error false
                           :preloads {:require '#{[lab.map :as m]
                                                  [lab.core :as c]
                                                  [lab.graph :as g]
                                                  [lab.views :as v]
                                                  [lab.console :as console]
                                                  [lab.vis :as vis]}}
                           :callback #(js/console.info "Result" %)})
        part (if-not (string/blank? (.getSelection cm)) (.getSelection cm) (.getValue cm))]
    (rpl/read-eval-call repl-opts
                        (fn [result]
                          (let [value (.getValue cm)
                                success (rpl/success? result)
                                result (rpl/unwrap-result result)
                                new-value (if (and success comment-evaled) (.replace value (js/RegExp "^([^;])" "gm") ";; $1") value)]
                            (.setValue cm (str new-value (if (> 80 (count value)) "\r\n" " ") "\n;; => " result "\n"))
                            (.setCursor cm (inc (.lastLine cm)) 0)))
                        part)))
