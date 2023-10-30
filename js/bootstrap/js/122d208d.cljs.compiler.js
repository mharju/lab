goog.provide('cljs.compiler');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__23601 = s;
var map__23601__$1 = cljs.core.__destructure_map(map__23601);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23601__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23601__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__23603 = info;
var map__23604 = G__23603;
var map__23604__$1 = cljs.core.__destructure_map(map__23604);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23604__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__23603__$1 = G__23603;
while(true){
var d__$2 = d__$1;
var map__23606 = G__23603__$1;
var map__23606__$1 = cljs.core.__destructure_map(map__23606);
var shadow__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23606__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$2)){
var G__24450 = (d__$2 + (1));
var G__24451 = shadow__$2;
d__$1 = G__24450;
G__23603__$1 = G__24451;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__23607){
var map__23608 = p__23607;
var map__23608__$1 = cljs.core.__destructure_map(map__23608);
var name_var = map__23608__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23608__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23608__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__23609 = info;
var map__23609__$1 = cljs.core.__destructure_map(map__23609);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23609__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23609__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__23610 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__23610) : cljs.compiler.munge.call(null,G__23610));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__23612 = arguments.length;
switch (G__23612) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.impl.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = (function (){var fexpr__23613 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11648,11648,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__23613.cljs$core$IFn$_invoke$arity$1 ? fexpr__23613.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__23613.call(null,ss__$3));
})();
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__23614 = cp;
switch (G__23614) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__23615_24454 = cljs.core.seq(s);
var chunk__23616_24455 = null;
var count__23617_24456 = (0);
var i__23618_24457 = (0);
while(true){
if((i__23618_24457 < count__23617_24456)){
var c_24458 = chunk__23616_24455.cljs$core$IIndexed$_nth$arity$2(null,i__23618_24457);
sb.append(cljs.compiler.escape_char(c_24458));


var G__24459 = seq__23615_24454;
var G__24460 = chunk__23616_24455;
var G__24461 = count__23617_24456;
var G__24462 = (i__23618_24457 + (1));
seq__23615_24454 = G__24459;
chunk__23616_24455 = G__24460;
count__23617_24456 = G__24461;
i__23618_24457 = G__24462;
continue;
} else {
var temp__5753__auto___24463 = cljs.core.seq(seq__23615_24454);
if(temp__5753__auto___24463){
var seq__23615_24464__$1 = temp__5753__auto___24463;
if(cljs.core.chunked_seq_QMARK_(seq__23615_24464__$1)){
var c__4679__auto___24465 = cljs.core.chunk_first(seq__23615_24464__$1);
var G__24466 = cljs.core.chunk_rest(seq__23615_24464__$1);
var G__24467 = c__4679__auto___24465;
var G__24468 = cljs.core.count(c__4679__auto___24465);
var G__24469 = (0);
seq__23615_24454 = G__24466;
chunk__23616_24455 = G__24467;
count__23617_24456 = G__24468;
i__23618_24457 = G__24469;
continue;
} else {
var c_24470 = cljs.core.first(seq__23615_24464__$1);
sb.append(cljs.compiler.escape_char(c_24470));


var G__24471 = cljs.core.next(seq__23615_24464__$1);
var G__24472 = null;
var G__24473 = (0);
var G__24474 = (0);
seq__23615_24454 = G__24471;
chunk__23616_24455 = G__24472;
count__23617_24456 = G__24473;
i__23618_24457 = G__24474;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
cljs.compiler.emit_STAR_ = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__23622 = cljs.core.get_global_hierarchy;
return (fexpr__23622.cljs$core$IFn$_invoke$arity$0 ? fexpr__23622.cljs$core$IFn$_invoke$arity$0() : fexpr__23622.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__23623_24475 = ast;
var map__23623_24476__$1 = cljs.core.__destructure_map(map__23623_24475);
var env_24477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23623_24476__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_24477))){
var map__23624_24478 = env_24477;
var map__23624_24479__$1 = cljs.core.__destructure_map(map__23624_24478);
var line_24480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23624_24479__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23624_24479__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__23625 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__23627 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__23626 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__23626.cljs$core$IFn$_invoke$arity$1 ? fexpr__23626.cljs$core$IFn$_invoke$arity$1(G__23627) : fexpr__23626.call(null,G__23627));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23625,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__23625;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_24480 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_24481)?(column_24481 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__23636 = arguments.length;
switch (G__23636) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___24483 = arguments.length;
var i__4865__auto___24484 = (0);
while(true){
if((i__4865__auto___24484 < len__4864__auto___24483)){
args_arr__4885__auto__.push((arguments[i__4865__auto___24484]));

var G__24485 = (i__4865__auto___24484 + (1));
i__4865__auto___24484 = G__24485;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4886__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_(a)){
cljs.compiler.emit(a);
} else {
if(cljs.analyzer.impl.cljs_seq_QMARK_(a)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,a);
} else {
if(typeof a === 'function'){
(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null));
} else {
var s_24486 = (function (){var G__23637 = a;
if((!(typeof a === 'string'))){
return G__23637.toString();
} else {
return G__23637;
}
})();
var temp__5757__auto___24487 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5757__auto___24487 == null)){
} else {
var sm_data_24488 = temp__5757__auto___24487;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_24488,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__23628_SHARP_){
return (p1__23628_SHARP_ + s_24486.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_24486], 0));

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__23687 = cljs.core.seq(xs);
var chunk__23688 = null;
var count__23689 = (0);
var i__23690 = (0);
while(true){
if((i__23690 < count__23689)){
var x = chunk__23688.cljs$core$IIndexed$_nth$arity$2(null,i__23690);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__24489 = seq__23687;
var G__24490 = chunk__23688;
var G__24491 = count__23689;
var G__24492 = (i__23690 + (1));
seq__23687 = G__24489;
chunk__23688 = G__24490;
count__23689 = G__24491;
i__23690 = G__24492;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__23687);
if(temp__5753__auto__){
var seq__23687__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23687__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__23687__$1);
var G__24493 = cljs.core.chunk_rest(seq__23687__$1);
var G__24494 = c__4679__auto__;
var G__24495 = cljs.core.count(c__4679__auto__);
var G__24496 = (0);
seq__23687 = G__24493;
chunk__23688 = G__24494;
count__23689 = G__24495;
i__23690 = G__24496;
continue;
} else {
var x = cljs.core.first(seq__23687__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__24497 = cljs.core.next(seq__23687__$1);
var G__24498 = null;
var G__24499 = (0);
var G__24500 = (0);
seq__23687 = G__24497;
chunk__23688 = G__24498;
count__23689 = G__24499;
i__23690 = G__24500;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq23630){
var G__23631 = cljs.core.first(seq23630);
var seq23630__$1 = cljs.core.next(seq23630);
var G__23632 = cljs.core.first(seq23630__$1);
var seq23630__$2 = cljs.core.next(seq23630__$1);
var G__23633 = cljs.core.first(seq23630__$2);
var seq23630__$3 = cljs.core.next(seq23630__$2);
var G__23634 = cljs.core.first(seq23630__$3);
var seq23630__$4 = cljs.core.next(seq23630__$3);
var G__23635 = cljs.core.first(seq23630__$4);
var seq23630__$5 = cljs.core.next(seq23630__$4);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23631,G__23632,G__23633,G__23634,G__23635,seq23630__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__23691){
var map__23692 = p__23691;
var map__23692__$1 = cljs.core.__destructure_map(map__23692);
var m = map__23692__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23692__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__23704 = arguments.length;
switch (G__23704) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___24502 = arguments.length;
var i__4865__auto___24503 = (0);
while(true){
if((i__4865__auto___24503 < len__4864__auto___24502)){
args_arr__4885__auto__.push((arguments[i__4865__auto___24503]));

var G__24504 = (i__4865__auto___24503 + (1));
i__4865__auto___24503 = G__24504;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4886__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__23707_24505 = cljs.core.seq(xs);
var chunk__23708_24506 = null;
var count__23709_24507 = (0);
var i__23710_24508 = (0);
while(true){
if((i__23710_24508 < count__23709_24507)){
var x_24509 = chunk__23708_24506.cljs$core$IIndexed$_nth$arity$2(null,i__23710_24508);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_24509);


var G__24510 = seq__23707_24505;
var G__24511 = chunk__23708_24506;
var G__24512 = count__23709_24507;
var G__24513 = (i__23710_24508 + (1));
seq__23707_24505 = G__24510;
chunk__23708_24506 = G__24511;
count__23709_24507 = G__24512;
i__23710_24508 = G__24513;
continue;
} else {
var temp__5753__auto___24514 = cljs.core.seq(seq__23707_24505);
if(temp__5753__auto___24514){
var seq__23707_24515__$1 = temp__5753__auto___24514;
if(cljs.core.chunked_seq_QMARK_(seq__23707_24515__$1)){
var c__4679__auto___24516 = cljs.core.chunk_first(seq__23707_24515__$1);
var G__24517 = cljs.core.chunk_rest(seq__23707_24515__$1);
var G__24518 = c__4679__auto___24516;
var G__24519 = cljs.core.count(c__4679__auto___24516);
var G__24520 = (0);
seq__23707_24505 = G__24517;
chunk__23708_24506 = G__24518;
count__23709_24507 = G__24519;
i__23710_24508 = G__24520;
continue;
} else {
var x_24521 = cljs.core.first(seq__23707_24515__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_24521);


var G__24522 = cljs.core.next(seq__23707_24515__$1);
var G__24523 = null;
var G__24524 = (0);
var G__24525 = (0);
seq__23707_24505 = G__24522;
chunk__23708_24506 = G__24523;
count__23709_24507 = G__24524;
i__23710_24508 = G__24525;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln();
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq23698){
var G__23699 = cljs.core.first(seq23698);
var seq23698__$1 = cljs.core.next(seq23698);
var G__23700 = cljs.core.first(seq23698__$1);
var seq23698__$2 = cljs.core.next(seq23698__$1);
var G__23701 = cljs.core.first(seq23698__$2);
var seq23698__$3 = cljs.core.next(seq23698__$2);
var G__23702 = cljs.core.first(seq23698__$3);
var seq23698__$4 = cljs.core.next(seq23698__$3);
var G__23703 = cljs.core.first(seq23698__$4);
var seq23698__$5 = cljs.core.next(seq23698__$4);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23699,G__23700,G__23701,G__23702,G__23703,seq23698__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23726_24526 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23727_24527 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23728_24528 = true;
var _STAR_print_fn_STAR__temp_val__23729_24529 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23728_24528);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23729_24529);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23727_24527);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23726_24526);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
});
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__23733 = cljs.core.get_global_hierarchy;
return (fexpr__23733.cljs$core$IFn$_invoke$arity$0 ? fexpr__23733.cljs$core$IFn$_invoke$arity$0() : fexpr__23733.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.impl.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__23734 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23734,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23734,(1),null);
var G__23737 = ns;
var G__23738 = name;
var G__23739 = (function (){
var G__23740 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__23740) : cljs.compiler.emit_constant.call(null,G__23740));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__23737,G__23738,G__23739) : cljs.compiler.emit_record_value.call(null,G__23737,G__23738,G__23739));
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_(x)){
var G__23741 = cljs.core.keys(x);
var G__23742 = cljs.core.vals(x);
var G__23743 = cljs.compiler.emit_constants_comma_sep;
var G__23744 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__23741,G__23742,G__23743,G__23744) : cljs.compiler.emit_map.call(null,G__23741,G__23742,G__23743,G__23744));
} else {
if(cljs.analyzer.impl.cljs_vector_QMARK_(x)){
return (cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.analyzer.impl.cljs_set_QMARK_(x)){
return (cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3(x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_) : cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_));
} else {
return cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1(x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta(cljs.core.meta(v));
if((!((cljs.core.seq(m) == null)))){
var G__23745 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__23746 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__23745,G__23746) : cljs.compiler.emit_with_meta.call(null,G__23745,G__23746));
} else {
return cljs.compiler.emit_constant_no_meta(v);
}
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("null");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("NaN");
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(",x,")");

}
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x)));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(x)?"true":"false"));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(new RegExp(\"\"))");
} else {
var vec__23751 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23751,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23751,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23751,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Keyword(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant((cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(kw));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Symbol(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(symstr);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(sym));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(null);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5751__auto__ = (function (){var and__4251__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4251__auto__)){
var G__23754 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__23754) : x.call(null,G__23754));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var value = temp__5751__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5751__auto__ = (function (){var and__4251__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4251__auto__)){
var G__23755 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__23755) : x.call(null,G__23755));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var value = temp__5751__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,m){
if(cljs.core.even_QMARK_(i)){
return cljs.compiler.emit_constant(m);
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(m);
}
}),cljs.compiler.comma_sep(cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_inst = (function cljs$compiler$emit_inst(inst_ms){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("new Date(",inst_ms,")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emit_inst(date.getTime());
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_(items)){
var G__23762 = items;
var G__23763 = (function (p1__23761_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__23761_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__23762,G__23763) : cljs.compiler.emit_js_object.call(null,G__23762,G__23763));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__23767){
var map__23768 = p__23767;
var map__23768__$1 = cljs.core.__destructure_map(map__23768);
var ast = map__23768__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23768__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23768__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23768__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5751__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5751__auto__)){
var const_expr = temp__5751__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__23769 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__23769__$1 = cljs.core.__destructure_map(map__23769);
var cenv = map__23769__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23769__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4253__auto__ = js_module_name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__23770 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var G__23771 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__23771) : cljs.compiler.es5_GT__EQ_.call(null,G__23771));
})();
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4251__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__23770,cljs.analyzer.es5_allowed);
} else {
return G__23770;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4253__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__23772 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__23772,reserved);
} else {
return G__23772;
}
})();
var env__13558__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__23773_24530 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__23773_24531__$1 = (((G__23773_24530 instanceof cljs.core.Keyword))?G__23773_24530.fqn:null);
switch (G__23773_24531__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__4251__auto__;
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);
}

