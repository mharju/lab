(ns lab.core
  (:require [clojure.string :as str]
            [cljs.pprint]
            [goog.object :as gobj]
            ["jquery" :as $]
            ["codemirror" :as CodeMirror]
            ["codemirror/addon/hint/show-hint"]
            ["codemirror/mode/clojure/clojure"]
            ["/js/keymap/vim"]
            ["parinfer-codemirror" :as pcm]
            [lab.eval :as evl]
            [lab.views :refer [add-view!]]
            [lab.layout :as layout]
            [lab.map :refer [map!]]
            [lab.codemirror :as cm]
            [lab.autodetect :as autodetect]
            [lab.hud :as hud]
            [lab.graph]
            [lab.vis]
            [lab.console]
            [lab.dashboard]
            [lab.parsing]
            [lab.helpers])
  (:require-macros  [lab.core :refer [render-help resolve-symbol default-sessions]]))

(enable-console-print!)

(defonce data-connection (atom {:ws nil :listeners {}}))

(defn listen! [id target-view listener]
  (let [selector (str "#" (name target-view) " .connection-status")]
    (.addClass ($ selector) "connected")
    (swap! data-connection assoc-in [:listeners id] listener)))

(defn connect! [{:keys [host port] :or {host "localhost" port 7889}}]
  (when-let [{:keys [ws]} @data-connection]
    (if-not (nil? ws)
      ws
      (swap! data-connection assoc :ws
        (let [s (js/WebSocket. (str "ws://" host ":" port))]
          (set!  (.-onopen s) #(.log js/console "Data socket opened at ws://" host ":" port))
          (set!  (.-onmessage s) (fn [e]
                                   (let [{:strs [id data] :or {id "unknown" data nil}} (js->clj (.parseJSON $(.-data e)))
                                         listener (get-in @data-connection [:listeners id])]
                                     (when listener
                                       (apply listener [data])))))
          s)))))

;; editor functions

(defn on-draw-created [e]
  (let [layer-type (.-layerType e)
        layer (.-layer e)
        cursor (cm/get-cursor)
        geometry (cond
                   (= layer-type "marker")
                   (let [ll (.getLatLng layer)]
                       (str (.-lat ll) " " (.-lng ll)))

                   :else
                   (with-out-str
                     (cljs.pprint/pprint
                       (->>
                         (js->clj (.getLatLngs layer) :keywordize-keys true)
                         ((fn [latlngs]
                            (if (vector? (first latlngs))
                              (first latlngs)
                              latlngs)))
                         (mapv #(vector (:lat %) (:lng %)))))))]
    (cm/replace-range geometry cursor)))

(defn toggle-help! []
  (.toggle ($ ".help")))

(defonce comment-evaled
  (let [stored (js/JSON.parse (.getItem js/localStorage "comment_evaled"))]
    (atom (if-not (nil? stored) stored false))))

(defn toggle-comment-evaled! []
  (swap! comment-evaled not)
  (.setItem js/localStorage "comment_evaled" @comment-evaled))

(defonce hud-result
  (let [stored (js/JSON.parse (.getItem js/localStorage "hud_result"))]
    (atom (if-not (nil? stored) stored true))))

(defonce hud-duration
  (let [stored (js/JSON.parse (.getItem js/localStorage "hud_duration"))]
    (atom (if-not (nil? stored) stored 3000))))

(defn toggle-hud-result!
  "Eval to show the evaluation results in HUD instead of writing it to the console."
  []
  (->> (swap! hud-result not)
       (.setItem js/localStorage "hud_result")))

(defn set-hud-duration!
  "Set the duration in milliseconds the HUD will be shown (needs hud-result to be true)"
  [duration]
  (->> (reset! hud-duration duration)
       (.setItem js/localStorage "hud_duration")))

(defn paste! []
  (->
    ($ "#pasteboard")
    (.show)
    (.addClass "visible")
    (.find "input[type=\"text\"]")
    (.focus)))

(def help-text
";; Eval (lab.core/toggle-help!) for help. Cmd-(Shift)-(E|R) Eval current (topmost) expression.
;; Cmd-J for pasting content as vars. Ctrl-Space for autocomplete.\n" )
(def save-session-proto
  #"\(lab.core/save-session\!.*\)")

(def sessions (default-sessions))
(def session-names (mapv name (keys sessions)))
(defonce loaded-session (atom "default"))

(defn list-sessions! []
  (->>
    (js/Object.keys js/window.localStorage)
    (js->clj)
    (filterv (fn [item]
               (str/starts-with? item "session-")))
    (mapv (fn [item] (subs item (count "session-"))))
    (into session-names)))

(defn save-session! [name]
  (.setItem
    js/window.localStorage
    (str "session-" name)
    (-> (cm/get-value)
        (.replace help-text "")
        (.replace save-session-proto "")
        (js/JSON.stringify))))

(defn maybe-save-default! [form]
  (when (and (= @loaded-session "default")
             (not (re-find #"session\!" form)))
    (save-session! "default")))

(defn delete-session! [name]
  (.removeItem js/window.localStorage (str "session-" name)))

(defn load-session! [name]
  (reset! loaded-session name)
  (if ((set session-names) name)
    (->> (get sessions (keyword name))
         (lab.parsing/normalize-session)
         (str help-text)
         cm/set-value)
    (some->> (or (.getItem js/window.localStorage (str "session-" name)) "\"\"")
             js/JSON.parse
             (str help-text)
             cm/set-value)))

(defn find-start-of-word [line ch]
  (->> (.substring line 0 ch)
       (reverse)
       (drop-while #(re-matches #"[\w\.\-\/:!]" %))
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

(declare reset-pasteboard!)
(defn- handle-key [e]
  (when (and (.is ($ "#pasteboard") ":visible") (= (.-keyCode e) 27))
    (println "reset pasteboard.")
    (reset-pasteboard!)
    (.hide ($ "#pasteboard")))

  (when (.-metaKey e)
    (case (.-keyCode e)
      70 (do (layout/full-repl!) (.preventDefault e))
      72 (do (layout/toggle-repl!) (.preventDefault e))
      71 (do (toggle-help!) (.preventDefault e))
      ;; window mode HJKL
      74 (do (paste!) (.preventDefault e))
      89 (when-not (.-altKey e)
           (layout/step-repl-size!  (if (.-shiftKey e) -1 1))
           (.preventDefault e))
      true)))

(defn alternate-keys [form]
  (merge form
    (reduce-kv
      (fn [m k v]
        (assoc m (.replace k "Cmd" "Ctrl") v))
      {}
      form)))

(defn set-shortcuts! [cm]
  (letfn [(eval-form [cm] (-> (evl/try-eval! cm :comment-evaled @comment-evaled :hud-result @hud-result :hud-duration @hud-duration) (maybe-save-default!)))
          (eval-top-form [cm] (-> (evl/try-eval! cm :comment-evaled @comment-evaled :top-form true :hud-result @hud-result :hud-duration @hud-duration) (maybe-save-default!)))
          (eval-alt-form [cm] (-> (evl/try-eval! cm :comment-evaled @comment-evaled :hud-result (not @hud-result)) (maybe-save-default!)))
          (eval-alt-top-form [cm] (-> (evl/try-eval! cm :comment-evaled @comment-evaled :top-form true :hud-result (not @hud-result)) (maybe-save-default!)))
          (eval-editor [_] (-> (cm/lines)
                               evl/eval-forms!))
          (eval-toggle-help [_] (toggle-help!))]
      (.setOption cm "extraKeys"
        (-> (alternate-keys {"Cmd-E"        eval-form
                             "Shift-Cmd-E"  eval-top-form
                             "Cmd-R"        eval-alt-form
                             "Shift-Cmd-R"  eval-alt-top-form
                             "Shift-Cmd-L"  eval-editor
                             "Shift-Cmd-T"  eval-toggle-help
                             "Ctrl-Space"   "autocomplete"})
            clj->js))))

(defn handle-drop [e]
  (.preventDefault e)
  (let [f  (aget (gobj/getValueByKeys e "dataTransfer" "files") 0)]
    (-> (.text f)
        (.then (fn [content]
                 (gobj/set (js/document.getElementById "drop-target") "value" content))))))

(defn handle-dragover [e]
  (.preventDefault e))

(defn reset-pasteboard! []
  (let [input ($ "#pasteboard input[name=var]")
        textarea ($ "#pasteboard textarea")
        wrap ($ "#pasteboard input[name=wrap]")
        detect ($ "#pasteboard input[name=detect]")
        re-eval ($ "#pasteboard input[name=eval]")]
    (.val input "")
    (.val textarea "")
    (.prop wrap "checked" false)
    (.prop detect "checked" false)
    (.prop re-eval "checked" false)
    (.removeClass ($ "#pasteboard") "visible")))

(defonce init
  (.ready ($ js/document)
    (fn [_]
      (.append ($ js/document.body) (render-help))
      (.hide ($ "#hud, #pasteboard"))
      (.on ($ js/document) "keydown" handle-key)
      (let [drop-target (js/document.getElementById "drop-target")]
        (.addEventListener drop-target "drop" handle-drop)
        (.addEventListener  drop-target "dragover" handle-dragover))
      (.delegate ($ js/document) ".help a" "click" (fn [e] (toggle-help!) (.preventDefault e)))
      (.delegate ($ js/document) "#save" "click" (fn [e]
                                                      (let [input ($ "#pasteboard input[name=var]")
                                                            textarea ($ "#pasteboard textarea")
                                                            wrap ($ "#pasteboard input[name=wrap]")
                                                            detect ($ "#pasteboard input[name=detect]")
                                                            re-eval ($ "#pasteboard input[name=eval]")
                                                            var-name (.val input)
                                                            value (.val textarea)
                                                            wrap-to-string? (.prop wrap "checked")
                                                            auto-detect? (.prop detect "checked")
                                                            re-eval? (.prop re-eval "checked")]
                                                        (js/console.log "store var" var-name "as" value "wrap?" wrap-to-string? "detect?" auto-detect? "re-eval?" re-eval?)
                                                        (reset-pasteboard!)
                                                        (js/setTimeout
                                                          (fn []
                                                            (.hide ($ "#pasteboard"))
                                                            (evl/eval!
                                                              (str "(def "
                                                                 var-name " "
                                                                 (cond
                                                                   wrap-to-string?
                                                                   (str "\"" (str/replace value #"\"" "\\\"") "\"")

                                                                   auto-detect?
                                                                   (str "(lab.autodetect/detect" (str "\"" (str/replace value #"\"" "\\\"") "\"") ")")

                                                                   :else
                                                                   value)
                                                               ")")
                                                               (fn [_]
                                                                 (if re-eval?
                                                                   (-> (cm/lines) evl/eval-forms!)
                                                                   (hud/show! var-name)))))
                                                          800)
                                                        (.preventDefault e))))
      (.delegate ($ js/document) "#cancel" "click" (fn [_] (reset-pasteboard!)))
      (toggle-help!)
      (let [cm (CodeMirror. (js/document.querySelector "#repl")
                     #js {:mode "clojure"
                          :lineNumbers false
                          :theme "solarized dark"})]

        (when (js/window.localStorage.getItem "vim-mode")
          (.setOption cm "keyMap" "vim"))
        (cm/set-inst! cm)
        (pcm/init cm)
        (set-shortcuts! cm)
        (.setOption cm "hintOptions" #js {"hint" get-completions})
        (let [stored (.getItem js/localStorage "repl_visibility")
              visible? (if-not (nil? stored) (= stored "true") true)]
          (when visible?
            (layout/toggle-repl! true)
            (.setCursor cm #js {:line 3 :ch 0})))
        (add-view! :view)
        (map! :view)
        (layout/update-repl-size)
        (load-session! "default")))))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  (.off ($ js/document) "keydown")
  (.on ($ js/document) "keydown" handle-key))

(comment
  (add-view! :view)
  (add-view! :view-2))
