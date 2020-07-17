(ns lab.autodetect
  (:require [clojure.string :as str]))

(defonce detectors (atom []))
(defprotocol IDetector
  (-transform [this data]))
(defn register! [^IDectector detector]
  (swap! detectors conj detector))

(defn detect [data]
  (reduce
    (fn [_ detector]
      (when-let [result (-transform detector data)]
        (reduced result)))
    nil
    @detectors))

(def json
  (reify
    IDetector
    (-transform [this data]
      (try
        (-> data
            js/JSON.parse
            (js->clj :keywordize-keys true))
        (catch js/Error _ nil)))))

(def csv
  (reify IDetector
    (-transform [this data]
      (when (and (string? data) (re-find #"^(\w+,)(\w+,*)+" data))
        (let [[header & rows] (->> (str/split data "\n")
                                   (mapv #(str/split % ",")))
              header (if (= (count header) (count (first rows)))
                       (map keyword header)
                       (map str (range (count (first rows)))))]
          (mapv #(zipmap header
                        (map
                          (fn [v] (or (detect v) v)) %)) rows))))))
(def tsv
  (reify IDetector
    (-transform [this data]
      (when (and (string? data) (re-find #"\t" data))
        (let [[header & rows] (->> (str/split data "\n")
                                   (mapv #(str/split % "\t")))
              header (if (= (count header) (count (first rows)))
                       (map keyword header)
                       (map str (range (count (first rows)))))]
          (mapv #(zipmap header
                        (map
                          (fn [v] (or (detect v) v)) %)) rows))))))

(def postgres
  (reify
    IDetector
    (-transform [this data]
      (when (and (re-find #"\s+\w+\s+" data) (re-find #"\-+" data))
        (let [[header _ & rows] (->> (str/split data "\n")
                                     (mapv #(str/split % #"\s+\||$")))]
          (mapv #(zipmap (map (partial str/trim) header)
                        (map
                          (fn [v] (let [v (str/trim v)]
                                    (or (detect v) v))) %))
             rows))))))

(def numeric
  (reify
    IDetector
    (-transform [this data]
      (when (and (string? data) (re-find #"^\d+\.*\d*$" data))
        (js/parseFloat data)))))

(def datetime
  (reify
    IDetector
    (-transform [this data]
      (when-let [match (js/Date. data)]
        (when-not (or (re-find #"[^0-9\-\.:]" data) (js/isNaN (.getTime match)))
          match)))))

(def number-list
  (reify
    IDetector
    (-transform [this data]
      (when (and (string? data) (re-find #"^\d+\.*\d*[\s,]\d+\.*\d*" data))
        (mapv (partial js/parseFloat) (re-seq #"\d+\.*\d*" data))))))

(do
  (reset! detectors [])
  (register! json)
  (register! csv)
  (register! tsv)
  (register! postgres)
  (register! numeric)
  (register! number-list)
  (register! datetime))

(comment
  (reset! detectors [])
  (detect "5")

  (let [data "    id     |            created            | status_type |        details        |            message_key             | order_id | status_code
-----------+-------------------------------+-------------+-----------------------+------------------------------------+----------+-------------
 115918994 | 2018-09-28 19:05:32.315311+00 | processing  | 60.29349,25.0999432   | ORDER_VEHICLE_LOCATION             |  4386936 |           4
 115919000 | 2018-09-28 19:05:34.121833+00 | processing  | 61.42074,23.6144466   | ORDER_VEHICLE_LOCATION             |  4386523 |           4
 115919004 | 2018-09-28 19:05:34.942956+00 | processing  | 61.1311531,21.5047874 | ORDER_VEHICLE_LOCATION             |  4386944 |           4
 115919007 | 2018-09-28 19:05:35.485028+00 | processing  | 60.397583,22.3520241  | ORDER_VEHICLE_LOCATION             |  4386865 |           4
 115919012 | 2018-09-28 19:05:36.633691+00 | processing  | 60.44558,22.2832375   | ORDER_VEHICLE_LOCATION             |  4386930 |           4
 115919016 | 2018-09-28 19:05:37.05188+00  | processing  |                       | ORDER_VEHICLE_LOCATION_UNAVAILABLE |  4386929 |           3
 115919020 | 2018-09-28 19:05:39.292833+00 | processing  | 62.2504,25.7494965    | ORDER_VEHICLE_LOCATION             |  4386853 |           4
 115919023 | 2018-09-28 19:05:40.467224+00 | processing  | 61.4383621,23.84664   | ORDER_VEHICLE_LOCATION             |  4386894 |           4
 115919027 | 2018-09-28 19:05:44.982588+00 | processing  | vehicle id: 292       | ORDER_VEHICLE_ACCEPTED             |  4386945 |           3
 115919031 | 2018-09-28 19:05:45.711255+00 | processing  | 62.86497,27.6835365   | ORDER_VEHICLE_LOCATION             |  4386845 |           4"]
    (detect data))

  (let [data  "foo,bar,baz\n1,keppo,3.232\n4,zippo,6"]
    (detect data)))
