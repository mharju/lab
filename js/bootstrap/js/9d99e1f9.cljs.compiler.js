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
var G__24483 = (d__$2 + (1));
var G__24484 = shadow__$2;
d__$1 = G__24483;
G__23603__$1 = G__24484;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__23608){
var map__23609 = p__23608;
var map__23609__$1 = cljs.core.__destructure_map(map__23609);
var name_var = map__23609__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23609__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23609__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__23610 = info;
var map__23610__$1 = cljs.core.__destructure_map(map__23610);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23610__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23610__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__23662 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__23662) : cljs.compiler.munge.call(null,G__23662));
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
var G__23664 = arguments.length;
switch (G__23664) {
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
var ms = (function (){var fexpr__23665 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11648,11648,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__23665.cljs$core$IFn$_invoke$arity$1 ? fexpr__23665.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__23665.call(null,ss__$3));
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
var G__23666 = cp;
switch (G__23666) {
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
var seq__23667_24490 = cljs.core.seq(s);
var chunk__23668_24491 = null;
var count__23669_24492 = (0);
var i__23670_24493 = (0);
while(true){
if((i__23670_24493 < count__23669_24492)){
var c_24494 = chunk__23668_24491.cljs$core$IIndexed$_nth$arity$2(null,i__23670_24493);
sb.append(cljs.compiler.escape_char(c_24494));


var G__24495 = seq__23667_24490;
var G__24496 = chunk__23668_24491;
var G__24497 = count__23669_24492;
var G__24498 = (i__23670_24493 + (1));
seq__23667_24490 = G__24495;
chunk__23668_24491 = G__24496;
count__23669_24492 = G__24497;
i__23670_24493 = G__24498;
continue;
} else {
var temp__5753__auto___24499 = cljs.core.seq(seq__23667_24490);
if(temp__5753__auto___24499){
var seq__23667_24500__$1 = temp__5753__auto___24499;
if(cljs.core.chunked_seq_QMARK_(seq__23667_24500__$1)){
var c__4679__auto___24501 = cljs.core.chunk_first(seq__23667_24500__$1);
var G__24503 = cljs.core.chunk_rest(seq__23667_24500__$1);
var G__24504 = c__4679__auto___24501;
var G__24505 = cljs.core.count(c__4679__auto___24501);
var G__24506 = (0);
seq__23667_24490 = G__24503;
chunk__23668_24491 = G__24504;
count__23669_24492 = G__24505;
i__23670_24493 = G__24506;
continue;
} else {
var c_24507 = cljs.core.first(seq__23667_24500__$1);
sb.append(cljs.compiler.escape_char(c_24507));


var G__24508 = cljs.core.next(seq__23667_24500__$1);
var G__24509 = null;
var G__24510 = (0);
var G__24511 = (0);
seq__23667_24490 = G__24508;
chunk__23668_24491 = G__24509;
count__23669_24492 = G__24510;
i__23670_24493 = G__24511;
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__23672 = cljs.core.get_global_hierarchy;
return (fexpr__23672.cljs$core$IFn$_invoke$arity$0 ? fexpr__23672.cljs$core$IFn$_invoke$arity$0() : fexpr__23672.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__23675_24513 = ast;
var map__23675_24514__$1 = cljs.core.__destructure_map(map__23675_24513);
var env_24515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23675_24514__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_24515))){
var map__23677_24516 = env_24515;
var map__23677_24517__$1 = cljs.core.__destructure_map(map__23677_24516);
var line_24518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23677_24517__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23677_24517__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__23678 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__23680 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__23679 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__23679.cljs$core$IFn$_invoke$arity$1 ? fexpr__23679.cljs$core$IFn$_invoke$arity$1(G__23680) : fexpr__23679.call(null,G__23680));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23678,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__23678;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_24518 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_24519)?(column_24519 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__23689 = arguments.length;
switch (G__23689) {
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
var len__4864__auto___24529 = arguments.length;
var i__4865__auto___24530 = (0);
while(true){
if((i__4865__auto___24530 < len__4864__auto___24529)){
args_arr__4885__auto__.push((arguments[i__4865__auto___24530]));

var G__24531 = (i__4865__auto___24530 + (1));
i__4865__auto___24530 = G__24531;
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
var s_24532 = (function (){var G__23690 = a;
if((!(typeof a === 'string'))){
return G__23690.toString();
} else {
return G__23690;
}
})();
var temp__5757__auto___24533 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5757__auto___24533 == null)){
} else {
var sm_data_24534 = temp__5757__auto___24533;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_24534,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__23681_SHARP_){
return (p1__23681_SHARP_ + s_24532.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_24532], 0));

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

var seq__23691 = cljs.core.seq(xs);
var chunk__23692 = null;
var count__23693 = (0);
var i__23694 = (0);
while(true){
if((i__23694 < count__23693)){
var x = chunk__23692.cljs$core$IIndexed$_nth$arity$2(null,i__23694);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__24539 = seq__23691;
var G__24540 = chunk__23692;
var G__24541 = count__23693;
var G__24542 = (i__23694 + (1));
seq__23691 = G__24539;
chunk__23692 = G__24540;
count__23693 = G__24541;
i__23694 = G__24542;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__23691);
if(temp__5753__auto__){
var seq__23691__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23691__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__23691__$1);
var G__24543 = cljs.core.chunk_rest(seq__23691__$1);
var G__24544 = c__4679__auto__;
var G__24545 = cljs.core.count(c__4679__auto__);
var G__24546 = (0);
seq__23691 = G__24543;
chunk__23692 = G__24544;
count__23693 = G__24545;
i__23694 = G__24546;
continue;
} else {
var x = cljs.core.first(seq__23691__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__24547 = cljs.core.next(seq__23691__$1);
var G__24548 = null;
var G__24549 = (0);
var G__24550 = (0);
seq__23691 = G__24547;
chunk__23692 = G__24548;
count__23693 = G__24549;
i__23694 = G__24550;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq23683){
var G__23684 = cljs.core.first(seq23683);
var seq23683__$1 = cljs.core.next(seq23683);
var G__23685 = cljs.core.first(seq23683__$1);
var seq23683__$2 = cljs.core.next(seq23683__$1);
var G__23686 = cljs.core.first(seq23683__$2);
var seq23683__$3 = cljs.core.next(seq23683__$2);
var G__23687 = cljs.core.first(seq23683__$3);
var seq23683__$4 = cljs.core.next(seq23683__$3);
var G__23688 = cljs.core.first(seq23683__$4);
var seq23683__$5 = cljs.core.next(seq23683__$4);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23684,G__23685,G__23686,G__23687,G__23688,seq23683__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__23695){
var map__23696 = p__23695;
var map__23696__$1 = cljs.core.__destructure_map(map__23696);
var m = map__23696__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23696__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__23705 = arguments.length;
switch (G__23705) {
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
var len__4864__auto___24567 = arguments.length;
var i__4865__auto___24568 = (0);
while(true){
if((i__4865__auto___24568 < len__4864__auto___24567)){
args_arr__4885__auto__.push((arguments[i__4865__auto___24568]));

var G__24569 = (i__4865__auto___24568 + (1));
i__4865__auto___24568 = G__24569;
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

var seq__23708_24570 = cljs.core.seq(xs);
var chunk__23709_24571 = null;
var count__23710_24572 = (0);
var i__23711_24573 = (0);
while(true){
if((i__23711_24573 < count__23710_24572)){
var x_24574 = chunk__23709_24571.cljs$core$IIndexed$_nth$arity$2(null,i__23711_24573);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_24574);


var G__24575 = seq__23708_24570;
var G__24576 = chunk__23709_24571;
var G__24577 = count__23710_24572;
var G__24578 = (i__23711_24573 + (1));
seq__23708_24570 = G__24575;
chunk__23709_24571 = G__24576;
count__23710_24572 = G__24577;
i__23711_24573 = G__24578;
continue;
} else {
var temp__5753__auto___24579 = cljs.core.seq(seq__23708_24570);
if(temp__5753__auto___24579){
var seq__23708_24580__$1 = temp__5753__auto___24579;
if(cljs.core.chunked_seq_QMARK_(seq__23708_24580__$1)){
var c__4679__auto___24581 = cljs.core.chunk_first(seq__23708_24580__$1);
var G__24582 = cljs.core.chunk_rest(seq__23708_24580__$1);
var G__24583 = c__4679__auto___24581;
var G__24584 = cljs.core.count(c__4679__auto___24581);
var G__24585 = (0);
seq__23708_24570 = G__24582;
chunk__23709_24571 = G__24583;
count__23710_24572 = G__24584;
i__23711_24573 = G__24585;
continue;
} else {
var x_24587 = cljs.core.first(seq__23708_24580__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_24587);


var G__24588 = cljs.core.next(seq__23708_24580__$1);
var G__24589 = null;
var G__24590 = (0);
var G__24591 = (0);
seq__23708_24570 = G__24588;
chunk__23709_24571 = G__24589;
count__23710_24572 = G__24590;
i__23711_24573 = G__24591;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq23699){
var G__23700 = cljs.core.first(seq23699);
var seq23699__$1 = cljs.core.next(seq23699);
var G__23701 = cljs.core.first(seq23699__$1);
var seq23699__$2 = cljs.core.next(seq23699__$1);
var G__23702 = cljs.core.first(seq23699__$2);
var seq23699__$3 = cljs.core.next(seq23699__$2);
var G__23703 = cljs.core.first(seq23699__$3);
var seq23699__$4 = cljs.core.next(seq23699__$3);
var G__23704 = cljs.core.first(seq23699__$4);
var seq23699__$5 = cljs.core.next(seq23699__$4);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23700,G__23701,G__23702,G__23703,G__23704,seq23699__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23726_24593 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23727_24594 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23728_24595 = true;
var _STAR_print_fn_STAR__temp_val__23729_24596 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23728_24595);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23729_24596);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23727_24594);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23726_24593);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
});
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__23730 = cljs.core.get_global_hierarchy;
return (fexpr__23730.cljs$core$IFn$_invoke$arity$0 ? fexpr__23730.cljs$core$IFn$_invoke$arity$0() : fexpr__23730.call(null));
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
var vec__23731 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23731,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23731,(1),null);
var G__23734 = ns;
var G__23735 = name;
var G__23736 = (function (){
var G__23737 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__23737) : cljs.compiler.emit_constant.call(null,G__23737));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__23734,G__23735,G__23736) : cljs.compiler.emit_record_value.call(null,G__23734,G__23735,G__23736));
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_(x)){
var G__23738 = cljs.core.keys(x);
var G__23739 = cljs.core.vals(x);
var G__23740 = cljs.compiler.emit_constants_comma_sep;
var G__23741 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__23738,G__23739,G__23740,G__23741) : cljs.compiler.emit_map.call(null,G__23738,G__23739,G__23740,G__23741));
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
var G__23742 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__23743 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__23742,G__23743) : cljs.compiler.emit_with_meta.call(null,G__23742,G__23743));
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
var vec__23747 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23747,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23747,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23747,(2),null);
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
var G__23750 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__23750) : x.call(null,G__23750));
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
var G__23751 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__23751) : x.call(null,G__23751));
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
var G__23753 = items;
var G__23754 = (function (p1__23752_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__23752_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__23753,G__23754) : cljs.compiler.emit_js_object.call(null,G__23753,G__23754));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__23756){
var map__23758 = p__23756;
var map__23758__$1 = cljs.core.__destructure_map(map__23758);
var ast = map__23758__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23758__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23758__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23758__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5751__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5751__auto__)){
var const_expr = temp__5751__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__23762 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__23762__$1 = cljs.core.__destructure_map(map__23762);
var cenv = map__23762__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23762__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__23763 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var G__23765 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__23765) : cljs.compiler.es5_GT__EQ_.call(null,G__23765));
})();
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4251__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__23763,cljs.analyzer.es5_allowed);
} else {
return G__23763;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4253__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__23766 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__23766,reserved);
} else {
return G__23766;
}
})();
var env__13558__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__23767_24628 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__23767_24629__$1 = (((G__23767_24628 instanceof cljs.core.Keyword))?G__23767_24628.fqn:null);
switch (G__23767_24629__$1) {
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__23773){
var map__23774 = p__23773;
var map__23774__$1 = cljs.core.__destructure_map(map__23774);
var arg = map__23774__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23774__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23774__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23774__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23774__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));


