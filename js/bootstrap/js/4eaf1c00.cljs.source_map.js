goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__22145){
var vec__22146 = p__22145;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22146,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22146,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__22149 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22149,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22149,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22149,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22149,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22149,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5735__auto__)){
var name__$1 = temp__5735__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__22152 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22152,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22152,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22152,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22152,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22152,(4),null);
var vec__22155 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22155,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22155,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22155,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22155,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22155,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4126__auto__ = col;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__22158 = segmap;
var map__22158__$1 = (((((!((map__22158 == null))))?(((((map__22158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22158):map__22158);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22158__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22158__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22158__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22158__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22158__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__22172 = arguments.length;
switch (G__22172) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__22178 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23166 = cljs.core.next(segs__$1);
var G__23167 = nrelseg;
var G__23168 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23166;
relseg__$1 = G__23167;
result__$1 = G__23168;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22178,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22178,(1),null);
var G__23169 = (gline + (1));
var G__23170 = cljs.core.next(lines__$1);
var G__23171 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23172 = result__$1;
gline = G__23169;
lines__$1 = G__23170;
relseg = G__23171;
result = G__23172;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__22182 = segmap;
var map__22182__$1 = (((((!((map__22182 == null))))?(((((map__22182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22182):map__22182);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22182__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22182__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22182__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22182__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22182__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__22181_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__22181_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__22185 = arguments.length;
switch (G__22185) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__22199 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__23182 = cljs.core.next(segs__$1);
var G__23183 = nrelseg;
var G__23184 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__23182;
relseg__$1 = G__23183;
result__$1 = G__23184;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22199,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22199,(1),null);
var G__23185 = (gline + (1));
var G__23186 = cljs.core.next(lines__$1);
var G__23187 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__23188 = result__$1;
gline = G__23185;
lines__$1 = G__23186;
relseg = G__23187;
result = G__23188;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22213){
var vec__22214 = p__22213;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22214,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22214,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22214,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22214,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22214,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__22217){
var vec__22218 = p__22217;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22218,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22218,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22218,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22218,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22218,(4),null);
var seg = vec__22218;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__22221){
var vec__22222 = p__22221;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22222,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22222,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22222,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22222,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22222,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5733__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
var idx = (function (){var temp__5733__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5733__auto____$1)){
var idx = temp__5733__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__22229 = cljs.core.seq(infos);
var chunk__22230 = null;
var count__22231 = (0);
var i__22232 = (0);
while(true){
if((i__22232 < count__22231)){
var info = chunk__22230.cljs$core$IIndexed$_nth$arity$2(null,i__22232);
var segv_23203 = info__GT_segv(info,source_idx,line,col);
var gline_23204 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23205 = cljs.core.count(cljs.core.deref(lines));
if((gline_23204 > (lc_23205 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22229,chunk__22230,count__22231,i__22232,segv_23203,gline_23204,lc_23205,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23204 - (lc_23205 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23203], null));
});})(seq__22229,chunk__22230,count__22231,i__22232,segv_23203,gline_23204,lc_23205,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22229,chunk__22230,count__22231,i__22232,segv_23203,gline_23204,lc_23205,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23204], null),cljs.core.conj,segv_23203);
});})(seq__22229,chunk__22230,count__22231,i__22232,segv_23203,gline_23204,lc_23205,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23206 = seq__22229;
var G__23207 = chunk__22230;
var G__23208 = count__22231;
var G__23209 = (i__22232 + (1));
seq__22229 = G__23206;
chunk__22230 = G__23207;
count__22231 = G__23208;
i__22232 = G__23209;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22229);
if(temp__5735__auto__){
var seq__22229__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22229__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__22229__$1);
var G__23210 = cljs.core.chunk_rest(seq__22229__$1);
var G__23211 = c__4556__auto__;
var G__23212 = cljs.core.count(c__4556__auto__);
var G__23213 = (0);
seq__22229 = G__23210;
chunk__22230 = G__23211;
count__22231 = G__23212;
i__22232 = G__23213;
continue;
} else {
var info = cljs.core.first(seq__22229__$1);
var segv_23214 = info__GT_segv(info,source_idx,line,col);
var gline_23215 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23216 = cljs.core.count(cljs.core.deref(lines));
if((gline_23215 > (lc_23216 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22229,chunk__22230,count__22231,i__22232,segv_23214,gline_23215,lc_23216,info,seq__22229__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_23215 - (lc_23216 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23214], null));
});})(seq__22229,chunk__22230,count__22231,i__22232,segv_23214,gline_23215,lc_23216,info,seq__22229__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__22229,chunk__22230,count__22231,i__22232,segv_23214,gline_23215,lc_23216,info,seq__22229__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23215], null),cljs.core.conj,segv_23214);
});})(seq__22229,chunk__22230,count__22231,i__22232,segv_23214,gline_23215,lc_23216,info,seq__22229__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23217 = cljs.core.next(seq__22229__$1);
var G__23218 = null;
var G__23219 = (0);
var G__23220 = (0);
seq__22229 = G__23217;
chunk__22230 = G__23218;
count__22231 = G__23219;
i__22232 = G__23220;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__22237_23221 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22238_23222 = null;
var count__22239_23223 = (0);
var i__22240_23224 = (0);
while(true){
if((i__22240_23224 < count__22239_23223)){
var vec__22423_23225 = chunk__22238_23222.cljs$core$IIndexed$_nth$arity$2(null,i__22240_23224);
var source_idx_23226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22423_23225,(0),null);
var vec__22426_23227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22423_23225,(1),null);
var __23228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22426_23227,(0),null);
var lines_23229__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22426_23227,(1),null);
var seq__22429_23230 = cljs.core.seq(lines_23229__$1);
var chunk__22430_23231 = null;
var count__22431_23232 = (0);
var i__22432_23233 = (0);
while(true){
if((i__22432_23233 < count__22431_23232)){
var vec__22475_23234 = chunk__22430_23231.cljs$core$IIndexed$_nth$arity$2(null,i__22432_23233);
var line_23235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22475_23234,(0),null);
var cols_23236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22475_23234,(1),null);
var seq__22478_23237 = cljs.core.seq(cols_23236);
var chunk__22479_23238 = null;
var count__22480_23239 = (0);
var i__22481_23240 = (0);
while(true){
if((i__22481_23240 < count__22480_23239)){
var vec__22488_23241 = chunk__22479_23238.cljs$core$IIndexed$_nth$arity$2(null,i__22481_23240);
var col_23242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22488_23241,(0),null);
var infos_23243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22488_23241,(1),null);
encode_cols(infos_23243,source_idx_23226,line_23235,col_23242);


