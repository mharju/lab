(ns lab.experiments.foli
  (:require [lab.map :as m]
            [lab.views :as v]
            [lab.dashboard :as d]))

(defonce result (atom nil))
(defonce vehicles (atom {}))
(defonce timer (atom nil))

(v/rename-view! :view :dash)
(v/add-view! :map)
(d/dashboard! :dash)
(d/clear! :dash)
(d/metric! :dash :count "0" :title "# of vehicles")
(d/metric! :dash :location "0" :title "# with location")
(m/map! :map)
(m/clear-markers! :map)
(reset! vehicles {})

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

(defn update! []
  (-> (get-results)
      (.then
        (fn []
          (let [new-vehicles (vehicles-with-location @result)]
            (d/update! :dash :count (str (count (get-in @result [:result :vehicles]))))
            (d/update! :dash :location (str (count new-vehicles)))
            (doall
              (for [[id {:keys [latitude longitude]}] new-vehicles]
                (if-let [vehicle (get @vehicles id)]
                  (.setLatLng vehicle (js/L.LatLng. latitude longitude))
                  (swap! vehicles assoc id (m/add-marker! :map latitude longitude :center? false))))))))))

(defn stop-update! []
  (when-not (nil? @timer)
    (js/clearInterval @timer)
    (reset! timer nil)))

(defn start-update! []
  (stop-update!)
  (update!)
  (reset! timer (js/setInterval update! 10000)))

(comment
  ;; Evaluate to start / stop
  (start-update!)
  (stop-update!))
