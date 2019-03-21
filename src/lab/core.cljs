(ns lab.core
  (:require-macros  [lab.core :refer [render-help]]
                    [lab.macros :refer [with-view]])
  (:require [clojure.string :as string]
            [cljsjs.jquery]
            [cljsjs.codemirror]
            [cljsjs.codemirror.addon.hint.show-hint]
            [cljsjs.codemirror.mode.clojure]
            [cljsjs.parinfer-codemirror]
            [clojure.set]
            [lab.eval :as evl]
            [lab.views :refer [add-view!]]
            [lab.map :refer [map!]]))

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
                                   (let [{:strs [id data] :or {id "unknown" data nil} :as p} (js->clj (.parseJSON js/$(.-data e)))
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

(defn toggle-repl! []
  (let [$repl (js/$ "#repl")]
             (if (.is $repl ":visible")
               (do (.hide $repl)
                   (.focus @cm-inst))
               (.show $repl))))

(def default-repl-size 14)
(defonce repl-size (atom {:size default-repl-size :unit :em}))
(add-watch repl-size :size-change
  (fn [_key _atom old-state {:keys [size unit]}]
    (set! (.. (js/document.getElementById "repl") -style -height) (str size (if (keyword? unit) (name unit) unit)))
    (set! (.. (js/document.querySelector ".CodeMirror") -style -height) (str size (if (keyword? unit) (name unit) unit)))))

(defn resize-repl! [new-height]
  (swap! repl-size assoc :size new-height :unit :em))

(defn step-repl-size! [increment]
  (swap! repl-size (fn [{:keys [size unit] :as s}]
                     (if (= unit :em)
                       {:size (+ size increment) :unit unit}
                       (do (js/console.warn "Not in em mode while resizing!") s)))))

(defn full-repl! []
  (let [{:keys [size unit]} @repl-size]
    (if (= unit :em)
      (swap! repl-size assoc :size 100 :unit :vh)
      (swap! repl-size assoc :size default-repl-size :unit :em))))

(defn- handle-key [e]
  (when (.-metaKey e)
    (case (.-keyCode e)
      72 (do (toggle-repl!) (.preventDefault e))
      70 (do (full-repl!) (.preventDefault e))
      89 (do (when-not (.-altKey e)
               (step-repl-size!  (if (.-shiftKey e) -1 1))
               (.preventDefault e)))
      true)))

(defonce init
  (.ready (js/$ js/document)
    (fn [e]
      (.append (js/$ js/document.body) (render-help))
      (.on (js/$ js/document) "keydown" handle-key)
      (.delegate (js/$ js/document) ".help a" "click" (fn [e] (toggle-help!) (.preventDefault e)))
      (toggle-help!)
      (let [cm (js/CodeMirror. (js/document.querySelector "#repl")
                     #js {:mode "clojure"
                          :lineNumbers false
                          :theme "solarized dark"
                          :value ";; Welcome to Console REPL. Eval (c/toggle-help!) to get docs or (c/toggle-comment-evaled!)\r\n;; to disable commenting evaled expressions. Enter value and press cmd-e to evaluate\r\n;; the current form on the cursor or selection.\r\n" })]
        (reset! cm-inst cm)
        (js/parinferCodeMirror.init cm)
        (.setOption cm "extraKeys"
                    #js {"Cmd-E"        (fn [cm]
                                           (evl/try-eval! cm :comment-evaled @comment-evaled))
                         "Shift-Cmd-E"  (fn [cm]
                                          (evl/try-eval! cm :comment-evaled @comment-evaled :top-form true))
                         "Shift-Cmd-T"  (fn [cm]
                                          (toggle-help!))})
        (.focus cm)
        (.setCursor cm #js {:line 3 :ch 0})
        (add-view! :view)
        (map! :view)))))

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

  (do
    (connect!)
    (line-graph! :view-2 [] :title "foobar")
    (listen!
      "delay"
      (fn [data]
        (flow :view-2 (into ["data"] data)))))

  (let [markers (atom {})]
    (set-mode! :view :map)
    (clear-markers! :view)
    (connect!)
    (listen!
      "vehicles"
      (fn [{:strs [vehicle lat lon]}]
        (if-let [marker (get @markers vehicle)]
          (.setLatLng marker (js/L.LatLng. lat lon))
          (swap! markers assoc
                 vehicle (marker :view [lat lon]))))))

  (do
    (connect!)
    (let [graph (bar-graph [3 3 2 3] :title "data")]
      (listen!
        "test"
        (fn [data]
          (print "load" data)
          (load-data graph [(into ["data"] data)])))))

  (do
    (clear-markers!)
    (connect!)
    (let [m (polyline [])]
      (listen!
        "test"
        (fn [data]
          (.setLatLngs m (clj->js data))))))

  (do
    (let [graph (scatter-plot [] :title "data")]
      (connect!)
      (listen!
        "points"
        (fn [data]
          (println data)
          (.flow graph (clj->js {:columns data
                                 :duration 500
                                 :length 0}))))))

  (with-view
    (map identity (range 10))
    (println "Hello")))