var G__23244 = seq__22478_23237;
var G__23245 = chunk__22479_23238;
var G__23246 = count__22480_23239;
var G__23247 = (i__22481_23240 + (1));
seq__22478_23237 = G__23244;
chunk__22479_23238 = G__23245;
count__22480_23239 = G__23246;
i__22481_23240 = G__23247;
continue;
} else {
var temp__5735__auto___23248 = cljs.core.seq(seq__22478_23237);
if(temp__5735__auto___23248){
var seq__22478_23249__$1 = temp__5735__auto___23248;
if(cljs.core.chunked_seq_QMARK_(seq__22478_23249__$1)){
var c__4556__auto___23250 = cljs.core.chunk_first(seq__22478_23249__$1);
var G__23251 = cljs.core.chunk_rest(seq__22478_23249__$1);
var G__23252 = c__4556__auto___23250;
var G__23253 = cljs.core.count(c__4556__auto___23250);
var G__23254 = (0);
seq__22478_23237 = G__23251;
chunk__22479_23238 = G__23252;
count__22480_23239 = G__23253;
i__22481_23240 = G__23254;
continue;
} else {
var vec__22491_23255 = cljs.core.first(seq__22478_23249__$1);
var col_23256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22491_23255,(0),null);
var infos_23257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22491_23255,(1),null);
encode_cols(infos_23257,source_idx_23226,line_23235,col_23256);


var G__23258 = cljs.core.next(seq__22478_23249__$1);
var G__23259 = null;
var G__23260 = (0);
var G__23261 = (0);
seq__22478_23237 = G__23258;
chunk__22479_23238 = G__23259;
count__22480_23239 = G__23260;
i__22481_23240 = G__23261;
continue;
}
} else {
}
}
break;
}


var G__23262 = seq__22429_23230;
var G__23263 = chunk__22430_23231;
var G__23264 = count__22431_23232;
var G__23265 = (i__22432_23233 + (1));
seq__22429_23230 = G__23262;
chunk__22430_23231 = G__23263;
count__22431_23232 = G__23264;
i__22432_23233 = G__23265;
continue;
} else {
var temp__5735__auto___23266 = cljs.core.seq(seq__22429_23230);
if(temp__5735__auto___23266){
var seq__22429_23267__$1 = temp__5735__auto___23266;
if(cljs.core.chunked_seq_QMARK_(seq__22429_23267__$1)){
var c__4556__auto___23268 = cljs.core.chunk_first(seq__22429_23267__$1);
var G__23269 = cljs.core.chunk_rest(seq__22429_23267__$1);
var G__23270 = c__4556__auto___23268;
var G__23271 = cljs.core.count(c__4556__auto___23268);
var G__23272 = (0);
seq__22429_23230 = G__23269;
chunk__22430_23231 = G__23270;
count__22431_23232 = G__23271;
i__22432_23233 = G__23272;
continue;
} else {
var vec__22494_23273 = cljs.core.first(seq__22429_23267__$1);
var line_23274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22494_23273,(0),null);
var cols_23275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22494_23273,(1),null);
var seq__22497_23276 = cljs.core.seq(cols_23275);
var chunk__22498_23277 = null;
var count__22499_23278 = (0);
var i__22500_23279 = (0);
while(true){
if((i__22500_23279 < count__22499_23278)){
var vec__22507_23280 = chunk__22498_23277.cljs$core$IIndexed$_nth$arity$2(null,i__22500_23279);
var col_23281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22507_23280,(0),null);
var infos_23282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22507_23280,(1),null);
encode_cols(infos_23282,source_idx_23226,line_23274,col_23281);


var G__23283 = seq__22497_23276;
var G__23284 = chunk__22498_23277;
var G__23285 = count__22499_23278;
var G__23286 = (i__22500_23279 + (1));
seq__22497_23276 = G__23283;
chunk__22498_23277 = G__23284;
count__22499_23278 = G__23285;
i__22500_23279 = G__23286;
continue;
} else {
var temp__5735__auto___23287__$1 = cljs.core.seq(seq__22497_23276);
if(temp__5735__auto___23287__$1){
var seq__22497_23288__$1 = temp__5735__auto___23287__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22497_23288__$1)){
var c__4556__auto___23289 = cljs.core.chunk_first(seq__22497_23288__$1);
var G__23290 = cljs.core.chunk_rest(seq__22497_23288__$1);
var G__23291 = c__4556__auto___23289;
var G__23292 = cljs.core.count(c__4556__auto___23289);
var G__23293 = (0);
seq__22497_23276 = G__23290;
chunk__22498_23277 = G__23291;
count__22499_23278 = G__23292;
i__22500_23279 = G__23293;
continue;
} else {
var vec__22510_23294 = cljs.core.first(seq__22497_23288__$1);
var col_23295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22510_23294,(0),null);
var infos_23296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22510_23294,(1),null);
encode_cols(infos_23296,source_idx_23226,line_23274,col_23295);


var G__23297 = cljs.core.next(seq__22497_23288__$1);
var G__23298 = null;
var G__23299 = (0);
var G__23300 = (0);
seq__22497_23276 = G__23297;
chunk__22498_23277 = G__23298;
count__22499_23278 = G__23299;
i__22500_23279 = G__23300;
continue;
}
} else {
}
}
break;
}


