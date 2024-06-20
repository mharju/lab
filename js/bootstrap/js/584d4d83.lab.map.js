goog.provide('lab.map');
lab.map.cartodb_positron = (function lab$map$cartodb_positron(){
return module$node_modules$leaflet$dist$leaflet_src.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",({"attribution": "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>", "subdomains": "abcd", "maxZoom": (19)}));
});
lab.map.cartodb_voyager = (function lab$map$cartodb_voyager(){
return module$node_modules$leaflet$dist$leaflet_src.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",({"attribution": "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>", "subdomains": "abcd", "maxZoom": (19)}));
});
lab.map.providers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cartodb-positron","cartodb-positron",-892135915),lab.map.cartodb_positron,new cljs.core.Keyword(null,"cartodb-voyager","cartodb-voyager",-1597853643),lab.map.cartodb_voyager], null);
lab.map.map_for = (function lab$map$map_for(id,provider,draw_mode_QMARK_){
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.views),id);
var instance = module$node_modules$leaflet$dist$leaflet_src.map(view.querySelector(".map"),({"zoomControl": false}));
var tile = (function (){var fexpr__26051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lab.map.providers,provider);
return (fexpr__26051.cljs$core$IFn$_invoke$arity$0 ? fexpr__26051.cljs$core$IFn$_invoke$arity$0() : fexpr__26051.call(null));
})();
instance.setView([60.4530898,22.3139035],(15));

tile.addTo(instance);

if(cljs.core.boolean$(draw_mode_QMARK_)){
var toolbar_26173 = (new module$node_modules$leaflet$dist$leaflet_src.Control.Draw(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"circle","circle",1903212362),false,new cljs.core.Keyword(null,"circlemarker","circlemarker",1584913828),false], null)], null))));
instance.addControl(toolbar_26173);
} else {
}

return instance;
});
/**
 * Create a new map for view. Optional provider :cartodb-positron
 */
lab.map.map_BANG_ = (function lab$map$map_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26177 = arguments.length;
var i__4865__auto___26178 = (0);
while(true){
if((i__4865__auto___26178 < len__4864__auto___26177)){
args__4870__auto__.push((arguments[i__4865__auto___26178]));

var G__26179 = (i__4865__auto___26178 + (1));
i__4865__auto___26178 = G__26179;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return lab.map.map_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(lab.map.map_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,p__26054){
var map__26055 = p__26054;
var map__26055__$1 = cljs.core.__destructure_map(map__26055);
var provider = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26055__$1,new cljs.core.Keyword(null,"provider","provider",-302056900),new cljs.core.Keyword(null,"cartodb-voyager","cartodb-voyager",-1597853643));
var draw_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26055__$1,new cljs.core.Keyword(null,"draw-mode?","draw-mode?",140541474),null);
lab.views.set_mode_BANG_(view,new cljs.core.Keyword(null,"map","map",1371690461));

var temp__5753__auto___26180 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.components),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"map","map",1371690461)], null));
if(cljs.core.truth_(temp__5753__auto___26180)){
var current_26182 = temp__5753__auto___26180;
current_26182.remove();
} else {
}

var component = lab.map.map_for(view,provider,draw_mode_QMARK_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.views.components,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"map","map",1371690461)], null),component);

if((draw_mode_QMARK_ == null)){
} else {
component.on("draw:created",((cljs.core.fn_QMARK_(draw_mode_QMARK_))?draw_mode_QMARK_:(((typeof lab !== 'undefined') && (typeof lab.core !== 'undefined') && (typeof lab.core.on_draw_created !== 'undefined'))?(new cljs.core.Var((function (){
return lab.core.on_draw_created;
}),cljs.core.with_meta(new cljs.core.Symbol("lab.core","on-draw-created","lab.core/on-draw-created",2038121326,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),null)):null)));
}

return component;
}));

(lab.map.map_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lab.map.map_BANG_.cljs$lang$applyTo = (function (seq26052){
var G__26053 = cljs.core.first(seq26052);
var seq26052__$1 = cljs.core.next(seq26052);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26053,seq26052__$1);
}));

