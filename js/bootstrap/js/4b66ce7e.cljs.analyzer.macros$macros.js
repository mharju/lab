goog.provide('cljs.analyzer.macros$macros');
var ret__4785__auto___29538 = (function (){
cljs.analyzer.macros$macros.with_warning_handlers = (function cljs$analyzer$macros$macros$with_warning_handlers(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29539 = arguments.length;
var i__4737__auto___29540 = (0);
while(true){
if((i__4737__auto___29540 < len__4736__auto___29539)){
args__4742__auto__.push((arguments[i__4737__auto___29540]));

var G__29541 = (i__4737__auto___29540 + (1));
i__4737__auto___29540 = G__29541;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.macros$macros.with_warning_handlers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.analyzer.macros$macros.with_warning_handlers.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,handlers,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-warning-handlers*","cljs.analyzer/*cljs-warning-handlers*",882579751,null),null,(1),null)),(new cljs.core.List(null,handlers,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.analyzer.macros$macros.with_warning_handlers.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.analyzer.macros$macros.with_warning_handlers.cljs$lang$applyTo = (function (seq29498){
var G__29499 = cljs.core.first(seq29498);
var seq29498__$1 = cljs.core.next(seq29498);
var G__29500 = cljs.core.first(seq29498__$1);
var seq29498__$2 = cljs.core.next(seq29498__$1);
var G__29501 = cljs.core.first(seq29498__$2);
var seq29498__$3 = cljs.core.next(seq29498__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29499,G__29500,G__29501,seq29498__$3);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.with_warning_handlers.cljs$lang$macro = true);

var ret__4785__auto___29542 = (function (){
cljs.analyzer.macros$macros.no_warn = (function cljs$analyzer$macros$macros$no_warn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29543 = arguments.length;
var i__4737__auto___29544 = (0);
while(true){
if((i__4737__auto___29544 < len__4736__auto___29543)){
args__4742__auto__.push((arguments[i__4737__auto___29544]));

var G__29545 = (i__4737__auto___29544 + (1));
i__4737__auto___29544 = G__29545;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.macros$macros.no_warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.analyzer.macros$macros.no_warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-warnings*","cljs.analyzer/*cljs-warnings*",-289667730,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",-927561820,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-warnings*","cljs.analyzer/*cljs-warnings*",-289667730,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.analyzer.macros$macros.no_warn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.analyzer.macros$macros.no_warn.cljs$lang$applyTo = (function (seq29505){
var G__29506 = cljs.core.first(seq29505);
var seq29505__$1 = cljs.core.next(seq29505);
var G__29507 = cljs.core.first(seq29505__$1);
var seq29505__$2 = cljs.core.next(seq29505__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29506,G__29507,seq29505__$2);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.no_warn.cljs$lang$macro = true);

var ret__4785__auto___29546 = (function (){
cljs.analyzer.macros$macros.with_core_macros = (function cljs$analyzer$macros$macros$with_core_macros(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29547 = arguments.length;
var i__4737__auto___29548 = (0);
while(true){
if((i__4737__auto___29548 < len__4736__auto___29547)){
args__4742__auto__.push((arguments[i__4737__auto___29548]));

var G__29549 = (i__4737__auto___29548 + (1));
i__4737__auto___29548 = G__29549;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.macros$macros.with_core_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.analyzer.macros$macros.with_core_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,path,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-path*","cljs.analyzer/*cljs-macros-path*",-1737616995,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,path,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reset!","cljs.core/reset!",657404621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","-cljs-macros-loaded","cljs.analyzer/-cljs-macros-loaded",1918493478,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-path*","cljs.analyzer/*cljs-macros-path*",-1737616995,null),null,(1),null)),(new cljs.core.List(null,path,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(cljs.analyzer.macros$macros.with_core_macros.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.analyzer.macros$macros.with_core_macros.cljs$lang$applyTo = (function (seq29508){
var G__29509 = cljs.core.first(seq29508);
var seq29508__$1 = cljs.core.next(seq29508);
var G__29510 = cljs.core.first(seq29508__$1);
var seq29508__$2 = cljs.core.next(seq29508__$1);
var G__29511 = cljs.core.first(seq29508__$2);
var seq29508__$3 = cljs.core.next(seq29508__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29509,G__29510,G__29511,seq29508__$3);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.with_core_macros.cljs$lang$macro = true);

var ret__4785__auto___29550 = (function (){
cljs.analyzer.macros$macros.with_core_macros_file = (function cljs$analyzer$macros$macros$with_core_macros_file(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29551 = arguments.length;
var i__4737__auto___29552 = (0);
while(true){
if((i__4737__auto___29552 < len__4736__auto___29551)){
args__4742__auto__.push((arguments[i__4737__auto___29552]));

var G__29553 = (i__4737__auto___29552 + (1));
i__4737__auto___29552 = G__29553;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.macros$macros.with_core_macros_file.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.analyzer.macros$macros.with_core_macros_file.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,path,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-path*","cljs.analyzer/*cljs-macros-path*",-1737616995,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,path,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reset!","cljs.core/reset!",657404621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","-cljs-macros-loaded","cljs.analyzer/-cljs-macros-loaded",1918493478,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-path*","cljs.analyzer/*cljs-macros-path*",-1737616995,null),null,(1),null)),(new cljs.core.List(null,path,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-is-classpath*","cljs.analyzer/*cljs-macros-is-classpath*",1674023778,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(cljs.analyzer.macros$macros.with_core_macros_file.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.analyzer.macros$macros.with_core_macros_file.cljs$lang$applyTo = (function (seq29512){
var G__29513 = cljs.core.first(seq29512);
var seq29512__$1 = cljs.core.next(seq29512);
var G__29514 = cljs.core.first(seq29512__$1);
var seq29512__$2 = cljs.core.next(seq29512__$1);
var G__29515 = cljs.core.first(seq29512__$2);
var seq29512__$3 = cljs.core.next(seq29512__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29513,G__29514,G__29515,seq29512__$3);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.with_core_macros_file.cljs$lang$macro = true);

var ret__4785__auto___29556 = (function (){
cljs.analyzer.macros$macros.wrapping_errors = (function cljs$analyzer$macros$macros$wrapping_errors(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29557 = arguments.length;
var i__4737__auto___29558 = (0);
while(true){
if((i__4737__auto___29558 < len__4736__auto___29557)){
args__4742__auto__.push((arguments[i__4737__auto___29558]));

var G__29559 = (i__4737__auto___29558 + (1));
i__4737__auto___29558 = G__29559;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.macros$macros.wrapping_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.analyzer.macros$macros.wrapping_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"err__29516__auto__","err__29516__auto__",969729637,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","has-error-data?","cljs.analyzer/has-error-data?",-2145150806,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__29516__auto__","err__29516__auto__",969729637,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__29516__auto__","err__29516__auto__",969729637,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","analysis-error?","cljs.analyzer/analysis-error?",-1824961346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__29516__auto__","err__29516__auto__",969729637,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","error-data","cljs.analyzer/error-data",-70583485,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"compilation","compilation",-1328774561),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__29516__auto__","err__29516__auto__",969729637,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","error-data","cljs.analyzer/error-data",-70583485,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"compilation","compilation",-1328774561),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","error","cljs.analyzer/error",1575241885,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-message",".-message",-1827250821,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__29516__auto__","err__29516__auto__",969729637,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__29516__auto__","err__29516__auto__",969729637,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.analyzer.macros$macros.wrapping_errors.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.analyzer.macros$macros.wrapping_errors.cljs$lang$applyTo = (function (seq29517){
var G__29518 = cljs.core.first(seq29517);
var seq29517__$1 = cljs.core.next(seq29517);
var G__29519 = cljs.core.first(seq29517__$1);
var seq29517__$2 = cljs.core.next(seq29517__$1);
var G__29520 = cljs.core.first(seq29517__$2);
var seq29517__$3 = cljs.core.next(seq29517__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29518,G__29519,G__29520,seq29517__$3);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.wrapping_errors.cljs$lang$macro = true);

var ret__4785__auto___29560 = (function (){
cljs.analyzer.macros$macros.disallowing_recur = (function cljs$analyzer$macros$macros$disallowing_recur(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29561 = arguments.length;
var i__4737__auto___29562 = (0);
while(true){
if((i__4737__auto___29562 < len__4736__auto___29561)){
args__4742__auto__.push((arguments[i__4737__auto___29562]));

var G__29563 = (i__4737__auto___29562 + (1));
i__4737__auto___29562 = G__29563;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.macros$macros.disallowing_recur.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.analyzer.macros$macros.disallowing_recur.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*recur-frames*","cljs.analyzer/*recur-frames*",-431441741,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*recur-frames*","cljs.analyzer/*recur-frames*",-431441741,null),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.analyzer.macros$macros.disallowing_recur.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.analyzer.macros$macros.disallowing_recur.cljs$lang$applyTo = (function (seq29525){
var G__29526 = cljs.core.first(seq29525);
var seq29525__$1 = cljs.core.next(seq29525);
var G__29527 = cljs.core.first(seq29525__$1);
var seq29525__$2 = cljs.core.next(seq29525__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29526,G__29527,seq29525__$2);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.disallowing_recur.cljs$lang$macro = true);

var ret__4785__auto___29564 = (function (){
cljs.analyzer.macros$macros.allowing_redef = (function cljs$analyzer$macros$macros$allowing_redef(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29565 = arguments.length;
var i__4737__auto___29566 = (0);
while(true){
if((i__4737__auto___29566 < len__4736__auto___29565)){
args__4742__auto__.push((arguments[i__4737__auto___29566]));

var G__29567 = (i__4737__auto___29566 + (1));
i__4737__auto___29566 = G__29567;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.macros$macros.allowing_redef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.analyzer.macros$macros.allowing_redef.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*allow-redef*","cljs.analyzer/*allow-redef*",-501091249,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.analyzer.macros$macros.allowing_redef.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.analyzer.macros$macros.allowing_redef.cljs$lang$applyTo = (function (seq29532){
var G__29533 = cljs.core.first(seq29532);
var seq29532__$1 = cljs.core.next(seq29532);
var G__29534 = cljs.core.first(seq29532__$1);
var seq29532__$2 = cljs.core.next(seq29532__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29533,G__29534,seq29532__$2);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.allowing_redef.cljs$lang$macro = true);

var ret__4785__auto___29568 = (function (){
cljs.analyzer.macros$macros.disallowing_ns_STAR_ = (function cljs$analyzer$macros$macros$disallowing_ns_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29569 = arguments.length;
var i__4737__auto___29570 = (0);
while(true){
if((i__4737__auto___29570 < len__4736__auto___29569)){
args__4742__auto__.push((arguments[i__4737__auto___29570]));

var G__29571 = (i__4737__auto___29570 + (1));
i__4737__auto___29570 = G__29571;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*allow-ns*","cljs.analyzer/*allow-ns*",-141648458,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$lang$applyTo = (function (seq29535){
var G__29536 = cljs.core.first(seq29535);
var seq29535__$1 = cljs.core.next(seq29535);
var G__29537 = cljs.core.first(seq29535__$1);
var seq29535__$2 = cljs.core.next(seq29535__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29536,G__29537,seq29535__$2);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$lang$macro = true);

