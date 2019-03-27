(ns lab.hud)

(let [timeout (atom nil)]
  (defn show! [message]
    (let [hud (js/$ "#hud")]
      (when @timeout
        (js/clearTimeout timeout))
      (-> hud
          (.text message)
          (.addClass "visible"))
      (reset! timeout (js/setTimeout #(.removeClass hud "visible") 1000)))))
