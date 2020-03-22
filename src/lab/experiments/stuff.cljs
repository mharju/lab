(ns lab.experiments.stuff
  (:require [cognitect.transit :as transit]
            [lab.map :as m]
            [lab.experiments.rdp :refer [minimize-points]]))

(def data (atom nil))
(-> (.fetch js/window "https://sensor.taiste.fi/buster/logbook")
    (.then (fn [resp]
             (.text resp)))
    (.then (fn [body]
             (println "Got me data" body)
             (reset! data
               (transit/read (transit/reader :json)
                 body)))))

(count (-> (last @data) :track))
(count (-> (last @data) :track minimize-points))

(m/clear! :view)
(m/map-center! :view (-> (last @data) :track first vals vec (subvec 0 2)))
(m/add-polyline! :view
  (map #(-> (select-keys % [:latitude :longitude])
            (vals))
       (-> (last @data) :track minimize-points)))