var G__23301 = cljs.core.next(seq__22429_23267__$1);
var G__23302 = null;
var G__23303 = (0);
var G__23304 = (0);
seq__22429_23230 = G__23301;
chunk__22430_23231 = G__23302;
count__22431_23232 = G__23303;
i__22432_23233 = G__23304;
continue;
}
} else {
}
}
break;
}


var G__23305 = seq__22237_23221;
var G__23306 = chunk__22238_23222;
var G__23307 = count__22239_23223;
var G__23308 = (i__22240_23224 + (1));
seq__22237_23221 = G__23305;
chunk__22238_23222 = G__23306;
count__22239_23223 = G__23307;
i__22240_23224 = G__23308;
continue;
} else {
var temp__5735__auto___23309 = cljs.core.seq(seq__22237_23221);
if(temp__5735__auto___23309){
var seq__22237_23310__$1 = temp__5735__auto___23309;
if(cljs.core.chunked_seq_QMARK_(seq__22237_23310__$1)){
var c__4556__auto___23311 = cljs.core.chunk_first(seq__22237_23310__$1);
var G__23312 = cljs.core.chunk_rest(seq__22237_23310__$1);
var G__23313 = c__4556__auto___23311;
var G__23314 = cljs.core.count(c__4556__auto___23311);
var G__23315 = (0);
seq__22237_23221 = G__23312;
chunk__22238_23222 = G__23313;
count__22239_23223 = G__23314;
i__22240_23224 = G__23315;
continue;
} else {
var vec__22513_23316 = cljs.core.first(seq__22237_23310__$1);
var source_idx_23317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22513_23316,(0),null);
var vec__22516_23318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22513_23316,(1),null);
var __23319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22516_23318,(0),null);
var lines_23320__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22516_23318,(1),null);
var seq__22519_23321 = cljs.core.seq(lines_23320__$1);
var chunk__22520_23322 = null;
var count__22521_23323 = (0);
var i__22522_23324 = (0);
while(true){
if((i__22522_23324 < count__22521_23323)){
var vec__22561_23325 = chunk__22520_23322.cljs$core$IIndexed$_nth$arity$2(null,i__22522_23324);
var line_23326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22561_23325,(0),null);
var cols_23327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22561_23325,(1),null);
var seq__22564_23328 = cljs.core.seq(cols_23327);
var chunk__22565_23329 = null;
var count__22566_23330 = (0);
var i__22567_23331 = (0);
while(true){
if((i__22567_23331 < count__22566_23330)){
var vec__22574_23332 = chunk__22565_23329.cljs$core$IIndexed$_nth$arity$2(null,i__22567_23331);
var col_23333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22574_23332,(0),null);
var infos_23334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22574_23332,(1),null);
encode_cols(infos_23334,source_idx_23317,line_23326,col_23333);


var G__23336 = seq__22564_23328;
var G__23337 = chunk__22565_23329;
var G__23338 = count__22566_23330;
var G__23339 = (i__22567_23331 + (1));
seq__22564_23328 = G__23336;
chunk__22565_23329 = G__23337;
count__22566_23330 = G__23338;
i__22567_23331 = G__23339;
continue;
} else {
var temp__5735__auto___23340__$1 = cljs.core.seq(seq__22564_23328);
if(temp__5735__auto___23340__$1){
var seq__22564_23341__$1 = temp__5735__auto___23340__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22564_23341__$1)){
var c__4556__auto___23343 = cljs.core.chunk_first(seq__22564_23341__$1);
var G__23344 = cljs.core.chunk_rest(seq__22564_23341__$1);
var G__23345 = c__4556__auto___23343;
var G__23346 = cljs.core.count(c__4556__auto___23343);
var G__23347 = (0);
seq__22564_23328 = G__23344;
chunk__22565_23329 = G__23345;
count__22566_23330 = G__23346;
i__22567_23331 = G__23347;
continue;
} else {
var vec__22577_23351 = cljs.core.first(seq__22564_23341__$1);
var col_23352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22577_23351,(0),null);
var infos_23353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22577_23351,(1),null);
encode_cols(infos_23353,source_idx_23317,line_23326,col_23352);


var G__23354 = cljs.core.next(seq__22564_23341__$1);
var G__23355 = null;
var G__23356 = (0);
var G__23357 = (0);
seq__22564_23328 = G__23354;
chunk__22565_23329 = G__23355;
count__22566_23330 = G__23356;
i__22567_23331 = G__23357;
continue;
}
} else {
}
}
break;
}


var G__23358 = seq__22519_23321;
var G__23359 = chunk__22520_23322;
var G__23360 = count__22521_23323;
var G__23361 = (i__22522_23324 + (1));
seq__22519_23321 = G__23358;
chunk__22520_23322 = G__23359;
count__22521_23323 = G__23360;
i__22522_23324 = G__23361;
continue;
} else {
var temp__5735__auto___23362__$1 = cljs.core.seq(seq__22519_23321);
if(temp__5735__auto___23362__$1){
var seq__22519_23363__$1 = temp__5735__auto___23362__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22519_23363__$1)){
var c__4556__auto___23365 = cljs.core.chunk_first(seq__22519_23363__$1);
var G__23366 = cljs.core.chunk_rest(seq__22519_23363__$1);
var G__23367 = c__4556__auto___23365;
var G__23368 = cljs.core.count(c__4556__auto___23365);
var G__23369 = (0);
seq__22519_23321 = G__23366;
chunk__22520_23322 = G__23367;
count__22521_23323 = G__23368;
i__22522_23324 = G__23369;
continue;
} else {
var vec__22580_23372 = cljs.core.first(seq__22519_23363__$1);
var line_23373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22580_23372,(0),null);
var cols_23374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22580_23372,(1),null);
var seq__22583_23375 = cljs.core.seq(cols_23374);
var chunk__22584_23376 = null;
var count__22585_23377 = (0);
var i__22586_23378 = (0);
while(true){
if((i__22586_23378 < count__22585_23377)){
var vec__22593_23381 = chunk__22584_23376.cljs$core$IIndexed$_nth$arity$2(null,i__22586_23378);
var col_23382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22593_23381,(0),null);
var infos_23383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22593_23381,(1),null);
encode_cols(infos_23383,source_idx_23317,line_23373,col_23382);