break;
default:
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);

}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__23774){
var map__23775 = p__23774;
var map__23775__$1 = cljs.core.__destructure_map(map__23775);
var arg = map__23775__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23775__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23775__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23775__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23775__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));


var map__23776 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__23776__$1 = cljs.core.__destructure_map(map__23776);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23776__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__13558__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__23777){
var map__23778 = p__23777;
var map__23778__$1 = cljs.core.__destructure_map(map__23778);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23778__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23778__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23778__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13558__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__23779_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__23779_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__23781 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__23781) : comma_sep.call(null,G__23781));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__23782 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__23782) : comma_sep.call(null,G__23782));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__23783){
var map__23784 = p__23783;
var map__23784__$1 = cljs.core.__destructure_map(map__23784);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23784__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23784__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23784__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__13558__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.list(",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count(items);
if((cnt < (32))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentVector.fromArray([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], true)");
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__23786){
var map__23787 = p__23786;
var map__23787__$1 = cljs.core.__destructure_map(map__23787);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23787__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23787__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13558__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__23788_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__23788_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__23790 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__23790) : comma_sep.call(null,G__23790));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__23791){
var map__23792 = p__23791;
var map__23792__$1 = cljs.core.__destructure_map(map__23792);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23792__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23792__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13558__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5753__auto___24533 = cljs.core.seq(items);
if(temp__5753__auto___24533){
var items_24534__$1 = temp__5753__auto___24533;
var vec__23796_24535 = items_24534__$1;
var seq__23797_24536 = cljs.core.seq(vec__23796_24535);
var first__23798_24537 = cljs.core.first(seq__23797_24536);
var seq__23797_24538__$1 = cljs.core.next(seq__23797_24536);
var vec__23799_24539 = first__23798_24537;
var k_24540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23799_24539,(0),null);
var v_24541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23799_24539,(1),null);
var r_24542 = seq__23797_24538__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_24540),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_24541) : emit_js_object_val.call(null,v_24541)));

var seq__23802_24543 = cljs.core.seq(r_24542);
var chunk__23803_24544 = null;
var count__23804_24545 = (0);
var i__23805_24546 = (0);
while(true){
if((i__23805_24546 < count__23804_24545)){
var vec__23816_24547 = chunk__23803_24544.cljs$core$IIndexed$_nth$arity$2(null,i__23805_24546);
var k_24548__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23816_24547,(0),null);
var v_24549__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23816_24547,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_24548__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_24549__$1) : emit_js_object_val.call(null,v_24549__$1)));


var G__24550 = seq__23802_24543;
var G__24551 = chunk__23803_24544;
var G__24552 = count__23804_24545;
var G__24553 = (i__23805_24546 + (1));
seq__23802_24543 = G__24550;
chunk__23803_24544 = G__24551;
count__23804_24545 = G__24552;
i__23805_24546 = G__24553;
continue;
} else {
var temp__5753__auto___24554__$1 = cljs.core.seq(seq__23802_24543);
if(temp__5753__auto___24554__$1){
var seq__23802_24555__$1 = temp__5753__auto___24554__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23802_24555__$1)){
var c__4679__auto___24556 = cljs.core.chunk_first(seq__23802_24555__$1);
var G__24557 = cljs.core.chunk_rest(seq__23802_24555__$1);
var G__24558 = c__4679__auto___24556;
var G__24559 = cljs.core.count(c__4679__auto___24556);
var G__24560 = (0);
seq__23802_24543 = G__24557;
chunk__23803_24544 = G__24558;
count__23804_24545 = G__24559;
i__23805_24546 = G__24560;
continue;
} else {
var vec__23822_24561 = cljs.core.first(seq__23802_24555__$1);
var k_24562__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23822_24561,(0),null);
var v_24563__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23822_24561,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_24562__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_24563__$1) : emit_js_object_val.call(null,v_24563__$1)));


