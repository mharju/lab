(ns lab.completion
  (:require [goog.object :as gobj]
            [lab.map]
            [lab.graph]
            [lab.console]
            [lab.vis]
            [lab.views]
            [lab.dashboard]
            [lab.helpers])
  (:require-macros [lab.core :refer [resolve-symbol]]))

(defn find-start-of-word [line ch]
  (->> (.substring line 0 ch)
       (reverse)
       (drop-while #(re-matches #"[\w\.\-\/:!\"]" %))
       count))

(defn get-completions [cm option]
  (js/Promise.
    (fn [accept]
      (let [cursor (.getCursor cm)
            line (.getLine cm (gobj/get cursor "line"))
            current-line (gobj/get cursor "line")
            end-ch (gobj/get cursor "ch")
            start-ch (find-start-of-word line end-ch)
            from {:line current-line :ch start-ch}
            word (.substring line start-ch end-ch)
            symbols (resolve-symbol word)]
        (accept (clj->js {:list symbols
                          :from from
                          :to cursor}))))))
