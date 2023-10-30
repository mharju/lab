goog.provide('shadow.cljs.bootstrap.browser');
shadow.cljs.bootstrap.browser.init_opts = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/bootstrap",new cljs.core.Keyword(null,"load-on-init","load-on-init",337216877),cljs.core.PersistentVector.EMPTY], null));
shadow.cljs.bootstrap.browser.asset_path = (function shadow$cljs$bootstrap$browser$asset_path(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26697 = arguments.length;
var i__4865__auto___26698 = (0);
while(true){
if((i__4865__auto___26698 < len__4864__auto___26697)){
args__4870__auto__.push((arguments[i__4865__auto___26698]));

var G__26699 = (i__4865__auto___26698 + (1));
i__4865__auto___26698 = G__26699;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.cljs.bootstrap.browser.asset_path.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.cljs.bootstrap.browser.asset_path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.cljs.bootstrap.browser.init_opts)),args);
}));

(shadow.cljs.bootstrap.browser.asset_path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.cljs.bootstrap.browser.asset_path.cljs$lang$applyTo = (function (seq26659){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26659));
}));

shadow.cljs.bootstrap.browser.compile_state_ref_QMARK_ = (function shadow$cljs$bootstrap$browser$compile_state_ref_QMARK_(x){
return (((x instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(x))));
});
shadow.cljs.bootstrap.browser.transit_read = (function shadow$cljs$bootstrap$browser$transit_read(txt){
var r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.read(r,txt);
});
shadow.cljs.bootstrap.browser.transit_load = (function shadow$cljs$bootstrap$browser$transit_load(path,callback){
return goog.net.XhrIo.send(path,(function (res){
var req = this;
if(cljs.core.not(req.isSuccess())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed to download boostrap file:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," status:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(req.getStatus())].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null));
} else {
var data = shadow.cljs.bootstrap.browser.transit_read(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(data) : callback.call(null,data));
}
}));
});
shadow.cljs.bootstrap.browser.script_eval = (function shadow$cljs$bootstrap$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.bootstrap.browser.execute_load_BANG_ = (function shadow$cljs$bootstrap$browser$execute_load_BANG_(compile_state_ref,p__26661){
var map__26662 = p__26661;
var map__26662__$1 = cljs.core.__destructure_map(map__26662);
var load_info = map__26662__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26662__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26662__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26662__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26662__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26662__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var temp__5753__auto___26700 = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.cljs.bootstrap.browser.init_opts));
if(cljs.core.truth_(temp__5753__auto___26700)){
var load_fn_26701 = temp__5753__auto___26700;
(load_fn_26701.cljs$core$IFn$_invoke$arity$1 ? load_fn_26701.cljs$core$IFn$_invoke$arity$1(load_info) : load_fn_26701.call(null,load_info));
} else {
}

var G__26664 = type;
var G__26664__$1 = (((G__26664 instanceof cljs.core.Keyword))?G__26664.fqn:null);
switch (G__26664__$1) {
case "analyzer":
var data = shadow.cljs.bootstrap.browser.transit_read(text);
return cljs.js.load_analysis_cache_BANG_(compile_state_ref,ns,data);

break;
case "js":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.cljs.bootstrap.env.loaded_ref,clojure.set.union,provides);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,clojure.set.union,provides);

var js = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),"\n"].join('');
return shadow.cljs.bootstrap.browser.script_eval(js);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26664__$1)].join('')));

}
});
shadow.cljs.bootstrap.browser.queue_task_BANG_ = (function shadow$cljs$bootstrap$browser$queue_task_BANG_(task){
return goog.async.run(task);
});
/**
 * loads a set of namespaces, must be called after init
 */
