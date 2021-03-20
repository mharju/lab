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
var map__24061 = s;
var map__24061__$1 = (((((!((map__24061 == null))))?(((((map__24061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24061):map__24061);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24061__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24061__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__24064 = info;
var map__24065 = G__24064;
var map__24065__$1 = (((((!((map__24065 == null))))?(((((map__24065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24065):map__24065);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24065__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__24064__$1 = G__24064;
while(true){
var d__$2 = d__$1;
var map__24069 = G__24064__$1;
var map__24069__$1 = (((((!((map__24069 == null))))?(((((map__24069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24069):map__24069);
var shadow__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24069__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$2)){
var G__24754 = (d__$2 + (1));
var G__24755 = shadow__$2;
d__$1 = G__24754;
G__24064__$1 = G__24755;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__24071){
var map__24072 = p__24071;
var map__24072__$1 = (((((!((map__24072 == null))))?(((((map__24072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24072):map__24072);
var name_var = map__24072__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24072__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24072__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__24074 = info;
var map__24074__$1 = (((((!((map__24074 == null))))?(((((map__24074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24074):map__24074);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24074__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24074__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__24076 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__24076) : cljs.compiler.munge.call(null,G__24076));
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
var G__24078 = arguments.length;
switch (G__24078) {
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
if(cljs.analyzer.cljs_map_QMARK_(s)){
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
var ms = (function (){var fexpr__24080 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__24080.cljs$core$IFn$_invoke$arity$1 ? fexpr__24080.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__24080.call(null,ss__$3));
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
var G__24081 = cp;
switch (G__24081) {
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
var seq__24082_24758 = cljs.core.seq(s);
var chunk__24083_24759 = null;
var count__24084_24760 = (0);
var i__24085_24761 = (0);
while(true){
if((i__24085_24761 < count__24084_24760)){
var c_24762 = chunk__24083_24759.cljs$core$IIndexed$_nth$arity$2(null,i__24085_24761);
sb.append(cljs.compiler.escape_char(c_24762));


var G__24763 = seq__24082_24758;
var G__24764 = chunk__24083_24759;
var G__24765 = count__24084_24760;
var G__24766 = (i__24085_24761 + (1));
seq__24082_24758 = G__24763;
chunk__24083_24759 = G__24764;
count__24084_24760 = G__24765;
i__24085_24761 = G__24766;
continue;
} else {
var temp__5735__auto___24767 = cljs.core.seq(seq__24082_24758);
if(temp__5735__auto___24767){
var seq__24082_24768__$1 = temp__5735__auto___24767;
if(cljs.core.chunked_seq_QMARK_(seq__24082_24768__$1)){
var c__4556__auto___24769 = cljs.core.chunk_first(seq__24082_24768__$1);
var G__24770 = cljs.core.chunk_rest(seq__24082_24768__$1);
var G__24771 = c__4556__auto___24769;
var G__24772 = cljs.core.count(c__4556__auto___24769);
var G__24773 = (0);
seq__24082_24758 = G__24770;
chunk__24083_24759 = G__24771;
count__24084_24760 = G__24772;
i__24085_24761 = G__24773;
continue;
} else {
var c_24774 = cljs.core.first(seq__24082_24768__$1);
sb.append(cljs.compiler.escape_char(c_24774));


var G__24775 = cljs.core.next(seq__24082_24768__$1);
var G__24776 = null;
var G__24777 = (0);
var G__24778 = (0);
seq__24082_24758 = G__24775;
chunk__24083_24759 = G__24776;
count__24084_24760 = G__24777;
i__24085_24761 = G__24778;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__24137 = cljs.core.get_global_hierarchy;
return (fexpr__24137.cljs$core$IFn$_invoke$arity$0 ? fexpr__24137.cljs$core$IFn$_invoke$arity$0() : fexpr__24137.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__24138_24779 = ast;
var map__24138_24780__$1 = (((((!((map__24138_24779 == null))))?(((((map__24138_24779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24138_24779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24138_24779):map__24138_24779);
var env_24781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24138_24780__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_24781))){
var map__24140_24782 = env_24781;
var map__24140_24783__$1 = (((((!((map__24140_24782 == null))))?(((((map__24140_24782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24140_24782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24140_24782):map__24140_24782);
var line_24784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24140_24783__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24140_24783__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__24142 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__24144 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__24143 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__24143.cljs$core$IFn$_invoke$arity$1 ? fexpr__24143.cljs$core$IFn$_invoke$arity$1(G__24144) : fexpr__24143.call(null,G__24144));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24142,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__24142;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_24784 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_24785)?(column_24785 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__24153 = arguments.length;
switch (G__24153) {
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
var args_arr__4757__auto__ = [];
var len__4736__auto___24787 = arguments.length;
var i__4737__auto___24788 = (0);
while(true){
if((i__4737__auto___24788 < len__4736__auto___24787)){
args_arr__4757__auto__.push((arguments[i__4737__auto___24788]));

var G__24789 = (i__4737__auto___24788 + (1));
i__4737__auto___24788 = G__24789;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(a)){
cljs.compiler.emit(a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(a)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null));
} else {
var s_24790 = (function (){var G__24154 = a;
if((!(typeof a === 'string'))){
return G__24154.toString();
} else {
return G__24154;
}
})();
var temp__5739__auto___24791 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___24791 == null)){
} else {
var sm_data_24792 = temp__5739__auto___24791;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_24792,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__24145_SHARP_){
return (p1__24145_SHARP_ + s_24790.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_24790], 0));

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

var seq__24155 = cljs.core.seq(xs);
var chunk__24156 = null;
var count__24157 = (0);
var i__24158 = (0);
while(true){
if((i__24158 < count__24157)){
var x = chunk__24156.cljs$core$IIndexed$_nth$arity$2(null,i__24158);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__24793 = seq__24155;
var G__24794 = chunk__24156;
var G__24795 = count__24157;
var G__24796 = (i__24158 + (1));
seq__24155 = G__24793;
chunk__24156 = G__24794;
count__24157 = G__24795;
i__24158 = G__24796;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24155);
if(temp__5735__auto__){
var seq__24155__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24155__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24155__$1);
var G__24797 = cljs.core.chunk_rest(seq__24155__$1);
var G__24798 = c__4556__auto__;
var G__24799 = cljs.core.count(c__4556__auto__);
var G__24800 = (0);
seq__24155 = G__24797;
chunk__24156 = G__24798;
count__24157 = G__24799;
i__24158 = G__24800;
continue;
} else {
var x = cljs.core.first(seq__24155__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__24801 = cljs.core.next(seq__24155__$1);
var G__24802 = null;
var G__24803 = (0);
var G__24804 = (0);
seq__24155 = G__24801;
chunk__24156 = G__24802;
count__24157 = G__24803;
i__24158 = G__24804;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq24147){
var G__24148 = cljs.core.first(seq24147);
var seq24147__$1 = cljs.core.next(seq24147);
var G__24149 = cljs.core.first(seq24147__$1);
var seq24147__$2 = cljs.core.next(seq24147__$1);
var G__24150 = cljs.core.first(seq24147__$2);
var seq24147__$3 = cljs.core.next(seq24147__$2);
var G__24151 = cljs.core.first(seq24147__$3);
var seq24147__$4 = cljs.core.next(seq24147__$3);
var G__24152 = cljs.core.first(seq24147__$4);
var seq24147__$5 = cljs.core.next(seq24147__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24148,G__24149,G__24150,G__24151,G__24152,seq24147__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__24159){
var map__24160 = p__24159;
var map__24160__$1 = (((((!((map__24160 == null))))?(((((map__24160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24160):map__24160);
var m = map__24160__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24160__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__24169 = arguments.length;
switch (G__24169) {
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
var args_arr__4757__auto__ = [];
var len__4736__auto___24806 = arguments.length;
var i__4737__auto___24807 = (0);
while(true){
if((i__4737__auto___24807 < len__4736__auto___24806)){
args_arr__4757__auto__.push((arguments[i__4737__auto___24807]));

var G__24808 = (i__4737__auto___24807 + (1));
i__4737__auto___24807 = G__24808;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

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

var seq__24170_24809 = cljs.core.seq(xs);
var chunk__24171_24810 = null;
var count__24172_24811 = (0);
var i__24173_24812 = (0);
while(true){
if((i__24173_24812 < count__24172_24811)){
var x_24813 = chunk__24171_24810.cljs$core$IIndexed$_nth$arity$2(null,i__24173_24812);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_24813);


var G__24814 = seq__24170_24809;
var G__24815 = chunk__24171_24810;
var G__24816 = count__24172_24811;
var G__24817 = (i__24173_24812 + (1));
seq__24170_24809 = G__24814;
chunk__24171_24810 = G__24815;
count__24172_24811 = G__24816;
i__24173_24812 = G__24817;
continue;
} else {
var temp__5735__auto___24818 = cljs.core.seq(seq__24170_24809);
if(temp__5735__auto___24818){
var seq__24170_24819__$1 = temp__5735__auto___24818;
if(cljs.core.chunked_seq_QMARK_(seq__24170_24819__$1)){
var c__4556__auto___24820 = cljs.core.chunk_first(seq__24170_24819__$1);
var G__24821 = cljs.core.chunk_rest(seq__24170_24819__$1);
var G__24822 = c__4556__auto___24820;
var G__24823 = cljs.core.count(c__4556__auto___24820);
var G__24824 = (0);
seq__24170_24809 = G__24821;
chunk__24171_24810 = G__24822;
count__24172_24811 = G__24823;
i__24173_24812 = G__24824;
continue;
} else {
var x_24825 = cljs.core.first(seq__24170_24819__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_24825);


var G__24826 = cljs.core.next(seq__24170_24819__$1);
var G__24827 = null;
var G__24828 = (0);
var G__24829 = (0);
seq__24170_24809 = G__24826;
chunk__24171_24810 = G__24827;
count__24172_24811 = G__24828;
i__24173_24812 = G__24829;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq24163){
var G__24164 = cljs.core.first(seq24163);
var seq24163__$1 = cljs.core.next(seq24163);
var G__24165 = cljs.core.first(seq24163__$1);
var seq24163__$2 = cljs.core.next(seq24163__$1);
var G__24166 = cljs.core.first(seq24163__$2);
var seq24163__$3 = cljs.core.next(seq24163__$2);
var G__24167 = cljs.core.first(seq24163__$3);
var seq24163__$4 = cljs.core.next(seq24163__$3);
var G__24168 = cljs.core.first(seq24163__$4);
var seq24163__$5 = cljs.core.next(seq24163__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24164,G__24165,G__24166,G__24167,G__24168,seq24163__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24180_24830 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24181_24831 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24182_24832 = true;
var _STAR_print_fn_STAR__temp_val__24183_24833 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24182_24832);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24183_24833);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24181_24831);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24180_24830);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__24184 = cljs.core.get_global_hierarchy;
return (fexpr__24184.cljs$core$IFn$_invoke$arity$0 ? fexpr__24184.cljs$core$IFn$_invoke$arity$0() : fexpr__24184.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__24200 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24200,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24200,(1),null);
var G__24203 = ns;
var G__24204 = name;
var G__24205 = (function (){
var G__24206 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__24206) : cljs.compiler.emit_constant.call(null,G__24206));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__24203,G__24204,G__24205) : cljs.compiler.emit_record_value.call(null,G__24203,G__24204,G__24205));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__24207 = cljs.core.keys(x);
var G__24208 = cljs.core.vals(x);
var G__24209 = cljs.compiler.emit_constants_comma_sep;
var G__24210 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__24207,G__24208,G__24209,G__24210) : cljs.compiler.emit_map.call(null,G__24207,G__24208,G__24209,G__24210));
} else {
if(cljs.analyzer.cljs_vector_QMARK_(x)){
return (cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.analyzer.cljs_set_QMARK_(x)){
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
var G__24211 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__24212 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__24211,G__24212) : cljs.compiler.emit_with_meta.call(null,G__24211,G__24212));
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
var vec__24213 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24213,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24213,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24213,(2),null);
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
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__24219 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__24219) : x.call(null,G__24219));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__24220 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__24220) : x.call(null,G__24220));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
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
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("new Date(",date.getTime(),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_(items)){
var G__24222 = items;
var G__24223 = (function (p1__24221_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__24221_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__24222,G__24223) : cljs.compiler.emit_js_object.call(null,G__24222,G__24223));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__24230){
var map__24231 = p__24230;
var map__24231__$1 = (((((!((map__24231 == null))))?(((((map__24231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24231):map__24231);
var ast = map__24231__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24231__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24231__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24231__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__24233 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__24233__$1 = (((((!((map__24233 == null))))?(((((map__24233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24233):map__24233);
var cenv = map__24233__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24233__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4126__auto__ = js_module_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var reserved = (function (){var G__24235 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__24238 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__24238) : cljs.compiler.es5_GT__EQ_.call(null,G__24238));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__24235,cljs.analyzer.es5_allowed);
} else {
return G__24235;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__24239 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__24239,reserved);
} else {
return G__24239;
}
})();
var env__13757__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__24240_24839 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__24240_24840__$1 = (((G__24240_24839 instanceof cljs.core.Keyword))?G__24240_24839.fqn:null);
switch (G__24240_24840__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__4115__auto__;
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__24241){
var map__24242 = p__24241;
var map__24242__$1 = (((((!((map__24242 == null))))?(((((map__24242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24242):map__24242);
var arg = map__24242__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24242__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24242__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24242__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24242__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));


var map__24244 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__24244__$1 = (((((!((map__24244 == null))))?(((((map__24244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24244):map__24244);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24244__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__13757__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__24249){
var map__24250 = p__24249;
var map__24250__$1 = (((((!((map__24250 == null))))?(((((map__24250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24250):map__24250);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24250__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24250__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24250__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13757__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__24253_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__24253_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__24255 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24255) : comma_sep.call(null,G__24255));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__24256 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24256) : comma_sep.call(null,G__24256));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__24257){
var map__24258 = p__24257;
var map__24258__$1 = (((((!((map__24258 == null))))?(((((map__24258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24258):map__24258);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24258__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24258__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24258__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__13757__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__24260){
var map__24261 = p__24260;
var map__24261__$1 = (((((!((map__24261 == null))))?(((((map__24261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24261):map__24261);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24261__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24261__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13757__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__24263_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__24263_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__24265 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__24265) : comma_sep.call(null,G__24265));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__24266){
var map__24267 = p__24266;
var map__24267__$1 = (((((!((map__24267 == null))))?(((((map__24267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24267):map__24267);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24267__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24267__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13757__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___24857 = cljs.core.seq(items);
if(temp__5735__auto___24857){
var items_24858__$1 = temp__5735__auto___24857;
var vec__24269_24859 = items_24858__$1;
var seq__24270_24860 = cljs.core.seq(vec__24269_24859);
var first__24271_24861 = cljs.core.first(seq__24270_24860);
var seq__24270_24862__$1 = cljs.core.next(seq__24270_24860);
var vec__24272_24863 = first__24271_24861;
var k_24864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24272_24863,(0),null);
var v_24865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24272_24863,(1),null);
var r_24866 = seq__24270_24862__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_24864),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_24865) : emit_js_object_val.call(null,v_24865)));

var seq__24275_24867 = cljs.core.seq(r_24866);
var chunk__24276_24868 = null;
var count__24277_24869 = (0);
var i__24278_24870 = (0);
while(true){
if((i__24278_24870 < count__24277_24869)){
var vec__24286_24871 = chunk__24276_24868.cljs$core$IIndexed$_nth$arity$2(null,i__24278_24870);
var k_24872__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24286_24871,(0),null);
var v_24873__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24286_24871,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_24872__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_24873__$1) : emit_js_object_val.call(null,v_24873__$1)));


var G__24874 = seq__24275_24867;
var G__24875 = chunk__24276_24868;
var G__24876 = count__24277_24869;
var G__24877 = (i__24278_24870 + (1));
seq__24275_24867 = G__24874;
chunk__24276_24868 = G__24875;
count__24277_24869 = G__24876;
i__24278_24870 = G__24877;
continue;
} else {
var temp__5735__auto___24878__$1 = cljs.core.seq(seq__24275_24867);
if(temp__5735__auto___24878__$1){
var seq__24275_24879__$1 = temp__5735__auto___24878__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24275_24879__$1)){
var c__4556__auto___24880 = cljs.core.chunk_first(seq__24275_24879__$1);
var G__24881 = cljs.core.chunk_rest(seq__24275_24879__$1);
var G__24882 = c__4556__auto___24880;
var G__24883 = cljs.core.count(c__4556__auto___24880);
var G__24884 = (0);
seq__24275_24867 = G__24881;
chunk__24276_24868 = G__24882;
count__24277_24869 = G__24883;
i__24278_24870 = G__24884;
continue;
} else {
var vec__24289_24885 = cljs.core.first(seq__24275_24879__$1);
var k_24886__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24289_24885,(0),null);
var v_24887__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24289_24885,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_24886__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_24887__$1) : emit_js_object_val.call(null,v_24887__$1)));


var G__24888 = cljs.core.next(seq__24275_24879__$1);
var G__24889 = null;
var G__24890 = (0);
var G__24891 = (0);
seq__24275_24867 = G__24888;
chunk__24276_24868 = G__24889;
count__24277_24869 = G__24890;
i__24278_24870 = G__24891;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__24292){
var map__24293 = p__24292;
var map__24293__$1 = (((((!((map__24293 == null))))?(((((map__24293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24293):map__24293);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24293__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24293__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24293__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13757__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__24295){
var map__24296 = p__24295;
var map__24296__$1 = (((((!((map__24296 == null))))?(((((map__24296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24296):map__24296);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24296__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24296__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13757__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__24298){
var map__24299 = p__24298;
var map__24299__$1 = (((((!((map__24299 == null))))?(((((map__24299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24299):map__24299);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24299__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__24301){
var map__24302 = p__24301;
var map__24302__$1 = (((((!((map__24302 == null))))?(((((map__24302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24302):map__24302);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24302__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24302__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__13757__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__24304 = cljs.analyzer.unwrap_quote(expr);
var map__24304__$1 = (((((!((map__24304 == null))))?(((((map__24304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24304):map__24304);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24304__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24304__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24304__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842)))?(function (){var and__4115__auto__ = form;
if(cljs.core.truth_(and__4115__auto__)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4115__auto__;
}
})():false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__24307 = cljs.analyzer.unwrap_quote(expr);
var map__24307__$1 = (((((!((map__24307 == null))))?(((((map__24307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24307):map__24307);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24307__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24307__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24307__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__4126__auto__ = (function (){var fexpr__24310 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__24310.cljs$core$IFn$_invoke$arity$1 ? fexpr__24310.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__24310.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__24311){
var map__24312 = p__24311;
var map__24312__$1 = (((((!((map__24312 == null))))?(((((map__24312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24312):map__24312);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24312__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24312__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24312__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24312__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24312__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4126__auto__ = unchecked;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__24314){
var map__24315 = p__24314;
var map__24315__$1 = (((((!((map__24315 == null))))?(((((map__24315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24315):map__24315);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24315__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24315__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24315__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24315__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__24317_24905 = cljs.core.seq(nodes);
var chunk__24318_24906 = null;
var count__24319_24907 = (0);
var i__24320_24908 = (0);
while(true){
if((i__24320_24908 < count__24319_24907)){
var map__24337_24913 = chunk__24318_24906.cljs$core$IIndexed$_nth$arity$2(null,i__24320_24908);
var map__24337_24914__$1 = (((((!((map__24337_24913 == null))))?(((((map__24337_24913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24337_24913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24337_24913):map__24337_24913);
var ts_24915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24337_24914__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__24338_24916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24337_24914__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__24338_24917__$1 = (((((!((map__24338_24916 == null))))?(((((map__24338_24916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24338_24916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24338_24916):map__24338_24916);
var then_24918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24338_24917__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__24341_24926 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_24915));
var chunk__24342_24927 = null;
var count__24343_24928 = (0);
var i__24344_24929 = (0);
while(true){
if((i__24344_24929 < count__24343_24928)){
var test_24932 = chunk__24342_24927.cljs$core$IIndexed$_nth$arity$2(null,i__24344_24929);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_24932,":");


var G__24938 = seq__24341_24926;
var G__24939 = chunk__24342_24927;
var G__24940 = count__24343_24928;
var G__24941 = (i__24344_24929 + (1));
seq__24341_24926 = G__24938;
chunk__24342_24927 = G__24939;
count__24343_24928 = G__24940;
i__24344_24929 = G__24941;
continue;
} else {
var temp__5735__auto___24945 = cljs.core.seq(seq__24341_24926);
if(temp__5735__auto___24945){
var seq__24341_24946__$1 = temp__5735__auto___24945;
if(cljs.core.chunked_seq_QMARK_(seq__24341_24946__$1)){
var c__4556__auto___24947 = cljs.core.chunk_first(seq__24341_24946__$1);
var G__24948 = cljs.core.chunk_rest(seq__24341_24946__$1);
var G__24949 = c__4556__auto___24947;
var G__24950 = cljs.core.count(c__4556__auto___24947);
var G__24951 = (0);
seq__24341_24926 = G__24948;
chunk__24342_24927 = G__24949;
count__24343_24928 = G__24950;
i__24344_24929 = G__24951;
continue;
} else {
var test_24952 = cljs.core.first(seq__24341_24946__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_24952,":");


var G__24957 = cljs.core.next(seq__24341_24946__$1);
var G__24958 = null;
var G__24959 = (0);
var G__24960 = (0);
seq__24341_24926 = G__24957;
chunk__24342_24927 = G__24958;
count__24343_24928 = G__24959;
i__24344_24929 = G__24960;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_24918);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_24918);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__24961 = seq__24317_24905;
var G__24962 = chunk__24318_24906;
var G__24963 = count__24319_24907;
var G__24964 = (i__24320_24908 + (1));
seq__24317_24905 = G__24961;
chunk__24318_24906 = G__24962;
count__24319_24907 = G__24963;
i__24320_24908 = G__24964;
continue;
} else {
var temp__5735__auto___24965 = cljs.core.seq(seq__24317_24905);
if(temp__5735__auto___24965){
var seq__24317_24966__$1 = temp__5735__auto___24965;
if(cljs.core.chunked_seq_QMARK_(seq__24317_24966__$1)){
var c__4556__auto___24967 = cljs.core.chunk_first(seq__24317_24966__$1);
var G__24968 = cljs.core.chunk_rest(seq__24317_24966__$1);
var G__24969 = c__4556__auto___24967;
var G__24970 = cljs.core.count(c__4556__auto___24967);
var G__24971 = (0);
seq__24317_24905 = G__24968;
chunk__24318_24906 = G__24969;
count__24319_24907 = G__24970;
i__24320_24908 = G__24971;
continue;
} else {
var map__24345_24972 = cljs.core.first(seq__24317_24966__$1);
var map__24345_24973__$1 = (((((!((map__24345_24972 == null))))?(((((map__24345_24972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24345_24972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24345_24972):map__24345_24972);
var ts_24974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24345_24973__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__24346_24975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24345_24973__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__24346_24976__$1 = (((((!((map__24346_24975 == null))))?(((((map__24346_24975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24346_24975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24346_24975):map__24346_24975);
var then_24977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24346_24976__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__24349_24978 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_24974));
var chunk__24350_24979 = null;
var count__24351_24980 = (0);
var i__24352_24981 = (0);
while(true){
if((i__24352_24981 < count__24351_24980)){
var test_24982 = chunk__24350_24979.cljs$core$IIndexed$_nth$arity$2(null,i__24352_24981);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_24982,":");


var G__24983 = seq__24349_24978;
var G__24984 = chunk__24350_24979;
var G__24985 = count__24351_24980;
var G__24986 = (i__24352_24981 + (1));
seq__24349_24978 = G__24983;
chunk__24350_24979 = G__24984;
count__24351_24980 = G__24985;
i__24352_24981 = G__24986;
continue;
} else {
var temp__5735__auto___24987__$1 = cljs.core.seq(seq__24349_24978);
if(temp__5735__auto___24987__$1){
var seq__24349_24988__$1 = temp__5735__auto___24987__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24349_24988__$1)){
var c__4556__auto___24989 = cljs.core.chunk_first(seq__24349_24988__$1);
var G__24990 = cljs.core.chunk_rest(seq__24349_24988__$1);
var G__24991 = c__4556__auto___24989;
var G__24992 = cljs.core.count(c__4556__auto___24989);
var G__24993 = (0);
seq__24349_24978 = G__24990;
chunk__24350_24979 = G__24991;
count__24351_24980 = G__24992;
i__24352_24981 = G__24993;
continue;
} else {
var test_24994 = cljs.core.first(seq__24349_24988__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_24994,":");


var G__24995 = cljs.core.next(seq__24349_24988__$1);
var G__24996 = null;
var G__24997 = (0);
var G__24998 = (0);
seq__24349_24978 = G__24995;
chunk__24350_24979 = G__24996;
count__24351_24980 = G__24997;
i__24352_24981 = G__24998;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_24977);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_24977);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__24999 = cljs.core.next(seq__24317_24966__$1);
var G__25000 = null;
var G__25001 = (0);
var G__25002 = (0);
seq__24317_24905 = G__24999;
chunk__24318_24906 = G__25000;
count__24319_24907 = G__25001;
i__24320_24908 = G__25002;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__24353){
var map__24354 = p__24353;
var map__24354__$1 = (((((!((map__24354 == null))))?(((((map__24354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24354):map__24354);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24354__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24354__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__24359 = env;
var G__24360 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__24359,G__24360) : cljs.compiler.resolve_type.call(null,G__24359,G__24360));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__24361 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24361,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24361,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__24356_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__24356_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__24356_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__24367 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__24367,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__24367;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__24370 = env;
var G__24371 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__24370,G__24371) : cljs.compiler.resolve_type.call(null,G__24370,G__24371));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24372_SHARP_){
return cljs.compiler.resolve_type(env,p1__24372_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__24380 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__24381 = cljs.core.seq(vec__24380);
var first__24382 = cljs.core.first(seq__24381);
var seq__24381__$1 = cljs.core.next(seq__24381);
var p = first__24382;
var first__24382__$1 = cljs.core.first(seq__24381__$1);
var seq__24381__$2 = cljs.core.next(seq__24381__$1);
var ts = first__24382__$1;
var first__24382__$2 = cljs.core.first(seq__24381__$2);
var seq__24381__$3 = cljs.core.next(seq__24381__$2);
var n = first__24382__$2;
var xs = seq__24381__$3;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__24383 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__24384 = cljs.core.seq(vec__24383);
var first__24385 = cljs.core.first(seq__24384);
var seq__24384__$1 = cljs.core.next(seq__24384);
var p = first__24385;
var first__24385__$1 = cljs.core.first(seq__24384__$1);
var seq__24384__$2 = cljs.core.next(seq__24384__$1);
var ts = first__24385__$1;
var xs = seq__24384__$2;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
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
var G__24389 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__24388 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__24388.cljs$core$IFn$_invoke$arity$1 ? fexpr__24388.cljs$core$IFn$_invoke$arity$1(G__24389) : fexpr__24388.call(null,G__24389));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__24392 = arguments.length;
switch (G__24392) {
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
var vec__24400 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24390_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__24390_SHARP_);
} else {
return p1__24390_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__24401 = cljs.core.seq(vec__24400);
var first__24402 = cljs.core.first(seq__24401);
var seq__24401__$1 = cljs.core.next(seq__24401);
var x = first__24402;
var ys = seq__24401__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__24403 = cljs.core.seq(ys);
var chunk__24404 = null;
var count__24405 = (0);
var i__24406 = (0);
while(true){
if((i__24406 < count__24405)){
var next_line = chunk__24404.cljs$core$IIndexed$_nth$arity$2(null,i__24406);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__25004 = seq__24403;
var G__25005 = chunk__24404;
var G__25006 = count__24405;
var G__25007 = (i__24406 + (1));
seq__24403 = G__25004;
chunk__24404 = G__25005;
count__24405 = G__25006;
i__24406 = G__25007;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24403);
if(temp__5735__auto__){
var seq__24403__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24403__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24403__$1);
var G__25008 = cljs.core.chunk_rest(seq__24403__$1);
var G__25009 = c__4556__auto__;
var G__25010 = cljs.core.count(c__4556__auto__);
var G__25011 = (0);
seq__24403 = G__25008;
chunk__24404 = G__25009;
count__24405 = G__25010;
i__24406 = G__25011;
continue;
} else {
var next_line = cljs.core.first(seq__24403__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__25012 = cljs.core.next(seq__24403__$1);
var G__25013 = null;
var G__25014 = (0);
var G__25015 = (0);
seq__24403 = G__25012;
chunk__24404 = G__25013;
count__24405 = G__25014;
i__24406 = G__25015;
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

var seq__24407_25016 = cljs.core.seq(docs__$2);
var chunk__24408_25017 = null;
var count__24409_25018 = (0);
var i__24410_25019 = (0);
while(true){
if((i__24410_25019 < count__24409_25018)){
var e_25020 = chunk__24408_25017.cljs$core$IIndexed$_nth$arity$2(null,i__24410_25019);
if(cljs.core.truth_(e_25020)){
print_comment_lines(e_25020);
} else {
}


var G__25021 = seq__24407_25016;
var G__25022 = chunk__24408_25017;
var G__25023 = count__24409_25018;
var G__25024 = (i__24410_25019 + (1));
seq__24407_25016 = G__25021;
chunk__24408_25017 = G__25022;
count__24409_25018 = G__25023;
i__24410_25019 = G__25024;
continue;
} else {
var temp__5735__auto___25025 = cljs.core.seq(seq__24407_25016);
if(temp__5735__auto___25025){
var seq__24407_25026__$1 = temp__5735__auto___25025;
if(cljs.core.chunked_seq_QMARK_(seq__24407_25026__$1)){
var c__4556__auto___25027 = cljs.core.chunk_first(seq__24407_25026__$1);
var G__25028 = cljs.core.chunk_rest(seq__24407_25026__$1);
var G__25029 = c__4556__auto___25027;
var G__25030 = cljs.core.count(c__4556__auto___25027);
var G__25031 = (0);
seq__24407_25016 = G__25028;
chunk__24408_25017 = G__25029;
count__24409_25018 = G__25030;
i__24410_25019 = G__25031;
continue;
} else {
var e_25032 = cljs.core.first(seq__24407_25026__$1);
if(cljs.core.truth_(e_25032)){
print_comment_lines(e_25032);
} else {
}


var G__25033 = cljs.core.next(seq__24407_25026__$1);
var G__25034 = null;
var G__25035 = (0);
var G__25036 = (0);
seq__24407_25016 = G__25033;
chunk__24408_25017 = G__25034;
count__24409_25018 = G__25035;
i__24410_25019 = G__25036;
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
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4115__auto__ = cljs.core.some((function (p1__24412_SHARP_){
return goog.string.startsWith(p1__24412_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = opts;
if(cljs.core.truth_(and__4115__auto____$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478))){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_(define)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return false;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__24427){
var map__24428 = p__24427;
var map__24428__$1 = (((((!((map__24428 == null))))?(((((map__24428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24428):map__24428);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24428__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24428__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24428__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24428__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24428__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24428__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24428__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24428__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24428__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24428__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4126__auto__ = init;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(" = ",(function (){var temp__5733__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5733__auto__)){
var define = temp__5733__auto__;
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

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return test;
} else {
return and__4115__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__24430){
var map__24431 = p__24430;
var map__24431__$1 = (((((!((map__24431 == null))))?(((((map__24431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24431):map__24431);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24431__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24431__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24431__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__24433_25068 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__24434_25069 = null;
var count__24435_25070 = (0);
var i__24436_25071 = (0);
while(true){
if((i__24436_25071 < count__24435_25070)){
var vec__24443_25076 = chunk__24434_25069.cljs$core$IIndexed$_nth$arity$2(null,i__24436_25071);
var i_25077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24443_25076,(0),null);
var param_25078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24443_25076,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_25078);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__25102 = seq__24433_25068;
var G__25103 = chunk__24434_25069;
var G__25104 = count__24435_25070;
var G__25105 = (i__24436_25071 + (1));
seq__24433_25068 = G__25102;
chunk__24434_25069 = G__25103;
count__24435_25070 = G__25104;
i__24436_25071 = G__25105;
continue;
} else {
var temp__5735__auto___25106 = cljs.core.seq(seq__24433_25068);
if(temp__5735__auto___25106){
var seq__24433_25107__$1 = temp__5735__auto___25106;
if(cljs.core.chunked_seq_QMARK_(seq__24433_25107__$1)){
var c__4556__auto___25108 = cljs.core.chunk_first(seq__24433_25107__$1);
var G__25109 = cljs.core.chunk_rest(seq__24433_25107__$1);
var G__25110 = c__4556__auto___25108;
var G__25111 = cljs.core.count(c__4556__auto___25108);
var G__25112 = (0);
seq__24433_25068 = G__25109;
chunk__24434_25069 = G__25110;
count__24435_25070 = G__25111;
i__24436_25071 = G__25112;
continue;
} else {
var vec__24446_25113 = cljs.core.first(seq__24433_25107__$1);
var i_25114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24446_25113,(0),null);
var param_25115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24446_25113,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_25115);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__25116 = cljs.core.next(seq__24433_25107__$1);
var G__25117 = null;
var G__25118 = (0);
var G__25119 = (0);
seq__24433_25068 = G__25116;
chunk__24434_25069 = G__25117;
count__24435_25070 = G__25118;
i__24436_25071 = G__25119;
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

var seq__24449_25120 = cljs.core.seq(params);
var chunk__24450_25121 = null;
var count__24451_25122 = (0);
var i__24452_25123 = (0);
while(true){
if((i__24452_25123 < count__24451_25122)){
var param_25124 = chunk__24450_25121.cljs$core$IIndexed$_nth$arity$2(null,i__24452_25123);
cljs.compiler.emit(param_25124);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25124,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25129 = seq__24449_25120;
var G__25130 = chunk__24450_25121;
var G__25131 = count__24451_25122;
var G__25132 = (i__24452_25123 + (1));
seq__24449_25120 = G__25129;
chunk__24450_25121 = G__25130;
count__24451_25122 = G__25131;
i__24452_25123 = G__25132;
continue;
} else {
var temp__5735__auto___25133 = cljs.core.seq(seq__24449_25120);
if(temp__5735__auto___25133){
var seq__24449_25138__$1 = temp__5735__auto___25133;
if(cljs.core.chunked_seq_QMARK_(seq__24449_25138__$1)){
var c__4556__auto___25139 = cljs.core.chunk_first(seq__24449_25138__$1);
var G__25140 = cljs.core.chunk_rest(seq__24449_25138__$1);
var G__25141 = c__4556__auto___25139;
var G__25142 = cljs.core.count(c__4556__auto___25139);
var G__25143 = (0);
seq__24449_25120 = G__25140;
chunk__24450_25121 = G__25141;
count__24451_25122 = G__25142;
i__24452_25123 = G__25143;
continue;
} else {
var param_25144 = cljs.core.first(seq__24449_25138__$1);
cljs.compiler.emit(param_25144);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25144,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25145 = cljs.core.next(seq__24449_25138__$1);
var G__25146 = null;
var G__25147 = (0);
var G__25148 = (0);
seq__24449_25120 = G__25145;
chunk__24450_25121 = G__25146;
count__24451_25122 = G__25147;
i__24452_25123 = G__25148;
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

var seq__24453_25153 = cljs.core.seq(params);
var chunk__24454_25154 = null;
var count__24455_25155 = (0);
var i__24456_25156 = (0);
while(true){
if((i__24456_25156 < count__24455_25155)){
var param_25157 = chunk__24454_25154.cljs$core$IIndexed$_nth$arity$2(null,i__24456_25156);
cljs.compiler.emit(param_25157);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25157,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25158 = seq__24453_25153;
var G__25159 = chunk__24454_25154;
var G__25160 = count__24455_25155;
var G__25161 = (i__24456_25156 + (1));
seq__24453_25153 = G__25158;
chunk__24454_25154 = G__25159;
count__24455_25155 = G__25160;
i__24456_25156 = G__25161;
continue;
} else {
var temp__5735__auto___25162 = cljs.core.seq(seq__24453_25153);
if(temp__5735__auto___25162){
var seq__24453_25163__$1 = temp__5735__auto___25162;
if(cljs.core.chunked_seq_QMARK_(seq__24453_25163__$1)){
var c__4556__auto___25164 = cljs.core.chunk_first(seq__24453_25163__$1);
var G__25165 = cljs.core.chunk_rest(seq__24453_25163__$1);
var G__25166 = c__4556__auto___25164;
var G__25167 = cljs.core.count(c__4556__auto___25164);
var G__25168 = (0);
seq__24453_25153 = G__25165;
chunk__24454_25154 = G__25166;
count__24455_25155 = G__25167;
i__24456_25156 = G__25168;
continue;
} else {
var param_25169 = cljs.core.first(seq__24453_25163__$1);
cljs.compiler.emit(param_25169);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25169,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25170 = cljs.core.next(seq__24453_25163__$1);
var G__25171 = null;
var G__25172 = (0);
var G__25173 = (0);
seq__24453_25153 = G__25170;
chunk__24454_25154 = G__25171;
count__24455_25155 = G__25172;
i__24456_25156 = G__25173;
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
var seq__24458 = cljs.core.seq(params);
var chunk__24459 = null;
var count__24460 = (0);
var i__24461 = (0);
while(true){
if((i__24461 < count__24460)){
var param = chunk__24459.cljs$core$IIndexed$_nth$arity$2(null,i__24461);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25176 = seq__24458;
var G__25177 = chunk__24459;
var G__25178 = count__24460;
var G__25179 = (i__24461 + (1));
seq__24458 = G__25176;
chunk__24459 = G__25177;
count__24460 = G__25178;
i__24461 = G__25179;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24458);
if(temp__5735__auto__){
var seq__24458__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24458__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24458__$1);
var G__25180 = cljs.core.chunk_rest(seq__24458__$1);
var G__25181 = c__4556__auto__;
var G__25182 = cljs.core.count(c__4556__auto__);
var G__25183 = (0);
seq__24458 = G__25180;
chunk__24459 = G__25181;
count__24460 = G__25182;
i__24461 = G__25183;
continue;
} else {
var param = cljs.core.first(seq__24458__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25184 = cljs.core.next(seq__24458__$1);
var G__25185 = null;
var G__25186 = (0);
var G__25187 = (0);
seq__24458 = G__25184;
chunk__24459 = G__25185;
count__24460 = G__25186;
i__24461 = G__25187;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__24462){
var map__24463 = p__24462;
var map__24463__$1 = (((((!((map__24463 == null))))?(((((map__24463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24463):map__24463);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24463__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24463__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24463__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24463__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24463__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24463__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__13757__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__24465){
var map__24466 = p__24465;
var map__24466__$1 = (((((!((map__24466 == null))))?(((((map__24466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24466):map__24466);
var f = map__24466__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24466__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24466__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24466__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24466__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24466__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24466__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24466__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24466__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__13757__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_25194__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_25195 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_25194__$1);
var delegate_name_25196 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_25195),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_25196," = function (");

var seq__24468_25201 = cljs.core.seq(params);
var chunk__24469_25202 = null;
var count__24470_25203 = (0);
var i__24471_25204 = (0);
while(true){
if((i__24471_25204 < count__24470_25203)){
var param_25209 = chunk__24469_25202.cljs$core$IIndexed$_nth$arity$2(null,i__24471_25204);
cljs.compiler.emit(param_25209);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25209,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25210 = seq__24468_25201;
var G__25211 = chunk__24469_25202;
var G__25212 = count__24470_25203;
var G__25213 = (i__24471_25204 + (1));
seq__24468_25201 = G__25210;
chunk__24469_25202 = G__25211;
count__24470_25203 = G__25212;
i__24471_25204 = G__25213;
continue;
} else {
var temp__5735__auto___25217 = cljs.core.seq(seq__24468_25201);
if(temp__5735__auto___25217){
var seq__24468_25218__$1 = temp__5735__auto___25217;
if(cljs.core.chunked_seq_QMARK_(seq__24468_25218__$1)){
var c__4556__auto___25219 = cljs.core.chunk_first(seq__24468_25218__$1);
var G__25220 = cljs.core.chunk_rest(seq__24468_25218__$1);
var G__25221 = c__4556__auto___25219;
var G__25222 = cljs.core.count(c__4556__auto___25219);
var G__25223 = (0);
seq__24468_25201 = G__25220;
chunk__24469_25202 = G__25221;
count__24470_25203 = G__25222;
i__24471_25204 = G__25223;
continue;
} else {
var param_25224 = cljs.core.first(seq__24468_25218__$1);
cljs.compiler.emit(param_25224);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25224,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25225 = cljs.core.next(seq__24468_25218__$1);
var G__25226 = null;
var G__25227 = (0);
var G__25228 = (0);
seq__24468_25201 = G__25225;
chunk__24469_25202 = G__25226;
count__24470_25203 = G__25227;
i__24471_25204 = G__25228;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_25195," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_25235 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_25235,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_25196,".call(this,");

var seq__24476_25237 = cljs.core.seq(params);
var chunk__24477_25238 = null;
var count__24478_25239 = (0);
var i__24479_25240 = (0);
while(true){
if((i__24479_25240 < count__24478_25239)){
var param_25241 = chunk__24477_25238.cljs$core$IIndexed$_nth$arity$2(null,i__24479_25240);
cljs.compiler.emit(param_25241);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25241,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25242 = seq__24476_25237;
var G__25243 = chunk__24477_25238;
var G__25244 = count__24478_25239;
var G__25245 = (i__24479_25240 + (1));
seq__24476_25237 = G__25242;
chunk__24477_25238 = G__25243;
count__24478_25239 = G__25244;
i__24479_25240 = G__25245;
continue;
} else {
var temp__5735__auto___25246 = cljs.core.seq(seq__24476_25237);
if(temp__5735__auto___25246){
var seq__24476_25247__$1 = temp__5735__auto___25246;
if(cljs.core.chunked_seq_QMARK_(seq__24476_25247__$1)){
var c__4556__auto___25248 = cljs.core.chunk_first(seq__24476_25247__$1);
var G__25249 = cljs.core.chunk_rest(seq__24476_25247__$1);
var G__25250 = c__4556__auto___25248;
var G__25251 = cljs.core.count(c__4556__auto___25248);
var G__25252 = (0);
seq__24476_25237 = G__25249;
chunk__24477_25238 = G__25250;
count__24478_25239 = G__25251;
i__24479_25240 = G__25252;
continue;
} else {
var param_25253 = cljs.core.first(seq__24476_25247__$1);
cljs.compiler.emit(param_25253);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_25253,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__25254 = cljs.core.next(seq__24476_25247__$1);
var G__25255 = null;
var G__25256 = (0);
var G__25257 = (0);
seq__24476_25237 = G__25254;
chunk__24477_25238 = G__25255;
count__24478_25239 = G__25256;
i__24479_25240 = G__25257;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25195,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_25195,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_25194__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25195,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_25196,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_25195,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__24483){
var map__24484 = p__24483;
var map__24484__$1 = (((((!((map__24484 == null))))?(((((map__24484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24484):map__24484);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24484__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24484__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24484__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24484__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24484__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24484__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24484__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24484__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24480_SHARP_){
var and__4115__auto__ = p1__24480_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__24480_SHARP_));
} else {
return and__4115__auto__;
}
}),recur_frames)], 0));
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(recur_params,(cljs.core.truth_((function (){var or__4126__auto__ = in_loop;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var name_25260__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_25261 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_25260__$1);
var maxparams_25262 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_25263 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_25261),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_25264 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__24481_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__24481_SHARP_)));
}),cljs.core.seq(mmap_25263));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_25261," = null;");

var seq__24486_25265 = cljs.core.seq(ms_25264);
var chunk__24487_25266 = null;
var count__24488_25267 = (0);
var i__24489_25268 = (0);
while(true){
if((i__24489_25268 < count__24488_25267)){
var vec__24496_25269 = chunk__24487_25266.cljs$core$IIndexed$_nth$arity$2(null,i__24489_25268);
var n_25270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24496_25269,(0),null);
var meth_25271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24496_25269,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_25270," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25271))){
cljs.compiler.emit_variadic_fn_method(meth_25271);
} else {
cljs.compiler.emit_fn_method(meth_25271);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__25272 = seq__24486_25265;
var G__25273 = chunk__24487_25266;
var G__25274 = count__24488_25267;
var G__25275 = (i__24489_25268 + (1));
seq__24486_25265 = G__25272;
chunk__24487_25266 = G__25273;
count__24488_25267 = G__25274;
i__24489_25268 = G__25275;
continue;
} else {
var temp__5735__auto___25276 = cljs.core.seq(seq__24486_25265);
if(temp__5735__auto___25276){
var seq__24486_25277__$1 = temp__5735__auto___25276;
if(cljs.core.chunked_seq_QMARK_(seq__24486_25277__$1)){
var c__4556__auto___25278 = cljs.core.chunk_first(seq__24486_25277__$1);
var G__25279 = cljs.core.chunk_rest(seq__24486_25277__$1);
var G__25280 = c__4556__auto___25278;
var G__25281 = cljs.core.count(c__4556__auto___25278);
var G__25282 = (0);
seq__24486_25265 = G__25279;
chunk__24487_25266 = G__25280;
count__24488_25267 = G__25281;
i__24489_25268 = G__25282;
continue;
} else {
var vec__24507_25283 = cljs.core.first(seq__24486_25277__$1);
var n_25284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24507_25283,(0),null);
var meth_25285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24507_25283,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_25284," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25285))){
cljs.compiler.emit_variadic_fn_method(meth_25285);
} else {
cljs.compiler.emit_fn_method(meth_25285);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__25286 = cljs.core.next(seq__24486_25277__$1);
var G__25287 = null;
var G__25288 = (0);
var G__25289 = (0);
seq__24486_25265 = G__25286;
chunk__24487_25266 = G__25287;
count__24488_25267 = G__25288;
i__24489_25268 = G__25289;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25261," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_25262),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_25262)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_25262));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__24510_25290 = cljs.core.seq(ms_25264);
var chunk__24511_25291 = null;
var count__24512_25292 = (0);
var i__24513_25293 = (0);
while(true){
if((i__24513_25293 < count__24512_25292)){
var vec__24520_25294 = chunk__24511_25291.cljs$core$IIndexed$_nth$arity$2(null,i__24513_25293);
var n_25295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24520_25294,(0),null);
var meth_25296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24520_25294,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25296))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_25297 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_25297," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_25298 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_25297," = new cljs.core.IndexedSeq(",a_25298,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_25295,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_25262)),(((cljs.core.count(maxparams_25262) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_25297,");"], 0));
} else {
var pcnt_25299 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25296));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_25299,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_25295,".call(this",(((pcnt_25299 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_25299,maxparams_25262)),null,(1),null)),(2),null))),");");
}


var G__25305 = seq__24510_25290;
var G__25306 = chunk__24511_25291;
var G__25307 = count__24512_25292;
var G__25308 = (i__24513_25293 + (1));
seq__24510_25290 = G__25305;
chunk__24511_25291 = G__25306;
count__24512_25292 = G__25307;
i__24513_25293 = G__25308;
continue;
} else {
var temp__5735__auto___25309 = cljs.core.seq(seq__24510_25290);
if(temp__5735__auto___25309){
var seq__24510_25310__$1 = temp__5735__auto___25309;
if(cljs.core.chunked_seq_QMARK_(seq__24510_25310__$1)){
var c__4556__auto___25311 = cljs.core.chunk_first(seq__24510_25310__$1);
var G__25312 = cljs.core.chunk_rest(seq__24510_25310__$1);
var G__25313 = c__4556__auto___25311;
var G__25314 = cljs.core.count(c__4556__auto___25311);
var G__25315 = (0);
seq__24510_25290 = G__25312;
chunk__24511_25291 = G__25313;
count__24512_25292 = G__25314;
i__24513_25293 = G__25315;
continue;
} else {
var vec__24524_25316 = cljs.core.first(seq__24510_25310__$1);
var n_25317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24524_25316,(0),null);
var meth_25318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24524_25316,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25318))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_25319 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_25319," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_25320 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_25319," = new cljs.core.IndexedSeq(",a_25320,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_25317,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_25262)),(((cljs.core.count(maxparams_25262) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_25319,");"], 0));
} else {
var pcnt_25321 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25318));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_25321,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_25317,".call(this",(((pcnt_25321 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_25321,maxparams_25262)),null,(1),null)),(2),null))),");");
}


var G__25322 = cljs.core.next(seq__24510_25310__$1);
var G__25323 = null;
var G__25324 = (0);
var G__25325 = (0);
seq__24510_25290 = G__25322;
chunk__24511_25291 = G__25323;
count__24512_25292 = G__25324;
i__24513_25293 = G__25325;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_25326 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_25264)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_25326,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25261,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25261,".cljs$lang$applyTo = ",cljs.core.some((function (p1__24482_SHARP_){
var vec__24527 = p1__24482_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24527,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24527,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_25264),".cljs$lang$applyTo;");
} else {
}

var seq__24530_25327 = cljs.core.seq(ms_25264);
var chunk__24531_25328 = null;
var count__24532_25329 = (0);
var i__24533_25330 = (0);
while(true){
if((i__24533_25330 < count__24532_25329)){
var vec__24540_25331 = chunk__24531_25328.cljs$core$IIndexed$_nth$arity$2(null,i__24533_25330);
var n_25332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24540_25331,(0),null);
var meth_25333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24540_25331,(1),null);
var c_25334 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25333));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25333))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25261,".cljs$core$IFn$_invoke$arity$variadic = ",n_25332,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_25261,".cljs$core$IFn$_invoke$arity$",c_25334," = ",n_25332,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__25335 = seq__24530_25327;
var G__25336 = chunk__24531_25328;
var G__25337 = count__24532_25329;
var G__25338 = (i__24533_25330 + (1));
seq__24530_25327 = G__25335;
chunk__24531_25328 = G__25336;
count__24532_25329 = G__25337;
i__24533_25330 = G__25338;
continue;
} else {
var temp__5735__auto___25339 = cljs.core.seq(seq__24530_25327);
if(temp__5735__auto___25339){
var seq__24530_25340__$1 = temp__5735__auto___25339;
if(cljs.core.chunked_seq_QMARK_(seq__24530_25340__$1)){
var c__4556__auto___25341 = cljs.core.chunk_first(seq__24530_25340__$1);
var G__25342 = cljs.core.chunk_rest(seq__24530_25340__$1);
var G__25343 = c__4556__auto___25341;
var G__25344 = cljs.core.count(c__4556__auto___25341);
var G__25345 = (0);
seq__24530_25327 = G__25342;
chunk__24531_25328 = G__25343;
count__24532_25329 = G__25344;
i__24533_25330 = G__25345;
continue;
} else {
var vec__24543_25346 = cljs.core.first(seq__24530_25340__$1);
var n_25347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24543_25346,(0),null);
var meth_25348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24543_25346,(1),null);
var c_25349 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_25348));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_25348))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_25261,".cljs$core$IFn$_invoke$arity$variadic = ",n_25347,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_25261,".cljs$core$IFn$_invoke$arity$",c_25349," = ",n_25347,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__25350 = cljs.core.next(seq__24530_25340__$1);
var G__25351 = null;
var G__25352 = (0);
var G__25353 = (0);
seq__24530_25327 = G__25350;
chunk__24531_25328 = G__25351;
count__24532_25329 = G__25352;
i__24533_25330 = G__25353;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_25261,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__24546){
var map__24547 = p__24546;
var map__24547__$1 = (((((!((map__24547 == null))))?(((((map__24547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24547):map__24547);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24547__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24547__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24547__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__24549_25362 = cljs.core.seq(statements);
var chunk__24550_25363 = null;
var count__24551_25364 = (0);
var i__24552_25365 = (0);
while(true){
if((i__24552_25365 < count__24551_25364)){
var s_25366 = chunk__24550_25363.cljs$core$IIndexed$_nth$arity$2(null,i__24552_25365);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_25366);


var G__25367 = seq__24549_25362;
var G__25368 = chunk__24550_25363;
var G__25369 = count__24551_25364;
var G__25370 = (i__24552_25365 + (1));
seq__24549_25362 = G__25367;
chunk__24550_25363 = G__25368;
count__24551_25364 = G__25369;
i__24552_25365 = G__25370;
continue;
} else {
var temp__5735__auto___25371 = cljs.core.seq(seq__24549_25362);
if(temp__5735__auto___25371){
var seq__24549_25372__$1 = temp__5735__auto___25371;
if(cljs.core.chunked_seq_QMARK_(seq__24549_25372__$1)){
var c__4556__auto___25373 = cljs.core.chunk_first(seq__24549_25372__$1);
var G__25374 = cljs.core.chunk_rest(seq__24549_25372__$1);
var G__25375 = c__4556__auto___25373;
var G__25376 = cljs.core.count(c__4556__auto___25373);
var G__25377 = (0);
seq__24549_25362 = G__25374;
chunk__24550_25363 = G__25375;
count__24551_25364 = G__25376;
i__24552_25365 = G__25377;
continue;
} else {
var s_25378 = cljs.core.first(seq__24549_25372__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_25378);


var G__25379 = cljs.core.next(seq__24549_25372__$1);
var G__25380 = null;
var G__25381 = (0);
var G__25382 = (0);
seq__24549_25362 = G__25379;
chunk__24550_25363 = G__25380;
count__24551_25364 = G__25381;
i__24552_25365 = G__25382;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__24554){
var map__24555 = p__24554;
var map__24555__$1 = (((((!((map__24555 == null))))?(((((map__24555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24555):map__24555);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24555__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24555__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24555__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24555__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24555__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__24561,is_loop){
var map__24562 = p__24561;
var map__24562__$1 = (((((!((map__24562 == null))))?(((((map__24562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24562):map__24562);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24562__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24562__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24562__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__24564_25385 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__24565_25386 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__24565_25386);

try{var seq__24566_25388 = cljs.core.seq(bindings);
var chunk__24567_25389 = null;
var count__24568_25390 = (0);
var i__24569_25391 = (0);
while(true){
if((i__24569_25391 < count__24568_25390)){
var map__24574_25392 = chunk__24567_25389.cljs$core$IIndexed$_nth$arity$2(null,i__24569_25391);
var map__24574_25393__$1 = (((((!((map__24574_25392 == null))))?(((((map__24574_25392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24574_25392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24574_25392):map__24574_25392);
var binding_25394 = map__24574_25393__$1;
var init_25395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24574_25393__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_25394);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_25395,";");


var G__25396 = seq__24566_25388;
var G__25397 = chunk__24567_25389;
var G__25398 = count__24568_25390;
var G__25399 = (i__24569_25391 + (1));
seq__24566_25388 = G__25396;
chunk__24567_25389 = G__25397;
count__24568_25390 = G__25398;
i__24569_25391 = G__25399;
continue;
} else {
var temp__5735__auto___25400 = cljs.core.seq(seq__24566_25388);
if(temp__5735__auto___25400){
var seq__24566_25401__$1 = temp__5735__auto___25400;
if(cljs.core.chunked_seq_QMARK_(seq__24566_25401__$1)){
var c__4556__auto___25402 = cljs.core.chunk_first(seq__24566_25401__$1);
var G__25403 = cljs.core.chunk_rest(seq__24566_25401__$1);
var G__25404 = c__4556__auto___25402;
var G__25405 = cljs.core.count(c__4556__auto___25402);
var G__25406 = (0);
seq__24566_25388 = G__25403;
chunk__24567_25389 = G__25404;
count__24568_25390 = G__25405;
i__24569_25391 = G__25406;
continue;
} else {
var map__24576_25407 = cljs.core.first(seq__24566_25401__$1);
var map__24576_25408__$1 = (((((!((map__24576_25407 == null))))?(((((map__24576_25407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24576_25407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24576_25407):map__24576_25407);
var binding_25409 = map__24576_25408__$1;
var init_25410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24576_25408__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_25409);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_25410,";");


var G__25411 = cljs.core.next(seq__24566_25401__$1);
var G__25412 = null;
var G__25413 = (0);
var G__25414 = (0);
seq__24566_25388 = G__25411;
chunk__24567_25389 = G__25412;
count__24568_25390 = G__25413;
i__24569_25391 = G__25414;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__24564_25385);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__24578){
var map__24579 = p__24578;
var map__24579__$1 = (((((!((map__24579 == null))))?(((((map__24579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24579):map__24579);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24579__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24579__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24579__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___25415 = cljs.core.count(exprs);
var i_25416 = (0);
while(true){
if((i_25416 < n__4613__auto___25415)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_25416) : temps.call(null,i_25416))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_25416) : exprs.call(null,i_25416)),";");

var G__25417 = (i_25416 + (1));
i_25416 = G__25417;
continue;
} else {
}
break;
}

var n__4613__auto___25418 = cljs.core.count(exprs);
var i_25419 = (0);
while(true){
if((i_25419 < n__4613__auto___25418)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_25419) : params.call(null,i_25419)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_25419) : temps.call(null,i_25419)),";");

var G__25420 = (i_25419 + (1));
i_25419 = G__25420;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__24581){
var map__24582 = p__24581;
var map__24582__$1 = (((((!((map__24582 == null))))?(((((map__24582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24582):map__24582);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24582__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24582__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24582__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__24584_25421 = cljs.core.seq(bindings);
var chunk__24585_25422 = null;
var count__24586_25423 = (0);
var i__24587_25424 = (0);
while(true){
if((i__24587_25424 < count__24586_25423)){
var map__24594_25426 = chunk__24585_25422.cljs$core$IIndexed$_nth$arity$2(null,i__24587_25424);
var map__24594_25427__$1 = (((((!((map__24594_25426 == null))))?(((((map__24594_25426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24594_25426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24594_25426):map__24594_25426);
var binding_25428 = map__24594_25427__$1;
var init_25429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24594_25427__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_25428)," = ",init_25429,";");


var G__25430 = seq__24584_25421;
var G__25431 = chunk__24585_25422;
var G__25432 = count__24586_25423;
var G__25433 = (i__24587_25424 + (1));
seq__24584_25421 = G__25430;
chunk__24585_25422 = G__25431;
count__24586_25423 = G__25432;
i__24587_25424 = G__25433;
continue;
} else {
var temp__5735__auto___25434 = cljs.core.seq(seq__24584_25421);
if(temp__5735__auto___25434){
var seq__24584_25435__$1 = temp__5735__auto___25434;
if(cljs.core.chunked_seq_QMARK_(seq__24584_25435__$1)){
var c__4556__auto___25436 = cljs.core.chunk_first(seq__24584_25435__$1);
var G__25437 = cljs.core.chunk_rest(seq__24584_25435__$1);
var G__25438 = c__4556__auto___25436;
var G__25439 = cljs.core.count(c__4556__auto___25436);
var G__25440 = (0);
seq__24584_25421 = G__25437;
chunk__24585_25422 = G__25438;
count__24586_25423 = G__25439;
i__24587_25424 = G__25440;
continue;
} else {
var map__24596_25441 = cljs.core.first(seq__24584_25435__$1);
var map__24596_25442__$1 = (((((!((map__24596_25441 == null))))?(((((map__24596_25441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24596_25441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24596_25441):map__24596_25441);
var binding_25443 = map__24596_25442__$1;
var init_25444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24596_25442__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_25443)," = ",init_25444,";");


var G__25445 = cljs.core.next(seq__24584_25435__$1);
var G__25446 = null;
var G__25447 = (0);
var G__25448 = (0);
seq__24584_25421 = G__25445;
chunk__24585_25422 = G__25446;
count__24586_25423 = G__25447;
i__24587_25424 = G__25448;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__24600){
var map__24601 = p__24600;
var map__24601__$1 = (((((!((map__24601 == null))))?(((((map__24601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24601):map__24601);
var expr = map__24601__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24601__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24601__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24601__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info))){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return false;
}
} else {
return and__4115__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4115__auto__ = protocol;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tag;
if(cljs.core.truth_(and__4115__auto____$1)){
var or__4126__auto__ = (function (){var and__4115__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = protocol;
if(cljs.core.truth_(and__4115__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto____$2 = (function (){var or__4126__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4115__auto____$2)){
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
if((!(cljs.core.set_QMARK_(tag)))){
if(cljs.core.not((function (){var fexpr__24613 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__24613.cljs$core$IFn$_invoke$arity$1 ? fexpr__24613.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__24613.call(null,tag));
})())){
var temp__5735__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5735__auto__)){
var ps = temp__5735__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return false;
}
} else {
return false;
}
}
} else {
return and__4115__auto____$2;
}
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__24615 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__24615.cljs$core$IFn$_invoke$arity$1 ? fexpr__24615.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__24615.call(null,first_arg_tag));
})())));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag(env,f);
var js_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5735__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5735__auto__)){
var ns_str = temp__5735__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote(f);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__24603 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (arity > mfa);
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__24598_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24598_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__24599_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24599_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24603,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24603,(1),null);
var env__13757__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
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
var pimpl_25450 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_25450,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_25451 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_25451,args)),(((mfa_25451 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_25451,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,"(",cljs.compiler.comma_sep(args),")");
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
var G__24617 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__24616 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__24616.cljs$core$IFn$_invoke$arity$1 ? fexpr__24616.cljs$core$IFn$_invoke$arity$1(G__24617) : fexpr__24616.call(null,G__24617));
} else {
return and__4115__auto__;
}
})())){
var fprop_25452 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_25452," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_25452,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_25452," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_25452,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__24618){
var map__24619 = p__24618;
var map__24619__$1 = (((((!((map__24619 == null))))?(((((map__24619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24619):map__24619);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24619__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24619__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24619__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13757__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__24621){
var map__24622 = p__24621;
var map__24622__$1 = (((((!((map__24622 == null))))?(((((map__24622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24622):map__24622);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24622__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24622__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24622__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13757__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib)," = goog.global",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name((function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.name(lib));
}
})()),/\./))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__24624 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__24624__$1 = (((((!((map__24624 == null))))?(((((map__24624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24624):map__24624);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24624__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24624__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__24625 = options;
var map__24625__$1 = (((((!((map__24625 == null))))?(((((map__24625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24625):map__24625);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24625__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24625__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24625__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__24626 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__24631 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__24631__$1 = (((((!((map__24631 == null))))?(((((map__24631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24631):map__24631);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24631__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24631__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24626,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24626,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__24633_25461 = cljs.core.seq(libs_to_load);
var chunk__24634_25462 = null;
var count__24635_25463 = (0);
var i__24636_25464 = (0);
while(true){
if((i__24636_25464 < count__24635_25463)){
var lib_25465 = chunk__24634_25462.cljs$core$IIndexed$_nth$arity$2(null,i__24636_25464);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_25465)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25465),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25465),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25465),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25465),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_25465,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25465),"');");
}

}
}
}


var G__25466 = seq__24633_25461;
var G__25467 = chunk__24634_25462;
var G__25468 = count__24635_25463;
var G__25469 = (i__24636_25464 + (1));
seq__24633_25461 = G__25466;
chunk__24634_25462 = G__25467;
count__24635_25463 = G__25468;
i__24636_25464 = G__25469;
continue;
} else {
var temp__5735__auto___25470 = cljs.core.seq(seq__24633_25461);
if(temp__5735__auto___25470){
var seq__24633_25471__$1 = temp__5735__auto___25470;
if(cljs.core.chunked_seq_QMARK_(seq__24633_25471__$1)){
var c__4556__auto___25472 = cljs.core.chunk_first(seq__24633_25471__$1);
var G__25473 = cljs.core.chunk_rest(seq__24633_25471__$1);
var G__25474 = c__4556__auto___25472;
var G__25475 = cljs.core.count(c__4556__auto___25472);
var G__25476 = (0);
seq__24633_25461 = G__25473;
chunk__24634_25462 = G__25474;
count__24635_25463 = G__25475;
i__24636_25464 = G__25476;
continue;
} else {
var lib_25477 = cljs.core.first(seq__24633_25471__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_25477)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25477),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25477),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_25477),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25477),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_25477,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_25477),"');");
}

}
}
}


var G__25478 = cljs.core.next(seq__24633_25471__$1);
var G__25479 = null;
var G__25480 = (0);
var G__25481 = (0);
seq__24633_25461 = G__25478;
chunk__24634_25462 = G__25479;
count__24635_25463 = G__25480;
i__24636_25464 = G__25481;
continue;
}
} else {
}
}
break;
}

var seq__24640_25482 = cljs.core.seq(node_libs);
var chunk__24641_25483 = null;
var count__24642_25484 = (0);
var i__24643_25485 = (0);
while(true){
if((i__24643_25485 < count__24642_25484)){
var lib_25486 = chunk__24641_25483.cljs$core$IIndexed$_nth$arity$2(null,i__24643_25485);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_25486)," = require('",lib_25486,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__25487 = seq__24640_25482;
var G__25488 = chunk__24641_25483;
var G__25489 = count__24642_25484;
var G__25490 = (i__24643_25485 + (1));
seq__24640_25482 = G__25487;
chunk__24641_25483 = G__25488;
count__24642_25484 = G__25489;
i__24643_25485 = G__25490;
continue;
} else {
var temp__5735__auto___25491 = cljs.core.seq(seq__24640_25482);
if(temp__5735__auto___25491){
var seq__24640_25492__$1 = temp__5735__auto___25491;
if(cljs.core.chunked_seq_QMARK_(seq__24640_25492__$1)){
var c__4556__auto___25493 = cljs.core.chunk_first(seq__24640_25492__$1);
var G__25494 = cljs.core.chunk_rest(seq__24640_25492__$1);
var G__25495 = c__4556__auto___25493;
var G__25496 = cljs.core.count(c__4556__auto___25493);
var G__25497 = (0);
seq__24640_25482 = G__25494;
chunk__24641_25483 = G__25495;
count__24642_25484 = G__25496;
i__24643_25485 = G__25497;
continue;
} else {
var lib_25498 = cljs.core.first(seq__24640_25492__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_25498)," = require('",lib_25498,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__25499 = cljs.core.next(seq__24640_25492__$1);
var G__25500 = null;
var G__25501 = (0);
var G__25502 = (0);
seq__24640_25482 = G__25499;
chunk__24641_25483 = G__25500;
count__24642_25484 = G__25501;
i__24643_25485 = G__25502;
continue;
}
} else {
}
}
break;
}

var seq__24644_25503 = cljs.core.seq(global_exports_libs);
var chunk__24645_25504 = null;
var count__24646_25505 = (0);
var i__24647_25506 = (0);
while(true){
if((i__24647_25506 < count__24646_25505)){
var lib_25507 = chunk__24645_25504.cljs$core$IIndexed$_nth$arity$2(null,i__24647_25506);
var map__24652_25508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_25507));
var map__24652_25509__$1 = (((((!((map__24652_25508 == null))))?(((((map__24652_25508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24652_25508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24652_25508):map__24652_25508);
var global_exports_25510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24652_25509__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_25510,lib_25507);


var G__25511 = seq__24644_25503;
var G__25512 = chunk__24645_25504;
var G__25513 = count__24646_25505;
var G__25514 = (i__24647_25506 + (1));
seq__24644_25503 = G__25511;
chunk__24645_25504 = G__25512;
count__24646_25505 = G__25513;
i__24647_25506 = G__25514;
continue;
} else {
var temp__5735__auto___25515 = cljs.core.seq(seq__24644_25503);
if(temp__5735__auto___25515){
var seq__24644_25516__$1 = temp__5735__auto___25515;
if(cljs.core.chunked_seq_QMARK_(seq__24644_25516__$1)){
var c__4556__auto___25517 = cljs.core.chunk_first(seq__24644_25516__$1);
var G__25518 = cljs.core.chunk_rest(seq__24644_25516__$1);
var G__25519 = c__4556__auto___25517;
var G__25520 = cljs.core.count(c__4556__auto___25517);
var G__25521 = (0);
seq__24644_25503 = G__25518;
chunk__24645_25504 = G__25519;
count__24646_25505 = G__25520;
i__24647_25506 = G__25521;
continue;
} else {
var lib_25534 = cljs.core.first(seq__24644_25516__$1);
var map__24654_25535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_25534));
var map__24654_25536__$1 = (((((!((map__24654_25535 == null))))?(((((map__24654_25535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24654_25535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24654_25535):map__24654_25535);
var global_exports_25537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24654_25536__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_25537,lib_25534);


var G__25538 = cljs.core.next(seq__24644_25516__$1);
var G__25539 = null;
var G__25540 = (0);
var G__25541 = (0);
seq__24644_25503 = G__25538;
chunk__24645_25504 = G__25539;
count__24646_25505 = G__25540;
i__24647_25506 = G__25541;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__24656){
var map__24657 = p__24656;
var map__24657__$1 = (((((!((map__24657 == null))))?(((((map__24657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24657):map__24657);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24657__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24657__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24657__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24657__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24657__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24657__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24657__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__24659){
var map__24660 = p__24659;
var map__24660__$1 = (((((!((map__24660 == null))))?(((((map__24660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24660):map__24660);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24660__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24660__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24660__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24660__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24660__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24660__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24660__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__24662){
var map__24663 = p__24662;
var map__24663__$1 = (((((!((map__24663 == null))))?(((((map__24663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24663):map__24663);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24663__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24663__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24663__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24663__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24663__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__24665_25542 = cljs.core.seq(protocols);
var chunk__24666_25543 = null;
var count__24667_25544 = (0);
var i__24668_25545 = (0);
while(true){
if((i__24668_25545 < count__24667_25544)){
var protocol_25546 = chunk__24666_25543.cljs$core$IIndexed$_nth$arity$2(null,i__24668_25545);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25546)),"}");


var G__25547 = seq__24665_25542;
var G__25548 = chunk__24666_25543;
var G__25549 = count__24667_25544;
var G__25550 = (i__24668_25545 + (1));
seq__24665_25542 = G__25547;
chunk__24666_25543 = G__25548;
count__24667_25544 = G__25549;
i__24668_25545 = G__25550;
continue;
} else {
var temp__5735__auto___25551 = cljs.core.seq(seq__24665_25542);
if(temp__5735__auto___25551){
var seq__24665_25552__$1 = temp__5735__auto___25551;
if(cljs.core.chunked_seq_QMARK_(seq__24665_25552__$1)){
var c__4556__auto___25553 = cljs.core.chunk_first(seq__24665_25552__$1);
var G__25554 = cljs.core.chunk_rest(seq__24665_25552__$1);
var G__25555 = c__4556__auto___25553;
var G__25556 = cljs.core.count(c__4556__auto___25553);
var G__25557 = (0);
seq__24665_25542 = G__25554;
chunk__24666_25543 = G__25555;
count__24667_25544 = G__25556;
i__24668_25545 = G__25557;
continue;
} else {
var protocol_25558 = cljs.core.first(seq__24665_25552__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25558)),"}");


var G__25559 = cljs.core.next(seq__24665_25552__$1);
var G__25560 = null;
var G__25561 = (0);
var G__25562 = (0);
seq__24665_25542 = G__25559;
chunk__24666_25543 = G__25560;
count__24667_25544 = G__25561;
i__24668_25545 = G__25562;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__24669_25563 = cljs.core.seq(fields__$1);
var chunk__24670_25564 = null;
var count__24671_25565 = (0);
var i__24672_25566 = (0);
while(true){
if((i__24672_25566 < count__24671_25565)){
var fld_25567 = chunk__24670_25564.cljs$core$IIndexed$_nth$arity$2(null,i__24672_25566);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25567," = ",fld_25567,";");


var G__25568 = seq__24669_25563;
var G__25569 = chunk__24670_25564;
var G__25570 = count__24671_25565;
var G__25571 = (i__24672_25566 + (1));
seq__24669_25563 = G__25568;
chunk__24670_25564 = G__25569;
count__24671_25565 = G__25570;
i__24672_25566 = G__25571;
continue;
} else {
var temp__5735__auto___25572 = cljs.core.seq(seq__24669_25563);
if(temp__5735__auto___25572){
var seq__24669_25573__$1 = temp__5735__auto___25572;
if(cljs.core.chunked_seq_QMARK_(seq__24669_25573__$1)){
var c__4556__auto___25574 = cljs.core.chunk_first(seq__24669_25573__$1);
var G__25575 = cljs.core.chunk_rest(seq__24669_25573__$1);
var G__25576 = c__4556__auto___25574;
var G__25577 = cljs.core.count(c__4556__auto___25574);
var G__25578 = (0);
seq__24669_25563 = G__25575;
chunk__24670_25564 = G__25576;
count__24671_25565 = G__25577;
i__24672_25566 = G__25578;
continue;
} else {
var fld_25579 = cljs.core.first(seq__24669_25573__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25579," = ",fld_25579,";");


var G__25580 = cljs.core.next(seq__24669_25573__$1);
var G__25581 = null;
var G__25582 = (0);
var G__25583 = (0);
seq__24669_25563 = G__25580;
chunk__24670_25564 = G__25581;
count__24671_25565 = G__25582;
i__24672_25566 = G__25583;
continue;
}
} else {
}
}
break;
}

var seq__24673_25584 = cljs.core.seq(pmasks);
var chunk__24674_25585 = null;
var count__24675_25586 = (0);
var i__24676_25587 = (0);
while(true){
if((i__24676_25587 < count__24675_25586)){
var vec__24683_25588 = chunk__24674_25585.cljs$core$IIndexed$_nth$arity$2(null,i__24676_25587);
var pno_25589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24683_25588,(0),null);
var pmask_25590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24683_25588,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_25589,"$ = ",pmask_25590,";");


var G__25591 = seq__24673_25584;
var G__25592 = chunk__24674_25585;
var G__25593 = count__24675_25586;
var G__25594 = (i__24676_25587 + (1));
seq__24673_25584 = G__25591;
chunk__24674_25585 = G__25592;
count__24675_25586 = G__25593;
i__24676_25587 = G__25594;
continue;
} else {
var temp__5735__auto___25595 = cljs.core.seq(seq__24673_25584);
if(temp__5735__auto___25595){
var seq__24673_25596__$1 = temp__5735__auto___25595;
if(cljs.core.chunked_seq_QMARK_(seq__24673_25596__$1)){
var c__4556__auto___25597 = cljs.core.chunk_first(seq__24673_25596__$1);
var G__25598 = cljs.core.chunk_rest(seq__24673_25596__$1);
var G__25599 = c__4556__auto___25597;
var G__25600 = cljs.core.count(c__4556__auto___25597);
var G__25601 = (0);
seq__24673_25584 = G__25598;
chunk__24674_25585 = G__25599;
count__24675_25586 = G__25600;
i__24676_25587 = G__25601;
continue;
} else {
var vec__24686_25602 = cljs.core.first(seq__24673_25596__$1);
var pno_25603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24686_25602,(0),null);
var pmask_25604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24686_25602,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_25603,"$ = ",pmask_25604,";");


var G__25605 = cljs.core.next(seq__24673_25596__$1);
var G__25606 = null;
var G__25607 = (0);
var G__25608 = (0);
seq__24673_25584 = G__25605;
chunk__24674_25585 = G__25606;
count__24675_25586 = G__25607;
i__24676_25587 = G__25608;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__24689){
var map__24690 = p__24689;
var map__24690__$1 = (((((!((map__24690 == null))))?(((((map__24690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24690):map__24690);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24690__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24690__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24690__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24690__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24690__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__24692_25609 = cljs.core.seq(protocols);
var chunk__24693_25610 = null;
var count__24694_25611 = (0);
var i__24695_25612 = (0);
while(true){
if((i__24695_25612 < count__24694_25611)){
var protocol_25613 = chunk__24693_25610.cljs$core$IIndexed$_nth$arity$2(null,i__24695_25612);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25613)),"}");


var G__25614 = seq__24692_25609;
var G__25615 = chunk__24693_25610;
var G__25616 = count__24694_25611;
var G__25617 = (i__24695_25612 + (1));
seq__24692_25609 = G__25614;
chunk__24693_25610 = G__25615;
count__24694_25611 = G__25616;
i__24695_25612 = G__25617;
continue;
} else {
var temp__5735__auto___25618 = cljs.core.seq(seq__24692_25609);
if(temp__5735__auto___25618){
var seq__24692_25619__$1 = temp__5735__auto___25618;
if(cljs.core.chunked_seq_QMARK_(seq__24692_25619__$1)){
var c__4556__auto___25620 = cljs.core.chunk_first(seq__24692_25619__$1);
var G__25621 = cljs.core.chunk_rest(seq__24692_25619__$1);
var G__25622 = c__4556__auto___25620;
var G__25623 = cljs.core.count(c__4556__auto___25620);
var G__25624 = (0);
seq__24692_25609 = G__25621;
chunk__24693_25610 = G__25622;
count__24694_25611 = G__25623;
i__24695_25612 = G__25624;
continue;
} else {
var protocol_25625 = cljs.core.first(seq__24692_25619__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25625)),"}");


var G__25626 = cljs.core.next(seq__24692_25619__$1);
var G__25627 = null;
var G__25628 = (0);
var G__25629 = (0);
seq__24692_25609 = G__25626;
chunk__24693_25610 = G__25627;
count__24694_25611 = G__25628;
i__24695_25612 = G__25629;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__24696_25630 = cljs.core.seq(fields__$1);
var chunk__24697_25631 = null;
var count__24698_25632 = (0);
var i__24699_25633 = (0);
while(true){
if((i__24699_25633 < count__24698_25632)){
var fld_25634 = chunk__24697_25631.cljs$core$IIndexed$_nth$arity$2(null,i__24699_25633);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25634," = ",fld_25634,";");


var G__25635 = seq__24696_25630;
var G__25636 = chunk__24697_25631;
var G__25637 = count__24698_25632;
var G__25638 = (i__24699_25633 + (1));
seq__24696_25630 = G__25635;
chunk__24697_25631 = G__25636;
count__24698_25632 = G__25637;
i__24699_25633 = G__25638;
continue;
} else {
var temp__5735__auto___25639 = cljs.core.seq(seq__24696_25630);
if(temp__5735__auto___25639){
var seq__24696_25640__$1 = temp__5735__auto___25639;
if(cljs.core.chunked_seq_QMARK_(seq__24696_25640__$1)){
var c__4556__auto___25641 = cljs.core.chunk_first(seq__24696_25640__$1);
var G__25642 = cljs.core.chunk_rest(seq__24696_25640__$1);
var G__25643 = c__4556__auto___25641;
var G__25644 = cljs.core.count(c__4556__auto___25641);
var G__25645 = (0);
seq__24696_25630 = G__25642;
chunk__24697_25631 = G__25643;
count__24698_25632 = G__25644;
i__24699_25633 = G__25645;
continue;
} else {
var fld_25646 = cljs.core.first(seq__24696_25640__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_25646," = ",fld_25646,";");


var G__25647 = cljs.core.next(seq__24696_25640__$1);
var G__25648 = null;
var G__25649 = (0);
var G__25650 = (0);
seq__24696_25630 = G__25647;
chunk__24697_25631 = G__25648;
count__24698_25632 = G__25649;
i__24699_25633 = G__25650;
continue;
}
} else {
}
}
break;
}

var seq__24700_25651 = cljs.core.seq(pmasks);
var chunk__24701_25652 = null;
var count__24702_25653 = (0);
var i__24703_25654 = (0);
while(true){
if((i__24703_25654 < count__24702_25653)){
var vec__24710_25655 = chunk__24701_25652.cljs$core$IIndexed$_nth$arity$2(null,i__24703_25654);
var pno_25656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24710_25655,(0),null);
var pmask_25657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24710_25655,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_25656,"$ = ",pmask_25657,";");


var G__25658 = seq__24700_25651;
var G__25659 = chunk__24701_25652;
var G__25660 = count__24702_25653;
var G__25661 = (i__24703_25654 + (1));
seq__24700_25651 = G__25658;
chunk__24701_25652 = G__25659;
count__24702_25653 = G__25660;
i__24703_25654 = G__25661;
continue;
} else {
var temp__5735__auto___25662 = cljs.core.seq(seq__24700_25651);
if(temp__5735__auto___25662){
var seq__24700_25663__$1 = temp__5735__auto___25662;
if(cljs.core.chunked_seq_QMARK_(seq__24700_25663__$1)){
var c__4556__auto___25664 = cljs.core.chunk_first(seq__24700_25663__$1);
var G__25665 = cljs.core.chunk_rest(seq__24700_25663__$1);
var G__25666 = c__4556__auto___25664;
var G__25667 = cljs.core.count(c__4556__auto___25664);
var G__25668 = (0);
seq__24700_25651 = G__25665;
chunk__24701_25652 = G__25666;
count__24702_25653 = G__25667;
i__24703_25654 = G__25668;
continue;
} else {
var vec__24713_25669 = cljs.core.first(seq__24700_25663__$1);
var pno_25670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24713_25669,(0),null);
var pmask_25671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24713_25669,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_25670,"$ = ",pmask_25671,";");


var G__25672 = cljs.core.next(seq__24700_25663__$1);
var G__25673 = null;
var G__25674 = (0);
var G__25675 = (0);
seq__24700_25651 = G__25672;
chunk__24701_25652 = G__25673;
count__24702_25653 = G__25674;
i__24703_25654 = G__25675;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__24716){
var map__24717 = p__24716;
var map__24717__$1 = (((((!((map__24717 == null))))?(((((map__24717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24717):map__24717);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24717__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24717__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24717__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24717__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24717__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13757__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__24719){
var map__24720 = p__24719;
var map__24720__$1 = (((((!((map__24720 == null))))?(((((map__24720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24720):map__24720);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24720__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24720__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24720__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24720__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24720__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__13757__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13757__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__24729 = cljs.core.seq(table);
var chunk__24730 = null;
var count__24731 = (0);
var i__24732 = (0);
while(true){
if((i__24732 < count__24731)){
var vec__24739 = chunk__24730.cljs$core$IIndexed$_nth$arity$2(null,i__24732);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24739,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24739,(1),null);
var ns_25676 = cljs.core.namespace(sym);
var name_25677 = cljs.core.name(sym);
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


var G__25678 = seq__24729;
var G__25679 = chunk__24730;
var G__25680 = count__24731;
var G__25681 = (i__24732 + (1));
seq__24729 = G__25678;
chunk__24730 = G__25679;
count__24731 = G__25680;
i__24732 = G__25681;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24729);
if(temp__5735__auto__){
var seq__24729__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24729__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24729__$1);
var G__25682 = cljs.core.chunk_rest(seq__24729__$1);
var G__25683 = c__4556__auto__;
var G__25684 = cljs.core.count(c__4556__auto__);
var G__25685 = (0);
seq__24729 = G__25682;
chunk__24730 = G__25683;
count__24731 = G__25684;
i__24732 = G__25685;
continue;
} else {
var vec__24742 = cljs.core.first(seq__24729__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24742,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24742,(1),null);
var ns_25686 = cljs.core.namespace(sym);
var name_25687 = cljs.core.name(sym);
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


var G__25688 = cljs.core.next(seq__24729__$1);
var G__25689 = null;
var G__25690 = (0);
var G__25691 = (0);
seq__24729 = G__25688;
chunk__24730 = G__25689;
count__24731 = G__25690;
i__24732 = G__25691;
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
var G__24746 = arguments.length;
switch (G__24746) {
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
var k_25693 = cljs.core.first(ks);
var vec__24747_25694 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_25693);
var top_25695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24747_25694,(0),null);
var prefix_SINGLEQUOTE__25696 = vec__24747_25694;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_25693)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__25696) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_25695)) || (cljs.core.contains_QMARK_(known_externs,top_25695)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__25696)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_25695);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__25696)),";");
}
} else {
}

var m_25697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_25693);
if(cljs.core.empty_QMARK_(m_25697)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__25696,m_25697,top_level,known_externs);
}

var G__25698 = cljs.core.next(ks);
ks = G__25698;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);

