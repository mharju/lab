(ns lab.experiments.graph
  (:require [lab.graph]
            [lab.core]))

;; Normal data plot
(let [data [1 2 3 4 5 6 7 8]]
  (lab.graph/graph! :view
    {:data
     {:columns [(into ["data"] data)]}}))

;; Time series
(let [data [1 2 3 4 5 6]
      ts ["2020-02-02T12:00:00Z" "2020-02-02T13:00:00Z" "2020-02-02T14:00:00Z"
          "2020-02-02T15:00:00Z" "2020-02-02T16:00:00Z" "2020-02-02T17:00:00Z"]]
  (lab.graph/graph! :view
    {:data
     {:x "ts"
      :columns [(into ["ts"] (mapv #(js/Date. %) ts))
                (into ["data"] data)]}
     :axis
     {:x {:type :timeseries
          :tick {:format "%d.%m.%Y %H:%M"}}}}))
