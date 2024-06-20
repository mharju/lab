goog.provide('cljs.source_map');
goog.scope(function(){
  cljs.source_map.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__21535){
var vec__21536 = p__21535;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21536,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21536,(1),null);
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
var vec__21544 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21544,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21544,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21544,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21544,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21544,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(cljs.source_map.goog$module$goog$object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5753__auto__)){
var name__$1 = temp__5753__auto__;
return (cljs.source_map.goog$module$goog$object.get(source_map,"names")[name__$1]);
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
var vec__21552 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21552,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21552,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21552,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21552,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21552,(4),null);
var vec__21555 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21555,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21555,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21555,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21555,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21555,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4253__auto__ = col;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4253__auto__ = name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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
var map__21565 = segmap;
var map__21565__$1 = cljs.core.__destructure_map(map__21565);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21565__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21565__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21565__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21565__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21565__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__21577 = arguments.length;
switch (G__21577) {
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
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(cljs.source_map.goog$module$goog$object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = cljs.source_map.goog$module$goog$object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__21586 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__22524 = cljs.core.next(segs__$1);
var G__22525 = nrelseg;
var G__22526 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__22524;
relseg__$1 = G__22525;
result__$1 = G__22526;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21586,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21586,(1),null);
var G__22529 = (gline + (1));
var G__22530 = cljs.core.next(lines__$1);
var G__22531 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__22532 = result__$1;
gline = G__22529;
lines__$1 = G__22530;
relseg = G__22531;
result = G__22532;
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
var map__21592 = segmap;
var map__21592__$1 = cljs.core.__destructure_map(map__21592);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21592__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21592__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21592__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21592__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21592__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__21589_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21589_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__21602 = arguments.length;
switch (G__21602) {
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
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(cljs.source_map.goog$module$goog$object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = cljs.source_map.goog$module$goog$object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__21606 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__22536 = cljs.core.next(segs__$1);
var G__22537 = nrelseg;
var G__22538 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__22536;
relseg__$1 = G__22537;
result__$1 = G__22538;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21606,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21606,(1),null);
var G__22539 = (gline + (1));
var G__22540 = cljs.core.next(lines__$1);
var G__22541 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__22542 = result__$1;
gline = G__22539;
lines__$1 = G__22540;
relseg = G__22541;
result = G__22542;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__21623){
var vec__21629 = p__21623;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21629,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21629,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21629,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21629,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21629,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__21641){
var vec__21645 = p__21641;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21645,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21645,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21645,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21645,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21645,(4),null);
var seg = vec__21645;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__21648){
var vec__21652 = p__21648;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21652,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21652,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21652,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21652,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21652,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4253__auto__ = name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5751__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5751__auto__)){
var name = temp__5751__auto__;
var idx = (function (){var temp__5751__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5751__auto____$1)){
var idx = temp__5751__auto____$1;
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
var seq__21661 = cljs.core.seq(infos);
var chunk__21662 = null;
var count__21663 = (0);
var i__21664 = (0);
while(true){
if((i__21664 < count__21663)){
var info = chunk__21662.cljs$core$IIndexed$_nth$arity$2(null,i__21664);
var segv_22547 = info__GT_segv(info,source_idx,line,col);
var gline_22548 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_22549 = cljs.core.count(cljs.core.deref(lines));
if((gline_22548 > (lc_22549 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__21661,chunk__21662,count__21663,i__21664,segv_22547,gline_22548,lc_22549,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_22548 - (lc_22549 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_22547], null));
});})(seq__21661,chunk__21662,count__21663,i__21664,segv_22547,gline_22548,lc_22549,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__21661,chunk__21662,count__21663,i__21664,segv_22547,gline_22548,lc_22549,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22548], null),cljs.core.conj,segv_22547);
});})(seq__21661,chunk__21662,count__21663,i__21664,segv_22547,gline_22548,lc_22549,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__22550 = seq__21661;
var G__22551 = chunk__21662;
var G__22552 = count__21663;
var G__22553 = (i__21664 + (1));
seq__21661 = G__22550;
chunk__21662 = G__22551;
count__21663 = G__22552;
i__21664 = G__22553;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21661);
if(temp__5753__auto__){
var seq__21661__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21661__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__21661__$1);
var G__22554 = cljs.core.chunk_rest(seq__21661__$1);
var G__22555 = c__4679__auto__;
var G__22556 = cljs.core.count(c__4679__auto__);
var G__22557 = (0);
seq__21661 = G__22554;
chunk__21662 = G__22555;
count__21663 = G__22556;
i__21664 = G__22557;
continue;
} else {
var info = cljs.core.first(seq__21661__$1);
var segv_22559 = info__GT_segv(info,source_idx,line,col);
var gline_22560 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_22561 = cljs.core.count(cljs.core.deref(lines));
if((gline_22560 > (lc_22561 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__21661,chunk__21662,count__21663,i__21664,segv_22559,gline_22560,lc_22561,info,seq__21661__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_22560 - (lc_22561 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_22559], null));
});})(seq__21661,chunk__21662,count__21663,i__21664,segv_22559,gline_22560,lc_22561,info,seq__21661__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__21661,chunk__21662,count__21663,i__21664,segv_22559,gline_22560,lc_22561,info,seq__21661__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22560], null),cljs.core.conj,segv_22559);
});})(seq__21661,chunk__21662,count__21663,i__21664,segv_22559,gline_22560,lc_22561,info,seq__21661__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__22565 = cljs.core.next(seq__21661__$1);
var G__22566 = null;
var G__22567 = (0);
var G__22568 = (0);
seq__21661 = G__22565;
chunk__21662 = G__22566;
count__21663 = G__22567;
i__21664 = G__22568;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__21695_22569 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__21696_22570 = null;
var count__21697_22571 = (0);
var i__21698_22572 = (0);
while(true){
if((i__21698_22572 < count__21697_22571)){
var vec__21923_22573 = chunk__21696_22570.cljs$core$IIndexed$_nth$arity$2(null,i__21698_22572);
var source_idx_22574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21923_22573,(0),null);
var vec__21926_22575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21923_22573,(1),null);
var __22576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21926_22575,(0),null);
var lines_22577__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21926_22575,(1),null);
var seq__21932_22578 = cljs.core.seq(lines_22577__$1);
var chunk__21933_22579 = null;
var count__21934_22580 = (0);
var i__21935_22581 = (0);
while(true){
if((i__21935_22581 < count__21934_22580)){
var vec__22034_22582 = chunk__21933_22579.cljs$core$IIndexed$_nth$arity$2(null,i__21935_22581);
var line_22583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22034_22582,(0),null);
var cols_22584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22034_22582,(1),null);
var seq__22037_22585 = cljs.core.seq(cols_22584);
var chunk__22038_22586 = null;
var count__22039_22587 = (0);
var i__22040_22588 = (0);
while(true){
if((i__22040_22588 < count__22039_22587)){
var vec__22050_22589 = chunk__22038_22586.cljs$core$IIndexed$_nth$arity$2(null,i__22040_22588);
var col_22590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22050_22589,(0),null);
var infos_22591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22050_22589,(1),null);
encode_cols(infos_22591,source_idx_22574,line_22583,col_22590);


