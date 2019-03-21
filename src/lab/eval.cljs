(ns lab.eval
  (:require [clojure.string :as string]
            [replumb.core :as rpl]
            [lab.io :as rpl-io]
            [lab.map :as m]
            [lab.graph :as g]
            [lab.console :as console]
            [lab.views :as v]
            [lab.vis :as vis]))

(defn- find-start-paren [cm cursor]
  (loop [{:keys [line ch]} cursor]
    (let [current-line (-> (.getLine cm line) string/reverse)
          length (count current-line)
          search-col (- length ch)
          index (.indexOf current-line "(" search-col)]
      (if (> index 0)
        {:line line :ch (- length index 1)}
        (when (pos? line) (recur {:line (dec line)
                                  :ch (count (.getLine cm (dec line)))}))))))

(defn- nth-of [line ch n]
  (loop [pos 0 match 0]
    (when (< pos (count line))
      (if (= (.charAt line pos) ch)
        (if (= (inc match) n)
          pos
          (recur (inc pos) (inc match)))
        (recur (inc pos) match)))))

(defn- find-end-paren [cm cursor]
  (loop [{:keys [line ch]} cursor open-paren-count 1 close-paren-count 0]
    (let [current-line (.getLine cm line)
          length (count current-line)
          open-paren-on-line (-> (re-seq #"\(" (.substring current-line ch)) count)
          close-paren-on-line (-> (re-seq #"\)" (.substring current-line ch)) count)
          open-paren-count (+ open-paren-count open-paren-on-line)
          close-paren-count (+ close-paren-count close-paren-on-line)]
      (if (<= (- open-paren-count close-paren-count) 0)
        (let [pos (nth-of current-line ")" open-paren-count)]
          {:line line :ch (cond-> pos
                            (< (count current-line) pos)
                            inc)})
        (when (< (inc line) (.lineCount cm))
          (recur {:line (inc line) :ch 0}
                 open-paren-count
                 close-paren-count))))))

(defn- current-form [cm]
  (let [cursor (.getCursor cm)
        cursor {:line (.-line cursor) :ch (.-ch cursor)}
        start (find-start-paren cm cursor)
        end (find-end-paren cm cursor)]
    (when (and start end)
      (.getRange cm (clj->js start) (clj->js end)))))

(defn try-eval! [cm & {:keys [comment-evaled] :or {comment-evaled true}}]
  (let [repl-opts (merge (rpl/options :browser
                           ["/js/compiled/out"]
                           rpl-io/fetch-file!)
                          {:warning-as-error false
                           :verbose true
                           :preloads {:require '#{[lab.map :as m]
                                                  [lab.core :as c]
                                                  [lab.graph :as g]
                                                  [lab.views :as v]
                                                  [lab.console :as console]
                                                  [lab.vis :as vis]}
                                      :require-macros '[[lab.macros :refer [with-view markers]]]}
                           :callback #(js/console.info "Result" %)})
        part (if-not (string/blank? (.getSelection cm))
               (.getSelection cm)
               (current-form cm))]
    (rpl/read-eval-call repl-opts
                        (fn [result]
                          (let [value (.getValue cm)
                                success (rpl/success? result)
                                result (rpl/unwrap-result result)
                                new-value (if (and success comment-evaled) (.replace value (js/RegExp "^([^;])" "gm") ";; $1") value)]
                            (.setValue cm (str new-value (if (> 80 (count value)) "\r\n" " ") "\n;; => " result "\n"))
                            (.setCursor cm (inc (.lastLine cm)) 0)))
                        part)))

(comment
  (let [cursor (.getCursor @lab.core/cm-inst)
        cursor {:line (.-line cursor) :ch (.-ch cursor)}
        start (find-start-paren @lab.core/cm-inst cursor)
        end (find-end-paren @lab.core/cm-inst cursor)]
    (js/console.log start end)
    (when (and start end)
      (.getRange @lab.core/cm-inst (clj->js start) (clj->js end)))))
