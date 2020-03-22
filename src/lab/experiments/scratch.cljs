(ns lab.experiments.scratch
  (:require [lab.map :as m]
            [lab.graph :as g]
            [lab.views :as v]
            [lab.console :as console]
            [lab.helpers :as h]
            [cljs.core.async :as a :refer-macros [go go-loop]]))

(defn- received-locations [response]
  (m/add-geojson! :view (clj->js response)))

(defn fetch-locations! [{:keys [lat lon radius from]}]
  (let [url (str "http://meri.digitraffic.fi/api/v1/locations/latitude/" lat "/longitude/" lon "/radius/" radius "/from/" from)]
    (-> (h/load-json url)
        (.then received-locations))))

(comment
  (m/map! :view)
  (let [{{:keys [lat lng]} :center radius :radius} (m/map-center-and-radius :view)]
    (m/clear-markers! :view)
    (fetch-locations! {:lat lat :lon lng :radius (/ radius 1000) :from "2019-07-18T08:52:37.302Z"}))
  (g/graph! :view {:data {:columns [["items" 1 2 3 4 5 4 3 2 4]]}})
  (g/load! :view {:columns [["items" 1 2 3 4 2]]})
  (g/flow! :view {:columns [["items" 12 2 3]]}))
