(ns lab.eval
  (:require [clojure.string :as string]
            [goog.object :as gobj]
            [shadow.cljs.bootstrap.browser :as boot]
            [cljs.js :as cljs]
            [cljs.env :as env]
            [lab.parsing :as parsing]
            [lab.hud :as hud]))

(defonce compile-state-ref (env/default-compiler-env))

(defn eval! [value]
  (cljs/eval-str
    compile-state-ref
    value
    "[test]"
    {:eval cljs/js-eval
     :load (partial boot/load compile-state-ref)}
    (fn [{:keys [value]}]
      (hud/show! (if (string/blank? value) "OK" (str value))))))

(defn eval-forms! [lines]
  (doseq [form (parsing/lines->forms lines)]
    (js/console.log "Eval" form)
    (eval! form)))

(defn try-eval! [cm & {:keys [comment-evaled top-form hud-result hud-duration] :or {comment-evaled true top-form false hud-result false hud-duration 3000}}]
  (let [cursor-pos (.getCursor cm)
        cursor {:line (gobj/get cursor-pos "line") :ch (gobj/get cursor-pos "ch")}
        part (cond
               (not (string/blank? (.getSelection cm))) (.getSelection cm)
               top-form (parsing/get-top-form cm cursor)
               :else (parsing/get-current-form cm cursor))]
    (cljs/eval-str
      compile-state-ref
      part
      "[test]"
      {:eval cljs/js-eval
       :load (partial boot/load compile-state-ref)}
      (fn [{:keys [value error] :as result}]
        (let [editor-content (.getValue cm)
              success (boolean (not error))
              value (if (string/blank? value) "OK" value)
              new-editor-content (if (and success comment-evaled) (.replace editor-content (js/RegExp "^([^;])" "gm") ";; $1") editor-content)]
          (js/console.log result)
          (if (not success)
            (js/alert error)
            (if-not hud-result
              (do
                (.setValue cm (str new-editor-content (if (> 80 (count editor-content)) "\r\n" " ") "\n;; => " value "\n"))
                (.setCursor cm (.lineCount cm) 1))
              (do
                (hud/show! (str value) :duration hud-duration)
                (.setCursor cm cursor-pos)))))))
    part))

(boot/init compile-state-ref
           {:path "js/bootstrap"}
           (fn []
             (eval! "(do
                      (require '[lab.map :as m])
                      (require '[lab.graph :as g])
                      (require '[lab.console :as c])
                      (require '[lab.vis :as v])
                      (require '[lab.views :as views])
                      (require '[lab.dashboard :as d]))")))
