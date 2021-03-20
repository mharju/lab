(ns lab.eval
  (:require [clojure.string :as string]
            [goog.object :as gobj]
            [shadow.cljs.bootstrap.browser :as boot]
            [cljs.js :as cljs]
            [cljs.env :as env]
            [lab.parsing :as parsing]
            [lab.hud :as hud]
            [lab.session :as session]))

(defonce compile-state-ref (env/default-compiler-env))

(defonce comment-evaled
  (let [stored (js/JSON.parse (.getItem js/localStorage "comment_evaled"))]
    (atom (if-not (nil? stored) stored false))))

(defn toggle-comment-evaled! []
  (swap! comment-evaled not)
  (.setItem js/localStorage "comment_evaled" @comment-evaled))

(defn eval!
  ([value]
   (eval!
     value
     (fn [{:keys [value] :as result}]
          (js/console.log result)
          (hud/show! (if (string/blank? value) result (str value))))))
  ([value complete-fn]
    (cljs/eval-str
      compile-state-ref
      value
      "[test]"
      {:eval cljs/js-eval
       :load (partial boot/load compile-state-ref)}
      complete-fn)))

(defn eval-forms! [lines]
  (doseq [form (parsing/lines->forms lines)]
    (js/console.log "Eval" form)
    (eval! form)))

(defn try-eval! [cm & {:keys [comment-evaled top-form hud-result hud-duration after] :or {comment-evaled true top-form false hud-result false hud-duration 3000 after identity}}]
  (let [cursor-pos (.getCursor cm)
        cursor {:line (gobj/get cursor-pos "line") :ch (gobj/get cursor-pos "ch")}
        part (cond
               (not (string/blank? (.getSelection cm))) (.getSelection cm)
               top-form (parsing/get-top-form cm cursor)
               :else (parsing/get-current-form cm cursor))]
    (eval!
      part
      (fn [{:keys [value error] :as result}]
        (let [editor-content (.getValue cm)
              success (boolean (not error))
              value (cond (and success (string/blank? value)) 
                          "OK" 

                          (and (not success) (string/blank? value))
                          "See console"

                          :else
                          value)
              new-editor-content (if (and success comment-evaled) (.replace editor-content (js/RegExp "^([^;])" "gm") ";; $1") editor-content)]
          (js/console.log result)
          (if (not success)
            (js/alert error)
            (if-not hud-result
              (do
                (.setValue cm (str new-editor-content "\n;; => " value "\n"))
                (.setCursor cm (.lineCount cm) 1))
              (do
                (hud/show! (str value) :duration hud-duration)
                (.setCursor cm cursor-pos))))
          (after part result))))
    part))

(boot/init compile-state-ref
           {:path "js/bootstrap"}
           (fn []
             (js/console.info "Bootstrap ready. Evaluating default")
             (eval! "(ns cljs.user
                       (:require [lab.map :as m]
                                 [lab.graph :as g]
                                 [lab.console :as c]
                                 [lab.vis :as v]
                                 [lab.views :as views]
                                 [lab.helpers :as h]
                                 [lab.dashboard :as d]
                                 [lab.autodetect]))")))