var G__24564 = cljs.core.next(seq__23802_24555__$1);
var G__24565 = null;
var G__24566 = (0);
var G__24567 = (0);
seq__23802_24543 = G__24564;
chunk__23803_24544 = G__24565;
count__23804_24545 = G__24566;
i__23805_24546 = G__24567;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"]");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__23825){
var map__23826 = p__23825;
var map__23826__$1 = cljs.core.__destructure_map(map__23826);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23826__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23826__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23826__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13558__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__23827){
var map__23828 = p__23827;
var map__23828__$1 = cljs.core.__destructure_map(map__23828);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23828__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23828__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13558__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__23829){
var map__23830 = p__23829;
var map__23830__$1 = cljs.core.__destructure_map(map__23830);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23830__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__23831){
var map__23832 = p__23831;
var map__23832__$1 = cljs.core.__destructure_map(map__23832);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23832__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23832__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__13558__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__23845 = cljs.analyzer.unwrap_quote(expr);
var map__23845__$1 = cljs.core.__destructure_map(map__23845);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23845__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23845__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23845__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4253__auto__ = (function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__4251__auto__){
var and__4251__auto____$1 = form;
if(cljs.core.truth_(and__4251__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = (!((const_expr == null)));
if(and__4251__auto__){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return and__4251__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__23850 = cljs.analyzer.unwrap_quote(expr);
var map__23850__$1 = cljs.core.__destructure_map(map__23850);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23850__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23850__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23850__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4253__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4253__auto__){
return or__4253__auto__;
} else {
var and__4251__auto__ = (!((const_expr == null)));
if(and__4251__auto__){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return and__4251__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__4253__auto__ = (function (){var fexpr__23851 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__23851.cljs$core$IFn$_invoke$arity$1 ? fexpr__23851.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__23851.call(null,tag));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__23852){
var map__23853 = p__23852;
var map__23853__$1 = cljs.core.__destructure_map(map__23853);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23853__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23853__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23853__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23853__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23853__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4253__auto__ = unchecked;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(else$);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",((checked)?"cljs.core.truth_":null),"(",test,")?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(",test,"){");
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(then,"} else {");

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(else$,"}");
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__23854){
var map__23855 = p__23854;
var map__23855__$1 = cljs.core.__destructure_map(map__23855);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23855__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23855__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23855__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23855__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function(){");
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",gs,";");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("switch (",v,") {");

var seq__23856_24568 = cljs.core.seq(nodes);
var chunk__23857_24569 = null;
var count__23858_24570 = (0);
var i__23859_24571 = (0);
while(true){
if((i__23859_24571 < count__23858_24570)){
var map__23872_24572 = chunk__23857_24569.cljs$core$IIndexed$_nth$arity$2(null,i__23859_24571);
var map__23872_24573__$1 = cljs.core.__destructure_map(map__23872_24572);
var ts_24574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23872_24573__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__23873_24575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23872_24573__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__23873_24576__$1 = cljs.core.__destructure_map(map__23873_24575);
var then_24577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23873_24576__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__23874_24578 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_24574));
var chunk__23875_24579 = null;
var count__23876_24580 = (0);
var i__23877_24581 = (0);
while(true){
if((i__23877_24581 < count__23876_24580)){
var test_24582 = chunk__23875_24579.cljs$core$IIndexed$_nth$arity$2(null,i__23877_24581);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_24582,":");


var G__24583 = seq__23874_24578;
var G__24584 = chunk__23875_24579;
var G__24585 = count__23876_24580;
var G__24586 = (i__23877_24581 + (1));
seq__23874_24578 = G__24583;
chunk__23875_24579 = G__24584;
count__23876_24580 = G__24585;
i__23877_24581 = G__24586;
continue;
} else {
var temp__5753__auto___24587 = cljs.core.seq(seq__23874_24578);
if(temp__5753__auto___24587){
var seq__23874_24588__$1 = temp__5753__auto___24587;
if(cljs.core.chunked_seq_QMARK_(seq__23874_24588__$1)){
var c__4679__auto___24589 = cljs.core.chunk_first(seq__23874_24588__$1);
var G__24590 = cljs.core.chunk_rest(seq__23874_24588__$1);
var G__24591 = c__4679__auto___24589;
var G__24592 = cljs.core.count(c__4679__auto___24589);
var G__24593 = (0);
seq__23874_24578 = G__24590;
chunk__23875_24579 = G__24591;
count__23876_24580 = G__24592;
i__23877_24581 = G__24593;
continue;
} else {
var test_24594 = cljs.core.first(seq__23874_24588__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_24594,":");


var G__24595 = cljs.core.next(seq__23874_24588__$1);
var G__24596 = null;
var G__24597 = (0);
var G__24598 = (0);
seq__23874_24578 = G__24595;
chunk__23875_24579 = G__24596;
count__23876_24580 = G__24597;
i__23877_24581 = G__24598;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_24577);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_24577);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__24599 = seq__23856_24568;
var G__24600 = chunk__23857_24569;
var G__24601 = count__23858_24570;
var G__24602 = (i__23859_24571 + (1));
seq__23856_24568 = G__24599;
chunk__23857_24569 = G__24600;
count__23858_24570 = G__24601;
i__23859_24571 = G__24602;
continue;
} else {
var temp__5753__auto___24603 = cljs.core.seq(seq__23856_24568);
if(temp__5753__auto___24603){
var seq__23856_24604__$1 = temp__5753__auto___24603;
if(cljs.core.chunked_seq_QMARK_(seq__23856_24604__$1)){
var c__4679__auto___24605 = cljs.core.chunk_first(seq__23856_24604__$1);
var G__24606 = cljs.core.chunk_rest(seq__23856_24604__$1);
var G__24607 = c__4679__auto___24605;
var G__24608 = cljs.core.count(c__4679__auto___24605);
var G__24609 = (0);
seq__23856_24568 = G__24606;
chunk__23857_24569 = G__24607;
count__23858_24570 = G__24608;
i__23859_24571 = G__24609;
continue;
} else {
var map__23878_24610 = cljs.core.first(seq__23856_24604__$1);
var map__23878_24611__$1 = cljs.core.__destructure_map(map__23878_24610);
var ts_24612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23878_24611__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__23879_24613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23878_24611__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__23879_24614__$1 = cljs.core.__destructure_map(map__23879_24613);
var then_24615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23879_24614__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__23880_24616 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_24612));
var chunk__23881_24617 = null;
var count__23882_24618 = (0);
var i__23883_24619 = (0);
while(true){
if((i__23883_24619 < count__23882_24618)){
var test_24620 = chunk__23881_24617.cljs$core$IIndexed$_nth$arity$2(null,i__23883_24619);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_24620,":");


var G__24621 = seq__23880_24616;
var G__24622 = chunk__23881_24617;
var G__24623 = count__23882_24618;
var G__24624 = (i__23883_24619 + (1));
seq__23880_24616 = G__24621;
chunk__23881_24617 = G__24622;
count__23882_24618 = G__24623;
i__23883_24619 = G__24624;
continue;
} else {
var temp__5753__auto___24625__$1 = cljs.core.seq(seq__23880_24616);
if(temp__5753__auto___24625__$1){
var seq__23880_24626__$1 = temp__5753__auto___24625__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23880_24626__$1)){
var c__4679__auto___24627 = cljs.core.chunk_first(seq__23880_24626__$1);
var G__24628 = cljs.core.chunk_rest(seq__23880_24626__$1);
var G__24629 = c__4679__auto___24627;
var G__24630 = cljs.core.count(c__4679__auto___24627);
var G__24631 = (0);
seq__23880_24616 = G__24628;
chunk__23881_24617 = G__24629;
count__23882_24618 = G__24630;
i__23883_24619 = G__24631;
continue;
} else {
var test_24632 = cljs.core.first(seq__23880_24626__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_24632,":");


var G__24633 = cljs.core.next(seq__23880_24626__$1);
var G__24634 = null;
var G__24635 = (0);
var G__24636 = (0);
seq__23880_24616 = G__24633;
chunk__23881_24617 = G__24634;
count__23882_24618 = G__24635;
i__23883_24619 = G__24636;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_24615);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_24615);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__24637 = cljs.core.next(seq__23856_24604__$1);
var G__24638 = null;
var G__24639 = (0);
var G__24640 = (0);
seq__23856_24568 = G__24637;
chunk__23857_24569 = G__24638;
count__23858_24570 = G__24639;
i__23859_24571 = G__24640;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",default$);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(default$);
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",gs,";})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__23885){
var map__23886 = p__23885;
var map__23886__$1 = cljs.core.__destructure_map(map__23886);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23886__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23886__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__23894 = env;
var G__23895 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__23894,G__23895) : cljs.compiler.resolve_type.call(null,G__23894,G__23895));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__23896 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23896,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23896,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__23890_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__23890_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__23890_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__23899 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__23899,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__23899;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__23902 = env;
var G__23903 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__23902,G__23903) : cljs.compiler.resolve_type.call(null,G__23902,G__23903));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23904_SHARP_){
return cljs.compiler.resolve_type(env,p1__23904_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__23905 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__23906 = cljs.core.seq(vec__23905);
var first__23907 = cljs.core.first(seq__23906);
var seq__23906__$1 = cljs.core.next(seq__23906);
var p = first__23907;
var first__23907__$1 = cljs.core.first(seq__23906__$1);
var seq__23906__$2 = cljs.core.next(seq__23906__$1);
var ts = first__23907__$1;
var first__23907__$2 = cljs.core.first(seq__23906__$2);
var seq__23906__$3 = cljs.core.next(seq__23906__$2);
var n = first__23907__$2;
var xs = seq__23906__$3;
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__4251__auto__){
var and__4251__auto____$1 = ts;
if(cljs.core.truth_(and__4251__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__23908 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__23909 = cljs.core.seq(vec__23908);
var first__23910 = cljs.core.first(seq__23909);
var seq__23909__$1 = cljs.core.next(seq__23909);
var p = first__23910;
var first__23910__$1 = cljs.core.first(seq__23909__$1);
var seq__23909__$2 = cljs.core.next(seq__23909__$1);
var ts = first__23910__$1;
var xs = seq__23909__$2;
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__4251__auto__){
var and__4251__auto____$1 = ts;
if(cljs.core.truth_(and__4251__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__23912 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__23911 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__23911.cljs$core$IFn$_invoke$arity$1 ? fexpr__23911.cljs$core$IFn$_invoke$arity$1(G__23912) : fexpr__23911.call(null,G__23912));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__23915 = arguments.length;
switch (G__23915) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__23923 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23913_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__23913_SHARP_);
} else {
return p1__23913_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__23924 = cljs.core.seq(vec__23923);
var first__23925 = cljs.core.first(seq__23924);
var seq__23924__$1 = cljs.core.next(seq__23924);
var x = first__23925;
var ys = seq__23924__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__23926 = cljs.core.seq(ys);
var chunk__23927 = null;
var count__23928 = (0);
var i__23929 = (0);
while(true){
if((i__23929 < count__23928)){
var next_line = chunk__23927.cljs$core$IIndexed$_nth$arity$2(null,i__23929);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__24642 = seq__23926;
var G__24643 = chunk__23927;
var G__24644 = count__23928;
var G__24645 = (i__23929 + (1));
seq__23926 = G__24642;
chunk__23927 = G__24643;
count__23928 = G__24644;
i__23929 = G__24645;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__23926);
if(temp__5753__auto__){
var seq__23926__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23926__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__23926__$1);
var G__24646 = cljs.core.chunk_rest(seq__23926__$1);
var G__24647 = c__4679__auto__;
var G__24648 = cljs.core.count(c__4679__auto__);
var G__24649 = (0);
seq__23926 = G__24646;
chunk__23927 = G__24647;
count__23928 = G__24648;
i__23929 = G__24649;
continue;
} else {
var next_line = cljs.core.first(seq__23926__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__24650 = cljs.core.next(seq__23926__$1);
var G__24651 = null;
var G__24652 = (0);
var G__24653 = (0);
seq__23926 = G__24650;
chunk__23927 = G__24651;
count__23928 = G__24652;
i__23929 = G__24653;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

var seq__23930_24654 = cljs.core.seq(docs__$2);
var chunk__23931_24655 = null;
var count__23932_24656 = (0);
var i__23933_24657 = (0);
while(true){
if((i__23933_24657 < count__23932_24656)){
var e_24658 = chunk__23931_24655.cljs$core$IIndexed$_nth$arity$2(null,i__23933_24657);
if(cljs.core.truth_(e_24658)){
print_comment_lines(e_24658);
} else {
}


var G__24659 = seq__23930_24654;
var G__24660 = chunk__23931_24655;
var G__24661 = count__23932_24656;
var G__24662 = (i__23933_24657 + (1));
seq__23930_24654 = G__24659;
chunk__23931_24655 = G__24660;
count__23932_24656 = G__24661;
i__23933_24657 = G__24662;
continue;
} else {
var temp__5753__auto___24663 = cljs.core.seq(seq__23930_24654);
if(temp__5753__auto___24663){
var seq__23930_24664__$1 = temp__5753__auto___24663;
if(cljs.core.chunked_seq_QMARK_(seq__23930_24664__$1)){
var c__4679__auto___24665 = cljs.core.chunk_first(seq__23930_24664__$1);
var G__24666 = cljs.core.chunk_rest(seq__23930_24664__$1);
var G__24667 = c__4679__auto___24665;
var G__24668 = cljs.core.count(c__4679__auto___24665);
var G__24669 = (0);
seq__23930_24654 = G__24666;
chunk__23931_24655 = G__24667;
count__23932_24656 = G__24668;
i__23933_24657 = G__24669;
continue;
} else {
var e_24670 = cljs.core.first(seq__23930_24664__$1);
if(cljs.core.truth_(e_24670)){
print_comment_lines(e_24670);
} else {
}


var G__24671 = cljs.core.next(seq__23930_24664__$1);
var G__24672 = null;
var G__24673 = (0);
var G__24674 = (0);
seq__23930_24654 = G__24671;
chunk__23931_24655 = G__24672;
count__23932_24656 = G__24673;
i__23933_24657 = G__24674;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (((x === true) || (((x === false) || (typeof x === 'number'))))));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4251__auto__ = cljs.core.some((function (p1__23943_SHARP_){
return goog.string.startsWith(p1__23943_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = opts;
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__4251__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_(define)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__23945){
var map__23946 = p__23945;
var map__23946__$1 = cljs.core.__destructure_map(map__23946);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23946__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23946__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23946__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23946__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23946__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23946__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23946__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23946__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23946__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23946__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4253__auto__ = init;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)], 0)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(" = ",(function (){var temp__5751__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5751__auto__)){
var define = temp__5751__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("; return (");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");})()");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(")");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4251__auto__)){
return test;
} else {
return and__4251__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__23948){
var map__23949 = p__23948;
var map__23949__$1 = cljs.core.__destructure_map(map__23949);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23949__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23949__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23949__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__23953_24675 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__23954_24676 = null;
var count__23955_24677 = (0);
var i__23956_24678 = (0);
while(true){
if((i__23956_24678 < count__23955_24677)){
var vec__23966_24679 = chunk__23954_24676.cljs$core$IIndexed$_nth$arity$2(null,i__23956_24678);
var i_24680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23966_24679,(0),null);
var param_24681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23966_24679,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_24681);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__24682 = seq__23953_24675;
var G__24683 = chunk__23954_24676;
var G__24684 = count__23955_24677;
var G__24685 = (i__23956_24678 + (1));
seq__23953_24675 = G__24682;
chunk__23954_24676 = G__24683;
count__23955_24677 = G__24684;
i__23956_24678 = G__24685;
continue;
} else {
var temp__5753__auto___24686 = cljs.core.seq(seq__23953_24675);
if(temp__5753__auto___24686){
var seq__23953_24687__$1 = temp__5753__auto___24686;
if(cljs.core.chunked_seq_QMARK_(seq__23953_24687__$1)){
var c__4679__auto___24688 = cljs.core.chunk_first(seq__23953_24687__$1);
var G__24689 = cljs.core.chunk_rest(seq__23953_24687__$1);
var G__24690 = c__4679__auto___24688;
var G__24691 = cljs.core.count(c__4679__auto___24688);
var G__24692 = (0);
seq__23953_24675 = G__24689;
chunk__23954_24676 = G__24690;
count__23955_24677 = G__24691;
i__23956_24678 = G__24692;
continue;
} else {
var vec__23969_24693 = cljs.core.first(seq__23953_24687__$1);
var i_24694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23969_24693,(0),null);
var param_24695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23969_24693,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_24695);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__24696 = cljs.core.next(seq__23953_24687__$1);
var G__24697 = null;
var G__24698 = (0);
var G__24699 = (0);
seq__23953_24675 = G__24696;
chunk__23954_24676 = G__24697;
count__23955_24677 = G__24698;
i__23956_24678 = G__24699;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.first(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.rest(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__23972_24700 = cljs.core.seq(params);
var chunk__23973_24701 = null;
var count__23974_24702 = (0);
var i__23975_24703 = (0);
while(true){
if((i__23975_24703 < count__23974_24702)){
var param_24704 = chunk__23973_24701.cljs$core$IIndexed$_nth$arity$2(null,i__23975_24703);
cljs.compiler.emit(param_24704);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_24704,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__24705 = seq__23972_24700;
var G__24706 = chunk__23973_24701;
var G__24707 = count__23974_24702;
var G__24708 = (i__23975_24703 + (1));
seq__23972_24700 = G__24705;
chunk__23973_24701 = G__24706;
count__23974_24702 = G__24707;
i__23975_24703 = G__24708;
continue;
} else {
var temp__5753__auto___24709 = cljs.core.seq(seq__23972_24700);
if(temp__5753__auto___24709){
var seq__23972_24710__$1 = temp__5753__auto___24709;
if(cljs.core.chunked_seq_QMARK_(seq__23972_24710__$1)){
var c__4679__auto___24711 = cljs.core.chunk_first(seq__23972_24710__$1);
var G__24712 = cljs.core.chunk_rest(seq__23972_24710__$1);
var G__24713 = c__4679__auto___24711;
var G__24714 = cljs.core.count(c__4679__auto___24711);
var G__24715 = (0);
seq__23972_24700 = G__24712;
chunk__23973_24701 = G__24713;
count__23974_24702 = G__24714;
i__23975_24703 = G__24715;
continue;
} else {
var param_24716 = cljs.core.first(seq__23972_24710__$1);
cljs.compiler.emit(param_24716);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_24716,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__24717 = cljs.core.next(seq__23972_24710__$1);
var G__24718 = null;
var G__24719 = (0);
var G__24720 = (0);
seq__23972_24700 = G__24717;
chunk__23973_24701 = G__24718;
count__23974_24702 = G__24719;
i__23975_24703 = G__24720;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.seq(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__23976_24721 = cljs.core.seq(params);
var chunk__23977_24722 = null;
var count__23978_24723 = (0);
var i__23979_24724 = (0);
while(true){
if((i__23979_24724 < count__23978_24723)){
var param_24725 = chunk__23977_24722.cljs$core$IIndexed$_nth$arity$2(null,i__23979_24724);
cljs.compiler.emit(param_24725);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_24725,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__24726 = seq__23976_24721;
var G__24727 = chunk__23977_24722;
var G__24728 = count__23978_24723;
var G__24729 = (i__23979_24724 + (1));
seq__23976_24721 = G__24726;
chunk__23977_24722 = G__24727;
count__23978_24723 = G__24728;
i__23979_24724 = G__24729;
continue;
} else {
var temp__5753__auto___24730 = cljs.core.seq(seq__23976_24721);
if(temp__5753__auto___24730){
var seq__23976_24731__$1 = temp__5753__auto___24730;
if(cljs.core.chunked_seq_QMARK_(seq__23976_24731__$1)){
var c__4679__auto___24732 = cljs.core.chunk_first(seq__23976_24731__$1);
var G__24733 = cljs.core.chunk_rest(seq__23976_24731__$1);
var G__24734 = c__4679__auto___24732;
var G__24735 = cljs.core.count(c__4679__auto___24732);
var G__24736 = (0);
seq__23976_24721 = G__24733;
chunk__23977_24722 = G__24734;
count__23978_24723 = G__24735;
i__23979_24724 = G__24736;
continue;
} else {
var param_24737 = cljs.core.first(seq__23976_24731__$1);
cljs.compiler.emit(param_24737);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_24737,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__24738 = cljs.core.next(seq__23976_24731__$1);
var G__24739 = null;
var G__24740 = (0);
var G__24741 = (0);
seq__23976_24721 = G__24738;
chunk__23977_24722 = G__24739;
count__23978_24723 = G__24740;
i__23979_24724 = G__24741;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__23983 = cljs.core.seq(params);
var chunk__23984 = null;
var count__23985 = (0);
var i__23986 = (0);
while(true){
if((i__23986 < count__23985)){
var param = chunk__23984.cljs$core$IIndexed$_nth$arity$2(null,i__23986);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__24742 = seq__23983;
var G__24743 = chunk__23984;
var G__24744 = count__23985;
var G__24745 = (i__23986 + (1));
seq__23983 = G__24742;
chunk__23984 = G__24743;
count__23985 = G__24744;
i__23986 = G__24745;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__23983);
if(temp__5753__auto__){
var seq__23983__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23983__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__23983__$1);
var G__24746 = cljs.core.chunk_rest(seq__23983__$1);
var G__24747 = c__4679__auto__;
var G__24748 = cljs.core.count(c__4679__auto__);
var G__24749 = (0);
seq__23983 = G__24746;
chunk__23984 = G__24747;
count__23985 = G__24748;
i__23986 = G__24749;
continue;
} else {
var param = cljs.core.first(seq__23983__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__24750 = cljs.core.next(seq__23983__$1);
var G__24751 = null;
var G__24752 = (0);
var G__24753 = (0);
seq__23983 = G__24750;
chunk__23984 = G__24751;
count__23985 = G__24752;
i__23986 = G__24753;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__23987){
var map__23988 = p__23987;
var map__23988__$1 = cljs.core.__destructure_map(map__23988);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23988__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23988__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23988__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23988__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23988__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23988__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__13558__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"(");

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__23996){
var map__23997 = p__23996;
var map__23997__$1 = cljs.core.__destructure_map(map__23997);
var f = map__23997__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23997__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23997__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23997__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23997__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23997__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23997__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23997__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23997__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__13558__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_24754__$1 = (function (){var or__4253__auto__ = name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_24755 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_24754__$1);
var delegate_name_24756 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_24755),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_24756," = function (");

var seq__23998_24757 = cljs.core.seq(params);
var chunk__23999_24758 = null;
var count__24000_24759 = (0);
var i__24001_24760 = (0);
while(true){
if((i__24001_24760 < count__24000_24759)){
var param_24761 = chunk__23999_24758.cljs$core$IIndexed$_nth$arity$2(null,i__24001_24760);
cljs.compiler.emit(param_24761);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_24761,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__24762 = seq__23998_24757;
var G__24763 = chunk__23999_24758;
var G__24764 = count__24000_24759;
var G__24765 = (i__24001_24760 + (1));
seq__23998_24757 = G__24762;
chunk__23999_24758 = G__24763;
count__24000_24759 = G__24764;
i__24001_24760 = G__24765;
continue;
} else {
var temp__5753__auto___24766 = cljs.core.seq(seq__23998_24757);
if(temp__5753__auto___24766){
var seq__23998_24767__$1 = temp__5753__auto___24766;
if(cljs.core.chunked_seq_QMARK_(seq__23998_24767__$1)){
var c__4679__auto___24768 = cljs.core.chunk_first(seq__23998_24767__$1);
var G__24769 = cljs.core.chunk_rest(seq__23998_24767__$1);
var G__24770 = c__4679__auto___24768;
var G__24771 = cljs.core.count(c__4679__auto___24768);
var G__24772 = (0);
seq__23998_24757 = G__24769;
chunk__23999_24758 = G__24770;
count__24000_24759 = G__24771;
i__24001_24760 = G__24772;
continue;
} else {
var param_24773 = cljs.core.first(seq__23998_24767__$1);
cljs.compiler.emit(param_24773);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_24773,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__24774 = cljs.core.next(seq__23998_24767__$1);
var G__24775 = null;
var G__24776 = (0);
var G__24777 = (0);
seq__23998_24757 = G__24774;
chunk__23999_24758 = G__24775;
count__24000_24759 = G__24776;
i__24001_24760 = G__24777;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_24755," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_24778 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_24778,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_24756,".call(this,");

var seq__24007_24779 = cljs.core.seq(params);
var chunk__24008_24780 = null;
var count__24009_24781 = (0);
var i__24010_24782 = (0);
while(true){
if((i__24010_24782 < count__24009_24781)){
var param_24783 = chunk__24008_24780.cljs$core$IIndexed$_nth$arity$2(null,i__24010_24782);
cljs.compiler.emit(param_24783);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_24783,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__24784 = seq__24007_24779;
var G__24785 = chunk__24008_24780;
var G__24786 = count__24009_24781;
var G__24787 = (i__24010_24782 + (1));
seq__24007_24779 = G__24784;
chunk__24008_24780 = G__24785;
count__24009_24781 = G__24786;
i__24010_24782 = G__24787;
continue;
} else {
var temp__5753__auto___24788 = cljs.core.seq(seq__24007_24779);
if(temp__5753__auto___24788){
var seq__24007_24789__$1 = temp__5753__auto___24788;
if(cljs.core.chunked_seq_QMARK_(seq__24007_24789__$1)){
var c__4679__auto___24790 = cljs.core.chunk_first(seq__24007_24789__$1);
var G__24791 = cljs.core.chunk_rest(seq__24007_24789__$1);
var G__24792 = c__4679__auto___24790;
var G__24793 = cljs.core.count(c__4679__auto___24790);
var G__24794 = (0);
seq__24007_24779 = G__24791;
chunk__24008_24780 = G__24792;
count__24009_24781 = G__24793;
i__24010_24782 = G__24794;
continue;
} else {
var param_24795 = cljs.core.first(seq__24007_24789__$1);
cljs.compiler.emit(param_24795);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_24795,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__24796 = cljs.core.next(seq__24007_24789__$1);
var G__24797 = null;
var G__24798 = (0);
var G__24799 = (0);
seq__24007_24779 = G__24796;
chunk__24008_24780 = G__24797;
count__24009_24781 = G__24798;
i__24010_24782 = G__24799;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_24755,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_24755,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_24754__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_24755,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_24756,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_24755,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__24083){
var map__24084 = p__24083;
var map__24084__$1 = cljs.core.__destructure_map(map__24084);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24084__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24084__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24084__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24084__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24084__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24084__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24084__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24084__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24068_SHARP_){
var and__4251__auto__ = p1__24068_SHARP_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__24068_SHARP_));
} else {
return and__4251__auto__;
}
}),recur_frames)], 0));
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(recur_params,(cljs.core.truth_((function (){var or__4253__auto__ = in_loop;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.seq(recur_params);
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)):null))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_24800__$1 = (function (){var or__4253__auto__ = name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_24801 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_24800__$1);
var maxparams_24802 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_24803 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_24801),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_24804 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__24075_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__24075_SHARP_)));
}),cljs.core.seq(mmap_24803));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_24801," = null;");

var seq__24131_24805 = cljs.core.seq(ms_24804);
var chunk__24132_24806 = null;
var count__24133_24807 = (0);
var i__24134_24808 = (0);
while(true){
if((i__24134_24808 < count__24133_24807)){
var vec__24156_24809 = chunk__24132_24806.cljs$core$IIndexed$_nth$arity$2(null,i__24134_24808);
var n_24810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24156_24809,(0),null);
var meth_24811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24156_24809,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_24810," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_24811))){
cljs.compiler.emit_variadic_fn_method(meth_24811);
} else {
cljs.compiler.emit_fn_method(meth_24811);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__24812 = seq__24131_24805;
var G__24813 = chunk__24132_24806;
var G__24814 = count__24133_24807;
var G__24815 = (i__24134_24808 + (1));
seq__24131_24805 = G__24812;
chunk__24132_24806 = G__24813;
count__24133_24807 = G__24814;
i__24134_24808 = G__24815;
continue;
} else {
var temp__5753__auto___24816 = cljs.core.seq(seq__24131_24805);
if(temp__5753__auto___24816){
var seq__24131_24817__$1 = temp__5753__auto___24816;
if(cljs.core.chunked_seq_QMARK_(seq__24131_24817__$1)){
var c__4679__auto___24818 = cljs.core.chunk_first(seq__24131_24817__$1);
var G__24819 = cljs.core.chunk_rest(seq__24131_24817__$1);
var G__24820 = c__4679__auto___24818;
var G__24821 = cljs.core.count(c__4679__auto___24818);
var G__24822 = (0);
seq__24131_24805 = G__24819;
chunk__24132_24806 = G__24820;
count__24133_24807 = G__24821;
i__24134_24808 = G__24822;
continue;
} else {
var vec__24170_24823 = cljs.core.first(seq__24131_24817__$1);
var n_24824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24170_24823,(0),null);
var meth_24825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24170_24823,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_24824," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_24825))){
cljs.compiler.emit_variadic_fn_method(meth_24825);
} else {
cljs.compiler.emit_fn_method(meth_24825);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__24826 = cljs.core.next(seq__24131_24817__$1);
var G__24827 = null;
var G__24828 = (0);
var G__24829 = (0);
seq__24131_24805 = G__24826;
chunk__24132_24806 = G__24827;
count__24133_24807 = G__24828;
i__24134_24808 = G__24829;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_24801," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_24802),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_24802)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_24802));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__24179_24830 = cljs.core.seq(ms_24804);
var chunk__24180_24831 = null;
var count__24181_24832 = (0);
var i__24182_24833 = (0);
while(true){
if((i__24182_24833 < count__24181_24832)){
var vec__24197_24834 = chunk__24180_24831.cljs$core$IIndexed$_nth$arity$2(null,i__24182_24833);
var n_24835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24197_24834,(0),null);
var meth_24836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24197_24834,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_24836))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_24837 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_24837," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_24838 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_24837," = new cljs.core.IndexedSeq(",a_24838,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_24835,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_24802)),(((cljs.core.count(maxparams_24802) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_24837,");"], 0));
} else {
var pcnt_24839 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24836));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_24839,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_24835,".call(this",(((pcnt_24839 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_24839,maxparams_24802)),null,(1),null)),(2),null))),");");
}


var G__24840 = seq__24179_24830;
var G__24841 = chunk__24180_24831;
var G__24842 = count__24181_24832;
var G__24843 = (i__24182_24833 + (1));
seq__24179_24830 = G__24840;
chunk__24180_24831 = G__24841;
count__24181_24832 = G__24842;
i__24182_24833 = G__24843;
continue;
} else {
var temp__5753__auto___24844 = cljs.core.seq(seq__24179_24830);
if(temp__5753__auto___24844){
var seq__24179_24845__$1 = temp__5753__auto___24844;
if(cljs.core.chunked_seq_QMARK_(seq__24179_24845__$1)){
var c__4679__auto___24846 = cljs.core.chunk_first(seq__24179_24845__$1);
var G__24847 = cljs.core.chunk_rest(seq__24179_24845__$1);
var G__24848 = c__4679__auto___24846;
var G__24849 = cljs.core.count(c__4679__auto___24846);
var G__24850 = (0);
seq__24179_24830 = G__24847;
chunk__24180_24831 = G__24848;
count__24181_24832 = G__24849;
i__24182_24833 = G__24850;
continue;
} else {
var vec__24200_24851 = cljs.core.first(seq__24179_24845__$1);
var n_24852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24200_24851,(0),null);
var meth_24853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24200_24851,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_24853))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_24854 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_24854," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_24855 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_24854," = new cljs.core.IndexedSeq(",a_24855,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_24852,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_24802)),(((cljs.core.count(maxparams_24802) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_24854,");"], 0));
} else {
var pcnt_24856 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24853));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_24856,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_24852,".call(this",(((pcnt_24856 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_24856,maxparams_24802)),null,(1),null)),(2),null))),");");
}


var G__24857 = cljs.core.next(seq__24179_24845__$1);
var G__24858 = null;
var G__24859 = (0);
var G__24860 = (0);
seq__24179_24830 = G__24857;
chunk__24180_24831 = G__24858;
count__24181_24832 = G__24859;
i__24182_24833 = G__24860;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_24861 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_24804)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_24861,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_24801,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_24801,".cljs$lang$applyTo = ",cljs.core.some((function (p1__24082_SHARP_){
var vec__24203 = p1__24082_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24203,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24203,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_24804),".cljs$lang$applyTo;");
} else {
}

var seq__24206_24862 = cljs.core.seq(ms_24804);
var chunk__24207_24863 = null;
var count__24208_24864 = (0);
var i__24209_24865 = (0);
while(true){
if((i__24209_24865 < count__24208_24864)){
var vec__24216_24866 = chunk__24207_24863.cljs$core$IIndexed$_nth$arity$2(null,i__24209_24865);
var n_24867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24216_24866,(0),null);
var meth_24868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24216_24866,(1),null);
var c_24869 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24868));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_24868))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_24801,".cljs$core$IFn$_invoke$arity$variadic = ",n_24867,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_24801,".cljs$core$IFn$_invoke$arity$",c_24869," = ",n_24867,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__24870 = seq__24206_24862;
var G__24871 = chunk__24207_24863;
var G__24872 = count__24208_24864;
var G__24873 = (i__24209_24865 + (1));
seq__24206_24862 = G__24870;
chunk__24207_24863 = G__24871;
count__24208_24864 = G__24872;
i__24209_24865 = G__24873;
continue;
} else {
var temp__5753__auto___24874 = cljs.core.seq(seq__24206_24862);
if(temp__5753__auto___24874){
var seq__24206_24875__$1 = temp__5753__auto___24874;
if(cljs.core.chunked_seq_QMARK_(seq__24206_24875__$1)){
var c__4679__auto___24876 = cljs.core.chunk_first(seq__24206_24875__$1);
var G__24877 = cljs.core.chunk_rest(seq__24206_24875__$1);
var G__24878 = c__4679__auto___24876;
var G__24879 = cljs.core.count(c__4679__auto___24876);
var G__24880 = (0);
seq__24206_24862 = G__24877;
chunk__24207_24863 = G__24878;
count__24208_24864 = G__24879;
i__24209_24865 = G__24880;
continue;
} else {
var vec__24224_24881 = cljs.core.first(seq__24206_24875__$1);
var n_24882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24224_24881,(0),null);
var meth_24883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24224_24881,(1),null);
var c_24884 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24883));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_24883))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_24801,".cljs$core$IFn$_invoke$arity$variadic = ",n_24882,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_24801,".cljs$core$IFn$_invoke$arity$",c_24884," = ",n_24882,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__24885 = cljs.core.next(seq__24206_24875__$1);
var G__24886 = null;
var G__24887 = (0);
var G__24888 = (0);
seq__24206_24862 = G__24885;
chunk__24207_24863 = G__24886;
count__24208_24864 = G__24887;
i__24209_24865 = G__24888;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_24801,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__24227){
var map__24228 = p__24227;
var map__24228__$1 = cljs.core.__destructure_map(map__24228);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24228__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24228__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24228__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__24229_24889 = cljs.core.seq(statements);
var chunk__24230_24890 = null;
var count__24231_24891 = (0);
var i__24232_24892 = (0);
while(true){
if((i__24232_24892 < count__24231_24891)){
var s_24893 = chunk__24230_24890.cljs$core$IIndexed$_nth$arity$2(null,i__24232_24892);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_24893);


var G__24894 = seq__24229_24889;
var G__24895 = chunk__24230_24890;
var G__24896 = count__24231_24891;
var G__24897 = (i__24232_24892 + (1));
seq__24229_24889 = G__24894;
chunk__24230_24890 = G__24895;
count__24231_24891 = G__24896;
i__24232_24892 = G__24897;
continue;
} else {
var temp__5753__auto___24898 = cljs.core.seq(seq__24229_24889);
if(temp__5753__auto___24898){
var seq__24229_24899__$1 = temp__5753__auto___24898;
if(cljs.core.chunked_seq_QMARK_(seq__24229_24899__$1)){
var c__4679__auto___24900 = cljs.core.chunk_first(seq__24229_24899__$1);
var G__24901 = cljs.core.chunk_rest(seq__24229_24899__$1);
var G__24902 = c__4679__auto___24900;
var G__24903 = cljs.core.count(c__4679__auto___24900);
var G__24904 = (0);
seq__24229_24889 = G__24901;
chunk__24230_24890 = G__24902;
count__24231_24891 = G__24903;
i__24232_24892 = G__24904;
continue;
} else {
var s_24905 = cljs.core.first(seq__24229_24899__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_24905);


var G__24906 = cljs.core.next(seq__24229_24899__$1);
var G__24907 = null;
var G__24908 = (0);
var G__24909 = (0);
seq__24229_24889 = G__24906;
chunk__24230_24890 = G__24907;
count__24231_24891 = G__24908;
i__24232_24892 = G__24909;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__24243){
var map__24244 = p__24243;
var map__24244__$1 = cljs.core.__destructure_map(map__24244);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24244__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24244__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24244__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24244__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24244__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4253__auto__ = name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__24246,is_loop){
var map__24247 = p__24246;
var map__24247__$1 = cljs.core.__destructure_map(map__24247);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24247__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24247__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24247__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__24248_24910 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__24249_24911 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__24249_24911);

try{var seq__24250_24912 = cljs.core.seq(bindings);
var chunk__24251_24913 = null;
var count__24252_24914 = (0);
var i__24253_24915 = (0);
while(true){
if((i__24253_24915 < count__24252_24914)){
var map__24256_24916 = chunk__24251_24913.cljs$core$IIndexed$_nth$arity$2(null,i__24253_24915);
var map__24256_24917__$1 = cljs.core.__destructure_map(map__24256_24916);
var binding_24918 = map__24256_24917__$1;
var init_24919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24256_24917__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_24918);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_24919,";");


var G__24920 = seq__24250_24912;
var G__24921 = chunk__24251_24913;
var G__24922 = count__24252_24914;
var G__24923 = (i__24253_24915 + (1));
seq__24250_24912 = G__24920;
chunk__24251_24913 = G__24921;
count__24252_24914 = G__24922;
i__24253_24915 = G__24923;
continue;
} else {
var temp__5753__auto___24924 = cljs.core.seq(seq__24250_24912);
if(temp__5753__auto___24924){
var seq__24250_24925__$1 = temp__5753__auto___24924;
if(cljs.core.chunked_seq_QMARK_(seq__24250_24925__$1)){
var c__4679__auto___24926 = cljs.core.chunk_first(seq__24250_24925__$1);
var G__24927 = cljs.core.chunk_rest(seq__24250_24925__$1);
var G__24928 = c__4679__auto___24926;
var G__24929 = cljs.core.count(c__4679__auto___24926);
var G__24930 = (0);
seq__24250_24912 = G__24927;
chunk__24251_24913 = G__24928;
count__24252_24914 = G__24929;
i__24253_24915 = G__24930;
continue;
} else {
var map__24257_24931 = cljs.core.first(seq__24250_24925__$1);
var map__24257_24932__$1 = cljs.core.__destructure_map(map__24257_24931);
var binding_24933 = map__24257_24932__$1;
var init_24934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24257_24932__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_24933);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_24934,";");


var G__24935 = cljs.core.next(seq__24250_24925__$1);
var G__24936 = null;
var G__24937 = (0);
var G__24938 = (0);
seq__24250_24912 = G__24935;
chunk__24251_24913 = G__24936;
count__24252_24914 = G__24937;
i__24253_24915 = G__24938;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__24248_24910);
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__24258){
var map__24259 = p__24258;
var map__24259__$1 = cljs.core.__destructure_map(map__24259);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24259__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24259__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24259__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4741__auto___24939 = cljs.core.count(exprs);
var i_24940 = (0);
while(true){
if((i_24940 < n__4741__auto___24939)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_24940) : temps.call(null,i_24940))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_24940) : exprs.call(null,i_24940)),";");