lab.map.invalidate_size_BANG_ = (function lab$map$invalidate_size_BANG_(){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function lab$map$invalidate_size_BANG__$_iter__26056(s__26057){
return (new cljs.core.LazySeq(null,(function (){
var s__26057__$1 = s__26057;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__26057__$1);
if(temp__5753__auto__){
var s__26057__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26057__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__26057__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__26059 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__26058 = (0);
while(true){
if((i__26058 < size__4651__auto__)){
var m = cljs.core._nth(c__4650__auto__,i__26058);
if((!((m == null)))){
cljs.core.chunk_append(b__26059,m.invalidateSize());

var G__26183 = (i__26058 + (1));
i__26058 = G__26183;
continue;
} else {
var G__26184 = (i__26058 + (1));
i__26058 = G__26184;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26059),lab$map$invalidate_size_BANG__$_iter__26056(cljs.core.chunk_rest(s__26057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26059),null);
}
} else {
var m = cljs.core.first(s__26057__$2);
if((!((m == null)))){
return cljs.core.cons(m.invalidateSize(),lab$map$invalidate_size_BANG__$_iter__26056(cljs.core.rest(s__26057__$2)));
} else {
var G__26194 = cljs.core.rest(s__26057__$2);
s__26057__$1 = G__26194;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.vals(cljs.core.deref(lab.views.components))));
})());
});
lab.layout.register_handler_BANG_(lab.map.invalidate_size_BANG_);
/**
 * Center the map to the given point and zoom level. Zoom defaults to 13.
 */
lab.map.map_center_BANG_ = (function lab$map$map_center_BANG_(var_args){
var G__26061 = arguments.length;
switch (G__26061) {
case 2:
return lab.map.map_center_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lab.map.map_center_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lab.map.map_center_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lab.map.map_center_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (view,center){
return lab.map.map_center_BANG_.cljs$core$IFn$_invoke$arity$3(view,center,(13));
}));

(lab.map.map_center_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (view,center,zoom){
return lab.map.map_center_BANG_.cljs$core$IFn$_invoke$arity$4(view,center,zoom,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
}));

(lab.map.map_center_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (view,center,zoom,opts){
var l = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.components),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"map","map",1371690461)], null));
lab.views.set_mode_BANG_(view,new cljs.core.Keyword(null,"map","map",1371690461));

return l.setView(cljs.core.clj__GT_js(center),zoom,cljs.core.clj__GT_js(opts));
}));

(lab.map.map_center_BANG_.cljs$lang$maxFixedArity = 4);

lab.map.clear_markers_BANG_ = (function lab$map$clear_markers_BANG_(view){

var l = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.components),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"map","map",1371690461)], null));
return l.eachLayer((function (layer){
if((layer.getPane().className.indexOf("marker") >= (0))){
return layer.remove();
} else {
return null;
}
}));
});
lab.map.clear_BANG_ = (function lab$map$clear_BANG_(view){

var l = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.components),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"map","map",1371690461)], null));
return l.eachLayer((function (layer){
if((layer.getPane().className.indexOf("tile") >= (0))){
return null;
} else {
return layer.remove();
}
}));
});
lab.map.update_data_BANG_ = (function lab$map$update_data_BANG_(marker,data){
return marker.bindPopup(cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(lab.console.map_to_table(data))));
});
/**
 * Add a new marker to view with latitude and longitude.
 */
lab.map.add_marker_BANG_ = (function lab$map$add_marker_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26210 = arguments.length;
var i__4865__auto___26211 = (0);
while(true){
if((i__4865__auto___26211 < len__4864__auto___26210)){
args__4870__auto__.push((arguments[i__4865__auto___26211]));

var G__26213 = (i__4865__auto___26211 + (1));
i__4865__auto___26211 = G__26213;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return lab.map.add_marker_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(lab.map.add_marker_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,lat,lon,p__26105){
var map__26106 = p__26105;
var map__26106__$1 = cljs.core.__destructure_map(map__26106);
var rev = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26106__$1,new cljs.core.Keyword(null,"rev","rev",12702670),false);
var center_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26106__$1,new cljs.core.Keyword(null,"center?","center?",-323116631),true);
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26106__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(13));
var center_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26106__$1,new cljs.core.Keyword(null,"center-opts","center-opts",-1225851284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null)], null));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26106__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26106__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26106__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
lab.views.set_mode_BANG_(view,new cljs.core.Keyword(null,"map","map",1371690461));