var G__23384 = seq__22583_23375;
var G__23385 = chunk__22584_23376;
var G__23386 = count__22585_23377;
var G__23387 = (i__22586_23378 + (1));
seq__22583_23375 = G__23384;
chunk__22584_23376 = G__23385;
count__22585_23377 = G__23386;
i__22586_23378 = G__23387;
continue;
} else {
var temp__5735__auto___23388__$2 = cljs.core.seq(seq__22583_23375);
if(temp__5735__auto___23388__$2){
var seq__22583_23389__$1 = temp__5735__auto___23388__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22583_23389__$1)){
var c__4556__auto___23390 = cljs.core.chunk_first(seq__22583_23389__$1);
var G__23391 = cljs.core.chunk_rest(seq__22583_23389__$1);
var G__23392 = c__4556__auto___23390;
var G__23393 = cljs.core.count(c__4556__auto___23390);
var G__23394 = (0);
seq__22583_23375 = G__23391;
chunk__22584_23376 = G__23392;
count__22585_23377 = G__23393;
i__22586_23378 = G__23394;
continue;
} else {
var vec__22596_23395 = cljs.core.first(seq__22583_23389__$1);
var col_23396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22596_23395,(0),null);
var infos_23397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22596_23395,(1),null);
encode_cols(infos_23397,source_idx_23317,line_23373,col_23396);


var G__23398 = cljs.core.next(seq__22583_23389__$1);
var G__23399 = null;
var G__23400 = (0);
var G__23401 = (0);
seq__22583_23375 = G__23398;
chunk__22584_23376 = G__23399;
count__22585_23377 = G__23400;
i__22586_23378 = G__23401;
continue;
}
} else {
}
}
break;
}


var G__23402 = cljs.core.next(seq__22519_23363__$1);
var G__23403 = null;
var G__23404 = (0);
var G__23405 = (0);
seq__22519_23321 = G__23402;
chunk__22520_23322 = G__23403;
count__22521_23323 = G__23404;
i__22522_23324 = G__23405;
continue;
}
} else {
}
}
break;
}


var G__23406 = cljs.core.next(seq__22237_23310__$1);
var G__23407 = null;
var G__23408 = (0);
var G__23409 = (0);
seq__22237_23221 = G__23406;
chunk__22238_23222 = G__23407;
count__22239_23223 = G__23408;
i__22240_23224 = G__23409;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__22599 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__22225_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22225_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__22226_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__22226_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22227_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__22227_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__22600 = G__22599;
goog.object.set(G__22600,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__22600;
} else {
return G__22599;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__22601 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22601,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22601,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__22604 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22604,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22604,(1),null);
var G__23414 = cljs.core.next(col_map_seq);
var G__23415 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__22604,col,infos,vec__22601,line,col_map){
return (function (v,p__22607){
var map__22608 = p__22607;
var map__22608__$1 = (((((!((map__22608 == null))))?(((((map__22608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22608):map__22608);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22608__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22608__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__22604,col,infos,vec__22601,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__23414;
new_cols = G__23415;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__23417 = cljs.core.next(line_map_seq);
var G__23418 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__23417;
new_lines = G__23418;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__22610_23419 = cljs.core.seq(reverse_map);
var chunk__22611_23420 = null;
var count__22612_23421 = (0);
var i__22613_23422 = (0);
while(true){
if((i__22613_23422 < count__22612_23421)){
var vec__22861_23423 = chunk__22611_23420.cljs$core$IIndexed$_nth$arity$2(null,i__22613_23422);
var line_23424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22861_23423,(0),null);
var columns_23425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22861_23423,(1),null);
var seq__22866_23426 = cljs.core.seq(columns_23425);
var chunk__22867_23427 = null;
var count__22868_23428 = (0);
var i__22869_23429 = (0);
while(true){
if((i__22869_23429 < count__22868_23428)){
var vec__22959_23430 = chunk__22867_23427.cljs$core$IIndexed$_nth$arity$2(null,i__22869_23429);
var column_23431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22959_23430,(0),null);
var column_info_23432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22959_23430,(1),null);
var seq__22973_23433 = cljs.core.seq(column_info_23432);
var chunk__22974_23434 = null;
var count__22975_23435 = (0);
var i__22976_23436 = (0);
while(true){
if((i__22976_23436 < count__22975_23435)){
var map__22981_23437 = chunk__22974_23434.cljs$core$IIndexed$_nth$arity$2(null,i__22976_23436);
var map__22981_23438__$1 = (((((!((map__22981_23437 == null))))?(((((map__22981_23437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22981_23437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22981_23437):map__22981_23437);
var gline_23439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22981_23438__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22981_23438__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22981_23438__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23439], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22973_23433,chunk__22974_23434,count__22975_23435,i__22976_23436,seq__22866_23426,chunk__22867_23427,count__22868_23428,i__22869_23429,seq__22610_23419,chunk__22611_23420,count__22612_23421,i__22613_23422,map__22981_23437,map__22981_23438__$1,gline_23439,gcol_23440,name_23441,vec__22959_23430,column_23431,column_info_23432,vec__22861_23423,line_23424,columns_23425,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23440], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23424,new cljs.core.Keyword(null,"col","col",-1959363084),column_23431,new cljs.core.Keyword(null,"name","name",1843675177),name_23441], null));
});})(seq__22973_23433,chunk__22974_23434,count__22975_23435,i__22976_23436,seq__22866_23426,chunk__22867_23427,count__22868_23428,i__22869_23429,seq__22610_23419,chunk__22611_23420,count__22612_23421,i__22613_23422,map__22981_23437,map__22981_23438__$1,gline_23439,gcol_23440,name_23441,vec__22959_23430,column_23431,column_info_23432,vec__22861_23423,line_23424,columns_23425,inverted))
,cljs.core.sorted_map()));


var G__23442 = seq__22973_23433;
var G__23443 = chunk__22974_23434;
var G__23444 = count__22975_23435;
var G__23445 = (i__22976_23436 + (1));
seq__22973_23433 = G__23442;
chunk__22974_23434 = G__23443;
count__22975_23435 = G__23444;
i__22976_23436 = G__23445;
continue;
} else {
var temp__5735__auto___23446 = cljs.core.seq(seq__22973_23433);
if(temp__5735__auto___23446){
var seq__22973_23447__$1 = temp__5735__auto___23446;
if(cljs.core.chunked_seq_QMARK_(seq__22973_23447__$1)){
var c__4556__auto___23448 = cljs.core.chunk_first(seq__22973_23447__$1);
var G__23449 = cljs.core.chunk_rest(seq__22973_23447__$1);
var G__23450 = c__4556__auto___23448;
var G__23451 = cljs.core.count(c__4556__auto___23448);
var G__23452 = (0);
seq__22973_23433 = G__23449;
chunk__22974_23434 = G__23450;
count__22975_23435 = G__23451;
i__22976_23436 = G__23452;
continue;
} else {
var map__22983_23453 = cljs.core.first(seq__22973_23447__$1);
var map__22983_23454__$1 = (((((!((map__22983_23453 == null))))?(((((map__22983_23453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22983_23453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22983_23453):map__22983_23453);
var gline_23455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22983_23454__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22983_23454__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22983_23454__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23455], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22973_23433,chunk__22974_23434,count__22975_23435,i__22976_23436,seq__22866_23426,chunk__22867_23427,count__22868_23428,i__22869_23429,seq__22610_23419,chunk__22611_23420,count__22612_23421,i__22613_23422,map__22983_23453,map__22983_23454__$1,gline_23455,gcol_23456,name_23457,seq__22973_23447__$1,temp__5735__auto___23446,vec__22959_23430,column_23431,column_info_23432,vec__22861_23423,line_23424,columns_23425,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23456], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23424,new cljs.core.Keyword(null,"col","col",-1959363084),column_23431,new cljs.core.Keyword(null,"name","name",1843675177),name_23457], null));
});})(seq__22973_23433,chunk__22974_23434,count__22975_23435,i__22976_23436,seq__22866_23426,chunk__22867_23427,count__22868_23428,i__22869_23429,seq__22610_23419,chunk__22611_23420,count__22612_23421,i__22613_23422,map__22983_23453,map__22983_23454__$1,gline_23455,gcol_23456,name_23457,seq__22973_23447__$1,temp__5735__auto___23446,vec__22959_23430,column_23431,column_info_23432,vec__22861_23423,line_23424,columns_23425,inverted))
,cljs.core.sorted_map()));


var G__23470 = cljs.core.next(seq__22973_23447__$1);
var G__23471 = null;
var G__23472 = (0);
var G__23473 = (0);
seq__22973_23433 = G__23470;
chunk__22974_23434 = G__23471;
count__22975_23435 = G__23472;
i__22976_23436 = G__23473;
continue;
}
} else {
}
}
break;
}


