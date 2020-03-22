(ns lab.experiments.rdp)

;; Ramer-Douglas-Peucker implementation for simplifying routes
;; https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm

;; This constant to be be tested out with real data
(def ^:dynamic *epsilon* 0.0002)

(def x-key :longitude)
(def y-key :latitude)

(defn- line-params [x1 y1 x2 y2]
  (let [m (/ (- y2 y1) (- x2 x1))
        c (- y1 (* m x1))]
    {:a m
     :b -1
     :c c
     :x (when (= x1 x2) x1)
     :y (when (= y1 y2) y1)
     }))

(defn- point-dist [{x x-key y y-key} {:keys [a b c] line-x :x line-y :y}]
  (let [numer (+ (* a x) (* b y) c)
        denom (js/Math.sqrt (+ (* a a) (* b b)))
        dist  (cond
                (not (nil? line-x)) (- x line-x)
                (not (nil? line-y)) (- y line-y)
                :else (/ numer denom))]
    (if (neg? dist) (- dist) dist)))

(defn- max-dist-point [points]
  (let [n (count points)
        {p1x x-key p1y y-key} (first points)
        {p2x x-key p2y y-key} (last points)
        line (line-params p1x p1y p2x p2y)]
    (-> (reduce
          (fn [{:keys [current-index distance] :as acc} point]
            (let [p-dist (point-dist point line)]
              (cond-> (update acc :current-index inc)
                (> p-dist distance) (assoc :distance p-dist :index current-index))))
          {:distance js/Number.MIN_VALUE :current-index 0}
          points)
        (select-keys [:distance :index]))))

(defn- reduce-points [points rpoints]
  (if (> (count points) 2)
    (let [{:keys [distance index]} (max-dist-point points)]
      (if (> distance *epsilon*)
        (concat (reduce-points (subvec points 0 (inc index)) rpoints)
                  (reduce-points (subvec points index) rpoints))
        (conj rpoints (last points))))
    (conj rpoints (second points))))

(defn minimize-points [points]
  (concat [(first points)] (reduce-points points [])))

(comment
  (let [points [{:x 119 :y 97} {:x 119 :y 98} {:x 115 :y 98} {:x 111 :y 98} {:x 105 :y 96} {:x 102 :y 93} {:x 98 :y 90} {:x 96 :y 86} {:x 95 :y 82} {:x 95 :y 78} {:x 95 :y 73} {:x 97 :y 65} {:x 102 :y 60} {:x 109 :y 53} {:x 117 :y 46} {:x 128 :y 40} {:x 137 :y 35} {:x 145 :y 32} {:x 154 :y 31} {:x 162 :y 31} {:x 173 :y 31} {:x 184 :y 31} {:x 207 :y 39} {:x 217 :y 44} {:x 230 :y 50} {:x 238 :y 55} {:x 245 :y 60} {:x 249 :y 65} {:x 252 :y 69} {:x 256 :y 77} {:x 259 :y 83} {:x 262 :y 92} {:x 264 :y 100} {:x 266 :y 109} {:x 266 :y 115} {:x 262 :y 119} {:x 255 :y 123} {:x 239 :y 130} {:x 222 :y 135} {:x 209 :y 139} {:x 194 :y 143} {:x 180 :y 148} {:x 168 :y 151} {:x 156 :y 154} {:x 144 :y 155} {:x 123 :y 157} {:x 110 :y 157} {:x 97 :y 156} {:x 84 :y 153} {:x 71 :y 149} {:x 61 :y 145} {:x 53 :y 140} {:x 50 :y 136} {:x 48 :y 131} {:x 46 :y 126} {:x 46 :y 122} {:x 46 :y 116} {:x 46 :y 111} {:x 47 :y 108} {:x 47 :y 102} {:x 48 :y 96} {:x 49 :y 88} {:x 51 :y 79} {:x 54 :y 70} {:x 57 :y 60} {:x 59 :y 54} {:x 62 :y 45} {:x 64 :y 42} {:x 67 :y 36} {:x 68 :y 33} {:x 69 :y 31} {:x 69 :y 29} {:x 69 :y 29} {:x 69 :y 28} {:x 69 :y 28} {:x 69 :y 27} {:x 67 :y 26} {:x 65 :y 25} {:x 63 :y 24} {:x 61 :y 23} {:x 60 :y 22} {:x 59 :y 22} {:x 59 :y 22} {:x 58 :y 22} {:x 56 :y 22} {:x 54 :y 22} {:x 52 :y 22} {:x 51 :y 22} {:x 49 :y 22} {:x 47 :y 22} {:x 45 :y 22} {:x 42 :y 22} {:x 40 :y 22} {:x 39 :y 22} {:x 39 :y 22} {:x 38 :y 23} {:x 38 :y 23} {:x 37 :y 24} {:x 37 :y 24} {:x 37 :y 25} {:x 36 :y 25} {:x 36 :y 26} {:x 36 :y 27} {:x 35 :y 28} {:x 35 :y 30} {:x 34 :y 33} {:x 34 :y 36} {:x 34 :y 39} {:x 33 :y 41} {:x 33 :y 44} {:x 33 :y 46} {:x 33 :y 47} {:x 33 :y 48} {:x 33 :y 48} {:x 33 :y 48} {:x 32 :y 48} {:x 30 :y 47}]]
    (minimize-points points)))