var G__22592 = seq__22037_22585;
var G__22593 = chunk__22038_22586;
var G__22594 = count__22039_22587;
var G__22595 = (i__22040_22588 + (1));
seq__22037_22585 = G__22592;
chunk__22038_22586 = G__22593;
count__22039_22587 = G__22594;
i__22040_22588 = G__22595;
continue;
} else {
var temp__5753__auto___22596 = cljs.core.seq(seq__22037_22585);
if(temp__5753__auto___22596){
var seq__22037_22597__$1 = temp__5753__auto___22596;
if(cljs.core.chunked_seq_QMARK_(seq__22037_22597__$1)){
var c__4679__auto___22598 = cljs.core.chunk_first(seq__22037_22597__$1);
var G__22599 = cljs.core.chunk_rest(seq__22037_22597__$1);
var G__22600 = c__4679__auto___22598;
var G__22601 = cljs.core.count(c__4679__auto___22598);
var G__22602 = (0);
seq__22037_22585 = G__22599;
chunk__22038_22586 = G__22600;
count__22039_22587 = G__22601;
i__22040_22588 = G__22602;
continue;
} else {
var vec__22058_22603 = cljs.core.first(seq__22037_22597__$1);
var col_22604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22058_22603,(0),null);
var infos_22605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22058_22603,(1),null);
encode_cols(infos_22605,source_idx_22574,line_22583,col_22604);


var G__22606 = cljs.core.next(seq__22037_22597__$1);
var G__22607 = null;
var G__22608 = (0);
var G__22609 = (0);
seq__22037_22585 = G__22606;
chunk__22038_22586 = G__22607;
count__22039_22587 = G__22608;
i__22040_22588 = G__22609;
continue;
}
} else {
}
}
break;
}


var G__22610 = seq__21932_22578;
var G__22611 = chunk__21933_22579;
var G__22612 = count__21934_22580;
var G__22613 = (i__21935_22581 + (1));
seq__21932_22578 = G__22610;
chunk__21933_22579 = G__22611;
count__21934_22580 = G__22612;
i__21935_22581 = G__22613;
continue;
} else {
var temp__5753__auto___22614 = cljs.core.seq(seq__21932_22578);
if(temp__5753__auto___22614){
var seq__21932_22615__$1 = temp__5753__auto___22614;
if(cljs.core.chunked_seq_QMARK_(seq__21932_22615__$1)){
var c__4679__auto___22616 = cljs.core.chunk_first(seq__21932_22615__$1);
var G__22617 = cljs.core.chunk_rest(seq__21932_22615__$1);
var G__22618 = c__4679__auto___22616;
var G__22619 = cljs.core.count(c__4679__auto___22616);
var G__22620 = (0);
seq__21932_22578 = G__22617;
chunk__21933_22579 = G__22618;
count__21934_22580 = G__22619;
i__21935_22581 = G__22620;
continue;
} else {
var vec__22062_22621 = cljs.core.first(seq__21932_22615__$1);
var line_22622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22062_22621,(0),null);
var cols_22623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22062_22621,(1),null);
var seq__22065_22626 = cljs.core.seq(cols_22623);
var chunk__22066_22627 = null;
var count__22067_22628 = (0);
var i__22068_22629 = (0);
while(true){
if((i__22068_22629 < count__22067_22628)){
var vec__22079_22630 = chunk__22066_22627.cljs$core$IIndexed$_nth$arity$2(null,i__22068_22629);
var col_22631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22079_22630,(0),null);
var infos_22632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22079_22630,(1),null);
encode_cols(infos_22632,source_idx_22574,line_22622,col_22631);


var G__22635 = seq__22065_22626;
var G__22636 = chunk__22066_22627;
var G__22637 = count__22067_22628;
var G__22638 = (i__22068_22629 + (1));
seq__22065_22626 = G__22635;
chunk__22066_22627 = G__22636;
count__22067_22628 = G__22637;
i__22068_22629 = G__22638;
continue;
} else {
var temp__5753__auto___22639__$1 = cljs.core.seq(seq__22065_22626);
if(temp__5753__auto___22639__$1){
var seq__22065_22640__$1 = temp__5753__auto___22639__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22065_22640__$1)){
var c__4679__auto___22641 = cljs.core.chunk_first(seq__22065_22640__$1);
var G__22642 = cljs.core.chunk_rest(seq__22065_22640__$1);
var G__22643 = c__4679__auto___22641;
var G__22644 = cljs.core.count(c__4679__auto___22641);
var G__22645 = (0);
seq__22065_22626 = G__22642;
chunk__22066_22627 = G__22643;
count__22067_22628 = G__22644;
i__22068_22629 = G__22645;
continue;
} else {
var vec__22082_22647 = cljs.core.first(seq__22065_22640__$1);
var col_22648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22082_22647,(0),null);
var infos_22649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22082_22647,(1),null);
encode_cols(infos_22649,source_idx_22574,line_22622,col_22648);


