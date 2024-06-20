(ns lab.codemirror
  (:require [clojure.string :as str]
            [lab.completion :as c]
            ["codemirror" :as CodeMirror]
            ["codemirror/addon/hint/show-hint"]
            ["codemirror/mode/clojure/clojure"]
            ["/js/keymap/vim"]
            ["parinfer-codemirror" :as pcm]))

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
    (.setOption cm "hintOptions" #js {"hint" c/get-completions})
    cm))