var G__24941 = (i_24940 + (1));
i_24940 = G__24941;
continue;
} else {
}
break;
}

var n__4741__auto___24942 = cljs.core.count(exprs);
var i_24943 = (0);
while(true){
if((i_24943 < n__4741__auto___24942)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_24943) : params.call(null,i_24943)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_24943) : temps.call(null,i_24943)),";");

var G__24944 = (i_24943 + (1));
i_24943 = G__24944;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__24261){
var map__24262 = p__24261;
var map__24262__$1 = cljs.core.__destructure_map(map__24262);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24262__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24262__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24262__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__24263_24945 = cljs.core.seq(bindings);
var chunk__24264_24946 = null;
var count__24265_24947 = (0);
var i__24266_24948 = (0);
while(true){
if((i__24266_24948 < count__24265_24947)){
var map__24269_24949 = chunk__24264_24946.cljs$core$IIndexed$_nth$arity$2(null,i__24266_24948);
var map__24269_24950__$1 = cljs.core.__destructure_map(map__24269_24949);
var binding_24951 = map__24269_24950__$1;
var init_24952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24269_24950__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_24951)," = ",init_24952,";");


var G__24953 = seq__24263_24945;
var G__24954 = chunk__24264_24946;
var G__24955 = count__24265_24947;
var G__24956 = (i__24266_24948 + (1));
seq__24263_24945 = G__24953;
chunk__24264_24946 = G__24954;
count__24265_24947 = G__24955;
i__24266_24948 = G__24956;
continue;
} else {
var temp__5753__auto___24957 = cljs.core.seq(seq__24263_24945);
if(temp__5753__auto___24957){
var seq__24263_24958__$1 = temp__5753__auto___24957;
if(cljs.core.chunked_seq_QMARK_(seq__24263_24958__$1)){
var c__4679__auto___24959 = cljs.core.chunk_first(seq__24263_24958__$1);
var G__24960 = cljs.core.chunk_rest(seq__24263_24958__$1);
var G__24961 = c__4679__auto___24959;
var G__24962 = cljs.core.count(c__4679__auto___24959);
var G__24963 = (0);
seq__24263_24945 = G__24960;
chunk__24264_24946 = G__24961;
count__24265_24947 = G__24962;
i__24266_24948 = G__24963;
continue;
} else {
var map__24270_24964 = cljs.core.first(seq__24263_24958__$1);
var map__24270_24965__$1 = cljs.core.__destructure_map(map__24270_24964);
var binding_24966 = map__24270_24965__$1;
var init_24967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24270_24965__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_24966)," = ",init_24967,";");


var G__24968 = cljs.core.next(seq__24263_24958__$1);
var G__24969 = null;
var G__24970 = (0);
var G__24971 = (0);
seq__24263_24945 = G__24968;
chunk__24264_24946 = G__24969;
count__24265_24947 = G__24970;
i__24266_24948 = G__24971;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__24273){
var map__24274 = p__24273;
var map__24274__$1 = cljs.core.__destructure_map(map__24274);
var expr = map__24274__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24274__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24274__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24274__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4251__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__4251__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4251__auto__ = protocol;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = tag;
if(cljs.core.truth_(and__4251__auto____$1)){
var or__4253__auto__ = (function (){var and__4251__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = protocol;
if(cljs.core.truth_(and__4251__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto____$2 = (function (){var or__4253__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4251__auto____$2)){
var or__4253__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
var and__4251__auto____$3 = (!(cljs.core.set_QMARK_(tag)));
if(and__4251__auto____$3){
var and__4251__auto____$4 = cljs.core.not((function (){var fexpr__24278 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__24278.cljs$core$IFn$_invoke$arity$1 ? fexpr__24278.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__24278.call(null,tag));
})());
if(and__4251__auto____$4){
var temp__5753__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5753__auto__)){
var ps = temp__5753__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
}
} else {
return and__4251__auto____$2;
}
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__24279 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__24279.cljs$core$IFn$_invoke$arity$1 ? fexpr__24279.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__24279.call(null,first_arg_tag));
})())));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag(env,f);
var js_QMARK_ = (function (){var or__4253__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4253__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var temp__5753__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5753__auto__)){
var ns_str = temp__5753__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4253__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote(f);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__24275 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return (arity > mfa);
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__24271_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24271_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__24272_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24272_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24275,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24275,(1),null);
var env__13558__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(!(",cljs.core.first(args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("((",cljs.core.first(args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_24972 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_24972,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_24973 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_24973,args)),(((mfa_24973 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_24973,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,"(",cljs.compiler.comma_sep(args),")");
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4251__auto__)){
var G__24282 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__24281 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__24281.cljs$core$IFn$_invoke$arity$1 ? fexpr__24281.cljs$core$IFn$_invoke$arity$1(G__24282) : fexpr__24281.call(null,G__24282));
} else {
return and__4251__auto__;
}
})())){
var fprop_24974 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_24974," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_24974,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_24974," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_24974,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__24283){
var map__24284 = p__24283;
var map__24284__$1 = cljs.core.__destructure_map(map__24284);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24284__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24284__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24284__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13558__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__24285){
var map__24286 = p__24285;
var map__24286__$1 = cljs.core.__destructure_map(map__24286);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24286__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24286__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24286__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13558__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.sublib_select = (function cljs$compiler$sublib_select(sublib){
if(cljs.core.truth_(sublib)){
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(sublib,/\./);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24287_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24287_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__24288 = cljs.analyzer.lib_AMPERSAND_sublib(lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24288,(0),null);
var sublib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24288,(1),null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib)," = goog.global",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name((function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_SINGLEQUOTE_));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.name(lib_SINGLEQUOTE_));
}
})()),/\./))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.sublib_select(sublib),";"], 0));
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__24291 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__24291__$1 = cljs.core.__destructure_map(map__24291);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24291__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24291__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__24292 = options;
var map__24292__$1 = cljs.core.__destructure_map(map__24292);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24292__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24292__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24292__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__24293 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__24299 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__24299__$1 = cljs.core.__destructure_map(map__24299);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24299__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24299__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24293,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24293,(1),null);
var vec__24296 = (function (){var map__24300 = cljs.core.group_by(cljs.analyzer.goog_module_dep_QMARK_,libs_to_load);
var map__24300__$1 = cljs.core.__destructure_map(map__24300);
var goog_modules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24300__$1,true);
var libs_to_load__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24300__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog_modules,libs_to_load__$1], null);
})();
var goog_modules = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24296,(0),null);
var libs_to_load__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24296,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__24301_24975 = cljs.core.seq(libs_to_load__$1);
var chunk__24302_24976 = null;
var count__24303_24977 = (0);
var i__24304_24978 = (0);
while(true){
if((i__24304_24978 < count__24303_24977)){
var lib_24979 = chunk__24302_24976.cljs$core$IIndexed$_nth$arity$2(null,i__24304_24978);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_24979)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_24979),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_24979),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_24979),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_24979),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_24979,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_24979),"');");
}

}
}
}