var map__23775 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__23775__$1 = cljs.core.__destructure_map(map__23775);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23775__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__23785){
var map__23786 = p__23785;
var map__23786__$1 = cljs.core.__destructure_map(map__23786);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23786__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23786__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__23787_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__23787_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__23789 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__23789) : comma_sep.call(null,G__23789));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__23790){
var map__23791 = p__23790;
var map__23791__$1 = cljs.core.__destructure_map(map__23791);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23791__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23791__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var temp__5753__auto___24673 = cljs.core.seq(items);
if(temp__5753__auto___24673){
var items_24674__$1 = temp__5753__auto___24673;
var vec__23793_24675 = items_24674__$1;
var seq__23794_24676 = cljs.core.seq(vec__23793_24675);
var first__23795_24677 = cljs.core.first(seq__23794_24676);
var seq__23794_24678__$1 = cljs.core.next(seq__23794_24676);
var vec__23796_24679 = first__23795_24677;
var k_24680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23796_24679,(0),null);
var v_24681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23796_24679,(1),null);
var r_24682 = seq__23794_24678__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_24680),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_24681) : emit_js_object_val.call(null,v_24681)));

var seq__23799_24683 = cljs.core.seq(r_24682);
var chunk__23800_24684 = null;
var count__23801_24685 = (0);
var i__23802_24686 = (0);
while(true){
if((i__23802_24686 < count__23801_24685)){
var vec__23809_24687 = chunk__23800_24684.cljs$core$IIndexed$_nth$arity$2(null,i__23802_24686);
var k_24688__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23809_24687,(0),null);
var v_24689__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23809_24687,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_24688__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_24689__$1) : emit_js_object_val.call(null,v_24689__$1)));


var G__24690 = seq__23799_24683;
var G__24692 = chunk__23800_24684;
var G__24693 = count__23801_24685;
var G__24696 = (i__23802_24686 + (1));
seq__23799_24683 = G__24690;
chunk__23800_24684 = G__24692;
count__23801_24685 = G__24693;
i__23802_24686 = G__24696;
continue;
} else {
var temp__5753__auto___24697__$1 = cljs.core.seq(seq__23799_24683);
if(temp__5753__auto___24697__$1){
var seq__23799_24698__$1 = temp__5753__auto___24697__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23799_24698__$1)){
var c__4679__auto___24699 = cljs.core.chunk_first(seq__23799_24698__$1);
var G__24700 = cljs.core.chunk_rest(seq__23799_24698__$1);
var G__24701 = c__4679__auto___24699;
var G__24702 = cljs.core.count(c__4679__auto___24699);
var G__24703 = (0);
seq__23799_24683 = G__24700;
chunk__23800_24684 = G__24701;
count__23801_24685 = G__24702;
i__23802_24686 = G__24703;
continue;
} else {
var vec__23815_24704 = cljs.core.first(seq__23799_24698__$1);
var k_24705__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23815_24704,(0),null);
var v_24706__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23815_24704,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_24705__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_24706__$1) : emit_js_object_val.call(null,v_24706__$1)));


var G__24707 = cljs.core.next(seq__23799_24698__$1);
var G__24708 = null;
var G__24709 = (0);
var G__24710 = (0);
seq__23799_24683 = G__24707;
chunk__23800_24684 = G__24708;
count__23801_24685 = G__24709;
i__23802_24686 = G__24710;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__23818){
var map__23819 = p__23818;
var map__23819__$1 = cljs.core.__destructure_map(map__23819);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23819__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23819__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23819__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__23824){
var map__23825 = p__23824;
var map__23825__$1 = cljs.core.__destructure_map(map__23825);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23825__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23825__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__23839 = cljs.analyzer.unwrap_quote(expr);
var map__23839__$1 = cljs.core.__destructure_map(map__23839);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23839__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23839__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23839__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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

var seq__23856_24722 = cljs.core.seq(nodes);
var chunk__23857_24723 = null;
var count__23858_24724 = (0);
var i__23859_24725 = (0);
while(true){
if((i__23859_24725 < count__23858_24724)){
var map__23873_24726 = chunk__23857_24723.cljs$core$IIndexed$_nth$arity$2(null,i__23859_24725);
var map__23873_24727__$1 = cljs.core.__destructure_map(map__23873_24726);
var ts_24728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23873_24727__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__23874_24729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23873_24727__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__23874_24730__$1 = cljs.core.__destructure_map(map__23874_24729);
var then_24731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23874_24730__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__23875_24732 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_24728));
var chunk__23876_24733 = null;
var count__23877_24734 = (0);
var i__23878_24735 = (0);
while(true){
if((i__23878_24735 < count__23877_24734)){
var test_24736 = chunk__23876_24733.cljs$core$IIndexed$_nth$arity$2(null,i__23878_24735);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_24736,":");


var G__24738 = seq__23875_24732;
var G__24739 = chunk__23876_24733;
var G__24740 = count__23877_24734;
var G__24741 = (i__23878_24735 + (1));
seq__23875_24732 = G__24738;
chunk__23876_24733 = G__24739;
count__23877_24734 = G__24740;
i__23878_24735 = G__24741;
continue;
} else {
var temp__5753__auto___24743 = cljs.core.seq(seq__23875_24732);
if(temp__5753__auto___24743){
var seq__23875_24744__$1 = temp__5753__auto___24743;
if(cljs.core.chunked_seq_QMARK_(seq__23875_24744__$1)){
var c__4679__auto___24745 = cljs.core.chunk_first(seq__23875_24744__$1);
var G__24746 = cljs.core.chunk_rest(seq__23875_24744__$1);
var G__24747 = c__4679__auto___24745;
var G__24748 = cljs.core.count(c__4679__auto___24745);
var G__24749 = (0);
seq__23875_24732 = G__24746;
chunk__23876_24733 = G__24747;
count__23877_24734 = G__24748;
i__23878_24735 = G__24749;
continue;
} else {
var test_24750 = cljs.core.first(seq__23875_24744__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_24750,":");


var G__24751 = cljs.core.next(seq__23875_24744__$1);
var G__24752 = null;
var G__24753 = (0);
var G__24754 = (0);
seq__23875_24732 = G__24751;
chunk__23876_24733 = G__24752;
count__23877_24734 = G__24753;
i__23878_24735 = G__24754;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_24731);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_24731);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__24755 = seq__23856_24722;
var G__24756 = chunk__23857_24723;
var G__24757 = count__23858_24724;
var G__24758 = (i__23859_24725 + (1));
seq__23856_24722 = G__24755;
chunk__23857_24723 = G__24756;
count__23858_24724 = G__24757;
i__23859_24725 = G__24758;
continue;
} else {
var temp__5753__auto___24759 = cljs.core.seq(seq__23856_24722);
if(temp__5753__auto___24759){
var seq__23856_24760__$1 = temp__5753__auto___24759;
if(cljs.core.chunked_seq_QMARK_(seq__23856_24760__$1)){
var c__4679__auto___24761 = cljs.core.chunk_first(seq__23856_24760__$1);
var G__24763 = cljs.core.chunk_rest(seq__23856_24760__$1);
var G__24764 = c__4679__auto___24761;
var G__24765 = cljs.core.count(c__4679__auto___24761);
var G__24766 = (0);
seq__23856_24722 = G__24763;
chunk__23857_24723 = G__24764;
count__23858_24724 = G__24765;
i__23859_24725 = G__24766;
continue;
} else {
var map__23883_24767 = cljs.core.first(seq__23856_24760__$1);
var map__23883_24768__$1 = cljs.core.__destructure_map(map__23883_24767);
var ts_24769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23883_24768__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__23884_24770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23883_24768__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__23884_24771__$1 = cljs.core.__destructure_map(map__23884_24770);
var then_24772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23884_24771__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__23885_24773 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_24769));
var chunk__23886_24774 = null;
var count__23887_24775 = (0);
var i__23888_24776 = (0);
while(true){
if((i__23888_24776 < count__23887_24775)){
var test_24777 = chunk__23886_24774.cljs$core$IIndexed$_nth$arity$2(null,i__23888_24776);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_24777,":");


var G__24778 = seq__23885_24773;
var G__24779 = chunk__23886_24774;
var G__24780 = count__23887_24775;
var G__24781 = (i__23888_24776 + (1));
seq__23885_24773 = G__24778;
chunk__23886_24774 = G__24779;
count__23887_24775 = G__24780;
i__23888_24776 = G__24781;
continue;
} else {
var temp__5753__auto___24782__$1 = cljs.core.seq(seq__23885_24773);
if(temp__5753__auto___24782__$1){
var seq__23885_24783__$1 = temp__5753__auto___24782__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23885_24783__$1)){
var c__4679__auto___24784 = cljs.core.chunk_first(seq__23885_24783__$1);
var G__24785 = cljs.core.chunk_rest(seq__23885_24783__$1);
var G__24786 = c__4679__auto___24784;
var G__24787 = cljs.core.count(c__4679__auto___24784);
var G__24788 = (0);
seq__23885_24773 = G__24785;
chunk__23886_24774 = G__24786;
count__23887_24775 = G__24787;
i__23888_24776 = G__24788;
continue;
} else {
var test_24790 = cljs.core.first(seq__23885_24783__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_24790,":");


var G__24791 = cljs.core.next(seq__23885_24783__$1);
var G__24792 = null;
var G__24793 = (0);
var G__24794 = (0);
seq__23885_24773 = G__24791;
chunk__23886_24774 = G__24792;
count__23887_24775 = G__24793;
i__23888_24776 = G__24794;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_24772);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_24772);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__24795 = cljs.core.next(seq__23856_24760__$1);
var G__24796 = null;
var G__24797 = (0);
var G__24798 = (0);
seq__23856_24722 = G__24795;
chunk__23857_24723 = G__24796;
count__23858_24724 = G__24797;
i__23859_24725 = G__24798;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__23889){
var map__23890 = p__23889;
var map__23890__$1 = cljs.core.__destructure_map(map__23890);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23890__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23890__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__23891_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__23891_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__23891_SHARP_));
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