var l = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.components),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"map","map",1371690461)], null));
var coords = ((cljs.core.not(rev))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lon,lat], null));
var m = (cljs.core.truth_(icon)?(function (){var ic = (new module$node_modules$leaflet$dist$leaflet_src.Icon(cljs.core.clj__GT_js(icon)));
return module$node_modules$leaflet$dist$leaflet_src.marker(cljs.core.clj__GT_js(coords),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),ic], null)));
})():module$node_modules$leaflet$dist$leaflet_src.marker(cljs.core.clj__GT_js(coords)));
m.addTo(l);

if(cljs.core.truth_(center_QMARK_)){
lab.map.map_center_BANG_.cljs$core$IFn$_invoke$arity$4(view,coords,zoom,center_opts);
} else {
}

if(cljs.core.truth_(on_click)){
m.on("click",on_click);
} else {
}

if(cljs.core.truth_(data)){
lab.map.update_data_BANG_(m,data);
} else {
}

return m;
}));

(lab.map.add_marker_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(lab.map.add_marker_BANG_.cljs$lang$applyTo = (function (seq26101){
var G__26102 = cljs.core.first(seq26101);
var seq26101__$1 = cljs.core.next(seq26101);
var G__26103 = cljs.core.first(seq26101__$1);
var seq26101__$2 = cljs.core.next(seq26101__$1);
var G__26104 = cljs.core.first(seq26101__$2);
var seq26101__$3 = cljs.core.next(seq26101__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26102,G__26103,G__26104,seq26101__$3);
}));

lab.map.add_custom_layer_BANG_ = (function lab$map$add_custom_layer_BANG_(view,layer){

var m = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.components),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"map","map",1371690461)], null));
return layer.addTo(m);
});
lab.map.add_markers_BANG_ = (function lab$map$add_markers_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26217 = arguments.length;
var i__4865__auto___26218 = (0);
while(true){
if((i__4865__auto___26218 < len__4864__auto___26217)){
args__4870__auto__.push((arguments[i__4865__auto___26218]));

var G__26219 = (i__4865__auto___26218 + (1));
i__4865__auto___26218 = G__26219;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return lab.map.add_markers_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(lab.map.add_markers_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,points,p__26110){
var map__26111 = p__26110;
var map__26111__$1 = cljs.core.__destructure_map(map__26111);
var args = map__26111__$1;
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26111__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.identity);
var data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26111__$1,new cljs.core.Keyword(null,"data-fn","data-fn",777152661),null);

var seq__26112 = cljs.core.seq(points);
var chunk__26113 = null;
var count__26114 = (0);
var i__26115 = (0);
while(true){
if((i__26115 < count__26114)){
var point = chunk__26113.cljs$core$IIndexed$_nth$arity$2(null,i__26115);
cljs.core.apply.cljs$core$IFn$_invoke$arity$3(lab.map.add_marker_BANG_,view,cljs.core.flatten(cljs.core.into.cljs$core$IFn$_invoke$arity$2((key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(point) : key_fn.call(null,point)),(function (){var G__26118 = args;
var G__26118__$1 = (cljs.core.truth_(data_fn)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26118,new cljs.core.Keyword(null,"data","data",-232669377),(data_fn.cljs$core$IFn$_invoke$arity$1 ? data_fn.cljs$core$IFn$_invoke$arity$1(point) : data_fn.call(null,point))):G__26118);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26118__$1,new cljs.core.Keyword(null,"data-fn","data-fn",777152661));

})())));


var G__26226 = seq__26112;
var G__26227 = chunk__26113;
var G__26228 = count__26114;
var G__26229 = (i__26115 + (1));
seq__26112 = G__26226;
chunk__26113 = G__26227;
count__26114 = G__26228;
i__26115 = G__26229;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__26112);
if(temp__5753__auto__){
var seq__26112__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26112__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__26112__$1);
var G__26230 = cljs.core.chunk_rest(seq__26112__$1);
var G__26231 = c__4679__auto__;
var G__26232 = cljs.core.count(c__4679__auto__);
var G__26233 = (0);
seq__26112 = G__26230;
chunk__26113 = G__26231;
count__26114 = G__26232;
i__26115 = G__26233;
continue;
} else {
var point = cljs.core.first(seq__26112__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$3(lab.map.add_marker_BANG_,view,cljs.core.flatten(cljs.core.into.cljs$core$IFn$_invoke$arity$2((key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(point) : key_fn.call(null,point)),(function (){var G__26123 = args;
var G__26123__$1 = (cljs.core.truth_(data_fn)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26123,new cljs.core.Keyword(null,"data","data",-232669377),(data_fn.cljs$core$IFn$_invoke$arity$1 ? data_fn.cljs$core$IFn$_invoke$arity$1(point) : data_fn.call(null,point))):G__26123);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26123__$1,new cljs.core.Keyword(null,"data-fn","data-fn",777152661));

})())));