shadow.cljs.bootstrap.browser.load_namespaces = (function shadow$cljs$bootstrap$browser$load_namespaces(compile_state_ref,namespaces,cb){




var deps_to_load_for_ns = shadow.cljs.bootstrap.env.find_deps(namespaces);
var macro_deps = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26670_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26670_SHARP_),"$macros"].join(''));
}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"macro-requires","macro-requires",-798347981),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26669_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cljs","cljs",1492417629),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__26669_SHARP_));
}),deps_to_load_for_ns)))));
var deps_to_load_with_macros = shadow.cljs.bootstrap.env.find_deps(clojure.set.union.cljs$core$IFn$_invoke$arity$2(namespaces,macro_deps));
var compile_state = cljs.core.deref(compile_state_ref);
var things_already_loaded = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"provides","provides",-1634397992),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26671_SHARP_){
return clojure.set.superset_QMARK_(cljs.core.deref(shadow.cljs.bootstrap.env.loaded_ref),new cljs.core.Keyword(null,"provides","provides",-1634397992).cljs$core$IFn$_invoke$arity$1(p1__26671_SHARP_));
}),deps_to_load_with_macros)));
var js_files_to_load = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26677){
var map__26678 = p__26677;
var map__26678__$1 = cljs.core.__destructure_map(map__26678);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26678__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26678__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var js_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26678__$1,new cljs.core.Keyword(null,"js-name","js-name",-1555671279));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"provides","provides",-1634397992),provides,new cljs.core.Keyword(null,"uri","uri",-774711847),shadow.cljs.bootstrap.browser.asset_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([js_name], 0))], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__26672_SHARP_){
return clojure.set.superset_QMARK_(cljs.core.deref(shadow.cljs.bootstrap.env.loaded_ref),new cljs.core.Keyword(null,"provides","provides",-1634397992).cljs$core$IFn$_invoke$arity$1(p1__26672_SHARP_));
}),deps_to_load_with_macros));
var analyzer_data_to_load = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26679){
var map__26680 = p__26679;
var map__26680__$1 = cljs.core.__destructure_map(map__26680);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26680__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var ana_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26680__$1,new cljs.core.Keyword(null,"ana-name","ana-name",-1835677673));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"analyzer","analyzer",2075759383),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"uri","uri",-774711847),shadow.cljs.bootstrap.browser.asset_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ana_name], 0))], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26674_SHARP_){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compile_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(p1__26674_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177)], null)) == null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26673_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cljs","cljs",1492417629),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__26673_SHARP_));
}),deps_to_load_with_macros)));
var load_info = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,js_files_to_load),analyzer_data_to_load);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,clojure.set.union,things_already_loaded);

if(cljs.core.empty_QMARK_(load_info)){
var G__26681 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__26681) : cb.call(null,G__26681));
} else {
var uris = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uri","uri",-774711847)),load_info);
var loader = (new goog.net.BulkLoader(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(uris)));
loader.listen(goog.net.EventType.SUCCESS,(function (e){
var texts = loader.getResponseTexts();
var seq__26682_26704 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info){
return (function (p1__26675_SHARP_,p2__26676_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26675_SHARP_,new cljs.core.Keyword(null,"text","text",-1790561697),p2__26676_SHARP_);
});})(texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info))
,load_info,texts));
var chunk__26683_26705 = null;
var count__26684_26706 = (0);
var i__26685_26707 = (0);
while(true){
if((i__26685_26707 < count__26684_26706)){
var load_26708 = chunk__26683_26705.cljs$core$IIndexed$_nth$arity$2(null,i__26685_26707);
shadow.cljs.bootstrap.browser.queue_task_BANG_(((function (seq__26682_26704,chunk__26683_26705,count__26684_26706,i__26685_26707,load_26708,texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info){
return (function (){
return shadow.cljs.bootstrap.browser.execute_load_BANG_(compile_state_ref,load_26708);
});})(seq__26682_26704,chunk__26683_26705,count__26684_26706,i__26685_26707,load_26708,texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info))
);


var G__26709 = seq__26682_26704;
var G__26710 = chunk__26683_26705;
var G__26711 = count__26684_26706;
var G__26712 = (i__26685_26707 + (1));
seq__26682_26704 = G__26709;
chunk__26683_26705 = G__26710;
count__26684_26706 = G__26711;
i__26685_26707 = G__26712;
continue;
} else {
var temp__5753__auto___26713 = cljs.core.seq(seq__26682_26704);
if(temp__5753__auto___26713){
var seq__26682_26714__$1 = temp__5753__auto___26713;
if(cljs.core.chunked_seq_QMARK_(seq__26682_26714__$1)){
var c__4679__auto___26715 = cljs.core.chunk_first(seq__26682_26714__$1);
var G__26716 = cljs.core.chunk_rest(seq__26682_26714__$1);
var G__26717 = c__4679__auto___26715;
var G__26718 = cljs.core.count(c__4679__auto___26715);
var G__26719 = (0);
seq__26682_26704 = G__26716;
chunk__26683_26705 = G__26717;
count__26684_26706 = G__26718;
i__26685_26707 = G__26719;
continue;
} else {
var load_26720 = cljs.core.first(seq__26682_26714__$1);
shadow.cljs.bootstrap.browser.queue_task_BANG_(((function (seq__26682_26704,chunk__26683_26705,count__26684_26706,i__26685_26707,load_26720,seq__26682_26714__$1,temp__5753__auto___26713,texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info){
return (function (){
return shadow.cljs.bootstrap.browser.execute_load_BANG_(compile_state_ref,load_26720);
});})(seq__26682_26704,chunk__26683_26705,count__26684_26706,i__26685_26707,load_26720,seq__26682_26714__$1,temp__5753__auto___26713,texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info))
);


var G__26721 = cljs.core.next(seq__26682_26714__$1);
var G__26722 = null;
var G__26723 = (0);
var G__26724 = (0);
seq__26682_26704 = G__26721;
chunk__26683_26705 = G__26722;
count__26684_26706 = G__26723;
i__26685_26707 = G__26724;
continue;
}
} else {
}
}
break;
}