var G__24818 = seq__23926;
var G__24819 = chunk__23927;
var G__24820 = count__23928;
var G__24821 = (i__23929 + (1));
seq__23926 = G__24818;
chunk__23927 = G__24819;
count__23928 = G__24820;
i__23929 = G__24821;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__23926);
if(temp__5753__auto__){
var seq__23926__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23926__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__23926__$1);
var G__24822 = cljs.core.chunk_rest(seq__23926__$1);
var G__24823 = c__4679__auto__;
var G__24824 = cljs.core.count(c__4679__auto__);
var G__24825 = (0);
seq__23926 = G__24822;
chunk__23927 = G__24823;
count__23928 = G__24824;
i__23929 = G__24825;
continue;
} else {
var next_line = cljs.core.first(seq__23926__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__24828 = cljs.core.next(seq__23926__$1);
var G__24829 = null;
var G__24830 = (0);
var G__24831 = (0);
seq__23926 = G__24828;
chunk__23927 = G__24829;
count__23928 = G__24830;
i__23929 = G__24831;
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

var seq__23930_24832 = cljs.core.seq(docs__$2);
var chunk__23931_24833 = null;
var count__23932_24834 = (0);
var i__23933_24835 = (0);
while(true){
if((i__23933_24835 < count__23932_24834)){
var e_24836 = chunk__23931_24833.cljs$core$IIndexed$_nth$arity$2(null,i__23933_24835);
if(cljs.core.truth_(e_24836)){
print_comment_lines(e_24836);
} else {
}


var G__24837 = seq__23930_24832;
var G__24838 = chunk__23931_24833;
var G__24839 = count__23932_24834;
var G__24840 = (i__23933_24835 + (1));
seq__23930_24832 = G__24837;
chunk__23931_24833 = G__24838;
count__23932_24834 = G__24839;
i__23933_24835 = G__24840;
continue;
} else {
var temp__5753__auto___24841 = cljs.core.seq(seq__23930_24832);
if(temp__5753__auto___24841){
var seq__23930_24842__$1 = temp__5753__auto___24841;
if(cljs.core.chunked_seq_QMARK_(seq__23930_24842__$1)){
var c__4679__auto___24843 = cljs.core.chunk_first(seq__23930_24842__$1);
var G__24844 = cljs.core.chunk_rest(seq__23930_24842__$1);
var G__24845 = c__4679__auto___24843;
var G__24846 = cljs.core.count(c__4679__auto___24843);
var G__24847 = (0);
seq__23930_24832 = G__24844;
chunk__23931_24833 = G__24845;
count__23932_24834 = G__24846;
i__23933_24835 = G__24847;
continue;
} else {
var e_24849 = cljs.core.first(seq__23930_24842__$1);
if(cljs.core.truth_(e_24849)){
print_comment_lines(e_24849);
} else {
}


var G__24850 = cljs.core.next(seq__23930_24842__$1);
var G__24851 = null;
var G__24852 = (0);
var G__24853 = (0);
seq__23930_24832 = G__24850;
chunk__23931_24833 = G__24851;
count__23932_24834 = G__24852;
i__23933_24835 = G__24853;
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
var and__4251__auto__ = cljs.core.some((function (p1__23935_SHARP_){
return goog.string.startsWith(p1__23935_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__23936){
var map__23937 = p__23936;
var map__23937__$1 = cljs.core.__destructure_map(map__23937);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23937__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23937__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23937__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23937__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23937__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23937__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23937__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23937__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23937__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23937__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__23938){
var map__23939 = p__23938;
var map__23939__$1 = cljs.core.__destructure_map(map__23939);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23939__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23939__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23939__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__23940_24864 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__23941_24865 = null;
var count__23942_24937 = (0);
var i__23943_24938 = (0);
while(true){
if((i__23943_24938 < count__23942_24937)){
var vec__23958_24939 = chunk__23941_24865.cljs$core$IIndexed$_nth$arity$2(null,i__23943_24938);
var i_24940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23958_24939,(0),null);
var param_24941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23958_24939,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_24941);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__24942 = seq__23940_24864;
var G__24943 = chunk__23941_24865;
var G__24944 = count__23942_24937;
var G__24945 = (i__23943_24938 + (1));
seq__23940_24864 = G__24942;
chunk__23941_24865 = G__24943;
count__23942_24937 = G__24944;
i__23943_24938 = G__24945;
continue;
} else {
var temp__5753__auto___24946 = cljs.core.seq(seq__23940_24864);
if(temp__5753__auto___24946){
var seq__23940_24947__$1 = temp__5753__auto___24946;
if(cljs.core.chunked_seq_QMARK_(seq__23940_24947__$1)){
var c__4679__auto___24948 = cljs.core.chunk_first(seq__23940_24947__$1);
var G__24949 = cljs.core.chunk_rest(seq__23940_24947__$1);
var G__24950 = c__4679__auto___24948;
var G__24951 = cljs.core.count(c__4679__auto___24948);
var G__24952 = (0);
seq__23940_24864 = G__24949;
chunk__23941_24865 = G__24950;
count__23942_24937 = G__24951;
i__23943_24938 = G__24952;
continue;
} else {
var vec__23961_24953 = cljs.core.first(seq__23940_24947__$1);
var i_24954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23961_24953,(0),null);
var param_24955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23961_24953,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_24955);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__24956 = cljs.core.next(seq__23940_24947__$1);
var G__24957 = null;
var G__24958 = (0);
var G__24959 = (0);
seq__23940_24864 = G__24956;
chunk__23941_24865 = G__24957;
count__23942_24937 = G__24958;
i__23943_24938 = G__24959;
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

var seq__23964_24960 = cljs.core.seq(params);
var chunk__23965_24961 = null;
var count__23966_24962 = (0);
var i__23967_24963 = (0);
while(true){
if((i__23967_24963 < count__23966_24962)){
var param_24964 = chunk__23965_24961.cljs$core$IIndexed$_nth$arity$2(null,i__23967_24963);
cljs.compiler.emit(param_24964);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_24964,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__24967 = seq__23964_24960;
var G__24968 = chunk__23965_24961;
var G__24969 = count__23966_24962;
var G__24970 = (i__23967_24963 + (1));
seq__23964_24960 = G__24967;
chunk__23965_24961 = G__24968;
count__23966_24962 = G__24969;
i__23967_24963 = G__24970;
continue;
} else {
var temp__5753__auto___24971 = cljs.core.seq(seq__23964_24960);
if(temp__5753__auto___24971){
var seq__23964_24973__$1 = temp__5753__auto___24971;
if(cljs.core.chunked_seq_QMARK_(seq__23964_24973__$1)){
var c__4679__auto___24974 = cljs.core.chunk_first(seq__23964_24973__$1);
var G__24975 = cljs.core.chunk_rest(seq__23964_24973__$1);
var G__24976 = c__4679__auto___24974;
var G__24977 = cljs.core.count(c__4679__auto___24974);
var G__24978 = (0);
seq__23964_24960 = G__24975;
chunk__23965_24961 = G__24976;
count__23966_24962 = G__24977;
i__23967_24963 = G__24978;
continue;
} else {
var param_24979 = cljs.core.first(seq__23964_24973__$1);
cljs.compiler.emit(param_24979);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_24979,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__24980 = cljs.core.next(seq__23964_24973__$1);
var G__24981 = null;
var G__24982 = (0);
var G__24983 = (0);
seq__23964_24960 = G__24980;
chunk__23965_24961 = G__24981;
count__23966_24962 = G__24982;
i__23967_24963 = G__24983;
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

var seq__23968_24984 = cljs.core.seq(params);
var chunk__23969_24985 = null;
var count__23970_24986 = (0);
var i__23971_24987 = (0);
while(true){
if((i__23971_24987 < count__23970_24986)){
var param_25012 = chunk__23969_24985.cljs$core$IIndexed$_nth$arity$2(null,i__23971_24987);
cljs.compiler.emit(param_25012);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25012,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25013 = seq__23968_24984;
var G__25014 = chunk__23969_24985;
var G__25015 = count__23970_24986;
var G__25016 = (i__23971_24987 + (1));
seq__23968_24984 = G__25013;
chunk__23969_24985 = G__25014;
count__23970_24986 = G__25015;
i__23971_24987 = G__25016;
continue;
} else {
var temp__5753__auto___25017 = cljs.core.seq(seq__23968_24984);
if(temp__5753__auto___25017){
var seq__23968_25018__$1 = temp__5753__auto___25017;
if(cljs.core.chunked_seq_QMARK_(seq__23968_25018__$1)){
var c__4679__auto___25019 = cljs.core.chunk_first(seq__23968_25018__$1);
var G__25020 = cljs.core.chunk_rest(seq__23968_25018__$1);
var G__25021 = c__4679__auto___25019;
var G__25022 = cljs.core.count(c__4679__auto___25019);
var G__25023 = (0);
seq__23968_24984 = G__25020;
chunk__23969_24985 = G__25021;
count__23970_24986 = G__25022;
i__23971_24987 = G__25023;
continue;
} else {
var param_25024 = cljs.core.first(seq__23968_25018__$1);
cljs.compiler.emit(param_25024);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25024,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25025 = cljs.core.next(seq__23968_25018__$1);
var G__25026 = null;
var G__25027 = (0);
var G__25028 = (0);
seq__23968_24984 = G__25025;
chunk__23969_24985 = G__25026;
count__23970_24986 = G__25027;
i__23971_24987 = G__25028;
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
var seq__23972 = cljs.core.seq(params);
var chunk__23973 = null;
var count__23974 = (0);
var i__23975 = (0);
while(true){
if((i__23975 < count__23974)){
var param = chunk__23973.cljs$core$IIndexed$_nth$arity$2(null,i__23975);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25029 = seq__23972;
var G__25030 = chunk__23973;
var G__25031 = count__23974;
var G__25032 = (i__23975 + (1));
seq__23972 = G__25029;
chunk__23973 = G__25030;
count__23974 = G__25031;
i__23975 = G__25032;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__23972);
if(temp__5753__auto__){
var seq__23972__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23972__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__23972__$1);
var G__25033 = cljs.core.chunk_rest(seq__23972__$1);
var G__25034 = c__4679__auto__;
var G__25035 = cljs.core.count(c__4679__auto__);
var G__25036 = (0);
seq__23972 = G__25033;
chunk__23973 = G__25034;
count__23974 = G__25035;
i__23975 = G__25036;
continue;
} else {
var param = cljs.core.first(seq__23972__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25038 = cljs.core.next(seq__23972__$1);
var G__25039 = null;
var G__25040 = (0);
var G__25041 = (0);
seq__23972 = G__25038;
chunk__23973 = G__25039;
count__23974 = G__25040;
i__23975 = G__25041;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__23976){
var map__23977 = p__23976;
var map__23977__$1 = cljs.core.__destructure_map(map__23977);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23977__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23977__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23977__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23977__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23977__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23977__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__23978){
var map__23979 = p__23978;
var map__23979__$1 = cljs.core.__destructure_map(map__23979);
var f = map__23979__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23979__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23979__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23979__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23979__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23979__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23979__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23979__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23979__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__13558__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_25046__$1 = (function (){var or__4253__auto__ = name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_25047 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_25046__$1);
var delegate_name_25048 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_25047),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_25048," = function (");

var seq__23981_25049 = cljs.core.seq(params);
var chunk__23982_25050 = null;
var count__23983_25051 = (0);
var i__23984_25052 = (0);
while(true){
if((i__23984_25052 < count__23983_25051)){
var param_25053 = chunk__23982_25050.cljs$core$IIndexed$_nth$arity$2(null,i__23984_25052);
cljs.compiler.emit(param_25053);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25053,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25054 = seq__23981_25049;
var G__25055 = chunk__23982_25050;
var G__25056 = count__23983_25051;
var G__25057 = (i__23984_25052 + (1));
seq__23981_25049 = G__25054;
chunk__23982_25050 = G__25055;
count__23983_25051 = G__25056;
i__23984_25052 = G__25057;
continue;
} else {
var temp__5753__auto___25058 = cljs.core.seq(seq__23981_25049);
if(temp__5753__auto___25058){
var seq__23981_25059__$1 = temp__5753__auto___25058;
if(cljs.core.chunked_seq_QMARK_(seq__23981_25059__$1)){
var c__4679__auto___25060 = cljs.core.chunk_first(seq__23981_25059__$1);
var G__25061 = cljs.core.chunk_rest(seq__23981_25059__$1);
var G__25062 = c__4679__auto___25060;
var G__25063 = cljs.core.count(c__4679__auto___25060);
var G__25064 = (0);
seq__23981_25049 = G__25061;
chunk__23982_25050 = G__25062;
count__23983_25051 = G__25063;
i__23984_25052 = G__25064;
continue;
} else {
var param_25065 = cljs.core.first(seq__23981_25059__$1);
cljs.compiler.emit(param_25065);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25065,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25067 = cljs.core.next(seq__23981_25059__$1);
var G__25068 = null;
var G__25069 = (0);
var G__25070 = (0);
seq__23981_25049 = G__25067;
chunk__23982_25050 = G__25068;
count__23983_25051 = G__25069;
i__23984_25052 = G__25070;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_25047," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_25072 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_25072,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_25048,".call(this,");

var seq__23986_25073 = cljs.core.seq(params);
var chunk__23987_25074 = null;
var count__23988_25075 = (0);
var i__23989_25076 = (0);
while(true){
if((i__23989_25076 < count__23988_25075)){
var param_25077 = chunk__23987_25074.cljs$core$IIndexed$_nth$arity$2(null,i__23989_25076);
cljs.compiler.emit(param_25077);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25077,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25078 = seq__23986_25073;
var G__25079 = chunk__23987_25074;
var G__25080 = count__23988_25075;
var G__25081 = (i__23989_25076 + (1));
seq__23986_25073 = G__25078;
chunk__23987_25074 = G__25079;
count__23988_25075 = G__25080;
i__23989_25076 = G__25081;
continue;
} else {
var temp__5753__auto___25082 = cljs.core.seq(seq__23986_25073);
if(temp__5753__auto___25082){
var seq__23986_25083__$1 = temp__5753__auto___25082;
if(cljs.core.chunked_seq_QMARK_(seq__23986_25083__$1)){
var c__4679__auto___25084 = cljs.core.chunk_first(seq__23986_25083__$1);
var G__25085 = cljs.core.chunk_rest(seq__23986_25083__$1);
var G__25086 = c__4679__auto___25084;
var G__25087 = cljs.core.count(c__4679__auto___25084);
var G__25088 = (0);
seq__23986_25073 = G__25085;
chunk__23987_25074 = G__25086;
count__23988_25075 = G__25087;
i__23989_25076 = G__25088;
continue;
} else {
var param_25089 = cljs.core.first(seq__23986_25083__$1);
cljs.compiler.emit(param_25089);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25089,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25090 = cljs.core.next(seq__23986_25083__$1);
var G__25091 = null;
var G__25092 = (0);
var G__25093 = (0);
seq__23986_25073 = G__25090;
chunk__23987_25074 = G__25091;
count__23988_25075 = G__25092;
i__23989_25076 = G__25093;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25047,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_25047,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_25046__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25047,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_25048,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_25047,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13558__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__23993){
var map__23994 = p__23993;
var map__23994__$1 = cljs.core.__destructure_map(map__23994);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23994__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23994__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23994__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23994__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23994__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23994__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23994__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23994__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__23990_SHARP_){
var and__4251__auto__ = p1__23990_SHARP_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__23990_SHARP_));
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
var name_25137__$1 = (function (){var or__4253__auto__ = name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_25138 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_25137__$1);
var maxparams_25139 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_25140 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_25138),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_25141 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__23991_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__23991_SHARP_)));
}),cljs.core.seq(mmap_25140));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_25138," = null;");

var seq__23995_25144 = cljs.core.seq(ms_25141);
var chunk__23996_25145 = null;
var count__23997_25146 = (0);
var i__23998_25147 = (0);
while(true){
if((i__23998_25147 < count__23997_25146)){
var vec__24009_25148 = chunk__23996_25145.cljs$core$IIndexed$_nth$arity$2(null,i__23998_25147);
var n_25149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24009_25148,(0),null);
var meth_25150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24009_25148,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_25149," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25150))){
cljs.compiler.emit_variadic_fn_method(meth_25150);
} else {
cljs.compiler.emit_fn_method(meth_25150);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__25151 = seq__23995_25144;
var G__25152 = chunk__23996_25145;
var G__25153 = count__23997_25146;
var G__25154 = (i__23998_25147 + (1));
seq__23995_25144 = G__25151;
chunk__23996_25145 = G__25152;
count__23997_25146 = G__25153;
i__23998_25147 = G__25154;
continue;
} else {
var temp__5753__auto___25155 = cljs.core.seq(seq__23995_25144);
if(temp__5753__auto___25155){
var seq__23995_25156__$1 = temp__5753__auto___25155;
if(cljs.core.chunked_seq_QMARK_(seq__23995_25156__$1)){
var c__4679__auto___25157 = cljs.core.chunk_first(seq__23995_25156__$1);
var G__25158 = cljs.core.chunk_rest(seq__23995_25156__$1);
var G__25159 = c__4679__auto___25157;
var G__25160 = cljs.core.count(c__4679__auto___25157);
var G__25161 = (0);
seq__23995_25144 = G__25158;
chunk__23996_25145 = G__25159;
count__23997_25146 = G__25160;
i__23998_25147 = G__25161;
continue;
} else {
var vec__24012_25162 = cljs.core.first(seq__23995_25156__$1);
var n_25163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24012_25162,(0),null);
var meth_25164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24012_25162,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_25163," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25164))){
cljs.compiler.emit_variadic_fn_method(meth_25164);
} else {
cljs.compiler.emit_fn_method(meth_25164);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__25165 = cljs.core.next(seq__23995_25156__$1);
var G__25166 = null;
var G__25167 = (0);
var G__25168 = (0);
seq__23995_25144 = G__25165;
chunk__23996_25145 = G__25166;
count__23997_25146 = G__25167;
i__23998_25147 = G__25168;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25138," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_25139),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_25139)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_25139));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__24015_25169 = cljs.core.seq(ms_25141);
var chunk__24016_25170 = null;
var count__24017_25171 = (0);
var i__24018_25172 = (0);
while(true){
if((i__24018_25172 < count__24017_25171)){
var vec__24025_25173 = chunk__24016_25170.cljs$core$IIndexed$_nth$arity$2(null,i__24018_25172);
var n_25174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24025_25173,(0),null);
var meth_25175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24025_25173,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25175))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_25176 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_25176," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_25177 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_25176," = new cljs.core.IndexedSeq(",a_25177,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_25174,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_25139)),(((cljs.core.count(maxparams_25139) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_25176,");"], 0));
} else {
var pcnt_25178 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25175));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_25178,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_25174,".call(this",(((pcnt_25178 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_25178,maxparams_25139)),null,(1),null)),(2),null))),");");
}


var G__25179 = seq__24015_25169;
var G__25180 = chunk__24016_25170;
var G__25181 = count__24017_25171;
var G__25182 = (i__24018_25172 + (1));
seq__24015_25169 = G__25179;
chunk__24016_25170 = G__25180;
count__24017_25171 = G__25181;
i__24018_25172 = G__25182;
continue;
} else {
var temp__5753__auto___25183 = cljs.core.seq(seq__24015_25169);
if(temp__5753__auto___25183){
var seq__24015_25184__$1 = temp__5753__auto___25183;
if(cljs.core.chunked_seq_QMARK_(seq__24015_25184__$1)){
var c__4679__auto___25185 = cljs.core.chunk_first(seq__24015_25184__$1);
var G__25186 = cljs.core.chunk_rest(seq__24015_25184__$1);
var G__25187 = c__4679__auto___25185;
var G__25188 = cljs.core.count(c__4679__auto___25185);
var G__25189 = (0);
seq__24015_25169 = G__25186;
chunk__24016_25170 = G__25187;
count__24017_25171 = G__25188;
i__24018_25172 = G__25189;
continue;
} else {
var vec__24028_25190 = cljs.core.first(seq__24015_25184__$1);
var n_25191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24028_25190,(0),null);
var meth_25192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24028_25190,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25192))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_25193 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_25193," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_25194 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_25193," = new cljs.core.IndexedSeq(",a_25194,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_25191,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_25139)),(((cljs.core.count(maxparams_25139) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_25193,");"], 0));
} else {
var pcnt_25197 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25192));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_25197,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_25191,".call(this",(((pcnt_25197 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_25197,maxparams_25139)),null,(1),null)),(2),null))),");");
}


var G__25199 = cljs.core.next(seq__24015_25184__$1);
var G__25200 = null;
var G__25201 = (0);
var G__25202 = (0);
seq__24015_25169 = G__25199;
chunk__24016_25170 = G__25200;
count__24017_25171 = G__25201;
i__24018_25172 = G__25202;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_25203 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_25141)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_25203,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25138,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25138,".cljs$lang$applyTo = ",cljs.core.some((function (p1__23992_SHARP_){
var vec__24033 = p1__23992_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24033,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24033,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_25141),".cljs$lang$applyTo;");
} else {
}

var seq__24036_25226 = cljs.core.seq(ms_25141);
var chunk__24037_25227 = null;
var count__24038_25228 = (0);
var i__24039_25229 = (0);
while(true){
if((i__24039_25229 < count__24038_25228)){
var vec__24046_25230 = chunk__24037_25227.cljs$core$IIndexed$_nth$arity$2(null,i__24039_25229);
var n_25231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24046_25230,(0),null);
var meth_25232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24046_25230,(1),null);
var c_25233 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25232));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25232))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25138,".cljs$core$IFn$_invoke$arity$variadic = ",n_25231,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_25138,".cljs$core$IFn$_invoke$arity$",c_25233," = ",n_25231,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__25234 = seq__24036_25226;
var G__25235 = chunk__24037_25227;
var G__25236 = count__24038_25228;
var G__25237 = (i__24039_25229 + (1));
seq__24036_25226 = G__25234;
chunk__24037_25227 = G__25235;
count__24038_25228 = G__25236;
i__24039_25229 = G__25237;
continue;
} else {
var temp__5753__auto___25238 = cljs.core.seq(seq__24036_25226);
if(temp__5753__auto___25238){
var seq__24036_25239__$1 = temp__5753__auto___25238;
if(cljs.core.chunked_seq_QMARK_(seq__24036_25239__$1)){
var c__4679__auto___25240 = cljs.core.chunk_first(seq__24036_25239__$1);
var G__25241 = cljs.core.chunk_rest(seq__24036_25239__$1);
var G__25242 = c__4679__auto___25240;
var G__25243 = cljs.core.count(c__4679__auto___25240);
var G__25244 = (0);
seq__24036_25226 = G__25241;
chunk__24037_25227 = G__25242;
count__24038_25228 = G__25243;
i__24039_25229 = G__25244;
continue;
} else {
var vec__24049_25245 = cljs.core.first(seq__24036_25239__$1);
var n_25246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24049_25245,(0),null);
var meth_25247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24049_25245,(1),null);
var c_25248 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25247));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25247))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25138,".cljs$core$IFn$_invoke$arity$variadic = ",n_25246,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_25138,".cljs$core$IFn$_invoke$arity$",c_25248," = ",n_25246,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__25249 = cljs.core.next(seq__24036_25239__$1);
var G__25250 = null;
var G__25251 = (0);
var G__25252 = (0);
seq__24036_25226 = G__25249;
chunk__24037_25227 = G__25250;
count__24038_25228 = G__25251;
i__24039_25229 = G__25252;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_25138,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__24055){
var map__24056 = p__24055;
var map__24056__$1 = cljs.core.__destructure_map(map__24056);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24056__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24056__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24056__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__24057_25254 = cljs.core.seq(statements);
var chunk__24058_25255 = null;
var count__24059_25256 = (0);
var i__24060_25257 = (0);
while(true){
if((i__24060_25257 < count__24059_25256)){
var s_25258 = chunk__24058_25255.cljs$core$IIndexed$_nth$arity$2(null,i__24060_25257);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_25258);


var G__25260 = seq__24057_25254;
var G__25261 = chunk__24058_25255;
var G__25262 = count__24059_25256;
var G__25263 = (i__24060_25257 + (1));
seq__24057_25254 = G__25260;
chunk__24058_25255 = G__25261;
count__24059_25256 = G__25262;
i__24060_25257 = G__25263;
continue;
} else {
var temp__5753__auto___25264 = cljs.core.seq(seq__24057_25254);
if(temp__5753__auto___25264){
var seq__24057_25265__$1 = temp__5753__auto___25264;
if(cljs.core.chunked_seq_QMARK_(seq__24057_25265__$1)){
var c__4679__auto___25266 = cljs.core.chunk_first(seq__24057_25265__$1);
var G__25267 = cljs.core.chunk_rest(seq__24057_25265__$1);
var G__25268 = c__4679__auto___25266;
var G__25269 = cljs.core.count(c__4679__auto___25266);
var G__25270 = (0);
seq__24057_25254 = G__25267;
chunk__24058_25255 = G__25268;
count__24059_25256 = G__25269;
i__24060_25257 = G__25270;
continue;
} else {
var s_25272 = cljs.core.first(seq__24057_25265__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_25272);


var G__25273 = cljs.core.next(seq__24057_25265__$1);
var G__25274 = null;
var G__25275 = (0);
var G__25276 = (0);
seq__24057_25254 = G__25273;
chunk__24058_25255 = G__25274;
count__24059_25256 = G__25275;
i__24060_25257 = G__25276;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__24061){
var map__24062 = p__24061;
var map__24062__$1 = cljs.core.__destructure_map(map__24062);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24062__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24062__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24062__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24062__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24062__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__24063,is_loop){
var map__24064 = p__24063;
var map__24064__$1 = cljs.core.__destructure_map(map__24064);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24064__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24064__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24064__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__24065_25283 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__24066_25284 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__24066_25284);

try{var seq__24067_25285 = cljs.core.seq(bindings);
var chunk__24068_25286 = null;
var count__24069_25287 = (0);
var i__24070_25288 = (0);
while(true){
if((i__24070_25288 < count__24069_25287)){
var map__24073_25289 = chunk__24068_25286.cljs$core$IIndexed$_nth$arity$2(null,i__24070_25288);
var map__24073_25290__$1 = cljs.core.__destructure_map(map__24073_25289);
var binding_25291 = map__24073_25290__$1;
var init_25292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24073_25290__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_25291);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_25292,";");


var G__25297 = seq__24067_25285;
var G__25298 = chunk__24068_25286;
var G__25299 = count__24069_25287;
var G__25300 = (i__24070_25288 + (1));
seq__24067_25285 = G__25297;
chunk__24068_25286 = G__25298;
count__24069_25287 = G__25299;
i__24070_25288 = G__25300;
continue;
} else {
var temp__5753__auto___25301 = cljs.core.seq(seq__24067_25285);
if(temp__5753__auto___25301){
var seq__24067_25302__$1 = temp__5753__auto___25301;
if(cljs.core.chunked_seq_QMARK_(seq__24067_25302__$1)){
var c__4679__auto___25303 = cljs.core.chunk_first(seq__24067_25302__$1);
var G__25304 = cljs.core.chunk_rest(seq__24067_25302__$1);
var G__25305 = c__4679__auto___25303;
var G__25306 = cljs.core.count(c__4679__auto___25303);
var G__25307 = (0);
seq__24067_25285 = G__25304;
chunk__24068_25286 = G__25305;
count__24069_25287 = G__25306;
i__24070_25288 = G__25307;
continue;
} else {
var map__24074_25308 = cljs.core.first(seq__24067_25302__$1);
var map__24074_25309__$1 = cljs.core.__destructure_map(map__24074_25308);
var binding_25310 = map__24074_25309__$1;
var init_25311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24074_25309__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_25310);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_25311,";");


var G__25312 = cljs.core.next(seq__24067_25302__$1);
var G__25313 = null;
var G__25314 = (0);
var G__25315 = (0);
seq__24067_25285 = G__25312;
chunk__24068_25286 = G__25313;
count__24069_25287 = G__25314;
i__24070_25288 = G__25315;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__24065_25283);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__24082){
var map__24083 = p__24082;
var map__24083__$1 = cljs.core.__destructure_map(map__24083);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24083__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24083__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24083__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4741__auto___25320 = cljs.core.count(exprs);
var i_25321 = (0);
while(true){
if((i_25321 < n__4741__auto___25320)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_25321) : temps.call(null,i_25321))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_25321) : exprs.call(null,i_25321)),";");

