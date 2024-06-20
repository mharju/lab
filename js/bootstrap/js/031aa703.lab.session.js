goog.provide('lab.session');
lab.session.help_text = ";; Eval (lab.core/toggle-help!) for help. Cmd-(Shift)-(E|R) Eval current (topmost) expression.\n;; Cmd-J for pasting content as vars. Ctrl-Space for autocomplete.\n";
lab.session.save_session_proto = /\(lab.core\/save-session\!.*\)/;
lab.session.sessions = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"scratch","scratch",148169033),"(ns lab.experiments.scratch\n  (:require [lab.map :as m]\n            [lab.graph :as g]\n            [lab.views :as v]\n            [lab.console :as console]\n            [lab.helpers :as h]\n            [cljs.core.async :as a :refer-macros [go go-loop]]))\n\n(defn- received-locations [response]\n  (m/add-geojson! :view (clj->js response)))\n\n(defn fetch-locations! [{:keys [lat lon radius from]}]\n  (let [url (str \"http://meri.digitraffic.fi/api/v1/locations/latitude/\" lat \"/longitude/\" lon \"/radius/\" radius \"/from/\" from)]\n    (-> (h/load-json url)\n        (.then received-locations))))\n\n(comment\n  (m/map! :view)\n  (let [{{:keys [lat lng]} :center radius :radius} (m/map-center-and-radius :view)]\n    (m/clear-markers! :view)\n    (fetch-locations! {:lat lat :lon lng :radius (/ radius 1000) :from \"2019-07-18T08:52:37.302Z\"}))\n  (g/graph! :view {:data {:columns [[\"items\" 1 2 3 4 5 4 3 2 4]]}})\n  (g/load! :view {:columns [[\"items\" 1 2 3 4 2]]})\n  (g/flow! :view {:columns [[\"items\" 12 2 3]]}))\n",new cljs.core.Keyword(null,"rdp","rdp",-1597534504),"(ns lab.experiments.rdp)\n\n;; Ramer-Douglas-Peucker implementation for simplifying routes\n;; https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm\n\n;; This constant to be be tested out with real data\n(def ^:dynamic *epsilon* 0.0002)\n\n(def x-key :longitude)\n(def y-key :latitude)\n\n(defn- line-params [x1 y1 x2 y2]\n  (let [m (/ (- y2 y1) (- x2 x1))\n        c (- y1 (* m x1))]\n    {:a m\n     :b -1\n     :c c\n     :x (when (= x1 x2) x1)\n     :y (when (= y1 y2) y1)\n     }))\n\n(defn- point-dist [{x x-key y y-key} {:keys [a b c] line-x :x line-y :y}]\n  (let [numer (+ (* a x) (* b y) c)\n        denom (js/Math.sqrt (+ (* a a) (* b b)))\n        dist  (cond\n                (not (nil? line-x)) (- x line-x)\n                (not (nil? line-y)) (- y line-y)\n                :else (/ numer denom))]\n    (if (neg? dist) (- dist) dist)))\n\n(defn- max-dist-point [points]\n  (let [n (count points)\n        {p1x x-key p1y y-key} (first points)\n        {p2x x-key p2y y-key} (last points)\n        line (line-params p1x p1y p2x p2y)]\n    (-> (reduce\n          (fn [{:keys [current-index distance] :as acc} point]\n            (let [p-dist (point-dist point line)]\n              (cond-> (update acc :current-index inc)\n                (> p-dist distance) (assoc :distance p-dist :index current-index))))\n          {:distance js/Number.MIN_VALUE :current-index 0}\n          points)\n        (select-keys [:distance :index]))))\n\n(defn- reduce-points [points rpoints]\n  (if (> (count points) 2)\n    (let [{:keys [distance index]} (max-dist-point points)]\n      (if (> distance *epsilon*)\n        (concat (reduce-points (subvec points 0 (inc index)) rpoints)\n                  (reduce-points (subvec points index) rpoints))\n        (conj rpoints (last points))))\n    (conj rpoints (second points))))\n\n(defn minimize-points [points]\n  (concat [(first points)] (reduce-points points [])))\n\n(comment\n  (let [points [{:x 119 :y 97} {:x 119 :y 98} {:x 115 :y 98} {:x 111 :y 98} {:x 105 :y 96} {:x 102 :y 93} {:x 98 :y 90} {:x 96 :y 86} {:x 95 :y 82} {:x 95 :y 78} {:x 95 :y 73} {:x 97 :y 65} {:x 102 :y 60} {:x 109 :y 53} {:x 117 :y 46} {:x 128 :y 40} {:x 137 :y 35} {:x 145 :y 32} {:x 154 :y 31} {:x 162 :y 31} {:x 173 :y 31} {:x 184 :y 31} {:x 207 :y 39} {:x 217 :y 44} {:x 230 :y 50} {:x 238 :y 55} {:x 245 :y 60} {:x 249 :y 65} {:x 252 :y 69} {:x 256 :y 77} {:x 259 :y 83} {:x 262 :y 92} {:x 264 :y 100} {:x 266 :y 109} {:x 266 :y 115} {:x 262 :y 119} {:x 255 :y 123} {:x 239 :y 130} {:x 222 :y 135} {:x 209 :y 139} {:x 194 :y 143} {:x 180 :y 148} {:x 168 :y 151} {:x 156 :y 154} {:x 144 :y 155} {:x 123 :y 157} {:x 110 :y 157} {:x 97 :y 156} {:x 84 :y 153} {:x 71 :y 149} {:x 61 :y 145} {:x 53 :y 140} {:x 50 :y 136} {:x 48 :y 131} {:x 46 :y 126} {:x 46 :y 122} {:x 46 :y 116} {:x 46 :y 111} {:x 47 :y 108} {:x 47 :y 102} {:x 48 :y 96} {:x 49 :y 88} {:x 51 :y 79} {:x 54 :y 70} {:x 57 :y 60} {:x 59 :y 54} {:x 62 :y 45} {:x 64 :y 42} {:x 67 :y 36} {:x 68 :y 33} {:x 69 :y 31} {:x 69 :y 29} {:x 69 :y 29} {:x 69 :y 28} {:x 69 :y 28} {:x 69 :y 27} {:x 67 :y 26} {:x 65 :y 25} {:x 63 :y 24} {:x 61 :y 23} {:x 60 :y 22} {:x 59 :y 22} {:x 59 :y 22} {:x 58 :y 22} {:x 56 :y 22} {:x 54 :y 22} {:x 52 :y 22} {:x 51 :y 22} {:x 49 :y 22} {:x 47 :y 22} {:x 45 :y 22} {:x 42 :y 22} {:x 40 :y 22} {:x 39 :y 22} {:x 39 :y 22} {:x 38 :y 23} {:x 38 :y 23} {:x 37 :y 24} {:x 37 :y 24} {:x 37 :y 25} {:x 36 :y 25} {:x 36 :y 26} {:x 36 :y 27} {:x 35 :y 28} {:x 35 :y 30} {:x 34 :y 33} {:x 34 :y 36} {:x 34 :y 39} {:x 33 :y 41} {:x 33 :y 44} {:x 33 :y 46} {:x 33 :y 47} {:x 33 :y 48} {:x 33 :y 48} {:x 33 :y 48} {:x 32 :y 48} {:x 30 :y 47}]]\n    (minimize-points points)))\n",new cljs.core.Keyword(null,"dash","dash",23821356),"(ns lab.experiments.dash\n  (:require [lab.views :as v]\n            [lab.graph :as g]))\n\n(v/rename-view! :view :gauge)\n(v/add-view! :series :gauge :horizontal)\n(v/add-view! :gauge-2 :gauge :vertical)\n(g/graph! :gauge {:data {:columns [[\"value\" 50]] :type :gauge}})\n(g/graph! :gauge-2 {:data {:columns [[\"value\" 80]] :type :gauge}})\n(g/graph! :series {:data {:columns [(into [\"data\"] (shuffle (range 100)))\n                                            (into [\"other\"] (shuffle (range 100)))] :type :spline} :point {:show false}})\n",new cljs.core.Keyword(null,"graph","graph",1558099509),"(ns lab.experiments.graph\n  (:require [lab.graph]\n            [lab.core]))\n\n;; Normal data plot\n(let [data [1 2 3 4 5 6 7 8]]\n  (lab.graph/graph! :view\n    {:data\n     {:columns [(into [\"data\"] data)]}}))\n\n;; Time series\n(let [data [1 2 3 4 5 6]\n      ts [\"2020-02-02T12:00:00Z\" \"2020-02-02T13:00:00Z\" \"2020-02-02T14:00:00Z\"\n          \"2020-02-02T15:00:00Z\" \"2020-02-02T16:00:00Z\" \"2020-02-02T17:00:00Z\"]]\n  (lab.graph/graph! :view\n    {:data\n     {:x \"ts\"\n      :columns [(into [\"ts\"] (mapv #(js/Date. %) ts))\n                (into [\"data\"] data)]}\n     :axis\n     {:x {:type :timeseries\n          :tick {:format \"%d.%m.%Y %H:%M\"}}}}))\n",new cljs.core.Keyword(null,"set_view","set_view",-1475494434),"(ns lab.experiments.set-view)\n\n(lab.views/set-views!\n  :views\n  [{:id :dash :size [100 25] :start [1 1]}\n   {:id :table :size [70 75] :start [1 2]}\n   {:id :data :size [30 75] :start [2 2]}]\n  :row-defs [25 75]\n  :col-defs [70 30])\n\n(lab.dashboard/dashboard! :dash)\n(lab.map/map! :table)\n(lab.console/console! :data)\n(lab.console/append-vec! :data [[1 2] [2 3] [3 4]])\n(lab.dashboard/metric! :dash :count 120 :title \"Count\")\n(lab.dashboard/metric! :dash :avg 2.7 :title \"Average\")\n",new cljs.core.Keyword(null,"stuff","stuff",-2051563643),"(ns lab.experiments.stuff\n  (:require [cognitect.transit :as transit]\n            [lab.map :as m]\n            [lab.experiments.rdp :refer [minimize-points]]))\n\n(def data (atom nil))\n(-> (.fetch js/window \"https://sensor.taiste.fi/buster/logbook\")\n    (.then (fn [resp]\n             (.text resp)))\n    (.then (fn [body]\n             (println \"Got me data\" body)\n             (reset! data\n               (transit/read (transit/reader :json)\n                 body)))))\n\n(count (-> (last @data) :track))\n(count (-> (last @data) :track minimize-points))\n\n(m/clear! :view)\n(m/map-center! :view (-> (last @data) :track first vals vec (subvec 0 2)))\n(m/add-polyline! :view\n  (map #(-> (select-keys % [:latitude :longitude])\n            (vals))\n       (-> (last @data) :track minimize-points)))\n",new cljs.core.Keyword(null,"foli","foli",-439078345),"(ns lab.experiments.foli\n  (:require [lab.map :as m]\n            [lab.views :as v]\n            [lab.dashboard :as d]))\n\n(comment\n  ;; Evaluate to start / stop when you have loaded the ns\n  (start-update!)\n  (stop-update!))\n\n(defonce result (atom nil))\n(defonce vehicles (atom {}))\n(defonce timer (atom nil))\n\n(lab.views/set-views!\n  :views\n  [{:id :dash :size [100 25] :start [1 1]}\n   {:id :map :size [100 75] :start [1 2]}]\n  :row-defs [25 75]\n  :col-defs [100])\n\n(d/dashboard! :dash)\n(d/clear! :dash)\n(d/metric! :dash :count \"0\" :title \"# of vehicles\")\n(d/metric! :dash :location \"0\" :title \"# with location\")\n(m/map! :map)\n(m/clear-markers! :map)\n(reset! vehicles {})\n\n(defn get-results []\n  (-> (.fetch js/window \"https://data.foli.fi/siri/vm\")\n      (.then (fn [result] (when (.-ok result) (.json result))))\n      (.then (fn [json] (reset! result (js->clj json :keywordize-keys true))))))\n\n(defn vehicles-with-location [results]\n  (->> (map (fn [[k v]]\n              [k v])\n            (get-in results [:result :vehicles]))\n       (remove #(nil? (:latitude (second %))))\n       (into {})))\n\n(defn do-update! [result]\n  (let [new-vehicles (vehicles-with-location result)]\n    (d/update! :dash :count (str (count (get-in result [:result :vehicles]))))\n    (d/update! :dash :location (str (count new-vehicles)))\n    (doall\n      (for [[id {:keys [latitude longitude]\n                line-name :publishedlinename\n                next-stop :next_stoppointname\n                expected-arrival :next_expectedarrivaltime\n                destination :destinationname}] new-vehicles\n            :let [data {:line-name (str (or line-name \"N/A\")  \" (\" (or destination \"N/A\") \")\")\n                       :next-stop (or next-stop \"N/A\")\n                       :expected-arrival (.toLocaleTimeString (js/Date. (* expected-arrival 1000)))}]]\n        (if-let [vehicle (get @vehicles id)]\n          (do\n            (.setLatLng vehicle (js/L.LatLng. latitude longitude))\n            (m/update-data! vehicle data))\n          (swap! vehicles assoc id\n                 (m/add-marker! :map latitude longitude\n                                :center? false\n                                :data data)))))))\n\n(defn update! []\n  (-> (get-results)\n      (.then do-update!)))\n\n(defn stop-update! []\n  (when-not (nil? @timer)\n    (js/clearInterval @timer)\n    (reset! timer nil)))\n\n(defn start-update! []\n  (stop-update!)\n  (update!)\n  (reset! timer (js/setInterval update! 10000)))\n\n(start-update!)\n"], null);
lab.session.session_names = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(lab.session.sessions));
lab.session.loaded_session = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("default");
lab.session.list_sessions_BANG_ = (function lab$session$list_sessions_BANG_(){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lab.session.session_names,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(item,(("session-").length));
}),cljs.core.filterv((function (item){
return clojure.string.starts_with_QMARK_(item,"session-");
}),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(Object.keys(window.localStorage))))));
});
lab.session.delete_session_BANG_ = (function lab$session$delete_session_BANG_(name){
return window.localStorage.removeItem(["session-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
});
lab.session.get_session = (function lab$session$get_session(name){
cljs.core.reset_BANG_(lab.session.loaded_session,name);

if(cljs.core.truth_((function (){var fexpr__25719 = cljs.core.set(lab.session.session_names);
return (fexpr__25719.cljs$core$IFn$_invoke$arity$1 ? fexpr__25719.cljs$core$IFn$_invoke$arity$1(name) : fexpr__25719.call(null,name));
})())){
return [lab.session.help_text,lab.parsing.normalize_session(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lab.session.sessions,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)))].join('');
} else {
var G__25720 = (function (){var or__4253__auto__ = window.localStorage.getItem(["session-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "\"\"";
}
})();
var G__25720__$1 = (((G__25720 == null))?null:JSON.parse(G__25720));
if((G__25720__$1 == null)){
return null;
} else {
return [lab.session.help_text,cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25720__$1)].join('');
}
}
});
lab.session.session_load_display = (function lab$session$session_load_display(){
return ["<div","",">","<h2>Select a session to load</h2>",(function (){var attrs25723 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function lab$session$session_load_display_$_iter__25728(s__25729){
return (new cljs.core.LazySeq(null,(function (){
var s__25729__$1 = s__25729;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__25729__$1);
if(temp__5753__auto__){
var s__25729__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25729__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__25729__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__25731 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__25730 = (0);
while(true){
if((i__25730 < size__4651__auto__)){
var session = cljs.core._nth(c__4650__auto__,i__25730);
cljs.core.chunk_append(b__25731,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.option","div.option",-1520829790),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),["javascript:lab.core.load_session_BANG_(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(session),"\"); lab.session.close_session_load_display_BANG_()"].join('')], null),session], null));

var G__25818 = (i__25730 + (1));
i__25730 = G__25818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25731),lab$session$session_load_display_$_iter__25728(cljs.core.chunk_rest(s__25729__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25731),null);
}
} else {
var session = cljs.core.first(s__25729__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.option","div.option",-1520829790),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),["javascript:lab.core.load_session_BANG_(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(session),"\"); lab.session.close_session_load_display_BANG_()"].join('')], null),session], null),lab$session$session_load_display_$_iter__25728(cljs.core.rest(s__25729__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(lab.session.list_sessions_BANG_());
})());
if(cljs.core.map_QMARK_(attrs25723)){
return ["<div",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"options"], null),attrs25723], 0)))),">","</div>"].join('');
} else {
return ["<div class=\"options\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs25723)),"</div>"].join('');
}
})(),"</div>"].join('');
});
lab.session.open_session_load_display_BANG_ = (function lab$session$open_session_load_display_BANG_(){
var elem = document.getElementById("sessions");
(elem.innerHTML = lab.session.session_load_display());

return elem.classList.add("visible");
});
lab.session.close_session_load_display_BANG_ = (function lab$session$close_session_load_display_BANG_(){
var elem = document.getElementById("sessions");
elem.classList.remove("visible");

return setTimeout((function (){
return (elem.innerHTML = "");
}),(1000));
});
goog.exportSymbol('lab.session.close_session_load_display_BANG_', lab.session.close_session_load_display_BANG_);