var G__23474 = seq__22866_23426;
var G__23475 = chunk__22867_23427;
var G__23476 = count__22868_23428;
var G__23477 = (i__22869_23429 + (1));
seq__22866_23426 = G__23474;
chunk__22867_23427 = G__23475;
count__22868_23428 = G__23476;
i__22869_23429 = G__23477;
continue;
} else {
var temp__5735__auto___23478 = cljs.core.seq(seq__22866_23426);
if(temp__5735__auto___23478){
var seq__22866_23479__$1 = temp__5735__auto___23478;
if(cljs.core.chunked_seq_QMARK_(seq__22866_23479__$1)){
var c__4556__auto___23480 = cljs.core.chunk_first(seq__22866_23479__$1);
var G__23481 = cljs.core.chunk_rest(seq__22866_23479__$1);
var G__23482 = c__4556__auto___23480;
var G__23483 = cljs.core.count(c__4556__auto___23480);
var G__23484 = (0);
seq__22866_23426 = G__23481;
chunk__22867_23427 = G__23482;
count__22868_23428 = G__23483;
i__22869_23429 = G__23484;
continue;
} else {
var vec__22985_23485 = cljs.core.first(seq__22866_23479__$1);
var column_23486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22985_23485,(0),null);
var column_info_23487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22985_23485,(1),null);
var seq__22988_23488 = cljs.core.seq(column_info_23487);
var chunk__22989_23489 = null;
var count__22990_23490 = (0);
var i__22991_23491 = (0);
while(true){
if((i__22991_23491 < count__22990_23490)){
var map__22997_23493 = chunk__22989_23489.cljs$core$IIndexed$_nth$arity$2(null,i__22991_23491);
var map__22997_23494__$1 = (((((!((map__22997_23493 == null))))?(((((map__22997_23493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22997_23493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22997_23493):map__22997_23493);
var gline_23495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22997_23494__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22997_23494__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22997_23494__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23495], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22988_23488,chunk__22989_23489,count__22990_23490,i__22991_23491,seq__22866_23426,chunk__22867_23427,count__22868_23428,i__22869_23429,seq__22610_23419,chunk__22611_23420,count__22612_23421,i__22613_23422,map__22997_23493,map__22997_23494__$1,gline_23495,gcol_23496,name_23497,vec__22985_23485,column_23486,column_info_23487,seq__22866_23479__$1,temp__5735__auto___23478,vec__22861_23423,line_23424,columns_23425,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23496], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23424,new cljs.core.Keyword(null,"col","col",-1959363084),column_23486,new cljs.core.Keyword(null,"name","name",1843675177),name_23497], null));
});})(seq__22988_23488,chunk__22989_23489,count__22990_23490,i__22991_23491,seq__22866_23426,chunk__22867_23427,count__22868_23428,i__22869_23429,seq__22610_23419,chunk__22611_23420,count__22612_23421,i__22613_23422,map__22997_23493,map__22997_23494__$1,gline_23495,gcol_23496,name_23497,vec__22985_23485,column_23486,column_info_23487,seq__22866_23479__$1,temp__5735__auto___23478,vec__22861_23423,line_23424,columns_23425,inverted))
,cljs.core.sorted_map()));


