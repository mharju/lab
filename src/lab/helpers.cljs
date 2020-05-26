(ns lab.helpers
  (:require [clojure.string :as str]))

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

(defn to-csv [data]
  (let [ks (keys (first data))]
    (str
      (str/join "," ks)
      "\n"
      (->>
        (mapv (fn [v] (str/join "," (vals v)) ) data)
        (str/join "\n")))))
