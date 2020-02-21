(ns lab.core
  (:require-macros  [lab.core :refer [render-help resolve-symbol]]
                    [lab.macros :refer [with-view]])
  (:require [clojure.string :as string]
            [lab.eval :as evl]
            [lab.views :refer [add-view!]]
            [lab.map :refer [map!]]
            [cljsjs.jquery]
            [cljsjs.codemirror]
            [cljsjs.codemirror.addon.hint.show-hint]
            [cljsjs.codemirror.mode.clojure]
            [cljsjs.parinfer-codemirror]
            [goog.object :as gobj]))

(enable-console-print!)

(defonce data-connection (atom {:ws nil :listeners {}}))

(defn listen! [id target-view listener]
  (let [selector (str "#" (name target-view) " .connection-status")]
    (.addClass (js/$ selector) "connected")
    (swap! data-connection assoc-in [:listeners id] listener)))

(defn connect! [{:keys [host port] :or {host "localhost" port 7889}}]
  (when-let [{:keys [ws]} @data-connection]
    (if-not (nil? ws)
      ws
      (swap! data-connection assoc :ws
        (let [s (js/WebSocket. (str "ws://" host ":" port))]
          (set!  (.-onopen s) #(.log js/console "Data socket opened at ws://localhost:7889"))
          (set!  (.-onmessage s) (fn [e]
                                   (let [{:strs [id data] :or {id "unknown" data nil}} (js->clj (.parseJSON js/$(.-data e)))
                                       listener (get-in @data-connection [:listeners id])]
                                     (when listener
                                       (apply listener [data])))))
          s)))))

;; editor functions

(defonce cm-inst (atom nil))

(defn toggle-help! []
  (.toggle (js/$ ".help")))

(defonce comment-evaled
  (let [stored (js/JSON.parse (.getItem js/localStorage "comment_evaled"))]
    (atom (if-not (nil? stored) stored true))))

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

(defn toggle-repl!
  ([]
   (let [$repl (js/$ "#repl")
         visible? (not (.is $repl ":visible"))]
     (toggle-repl! visible?)))
  ([visible?]
    (let [$repl (js/$ "#repl")]
      (.setItem js/localStorage "repl_visibility" visible?)
      (if visible?
        (.show $repl)
        (do (.hide $repl)
            (.focus @cm-inst))))))


(declare repl-direction-horizontal?)
(defn default-repl-size
  ([] (default-repl-size @repl-direction-horizontal?))
  ([_direction] 40))
(defn repl-size-unit
  ([] (repl-size-unit @repl-direction-horizontal?))
  ([direction] (if direction :vw :vh)))
(defn repl-opposite-size-unit
  ([] (repl-opposite-size-unit @repl-direction-horizontal?))
  ([direction] (if (= (repl-size-unit direction) :vw) :vh :vw)))
(defonce repl-direction-horizontal? (atom false))
(defonce repl-size (atom {:size (default-repl-size) :unit (repl-size-unit)}))
(add-watch repl-direction-horizontal? :size-change
  (fn [_key _atom _old-state horizontal?]
    (cond-> (js/$ js/document.body)
      horizontal?        (.addClass "horizontal")
      (not horizontal?)  (.removeClass "horizontal"))
    (reset! repl-size {:size (default-repl-size horizontal?) :unit (repl-size-unit horizontal?)})))

(defn update-repl-size
  ([] (update-repl-size @repl-direction-horizontal? @repl-size))
  ([direction {:keys [size unit]}]
    (doall
      (for [elem [(js/document.getElementById "repl") (js/document.querySelector ".CodeMirror")]
            :let [size (str size (if (keyword? unit) (name unit) unit))]]
        (if direction
          (do (set! (.. elem -style -width) size)
              (set! (.. elem -style -height) "100%"))
          (do (set! (.. elem -style -height) size)
              (set! (.. elem -style -width) "100%")))))))

(add-watch repl-size :size-change
  (fn [_key _atom _old-state size]
    (update-repl-size @repl-direction-horizontal? size)))

(defn toggle-direction! []
  (swap! repl-direction-horizontal? not))

(defn resize-repl! [new-height]
  (swap! repl-size assoc :size new-height :unit :vh))

(defn step-repl-size! [increment]
  (swap! repl-size (fn [{:keys [size unit] :as s}]
                     (if (or (= unit :vh) (= unit :vw))
                       {:size (+ size increment) :unit unit}
                       (do (js/console.warn "Not in em mode while resizing!") s)))))

(defn full-repl! []
  (let [{:keys [size unit]} @repl-size]
    (if (not= size 100)
      (swap! repl-size assoc :size 100 :unit (repl-size-unit))
      (swap! repl-size assoc :size (default-repl-size) :unit (repl-size-unit)))))

(defn paste! []
  (->
    (js/$ "#pasteboard")
    (.show)
    (.addClass "visible")
    (.find "input")
    (.focus)))

(defn save-session! [name]
  (.setItem js/window.localStorage (str "session-" name) (js/JSON.stringify (.getValue @cm-inst))))

(defn load-session! [name]
  (->> (.getItem js/window.localStorage (str "session-" name))
      js/JSON.parse
      (.setValue @cm-inst)))

(defn find-start-of-word [line ch]
  (->> (.substring line 0 ch)
       (reverse)
       (drop-while #(re-matches #"[\w\.\-\/]" %))
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

(defn- handle-key [e]
  (when (.-metaKey e)
    (case (.-keyCode e)
      70 (do (full-repl!) (.preventDefault e))
      71 (do (toggle-help!) (.preventDefault e))
      72 (do (toggle-repl!) (.preventDefault e))
      74 (do (paste!) (.preventDefault e))
      89 (when-not (.-altKey e)
           (step-repl-size!  (if (.-shiftKey e) -1 1))
           (.preventDefault e))
      true)))

(defonce init
  (.ready (js/$ js/document)
    (fn [_]
      (.append (js/$ js/document.body) (render-help))
      (.hide (js/$ "#hud, #pasteboard"))
      (.on (js/$ js/document) "keydown" handle-key)
      (.delegate (js/$ js/document) ".help a" "click" (fn [e] (toggle-help!) (.preventDefault e)))
      (.delegate (js/$ js/document) "#save" "click" (fn [e]
                                                      (let [input (js/$ "#pasteboard input[name=var]")
                                                            textarea (js/$ "#pasteboard textarea")
                                                            wrap (js/$ "#pasteboard input[name=wrap]")
                                                            var-name (.val input)
                                                            value (.val textarea)
                                                            wrap-to-string? (.prop wrap "checked")]
                                                        (js/console.log "store var" var-name "as" value)
                                                        (.val input "")
                                                        (.val textarea "")
                                                        (.prop wrap "checked" false)
                                                        (.removeClass (js/$ "#pasteboard") "visible")
                                                        (js/setTimeout
                                                          (fn []
                                                            (.hide (js/$ "#pasteboard"))
                                                            (evl/eval! (str "(def " var-name " " (if wrap-to-string? (str "\"" (string/replace value #"\"" "\\\"") "\"") value) ")")))
                                                          800)
                                                        (.preventDefault e))))
      (.delegate (js/$ js/document) "#cancel" "click" (fn [_]
                                                        (let [input (js/$ "#pasteboard input[name=var]")
                                                              textarea (js/$ "#pasteboard textarea")
                                                              wrap (js/$ "#pasteboard input[name=wrap]")]
                                                          (.val input "")
                                                          (.val textarea "")
                                                          (.prop wrap "checked" false)
                                                          (.hide (js/$ "#pasteboard")))))
      (toggle-help!)
      (let [cm (js/CodeMirror. (js/document.querySelector "#repl")
                     #js {:mode "clojure"
                          :lineNumbers false
                          :theme "solarized dark"
                          :value ";; Welcome to Console REPL. Cmd-G show help, Cmd-H toggle repl, Cmd-F full repl, Cmd-(Shift)-Y Resize repl\r\n;; Cmd-(Shift)-e Eval current (topmost) expression. Cmd-J for pasting content as vars. Ctrl-Space for autocomplete.\r\n" })]
        (reset! cm-inst cm)
        (js/parinferCodeMirror.init cm)
        (.setOption cm "extraKeys"
                    #js {"Cmd-E"        (fn [cm]
                                           (evl/try-eval! cm :comment-evaled @comment-evaled :hud-result @hud-result :hud-duration @hud-duration))
                         "Shift-Cmd-E"  (fn [cm]
                                          (evl/try-eval! cm :comment-evaled @comment-evaled :top-form true :hud-result @hud-result :hud-duration @hud-duration))
                         "Cmd-R"        (fn [cm]
                                          (evl/try-eval! cm :comment-evaled @comment-evaled :hud-result false))
                         "Shift-Cmd-R"  (fn [cm]
                                          (evl/try-eval! cm :comment-evaled @comment-evaled :top-form true :hud-result false))
                         "Shift-Cmd-T"  (fn [_]
                                          (toggle-help!))
                         "Ctrl-Space"   "autocomplete"})
        (.setOption cm "hintOptions" #js {"hint" get-completions})
        (let [visible? (.getItem js/localStorage "repl_visibility")]
          (when (= visible? "true")
            (toggle-repl! true)
            (.setCursor cm #js {:line 3 :ch 0})))
        (add-view! :view)
        (map! :view)
        (update-repl-size)))))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  (.off (js/$ js/document) "keydown")
  (.on (js/$ js/document) "keydown" handle-key))

(comment
  (add-view! :view)
  (add-view! :view-2)

  (rename-view! :map :view)

  (with-view
    (map identity (range 10))
    (println "Hello")))