var G__25322 = (i_25321 + (1));
i_25321 = G__25322;
continue;
} else {
}
break;
}

var n__4741__auto___25323 = cljs.core.count(exprs);
var i_25324 = (0);
while(true){
if((i_25324 < n__4741__auto___25323)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_25324) : params.call(null,i_25324)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_25324) : temps.call(null,i_25324)),";");

var G__25325 = (i_25324 + (1));
i_25324 = G__25325;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__24085){
var map__24086 = p__24085;
var map__24086__$1 = cljs.core.__destructure_map(map__24086);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24086__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24086__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24086__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__24087_25327 = cljs.core.seq(bindings);
var chunk__24088_25328 = null;
var count__24089_25329 = (0);
var i__24090_25330 = (0);
while(true){
if((i__24090_25330 < count__24089_25329)){
var map__24097_25331 = chunk__24088_25328.cljs$core$IIndexed$_nth$arity$2(null,i__24090_25330);
var map__24097_25332__$1 = cljs.core.__destructure_map(map__24097_25331);
var binding_25333 = map__24097_25332__$1;
var init_25334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24097_25332__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_25333)," = ",init_25334,";");


var G__25336 = seq__24087_25327;
var G__25337 = chunk__24088_25328;
var G__25338 = count__24089_25329;
var G__25339 = (i__24090_25330 + (1));
seq__24087_25327 = G__25336;
chunk__24088_25328 = G__25337;
count__24089_25329 = G__25338;
i__24090_25330 = G__25339;
continue;
} else {
var temp__5753__auto___25340 = cljs.core.seq(seq__24087_25327);
if(temp__5753__auto___25340){
var seq__24087_25341__$1 = temp__5753__auto___25340;
if(cljs.core.chunked_seq_QMARK_(seq__24087_25341__$1)){
var c__4679__auto___25342 = cljs.core.chunk_first(seq__24087_25341__$1);
var G__25343 = cljs.core.chunk_rest(seq__24087_25341__$1);
var G__25344 = c__4679__auto___25342;
var G__25345 = cljs.core.count(c__4679__auto___25342);
var G__25346 = (0);
seq__24087_25327 = G__25343;
chunk__24088_25328 = G__25344;
count__24089_25329 = G__25345;
i__24090_25330 = G__25346;
continue;
} else {
var map__24098_25347 = cljs.core.first(seq__24087_25341__$1);
var map__24098_25348__$1 = cljs.core.__destructure_map(map__24098_25347);
var binding_25349 = map__24098_25348__$1;
var init_25350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24098_25348__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_25349)," = ",init_25350,";");


var G__25351 = cljs.core.next(seq__24087_25341__$1);
var G__25352 = null;
var G__25353 = (0);
var G__25354 = (0);
seq__24087_25327 = G__25351;
chunk__24088_25328 = G__25352;
count__24089_25329 = G__25353;
i__24090_25330 = G__25354;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__24105){
var map__24106 = p__24105;
var map__24106__$1 = cljs.core.__destructure_map(map__24106);
var expr = map__24106__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24106__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24106__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24106__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var and__4251__auto____$4 = cljs.core.not((function (){var fexpr__24125 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__24125.cljs$core$IFn$_invoke$arity$1 ? fexpr__24125.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__24125.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__24164 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__24164.cljs$core$IFn$_invoke$arity$1 ? fexpr__24164.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__24164.call(null,first_arg_tag));
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
var vec__24115 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__24100_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24100_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__24101_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24101_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24115,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24115,(1),null);
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
var pimpl_25355 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_25355,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_25356 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_25356,args)),(((mfa_25356 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_25356,args)),"], 0))"], 0));
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
var G__24197 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__24196 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__24196.cljs$core$IFn$_invoke$arity$1 ? fexpr__24196.cljs$core$IFn$_invoke$arity$1(G__24197) : fexpr__24196.call(null,G__24197));
} else {
return and__4251__auto__;
}
})())){
var fprop_25360 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_25360," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_25360,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_25360," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_25360,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__24198){
var map__24199 = p__24198;
var map__24199__$1 = cljs.core.__destructure_map(map__24199);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24199__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24199__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24199__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__24207){
var map__24208 = p__24207;
var map__24208__$1 = cljs.core.__destructure_map(map__24208);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24208__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24208__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24208__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24227_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24227_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__24264 = cljs.analyzer.lib_AMPERSAND_sublib(lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24264,(0),null);
var sublib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24264,(1),null);
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
var map__24269 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__24269__$1 = cljs.core.__destructure_map(map__24269);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24269__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24269__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__24270 = options;
var map__24270__$1 = cljs.core.__destructure_map(map__24270);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24270__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24270__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24270__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__24271 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__24277 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__24277__$1 = cljs.core.__destructure_map(map__24277);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24277__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24277__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24271,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24271,(1),null);
var vec__24274 = (function (){var map__24278 = cljs.core.group_by(cljs.analyzer.goog_module_dep_QMARK_,libs_to_load);
var map__24278__$1 = cljs.core.__destructure_map(map__24278);
var goog_modules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24278__$1,true);
var libs_to_load__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24278__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog_modules,libs_to_load__$1], null);
})();
var goog_modules = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24274,(0),null);
var libs_to_load__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24274,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__24279_25393 = cljs.core.seq(libs_to_load__$1);
var chunk__24280_25394 = null;
var count__24281_25395 = (0);
var i__24282_25396 = (0);
while(true){
if((i__24282_25396 < count__24281_25395)){
var lib_25399 = chunk__24280_25394.cljs$core$IIndexed$_nth$arity$2(null,i__24282_25396);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_25399)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25399),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25399),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25399),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25399),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_25399,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25399),"');");
}

}
}
}