var G__22650 = cljs.core.next(seq__22065_22640__$1);
var G__22651 = null;
var G__22652 = (0);
var G__22653 = (0);
seq__22065_22626 = G__22650;
chunk__22066_22627 = G__22651;
count__22067_22628 = G__22652;
i__22068_22629 = G__22653;
continue;
}
} else {
}
}
break;
}


var G__22654 = cljs.core.next(seq__21932_22615__$1);
var G__22655 = null;
var G__22656 = (0);
var G__22657 = (0);
seq__21932_22578 = G__22654;
chunk__21933_22579 = G__22655;
count__21934_22580 = G__22656;
i__21935_22581 = G__22657;
continue;
}
} else {
}
}
break;
}


var G__22658 = seq__21695_22569;
var G__22659 = chunk__21696_22570;
var G__22660 = count__21697_22571;
var G__22661 = (i__21698_22572 + (1));
seq__21695_22569 = G__22658;
chunk__21696_22570 = G__22659;
count__21697_22571 = G__22660;
i__21698_22572 = G__22661;
continue;
} else {
var temp__5753__auto___22662 = cljs.core.seq(seq__21695_22569);
if(temp__5753__auto___22662){
var seq__21695_22663__$1 = temp__5753__auto___22662;
if(cljs.core.chunked_seq_QMARK_(seq__21695_22663__$1)){
var c__4679__auto___22664 = cljs.core.chunk_first(seq__21695_22663__$1);
var G__22665 = cljs.core.chunk_rest(seq__21695_22663__$1);
var G__22666 = c__4679__auto___22664;
var G__22667 = cljs.core.count(c__4679__auto___22664);
var G__22668 = (0);
seq__21695_22569 = G__22665;
chunk__21696_22570 = G__22666;
count__21697_22571 = G__22667;
i__21698_22572 = G__22668;
continue;
} else {
var vec__22088_22669 = cljs.core.first(seq__21695_22663__$1);
var source_idx_22670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22088_22669,(0),null);
var vec__22091_22671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22088_22669,(1),null);
var __22672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22091_22671,(0),null);
var lines_22673__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22091_22671,(1),null);
var seq__22095_22674 = cljs.core.seq(lines_22673__$1);
var chunk__22096_22675 = null;
var count__22097_22676 = (0);
var i__22098_22677 = (0);
while(true){
if((i__22098_22677 < count__22097_22676)){
var vec__22156_22678 = chunk__22096_22675.cljs$core$IIndexed$_nth$arity$2(null,i__22098_22677);
var line_22679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22156_22678,(0),null);
var cols_22680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22156_22678,(1),null);
var seq__22159_22681 = cljs.core.seq(cols_22680);
var chunk__22160_22682 = null;
var count__22161_22683 = (0);
var i__22162_22684 = (0);
while(true){
if((i__22162_22684 < count__22161_22683)){
var vec__22183_22685 = chunk__22160_22682.cljs$core$IIndexed$_nth$arity$2(null,i__22162_22684);
var col_22686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22183_22685,(0),null);
var infos_22687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22183_22685,(1),null);
encode_cols(infos_22687,source_idx_22670,line_22679,col_22686);


var G__22688 = seq__22159_22681;
var G__22689 = chunk__22160_22682;
var G__22690 = count__22161_22683;
var G__22691 = (i__22162_22684 + (1));
seq__22159_22681 = G__22688;
chunk__22160_22682 = G__22689;
count__22161_22683 = G__22690;
i__22162_22684 = G__22691;
continue;
} else {
var temp__5753__auto___22692__$1 = cljs.core.seq(seq__22159_22681);
if(temp__5753__auto___22692__$1){
var seq__22159_22693__$1 = temp__5753__auto___22692__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22159_22693__$1)){
var c__4679__auto___22694 = cljs.core.chunk_first(seq__22159_22693__$1);
var G__22695 = cljs.core.chunk_rest(seq__22159_22693__$1);
var G__22696 = c__4679__auto___22694;
var G__22697 = cljs.core.count(c__4679__auto___22694);
var G__22698 = (0);
seq__22159_22681 = G__22695;
chunk__22160_22682 = G__22696;
count__22161_22683 = G__22697;
i__22162_22684 = G__22698;
continue;
} else {
var vec__22186_22699 = cljs.core.first(seq__22159_22693__$1);
var col_22700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22186_22699,(0),null);
var infos_22701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22186_22699,(1),null);
encode_cols(infos_22701,source_idx_22670,line_22679,col_22700);


var G__22702 = cljs.core.next(seq__22159_22693__$1);
var G__22703 = null;
var G__22704 = (0);
var G__22705 = (0);
seq__22159_22681 = G__22702;
chunk__22160_22682 = G__22703;
count__22161_22683 = G__22704;
i__22162_22684 = G__22705;
continue;
}
} else {
}
}
break;
}


var G__22706 = seq__22095_22674;
var G__22707 = chunk__22096_22675;
var G__22708 = count__22097_22676;
var G__22709 = (i__22098_22677 + (1));
seq__22095_22674 = G__22706;
chunk__22096_22675 = G__22707;
count__22097_22676 = G__22708;
i__22098_22677 = G__22709;
continue;
} else {
var temp__5753__auto___22712__$1 = cljs.core.seq(seq__22095_22674);
if(temp__5753__auto___22712__$1){
var seq__22095_22713__$1 = temp__5753__auto___22712__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22095_22713__$1)){
var c__4679__auto___22714 = cljs.core.chunk_first(seq__22095_22713__$1);
var G__22715 = cljs.core.chunk_rest(seq__22095_22713__$1);
var G__22716 = c__4679__auto___22714;
var G__22717 = cljs.core.count(c__4679__auto___22714);
var G__22718 = (0);
seq__22095_22674 = G__22715;
chunk__22096_22675 = G__22716;
count__22097_22676 = G__22717;
i__22098_22677 = G__22718;
continue;
} else {
var vec__22189_22721 = cljs.core.first(seq__22095_22713__$1);
var line_22722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22189_22721,(0),null);
var cols_22723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22189_22721,(1),null);
var seq__22192_22724 = cljs.core.seq(cols_22723);
var chunk__22193_22725 = null;
var count__22194_22726 = (0);
var i__22195_22727 = (0);
while(true){
if((i__22195_22727 < count__22194_22726)){
var vec__22207_22728 = chunk__22193_22725.cljs$core$IIndexed$_nth$arity$2(null,i__22195_22727);
var col_22729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22207_22728,(0),null);
var infos_22730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22207_22728,(1),null);
encode_cols(infos_22730,source_idx_22670,line_22722,col_22729);


