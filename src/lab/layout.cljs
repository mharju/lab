(ns lab.layout
  (:require ["jquery" :as $]))

(defonce handlers (atom #{}))
(defn register-handler! [handler]
  (swap! handlers conj handler))
(defn remove-handler! [handler]
  (swap! handlers disj handler))

(defn invalidate-sizes! []
  (js/setTimeout
    (fn []
      (doall
        (for [handler @handlers]
          (handler))))
    0))

(declare repl-size)
(defn toggle-repl!
  ([]
   (let [$repl ($ "#repl")
         visible? (not (.is $repl ":visible"))]
     (toggle-repl! visible?)))
  ([visible?]
    (let [$repl ($ "#repl")
          dashboard (js/document.getElementById "dashboard")
          {:keys [size unit]} @repl-size]
      (if visible?
        (do
          (.show $repl)
          (set! (.. dashboard -style -height) (str (- 100 size) (if (keyword? unit) (name unit) unit))))
        (do
          (.hide $repl)
          (set! (.. dashboard -style -height) "100vh")))
      (invalidate-sizes!))))

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
    (cond-> ($ js/document.body)
      horizontal?        (.addClass "horizontal")
      (not horizontal?)  (.removeClass "horizontal"))
    (reset! repl-size {:size (default-repl-size horizontal?) :unit (repl-size-unit horizontal?)})))

(defn update-repl-size
  ([] (update-repl-size @repl-direction-horizontal? @repl-size))
  ([direction {:keys [size unit]}]
   (let [dashboard (js/document.getElementById "dashboard")]
     (doall
       (for [elem [(js/document.getElementById "repl") (js/document.querySelector ".CodeMirror")]
             :let [isize (str (- 100 size) (if (keyword? unit) (name unit) unit))
                   size (str size (if (keyword? unit) (name unit) unit))]]
         (do
           (if direction
             (do (set! (.. elem -style -width) size)
                 (set! (.. dashboard -style -height) "100vh")
                 (set! (.. elem -style -height) "100%"))
             (do (set! (.. elem -style -height) size)
                 (set! (.. dashboard -style -height) isize)
                 (set! (.. elem -style -width) "100%")))
           (invalidate-sizes!)))))))

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
  (let [{size :size} @repl-size]
    (if (not= size 100)
      (swap! repl-size assoc :size 100 :unit (repl-size-unit))
      (swap! repl-size assoc :size (default-repl-size) :unit (repl-size-unit)))))