var G__25404 = seq__24279_25393;
var G__25405 = chunk__24280_25394;
var G__25406 = count__24281_25395;
var G__25407 = (i__24282_25396 + (1));
seq__24279_25393 = G__25404;
chunk__24280_25394 = G__25405;
count__24281_25395 = G__25406;
i__24282_25396 = G__25407;
continue;
} else {
var temp__5753__auto___25408 = cljs.core.seq(seq__24279_25393);
if(temp__5753__auto___25408){
var seq__24279_25409__$1 = temp__5753__auto___25408;
if(cljs.core.chunked_seq_QMARK_(seq__24279_25409__$1)){
var c__4679__auto___25410 = cljs.core.chunk_first(seq__24279_25409__$1);
var G__25411 = cljs.core.chunk_rest(seq__24279_25409__$1);
var G__25412 = c__4679__auto___25410;
var G__25413 = cljs.core.count(c__4679__auto___25410);
var G__25414 = (0);
seq__24279_25393 = G__25411;
chunk__24280_25394 = G__25412;
count__24281_25395 = G__25413;
i__24282_25396 = G__25414;
continue;
} else {
var lib_25415 = cljs.core.first(seq__24279_25409__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_25415)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25415),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25415),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25415),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25415),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_25415,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25415),"');");
}

}
}
}