var G__24980 = seq__24301_24975;
var G__24981 = chunk__24302_24976;
var G__24982 = count__24303_24977;
var G__24983 = (i__24304_24978 + (1));
seq__24301_24975 = G__24980;
chunk__24302_24976 = G__24981;
count__24303_24977 = G__24982;
i__24304_24978 = G__24983;
continue;
} else {
var temp__5753__auto___24984 = cljs.core.seq(seq__24301_24975);
if(temp__5753__auto___24984){
var seq__24301_24985__$1 = temp__5753__auto___24984;
if(cljs.core.chunked_seq_QMARK_(seq__24301_24985__$1)){
var c__4679__auto___24986 = cljs.core.chunk_first(seq__24301_24985__$1);
var G__24987 = cljs.core.chunk_rest(seq__24301_24985__$1);
var G__24988 = c__4679__auto___24986;
var G__24989 = cljs.core.count(c__4679__auto___24986);
var G__24990 = (0);
seq__24301_24975 = G__24987;
chunk__24302_24976 = G__24988;
count__24303_24977 = G__24989;
i__24304_24978 = G__24990;
continue;
} else {
var lib_24991 = cljs.core.first(seq__24301_24985__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_24991)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_24991),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_24991),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_24991),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_24991),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_24991,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_24991),"');");
}

}
}
}