var G__22733 = seq__22192_22724;
var G__22734 = chunk__22193_22725;
var G__22735 = count__22194_22726;
var G__22736 = (i__22195_22727 + (1));
seq__22192_22724 = G__22733;
chunk__22193_22725 = G__22734;
count__22194_22726 = G__22735;
i__22195_22727 = G__22736;
continue;
} else {
var temp__5753__auto___22737__$2 = cljs.core.seq(seq__22192_22724);
if(temp__5753__auto___22737__$2){
var seq__22192_22740__$1 = temp__5753__auto___22737__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22192_22740__$1)){
var c__4679__auto___22741 = cljs.core.chunk_first(seq__22192_22740__$1);
var G__22742 = cljs.core.chunk_rest(seq__22192_22740__$1);
var G__22743 = c__4679__auto___22741;
var G__22744 = cljs.core.count(c__4679__auto___22741);
var G__22745 = (0);
seq__22192_22724 = G__22742;
chunk__22193_22725 = G__22743;
count__22194_22726 = G__22744;
i__22195_22727 = G__22745;
continue;
} else {
var vec__22210_22746 = cljs.core.first(seq__22192_22740__$1);
var col_22747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22210_22746,(0),null);
var infos_22748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22210_22746,(1),null);
encode_cols(infos_22748,source_idx_22670,line_22722,col_22747);


var G__22751 = cljs.core.next(seq__22192_22740__$1);
var G__22752 = null;
var G__22753 = (0);
var G__22754 = (0);
seq__22192_22724 = G__22751;
chunk__22193_22725 = G__22752;
count__22194_22726 = G__22753;
i__22195_22727 = G__22754;
continue;
}
} else {
}
}
break;
}


var G__22755 = cljs.core.next(seq__22095_22713__$1);
var G__22756 = null;
var G__22757 = (0);
var G__22758 = (0);
seq__22095_22674 = G__22755;
chunk__22096_22675 = G__22756;
count__22097_22676 = G__22757;
i__22098_22677 = G__22758;
continue;
}
} else {
}
}
break;
}


var G__22759 = cljs.core.next(seq__21695_22663__$1);
var G__22760 = null;
var G__22761 = (0);
var G__22762 = (0);
seq__21695_22569 = G__22759;
chunk__21696_22570 = G__22760;
count__21697_22571 = G__22761;
i__21698_22572 = G__22762;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__22213 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__21655_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21655_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__21656_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__21656_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21657_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__21657_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__22214 = G__22213;
cljs.source_map.goog$module$goog$object.set(G__22214,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__22214;
} else {
return G__22213;
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
var vec__22217 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22217,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22217,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__22220 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22220,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22220,(1),null);
var G__22763 = cljs.core.next(col_map_seq);
var G__22764 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__22220,col,infos,vec__22217,line,col_map){
return (function (v,p__22223){
var map__22224 = p__22223;
var map__22224__$1 = cljs.core.__destructure_map(map__22224);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22224__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22224__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__22220,col,infos,vec__22217,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__22763;
new_cols = G__22764;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__22769 = cljs.core.next(line_map_seq);
var G__22770 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__22769;
new_lines = G__22770;
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
var seq__22228_22771 = cljs.core.seq(reverse_map);
var chunk__22229_22772 = null;
var count__22230_22773 = (0);
var i__22231_22774 = (0);
while(true){
if((i__22231_22774 < count__22230_22773)){
var vec__22376_22775 = chunk__22229_22772.cljs$core$IIndexed$_nth$arity$2(null,i__22231_22774);
var line_22776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22376_22775,(0),null);
var columns_22777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22376_22775,(1),null);
var seq__22379_22778 = cljs.core.seq(columns_22777);
var chunk__22380_22779 = null;
var count__22381_22780 = (0);
var i__22382_22781 = (0);
while(true){
if((i__22382_22781 < count__22381_22780)){
var vec__22406_22782 = chunk__22380_22779.cljs$core$IIndexed$_nth$arity$2(null,i__22382_22781);
var column_22783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22406_22782,(0),null);
var column_info_22784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22406_22782,(1),null);
var seq__22409_22785 = cljs.core.seq(column_info_22784);
var chunk__22410_22786 = null;
var count__22411_22787 = (0);
var i__22412_22788 = (0);
while(true){
if((i__22412_22788 < count__22411_22787)){
var map__22415_22789 = chunk__22410_22786.cljs$core$IIndexed$_nth$arity$2(null,i__22412_22788);
var map__22415_22790__$1 = cljs.core.__destructure_map(map__22415_22789);
var gline_22791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22415_22790__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_22792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22415_22790__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_22793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22415_22790__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22791], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22409_22785,chunk__22410_22786,count__22411_22787,i__22412_22788,seq__22379_22778,chunk__22380_22779,count__22381_22780,i__22382_22781,seq__22228_22771,chunk__22229_22772,count__22230_22773,i__22231_22774,map__22415_22789,map__22415_22790__$1,gline_22791,gcol_22792,name_22793,vec__22406_22782,column_22783,column_info_22784,vec__22376_22775,line_22776,columns_22777,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_22792], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22776,new cljs.core.Keyword(null,"col","col",-1959363084),column_22783,new cljs.core.Keyword(null,"name","name",1843675177),name_22793], null));
});})(seq__22409_22785,chunk__22410_22786,count__22411_22787,i__22412_22788,seq__22379_22778,chunk__22380_22779,count__22381_22780,i__22382_22781,seq__22228_22771,chunk__22229_22772,count__22230_22773,i__22231_22774,map__22415_22789,map__22415_22790__$1,gline_22791,gcol_22792,name_22793,vec__22406_22782,column_22783,column_info_22784,vec__22376_22775,line_22776,columns_22777,inverted))
,cljs.core.sorted_map()));