var G__23500 = seq__22988_23488;
var G__23501 = chunk__22989_23489;
var G__23502 = count__22990_23490;
var G__23503 = (i__22991_23491 + (1));
seq__22988_23488 = G__23500;
chunk__22989_23489 = G__23501;
count__22990_23490 = G__23502;
i__22991_23491 = G__23503;
continue;
} else {
var temp__5735__auto___23504__$1 = cljs.core.seq(seq__22988_23488);
if(temp__5735__auto___23504__$1){
var seq__22988_23508__$1 = temp__5735__auto___23504__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22988_23508__$1)){
var c__4556__auto___23509 = cljs.core.chunk_first(seq__22988_23508__$1);
var G__23510 = cljs.core.chunk_rest(seq__22988_23508__$1);
var G__23511 = c__4556__auto___23509;
var G__23512 = cljs.core.count(c__4556__auto___23509);
var G__23513 = (0);
seq__22988_23488 = G__23510;
chunk__22989_23489 = G__23511;
count__22990_23490 = G__23512;
i__22991_23491 = G__23513;
continue;
} else {
var map__22999_23517 = cljs.core.first(seq__22988_23508__$1);
var map__22999_23518__$1 = (((((!((map__22999_23517 == null))))?(((((map__22999_23517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22999_23517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22999_23517):map__22999_23517);
var gline_23519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22999_23518__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22999_23518__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22999_23518__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23519], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22988_23488,chunk__22989_23489,count__22990_23490,i__22991_23491,seq__22866_23426,chunk__22867_23427,count__22868_23428,i__22869_23429,seq__22610_23419,chunk__22611_23420,count__22612_23421,i__22613_23422,map__22999_23517,map__22999_23518__$1,gline_23519,gcol_23520,name_23521,seq__22988_23508__$1,temp__5735__auto___23504__$1,vec__22985_23485,column_23486,column_info_23487,seq__22866_23479__$1,temp__5735__auto___23478,vec__22861_23423,line_23424,columns_23425,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23520], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23424,new cljs.core.Keyword(null,"col","col",-1959363084),column_23486,new cljs.core.Keyword(null,"name","name",1843675177),name_23521], null));
});})(seq__22988_23488,chunk__22989_23489,count__22990_23490,i__22991_23491,seq__22866_23426,chunk__22867_23427,count__22868_23428,i__22869_23429,seq__22610_23419,chunk__22611_23420,count__22612_23421,i__22613_23422,map__22999_23517,map__22999_23518__$1,gline_23519,gcol_23520,name_23521,seq__22988_23508__$1,temp__5735__auto___23504__$1,vec__22985_23485,column_23486,column_info_23487,seq__22866_23479__$1,temp__5735__auto___23478,vec__22861_23423,line_23424,columns_23425,inverted))
,cljs.core.sorted_map()));


var G__23526 = cljs.core.next(seq__22988_23508__$1);
var G__23527 = null;
var G__23528 = (0);
var G__23529 = (0);
seq__22988_23488 = G__23526;
chunk__22989_23489 = G__23527;
count__22990_23490 = G__23528;
i__22991_23491 = G__23529;
continue;
}
} else {
}
}
break;
}


var G__23530 = cljs.core.next(seq__22866_23479__$1);
var G__23531 = null;
var G__23532 = (0);
var G__23533 = (0);
seq__22866_23426 = G__23530;
chunk__22867_23427 = G__23531;
count__22868_23428 = G__23532;
i__22869_23429 = G__23533;
continue;
}
} else {
}
}
break;
}


var G__23534 = seq__22610_23419;
var G__23535 = chunk__22611_23420;
var G__23536 = count__22612_23421;
var G__23537 = (i__22613_23422 + (1));
seq__22610_23419 = G__23534;
chunk__22611_23420 = G__23535;
count__22612_23421 = G__23536;
i__22613_23422 = G__23537;
continue;
} else {
var temp__5735__auto___23538 = cljs.core.seq(seq__22610_23419);
if(temp__5735__auto___23538){
var seq__22610_23539__$1 = temp__5735__auto___23538;
if(cljs.core.chunked_seq_QMARK_(seq__22610_23539__$1)){
var c__4556__auto___23540 = cljs.core.chunk_first(seq__22610_23539__$1);
var G__23541 = cljs.core.chunk_rest(seq__22610_23539__$1);
var G__23542 = c__4556__auto___23540;
var G__23543 = cljs.core.count(c__4556__auto___23540);
var G__23544 = (0);
seq__22610_23419 = G__23541;
chunk__22611_23420 = G__23542;
count__22612_23421 = G__23543;
i__22613_23422 = G__23544;
continue;
} else {
var vec__23001_23545 = cljs.core.first(seq__22610_23539__$1);
var line_23546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23001_23545,(0),null);
var columns_23547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23001_23545,(1),null);
var seq__23004_23548 = cljs.core.seq(columns_23547);
var chunk__23005_23549 = null;
var count__23006_23550 = (0);
var i__23007_23551 = (0);
while(true){
if((i__23007_23551 < count__23006_23550)){
var vec__23081_23552 = chunk__23005_23549.cljs$core$IIndexed$_nth$arity$2(null,i__23007_23551);
var column_23553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23081_23552,(0),null);
var column_info_23554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23081_23552,(1),null);
var seq__23121_23555 = cljs.core.seq(column_info_23554);
var chunk__23122_23556 = null;
var count__23123_23557 = (0);
var i__23124_23558 = (0);
while(true){
if((i__23124_23558 < count__23123_23557)){
var map__23137_23560 = chunk__23122_23556.cljs$core$IIndexed$_nth$arity$2(null,i__23124_23558);
var map__23137_23561__$1 = (((((!((map__23137_23560 == null))))?(((((map__23137_23560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23137_23560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23137_23560):map__23137_23560);
var gline_23562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23137_23561__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23137_23561__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23137_23561__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23562], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23121_23555,chunk__23122_23556,count__23123_23557,i__23124_23558,seq__23004_23548,chunk__23005_23549,count__23006_23550,i__23007_23551,seq__22610_23419,chunk__22611_23420,count__22612_23421,i__22613_23422,map__23137_23560,map__23137_23561__$1,gline_23562,gcol_23563,name_23564,vec__23081_23552,column_23553,column_info_23554,vec__23001_23545,line_23546,columns_23547,seq__22610_23539__$1,temp__5735__auto___23538,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23563], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23546,new cljs.core.Keyword(null,"col","col",-1959363084),column_23553,new cljs.core.Keyword(null,"name","name",1843675177),name_23564], null));
});})(seq__23121_23555,chunk__23122_23556,count__23123_23557,i__23124_23558,seq__23004_23548,chunk__23005_23549,count__23006_23550,i__23007_23551,seq__22610_23419,chunk__22611_23420,count__22612_23421,i__22613_23422,map__23137_23560,map__23137_23561__$1,gline_23562,gcol_23563,name_23564,vec__23081_23552,column_23553,column_info_23554,vec__23001_23545,line_23546,columns_23547,seq__22610_23539__$1,temp__5735__auto___23538,inverted))
,cljs.core.sorted_map()));


