goog.provide('lab.completion');
goog.scope(function(){
  lab.completion.goog$module$goog$object = goog.module.get('goog.object');
});
lab.completion.find_start_of_word = (function lab$completion$find_start_of_word(line,ch){
return cljs.core.count(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__26690_SHARP_){
return cljs.core.re_matches(/[\w\.\-\\/:!\"]/,p1__26690_SHARP_);
}),cljs.core.reverse(line.substring((0),ch))));
});
lab.completion.get_completions = (function lab$completion$get_completions(cm,option){
return (new Promise((function (accept){
var cursor = cm.getCursor();
var line = cm.getLine(lab.completion.goog$module$goog$object.get(cursor,"line"));
var current_line = lab.completion.goog$module$goog$object.get(cursor,"line");
var end_ch = lab.completion.goog$module$goog$object.get(cursor,"ch");
var start_ch = lab.completion.find_start_of_word(line,end_ch);
var from = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),current_line,new cljs.core.Keyword(null,"ch","ch",-554717905),start_ch], null);
var word = line.substring(start_ch,end_ch);
var symbols = (((!(clojure.string.blank_QMARK_(word))))?(function (){var source__16424__auto__ = ((clojure.string.starts_with_QMARK_(word,"\""))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16423__16425__auto__){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16423__16425__auto__),"\""].join('');
}),lab.session.list_sessions_BANG_()):cljs.core.PersistentVector.fromArray(["lab.core/load-session!","lab.map/add-custom-layer!","lab.map/add-geojson!","lab.map/add-kml!","lab.map/add-marker!","lab.map/add-markers!","lab.map/add-polyline!","lab.map/add-wkt!","lab.map/cartodb-positron","lab.map/cartodb-voyager","lab.map/clear!","lab.map/clear-markers!","lab.map/invalidate-size!","lab.map/line-colors","lab.map/map!","lab.map/map-center!","lab.map/map-center-and-radius","lab.map/next-color","lab.map/pan-to!","lab.map/polyline-from-dbdump!","lab.map/polyline-from-str!","lab.map/providers","lab.map/update-data!","lab.graph/->freqs-columns","lab.graph/color-pattern","lab.graph/columnize","lab.graph/flow!","lab.graph/frequencies!","lab.graph/graph!","lab.graph/invalidate-size!","lab.graph/load!","lab.graph/simple!","lab.console/append!","lab.console/append-map!","lab.console/append-vec!","lab.console/clear!","lab.console/console!","lab.console/find-element","lab.console/make-row","lab.console/make-table-row","lab.console/map-to-table","lab.console/prepend!","lab.console/prepend-map!","lab.console/scroll-to-bottom!","lab.console/vec-to-table","lab.views/->css","lab.views/->element","lab.views/add-view!","lab.views/components","lab.views/direction-map","lab.views/down-siblings","lab.views/find-end","lab.views/find-view-info","lab.views/left-siblings","lab.views/list-views","lab.views/need-new-def?","lab.views/new-view","lab.views/remove-view!","lab.views/rename-view!","lab.views/right-siblings","lab.views/set-mode!","lab.views/set-views!","lab.views/split!","lab.views/swap-view!","lab.views/unsplit","lab.views/unsplit-left","lab.views/unsplit-up","lab.views/up-siblings","lab.views/update-styles!","lab.views/view-info","lab.views/views","lab.dashboard/clear!","lab.dashboard/dashboard!","lab.dashboard/metric!","lab.dashboard/update!","lab.helpers/csv-header","lab.helpers/csv-sample-data","lab.helpers/csv-sample-row","lab.helpers/load-json","lab.helpers/load-json-into","lab.helpers/to-csv"], true)
);
return cljs.core.filterv((function (sym__16426__auto__){
if(clojure.string.includes_QMARK_(sym__16426__auto__,word)){
return sym__16426__auto__;
} else {
return null;
}
}),source__16424__auto__);
})():cljs.core.PersistentVector.fromArray(["lab.core/load-session!","lab.map/add-custom-layer!","lab.map/add-geojson!","lab.map/add-kml!","lab.map/add-marker!","lab.map/add-markers!","lab.map/add-polyline!","lab.map/add-wkt!","lab.map/cartodb-positron","lab.map/cartodb-voyager","lab.map/clear!","lab.map/clear-markers!","lab.map/invalidate-size!","lab.map/line-colors","lab.map/map!","lab.map/map-center!","lab.map/map-center-and-radius","lab.map/next-color","lab.map/pan-to!","lab.map/polyline-from-dbdump!","lab.map/polyline-from-str!","lab.map/providers","lab.map/update-data!","lab.graph/->freqs-columns","lab.graph/color-pattern","lab.graph/columnize","lab.graph/flow!","lab.graph/frequencies!","lab.graph/graph!","lab.graph/invalidate-size!","lab.graph/load!","lab.graph/simple!","lab.console/append!","lab.console/append-map!","lab.console/append-vec!","lab.console/clear!","lab.console/console!","lab.console/find-element","lab.console/make-row","lab.console/make-table-row","lab.console/map-to-table","lab.console/prepend!","lab.console/prepend-map!","lab.console/scroll-to-bottom!","lab.console/vec-to-table","lab.views/->css","lab.views/->element","lab.views/add-view!","lab.views/components","lab.views/direction-map","lab.views/down-siblings","lab.views/find-end","lab.views/find-view-info","lab.views/left-siblings","lab.views/list-views","lab.views/need-new-def?","lab.views/new-view","lab.views/remove-view!","lab.views/rename-view!","lab.views/right-siblings","lab.views/set-mode!","lab.views/set-views!","lab.views/split!","lab.views/swap-view!","lab.views/unsplit","lab.views/unsplit-left","lab.views/unsplit-up","lab.views/up-siblings","lab.views/update-styles!","lab.views/view-info","lab.views/views","lab.dashboard/clear!","lab.dashboard/dashboard!","lab.dashboard/metric!","lab.dashboard/update!","lab.helpers/csv-header","lab.helpers/csv-sample-data","lab.helpers/csv-sample-row","lab.helpers/load-json","lab.helpers/load-json-into","lab.helpers/to-csv"], true));
var G__26691 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list","list",765357683),symbols,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),cursor], null));
return (accept.cljs$core$IFn$_invoke$arity$1 ? accept.cljs$core$IFn$_invoke$arity$1(G__26691) : accept.call(null,G__26691));
})));
});