var G__25416 = cljs.core.next(seq__24279_25409__$1);
var G__25417 = null;
var G__25418 = (0);
var G__25419 = (0);
seq__24279_25393 = G__25416;
chunk__24280_25394 = G__25417;
count__24281_25395 = G__25418;
i__24282_25396 = G__25419;
continue;
}
} else {
}
}
break;
}

var seq__24287_25420 = cljs.core.seq(node_libs);
var chunk__24288_25421 = null;
var count__24289_25422 = (0);
var i__24290_25423 = (0);
while(true){
if((i__24290_25423 < count__24289_25422)){
var lib_25424 = chunk__24288_25421.cljs$core$IIndexed$_nth$arity$2(null,i__24290_25423);
var vec__24297_25425 = cljs.analyzer.lib_AMPERSAND_sublib(lib_25424);
var lib_SINGLEQUOTE__25426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24297_25425,(0),null);
var sublib_25427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24297_25425,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_25424)," = require('",lib_SINGLEQUOTE__25426,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_25427),";"], 0));


var G__25428 = seq__24287_25420;
var G__25429 = chunk__24288_25421;
var G__25430 = count__24289_25422;
var G__25431 = (i__24290_25423 + (1));
seq__24287_25420 = G__25428;
chunk__24288_25421 = G__25429;
count__24289_25422 = G__25430;
i__24290_25423 = G__25431;
continue;
} else {
var temp__5753__auto___25432 = cljs.core.seq(seq__24287_25420);
if(temp__5753__auto___25432){
var seq__24287_25433__$1 = temp__5753__auto___25432;
if(cljs.core.chunked_seq_QMARK_(seq__24287_25433__$1)){
var c__4679__auto___25434 = cljs.core.chunk_first(seq__24287_25433__$1);
var G__25435 = cljs.core.chunk_rest(seq__24287_25433__$1);
var G__25436 = c__4679__auto___25434;
var G__25437 = cljs.core.count(c__4679__auto___25434);
var G__25438 = (0);
seq__24287_25420 = G__25435;
chunk__24288_25421 = G__25436;
count__24289_25422 = G__25437;
i__24290_25423 = G__25438;
continue;
} else {
var lib_25439 = cljs.core.first(seq__24287_25433__$1);
var vec__24300_25440 = cljs.analyzer.lib_AMPERSAND_sublib(lib_25439);
var lib_SINGLEQUOTE__25441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24300_25440,(0),null);
var sublib_25442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24300_25440,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_25439)," = require('",lib_SINGLEQUOTE__25441,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_25442),";"], 0));


var G__25445 = cljs.core.next(seq__24287_25433__$1);
var G__25446 = null;
var G__25447 = (0);
var G__25448 = (0);
seq__24287_25420 = G__25445;
chunk__24288_25421 = G__25446;
count__24289_25422 = G__25447;
i__24290_25423 = G__25448;
continue;
}
} else {
}
}
break;
}

