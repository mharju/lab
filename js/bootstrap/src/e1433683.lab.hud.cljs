(ns lab.hud)

(defonce hud-duration
  (let [stored (js/JSON.parse (.getItem js/localStorage "hud_duration"))]
    (atom (if-not (nil? stored) stored 3000))))

(defn set-hud-duration!
  "Set the duration in milliseconds the HUD will be shown (needs hud-result to be true)"
  [duration]
  (->> (reset! hud-duration duration)
       (.setItem js/localStorage "hud_duration")))

(let [timeout (atom nil)]
  (defn show! [message & {:keys [duration] :or {duration 3000}}]
    (let [hud (js/$ "#hud")
          message (if (> (count message) 140)
                    (str (.substring message 0 120)
                         " ... "
                         (.substring message
                           (- (count message) 15)))
                    message)]
      (when @timeout
        (js/clearTimeout timeout))
      (-> hud
          (.show)
          (.text message)
          (.addClass "visible"))
      (reset! timeout (js/setTimeout (fn []
                                        (.removeClass hud "visible")
                                        (js/setTimeout #(.hide hud) 300))
                                     duration)))))
