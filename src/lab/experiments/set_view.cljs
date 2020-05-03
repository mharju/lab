(ns lab.experiments.set-view)

(lab.views/set-views!
  :views
  [{:id :dash :size [100 25] :start [1 1]}
   {:id :table :size [70 75] :start [1 2]}
   {:id :data :size [30 75] :start [2 2]}]
  :row-defs [25 75]
  :col-defs [70 30])

(lab.dashboard/dashboard! :dash)
(lab.map/map! :table)
(lab.console/console! :data)
(lab.console/append-vec! :data [[1 2] [2 3] [3 4]])
(lab.dashboard/metric! :dash :count 120 :title "Count")
(lab.dashboard/metric! :dash :avg 2.7 :title "Average")
