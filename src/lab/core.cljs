(ns lab.core
  (:require [clojure.string :as str]
            [cljs.pprint]
            [goog.object :as gobj]
            ["jquery" :as $]
            [lab.eval :as evl]
            [lab.views :refer [add-view!]]
            [lab.layout :as layout]
            [lab.map :refer [map!]]
            [lab.codemirror :as cm]
            [lab.autodetect :as autodetect]
            [lab.session :as session]
            [lab.hud :as hud]
            [lab.graph]
            [lab.vis]
            [lab.console]
            [lab.dashboard]
            [lab.parsing]
            [lab.helpers])
  (:require-macros  [lab.core :refer [render-help]]))

(enable-console-print!)

(defonce data-connection (atom {:ws nil :listeners {}}))

(def load-session! (comp cm/set-value session/get-session))
(def save-session! (comp evl/save-session! cm/get-value))

(defn listen! [id listener]
  (swap! data-connection assoc-in [:listeners id] listener))

(defn connect! [{:keys [host port] :or {host "localhost" port 7889}}]
  (when-let [{:keys [ws]} @data-connection]
    (if-not (nil? ws)
      ws
      (swap! data-connection assoc :ws
        (let [s (js/WebSocket. (str "ws://" host ":" port))]
          (set!  (.-onopen s) #(.log js/console "Data socket opened at ws://" host ":" port))
          (set!  (.-onmessage s) (fn [e]
                                   (let [{:strs [id data] :as message} (try
                                                                         (js->clj
                                                                              (js/JSON.parse (.-data e)))
                                                                        (catch js/Error _
                                                                          (.-data e)))
                                         listener (get-in @data-connection [:listeners id])]
                                     (if (and data id listener)
                                       (listener data)
                                       (doseq [listener (vals (get @data-connection :listeners))]
                                         (listener message))))))
          s)))))

(deref data-connection)

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

(defn paste! []
  (->
    ($ "#pasteboard")
    (.show)
    (.addClass "visible")
    (.find "input[type=\"text\"]")
    (.focus)))

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

(defonce file-contents (atom nil))
(defn handle-drop [e]
  (.preventDefault e)
  (let [f  (aget (gobj/getValueByKeys e "dataTransfer" "files") 0)]
    (-> (.text f)
        (.then (fn [content]
                 (if (>= (count content) 1024)
                   (do (reset! file-contents content)
                       (gobj/set (js/document.getElementById "drop-target") "value" (str "Loaded " (gobj/get f "name") ", size " (count content) " bytes.")))
                   (gobj/set (js/document.getElementById "drop-target") "value" content)))))))

(defn handle-dragover [e]
  (.preventDefault e))

(defn reset-pasteboard! []
  (let [input ($ "#pasteboard input[name=var]")
        textarea ($ "#pasteboard textarea")
        wrap ($ "#pasteboard input[name=wrap]")
        detect ($ "#pasteboard input[name=detect]")
        re-eval ($ "#pasteboard input[name=eval]")]
    (reset! file-contents nil)
    (.val input "")
    (.val textarea "")
    (.prop wrap "checked" false)
    (.prop detect "checked" true)
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
                                                            value (or @file-contents (.val textarea))
                                                            wrap-to-string? (.prop wrap "checked")
                                                            auto-detect? (.prop detect "checked")
                                                            re-eval? (.prop re-eval "checked")]
                                                        (reset-pasteboard!)
                                                        (js/setTimeout
                                                          (fn []
                                                            (.hide ($ "#pasteboard"))
                                                            (let [value
                                                                   (str "(def "
                                                                        var-name " "
                                                                        (cond
                                                                          wrap-to-string?
                                                                          (str "\"" (-> value
                                                                                        (str/replace #"\"" "\\\""))
                                                                               "\"")

                                                                          auto-detect?
                                                                          (str "(lab.autodetect/detect \"" (-> value
                                                                                                               (str/replace #"\\" "\\\\")
                                                                                                               (str/replace #"\"" "\\\""))
                                                                               "\")")

                                                                          :else
                                                                          value)
                                                                        ")")]
                                                              (js/console.log value)
                                                              (evl/eval!
                                                                value
                                                                (fn [_]
                                                                  (if re-eval?
                                                                    (-> (cm/lines) evl/eval-forms!)
                                                                    (hud/show! var-name))))))
                                                          800)
                                                        (.preventDefault e))))
      (.delegate ($ js/document) "#cancel" "click" (fn [_] (reset-pasteboard!)))

      (toggle-help!)

      (let [cm (cm/init!)
            stored (.getItem js/localStorage "repl_visibility")
            visible? (if-not (nil? stored) (= stored "true") true)]
        (when visible?
          (layout/toggle-repl! true)
          (.setCursor cm #js {:line 3 :ch 0})))

      (add-view! :view)
      (map! :view)
      (layout/update-repl-size)
      (load-session! "default"))))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  (.off ($ js/document) "keydown")
  (.on ($ js/document) "keydown" handle-key))

(comment
  (add-view! :view)
  (add-view! :view-2))
