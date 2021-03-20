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
var tile = (function (){var fexpr__26579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lab.map.providers,provider);
return (fexpr__26579.cljs$core$IFn$_invoke$arity$0 ? fexpr__26579.cljs$core$IFn$_invoke$arity$0() : fexpr__26579.call(null));
})();
instance.setView([60.4530898,22.3139035],(15));

tile.addTo(instance);

if(cljs.core.boolean$(draw_mode_QMARK_)){
var toolbar_26638 = (new module$node_modules$leaflet$dist$leaflet_src.Control.Draw(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"circle","circle",1903212362),false,new cljs.core.Keyword(null,"circlemarker","circlemarker",1584913828),false], null)], null))));
instance.addControl(toolbar_26638);
} else {
}

return instance;
});
/**
 * Create a new map for view. Optional provider :cartodb-positron
 */
lab.map.map_BANG_ = (function lab$map$map_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26639 = arguments.length;
var i__4737__auto___26640 = (0);
while(true){
if((i__4737__auto___26640 < len__4736__auto___26639)){
args__4742__auto__.push((arguments[i__4737__auto___26640]));

var G__26641 = (i__4737__auto___26640 + (1));
i__4737__auto___26640 = G__26641;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return lab.map.map_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(lab.map.map_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,p__26582){
var map__26583 = p__26582;
var map__26583__$1 = (((((!((map__26583 == null))))?(((((map__26583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26583):map__26583);
var provider = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26583__$1,new cljs.core.Keyword(null,"provider","provider",-302056900),new cljs.core.Keyword(null,"cartodb-voyager","cartodb-voyager",-1597853643));
var draw_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26583__$1,new cljs.core.Keyword(null,"draw-mode?","draw-mode?",140541474),null);
lab.views.set_mode_BANG_(view,new cljs.core.Keyword(null,"map","map",1371690461));

var temp__5735__auto___26642 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.components),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"map","map",1371690461)], null));
if(cljs.core.truth_(temp__5735__auto___26642)){
var current_26643 = temp__5735__auto___26642;
current_26643.remove();
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
(lab.map.map_BANG_.cljs$lang$applyTo = (function (seq26580){
var G__26581 = cljs.core.first(seq26580);
var seq26580__$1 = cljs.core.next(seq26580);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26581,seq26580__$1);
}));

lab.map.invalidate_size_BANG_ = (function lab$map$invalidate_size_BANG_(){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function lab$map$invalidate_size_BANG__$_iter__26585(s__26586){
return (new cljs.core.LazySeq(null,(function (){
var s__26586__$1 = s__26586;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26586__$1);
if(temp__5735__auto__){
var s__26586__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26586__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26586__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26588 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26587 = (0);
while(true){
if((i__26587 < size__4528__auto__)){
var m = cljs.core._nth(c__4527__auto__,i__26587);
if((!((m == null)))){
cljs.core.chunk_append(b__26588,m.invalidateSize());

var G__26644 = (i__26587 + (1));
i__26587 = G__26644;
continue;
} else {
var G__26645 = (i__26587 + (1));
i__26587 = G__26645;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26588),lab$map$invalidate_size_BANG__$_iter__26585(cljs.core.chunk_rest(s__26586__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26588),null);
}
} else {
var m = cljs.core.first(s__26586__$2);
if((!((m == null)))){
return cljs.core.cons(m.invalidateSize(),lab$map$invalidate_size_BANG__$_iter__26585(cljs.core.rest(s__26586__$2)));
} else {
var G__26646 = cljs.core.rest(s__26586__$2);
s__26586__$1 = G__26646;
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
return iter__4529__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.vals(cljs.core.deref(lab.views.components))));
})());
});
lab.layout.register_handler_BANG_(lab.map.invalidate_size_BANG_);
/**
 * Center the map to the given point and zoom level. Zoom defaults to 13.
 */
lab.map.map_center_BANG_ = (function lab$map$map_center_BANG_(var_args){
var G__26590 = arguments.length;
switch (G__26590) {
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
var args__4742__auto__ = [];
var len__4736__auto___26655 = arguments.length;
var i__4737__auto___26657 = (0);
while(true){
if((i__4737__auto___26657 < len__4736__auto___26655)){
args__4742__auto__.push((arguments[i__4737__auto___26657]));

var G__26658 = (i__4737__auto___26657 + (1));
i__4737__auto___26657 = G__26658;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return lab.map.add_marker_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(lab.map.add_marker_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,lat,lon,p__26595){
var map__26596 = p__26595;
var map__26596__$1 = (((((!((map__26596 == null))))?(((((map__26596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26596):map__26596);
var rev = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26596__$1,new cljs.core.Keyword(null,"rev","rev",12702670),false);
var center_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26596__$1,new cljs.core.Keyword(null,"center?","center?",-323116631),true);
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26596__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(13));
var center_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26596__$1,new cljs.core.Keyword(null,"center-opts","center-opts",-1225851284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null)], null));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26596__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26596__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26596__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
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
(lab.map.add_marker_BANG_.cljs$lang$applyTo = (function (seq26591){
var G__26592 = cljs.core.first(seq26591);
var seq26591__$1 = cljs.core.next(seq26591);
var G__26593 = cljs.core.first(seq26591__$1);
var seq26591__$2 = cljs.core.next(seq26591__$1);
var G__26594 = cljs.core.first(seq26591__$2);
var seq26591__$3 = cljs.core.next(seq26591__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26592,G__26593,G__26594,seq26591__$3);
}));

lab.map.add_custom_layer_BANG_ = (function lab$map$add_custom_layer_BANG_(view,layer){

var m = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.components),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"map","map",1371690461)], null));
return layer.addTo(m);
});
lab.map.add_markers_BANG_ = (function lab$map$add_markers_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26663 = arguments.length;
var i__4737__auto___26664 = (0);
while(true){
if((i__4737__auto___26664 < len__4736__auto___26663)){
args__4742__auto__.push((arguments[i__4737__auto___26664]));

var G__26665 = (i__4737__auto___26664 + (1));
i__4737__auto___26664 = G__26665;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return lab.map.add_markers_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(lab.map.add_markers_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,points,p__26601){
var map__26602 = p__26601;
var map__26602__$1 = (((((!((map__26602 == null))))?(((((map__26602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26602):map__26602);
var args = map__26602__$1;
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26602__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.identity);
var data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26602__$1,new cljs.core.Keyword(null,"data-fn","data-fn",777152661),null);

var seq__26604 = cljs.core.seq(points);
var chunk__26605 = null;
var count__26606 = (0);
var i__26607 = (0);
while(true){
if((i__26607 < count__26606)){
var point = chunk__26605.cljs$core$IIndexed$_nth$arity$2(null,i__26607);
cljs.core.apply.cljs$core$IFn$_invoke$arity$3(lab.map.add_marker_BANG_,view,cljs.core.flatten(cljs.core.into.cljs$core$IFn$_invoke$arity$2((key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(point) : key_fn.call(null,point)),(function (){var G__26610 = args;
var G__26610__$1 = (cljs.core.truth_(data_fn)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26610,new cljs.core.Keyword(null,"data","data",-232669377),(data_fn.cljs$core$IFn$_invoke$arity$1 ? data_fn.cljs$core$IFn$_invoke$arity$1(point) : data_fn.call(null,point))):G__26610);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26610__$1,new cljs.core.Keyword(null,"data-fn","data-fn",777152661));

})())));


var G__26671 = seq__26604;
var G__26672 = chunk__26605;
var G__26673 = count__26606;
var G__26674 = (i__26607 + (1));
seq__26604 = G__26671;
chunk__26605 = G__26672;
count__26606 = G__26673;
i__26607 = G__26674;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26604);
if(temp__5735__auto__){
var seq__26604__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26604__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26604__$1);
var G__26675 = cljs.core.chunk_rest(seq__26604__$1);
var G__26676 = c__4556__auto__;
var G__26677 = cljs.core.count(c__4556__auto__);
var G__26678 = (0);
seq__26604 = G__26675;
chunk__26605 = G__26676;
count__26606 = G__26677;
i__26607 = G__26678;
continue;
} else {
var point = cljs.core.first(seq__26604__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$3(lab.map.add_marker_BANG_,view,cljs.core.flatten(cljs.core.into.cljs$core$IFn$_invoke$arity$2((key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(point) : key_fn.call(null,point)),(function (){var G__26611 = args;
var G__26611__$1 = (cljs.core.truth_(data_fn)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26611,new cljs.core.Keyword(null,"data","data",-232669377),(data_fn.cljs$core$IFn$_invoke$arity$1 ? data_fn.cljs$core$IFn$_invoke$arity$1(point) : data_fn.call(null,point))):G__26611);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26611__$1,new cljs.core.Keyword(null,"data-fn","data-fn",777152661));

})())));


var G__26679 = cljs.core.next(seq__26604__$1);
var G__26680 = null;
var G__26681 = (0);
var G__26682 = (0);
seq__26604 = G__26679;
chunk__26605 = G__26680;
count__26606 = G__26681;
i__26607 = G__26682;
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
(lab.map.add_markers_BANG_.cljs$lang$applyTo = (function (seq26598){
var G__26599 = cljs.core.first(seq26598);
var seq26598__$1 = cljs.core.next(seq26598);
var G__26600 = cljs.core.first(seq26598__$1);
var seq26598__$2 = cljs.core.next(seq26598__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26599,G__26600,seq26598__$2);
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
var index_26683 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
lab.map.next_color = (function lab$map$next_color(){

var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(lab.map.line_colors,cljs.core.mod(cljs.core.deref(index_26683),cljs.core.count(lab.map.line_colors)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(index_26683,cljs.core.inc);

return result;
});
/**
 * Add a polyline with the given seq of lat-lon pairs or flattened list (:as-list true).
 */
lab.map.add_polyline_BANG_ = (function lab$map$add_polyline_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26684 = arguments.length;
var i__4737__auto___26685 = (0);
while(true){
if((i__4737__auto___26685 < len__4736__auto___26684)){
args__4742__auto__.push((arguments[i__4737__auto___26685]));

var G__26686 = (i__4737__auto___26685 + (1));
i__4737__auto___26685 = G__26686;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return lab.map.add_polyline_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(lab.map.add_polyline_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,points,p__26615){
var map__26616 = p__26615;
var map__26616__$1 = (((((!((map__26616 == null))))?(((((map__26616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26616):map__26616);
var rev = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26616__$1,new cljs.core.Keyword(null,"rev","rev",12702670),false);
var as_list = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26616__$1,new cljs.core.Keyword(null,"as-list","as-list",199551056),false);
var fit_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26616__$1,new cljs.core.Keyword(null,"fit-bounds","fit-bounds",456059854),true);
lab.views.set_mode_BANG_(view,new cljs.core.Keyword(null,"map","map",1371690461));

var l = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.components),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"map","map",1371690461)], null));
var points__$1 = ((cljs.core.not(as_list))?points:cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),points)));
var points__$2 = ((cljs.core.not(rev))?points__$1:cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__26618){
var vec__26619 = p__26618;
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26619,(0),null);
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26619,(1),null);
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
(lab.map.add_polyline_BANG_.cljs$lang$applyTo = (function (seq26612){
var G__26613 = cljs.core.first(seq26612);
var seq26612__$1 = cljs.core.next(seq26612);
var G__26614 = cljs.core.first(seq26612__$1);
var seq26612__$2 = cljs.core.next(seq26612__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26613,G__26614,seq26612__$2);
}));

/**
 * Add a polyline from a string value with each row containing comma-separated lat and long values.
 */
lab.map.polyline_from_str_BANG_ = (function lab$map$polyline_from_str_BANG_(view,points){
return lab.map.add_polyline_BANG_(view,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26623_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(parseFloat,p1__26623_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26622_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__26622_SHARP_,/,/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(points,/\n/))));
});
/**
 * Parse a Postgres DB dump and get latitude-longitude pairs from a column that has comma-separated lat and long value.
 */
lab.map.polyline_from_dbdump_BANG_ = (function lab$map$polyline_from_dbdump_BANG_(view,dump){
return lab.map.add_polyline_BANG_(view,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26625_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(parseFloat,p1__26625_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26624_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__26624_SHARP_),/,/);
}),cljs.core.re_seq(/\|\s*(\d+\.\d+,\d+\.\d+)\s*\|/,dump))));
});
/**
 * Add a WKT object to the view
 */
lab.map.add_wkt_BANG_ = (function lab$map$add_wkt_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26687 = arguments.length;
var i__4737__auto___26688 = (0);
while(true){
if((i__4737__auto___26688 < len__4736__auto___26687)){
args__4742__auto__.push((arguments[i__4737__auto___26688]));

var G__26689 = (i__4737__auto___26688 + (1));
i__4737__auto___26688 = G__26689;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return lab.map.add_wkt_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(lab.map.add_wkt_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,wkt_string,p__26629){
var map__26630 = p__26629;
var map__26630__$1 = (((((!((map__26630 == null))))?(((((map__26630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26630):map__26630);
var fit_bounds_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26630__$1,new cljs.core.Keyword(null,"fit-bounds?","fit-bounds?",-1946988389),false);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26630__$1,new cljs.core.Keyword(null,"options","options",99638489),null);
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
(lab.map.add_wkt_BANG_.cljs$lang$applyTo = (function (seq26626){
var G__26627 = cljs.core.first(seq26626);
var seq26626__$1 = cljs.core.next(seq26626);
var G__26628 = cljs.core.first(seq26626__$1);
var seq26626__$2 = cljs.core.next(seq26626__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26627,G__26628,seq26626__$2);
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
var G__26633 = arguments.length;
switch (G__26633) {
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