var G__22798 = seq__22409_22785;
var G__22799 = chunk__22410_22786;
var G__22800 = count__22411_22787;
var G__22801 = (i__22412_22788 + (1));
seq__22409_22785 = G__22798;
chunk__22410_22786 = G__22799;
count__22411_22787 = G__22800;
i__22412_22788 = G__22801;
continue;
} else {
var temp__5753__auto___22802 = cljs.core.seq(seq__22409_22785);
if(temp__5753__auto___22802){
var seq__22409_22803__$1 = temp__5753__auto___22802;
if(cljs.core.chunked_seq_QMARK_(seq__22409_22803__$1)){
var c__4679__auto___22804 = cljs.core.chunk_first(seq__22409_22803__$1);
var G__22805 = cljs.core.chunk_rest(seq__22409_22803__$1);
var G__22806 = c__4679__auto___22804;
var G__22807 = cljs.core.count(c__4679__auto___22804);
var G__22808 = (0);
seq__22409_22785 = G__22805;
chunk__22410_22786 = G__22806;
count__22411_22787 = G__22807;
i__22412_22788 = G__22808;
continue;
} else {
var map__22417_22809 = cljs.core.first(seq__22409_22803__$1);
var map__22417_22810__$1 = cljs.core.__destructure_map(map__22417_22809);
var gline_22811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22417_22810__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_22812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22417_22810__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_22813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22417_22810__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22811], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22409_22785,chunk__22410_22786,count__22411_22787,i__22412_22788,seq__22379_22778,chunk__22380_22779,count__22381_22780,i__22382_22781,seq__22228_22771,chunk__22229_22772,count__22230_22773,i__22231_22774,map__22417_22809,map__22417_22810__$1,gline_22811,gcol_22812,name_22813,seq__22409_22803__$1,temp__5753__auto___22802,vec__22406_22782,column_22783,column_info_22784,vec__22376_22775,line_22776,columns_22777,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_22812], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22776,new cljs.core.Keyword(null,"col","col",-1959363084),column_22783,new cljs.core.Keyword(null,"name","name",1843675177),name_22813], null));
});})(seq__22409_22785,chunk__22410_22786,count__22411_22787,i__22412_22788,seq__22379_22778,chunk__22380_22779,count__22381_22780,i__22382_22781,seq__22228_22771,chunk__22229_22772,count__22230_22773,i__22231_22774,map__22417_22809,map__22417_22810__$1,gline_22811,gcol_22812,name_22813,seq__22409_22803__$1,temp__5753__auto___22802,vec__22406_22782,column_22783,column_info_22784,vec__22376_22775,line_22776,columns_22777,inverted))
,cljs.core.sorted_map()));


var G__22818 = cljs.core.next(seq__22409_22803__$1);
var G__22819 = null;
var G__22820 = (0);
var G__22821 = (0);
seq__22409_22785 = G__22818;
chunk__22410_22786 = G__22819;
count__22411_22787 = G__22820;
i__22412_22788 = G__22821;
continue;
}
} else {
}
}
break;
}


var G__22822 = seq__22379_22778;
var G__22823 = chunk__22380_22779;
var G__22824 = count__22381_22780;
var G__22825 = (i__22382_22781 + (1));
seq__22379_22778 = G__22822;
chunk__22380_22779 = G__22823;
count__22381_22780 = G__22824;
i__22382_22781 = G__22825;
continue;
} else {
var temp__5753__auto___22826 = cljs.core.seq(seq__22379_22778);
if(temp__5753__auto___22826){
var seq__22379_22827__$1 = temp__5753__auto___22826;
if(cljs.core.chunked_seq_QMARK_(seq__22379_22827__$1)){
var c__4679__auto___22828 = cljs.core.chunk_first(seq__22379_22827__$1);
var G__22829 = cljs.core.chunk_rest(seq__22379_22827__$1);
var G__22830 = c__4679__auto___22828;
var G__22831 = cljs.core.count(c__4679__auto___22828);
var G__22832 = (0);
seq__22379_22778 = G__22829;
chunk__22380_22779 = G__22830;
count__22381_22780 = G__22831;
i__22382_22781 = G__22832;
continue;
} else {
var vec__22420_22833 = cljs.core.first(seq__22379_22827__$1);
var column_22834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22420_22833,(0),null);
var column_info_22835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22420_22833,(1),null);
var seq__22423_22838 = cljs.core.seq(column_info_22835);
var chunk__22424_22839 = null;
var count__22425_22840 = (0);
var i__22426_22841 = (0);
while(true){
if((i__22426_22841 < count__22425_22840)){
var map__22429_22843 = chunk__22424_22839.cljs$core$IIndexed$_nth$arity$2(null,i__22426_22841);
var map__22429_22845__$1 = cljs.core.__destructure_map(map__22429_22843);
var gline_22846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22429_22845__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_22847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22429_22845__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_22848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22429_22845__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22846], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22423_22838,chunk__22424_22839,count__22425_22840,i__22426_22841,seq__22379_22778,chunk__22380_22779,count__22381_22780,i__22382_22781,seq__22228_22771,chunk__22229_22772,count__22230_22773,i__22231_22774,map__22429_22843,map__22429_22845__$1,gline_22846,gcol_22847,name_22848,vec__22420_22833,column_22834,column_info_22835,seq__22379_22827__$1,temp__5753__auto___22826,vec__22376_22775,line_22776,columns_22777,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_22847], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22776,new cljs.core.Keyword(null,"col","col",-1959363084),column_22834,new cljs.core.Keyword(null,"name","name",1843675177),name_22848], null));
});})(seq__22423_22838,chunk__22424_22839,count__22425_22840,i__22426_22841,seq__22379_22778,chunk__22380_22779,count__22381_22780,i__22382_22781,seq__22228_22771,chunk__22229_22772,count__22230_22773,i__22231_22774,map__22429_22843,map__22429_22845__$1,gline_22846,gcol_22847,name_22848,vec__22420_22833,column_22834,column_info_22835,seq__22379_22827__$1,temp__5753__auto___22826,vec__22376_22775,line_22776,columns_22777,inverted))
,cljs.core.sorted_map()));