var G__24992 = cljs.core.next(seq__24301_24985__$1);
var G__24993 = null;
var G__24994 = (0);
var G__24995 = (0);
seq__24301_24975 = G__24992;
chunk__24302_24976 = G__24993;
count__24303_24977 = G__24994;
i__24304_24978 = G__24995;
continue;
}
} else {
}
}
break;
}

var seq__24305_24996 = cljs.core.seq(node_libs);
var chunk__24306_24997 = null;
var count__24307_24998 = (0);
var i__24308_24999 = (0);
while(true){
if((i__24308_24999 < count__24307_24998)){
var lib_25000 = chunk__24306_24997.cljs$core$IIndexed$_nth$arity$2(null,i__24308_24999);
var vec__24329_25001 = cljs.analyzer.lib_AMPERSAND_sublib(lib_25000);
var lib_SINGLEQUOTE__25002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24329_25001,(0),null);
var sublib_25003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24329_25001,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_25000)," = require('",lib_SINGLEQUOTE__25002,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_25003),";"], 0));


var G__25004 = seq__24305_24996;
var G__25005 = chunk__24306_24997;
var G__25006 = count__24307_24998;
var G__25007 = (i__24308_24999 + (1));
seq__24305_24996 = G__25004;
chunk__24306_24997 = G__25005;
count__24307_24998 = G__25006;
i__24308_24999 = G__25007;
continue;
} else {
var temp__5753__auto___25008 = cljs.core.seq(seq__24305_24996);
if(temp__5753__auto___25008){
var seq__24305_25009__$1 = temp__5753__auto___25008;
if(cljs.core.chunked_seq_QMARK_(seq__24305_25009__$1)){
var c__4679__auto___25010 = cljs.core.chunk_first(seq__24305_25009__$1);
var G__25011 = cljs.core.chunk_rest(seq__24305_25009__$1);
var G__25012 = c__4679__auto___25010;
var G__25013 = cljs.core.count(c__4679__auto___25010);
var G__25014 = (0);
seq__24305_24996 = G__25011;
chunk__24306_24997 = G__25012;
count__24307_24998 = G__25013;
i__24308_24999 = G__25014;
continue;
} else {
var lib_25015 = cljs.core.first(seq__24305_25009__$1);
var vec__24338_25016 = cljs.analyzer.lib_AMPERSAND_sublib(lib_25015);
var lib_SINGLEQUOTE__25017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24338_25016,(0),null);
var sublib_25018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24338_25016,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_25015)," = require('",lib_SINGLEQUOTE__25017,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_25018),";"], 0));


