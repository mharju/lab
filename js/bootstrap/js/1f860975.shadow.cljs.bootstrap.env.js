goog.provide('shadow.cljs.bootstrap.env');
shadow.cljs.bootstrap.env.loaded_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
shadow.cljs.bootstrap.env.set_loaded = (function shadow$cljs$bootstrap$env$set_loaded(namespaces){
var loaded = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol),namespaces);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.cljs.bootstrap.env.loaded_ref,clojure.set.union,loaded);
});
shadow.cljs.bootstrap.env.index_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
shadow.cljs.bootstrap.env.build_index = (function shadow$cljs$bootstrap$env$build_index(p__26331){
var map__26332 = p__26331;
var map__26332__$1 = cljs.core.__destructure_map(map__26332);
var data = map__26332__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26332__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26332__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,p__26333){
var map__26334 = p__26333;
var map__26334__$1 = cljs.core.__destructure_map(map__26334);
var rc = map__26334__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26334__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return cljs.core.assoc_in(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),resource_id], null),rc);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sources-ordered","sources-ordered",-861287146),sources,new cljs.core.Keyword(null,"exclude","exclude",-1230250334),exclude], null),sources);
var idx__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx__$1,p__26339){
var vec__26340 = p__26339;
var provide = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26340,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26340,(1),null);
return cljs.core.assoc_in(idx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym->id","sym->id",368996282),provide], null),resource_id);
}),idx,(function (){var iter__4652__auto__ = (function shadow$cljs$bootstrap$env$build_index_$_iter__26343(s__26344){
return (new cljs.core.LazySeq(null,(function (){
var s__26344__$1 = s__26344;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__26344__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__26349 = cljs.core.first(xs__6308__auto__);
var map__26349__$1 = cljs.core.__destructure_map(map__26349);
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26349__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26349__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var iterys__4648__auto__ = ((function (s__26344__$1,map__26349,map__26349__$1,resource_id,provides,xs__6308__auto__,temp__5753__auto__,idx,map__26332,map__26332__$1,data,sources,exclude){
return (function shadow$cljs$bootstrap$env$build_index_$_iter__26343_$_iter__26345(s__26346){
return (new cljs.core.LazySeq(null,((function (s__26344__$1,map__26349,map__26349__$1,resource_id,provides,xs__6308__auto__,temp__5753__auto__,idx,map__26332,map__26332__$1,data,sources,exclude){
return (function (){
var s__26346__$1 = s__26346;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__26346__$1);
if(temp__5753__auto____$1){
var s__26346__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26346__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__26346__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__26348 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__26347 = (0);
while(true){
if((i__26347 < size__4651__auto__)){
var provide = cljs.core._nth(c__4650__auto__,i__26347);
cljs.core.chunk_append(b__26348,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [provide,resource_id], null));

var G__26354 = (i__26347 + (1));
i__26347 = G__26354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26348),shadow$cljs$bootstrap$env$build_index_$_iter__26343_$_iter__26345(cljs.core.chunk_rest(s__26346__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26348),null);
}
} else {
var provide = cljs.core.first(s__26346__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [provide,resource_id], null),shadow$cljs$bootstrap$env$build_index_$_iter__26343_$_iter__26345(cljs.core.rest(s__26346__$2)));
}
} else {
return null;
}
break;
}
});})(s__26344__$1,map__26349,map__26349__$1,resource_id,provides,xs__6308__auto__,temp__5753__auto__,idx,map__26332,map__26332__$1,data,sources,exclude))
,null,null));
});})(s__26344__$1,map__26349,map__26349__$1,resource_id,provides,xs__6308__auto__,temp__5753__auto__,idx,map__26332,map__26332__$1,data,sources,exclude))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(provides));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$bootstrap$env$build_index_$_iter__26343(cljs.core.rest(s__26344__$1)));
} else {
var G__26355 = cljs.core.rest(s__26344__$1);
s__26344__$1 = G__26355;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(sources);
})());
cljs.core.reset_BANG_(shadow.cljs.bootstrap.env.index_ref,idx__$1);

return idx__$1;
});
shadow.cljs.bootstrap.env.get_ns_info = (function shadow$cljs$bootstrap$env$get_ns_info(ns){
var idx = cljs.core.deref(shadow.cljs.bootstrap.env.index_ref);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym->id","sym->id",368996282),ns], null));
var or__4253__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),id], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["ns ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not available"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}
});
shadow.cljs.bootstrap.env.find_deps = (function shadow$cljs$bootstrap$env$find_deps(entries){


return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reverse(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__26350,p__26351){
var map__26352 = p__26350;
var map__26352__$1 = cljs.core.__destructure_map(map__26352);
var x = map__26352__$1;
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26352__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26352__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var map__26353 = p__26351;
var map__26353__$1 = cljs.core.__destructure_map(map__26353);
var src = map__26353__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26353__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26353__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26353__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26353__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
if(cljs.core.not(cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(deps,provides)))){
return x;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deps","deps",1883360319),clojure.set.union.cljs$core$IFn$_invoke$arity$2(deps,requires),new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(order,src)], null);

}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deps","deps",1883360319),entries,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.PersistentVector.EMPTY], null),cljs.core.reverse(new cljs.core.Keyword(null,"sources-ordered","sources-ordered",-861287146).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.cljs.bootstrap.env.index_ref)))))));
});
shadow.cljs.bootstrap.env.create_cljs_user_BANG_ = (function shadow$cljs$bootstrap$env$create_cljs_user_BANG_(){
return goog.constructNamespace_("cljs.user");
});
shadow.cljs.bootstrap.env.replace_goog_require_BANG_ = (function shadow$cljs$bootstrap$env$replace_goog_require_BANG_(){
return (goog.require = (function (name){
var or__4253__auto__ = goog.getObjectByName(name);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.module.getInternal_(name);
}
}));
});
