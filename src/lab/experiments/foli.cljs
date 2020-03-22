(ns lab.experiments.foli
  (:require [lab.map :as m]))

(def result (atom nil))
(def vehicles (atom {}))

(defn get-results []
  (-> (.fetch js/window "https://data.foli.fi/siri/vm")
      (.then (fn [result] (when (.-ok result) (.json result))))
      (.then (fn [json] (reset! result (js->clj json :keywordize-keys true))))))

(defn vehicles-with-location [results]
  (->> (map (fn [[k v]]
              [k (select-keys v [:latitude :longitude])])
            (get-in results [:result :vehicles]))
       (remove #(empty? (second %)))
       (into {})))

(m/clear-markers! :view)
(reset! vehicles {})

(-> (get-results)
    (.then (fn []
             (doall
               (for [[id {:keys [latitude longitude]}] (vehicles-with-location @result)]
                 (if-let [vehicle (get @vehicles id)]
                   (.setLatLng vehicle (js/L.LatLng. latitude longitude))
                   (swap! vehicles assoc id (m/add-marker! :view latitude longitude))))))))