var G__25019 = cljs.core.next(seq__24305_25009__$1);
var G__25020 = null;
var G__25021 = (0);
var G__25022 = (0);
seq__24305_24996 = G__25019;
chunk__24306_24997 = G__25020;
count__24307_24998 = G__25021;
i__24308_24999 = G__25022;
continue;
}
} else {
}
}
break;
}

var seq__24341_25023 = cljs.core.seq(goog_modules);
var chunk__24342_25024 = null;
var count__24343_25025 = (0);
var i__24344_25026 = (0);
while(true){
if((i__24344_25026 < count__24343_25025)){
var lib_25027 = chunk__24342_25024.cljs$core$IIndexed$_nth$arity$2(null,i__24344_25026);
var vec__24351_25028 = cljs.analyzer.lib_AMPERSAND_sublib(lib_25027);
var lib_SINGLEQUOTE__25029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24351_25028,(0),null);
var sublib_25030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24351_25028,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",lib_SINGLEQUOTE__25029,"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.scope(function(){");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_goog_module_lib.cljs$core$IFn$_invoke$arity$1(lib_25027)," = goog.module.get('",lib_SINGLEQUOTE__25029,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_25030),";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");


var G__25031 = seq__24341_25023;
var G__25032 = chunk__24342_25024;
var G__25033 = count__24343_25025;
var G__25034 = (i__24344_25026 + (1));
seq__24341_25023 = G__25031;
chunk__24342_25024 = G__25032;
count__24343_25025 = G__25033;
i__24344_25026 = G__25034;
continue;
} else {
var temp__5753__auto___25035 = cljs.core.seq(seq__24341_25023);
if(temp__5753__auto___25035){
var seq__24341_25036__$1 = temp__5753__auto___25035;
if(cljs.core.chunked_seq_QMARK_(seq__24341_25036__$1)){
var c__4679__auto___25037 = cljs.core.chunk_first(seq__24341_25036__$1);
var G__25038 = cljs.core.chunk_rest(seq__24341_25036__$1);
var G__25039 = c__4679__auto___25037;
var G__25040 = cljs.core.count(c__4679__auto___25037);
var G__25041 = (0);
seq__24341_25023 = G__25038;
chunk__24342_25024 = G__25039;
count__24343_25025 = G__25040;
i__24344_25026 = G__25041;
continue;
} else {
var lib_25042 = cljs.core.first(seq__24341_25036__$1);
var vec__24354_25043 = cljs.analyzer.lib_AMPERSAND_sublib(lib_25042);
var lib_SINGLEQUOTE__25044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24354_25043,(0),null);
var sublib_25045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24354_25043,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",lib_SINGLEQUOTE__25044,"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.scope(function(){");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_goog_module_lib.cljs$core$IFn$_invoke$arity$1(lib_25042)," = goog.module.get('",lib_SINGLEQUOTE__25044,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_25045),";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");


var G__25046 = cljs.core.next(seq__24341_25036__$1);
var G__25047 = null;
var G__25048 = (0);
var G__25049 = (0);
seq__24341_25023 = G__25046;
chunk__24342_25024 = G__25047;
count__24343_25025 = G__25048;
i__24344_25026 = G__25049;
continue;
}
} else {
}
}
break;
}

var seq__24357_25050 = cljs.core.seq(global_exports_libs);
var chunk__24358_25051 = null;
var count__24359_25052 = (0);
var i__24360_25053 = (0);
while(true){
if((i__24360_25053 < count__24359_25052)){
var lib_25054 = chunk__24358_25051.cljs$core$IIndexed$_nth$arity$2(null,i__24360_25053);
var map__24363_25055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(cljs.core.first(cljs.analyzer.lib_AMPERSAND_sublib(lib_25054))));
var map__24363_25056__$1 = cljs.core.__destructure_map(map__24363_25055);
var global_exports_25057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24363_25056__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_25057,lib_25054);


var G__25058 = seq__24357_25050;
var G__25059 = chunk__24358_25051;
var G__25060 = count__24359_25052;
var G__25061 = (i__24360_25053 + (1));
seq__24357_25050 = G__25058;
chunk__24358_25051 = G__25059;
count__24359_25052 = G__25060;
i__24360_25053 = G__25061;
continue;
} else {
var temp__5753__auto___25062 = cljs.core.seq(seq__24357_25050);
if(temp__5753__auto___25062){
var seq__24357_25063__$1 = temp__5753__auto___25062;
if(cljs.core.chunked_seq_QMARK_(seq__24357_25063__$1)){
var c__4679__auto___25064 = cljs.core.chunk_first(seq__24357_25063__$1);
var G__25065 = cljs.core.chunk_rest(seq__24357_25063__$1);
var G__25066 = c__4679__auto___25064;
var G__25067 = cljs.core.count(c__4679__auto___25064);
var G__25068 = (0);
seq__24357_25050 = G__25065;
chunk__24358_25051 = G__25066;
count__24359_25052 = G__25067;
i__24360_25053 = G__25068;
continue;
} else {
var lib_25069 = cljs.core.first(seq__24357_25063__$1);
var map__24364_25070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(cljs.core.first(cljs.analyzer.lib_AMPERSAND_sublib(lib_25069))));
var map__24364_25071__$1 = cljs.core.__destructure_map(map__24364_25070);
var global_exports_25072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24364_25071__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_25072,lib_25069);


var G__25073 = cljs.core.next(seq__24357_25063__$1);
var G__25074 = null;
var G__25075 = (0);
var G__25076 = (0);
seq__24357_25050 = G__25073;
chunk__24358_25051 = G__25074;
count__24359_25052 = G__25075;
i__24360_25053 = G__25076;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__24365){
var map__24366 = p__24365;
var map__24366__$1 = cljs.core.__destructure_map(map__24366);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24366__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24366__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24366__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24366__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24366__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24366__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24366__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__24367){
var map__24368 = p__24367;
var map__24368__$1 = cljs.core.__destructure_map(map__24368);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24368__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24368__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24368__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24368__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24368__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24368__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24368__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__24369){
var map__24370 = p__24369;
var map__24370__$1 = cljs.core.__destructure_map(map__24370);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24370__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24370__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24370__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24370__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24370__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__24371_25077 = cljs.core.seq(protocols);
var chunk__24372_25078 = null;
var count__24373_25079 = (0);
var i__24374_25080 = (0);
while(true){
if((i__24374_25080 < count__24373_25079)){
var protocol_25081 = chunk__24372_25078.cljs$core$IIndexed$_nth$arity$2(null,i__24374_25080);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25081)),"}");


var G__25082 = seq__24371_25077;
var G__25083 = chunk__24372_25078;
var G__25084 = count__24373_25079;
var G__25085 = (i__24374_25080 + (1));
seq__24371_25077 = G__25082;
chunk__24372_25078 = G__25083;
count__24373_25079 = G__25084;
i__24374_25080 = G__25085;
continue;
} else {
var temp__5753__auto___25086 = cljs.core.seq(seq__24371_25077);
if(temp__5753__auto___25086){
var seq__24371_25087__$1 = temp__5753__auto___25086;
if(cljs.core.chunked_seq_QMARK_(seq__24371_25087__$1)){
var c__4679__auto___25088 = cljs.core.chunk_first(seq__24371_25087__$1);
var G__25089 = cljs.core.chunk_rest(seq__24371_25087__$1);
var G__25090 = c__4679__auto___25088;
var G__25091 = cljs.core.count(c__4679__auto___25088);
var G__25092 = (0);
seq__24371_25077 = G__25089;
chunk__24372_25078 = G__25090;
count__24373_25079 = G__25091;
i__24374_25080 = G__25092;
continue;
} else {
var protocol_25093 = cljs.core.first(seq__24371_25087__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25093)),"}");


var G__25094 = cljs.core.next(seq__24371_25087__$1);
var G__25095 = null;
var G__25096 = (0);
var G__25097 = (0);
seq__24371_25077 = G__25094;
chunk__24372_25078 = G__25095;
count__24373_25079 = G__25096;
i__24374_25080 = G__25097;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__24375_25098 = cljs.core.seq(fields__$1);
var chunk__24376_25099 = null;
var count__24377_25100 = (0);
var i__24378_25101 = (0);
while(true){
if((i__24378_25101 < count__24377_25100)){
var fld_25102 = chunk__24376_25099.cljs$core$IIndexed$_nth$arity$2(null,i__24378_25101);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25102," = ",fld_25102,";");


var G__25103 = seq__24375_25098;
var G__25104 = chunk__24376_25099;
var G__25105 = count__24377_25100;
var G__25106 = (i__24378_25101 + (1));
seq__24375_25098 = G__25103;
chunk__24376_25099 = G__25104;
count__24377_25100 = G__25105;
i__24378_25101 = G__25106;
continue;
} else {
var temp__5753__auto___25107 = cljs.core.seq(seq__24375_25098);
if(temp__5753__auto___25107){
var seq__24375_25108__$1 = temp__5753__auto___25107;
if(cljs.core.chunked_seq_QMARK_(seq__24375_25108__$1)){
var c__4679__auto___25109 = cljs.core.chunk_first(seq__24375_25108__$1);
var G__25110 = cljs.core.chunk_rest(seq__24375_25108__$1);
var G__25111 = c__4679__auto___25109;
var G__25112 = cljs.core.count(c__4679__auto___25109);
var G__25113 = (0);
seq__24375_25098 = G__25110;
chunk__24376_25099 = G__25111;
count__24377_25100 = G__25112;
i__24378_25101 = G__25113;
continue;
} else {
var fld_25114 = cljs.core.first(seq__24375_25108__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25114," = ",fld_25114,";");


var G__25115 = cljs.core.next(seq__24375_25108__$1);
var G__25116 = null;
var G__25117 = (0);
var G__25118 = (0);
seq__24375_25098 = G__25115;
chunk__24376_25099 = G__25116;
count__24377_25100 = G__25117;
i__24378_25101 = G__25118;
continue;
}
} else {
}
}
break;
}

var seq__24379_25119 = cljs.core.seq(pmasks);
var chunk__24380_25120 = null;
var count__24381_25121 = (0);
var i__24382_25122 = (0);
while(true){
if((i__24382_25122 < count__24381_25121)){
var vec__24389_25123 = chunk__24380_25120.cljs$core$IIndexed$_nth$arity$2(null,i__24382_25122);
var pno_25124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24389_25123,(0),null);
var pmask_25125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24389_25123,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_25124,"$ = ",pmask_25125,";");


var G__25126 = seq__24379_25119;
var G__25127 = chunk__24380_25120;
var G__25128 = count__24381_25121;
var G__25129 = (i__24382_25122 + (1));
seq__24379_25119 = G__25126;
chunk__24380_25120 = G__25127;
count__24381_25121 = G__25128;
i__24382_25122 = G__25129;
continue;
} else {
var temp__5753__auto___25130 = cljs.core.seq(seq__24379_25119);
if(temp__5753__auto___25130){
var seq__24379_25131__$1 = temp__5753__auto___25130;
if(cljs.core.chunked_seq_QMARK_(seq__24379_25131__$1)){
var c__4679__auto___25132 = cljs.core.chunk_first(seq__24379_25131__$1);
var G__25133 = cljs.core.chunk_rest(seq__24379_25131__$1);
var G__25134 = c__4679__auto___25132;
var G__25135 = cljs.core.count(c__4679__auto___25132);
var G__25136 = (0);
seq__24379_25119 = G__25133;
chunk__24380_25120 = G__25134;
count__24381_25121 = G__25135;
i__24382_25122 = G__25136;
continue;
} else {
var vec__24392_25137 = cljs.core.first(seq__24379_25131__$1);
var pno_25138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24392_25137,(0),null);
var pmask_25139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24392_25137,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_25138,"$ = ",pmask_25139,";");


var G__25140 = cljs.core.next(seq__24379_25131__$1);
var G__25141 = null;
var G__25142 = (0);
var G__25143 = (0);
seq__24379_25119 = G__25140;
chunk__24380_25120 = G__25141;
count__24381_25121 = G__25142;
i__24382_25122 = G__25143;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__24395){
var map__24396 = p__24395;
var map__24396__$1 = cljs.core.__destructure_map(map__24396);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24396__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24396__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24396__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24396__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24396__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__24397_25144 = cljs.core.seq(protocols);
var chunk__24398_25145 = null;
var count__24399_25146 = (0);
var i__24400_25147 = (0);
while(true){
if((i__24400_25147 < count__24399_25146)){
var protocol_25148 = chunk__24398_25145.cljs$core$IIndexed$_nth$arity$2(null,i__24400_25147);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25148)),"}");


var G__25149 = seq__24397_25144;
var G__25150 = chunk__24398_25145;
var G__25151 = count__24399_25146;
var G__25152 = (i__24400_25147 + (1));
seq__24397_25144 = G__25149;
chunk__24398_25145 = G__25150;
count__24399_25146 = G__25151;
i__24400_25147 = G__25152;
continue;
} else {
var temp__5753__auto___25153 = cljs.core.seq(seq__24397_25144);
if(temp__5753__auto___25153){
var seq__24397_25154__$1 = temp__5753__auto___25153;
if(cljs.core.chunked_seq_QMARK_(seq__24397_25154__$1)){
var c__4679__auto___25155 = cljs.core.chunk_first(seq__24397_25154__$1);
var G__25156 = cljs.core.chunk_rest(seq__24397_25154__$1);
var G__25157 = c__4679__auto___25155;
var G__25158 = cljs.core.count(c__4679__auto___25155);
var G__25159 = (0);
seq__24397_25144 = G__25156;
chunk__24398_25145 = G__25157;
count__24399_25146 = G__25158;
i__24400_25147 = G__25159;
continue;
} else {
var protocol_25160 = cljs.core.first(seq__24397_25154__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25160)),"}");


var G__25161 = cljs.core.next(seq__24397_25154__$1);
var G__25162 = null;
var G__25163 = (0);
var G__25164 = (0);
seq__24397_25144 = G__25161;
chunk__24398_25145 = G__25162;
count__24399_25146 = G__25163;
i__24400_25147 = G__25164;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__24401_25165 = cljs.core.seq(fields__$1);
var chunk__24402_25166 = null;
var count__24403_25167 = (0);
var i__24404_25168 = (0);
while(true){
if((i__24404_25168 < count__24403_25167)){
var fld_25169 = chunk__24402_25166.cljs$core$IIndexed$_nth$arity$2(null,i__24404_25168);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25169," = ",fld_25169,";");


var G__25170 = seq__24401_25165;
var G__25171 = chunk__24402_25166;
var G__25172 = count__24403_25167;
var G__25173 = (i__24404_25168 + (1));
seq__24401_25165 = G__25170;
chunk__24402_25166 = G__25171;
count__24403_25167 = G__25172;
i__24404_25168 = G__25173;
continue;
} else {
var temp__5753__auto___25174 = cljs.core.seq(seq__24401_25165);
if(temp__5753__auto___25174){
var seq__24401_25175__$1 = temp__5753__auto___25174;
if(cljs.core.chunked_seq_QMARK_(seq__24401_25175__$1)){
var c__4679__auto___25176 = cljs.core.chunk_first(seq__24401_25175__$1);
var G__25177 = cljs.core.chunk_rest(seq__24401_25175__$1);
var G__25178 = c__4679__auto___25176;
var G__25179 = cljs.core.count(c__4679__auto___25176);
var G__25180 = (0);
seq__24401_25165 = G__25177;
chunk__24402_25166 = G__25178;
count__24403_25167 = G__25179;
i__24404_25168 = G__25180;
continue;
} else {
var fld_25181 = cljs.core.first(seq__24401_25175__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25181," = ",fld_25181,";");


var G__25182 = cljs.core.next(seq__24401_25175__$1);
var G__25183 = null;
var G__25184 = (0);
var G__25185 = (0);
seq__24401_25165 = G__25182;
chunk__24402_25166 = G__25183;
count__24403_25167 = G__25184;
i__24404_25168 = G__25185;
continue;
}
} else {
}
}
break;
}