var seq__24303_25451 = cljs.core.seq(goog_modules);
var chunk__24304_25452 = null;
var count__24305_25453 = (0);
var i__24306_25454 = (0);
while(true){
if((i__24306_25454 < count__24305_25453)){
var lib_25455 = chunk__24304_25452.cljs$core$IIndexed$_nth$arity$2(null,i__24306_25454);
var vec__24313_25456 = cljs.analyzer.lib_AMPERSAND_sublib(lib_25455);
var lib_SINGLEQUOTE__25457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24313_25456,(0),null);
var sublib_25458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24313_25456,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",lib_SINGLEQUOTE__25457,"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.scope(function(){");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_goog_module_lib.cljs$core$IFn$_invoke$arity$1(lib_25455)," = goog.module.get('",lib_SINGLEQUOTE__25457,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_25458),";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");


var G__25459 = seq__24303_25451;
var G__25460 = chunk__24304_25452;
var G__25461 = count__24305_25453;
var G__25462 = (i__24306_25454 + (1));
seq__24303_25451 = G__25459;
chunk__24304_25452 = G__25460;
count__24305_25453 = G__25461;
i__24306_25454 = G__25462;
continue;
} else {
var temp__5753__auto___25463 = cljs.core.seq(seq__24303_25451);
if(temp__5753__auto___25463){
var seq__24303_25464__$1 = temp__5753__auto___25463;
if(cljs.core.chunked_seq_QMARK_(seq__24303_25464__$1)){
var c__4679__auto___25465 = cljs.core.chunk_first(seq__24303_25464__$1);
var G__25466 = cljs.core.chunk_rest(seq__24303_25464__$1);
var G__25467 = c__4679__auto___25465;
var G__25468 = cljs.core.count(c__4679__auto___25465);
var G__25469 = (0);
seq__24303_25451 = G__25466;
chunk__24304_25452 = G__25467;
count__24305_25453 = G__25468;
i__24306_25454 = G__25469;
continue;
} else {
var lib_25470 = cljs.core.first(seq__24303_25464__$1);
var vec__24316_25471 = cljs.analyzer.lib_AMPERSAND_sublib(lib_25470);
var lib_SINGLEQUOTE__25472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24316_25471,(0),null);
var sublib_25473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24316_25471,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",lib_SINGLEQUOTE__25472,"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.scope(function(){");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_goog_module_lib.cljs$core$IFn$_invoke$arity$1(lib_25470)," = goog.module.get('",lib_SINGLEQUOTE__25472,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_25473),";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");


var G__25474 = cljs.core.next(seq__24303_25464__$1);
var G__25475 = null;
var G__25476 = (0);
var G__25477 = (0);
seq__24303_25451 = G__25474;
chunk__24304_25452 = G__25475;
count__24305_25453 = G__25476;
i__24306_25454 = G__25477;
continue;
}
} else {
}
}
break;
}

var seq__24319_25478 = cljs.core.seq(global_exports_libs);
var chunk__24320_25479 = null;
var count__24321_25480 = (0);
var i__24322_25481 = (0);
while(true){
if((i__24322_25481 < count__24321_25480)){
var lib_25482 = chunk__24320_25479.cljs$core$IIndexed$_nth$arity$2(null,i__24322_25481);
var map__24325_25483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(cljs.core.first(cljs.analyzer.lib_AMPERSAND_sublib(lib_25482))));
var map__24325_25484__$1 = cljs.core.__destructure_map(map__24325_25483);
var global_exports_25485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24325_25484__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_25485,lib_25482);


var G__25486 = seq__24319_25478;
var G__25487 = chunk__24320_25479;
var G__25488 = count__24321_25480;
var G__25489 = (i__24322_25481 + (1));
seq__24319_25478 = G__25486;
chunk__24320_25479 = G__25487;
count__24321_25480 = G__25488;
i__24322_25481 = G__25489;
continue;
} else {
var temp__5753__auto___25490 = cljs.core.seq(seq__24319_25478);
if(temp__5753__auto___25490){
var seq__24319_25491__$1 = temp__5753__auto___25490;
if(cljs.core.chunked_seq_QMARK_(seq__24319_25491__$1)){
var c__4679__auto___25492 = cljs.core.chunk_first(seq__24319_25491__$1);
var G__25493 = cljs.core.chunk_rest(seq__24319_25491__$1);
var G__25494 = c__4679__auto___25492;
var G__25495 = cljs.core.count(c__4679__auto___25492);
var G__25496 = (0);
seq__24319_25478 = G__25493;
chunk__24320_25479 = G__25494;
count__24321_25480 = G__25495;
i__24322_25481 = G__25496;
continue;
} else {
var lib_25497 = cljs.core.first(seq__24319_25491__$1);
var map__24326_25498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(cljs.core.first(cljs.analyzer.lib_AMPERSAND_sublib(lib_25497))));
var map__24326_25499__$1 = cljs.core.__destructure_map(map__24326_25498);
var global_exports_25500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24326_25499__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_25500,lib_25497);


var G__25501 = cljs.core.next(seq__24319_25491__$1);
var G__25502 = null;
var G__25503 = (0);
var G__25504 = (0);
seq__24319_25478 = G__25501;
chunk__24320_25479 = G__25502;
count__24321_25480 = G__25503;
i__24322_25481 = G__25504;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__24327){
var map__24328 = p__24327;
var map__24328__$1 = cljs.core.__destructure_map(map__24328);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24328__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24328__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24328__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24328__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24328__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24328__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24328__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__24329){
var map__24330 = p__24329;
var map__24330__$1 = cljs.core.__destructure_map(map__24330);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24330__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24330__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24330__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24330__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24330__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24330__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24330__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__24335){
var map__24337 = p__24335;
var map__24337__$1 = cljs.core.__destructure_map(map__24337);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24337__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24337__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24337__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24337__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24337__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__24338_25509 = cljs.core.seq(protocols);
var chunk__24339_25510 = null;
var count__24340_25511 = (0);
var i__24341_25512 = (0);
while(true){
if((i__24341_25512 < count__24340_25511)){
var protocol_25513 = chunk__24339_25510.cljs$core$IIndexed$_nth$arity$2(null,i__24341_25512);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25513)),"}");


var G__25516 = seq__24338_25509;
var G__25517 = chunk__24339_25510;
var G__25518 = count__24340_25511;
var G__25519 = (i__24341_25512 + (1));
seq__24338_25509 = G__25516;
chunk__24339_25510 = G__25517;
count__24340_25511 = G__25518;
i__24341_25512 = G__25519;
continue;
} else {
var temp__5753__auto___25520 = cljs.core.seq(seq__24338_25509);
if(temp__5753__auto___25520){
var seq__24338_25521__$1 = temp__5753__auto___25520;
if(cljs.core.chunked_seq_QMARK_(seq__24338_25521__$1)){
var c__4679__auto___25522 = cljs.core.chunk_first(seq__24338_25521__$1);
var G__25523 = cljs.core.chunk_rest(seq__24338_25521__$1);
var G__25524 = c__4679__auto___25522;
var G__25525 = cljs.core.count(c__4679__auto___25522);
var G__25526 = (0);
seq__24338_25509 = G__25523;
chunk__24339_25510 = G__25524;
count__24340_25511 = G__25525;
i__24341_25512 = G__25526;
continue;
} else {
var protocol_25527 = cljs.core.first(seq__24338_25521__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25527)),"}");


var G__25528 = cljs.core.next(seq__24338_25521__$1);
var G__25529 = null;
var G__25530 = (0);
var G__25531 = (0);
seq__24338_25509 = G__25528;
chunk__24339_25510 = G__25529;
count__24340_25511 = G__25530;
i__24341_25512 = G__25531;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__24342_25532 = cljs.core.seq(fields__$1);
var chunk__24343_25533 = null;
var count__24344_25534 = (0);
var i__24345_25535 = (0);
while(true){
if((i__24345_25535 < count__24344_25534)){
var fld_25536 = chunk__24343_25533.cljs$core$IIndexed$_nth$arity$2(null,i__24345_25535);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25536," = ",fld_25536,";");


var G__25537 = seq__24342_25532;
var G__25538 = chunk__24343_25533;
var G__25539 = count__24344_25534;
var G__25540 = (i__24345_25535 + (1));
seq__24342_25532 = G__25537;
chunk__24343_25533 = G__25538;
count__24344_25534 = G__25539;
i__24345_25535 = G__25540;
continue;
} else {
var temp__5753__auto___25541 = cljs.core.seq(seq__24342_25532);
if(temp__5753__auto___25541){
var seq__24342_25542__$1 = temp__5753__auto___25541;
if(cljs.core.chunked_seq_QMARK_(seq__24342_25542__$1)){
var c__4679__auto___25543 = cljs.core.chunk_first(seq__24342_25542__$1);
var G__25544 = cljs.core.chunk_rest(seq__24342_25542__$1);
var G__25545 = c__4679__auto___25543;
var G__25546 = cljs.core.count(c__4679__auto___25543);
var G__25547 = (0);
seq__24342_25532 = G__25544;
chunk__24343_25533 = G__25545;
count__24344_25534 = G__25546;
i__24345_25535 = G__25547;
continue;
} else {
var fld_25548 = cljs.core.first(seq__24342_25542__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25548," = ",fld_25548,";");


var G__25549 = cljs.core.next(seq__24342_25542__$1);
var G__25550 = null;
var G__25551 = (0);
var G__25552 = (0);
seq__24342_25532 = G__25549;
chunk__24343_25533 = G__25550;
count__24344_25534 = G__25551;
i__24345_25535 = G__25552;
continue;
}
} else {
}
}
break;
}

var seq__24346_25553 = cljs.core.seq(pmasks);
var chunk__24347_25554 = null;
var count__24348_25555 = (0);
var i__24349_25556 = (0);
while(true){
if((i__24349_25556 < count__24348_25555)){
var vec__24356_25557 = chunk__24347_25554.cljs$core$IIndexed$_nth$arity$2(null,i__24349_25556);
var pno_25558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24356_25557,(0),null);
var pmask_25559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24356_25557,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_25558,"$ = ",pmask_25559,";");


var G__25560 = seq__24346_25553;
var G__25561 = chunk__24347_25554;
var G__25562 = count__24348_25555;
var G__25563 = (i__24349_25556 + (1));
seq__24346_25553 = G__25560;
chunk__24347_25554 = G__25561;
count__24348_25555 = G__25562;
i__24349_25556 = G__25563;
continue;
} else {
var temp__5753__auto___25564 = cljs.core.seq(seq__24346_25553);
if(temp__5753__auto___25564){
var seq__24346_25565__$1 = temp__5753__auto___25564;
if(cljs.core.chunked_seq_QMARK_(seq__24346_25565__$1)){
var c__4679__auto___25566 = cljs.core.chunk_first(seq__24346_25565__$1);
var G__25567 = cljs.core.chunk_rest(seq__24346_25565__$1);
var G__25568 = c__4679__auto___25566;
var G__25569 = cljs.core.count(c__4679__auto___25566);
var G__25570 = (0);
seq__24346_25553 = G__25567;
chunk__24347_25554 = G__25568;
count__24348_25555 = G__25569;
i__24349_25556 = G__25570;
continue;
} else {
var vec__24359_25571 = cljs.core.first(seq__24346_25565__$1);
var pno_25572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24359_25571,(0),null);
var pmask_25573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24359_25571,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_25572,"$ = ",pmask_25573,";");


var G__25574 = cljs.core.next(seq__24346_25565__$1);
var G__25575 = null;
var G__25576 = (0);
var G__25577 = (0);
seq__24346_25553 = G__25574;
chunk__24347_25554 = G__25575;
count__24348_25555 = G__25576;
i__24349_25556 = G__25577;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__24362){
var map__24363 = p__24362;
var map__24363__$1 = cljs.core.__destructure_map(map__24363);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24363__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24363__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24363__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24363__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24363__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__24364_25578 = cljs.core.seq(protocols);
var chunk__24365_25579 = null;
var count__24366_25580 = (0);
var i__24367_25581 = (0);
while(true){
if((i__24367_25581 < count__24366_25580)){
var protocol_25582 = chunk__24365_25579.cljs$core$IIndexed$_nth$arity$2(null,i__24367_25581);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25582)),"}");


var G__25583 = seq__24364_25578;
var G__25584 = chunk__24365_25579;
var G__25585 = count__24366_25580;
var G__25586 = (i__24367_25581 + (1));
seq__24364_25578 = G__25583;
chunk__24365_25579 = G__25584;
count__24366_25580 = G__25585;
i__24367_25581 = G__25586;
continue;
} else {
var temp__5753__auto___25587 = cljs.core.seq(seq__24364_25578);
if(temp__5753__auto___25587){
var seq__24364_25588__$1 = temp__5753__auto___25587;
if(cljs.core.chunked_seq_QMARK_(seq__24364_25588__$1)){
var c__4679__auto___25589 = cljs.core.chunk_first(seq__24364_25588__$1);
var G__25590 = cljs.core.chunk_rest(seq__24364_25588__$1);
var G__25591 = c__4679__auto___25589;
var G__25592 = cljs.core.count(c__4679__auto___25589);
var G__25593 = (0);
seq__24364_25578 = G__25590;
chunk__24365_25579 = G__25591;
count__24366_25580 = G__25592;
i__24367_25581 = G__25593;
continue;
} else {
var protocol_25594 = cljs.core.first(seq__24364_25588__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25594)),"}");


var G__25595 = cljs.core.next(seq__24364_25588__$1);
var G__25596 = null;
var G__25597 = (0);
var G__25598 = (0);
seq__24364_25578 = G__25595;
chunk__24365_25579 = G__25596;
count__24366_25580 = G__25597;
i__24367_25581 = G__25598;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__24376_25599 = cljs.core.seq(fields__$1);
var chunk__24377_25600 = null;
var count__24378_25601 = (0);
var i__24379_25602 = (0);
while(true){
if((i__24379_25602 < count__24378_25601)){
var fld_25603 = chunk__24377_25600.cljs$core$IIndexed$_nth$arity$2(null,i__24379_25602);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25603," = ",fld_25603,";");


var G__25604 = seq__24376_25599;
var G__25605 = chunk__24377_25600;
var G__25606 = count__24378_25601;
var G__25607 = (i__24379_25602 + (1));
seq__24376_25599 = G__25604;
chunk__24377_25600 = G__25605;
count__24378_25601 = G__25606;
i__24379_25602 = G__25607;
continue;
} else {
var temp__5753__auto___25608 = cljs.core.seq(seq__24376_25599);
if(temp__5753__auto___25608){
var seq__24376_25609__$1 = temp__5753__auto___25608;
if(cljs.core.chunked_seq_QMARK_(seq__24376_25609__$1)){
var c__4679__auto___25610 = cljs.core.chunk_first(seq__24376_25609__$1);
var G__25611 = cljs.core.chunk_rest(seq__24376_25609__$1);
var G__25612 = c__4679__auto___25610;
var G__25613 = cljs.core.count(c__4679__auto___25610);
var G__25614 = (0);
seq__24376_25599 = G__25611;
chunk__24377_25600 = G__25612;
count__24378_25601 = G__25613;
i__24379_25602 = G__25614;
continue;
} else {
var fld_25616 = cljs.core.first(seq__24376_25609__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25616," = ",fld_25616,";");


var G__25618 = cljs.core.next(seq__24376_25609__$1);
var G__25619 = null;
var G__25620 = (0);
var G__25621 = (0);
seq__24376_25599 = G__25618;
chunk__24377_25600 = G__25619;
count__24378_25601 = G__25620;
i__24379_25602 = G__25621;
continue;
}
} else {
}
}
break;
}

