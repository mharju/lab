goog.provide('lab.eval');
goog.scope(function(){
  lab.eval.goog$module$goog$object = goog.module.get('goog.object');
});
lab.eval.compile_state_ref = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
lab.eval.comment_evaled = (function (){var stored = JSON.parse(localStorage.getItem("comment_evaled"));
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((((!((stored == null))))?stored:false));
})();
lab.eval.toggle_comment_evaled_BANG_ = (function lab$eval$toggle_comment_evaled_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lab.eval.comment_evaled,cljs.core.not);

return localStorage.setItem("comment_evaled",cljs.core.deref(lab.eval.comment_evaled));
});
lab.eval.eval_BANG_ = (function lab$eval$eval_BANG_(var_args){
var G__26625 = arguments.length;
switch (G__26625) {
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
return lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$2(value,(function (p__26629){
var map__26630 = p__26629;
var map__26630__$1 = cljs.core.__destructure_map(map__26630);
var result = map__26630__$1;
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26630__$1,new cljs.core.Keyword(null,"value","value",305978217));
console.log(result);

return lab.hud.show_BANG_(((clojure.string.blank_QMARK_(value__$1))?result:cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1)));
}));
}));

(lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (value,complete_fn){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(lab.eval.compile_state_ref,value,"[test]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shadow.cljs.bootstrap.browser.load,lab.eval.compile_state_ref)], null),complete_fn);
}));

(lab.eval.eval_BANG_.cljs$lang$maxFixedArity = 2);

lab.eval.eval_forms_BANG_ = (function lab$eval$eval_forms_BANG_(lines){
var seq__26648 = cljs.core.seq(lab.parsing.lines__GT_forms(lines));
var chunk__26649 = null;
var count__26650 = (0);
var i__26651 = (0);
while(true){
if((i__26651 < count__26650)){
var form = chunk__26649.cljs$core$IIndexed$_nth$arity$2(null,i__26651);
console.log("Eval",form);

lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$1(form);


var G__26672 = seq__26648;
var G__26673 = chunk__26649;
var G__26674 = count__26650;
var G__26675 = (i__26651 + (1));
seq__26648 = G__26672;
chunk__26649 = G__26673;
count__26650 = G__26674;
i__26651 = G__26675;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__26648);
if(temp__5753__auto__){
var seq__26648__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26648__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__26648__$1);
var G__26676 = cljs.core.chunk_rest(seq__26648__$1);
var G__26677 = c__4679__auto__;
var G__26678 = cljs.core.count(c__4679__auto__);
var G__26679 = (0);
seq__26648 = G__26676;
chunk__26649 = G__26677;
count__26650 = G__26678;
i__26651 = G__26679;
continue;
} else {
var form = cljs.core.first(seq__26648__$1);
console.log("Eval",form);

lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$1(form);


var G__26680 = cljs.core.next(seq__26648__$1);
var G__26681 = null;
var G__26682 = (0);
var G__26683 = (0);
seq__26648 = G__26680;
chunk__26649 = G__26681;
count__26650 = G__26682;
i__26651 = G__26683;
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
var args__4870__auto__ = [];
var len__4864__auto___26684 = arguments.length;
var i__4865__auto___26685 = (0);
while(true){
if((i__4865__auto___26685 < len__4864__auto___26684)){
args__4870__auto__.push((arguments[i__4865__auto___26685]));

var G__26686 = (i__4865__auto___26685 + (1));
i__4865__auto___26685 = G__26686;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return lab.eval.try_eval_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(lab.eval.try_eval_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cm,p__26667){
var map__26668 = p__26667;
var map__26668__$1 = cljs.core.__destructure_map(map__26668);
var comment_evaled = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26668__$1,new cljs.core.Keyword(null,"comment-evaled","comment-evaled",-1603842930),true);
var top_form = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26668__$1,new cljs.core.Keyword(null,"top-form","top-form",-437124996),false);
var hud_result = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26668__$1,new cljs.core.Keyword(null,"hud-result","hud-result",942343078),false);
var hud_duration = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26668__$1,new cljs.core.Keyword(null,"hud-duration","hud-duration",-1418254741),(3000));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26668__$1,new cljs.core.Keyword(null,"after","after",594996914),cljs.core.identity);
var cursor_pos = cm.getCursor();
var cursor = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),lab.eval.goog$module$goog$object.get(cursor_pos,"line"),new cljs.core.Keyword(null,"ch","ch",-554717905),lab.eval.goog$module$goog$object.get(cursor_pos,"ch")], null);
var part = (((!(clojure.string.blank_QMARK_(cm.getSelection()))))?cm.getSelection():(cljs.core.truth_(top_form)?lab.parsing.get_top_form(cm,cursor):lab.parsing.get_current_form(cm,cursor)
));
lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$2(part,(function (p__26669){
var map__26670 = p__26669;
var map__26670__$1 = cljs.core.__destructure_map(map__26670);
var result = map__26670__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26670__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26670__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var editor_content = cm.getValue();
var success = cljs.core.boolean$(cljs.core.not(error));
var value__$1 = ((((success) && (clojure.string.blank_QMARK_(value))))?"OK":(((((!(success))) && (clojure.string.blank_QMARK_(value))))?"See console":value
));
var new_editor_content = (cljs.core.truth_((function (){var and__4251__auto__ = success;
if(and__4251__auto__){
return comment_evaled;
} else {
return and__4251__auto__;
}
})())?editor_content.replace(RegExp("^([^;])","gm"),";; $1"):editor_content);
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
(lab.eval.try_eval_BANG_.cljs$lang$applyTo = (function (seq26665){
var G__26666 = cljs.core.first(seq26665);
var seq26665__$1 = cljs.core.next(seq26665);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26666,seq26665__$1);
}));

shadow.cljs.bootstrap.browser.init(lab.eval.compile_state_ref,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),"js/bootstrap"], null),(function (){
console.info("Bootstrap ready. Evaluating default");

return lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$1("(ns cljs.user\n                       (:require [lab.map :as m]\n                                 [lab.graph :as g]\n                                 [lab.console :as c]\n                                 [lab.views :as views]\n                                 [lab.helpers :as h]\n                                 [lab.dashboard :as d]\n                                 [clojure.string :as str]\n                                 [lab.autodetect]))");
}));