var G__26237 = cljs.core.next(seq__26112__$1);
var G__26238 = null;
var G__26239 = (0);
var G__26240 = (0);
seq__26112 = G__26237;
chunk__26113 = G__26238;
count__26114 = G__26239;
i__26115 = G__26240;
continue;
}
} else {
return null;
}
}
break;
}
}));

(lab.map.add_markers_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(lab.map.add_markers_BANG_.cljs$lang$applyTo = (function (seq26107){
var G__26108 = cljs.core.first(seq26107);
var seq26107__$1 = cljs.core.next(seq26107);
var G__26109 = cljs.core.first(seq26107__$1);
var seq26107__$2 = cljs.core.next(seq26107__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26108,G__26109,seq26107__$2);
}));

lab.map.add_geojson_BANG_ = (function lab$map$add_geojson_BANG_(view,data){

lab.views.set_mode_BANG_(view,new cljs.core.Keyword(null,"map","map",1371690461));

var l = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.components),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"map","map",1371690461)], null));
var m = module$node_modules$leaflet$dist$leaflet_src.geoJSON(cljs.core.clj__GT_js(data),({"onEachFeature": (function (feature,layer){
return lab.map.update_data_BANG_(layer,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(feature.properties,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
})}));
m.addTo(l);

return m;
});
lab.map.line_colors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#0cc2aa","#fcc100","#a88add"], null);
var index_26244 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
lab.map.next_color = (function lab$map$next_color(){

var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(lab.map.line_colors,cljs.core.mod(cljs.core.deref(index_26244),cljs.core.count(lab.map.line_colors)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(index_26244,cljs.core.inc);

return result;
});
/**
 * Add a polyline with the given seq of lat-lon pairs or flattened list (:as-list true).
 */
lab.map.add_polyline_BANG_ = (function lab$map$add_polyline_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26248 = arguments.length;
var i__4865__auto___26249 = (0);
while(true){
if((i__4865__auto___26249 < len__4864__auto___26248)){
args__4870__auto__.push((arguments[i__4865__auto___26249]));

var G__26253 = (i__4865__auto___26249 + (1));
i__4865__auto___26249 = G__26253;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return lab.map.add_polyline_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(lab.map.add_polyline_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,points,p__26131){
var map__26132 = p__26131;
var map__26132__$1 = cljs.core.__destructure_map(map__26132);
var rev = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26132__$1,new cljs.core.Keyword(null,"rev","rev",12702670),false);
var as_list = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26132__$1,new cljs.core.Keyword(null,"as-list","as-list",199551056),false);
var fit_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26132__$1,new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854),true);
lab.views.set_mode_BANG_(view,new cljs.core.Keyword(null,"map","map",1371690461));

var l = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.components),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"map","map",1371690461)], null));
var points__$1 = ((cljs.core.not(as_list))?points:cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),points)));
var points__$2 = ((cljs.core.not(rev))?points__$1:cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__26133){
var vec__26134 = p__26133;
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26134,(0),null);
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26134,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,lat], null);
}),points__$1));
var m = module$node_modules$leaflet$dist$leaflet_src.polyline(cljs.core.clj__GT_js(points__$2),({"color": lab.map.next_color()}));
m.addTo(l);

if(cljs.core.truth_(fit_bounds)){
l.fitBounds(m.getBounds());
} else {
}

return m;
}));

(lab.map.add_polyline_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(lab.map.add_polyline_BANG_.cljs$lang$applyTo = (function (seq26127){
var G__26128 = cljs.core.first(seq26127);
var seq26127__$1 = cljs.core.next(seq26127);
var G__26129 = cljs.core.first(seq26127__$1);
var seq26127__$2 = cljs.core.next(seq26127__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26128,G__26129,seq26127__$2);
}));

/**
 * Add a polyline from a string value with each row containing comma-separated lat and long values.
 */
lab.map.polyline_from_str_BANG_ = (function lab$map$polyline_from_str_BANG_(view,points){
return lab.map.add_polyline_BANG_(view,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26143_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(parseFloat,p1__26143_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26142_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__26142_SHARP_,/,/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(points,/\n/))));
});
/**
 * Parse a Postgres DB dump and get latitude-longitude pairs from a column that has comma-separated lat and long value.
 */