var G__22855 = seq__22423_22838;
var G__22856 = chunk__22424_22839;
var G__22857 = count__22425_22840;
var G__22858 = (i__22426_22841 + (1));
seq__22423_22838 = G__22855;
chunk__22424_22839 = G__22856;
count__22425_22840 = G__22857;
i__22426_22841 = G__22858;
continue;
} else {
var temp__5753__auto___22859__$1 = cljs.core.seq(seq__22423_22838);
if(temp__5753__auto___22859__$1){
var seq__22423_22860__$1 = temp__5753__auto___22859__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22423_22860__$1)){
var c__4679__auto___22861 = cljs.core.chunk_first(seq__22423_22860__$1);
var G__22862 = cljs.core.chunk_rest(seq__22423_22860__$1);
var G__22863 = c__4679__auto___22861;
var G__22864 = cljs.core.count(c__4679__auto___22861);
var G__22865 = (0);
seq__22423_22838 = G__22862;
chunk__22424_22839 = G__22863;
count__22425_22840 = G__22864;
i__22426_22841 = G__22865;
continue;
} else {
var map__22433_22868 = cljs.core.first(seq__22423_22860__$1);
var map__22433_22869__$1 = cljs.core.__destructure_map(map__22433_22868);
var gline_22870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22433_22869__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_22871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22433_22869__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_22872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22433_22869__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22870], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22423_22838,chunk__22424_22839,count__22425_22840,i__22426_22841,seq__22379_22778,chunk__22380_22779,count__22381_22780,i__22382_22781,seq__22228_22771,chunk__22229_22772,count__22230_22773,i__22231_22774,map__22433_22868,map__22433_22869__$1,gline_22870,gcol_22871,name_22872,seq__22423_22860__$1,temp__5753__auto___22859__$1,vec__22420_22833,column_22834,column_info_22835,seq__22379_22827__$1,temp__5753__auto___22826,vec__22376_22775,line_22776,columns_22777,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_22871], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22776,new cljs.core.Keyword(null,"col","col",-1959363084),column_22834,new cljs.core.Keyword(null,"name","name",1843675177),name_22872], null));
});})(seq__22423_22838,chunk__22424_22839,count__22425_22840,i__22426_22841,seq__22379_22778,chunk__22380_22779,count__22381_22780,i__22382_22781,seq__22228_22771,chunk__22229_22772,count__22230_22773,i__22231_22774,map__22433_22868,map__22433_22869__$1,gline_22870,gcol_22871,name_22872,seq__22423_22860__$1,temp__5753__auto___22859__$1,vec__22420_22833,column_22834,column_info_22835,seq__22379_22827__$1,temp__5753__auto___22826,vec__22376_22775,line_22776,columns_22777,inverted))
,cljs.core.sorted_map()));


var G__22874 = cljs.core.next(seq__22423_22860__$1);
var G__22875 = null;
var G__22876 = (0);
var G__22877 = (0);
seq__22423_22838 = G__22874;
chunk__22424_22839 = G__22875;
count__22425_22840 = G__22876;
i__22426_22841 = G__22877;
continue;
}
} else {
}
}
break;
}


var G__22878 = cljs.core.next(seq__22379_22827__$1);
var G__22879 = null;
var G__22880 = (0);
var G__22881 = (0);
seq__22379_22778 = G__22878;
chunk__22380_22779 = G__22879;
count__22381_22780 = G__22880;
i__22382_22781 = G__22881;
continue;
}
} else {
}
}
break;
}


var G__22882 = seq__22228_22771;
var G__22883 = chunk__22229_22772;
var G__22884 = count__22230_22773;
var G__22886 = (i__22231_22774 + (1));
seq__22228_22771 = G__22882;
chunk__22229_22772 = G__22883;
count__22230_22773 = G__22884;
i__22231_22774 = G__22886;
continue;
} else {
var temp__5753__auto___22889 = cljs.core.seq(seq__22228_22771);
if(temp__5753__auto___22889){
var seq__22228_22890__$1 = temp__5753__auto___22889;
if(cljs.core.chunked_seq_QMARK_(seq__22228_22890__$1)){
var c__4679__auto___22891 = cljs.core.chunk_first(seq__22228_22890__$1);
var G__22892 = cljs.core.chunk_rest(seq__22228_22890__$1);
var G__22893 = c__4679__auto___22891;
var G__22894 = cljs.core.count(c__4679__auto___22891);
var G__22895 = (0);
seq__22228_22771 = G__22892;
chunk__22229_22772 = G__22893;
count__22230_22773 = G__22894;
i__22231_22774 = G__22895;
continue;
} else {
var vec__22436_22896 = cljs.core.first(seq__22228_22890__$1);
var line_22897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22436_22896,(0),null);
var columns_22898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22436_22896,(1),null);
var seq__22439_22899 = cljs.core.seq(columns_22898);
var chunk__22440_22900 = null;
var count__22441_22901 = (0);
var i__22442_22902 = (0);
while(true){
if((i__22442_22902 < count__22441_22901)){
var vec__22472_22905 = chunk__22440_22900.cljs$core$IIndexed$_nth$arity$2(null,i__22442_22902);
var column_22906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22472_22905,(0),null);
var column_info_22907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22472_22905,(1),null);
var seq__22475_22908 = cljs.core.seq(column_info_22907);
var chunk__22476_22909 = null;
var count__22477_22910 = (0);
var i__22478_22911 = (0);
while(true){
if((i__22478_22911 < count__22477_22910)){
var map__22481_22912 = chunk__22476_22909.cljs$core$IIndexed$_nth$arity$2(null,i__22478_22911);
var map__22481_22913__$1 = cljs.core.__destructure_map(map__22481_22912);
var gline_22914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22481_22913__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_22915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22481_22913__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_22916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22481_22913__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22914], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22475_22908,chunk__22476_22909,count__22477_22910,i__22478_22911,seq__22439_22899,chunk__22440_22900,count__22441_22901,i__22442_22902,seq__22228_22771,chunk__22229_22772,count__22230_22773,i__22231_22774,map__22481_22912,map__22481_22913__$1,gline_22914,gcol_22915,name_22916,vec__22472_22905,column_22906,column_info_22907,vec__22436_22896,line_22897,columns_22898,seq__22228_22890__$1,temp__5753__auto___22889,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_22915], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22897,new cljs.core.Keyword(null,"col","col",-1959363084),column_22906,new cljs.core.Keyword(null,"name","name",1843675177),name_22916], null));
});})(seq__22475_22908,chunk__22476_22909,count__22477_22910,i__22478_22911,seq__22439_22899,chunk__22440_22900,count__22441_22901,i__22442_22902,seq__22228_22771,chunk__22229_22772,count__22230_22773,i__22231_22774,map__22481_22912,map__22481_22913__$1,gline_22914,gcol_22915,name_22916,vec__22472_22905,column_22906,column_info_22907,vec__22436_22896,line_22897,columns_22898,seq__22228_22890__$1,temp__5753__auto___22889,inverted))
,cljs.core.sorted_map()));


