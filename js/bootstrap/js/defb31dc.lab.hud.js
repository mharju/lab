goog.provide('lab.hud');
lab.hud.hud_duration = (function (){var stored = JSON.parse(localStorage.getItem("hud_duration"));
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((((!((stored == null))))?stored:(3000)));
})();
/**
 * Set the duration in milliseconds the HUD will be shown (needs hud-result to be true)
 */
lab.hud.set_hud_duration_BANG_ = (function lab$hud$set_hud_duration_BANG_(duration){
return localStorage.setItem("hud_duration",cljs.core.reset_BANG_(lab.hud.hud_duration,duration));
});
var timeout_26377 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
lab.hud.show_BANG_ = (function lab$hud$show_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26378 = arguments.length;
var i__4865__auto___26379 = (0);
while(true){
if((i__4865__auto___26379 < len__4864__auto___26378)){
args__4870__auto__.push((arguments[i__4865__auto___26379]));

var G__26380 = (i__4865__auto___26379 + (1));
i__4865__auto___26379 = G__26380;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return lab.hud.show_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(lab.hud.show_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (message,p__26375){
var map__26376 = p__26375;
var map__26376__$1 = cljs.core.__destructure_map(map__26376);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26376__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(3000));
var hud = $("#hud");
var message__$1 = (((cljs.core.count(message) > (140)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(message.substring((0),(120)))," ... ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message.substring((cljs.core.count(message) - (15))))].join(''):message);
if(cljs.core.truth_(cljs.core.deref(timeout_26377))){
clearTimeout(timeout_26377);
} else {
}

hud.show().text(message__$1).addClass("visible");

return cljs.core.reset_BANG_(timeout_26377,setTimeout((function (){
hud.removeClass("visible");

return setTimeout((function (){
return hud.hide();
}),(300));
}),duration));
}));

(lab.hud.show_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lab.hud.show_BANG_.cljs$lang$applyTo = (function (seq26373){
var G__26374 = cljs.core.first(seq26373);
var seq26373__$1 = cljs.core.next(seq26373);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26374,seq26373__$1);
}));

