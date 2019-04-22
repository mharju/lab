(ns lab.eval
  (:require [clojure.string :as string]
            [replumb.core :as rpl]
            [lab.io :as rpl-io]
            [lab.map :as m]
            [lab.graph :as g]
            [lab.console :as console]
            [lab.views :as v]
            [lab.vis :as vis]
            [lab.hud :as hud]
            [goog.object :as gobj]))

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

(defn- nth-of [line ch n pos]
  (loop [pos (or pos 0) match 0]
    (when (< pos (count line))
      (if (= (.charAt line pos) ch)
        (if (= (inc match) n)
          pos
          (recur (inc pos) (inc match)))
        (recur (inc pos) match)))))

(defn- match-parens [counter line]
  (reduce
    (fn [{:keys [counter pos]} ch]
      (let [counter (cond
                       (= ch "(") (inc counter)
                       (= ch ")") (dec counter)
                       :else counter)]
        (if (zero? counter)
          (reduced {:success true :pos pos})
          {:counter counter :pos (inc pos)})))
    {:counter counter :pos 0}
    line))

(defn- find-end-paren [cm cursor]
  (loop [{:keys [line ch]} cursor counter 1]
    (let [current-line (.substring (.getLine cm line) ch)
          {:keys [success counter pos]} (match-parens counter current-line)]
     (if success
       {:line line :ch (+ pos ch 1)}
       (when (< (inc line) (.lineCount cm))
         (recur
           {:line (inc line) :ch 0}
           counter))))))

(defn- get-current-form [cm]
  (let [cursor (.getCursor cm)
        cursor {:line (gobj/get cursor "line") :ch (gobj/get cursor "ch")}
        start (find-start-paren cm cursor)
        end (find-end-paren cm cursor)]
    (when (and start end)
      (.getRange cm (clj->js start) (clj->js end)))))

(defn- find-top-form [cm cursor]
  (loop [{:keys [line]} cursor]
    (let [current-line (.getLine cm line)]
      (if (.startsWith current-line "(")
        {:line line :ch 1}
        (when (pos? (dec line)) (recur {:line (dec line) :ch 0}))))))

(defn- get-top-form [cm]
  (let [cursor (.getCursor cm)
        cursor {:line (gobj/get cursor "line") :ch (gobj/get cursor "ch")}
        cursor (find-top-form cm cursor)
        start (find-start-paren cm cursor)
        end (find-end-paren cm cursor)]
    (when (and start end)
      (.getRange cm (clj->js start) (clj->js end)))))

(def repl-opts
  (merge (rpl/options :browser
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
          :callback #(js/console.info "Result" %)}))

(defn eval! [value]
  (rpl/read-eval-call repl-opts
                        (fn [result]
                          (hud/show! (rpl/unwrap-result result)))
                        value))

(defn try-eval! [cm & {:keys [comment-evaled top-form hud-result] :or {comment-evaled true top-form false hud-result false}}]
  (let [cursor-pos (.getCursor cm)
        part (cond
               (not (string/blank? (.getSelection cm))) (.getSelection cm)
               top-form (get-top-form cm)
               :else (get-current-form cm))]
    (rpl/read-eval-call repl-opts
                        (fn [result]
                          (let [value (.getValue cm)
                                success (rpl/success? result)
                                result (rpl/unwrap-result result)
                                new-value (if (and success comment-evaled) (.replace value (js/RegExp "^([^;])" "gm") ";; $1") value)]
                            (if (not success)
                              (let [message (.-message result)
                                    cause (.-cause result)]
                                (js/alert (str message ": " cause)))
                              (if-not hud-result
                                (.setValue cm (str new-value (if (> 80 (count value)) "\r\n" " ") "\n;; => " result "\n"))
                                (hud/show! result)))
                            (.setCursor cm cursor-pos)))
                        part)))

(comment
  (let [cursor (.getCursor @lab.core/cm-inst)
        cursor {:line (gobj/get cursor "line") :ch (gobj/get cursor "ch")}
        top-form (find-top-form @lab.core/cm-inst cursor)
        start (find-start-paren @lab.core/cm-inst top-form)
        end (find-end-paren @lab.core/cm-inst top-form)]
    (js/console.log "top form at line" top-form start end)
    (when (and start end)
      (.getRange @lab.core/cm-inst (clj->js start) (clj->js end)))))