var G__23584 = seq__23121_23555;
var G__23585 = chunk__23122_23556;
var G__23586 = count__23123_23557;
var G__23587 = (i__23124_23558 + (1));
seq__23121_23555 = G__23584;
chunk__23122_23556 = G__23585;
count__23123_23557 = G__23586;
i__23124_23558 = G__23587;
continue;
} else {
var temp__5735__auto___23588__$1 = cljs.core.seq(seq__23121_23555);
if(temp__5735__auto___23588__$1){
var seq__23121_23589__$1 = temp__5735__auto___23588__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23121_23589__$1)){
var c__4556__auto___23590 = cljs.core.chunk_first(seq__23121_23589__$1);
var G__23591 = cljs.core.chunk_rest(seq__23121_23589__$1);
var G__23592 = c__4556__auto___23590;
var G__23593 = cljs.core.count(c__4556__auto___23590);
var G__23594 = (0);
seq__23121_23555 = G__23591;
chunk__23122_23556 = G__23592;
count__23123_23557 = G__23593;
i__23124_23558 = G__23594;
continue;
} else {
var map__23139_23595 = cljs.core.first(seq__23121_23589__$1);
var map__23139_23596__$1 = (((((!((map__23139_23595 == null))))?(((((map__23139_23595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23139_23595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23139_23595):map__23139_23595);
var gline_23597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23139_23596__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23139_23596__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23139_23596__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23597], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23121_23555,chunk__23122_23556,count__23123_23557,i__23124_23558,seq__23004_23548,chunk__23005_23549,count__23006_23550,i__23007_23551,seq__22610_23419,chunk__22611_23420,count__22612_23421,i__22613_23422,map__23139_23595,map__23139_23596__$1,gline_23597,gcol_23598,name_23599,seq__23121_23589__$1,temp__5735__auto___23588__$1,vec__23081_23552,column_23553,column_info_23554,vec__23001_23545,line_23546,columns_23547,seq__22610_23539__$1,temp__5735__auto___23538,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23598], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23546,new cljs.core.Keyword(null,"col","col",-1959363084),column_23553,new cljs.core.Keyword(null,"name","name",1843675177),name_23599], null));
});})(seq__23121_23555,chunk__23122_23556,count__23123_23557,i__23124_23558,seq__23004_23548,chunk__23005_23549,count__23006_23550,i__23007_23551,seq__22610_23419,chunk__22611_23420,count__22612_23421,i__22613_23422,map__23139_23595,map__23139_23596__$1,gline_23597,gcol_23598,name_23599,seq__23121_23589__$1,temp__5735__auto___23588__$1,vec__23081_23552,column_23553,column_info_23554,vec__23001_23545,line_23546,columns_23547,seq__22610_23539__$1,temp__5735__auto___23538,inverted))
,cljs.core.sorted_map()));


var G__23600 = cljs.core.next(seq__23121_23589__$1);
var G__23601 = null;
var G__23602 = (0);
var G__23603 = (0);
seq__23121_23555 = G__23600;
chunk__23122_23556 = G__23601;
count__23123_23557 = G__23602;
i__23124_23558 = G__23603;
continue;
}
} else {
}
}
break;
}


