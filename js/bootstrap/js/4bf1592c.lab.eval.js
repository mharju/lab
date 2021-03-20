goog.provide('lab.eval');
lab.eval.compile_state_ref = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
lab.eval.comment_evaled = (function (){var stored = JSON.parse(localStorage.getItem("comment_evaled"));
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((((!((stored == null))))?stored:false));
})();
lab.eval.toggle_comment_evaled_BANG_ = (function lab$eval$toggle_comment_evaled_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lab.eval.comment_evaled,cljs.core.not);

return localStorage.setItem("comment_evaled",cljs.core.deref(lab.eval.comment_evaled));
});
lab.eval.eval_BANG_ = (function lab$eval$eval_BANG_(var_args){
var G__27362 = arguments.length;
switch (G__27362) {
case 1:
return lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (value){
return lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$2(value,(function (p__27363){
var map__27364 = p__27363;
var map__27364__$1 = (((((!((map__27364 == null))))?(((((map__27364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27364):map__27364);
var result = map__27364__$1;
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27364__$1,new cljs.core.Keyword(null,"value","value",305978217));
console.log(result);

return lab.hud.show_BANG_(((clojure.string.blank_QMARK_(value__$1))?result:cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1)));
}));
}));

(lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (value,complete_fn){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(lab.eval.compile_state_ref,value,"[test]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shadow.cljs.bootstrap.browser.load,lab.eval.compile_state_ref)], null),complete_fn);
}));

(lab.eval.eval_BANG_.cljs$lang$maxFixedArity = 2);

lab.eval.eval_forms_BANG_ = (function lab$eval$eval_forms_BANG_(lines){
var seq__27366 = cljs.core.seq(lab.parsing.lines__GT_forms(lines));
var chunk__27367 = null;
var count__27368 = (0);
var i__27369 = (0);
while(true){
if((i__27369 < count__27368)){
var form = chunk__27367.cljs$core$IIndexed$_nth$arity$2(null,i__27369);
console.log("Eval",form);

lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$1(form);


var G__27395 = seq__27366;
var G__27396 = chunk__27367;
var G__27397 = count__27368;
var G__27398 = (i__27369 + (1));
seq__27366 = G__27395;
chunk__27367 = G__27396;
count__27368 = G__27397;
i__27369 = G__27398;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27366);
if(temp__5735__auto__){
var seq__27366__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27366__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27366__$1);
var G__27399 = cljs.core.chunk_rest(seq__27366__$1);
var G__27400 = c__4556__auto__;
var G__27401 = cljs.core.count(c__4556__auto__);
var G__27402 = (0);
seq__27366 = G__27399;
chunk__27367 = G__27400;
count__27368 = G__27401;
i__27369 = G__27402;
continue;
} else {
var form = cljs.core.first(seq__27366__$1);
console.log("Eval",form);

lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$1(form);


var G__27403 = cljs.core.next(seq__27366__$1);
var G__27404 = null;
var G__27405 = (0);
var G__27406 = (0);
seq__27366 = G__27403;
chunk__27367 = G__27404;
count__27368 = G__27405;
i__27369 = G__27406;
continue;
}
} else {
return null;
}
}
break;
}
});
lab.eval.try_eval_BANG_ = (function lab$eval$try_eval_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27407 = arguments.length;
var i__4737__auto___27408 = (0);
while(true){
if((i__4737__auto___27408 < len__4736__auto___27407)){
args__4742__auto__.push((arguments[i__4737__auto___27408]));

var G__27409 = (i__4737__auto___27408 + (1));
i__4737__auto___27408 = G__27409;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return lab.eval.try_eval_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(lab.eval.try_eval_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cm,p__27372){
var map__27373 = p__27372;
var map__27373__$1 = (((((!((map__27373 == null))))?(((((map__27373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27373):map__27373);
var comment_evaled = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27373__$1,new cljs.core.Keyword(null,"comment-evaled","comment-evaled",-1603842930),true);
var top_form = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27373__$1,new cljs.core.Keyword(null,"top-form","top-form",-437124996),false);
var hud_result = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27373__$1,new cljs.core.Keyword(null,"hud-result","hud-result",942343078),false);
var hud_duration = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27373__$1,new cljs.core.Keyword(null,"hud-duration","hud-duration",-1418254741),(3000));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27373__$1,new cljs.core.Keyword(null,"after","after",594996914),cljs.core.identity);
var cursor_pos = cm.getCursor();
var cursor = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),goog.object.get(cursor_pos,"line"),new cljs.core.Keyword(null,"ch","ch",-554717905),goog.object.get(cursor_pos,"ch")], null);
var part = (((!(clojure.string.blank_QMARK_(cm.getSelection()))))?cm.getSelection():(cljs.core.truth_(top_form)?lab.parsing.get_top_form(cm,cursor):lab.parsing.get_current_form(cm,cursor)
));
lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$2(part,(function (p__27378){
var map__27379 = p__27378;
var map__27379__$1 = (((((!((map__27379 == null))))?(((((map__27379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27379):map__27379);
var result = map__27379__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27379__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27379__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var editor_content = cm.getValue();
var success = cljs.core.boolean$(cljs.core.not(error));
var value__$1 = ((((success) && (clojure.string.blank_QMARK_(value))))?"OK":(((((!(success))) && (clojure.string.blank_QMARK_(value))))?"See console":value
));
var new_editor_content = (cljs.core.truth_(((success)?comment_evaled:false))?editor_content.replace(RegExp("^([^;])","gm"),";; $1"):editor_content);
console.log(result);

if((!(success))){
alert(error);
} else {
if(cljs.core.not(hud_result)){
cm.setValue([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_editor_content),"\n;; => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1),"\n"].join(''));

cm.setCursor(cm.lineCount(),(1));
} else {
lab.hud.show_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"duration","duration",1444101068),hud_duration], 0));

cm.setCursor(cursor_pos);
}
}

return (after.cljs$core$IFn$_invoke$arity$2 ? after.cljs$core$IFn$_invoke$arity$2(part,result) : after.call(null,part,result));
}));

return part;
}));

(lab.eval.try_eval_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lab.eval.try_eval_BANG_.cljs$lang$applyTo = (function (seq27370){
var G__27371 = cljs.core.first(seq27370);
var seq27370__$1 = cljs.core.next(seq27370);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27371,seq27370__$1);
}));

shadow.cljs.bootstrap.browser.init(lab.eval.compile_state_ref,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),"js/bootstrap"], null),(function (){
console.info("Bootstrap ready. Evaluating default");

return lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$1("(ns cljs.user\n                       (:require [lab.map :as m]\n                                 [lab.graph :as g]\n                                 [lab.console :as c]\n                                 [lab.vis :as v]\n                                 [lab.views :as views]\n                                 [lab.helpers :as h]\n                                 [lab.dashboard :as d]\n                                 [lab.autodetect]))");
}));
