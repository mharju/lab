(ns lab.helpers
  (:require [clojure.string :as str]
            [lab.autodetect :as ad]))

(defn load-json
  "Load JSON data using `js/fetch`, keywordizes keys on return values"
  [& args]
  (-> (.apply js/fetch nil (clj->js args))
      (.then (fn [r]
               (.json r)))
      (.then (fn [r]
               (js->clj r :keywordize-keys true)))))

(defn load-json-into
  "Loads a JSON data from the given destination, passing rest of the `args`
  to `load-json`"
  [destination & args]
  (-> (load-json args)
      (.then (fn [r]
               (reset! destination r)))))

(defn to-csv
  "Convert a seq to CSV string."
  [data]
  (let [ks (keys (first data))]
    (str
      (str/join "," ks)
      "\n"
      (->>
        (mapv (fn [v] (str/join "," (vals v)) ) data)
        (str/join "\n")))))

(defn csv-sample-row
  "Sample a CSV string row. Handy for bigger files that can only be loaded in as strings."
  [data]
  (let [index (rand-int (count data))
        start (str/index-of data "\n" index)
        end (str/index-of data "\n" (inc start))]
    (subs data (inc start) end)))

(defn csv-header
  "Get the header field of a CSV string"
  [data]
  (subs data 0 (str/index-of data "\n")))

(defn csv-sample-data
  "Samples n entries from a dataset from a CSV string."
  [data n]
  (->> (take n (repeatedly #(csv-sample-row data)))
       (into [(csv-header data)])
       (str/join "\n")
       (ad/-transform ad/csv)))
