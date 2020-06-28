(ns lab.experiments.foli
  (:require [lab.map :as m]
            [lab.views :as v]
            [lab.dashboard :as d]))

(comment
  ;; Evaluate to start / stop when you have loaded the ns
  (start-update!)
  (stop-update!))

(defonce result (atom nil))
(defonce vehicles (atom {}))
(defonce timer (atom nil))

(lab.views/set-views!
  :views
  [{:id :dash :size [100 25] :start [1 1]}
   {:id :map :size [100 75] :start [1 2]}]
  :row-defs [25 75]
  :col-defs [100])

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
              [k v])
            (get-in results [:result :vehicles]))
       (remove #(nil? (:latitude (second %))))
       (into {})))

(defn do-update! [result]
  (let [new-vehicles (vehicles-with-location result)]
    (d/update! :dash :count (str (count (get-in result [:result :vehicles]))))
    (d/update! :dash :location (str (count new-vehicles)))
    (doall
      (for [[id {:keys [latitude longitude]
                line-name :publishedlinename
                next-stop :next_stoppointname
                expected-arrival :next_expectedarrivaltime
                destination :destinationname}] new-vehicles
            :let [data {:line-name (str (or line-name "N/A")  " (" (or destination "N/A") ")")
                       :next-stop (or next-stop "N/A")
                       :expected-arrival (.toLocaleTimeString (js/Date. (* expected-arrival 1000)))}]]
        (if-let [vehicle (get @vehicles id)]
          (do
            (.setLatLng vehicle (js/L.LatLng. latitude longitude))
            (m/update-data! vehicle data))
          (swap! vehicles assoc id
                 (m/add-marker! :map latitude longitude
                                :center? false
                                :data data)))))))

(defn update! []
  (-> (get-results)
      (.then do-update!)))

(defn stop-update! []
  (when-not (nil? @timer)
    (js/clearInterval @timer)
    (reset! timer nil)))

(defn start-update! []
  (stop-update!)
  (update!)
  (reset! timer (js/setInterval update! 10000)))

(start-update!)
