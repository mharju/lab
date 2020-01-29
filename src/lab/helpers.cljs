(ns lab.helpers)

(defn load-json [& args]
  (-> (.apply js/fetch nil (clj->js args))
      (.then (fn [r]
               (.json r)))
      (.then (fn [r]
               (js->clj r :keywordize-keys true)))))

(defn load-json-into [destination & args]
  (-> (load-json args)
      (.then (fn [r]
               (reset! destination r)))))
