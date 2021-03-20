goog.provide('lab.dashboard');
lab.dashboard.dashboard_BANG_ = (function lab$dashboard$dashboard_BANG_(view){
return lab.views.set_mode_BANG_(view,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508));
});
lab.dashboard.metric_BANG_ = (function lab$dashboard$metric_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26754 = arguments.length;
var i__4737__auto___26755 = (0);
while(true){
if((i__4737__auto___26755 < len__4736__auto___26754)){
args__4742__auto__.push((arguments[i__4737__auto___26755]));

var G__26756 = (i__4737__auto___26755 + (1));
i__4737__auto___26755 = G__26756;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return lab.dashboard.metric_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(lab.dashboard.metric_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,id,value,p__26737){
var map__26738 = p__26737;
var map__26738__$1 = (((((!((map__26738 == null))))?(((((map__26738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26738):map__26738);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26738__$1,new cljs.core.Keyword(null,"title","title",636505583));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26738__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
if(cljs.core.truth_(document.querySelector([".metric.",cljs.core.name(id)].join('')))){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.views),view).querySelector(".dashboard").insertAdjacentHTML("beforeend",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html((function (){var G__26741 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["metric ",cljs.core.name(id)].join('')], null)], null);
var G__26741__$1 = (cljs.core.truth_(title)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26741,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),title], null)):G__26741);
var G__26741__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26741__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.value","div.value",841295219),value], null))
;
if(cljs.core.truth_(unit)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26741__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.unit","div.unit",1739536242),unit], null));
} else {
return G__26741__$2;
}
})())));
}
}));

(lab.dashboard.metric_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(lab.dashboard.metric_BANG_.cljs$lang$applyTo = (function (seq26733){
var G__26734 = cljs.core.first(seq26733);
var seq26733__$1 = cljs.core.next(seq26733);
var G__26735 = cljs.core.first(seq26733__$1);
var seq26733__$2 = cljs.core.next(seq26733__$1);
var G__26736 = cljs.core.first(seq26733__$2);
var seq26733__$3 = cljs.core.next(seq26733__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26734,G__26735,G__26736,seq26733__$3);
}));

lab.dashboard.update_BANG_ = (function lab$dashboard$update_BANG_(view,id,value){
return goog.object.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.views),view).querySelector([".dashboard .metric.",cljs.core.name(id)," .value"].join('')),"innerHTML",value);
});
lab.dashboard.clear_BANG_ = (function lab$dashboard$clear_BANG_(view){
return goog.object.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.views),view).querySelector(".dashboard"),"innerHTML","");
});