var seq__24382_25622 = cljs.core.seq(pmasks);
var chunk__24383_25623 = null;
var count__24384_25624 = (0);
var i__24385_25625 = (0);
while(true){
if((i__24385_25625 < count__24384_25624)){
var vec__24392_25626 = chunk__24383_25623.cljs$core$IIndexed$_nth$arity$2(null,i__24385_25625);
var pno_25627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24392_25626,(0),null);
var pmask_25628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24392_25626,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_25627,"$ = ",pmask_25628,";");


var G__25633 = seq__24382_25622;
var G__25634 = chunk__24383_25623;
var G__25635 = count__24384_25624;
var G__25636 = (i__24385_25625 + (1));
seq__24382_25622 = G__25633;
chunk__24383_25623 = G__25634;
count__24384_25624 = G__25635;
i__24385_25625 = G__25636;
continue;
} else {
var temp__5753__auto___25637 = cljs.core.seq(seq__24382_25622);
if(temp__5753__auto___25637){
var seq__24382_25638__$1 = temp__5753__auto___25637;
if(cljs.core.chunked_seq_QMARK_(seq__24382_25638__$1)){
var c__4679__auto___25639 = cljs.core.chunk_first(seq__24382_25638__$1);
var G__25640 = cljs.core.chunk_rest(seq__24382_25638__$1);
var G__25641 = c__4679__auto___25639;
var G__25642 = cljs.core.count(c__4679__auto___25639);
var G__25643 = (0);
seq__24382_25622 = G__25640;
chunk__24383_25623 = G__25641;
count__24384_25624 = G__25642;
i__24385_25625 = G__25643;
continue;
} else {
var vec__24395_25644 = cljs.core.first(seq__24382_25638__$1);
var pno_25645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24395_25644,(0),null);
var pmask_25646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24395_25644,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_25645,"$ = ",pmask_25646,";");


var G__25647 = cljs.core.next(seq__24382_25638__$1);
var G__25648 = null;
var G__25649 = (0);
var G__25650 = (0);
seq__24382_25622 = G__25647;
chunk__24383_25623 = G__25648;
count__24384_25624 = G__25649;
i__24385_25625 = G__25650;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__24399){
var map__24400 = p__24399;
var map__24400__$1 = cljs.core.__destructure_map(map__24400);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24400__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24400__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24400__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24400__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24400__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__24401){
var map__24402 = p__24401;
var map__24402__$1 = cljs.core.__destructure_map(map__24402);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24402__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24402__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24402__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24402__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24402__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var seq__24408 = cljs.core.seq(table);
var chunk__24409 = null;
var count__24410 = (0);
var i__24411 = (0);
while(true){
if((i__24411 < count__24410)){
var vec__24418 = chunk__24409.cljs$core$IIndexed$_nth$arity$2(null,i__24411);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24418,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24418,(1),null);
var ns_25652 = cljs.core.namespace(sym);
var name_25653 = cljs.core.name(sym);
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


var G__25656 = seq__24408;
var G__25657 = chunk__24409;
var G__25658 = count__24410;
var G__25659 = (i__24411 + (1));
seq__24408 = G__25656;
chunk__24409 = G__25657;
count__24410 = G__25658;
i__24411 = G__25659;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__24408);
if(temp__5753__auto__){
var seq__24408__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24408__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__24408__$1);
var G__25660 = cljs.core.chunk_rest(seq__24408__$1);
var G__25661 = c__4679__auto__;
var G__25662 = cljs.core.count(c__4679__auto__);
var G__25663 = (0);
seq__24408 = G__25660;
chunk__24409 = G__25661;
count__24410 = G__25662;
i__24411 = G__25663;
continue;
} else {
var vec__24425 = cljs.core.first(seq__24408__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24425,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24425,(1),null);
var ns_25664 = cljs.core.namespace(sym);
var name_25665 = cljs.core.name(sym);
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


var G__25666 = cljs.core.next(seq__24408__$1);
var G__25667 = null;
var G__25668 = (0);
var G__25669 = (0);
seq__24408 = G__25666;
chunk__24409 = G__25667;
count__24410 = G__25668;
i__24411 = G__25669;
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
var G__24432 = arguments.length;
switch (G__24432) {
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
var k_25671 = cljs.core.first(ks);
var vec__24434_25672 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_25671);
var top_25673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24434_25672,(0),null);
var prefix_SINGLEQUOTE__25674 = vec__24434_25672;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_25671)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__25674) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_25673)) || (cljs.core.contains_QMARK_(known_externs,top_25673)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__25674)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_25673);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__25674)),";");
}
} else {
}

var m_25675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_25671);
if(cljs.core.empty_QMARK_(m_25675)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__25674,m_25675,top_level,known_externs);
}

var G__25676 = cljs.core.next(ks);
ks = G__25676;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);