lab.map.polyline_from_dbdump_BANG_ = (function lab$map$polyline_from_dbdump_BANG_(view,dump){
return lab.map.add_polyline_BANG_(view,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26148_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(parseFloat,p1__26148_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26144_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__26144_SHARP_),/,/);
}),cljs.core.re_seq(/\|\s*(\d+\.\d+,\d+\.\d+)\s*\|/,dump))));
});
/**
 * Add a WKT object to the view
 */
lab.map.add_wkt_BANG_ = (function lab$map$add_wkt_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26271 = arguments.length;
var i__4865__auto___26272 = (0);
while(true){
if((i__4865__auto___26272 < len__4864__auto___26271)){
args__4870__auto__.push((arguments[i__4865__auto___26272]));

var G__26273 = (i__4865__auto___26272 + (1));
i__4865__auto___26272 = G__26273;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return lab.map.add_wkt_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(lab.map.add_wkt_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,wkt_string,p__26153){
var map__26155 = p__26153;
var map__26155__$1 = cljs.core.__destructure_map(map__26155);
var fit_bounds_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26155__$1,new cljs.core.Keyword(null,"fit-bounds?","fit-bounds?",-1946988389),false);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26155__$1,new cljs.core.Keyword(null,"options","options",99638489),null);
lab.views.set_mode_BANG_(view,new cljs.core.Keyword(null,"map","map",1371690461));

var m = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.components),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"map","map",1371690461)], null));
var custom_layer = (cljs.core.truth_(options)?module$node_modules$leaflet$dist$leaflet_src.geoJson(null,options):null);
var layer = module$node_modules$leaflet_omnivore$index.wkt.parse(wkt_string,null,custom_layer);
layer.addTo(m);

if(cljs.core.truth_(fit_bounds_QMARK_)){
m.fitBounds(layer.getBounds());
} else {
}

return layer;
}));

(lab.map.add_wkt_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(lab.map.add_wkt_BANG_.cljs$lang$applyTo = (function (seq26149){
var G__26150 = cljs.core.first(seq26149);
var seq26149__$1 = cljs.core.next(seq26149);
var G__26151 = cljs.core.first(seq26149__$1);
var seq26149__$2 = cljs.core.next(seq26149__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26150,G__26151,seq26149__$2);
}));

/**
 * Add a KML object to the view
 */
lab.map.add_kml_BANG_ = (function lab$map$add_kml_BANG_(view,kml_string){
lab.views.set_mode_BANG_(view,new cljs.core.Keyword(null,"map","map",1371690461));

var m = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.components),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"map","map",1371690461)], null));
var layer = module$node_modules$leaflet_omnivore$index.kml.parse(kml_string);
layer.addTo(m);

return m.fitBounds(layer.getBounds());
});
/**
 * Get the map's current center and radius
 */
lab.map.map_center_and_radius = (function lab$map$map_center_and_radius(view){
var m = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.components),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"map","map",1371690461)], null));
var bounds = m.getBounds();
var center = bounds.getCenter();
var radius = center.distanceTo(bounds.getSouthWest());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(center,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),radius], null);
});
/**
 * Pan the map to the given latitude and longitude position.
 */
lab.map.pan_to_BANG_ = (function lab$map$pan_to_BANG_(var_args){
var G__26163 = arguments.length;
switch (G__26163) {
case 3:
return lab.map.pan_to_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lab.map.pan_to_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lab.map.pan_to_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (view,lat,lon){
return lab.map.pan_to_BANG_.cljs$core$IFn$_invoke$arity$4(view,lat,lon,false);
}));

(lab.map.pan_to_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (view,lat,lon,animate_QMARK_){
var m = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.components),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"map","map",1371690461)], null));
return m.panTo((new module$node_modules$leaflet$dist$leaflet_src.LatLng(lat,lon)),({"animate": animate_QMARK_}));
}));

(lab.map.pan_to_BANG_.cljs$lang$maxFixedArity = 4);