var seq__24405_25186 = cljs.core.seq(pmasks);
var chunk__24406_25187 = null;
var count__24407_25188 = (0);
var i__24408_25189 = (0);
while(true){
if((i__24408_25189 < count__24407_25188)){
var vec__24415_25190 = chunk__24406_25187.cljs$core$IIndexed$_nth$arity$2(null,i__24408_25189);
var pno_25191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24415_25190,(0),null);
var pmask_25192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24415_25190,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_25191,"$ = ",pmask_25192,";");


var G__25193 = seq__24405_25186;
var G__25194 = chunk__24406_25187;
var G__25195 = count__24407_25188;
var G__25196 = (i__24408_25189 + (1));
seq__24405_25186 = G__25193;
chunk__24406_25187 = G__25194;
count__24407_25188 = G__25195;
i__24408_25189 = G__25196;
continue;
} else {
var temp__5753__auto___25197 = cljs.core.seq(seq__24405_25186);
if(temp__5753__auto___25197){
var seq__24405_25198__$1 = temp__5753__auto___25197;
if(cljs.core.chunked_seq_QMARK_(seq__24405_25198__$1)){
var c__4679__auto___25199 = cljs.core.chunk_first(seq__24405_25198__$1);
var G__25200 = cljs.core.chunk_rest(seq__24405_25198__$1);
var G__25201 = c__4679__auto___25199;
var G__25202 = cljs.core.count(c__4679__auto___25199);
var G__25203 = (0);
seq__24405_25186 = G__25200;
chunk__24406_25187 = G__25201;
count__24407_25188 = G__25202;
i__24408_25189 = G__25203;
continue;
} else {
var vec__24418_25204 = cljs.core.first(seq__24405_25198__$1);
var pno_25205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24418_25204,(0),null);
var pmask_25206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24418_25204,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_25205,"$ = ",pmask_25206,";");


var G__25207 = cljs.core.next(seq__24405_25198__$1);
var G__25208 = null;
var G__25209 = (0);
var G__25210 = (0);
seq__24405_25186 = G__25207;
chunk__24406_25187 = G__25208;
count__24407_25188 = G__25209;
i__24408_25189 = G__25210;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__24421){
var map__24422 = p__24421;
var map__24422__$1 = cljs.core.__destructure_map(map__24422);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24422__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24422__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24422__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24422__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24422__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13558__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__24423){
var map__24424 = p__24423;
var map__24424__$1 = cljs.core.__destructure_map(map__24424);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24424__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24424__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24424__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24424__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24424__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4251__auto__ = code;
if(cljs.core.truth_(and__4251__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4251__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__13558__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__24429 = cljs.core.seq(table);
var chunk__24430 = null;
var count__24431 = (0);
var i__24432 = (0);
while(true){
if((i__24432 < count__24431)){
var vec__24439 = chunk__24430.cljs$core$IIndexed$_nth$arity$2(null,i__24432);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24439,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24439,(1),null);
var ns_25211 = cljs.core.namespace(sym);
var name_25212 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__25213 = seq__24429;
var G__25214 = chunk__24430;
var G__25215 = count__24431;
var G__25216 = (i__24432 + (1));
seq__24429 = G__25213;
chunk__24430 = G__25214;
count__24431 = G__25215;
i__24432 = G__25216;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__24429);
if(temp__5753__auto__){
var seq__24429__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24429__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__24429__$1);
var G__25217 = cljs.core.chunk_rest(seq__24429__$1);
var G__25218 = c__4679__auto__;
var G__25219 = cljs.core.count(c__4679__auto__);
var G__25220 = (0);
seq__24429 = G__25217;
chunk__24430 = G__25218;
count__24431 = G__25219;
i__24432 = G__25220;
continue;
} else {
var vec__24442 = cljs.core.first(seq__24429__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24442,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24442,(1),null);
var ns_25221 = cljs.core.namespace(sym);
var name_25222 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__25223 = cljs.core.next(seq__24429__$1);
var G__25224 = null;
var G__25225 = (0);
var G__25226 = (0);
seq__24429 = G__25223;
chunk__24430 = G__25224;
count__24431 = G__25225;
i__24432 = G__25226;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__24446 = arguments.length;
switch (G__24446) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs():null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_25228 = cljs.core.first(ks);
var vec__24447_25229 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_25228);
var top_25230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24447_25229,(0),null);
var prefix_SINGLEQUOTE__25231 = vec__24447_25229;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_25228)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__25231) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_25230)) || (cljs.core.contains_QMARK_(known_externs,top_25230)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__25231)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_25230);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__25231)),";");
}
} else {
}

var m_25232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_25228);
if(cljs.core.empty_QMARK_(m_25232)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__25231,m_25232,top_level,known_externs);
}

var G__25233 = cljs.core.next(ks);
ks = G__25233;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);

