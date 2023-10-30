goog.provide('lab.dashboard');
goog.scope(function(){
  lab.dashboard.goog$module$goog$object = goog.module.get('goog.object');
});
lab.dashboard.dashboard_BANG_ = (function lab$dashboard$dashboard_BANG_(view){
return lab.views.set_mode_BANG_(view,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508));
});
lab.dashboard.metric_BANG_ = (function lab$dashboard$metric_BANG_(var_args){
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

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return lab.dashboard.metric_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(lab.dashboard.metric_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,id,value,p__26173){
var map__26174 = p__26173;
var map__26174__$1 = cljs.core.__destructure_map(map__26174);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26174__$1,new cljs.core.Keyword(null,"title","title",636505583));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26174__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
if(cljs.core.truth_(document.querySelector([".metric.",cljs.core.name(id)].join('')))){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.views),view).querySelector(".dashboard").insertAdjacentHTML("beforeend",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html((function (){var G__26176 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["metric ",cljs.core.name(id)].join('')], null)], null);
var G__26176__$1 = (cljs.core.truth_(title)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26176,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),title], null)):G__26176);
var G__26176__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26176__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.value","div.value",841295219),value], null))
;
if(cljs.core.truth_(unit)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26176__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.unit","div.unit",1739536242),unit], null));
} else {
return G__26176__$2;
}
})())));
}
}));

(lab.dashboard.metric_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(lab.dashboard.metric_BANG_.cljs$lang$applyTo = (function (seq26169){
var G__26170 = cljs.core.first(seq26169);
var seq26169__$1 = cljs.core.next(seq26169);
var G__26171 = cljs.core.first(seq26169__$1);
var seq26169__$2 = cljs.core.next(seq26169__$1);
var G__26172 = cljs.core.first(seq26169__$2);
var seq26169__$3 = cljs.core.next(seq26169__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26170,G__26171,G__26172,seq26169__$3);
}));

lab.dashboard.update_BANG_ = (function lab$dashboard$update_BANG_(view,id,value){
return lab.dashboard.goog$module$goog$object.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.views),view).querySelector([".dashboard .metric.",cljs.core.name(id)," .value"].join('')),"innerHTML",value);
});
lab.dashboard.clear_BANG_ = (function lab$dashboard$clear_BANG_(view){
return lab.dashboard.goog$module$goog$object.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.views),view).querySelector(".dashboard"),"innerHTML","");
});
