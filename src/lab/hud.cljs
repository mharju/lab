(ns lab.hud)

(let [timeout (atom nil)]
  (defn show! [message]
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
          (.text message)
          (.addClass "visible"))
      (reset! timeout (js/setTimeout #(.removeClass hud "visible") 1000)))))