var G__22917 = seq__22475_22908;
var G__22918 = chunk__22476_22909;
var G__22919 = count__22477_22910;
var G__22920 = (i__22478_22911 + (1));
seq__22475_22908 = G__22917;
chunk__22476_22909 = G__22918;
count__22477_22910 = G__22919;
i__22478_22911 = G__22920;
continue;
} else {
var temp__5753__auto___22921__$1 = cljs.core.seq(seq__22475_22908);
if(temp__5753__auto___22921__$1){
var seq__22475_22922__$1 = temp__5753__auto___22921__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22475_22922__$1)){
var c__4679__auto___22923 = cljs.core.chunk_first(seq__22475_22922__$1);
var G__22924 = cljs.core.chunk_rest(seq__22475_22922__$1);
var G__22925 = c__4679__auto___22923;
var G__22926 = cljs.core.count(c__4679__auto___22923);
var G__22927 = (0);
seq__22475_22908 = G__22924;
chunk__22476_22909 = G__22925;
count__22477_22910 = G__22926;
i__22478_22911 = G__22927;
continue;
} else {
var map__22482_22928 = cljs.core.first(seq__22475_22922__$1);
var map__22482_22929__$1 = cljs.core.__destructure_map(map__22482_22928);
var gline_22930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22482_22929__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_22931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22482_22929__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_22932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22482_22929__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22930], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22475_22908,chunk__22476_22909,count__22477_22910,i__22478_22911,seq__22439_22899,chunk__22440_22900,count__22441_22901,i__22442_22902,seq__22228_22771,chunk__22229_22772,count__22230_22773,i__22231_22774,map__22482_22928,map__22482_22929__$1,gline_22930,gcol_22931,name_22932,seq__22475_22922__$1,temp__5753__auto___22921__$1,vec__22472_22905,column_22906,column_info_22907,vec__22436_22896,line_22897,columns_22898,seq__22228_22890__$1,temp__5753__auto___22889,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_22931], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22897,new cljs.core.Keyword(null,"col","col",-1959363084),column_22906,new cljs.core.Keyword(null,"name","name",1843675177),name_22932], null));
});})(seq__22475_22908,chunk__22476_22909,count__22477_22910,i__22478_22911,seq__22439_22899,chunk__22440_22900,count__22441_22901,i__22442_22902,seq__22228_22771,chunk__22229_22772,count__22230_22773,i__22231_22774,map__22482_22928,map__22482_22929__$1,gline_22930,gcol_22931,name_22932,seq__22475_22922__$1,temp__5753__auto___22921__$1,vec__22472_22905,column_22906,column_info_22907,vec__22436_22896,line_22897,columns_22898,seq__22228_22890__$1,temp__5753__auto___22889,inverted))
,cljs.core.sorted_map()));


var G__22937 = cljs.core.next(seq__22475_22922__$1);
var G__22938 = null;
var G__22939 = (0);
var G__22940 = (0);
seq__22475_22908 = G__22937;
chunk__22476_22909 = G__22938;
count__22477_22910 = G__22939;
i__22478_22911 = G__22940;
continue;
}
} else {
}
}
break;
}


