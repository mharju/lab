(ns lab.codemirror
  (:require [clojure.string :as str]
            [goog.object :as gobj]
            [lab.eval :as evl]
            [lab.hud :as hud]
            ["codemirror" :as CodeMirror]
            ["codemirror/addon/hint/show-hint"]
            ["codemirror/mode/clojure/clojure"]
            ["/js/keymap/vim"]
            ["parinfer-codemirror" :as pcm])
  (:require-macros  [lab.core :refer [resolve-symbol]]))

(defonce cm-inst (atom nil))

(defn focus []
  (.focus @cm-inst))
(defn set-value [value]
  (.setValue @cm-inst value))
(defn get-value []
  (.getValue @cm-inst))
(defn get-cursor []
  (.getCursor @cm-inst))
(defn replace-range [content cursor]
  (.replaceRange @cm-inst content cursor))
(defn lines []
  (-> (.getValue @cm-inst)
      (str/split #"\n")))

(defn alternate-keys [form]
  (merge form
    (reduce-kv
      (fn [m k v]
        (assoc m (.replace k "Cmd" "Ctrl") v))
      {}
      form)))

(defn find-start-of-word [line ch]
  (->> (.substring line 0 ch)
       (reverse)
       (drop-while #(re-matches #"[\w\.\-\/:!\"]" %))
       count))

(defn get-completions [cm option]
  (js/Promise.
    (fn [accept]
      (let [cursor (.getCursor cm)
            line (.getLine cm (gobj/get cursor "line"))
            current-line (gobj/get cursor "line")
            end-ch (gobj/get cursor "ch")
            start-ch (find-start-of-word line end-ch)
            from {:line current-line :ch start-ch}
            word (.substring line start-ch end-ch)
            symbols (resolve-symbol word)]
        (accept (clj->js {:list symbols
                          :from from
                          :to cursor}))))))

(defn set-shortcuts! [cm]
  (letfn [(eval-form [cm] (evl/try-eval! cm :comment-evaled @evl/comment-evaled :hud-result @hud/hud-result :hud-duration @hud/hud-duration))
          (eval-top-form [cm] (evl/try-eval! cm :comment-evaled @evl/comment-evaled :top-form true :hud-result @hud/hud-result :hud-duration @hud/hud-duration))
          (eval-alt-form [cm] (evl/try-eval! cm :comment-evaled @evl/comment-evaled :hud-result (not @hud/hud-result)))
          (eval-alt-top-form [cm] (evl/try-eval! cm :comment-evaled @evl/comment-evaled :top-form true :hud-result (not @hud/hud-result)))
          (eval-editor [_] (-> (lines)
                               evl/eval-forms!))]
      (.setOption cm "extraKeys"
        (-> (alternate-keys {"Cmd-E"        eval-form
                             "Shift-Cmd-E"  eval-top-form
                             "Cmd-R"        eval-alt-form
                             "Shift-Cmd-R"  eval-alt-top-form
                             "Shift-Cmd-L"  eval-editor
                             "Ctrl-Space"   "autocomplete"})
            clj->js))))

(defn set-inst! [cm]
  (reset! cm-inst cm))

(defn init! []
  (let [cm (CodeMirror. (js/document.querySelector "#repl")
                     #js {:mode "clojure"
                          :lineNumbers false
                          :theme "solarized dark"})]
    (when (js/window.localStorage.getItem "vim-mode")
      (.setOption cm "keyMap" "vim"))
    (set-inst! cm)
    (pcm/init cm)
    (set-shortcuts! cm)
    (.setOption cm "hintOptions" #js {"hint" get-completions})
    cm))