return shadow.cljs.bootstrap.browser.queue_task_BANG_((function (){
var G__26686 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__26686) : cb.call(null,G__26686));
}));
}));

return loader.load();
}
});
/**
 * :load fn for cljs.js, must be passed the compile-state as first arg
 * eg. :load (partial boot/load compile-state-ref)
 */
shadow.cljs.bootstrap.browser.load = (function shadow$cljs$bootstrap$browser$load(compile_state_ref,p__26687,cb){
var map__26688 = p__26687;
var map__26688__$1 = cljs.core.__destructure_map(map__26688);
var rc = map__26688__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26688__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26688__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26688__$1,new cljs.core.Keyword(null,"macros","macros",811339431));



var ns = (cljs.core.truth_(macros)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"$macros"].join('')):name);
var or__4253__auto___26725 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(compile_state_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null));
if(cljs.core.truth_(or__4253__auto___26725)){
} else {
shadow.cljs.bootstrap.env.get_ns_info(ns);
}

return shadow.cljs.bootstrap.browser.load_namespaces(compile_state_ref,cljs.core.PersistentHashSet.createAsIfByAssoc([ns]),cb);
});
shadow.cljs.bootstrap.browser.fix_provide_conflict_BANG_ = (function shadow$cljs$bootstrap$browser$fix_provide_conflict_BANG_(){
return delete cljs["core$macros"];
});
/**
 * initializes the bootstrapped compiler by loading the dependency index
 * and loading cljs.core + macros (and namespaces specified in :load-on-init)
 */
shadow.cljs.bootstrap.browser.init = (function shadow$cljs$bootstrap$browser$init(compile_state_ref,p__26690,init_cb){
var map__26691 = p__26690;
var map__26691__$1 = cljs.core.__destructure_map(map__26691);
var opts = map__26691__$1;
var load_on_init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26691__$1,new cljs.core.Keyword(null,"load-on-init","load-on-init",337216877));




cljs.core.reset_BANG_(shadow.cljs.bootstrap.browser.init_opts,opts);

if(cljs.core.truth_(cljs.core.deref(shadow.cljs.bootstrap.env.index_ref))){
return (init_cb.cljs$core$IFn$_invoke$arity$0 ? init_cb.cljs$core$IFn$_invoke$arity$0() : init_cb.call(null));
} else {
shadow.cljs.bootstrap.browser.fix_provide_conflict_BANG_();

shadow.cljs.bootstrap.env.create_cljs_user_BANG_();

shadow.cljs.bootstrap.env.replace_goog_require_BANG_();

return shadow.cljs.bootstrap.browser.transit_load(shadow.cljs.bootstrap.browser.asset_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/index.transit.json"], 0)),(function (data){
var map__26692_26726 = shadow.cljs.bootstrap.env.build_index(data);
var map__26692_26727__$1 = cljs.core.__destructure_map(map__26692_26726);
var idx_26728 = map__26692_26727__$1;
var exclude_26729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26692_26727__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,clojure.set.union,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__26689_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26689_SHARP_),"$macros"].join(''));
})),exclude_26729));

return shadow.cljs.bootstrap.browser.load_namespaces(compile_state_ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null),"null",new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),"null"], null), null),load_on_init),init_cb);
}));
}
});
