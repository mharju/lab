(ns lab.hud)

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