var G__22943 = seq__22439_22899;
var G__22944 = chunk__22440_22900;
var G__22945 = count__22441_22901;
var G__22946 = (i__22442_22902 + (1));
seq__22439_22899 = G__22943;
chunk__22440_22900 = G__22944;
count__22441_22901 = G__22945;
i__22442_22902 = G__22946;
continue;
} else {
var temp__5753__auto___22947__$1 = cljs.core.seq(seq__22439_22899);
if(temp__5753__auto___22947__$1){
var seq__22439_22948__$1 = temp__5753__auto___22947__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22439_22948__$1)){
var c__4679__auto___22949 = cljs.core.chunk_first(seq__22439_22948__$1);
var G__22952 = cljs.core.chunk_rest(seq__22439_22948__$1);
var G__22953 = c__4679__auto___22949;
var G__22954 = cljs.core.count(c__4679__auto___22949);
var G__22955 = (0);
seq__22439_22899 = G__22952;
chunk__22440_22900 = G__22953;
count__22441_22901 = G__22954;
i__22442_22902 = G__22955;
continue;
} else {
var vec__22483_22956 = cljs.core.first(seq__22439_22948__$1);
var column_22957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22483_22956,(0),null);
var column_info_22958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22483_22956,(1),null);
var seq__22486_22959 = cljs.core.seq(column_info_22958);
var chunk__22487_22960 = null;
var count__22488_22961 = (0);
var i__22489_22962 = (0);
while(true){
if((i__22489_22962 < count__22488_22961)){
var map__22494_22965 = chunk__22487_22960.cljs$core$IIndexed$_nth$arity$2(null,i__22489_22962);
var map__22494_22966__$1 = cljs.core.__destructure_map(map__22494_22965);
var gline_22967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22494_22966__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_22968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22494_22966__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_22969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22494_22966__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22967], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22486_22959,chunk__22487_22960,count__22488_22961,i__22489_22962,seq__22439_22899,chunk__22440_22900,count__22441_22901,i__22442_22902,seq__22228_22771,chunk__22229_22772,count__22230_22773,i__22231_22774,map__22494_22965,map__22494_22966__$1,gline_22967,gcol_22968,name_22969,vec__22483_22956,column_22957,column_info_22958,seq__22439_22948__$1,temp__5753__auto___22947__$1,vec__22436_22896,line_22897,columns_22898,seq__22228_22890__$1,temp__5753__auto___22889,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_22968], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22897,new cljs.core.Keyword(null,"col","col",-1959363084),column_22957,new cljs.core.Keyword(null,"name","name",1843675177),name_22969], null));
});})(seq__22486_22959,chunk__22487_22960,count__22488_22961,i__22489_22962,seq__22439_22899,chunk__22440_22900,count__22441_22901,i__22442_22902,seq__22228_22771,chunk__22229_22772,count__22230_22773,i__22231_22774,map__22494_22965,map__22494_22966__$1,gline_22967,gcol_22968,name_22969,vec__22483_22956,column_22957,column_info_22958,seq__22439_22948__$1,temp__5753__auto___22947__$1,vec__22436_22896,line_22897,columns_22898,seq__22228_22890__$1,temp__5753__auto___22889,inverted))
,cljs.core.sorted_map()));


var G__22972 = seq__22486_22959;
var G__22973 = chunk__22487_22960;
var G__22974 = count__22488_22961;
var G__22975 = (i__22489_22962 + (1));
seq__22486_22959 = G__22972;
chunk__22487_22960 = G__22973;
count__22488_22961 = G__22974;
i__22489_22962 = G__22975;
continue;
} else {
var temp__5753__auto___22976__$2 = cljs.core.seq(seq__22486_22959);
if(temp__5753__auto___22976__$2){
var seq__22486_22977__$1 = temp__5753__auto___22976__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22486_22977__$1)){
var c__4679__auto___22978 = cljs.core.chunk_first(seq__22486_22977__$1);
var G__22979 = cljs.core.chunk_rest(seq__22486_22977__$1);
var G__22980 = c__4679__auto___22978;
var G__22981 = cljs.core.count(c__4679__auto___22978);
var G__22982 = (0);
seq__22486_22959 = G__22979;
chunk__22487_22960 = G__22980;
count__22488_22961 = G__22981;
i__22489_22962 = G__22982;
continue;
} else {
var map__22497_22983 = cljs.core.first(seq__22486_22977__$1);
var map__22497_22984__$1 = cljs.core.__destructure_map(map__22497_22983);
var gline_22985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22497_22984__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_22986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22497_22984__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_22987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22497_22984__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22985], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22486_22959,chunk__22487_22960,count__22488_22961,i__22489_22962,seq__22439_22899,chunk__22440_22900,count__22441_22901,i__22442_22902,seq__22228_22771,chunk__22229_22772,count__22230_22773,i__22231_22774,map__22497_22983,map__22497_22984__$1,gline_22985,gcol_22986,name_22987,seq__22486_22977__$1,temp__5753__auto___22976__$2,vec__22483_22956,column_22957,column_info_22958,seq__22439_22948__$1,temp__5753__auto___22947__$1,vec__22436_22896,line_22897,columns_22898,seq__22228_22890__$1,temp__5753__auto___22889,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_22986], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22897,new cljs.core.Keyword(null,"col","col",-1959363084),column_22957,new cljs.core.Keyword(null,"name","name",1843675177),name_22987], null));
});})(seq__22486_22959,chunk__22487_22960,count__22488_22961,i__22489_22962,seq__22439_22899,chunk__22440_22900,count__22441_22901,i__22442_22902,seq__22228_22771,chunk__22229_22772,count__22230_22773,i__22231_22774,map__22497_22983,map__22497_22984__$1,gline_22985,gcol_22986,name_22987,seq__22486_22977__$1,temp__5753__auto___22976__$2,vec__22483_22956,column_22957,column_info_22958,seq__22439_22948__$1,temp__5753__auto___22947__$1,vec__22436_22896,line_22897,columns_22898,seq__22228_22890__$1,temp__5753__auto___22889,inverted))
,cljs.core.sorted_map()));


var G__22993 = cljs.core.next(seq__22486_22977__$1);
var G__22994 = null;
var G__22995 = (0);
var G__22996 = (0);
seq__22486_22959 = G__22993;
chunk__22487_22960 = G__22994;
count__22488_22961 = G__22995;
i__22489_22962 = G__22996;
continue;
}
} else {
}
}
break;
}


var G__22997 = cljs.core.next(seq__22439_22948__$1);
var G__22998 = null;
var G__22999 = (0);
var G__23000 = (0);
seq__22439_22899 = G__22997;
chunk__22440_22900 = G__22998;
count__22441_22901 = G__22999;
i__22442_22902 = G__23000;
continue;
}
} else {
}
}
break;
}


var G__23001 = cljs.core.next(seq__22228_22890__$1);
var G__23002 = null;
var G__23003 = (0);
var G__23004 = (0);
seq__22228_22771 = G__23001;
chunk__22229_22772 = G__23002;
count__22230_22773 = G__23003;
i__22231_22774 = G__23004;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