var G__23604 = seq__23004_23548;
var G__23605 = chunk__23005_23549;
var G__23606 = count__23006_23550;
var G__23607 = (i__23007_23551 + (1));
seq__23004_23548 = G__23604;
chunk__23005_23549 = G__23605;
count__23006_23550 = G__23606;
i__23007_23551 = G__23607;
continue;
} else {
var temp__5735__auto___23608__$1 = cljs.core.seq(seq__23004_23548);
if(temp__5735__auto___23608__$1){
var seq__23004_23609__$1 = temp__5735__auto___23608__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23004_23609__$1)){
var c__4556__auto___23610 = cljs.core.chunk_first(seq__23004_23609__$1);
var G__23611 = cljs.core.chunk_rest(seq__23004_23609__$1);
var G__23612 = c__4556__auto___23610;
var G__23613 = cljs.core.count(c__4556__auto___23610);
var G__23614 = (0);
seq__23004_23548 = G__23611;
chunk__23005_23549 = G__23612;
count__23006_23550 = G__23613;
i__23007_23551 = G__23614;
continue;
} else {
var vec__23141_23615 = cljs.core.first(seq__23004_23609__$1);
var column_23616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23141_23615,(0),null);
var column_info_23617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23141_23615,(1),null);
var seq__23144_23618 = cljs.core.seq(column_info_23617);
var chunk__23145_23619 = null;
var count__23146_23620 = (0);
var i__23147_23621 = (0);
while(true){
if((i__23147_23621 < count__23146_23620)){
var map__23158_23626 = chunk__23145_23619.cljs$core$IIndexed$_nth$arity$2(null,i__23147_23621);
var map__23158_23627__$1 = (((((!((map__23158_23626 == null))))?(((((map__23158_23626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23158_23626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23158_23626):map__23158_23626);
var gline_23628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23158_23627__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23158_23627__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23158_23627__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23628], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23144_23618,chunk__23145_23619,count__23146_23620,i__23147_23621,seq__23004_23548,chunk__23005_23549,count__23006_23550,i__23007_23551,seq__22610_23419,chunk__22611_23420,count__22612_23421,i__22613_23422,map__23158_23626,map__23158_23627__$1,gline_23628,gcol_23629,name_23630,vec__23141_23615,column_23616,column_info_23617,seq__23004_23609__$1,temp__5735__auto___23608__$1,vec__23001_23545,line_23546,columns_23547,seq__22610_23539__$1,temp__5735__auto___23538,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23629], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23546,new cljs.core.Keyword(null,"col","col",-1959363084),column_23616,new cljs.core.Keyword(null,"name","name",1843675177),name_23630], null));
});})(seq__23144_23618,chunk__23145_23619,count__23146_23620,i__23147_23621,seq__23004_23548,chunk__23005_23549,count__23006_23550,i__23007_23551,seq__22610_23419,chunk__22611_23420,count__22612_23421,i__22613_23422,map__23158_23626,map__23158_23627__$1,gline_23628,gcol_23629,name_23630,vec__23141_23615,column_23616,column_info_23617,seq__23004_23609__$1,temp__5735__auto___23608__$1,vec__23001_23545,line_23546,columns_23547,seq__22610_23539__$1,temp__5735__auto___23538,inverted))
,cljs.core.sorted_map()));


var G__23639 = seq__23144_23618;
var G__23640 = chunk__23145_23619;
var G__23641 = count__23146_23620;
var G__23642 = (i__23147_23621 + (1));
seq__23144_23618 = G__23639;
chunk__23145_23619 = G__23640;
count__23146_23620 = G__23641;
i__23147_23621 = G__23642;
continue;
} else {
var temp__5735__auto___23643__$2 = cljs.core.seq(seq__23144_23618);
if(temp__5735__auto___23643__$2){
var seq__23144_23644__$1 = temp__5735__auto___23643__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23144_23644__$1)){
var c__4556__auto___23645 = cljs.core.chunk_first(seq__23144_23644__$1);
var G__23646 = cljs.core.chunk_rest(seq__23144_23644__$1);
var G__23647 = c__4556__auto___23645;
var G__23648 = cljs.core.count(c__4556__auto___23645);
var G__23649 = (0);
seq__23144_23618 = G__23646;
chunk__23145_23619 = G__23647;
count__23146_23620 = G__23648;
i__23147_23621 = G__23649;
continue;
} else {
var map__23160_23650 = cljs.core.first(seq__23144_23644__$1);
var map__23160_23651__$1 = (((((!((map__23160_23650 == null))))?(((((map__23160_23650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23160_23650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23160_23650):map__23160_23650);
var gline_23652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23160_23651__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23160_23651__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23160_23651__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23652], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__23144_23618,chunk__23145_23619,count__23146_23620,i__23147_23621,seq__23004_23548,chunk__23005_23549,count__23006_23550,i__23007_23551,seq__22610_23419,chunk__22611_23420,count__22612_23421,i__22613_23422,map__23160_23650,map__23160_23651__$1,gline_23652,gcol_23653,name_23654,seq__23144_23644__$1,temp__5735__auto___23643__$2,vec__23141_23615,column_23616,column_info_23617,seq__23004_23609__$1,temp__5735__auto___23608__$1,vec__23001_23545,line_23546,columns_23547,seq__22610_23539__$1,temp__5735__auto___23538,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23653], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23546,new cljs.core.Keyword(null,"col","col",-1959363084),column_23616,new cljs.core.Keyword(null,"name","name",1843675177),name_23654], null));
});})(seq__23144_23618,chunk__23145_23619,count__23146_23620,i__23147_23621,seq__23004_23548,chunk__23005_23549,count__23006_23550,i__23007_23551,seq__22610_23419,chunk__22611_23420,count__22612_23421,i__22613_23422,map__23160_23650,map__23160_23651__$1,gline_23652,gcol_23653,name_23654,seq__23144_23644__$1,temp__5735__auto___23643__$2,vec__23141_23615,column_23616,column_info_23617,seq__23004_23609__$1,temp__5735__auto___23608__$1,vec__23001_23545,line_23546,columns_23547,seq__22610_23539__$1,temp__5735__auto___23538,inverted))
,cljs.core.sorted_map()));


var G__23659 = cljs.core.next(seq__23144_23644__$1);
var G__23660 = null;
var G__23661 = (0);
var G__23662 = (0);
seq__23144_23618 = G__23659;
chunk__23145_23619 = G__23660;
count__23146_23620 = G__23661;
i__23147_23621 = G__23662;
continue;
}
} else {
}
}
break;
}


var G__23664 = cljs.core.next(seq__23004_23609__$1);
var G__23665 = null;
var G__23666 = (0);
var G__23667 = (0);
seq__23004_23548 = G__23664;
chunk__23005_23549 = G__23665;
count__23006_23550 = G__23666;
i__23007_23551 = G__23667;
continue;
}
} else {
}
}
break;
}


var G__23671 = cljs.core.next(seq__22610_23539__$1);
var G__23672 = null;
var G__23673 = (0);
var G__23674 = (0);
seq__22610_23419 = G__23671;
chunk__22611_23420 = G__23672;
count__22612_23421 = G__23673;
i__22613_23422 = G__23674;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
