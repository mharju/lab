(ns lab.experiments.dash
  (:require [lab.views :as v]
            [lab.graph :as g]))

(v/rename-view! :view :gauge)
(v/add-view! :series :gauge :horizontal)
(v/add-view! :gauge-2 :gauge :vertical)
(g/graph! :gauge {:data {:columns [["value" 50]] :type :gauge}})
(g/graph! :gauge-2 {:data {:columns [["value" 80]] :type :gauge}})
(g/graph! :series {:data {:columns [(into ["data"] (shuffle (range 100)))
                                            (into ["other"] (shuffle (range 100)))] :type :spline} :point {:show false}})
