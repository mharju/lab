goog.provide('cljs.source_map');
goog.scope(function(){
  cljs.source_map.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__21790){
var vec__21792 = p__21790;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21792,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21792,(1),null);
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
var vec__21795 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21795,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21795,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21795,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21795,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21795,(4),null);
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
var vec__21800 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21800,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21800,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21800,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21800,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21800,(4),null);
var vec__21803 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21803,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21803,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21803,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21803,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21803,(4),null);
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
var map__21806 = segmap;
var map__21806__$1 = cljs.core.__destructure_map(map__21806);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21806__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21806__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21806__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21806__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21806__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__21808 = arguments.length;
switch (G__21808) {
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
var vec__21812 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__22864 = cljs.core.next(segs__$1);
var G__22865 = nrelseg;
var G__22866 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__22864;
relseg__$1 = G__22865;
result__$1 = G__22866;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21812,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21812,(1),null);
var G__22867 = (gline + (1));
var G__22868 = cljs.core.next(lines__$1);
var G__22869 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__22870 = result__$1;
gline = G__22867;
lines__$1 = G__22868;
relseg = G__22869;
result = G__22870;
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
var map__21816 = segmap;
var map__21816__$1 = cljs.core.__destructure_map(map__21816);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21816__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21816__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21816__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21816__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21816__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__21815_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21815_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__21826 = arguments.length;
switch (G__21826) {
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
var vec__21833 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__22877 = cljs.core.next(segs__$1);
var G__22878 = nrelseg;
var G__22879 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__22877;
relseg__$1 = G__22878;
result__$1 = G__22879;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21833,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21833,(1),null);
var G__22880 = (gline + (1));
var G__22881 = cljs.core.next(lines__$1);
var G__22882 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__22883 = result__$1;
gline = G__22880;
lines__$1 = G__22881;
relseg = G__22882;
result = G__22883;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__21839){
var vec__21840 = p__21839;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21840,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21840,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21840,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21840,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21840,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__21843){
var vec__21844 = p__21843;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21844,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21844,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21844,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21844,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21844,(4),null);
var seg = vec__21844;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__21847){
var vec__21848 = p__21847;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21848,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21848,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21848,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21848,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21848,(4),null);
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
var seq__21854 = cljs.core.seq(infos);
var chunk__21855 = null;
var count__21856 = (0);
var i__21857 = (0);
while(true){
if((i__21857 < count__21856)){
var info = chunk__21855.cljs$core$IIndexed$_nth$arity$2(null,i__21857);
var segv_22886 = info__GT_segv(info,source_idx,line,col);
var gline_22887 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_22888 = cljs.core.count(cljs.core.deref(lines));
if((gline_22887 > (lc_22888 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__21854,chunk__21855,count__21856,i__21857,segv_22886,gline_22887,lc_22888,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_22887 - (lc_22888 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_22886], null));
});})(seq__21854,chunk__21855,count__21856,i__21857,segv_22886,gline_22887,lc_22888,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__21854,chunk__21855,count__21856,i__21857,segv_22886,gline_22887,lc_22888,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22887], null),cljs.core.conj,segv_22886);
});})(seq__21854,chunk__21855,count__21856,i__21857,segv_22886,gline_22887,lc_22888,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__22889 = seq__21854;
var G__22890 = chunk__21855;
var G__22891 = count__21856;
var G__22892 = (i__21857 + (1));
seq__21854 = G__22889;
chunk__21855 = G__22890;
count__21856 = G__22891;
i__21857 = G__22892;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21854);
if(temp__5753__auto__){
var seq__21854__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21854__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__21854__$1);
var G__22893 = cljs.core.chunk_rest(seq__21854__$1);
var G__22894 = c__4679__auto__;
var G__22895 = cljs.core.count(c__4679__auto__);
var G__22896 = (0);
seq__21854 = G__22893;
chunk__21855 = G__22894;
count__21856 = G__22895;
i__21857 = G__22896;
continue;
} else {
var info = cljs.core.first(seq__21854__$1);
var segv_22897 = info__GT_segv(info,source_idx,line,col);
var gline_22898 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_22899 = cljs.core.count(cljs.core.deref(lines));
if((gline_22898 > (lc_22899 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__21854,chunk__21855,count__21856,i__21857,segv_22897,gline_22898,lc_22899,info,seq__21854__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_22898 - (lc_22899 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_22897], null));
});})(seq__21854,chunk__21855,count__21856,i__21857,segv_22897,gline_22898,lc_22899,info,seq__21854__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__21854,chunk__21855,count__21856,i__21857,segv_22897,gline_22898,lc_22899,info,seq__21854__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22898], null),cljs.core.conj,segv_22897);
});})(seq__21854,chunk__21855,count__21856,i__21857,segv_22897,gline_22898,lc_22899,info,seq__21854__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__22906 = cljs.core.next(seq__21854__$1);
var G__22907 = null;
var G__22908 = (0);
var G__22909 = (0);
seq__21854 = G__22906;
chunk__21855 = G__22907;
count__21856 = G__22908;
i__21857 = G__22909;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__21862_22910 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__21863_22911 = null;
var count__21864_22912 = (0);
var i__21865_22913 = (0);
while(true){
if((i__21865_22913 < count__21864_22912)){
var vec__22082_22914 = chunk__21863_22911.cljs$core$IIndexed$_nth$arity$2(null,i__21865_22913);
var source_idx_22915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22082_22914,(0),null);
var vec__22089_22916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22082_22914,(1),null);
var __22917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22089_22916,(0),null);
var lines_22918__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22089_22916,(1),null);
var seq__22092_22919 = cljs.core.seq(lines_22918__$1);
var chunk__22093_22920 = null;
var count__22094_22921 = (0);
var i__22095_22922 = (0);
while(true){
if((i__22095_22922 < count__22094_22921)){
var vec__22140_22923 = chunk__22093_22920.cljs$core$IIndexed$_nth$arity$2(null,i__22095_22922);
var line_22924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22140_22923,(0),null);
var cols_22925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22140_22923,(1),null);
var seq__22143_22926 = cljs.core.seq(cols_22925);
var chunk__22144_22927 = null;
var count__22145_22928 = (0);
var i__22146_22929 = (0);
while(true){
if((i__22146_22929 < count__22145_22928)){
var vec__22153_22930 = chunk__22144_22927.cljs$core$IIndexed$_nth$arity$2(null,i__22146_22929);
var col_22931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22153_22930,(0),null);
var infos_22932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22153_22930,(1),null);
encode_cols(infos_22932,source_idx_22915,line_22924,col_22931);


var G__22933 = seq__22143_22926;
var G__22934 = chunk__22144_22927;
var G__22935 = count__22145_22928;
var G__22936 = (i__22146_22929 + (1));
seq__22143_22926 = G__22933;
chunk__22144_22927 = G__22934;
count__22145_22928 = G__22935;
i__22146_22929 = G__22936;
continue;
} else {
var temp__5753__auto___22937 = cljs.core.seq(seq__22143_22926);
if(temp__5753__auto___22937){
var seq__22143_22938__$1 = temp__5753__auto___22937;
if(cljs.core.chunked_seq_QMARK_(seq__22143_22938__$1)){
var c__4679__auto___22939 = cljs.core.chunk_first(seq__22143_22938__$1);
var G__22940 = cljs.core.chunk_rest(seq__22143_22938__$1);
var G__22941 = c__4679__auto___22939;
var G__22942 = cljs.core.count(c__4679__auto___22939);
var G__22943 = (0);
seq__22143_22926 = G__22940;
chunk__22144_22927 = G__22941;
count__22145_22928 = G__22942;
i__22146_22929 = G__22943;
continue;
} else {
var vec__22156_22944 = cljs.core.first(seq__22143_22938__$1);
var col_22945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22156_22944,(0),null);
var infos_22946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22156_22944,(1),null);
encode_cols(infos_22946,source_idx_22915,line_22924,col_22945);


var G__22947 = cljs.core.next(seq__22143_22938__$1);
var G__22948 = null;
var G__22949 = (0);
var G__22950 = (0);
seq__22143_22926 = G__22947;
chunk__22144_22927 = G__22948;
count__22145_22928 = G__22949;
i__22146_22929 = G__22950;
continue;
}
} else {
}
}
break;
}


var G__22951 = seq__22092_22919;
var G__22952 = chunk__22093_22920;
var G__22953 = count__22094_22921;
var G__22954 = (i__22095_22922 + (1));
seq__22092_22919 = G__22951;
chunk__22093_22920 = G__22952;
count__22094_22921 = G__22953;
i__22095_22922 = G__22954;
continue;
} else {
var temp__5753__auto___22955 = cljs.core.seq(seq__22092_22919);
if(temp__5753__auto___22955){
var seq__22092_22956__$1 = temp__5753__auto___22955;
if(cljs.core.chunked_seq_QMARK_(seq__22092_22956__$1)){
var c__4679__auto___22957 = cljs.core.chunk_first(seq__22092_22956__$1);
var G__22958 = cljs.core.chunk_rest(seq__22092_22956__$1);
var G__22959 = c__4679__auto___22957;
var G__22960 = cljs.core.count(c__4679__auto___22957);
var G__22961 = (0);
seq__22092_22919 = G__22958;
chunk__22093_22920 = G__22959;
count__22094_22921 = G__22960;
i__22095_22922 = G__22961;
continue;
} else {
var vec__22159_22962 = cljs.core.first(seq__22092_22956__$1);
var line_22963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22159_22962,(0),null);
var cols_22964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22159_22962,(1),null);
var seq__22165_22965 = cljs.core.seq(cols_22964);
var chunk__22166_22966 = null;
var count__22167_22967 = (0);
var i__22168_22968 = (0);
while(true){
if((i__22168_22968 < count__22167_22967)){
var vec__22184_22969 = chunk__22166_22966.cljs$core$IIndexed$_nth$arity$2(null,i__22168_22968);
var col_22970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22184_22969,(0),null);
var infos_22971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22184_22969,(1),null);
encode_cols(infos_22971,source_idx_22915,line_22963,col_22970);


var G__22972 = seq__22165_22965;
var G__22973 = chunk__22166_22966;
var G__22974 = count__22167_22967;
var G__22975 = (i__22168_22968 + (1));
seq__22165_22965 = G__22972;
chunk__22166_22966 = G__22973;
count__22167_22967 = G__22974;
i__22168_22968 = G__22975;
continue;
} else {
var temp__5753__auto___22976__$1 = cljs.core.seq(seq__22165_22965);
if(temp__5753__auto___22976__$1){
var seq__22165_22977__$1 = temp__5753__auto___22976__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22165_22977__$1)){
var c__4679__auto___22978 = cljs.core.chunk_first(seq__22165_22977__$1);
var G__22979 = cljs.core.chunk_rest(seq__22165_22977__$1);
var G__22980 = c__4679__auto___22978;
var G__22981 = cljs.core.count(c__4679__auto___22978);
var G__22982 = (0);
seq__22165_22965 = G__22979;
chunk__22166_22966 = G__22980;
count__22167_22967 = G__22981;
i__22168_22968 = G__22982;
continue;
} else {
var vec__22187_22983 = cljs.core.first(seq__22165_22977__$1);
var col_22984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22187_22983,(0),null);
var infos_22985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22187_22983,(1),null);
encode_cols(infos_22985,source_idx_22915,line_22963,col_22984);


var G__22986 = cljs.core.next(seq__22165_22977__$1);
var G__22987 = null;
var G__22988 = (0);
var G__22989 = (0);
seq__22165_22965 = G__22986;
chunk__22166_22966 = G__22987;
count__22167_22967 = G__22988;
i__22168_22968 = G__22989;
continue;
}
} else {
}
}
break;
}


var G__22990 = cljs.core.next(seq__22092_22956__$1);
var G__22991 = null;
var G__22992 = (0);
var G__22993 = (0);
seq__22092_22919 = G__22990;
chunk__22093_22920 = G__22991;
count__22094_22921 = G__22992;
i__22095_22922 = G__22993;
continue;
}
} else {
}
}
break;
}


var G__22994 = seq__21862_22910;
var G__22995 = chunk__21863_22911;
var G__22996 = count__21864_22912;
var G__22997 = (i__21865_22913 + (1));
seq__21862_22910 = G__22994;
chunk__21863_22911 = G__22995;
count__21864_22912 = G__22996;
i__21865_22913 = G__22997;
continue;
} else {
var temp__5753__auto___22998 = cljs.core.seq(seq__21862_22910);
if(temp__5753__auto___22998){
var seq__21862_22999__$1 = temp__5753__auto___22998;
if(cljs.core.chunked_seq_QMARK_(seq__21862_22999__$1)){
var c__4679__auto___23000 = cljs.core.chunk_first(seq__21862_22999__$1);
var G__23001 = cljs.core.chunk_rest(seq__21862_22999__$1);
var G__23002 = c__4679__auto___23000;
var G__23003 = cljs.core.count(c__4679__auto___23000);
var G__23004 = (0);
seq__21862_22910 = G__23001;
chunk__21863_22911 = G__23002;
count__21864_22912 = G__23003;
i__21865_22913 = G__23004;
continue;
} else {
var vec__22190_23005 = cljs.core.first(seq__21862_22999__$1);
var source_idx_23006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22190_23005,(0),null);
var vec__22193_23007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22190_23005,(1),null);
var __23008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22193_23007,(0),null);
var lines_23009__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22193_23007,(1),null);
var seq__22196_23010 = cljs.core.seq(lines_23009__$1);
var chunk__22197_23011 = null;
var count__22198_23012 = (0);
var i__22199_23013 = (0);
while(true){
if((i__22199_23013 < count__22198_23012)){
var vec__22240_23014 = chunk__22197_23011.cljs$core$IIndexed$_nth$arity$2(null,i__22199_23013);
var line_23015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22240_23014,(0),null);
var cols_23016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22240_23014,(1),null);
var seq__22243_23017 = cljs.core.seq(cols_23016);
var chunk__22244_23018 = null;
var count__22245_23019 = (0);
var i__22246_23020 = (0);
while(true){
if((i__22246_23020 < count__22245_23019)){
var vec__22253_23021 = chunk__22244_23018.cljs$core$IIndexed$_nth$arity$2(null,i__22246_23020);
var col_23022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22253_23021,(0),null);
var infos_23023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22253_23021,(1),null);
encode_cols(infos_23023,source_idx_23006,line_23015,col_23022);


var G__23024 = seq__22243_23017;
var G__23025 = chunk__22244_23018;
var G__23026 = count__22245_23019;
var G__23027 = (i__22246_23020 + (1));
seq__22243_23017 = G__23024;
chunk__22244_23018 = G__23025;
count__22245_23019 = G__23026;
i__22246_23020 = G__23027;
continue;
} else {
var temp__5753__auto___23028__$1 = cljs.core.seq(seq__22243_23017);
if(temp__5753__auto___23028__$1){
var seq__22243_23029__$1 = temp__5753__auto___23028__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22243_23029__$1)){
var c__4679__auto___23030 = cljs.core.chunk_first(seq__22243_23029__$1);
var G__23031 = cljs.core.chunk_rest(seq__22243_23029__$1);
var G__23032 = c__4679__auto___23030;
var G__23033 = cljs.core.count(c__4679__auto___23030);
var G__23034 = (0);
seq__22243_23017 = G__23031;
chunk__22244_23018 = G__23032;
count__22245_23019 = G__23033;
i__22246_23020 = G__23034;
continue;
} else {
var vec__22256_23035 = cljs.core.first(seq__22243_23029__$1);
var col_23036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22256_23035,(0),null);
var infos_23037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22256_23035,(1),null);
encode_cols(infos_23037,source_idx_23006,line_23015,col_23036);


var G__23038 = cljs.core.next(seq__22243_23029__$1);
var G__23039 = null;
var G__23040 = (0);
var G__23041 = (0);
seq__22243_23017 = G__23038;
chunk__22244_23018 = G__23039;
count__22245_23019 = G__23040;
i__22246_23020 = G__23041;
continue;
}
} else {
}
}
break;
}


var G__23042 = seq__22196_23010;
var G__23043 = chunk__22197_23011;
var G__23044 = count__22198_23012;
var G__23045 = (i__22199_23013 + (1));
seq__22196_23010 = G__23042;
chunk__22197_23011 = G__23043;
count__22198_23012 = G__23044;
i__22199_23013 = G__23045;
continue;
} else {
var temp__5753__auto___23046__$1 = cljs.core.seq(seq__22196_23010);
if(temp__5753__auto___23046__$1){
var seq__22196_23047__$1 = temp__5753__auto___23046__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22196_23047__$1)){
var c__4679__auto___23048 = cljs.core.chunk_first(seq__22196_23047__$1);
var G__23049 = cljs.core.chunk_rest(seq__22196_23047__$1);
var G__23050 = c__4679__auto___23048;
var G__23051 = cljs.core.count(c__4679__auto___23048);
var G__23052 = (0);
seq__22196_23010 = G__23049;
chunk__22197_23011 = G__23050;
count__22198_23012 = G__23051;
i__22199_23013 = G__23052;
continue;
} else {
var vec__22259_23053 = cljs.core.first(seq__22196_23047__$1);
var line_23054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22259_23053,(0),null);
var cols_23055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22259_23053,(1),null);
var seq__22262_23056 = cljs.core.seq(cols_23055);
var chunk__22263_23057 = null;
var count__22264_23058 = (0);
var i__22265_23059 = (0);
while(true){
if((i__22265_23059 < count__22264_23058)){
var vec__22272_23060 = chunk__22263_23057.cljs$core$IIndexed$_nth$arity$2(null,i__22265_23059);
var col_23061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22272_23060,(0),null);
var infos_23062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22272_23060,(1),null);
encode_cols(infos_23062,source_idx_23006,line_23054,col_23061);


var G__23063 = seq__22262_23056;
var G__23064 = chunk__22263_23057;
var G__23065 = count__22264_23058;
var G__23066 = (i__22265_23059 + (1));
seq__22262_23056 = G__23063;
chunk__22263_23057 = G__23064;
count__22264_23058 = G__23065;
i__22265_23059 = G__23066;
continue;
} else {
var temp__5753__auto___23067__$2 = cljs.core.seq(seq__22262_23056);
if(temp__5753__auto___23067__$2){
var seq__22262_23068__$1 = temp__5753__auto___23067__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22262_23068__$1)){
var c__4679__auto___23069 = cljs.core.chunk_first(seq__22262_23068__$1);
var G__23070 = cljs.core.chunk_rest(seq__22262_23068__$1);
var G__23071 = c__4679__auto___23069;
var G__23072 = cljs.core.count(c__4679__auto___23069);
var G__23073 = (0);
seq__22262_23056 = G__23070;
chunk__22263_23057 = G__23071;
count__22264_23058 = G__23072;
i__22265_23059 = G__23073;
continue;
} else {
var vec__22286_23074 = cljs.core.first(seq__22262_23068__$1);
var col_23075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22286_23074,(0),null);
var infos_23076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22286_23074,(1),null);
encode_cols(infos_23076,source_idx_23006,line_23054,col_23075);


var G__23077 = cljs.core.next(seq__22262_23068__$1);
var G__23078 = null;
var G__23079 = (0);
var G__23080 = (0);
seq__22262_23056 = G__23077;
chunk__22263_23057 = G__23078;
count__22264_23058 = G__23079;
i__22265_23059 = G__23080;
continue;
}
} else {
}
}
break;
}


var G__23081 = cljs.core.next(seq__22196_23047__$1);
var G__23082 = null;
var G__23083 = (0);
var G__23084 = (0);
seq__22196_23010 = G__23081;
chunk__22197_23011 = G__23082;
count__22198_23012 = G__23083;
i__22199_23013 = G__23084;
continue;
}
} else {
}
}
break;
}


var G__23085 = cljs.core.next(seq__21862_22999__$1);
var G__23086 = null;
var G__23087 = (0);
var G__23088 = (0);
seq__21862_22910 = G__23085;
chunk__21863_22911 = G__23086;
count__21864_22912 = G__23087;
i__21865_22913 = G__23088;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__22289 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__21851_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21851_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__21852_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__21852_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21853_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__21853_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__22290 = G__22289;
cljs.source_map.goog$module$goog$object.set(G__22290,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__22290;
} else {
return G__22289;
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
var vec__22291 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22291,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22291,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__22294 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22294,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22294,(1),null);
var G__23103 = cljs.core.next(col_map_seq);
var G__23104 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__22294,col,infos,vec__22291,line,col_map){
return (function (v,p__22297){
var map__22298 = p__22297;
var map__22298__$1 = cljs.core.__destructure_map(map__22298);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22298__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22298__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__22294,col,infos,vec__22291,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__23103;
new_cols = G__23104;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__23105 = cljs.core.next(line_map_seq);
var G__23106 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__23105;
new_lines = G__23106;
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
var seq__22299_23107 = cljs.core.seq(reverse_map);
var chunk__22300_23108 = null;
var count__22301_23109 = (0);
var i__22302_23110 = (0);
while(true){
if((i__22302_23110 < count__22301_23109)){
var vec__22530_23111 = chunk__22300_23108.cljs$core$IIndexed$_nth$arity$2(null,i__22302_23110);
var line_23112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22530_23111,(0),null);
var columns_23113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22530_23111,(1),null);
var seq__22533_23114 = cljs.core.seq(columns_23113);
var chunk__22534_23115 = null;
var count__22535_23116 = (0);
var i__22536_23117 = (0);
while(true){
if((i__22536_23117 < count__22535_23116)){
var vec__22591_23118 = chunk__22534_23115.cljs$core$IIndexed$_nth$arity$2(null,i__22536_23117);
var column_23119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22591_23118,(0),null);
var column_info_23120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22591_23118,(1),null);
var seq__22594_23121 = cljs.core.seq(column_info_23120);
var chunk__22595_23122 = null;
var count__22596_23123 = (0);
var i__22597_23124 = (0);
while(true){
if((i__22597_23124 < count__22596_23123)){
var map__22608_23125 = chunk__22595_23122.cljs$core$IIndexed$_nth$arity$2(null,i__22597_23124);
var map__22608_23126__$1 = cljs.core.__destructure_map(map__22608_23125);
var gline_23127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22608_23126__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22608_23126__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22608_23126__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23127], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22594_23121,chunk__22595_23122,count__22596_23123,i__22597_23124,seq__22533_23114,chunk__22534_23115,count__22535_23116,i__22536_23117,seq__22299_23107,chunk__22300_23108,count__22301_23109,i__22302_23110,map__22608_23125,map__22608_23126__$1,gline_23127,gcol_23128,name_23129,vec__22591_23118,column_23119,column_info_23120,vec__22530_23111,line_23112,columns_23113,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23128], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23112,new cljs.core.Keyword(null,"col","col",-1959363084),column_23119,new cljs.core.Keyword(null,"name","name",1843675177),name_23129], null));
});})(seq__22594_23121,chunk__22595_23122,count__22596_23123,i__22597_23124,seq__22533_23114,chunk__22534_23115,count__22535_23116,i__22536_23117,seq__22299_23107,chunk__22300_23108,count__22301_23109,i__22302_23110,map__22608_23125,map__22608_23126__$1,gline_23127,gcol_23128,name_23129,vec__22591_23118,column_23119,column_info_23120,vec__22530_23111,line_23112,columns_23113,inverted))
,cljs.core.sorted_map()));


var G__23136 = seq__22594_23121;
var G__23137 = chunk__22595_23122;
var G__23138 = count__22596_23123;
var G__23139 = (i__22597_23124 + (1));
seq__22594_23121 = G__23136;
chunk__22595_23122 = G__23137;
count__22596_23123 = G__23138;
i__22597_23124 = G__23139;
continue;
} else {
var temp__5753__auto___23140 = cljs.core.seq(seq__22594_23121);
if(temp__5753__auto___23140){
var seq__22594_23141__$1 = temp__5753__auto___23140;
if(cljs.core.chunked_seq_QMARK_(seq__22594_23141__$1)){
var c__4679__auto___23142 = cljs.core.chunk_first(seq__22594_23141__$1);
var G__23143 = cljs.core.chunk_rest(seq__22594_23141__$1);
var G__23144 = c__4679__auto___23142;
var G__23145 = cljs.core.count(c__4679__auto___23142);
var G__23146 = (0);
seq__22594_23121 = G__23143;
chunk__22595_23122 = G__23144;
count__22596_23123 = G__23145;
i__22597_23124 = G__23146;
continue;
} else {
var map__22613_23147 = cljs.core.first(seq__22594_23141__$1);
var map__22613_23148__$1 = cljs.core.__destructure_map(map__22613_23147);
var gline_23149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22613_23148__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22613_23148__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22613_23148__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23149], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22594_23121,chunk__22595_23122,count__22596_23123,i__22597_23124,seq__22533_23114,chunk__22534_23115,count__22535_23116,i__22536_23117,seq__22299_23107,chunk__22300_23108,count__22301_23109,i__22302_23110,map__22613_23147,map__22613_23148__$1,gline_23149,gcol_23150,name_23151,seq__22594_23141__$1,temp__5753__auto___23140,vec__22591_23118,column_23119,column_info_23120,vec__22530_23111,line_23112,columns_23113,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23150], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23112,new cljs.core.Keyword(null,"col","col",-1959363084),column_23119,new cljs.core.Keyword(null,"name","name",1843675177),name_23151], null));
});})(seq__22594_23121,chunk__22595_23122,count__22596_23123,i__22597_23124,seq__22533_23114,chunk__22534_23115,count__22535_23116,i__22536_23117,seq__22299_23107,chunk__22300_23108,count__22301_23109,i__22302_23110,map__22613_23147,map__22613_23148__$1,gline_23149,gcol_23150,name_23151,seq__22594_23141__$1,temp__5753__auto___23140,vec__22591_23118,column_23119,column_info_23120,vec__22530_23111,line_23112,columns_23113,inverted))
,cljs.core.sorted_map()));


var G__23152 = cljs.core.next(seq__22594_23141__$1);
var G__23153 = null;
var G__23154 = (0);
var G__23155 = (0);
seq__22594_23121 = G__23152;
chunk__22595_23122 = G__23153;
count__22596_23123 = G__23154;
i__22597_23124 = G__23155;
continue;
}
} else {
}
}
break;
}


var G__23156 = seq__22533_23114;
var G__23157 = chunk__22534_23115;
var G__23158 = count__22535_23116;
var G__23159 = (i__22536_23117 + (1));
seq__22533_23114 = G__23156;
chunk__22534_23115 = G__23157;
count__22535_23116 = G__23158;
i__22536_23117 = G__23159;
continue;
} else {
var temp__5753__auto___23160 = cljs.core.seq(seq__22533_23114);
if(temp__5753__auto___23160){
var seq__22533_23161__$1 = temp__5753__auto___23160;
if(cljs.core.chunked_seq_QMARK_(seq__22533_23161__$1)){
var c__4679__auto___23162 = cljs.core.chunk_first(seq__22533_23161__$1);
var G__23163 = cljs.core.chunk_rest(seq__22533_23161__$1);
var G__23164 = c__4679__auto___23162;
var G__23165 = cljs.core.count(c__4679__auto___23162);
var G__23166 = (0);
seq__22533_23114 = G__23163;
chunk__22534_23115 = G__23164;
count__22535_23116 = G__23165;
i__22536_23117 = G__23166;
continue;
} else {
var vec__22614_23167 = cljs.core.first(seq__22533_23161__$1);
var column_23168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22614_23167,(0),null);
var column_info_23169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22614_23167,(1),null);
var seq__22617_23170 = cljs.core.seq(column_info_23169);
var chunk__22618_23171 = null;
var count__22619_23172 = (0);
var i__22620_23173 = (0);
while(true){
if((i__22620_23173 < count__22619_23172)){
var map__22659_23174 = chunk__22618_23171.cljs$core$IIndexed$_nth$arity$2(null,i__22620_23173);
var map__22659_23175__$1 = cljs.core.__destructure_map(map__22659_23174);
var gline_23176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22659_23175__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22659_23175__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22659_23175__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23176], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22617_23170,chunk__22618_23171,count__22619_23172,i__22620_23173,seq__22533_23114,chunk__22534_23115,count__22535_23116,i__22536_23117,seq__22299_23107,chunk__22300_23108,count__22301_23109,i__22302_23110,map__22659_23174,map__22659_23175__$1,gline_23176,gcol_23177,name_23178,vec__22614_23167,column_23168,column_info_23169,seq__22533_23161__$1,temp__5753__auto___23160,vec__22530_23111,line_23112,columns_23113,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23177], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23112,new cljs.core.Keyword(null,"col","col",-1959363084),column_23168,new cljs.core.Keyword(null,"name","name",1843675177),name_23178], null));
});})(seq__22617_23170,chunk__22618_23171,count__22619_23172,i__22620_23173,seq__22533_23114,chunk__22534_23115,count__22535_23116,i__22536_23117,seq__22299_23107,chunk__22300_23108,count__22301_23109,i__22302_23110,map__22659_23174,map__22659_23175__$1,gline_23176,gcol_23177,name_23178,vec__22614_23167,column_23168,column_info_23169,seq__22533_23161__$1,temp__5753__auto___23160,vec__22530_23111,line_23112,columns_23113,inverted))
,cljs.core.sorted_map()));


var G__23179 = seq__22617_23170;
var G__23180 = chunk__22618_23171;
var G__23181 = count__22619_23172;
var G__23182 = (i__22620_23173 + (1));
seq__22617_23170 = G__23179;
chunk__22618_23171 = G__23180;
count__22619_23172 = G__23181;
i__22620_23173 = G__23182;
continue;
} else {
var temp__5753__auto___23183__$1 = cljs.core.seq(seq__22617_23170);
if(temp__5753__auto___23183__$1){
var seq__22617_23184__$1 = temp__5753__auto___23183__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22617_23184__$1)){
var c__4679__auto___23185 = cljs.core.chunk_first(seq__22617_23184__$1);
var G__23186 = cljs.core.chunk_rest(seq__22617_23184__$1);
var G__23187 = c__4679__auto___23185;
var G__23188 = cljs.core.count(c__4679__auto___23185);
var G__23189 = (0);
seq__22617_23170 = G__23186;
chunk__22618_23171 = G__23187;
count__22619_23172 = G__23188;
i__22620_23173 = G__23189;
continue;
} else {
var map__22665_23190 = cljs.core.first(seq__22617_23184__$1);
var map__22665_23191__$1 = cljs.core.__destructure_map(map__22665_23190);
var gline_23192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22665_23191__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22665_23191__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22665_23191__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23192], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22617_23170,chunk__22618_23171,count__22619_23172,i__22620_23173,seq__22533_23114,chunk__22534_23115,count__22535_23116,i__22536_23117,seq__22299_23107,chunk__22300_23108,count__22301_23109,i__22302_23110,map__22665_23190,map__22665_23191__$1,gline_23192,gcol_23193,name_23194,seq__22617_23184__$1,temp__5753__auto___23183__$1,vec__22614_23167,column_23168,column_info_23169,seq__22533_23161__$1,temp__5753__auto___23160,vec__22530_23111,line_23112,columns_23113,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23193], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23112,new cljs.core.Keyword(null,"col","col",-1959363084),column_23168,new cljs.core.Keyword(null,"name","name",1843675177),name_23194], null));
});})(seq__22617_23170,chunk__22618_23171,count__22619_23172,i__22620_23173,seq__22533_23114,chunk__22534_23115,count__22535_23116,i__22536_23117,seq__22299_23107,chunk__22300_23108,count__22301_23109,i__22302_23110,map__22665_23190,map__22665_23191__$1,gline_23192,gcol_23193,name_23194,seq__22617_23184__$1,temp__5753__auto___23183__$1,vec__22614_23167,column_23168,column_info_23169,seq__22533_23161__$1,temp__5753__auto___23160,vec__22530_23111,line_23112,columns_23113,inverted))
,cljs.core.sorted_map()));


var G__23195 = cljs.core.next(seq__22617_23184__$1);
var G__23196 = null;
var G__23197 = (0);
var G__23198 = (0);
seq__22617_23170 = G__23195;
chunk__22618_23171 = G__23196;
count__22619_23172 = G__23197;
i__22620_23173 = G__23198;
continue;
}
} else {
}
}
break;
}


var G__23199 = cljs.core.next(seq__22533_23161__$1);
var G__23200 = null;
var G__23201 = (0);
var G__23202 = (0);
seq__22533_23114 = G__23199;
chunk__22534_23115 = G__23200;
count__22535_23116 = G__23201;
i__22536_23117 = G__23202;
continue;
}
} else {
}
}
break;
}


var G__23203 = seq__22299_23107;
var G__23204 = chunk__22300_23108;
var G__23205 = count__22301_23109;
var G__23206 = (i__22302_23110 + (1));
seq__22299_23107 = G__23203;
chunk__22300_23108 = G__23204;
count__22301_23109 = G__23205;
i__22302_23110 = G__23206;
continue;
} else {
var temp__5753__auto___23207 = cljs.core.seq(seq__22299_23107);
if(temp__5753__auto___23207){
var seq__22299_23208__$1 = temp__5753__auto___23207;
if(cljs.core.chunked_seq_QMARK_(seq__22299_23208__$1)){
var c__4679__auto___23209 = cljs.core.chunk_first(seq__22299_23208__$1);
var G__23210 = cljs.core.chunk_rest(seq__22299_23208__$1);
var G__23211 = c__4679__auto___23209;
var G__23212 = cljs.core.count(c__4679__auto___23209);
var G__23213 = (0);
seq__22299_23107 = G__23210;
chunk__22300_23108 = G__23211;
count__22301_23109 = G__23212;
i__22302_23110 = G__23213;
continue;
} else {
var vec__22677_23214 = cljs.core.first(seq__22299_23208__$1);
var line_23215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22677_23214,(0),null);
var columns_23216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22677_23214,(1),null);
var seq__22680_23217 = cljs.core.seq(columns_23216);
var chunk__22681_23218 = null;
var count__22682_23219 = (0);
var i__22683_23220 = (0);
while(true){
if((i__22683_23220 < count__22682_23219)){
var vec__22755_23221 = chunk__22681_23218.cljs$core$IIndexed$_nth$arity$2(null,i__22683_23220);
var column_23222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22755_23221,(0),null);
var column_info_23223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22755_23221,(1),null);
var seq__22758_23224 = cljs.core.seq(column_info_23223);
var chunk__22759_23225 = null;
var count__22760_23226 = (0);
var i__22761_23227 = (0);
while(true){
if((i__22761_23227 < count__22760_23226)){
var map__22787_23228 = chunk__22759_23225.cljs$core$IIndexed$_nth$arity$2(null,i__22761_23227);
var map__22787_23229__$1 = cljs.core.__destructure_map(map__22787_23228);
var gline_23230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22787_23229__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22787_23229__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22787_23229__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23230], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22758_23224,chunk__22759_23225,count__22760_23226,i__22761_23227,seq__22680_23217,chunk__22681_23218,count__22682_23219,i__22683_23220,seq__22299_23107,chunk__22300_23108,count__22301_23109,i__22302_23110,map__22787_23228,map__22787_23229__$1,gline_23230,gcol_23231,name_23232,vec__22755_23221,column_23222,column_info_23223,vec__22677_23214,line_23215,columns_23216,seq__22299_23208__$1,temp__5753__auto___23207,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23231], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23215,new cljs.core.Keyword(null,"col","col",-1959363084),column_23222,new cljs.core.Keyword(null,"name","name",1843675177),name_23232], null));
});})(seq__22758_23224,chunk__22759_23225,count__22760_23226,i__22761_23227,seq__22680_23217,chunk__22681_23218,count__22682_23219,i__22683_23220,seq__22299_23107,chunk__22300_23108,count__22301_23109,i__22302_23110,map__22787_23228,map__22787_23229__$1,gline_23230,gcol_23231,name_23232,vec__22755_23221,column_23222,column_info_23223,vec__22677_23214,line_23215,columns_23216,seq__22299_23208__$1,temp__5753__auto___23207,inverted))
,cljs.core.sorted_map()));


var G__23233 = seq__22758_23224;
var G__23234 = chunk__22759_23225;
var G__23235 = count__22760_23226;
var G__23236 = (i__22761_23227 + (1));
seq__22758_23224 = G__23233;
chunk__22759_23225 = G__23234;
count__22760_23226 = G__23235;
i__22761_23227 = G__23236;
continue;
} else {
var temp__5753__auto___23237__$1 = cljs.core.seq(seq__22758_23224);
if(temp__5753__auto___23237__$1){
var seq__22758_23238__$1 = temp__5753__auto___23237__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22758_23238__$1)){
var c__4679__auto___23239 = cljs.core.chunk_first(seq__22758_23238__$1);
var G__23240 = cljs.core.chunk_rest(seq__22758_23238__$1);
var G__23241 = c__4679__auto___23239;
var G__23242 = cljs.core.count(c__4679__auto___23239);
var G__23243 = (0);
seq__22758_23224 = G__23240;
chunk__22759_23225 = G__23241;
count__22760_23226 = G__23242;
i__22761_23227 = G__23243;
continue;
} else {
var map__22794_23244 = cljs.core.first(seq__22758_23238__$1);
var map__22794_23245__$1 = cljs.core.__destructure_map(map__22794_23244);
var gline_23246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22794_23245__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22794_23245__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22794_23245__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23246], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22758_23224,chunk__22759_23225,count__22760_23226,i__22761_23227,seq__22680_23217,chunk__22681_23218,count__22682_23219,i__22683_23220,seq__22299_23107,chunk__22300_23108,count__22301_23109,i__22302_23110,map__22794_23244,map__22794_23245__$1,gline_23246,gcol_23247,name_23248,seq__22758_23238__$1,temp__5753__auto___23237__$1,vec__22755_23221,column_23222,column_info_23223,vec__22677_23214,line_23215,columns_23216,seq__22299_23208__$1,temp__5753__auto___23207,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23247], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23215,new cljs.core.Keyword(null,"col","col",-1959363084),column_23222,new cljs.core.Keyword(null,"name","name",1843675177),name_23248], null));
});})(seq__22758_23224,chunk__22759_23225,count__22760_23226,i__22761_23227,seq__22680_23217,chunk__22681_23218,count__22682_23219,i__22683_23220,seq__22299_23107,chunk__22300_23108,count__22301_23109,i__22302_23110,map__22794_23244,map__22794_23245__$1,gline_23246,gcol_23247,name_23248,seq__22758_23238__$1,temp__5753__auto___23237__$1,vec__22755_23221,column_23222,column_info_23223,vec__22677_23214,line_23215,columns_23216,seq__22299_23208__$1,temp__5753__auto___23207,inverted))
,cljs.core.sorted_map()));


var G__23249 = cljs.core.next(seq__22758_23238__$1);
var G__23250 = null;
var G__23251 = (0);
var G__23252 = (0);
seq__22758_23224 = G__23249;
chunk__22759_23225 = G__23250;
count__22760_23226 = G__23251;
i__22761_23227 = G__23252;
continue;
}
} else {
}
}
break;
}


var G__23253 = seq__22680_23217;
var G__23254 = chunk__22681_23218;
var G__23255 = count__22682_23219;
var G__23256 = (i__22683_23220 + (1));
seq__22680_23217 = G__23253;
chunk__22681_23218 = G__23254;
count__22682_23219 = G__23255;
i__22683_23220 = G__23256;
continue;
} else {
var temp__5753__auto___23257__$1 = cljs.core.seq(seq__22680_23217);
if(temp__5753__auto___23257__$1){
var seq__22680_23258__$1 = temp__5753__auto___23257__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22680_23258__$1)){
var c__4679__auto___23259 = cljs.core.chunk_first(seq__22680_23258__$1);
var G__23260 = cljs.core.chunk_rest(seq__22680_23258__$1);
var G__23261 = c__4679__auto___23259;
var G__23262 = cljs.core.count(c__4679__auto___23259);
var G__23263 = (0);
seq__22680_23217 = G__23260;
chunk__22681_23218 = G__23261;
count__22682_23219 = G__23262;
i__22683_23220 = G__23263;
continue;
} else {
var vec__22795_23264 = cljs.core.first(seq__22680_23258__$1);
var column_23265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22795_23264,(0),null);
var column_info_23266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22795_23264,(1),null);
var seq__22798_23267 = cljs.core.seq(column_info_23266);
var chunk__22799_23268 = null;
var count__22800_23269 = (0);
var i__22801_23270 = (0);
while(true){
if((i__22801_23270 < count__22800_23269)){
var map__22804_23271 = chunk__22799_23268.cljs$core$IIndexed$_nth$arity$2(null,i__22801_23270);
var map__22804_23272__$1 = cljs.core.__destructure_map(map__22804_23271);
var gline_23273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22804_23272__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22804_23272__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22804_23272__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23273], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22798_23267,chunk__22799_23268,count__22800_23269,i__22801_23270,seq__22680_23217,chunk__22681_23218,count__22682_23219,i__22683_23220,seq__22299_23107,chunk__22300_23108,count__22301_23109,i__22302_23110,map__22804_23271,map__22804_23272__$1,gline_23273,gcol_23274,name_23275,vec__22795_23264,column_23265,column_info_23266,seq__22680_23258__$1,temp__5753__auto___23257__$1,vec__22677_23214,line_23215,columns_23216,seq__22299_23208__$1,temp__5753__auto___23207,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23274], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23215,new cljs.core.Keyword(null,"col","col",-1959363084),column_23265,new cljs.core.Keyword(null,"name","name",1843675177),name_23275], null));
});})(seq__22798_23267,chunk__22799_23268,count__22800_23269,i__22801_23270,seq__22680_23217,chunk__22681_23218,count__22682_23219,i__22683_23220,seq__22299_23107,chunk__22300_23108,count__22301_23109,i__22302_23110,map__22804_23271,map__22804_23272__$1,gline_23273,gcol_23274,name_23275,vec__22795_23264,column_23265,column_info_23266,seq__22680_23258__$1,temp__5753__auto___23257__$1,vec__22677_23214,line_23215,columns_23216,seq__22299_23208__$1,temp__5753__auto___23207,inverted))
,cljs.core.sorted_map()));


var G__23293 = seq__22798_23267;
var G__23294 = chunk__22799_23268;
var G__23295 = count__22800_23269;
var G__23296 = (i__22801_23270 + (1));
seq__22798_23267 = G__23293;
chunk__22799_23268 = G__23294;
count__22800_23269 = G__23295;
i__22801_23270 = G__23296;
continue;
} else {
var temp__5753__auto___23297__$2 = cljs.core.seq(seq__22798_23267);
if(temp__5753__auto___23297__$2){
var seq__22798_23298__$1 = temp__5753__auto___23297__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22798_23298__$1)){
var c__4679__auto___23299 = cljs.core.chunk_first(seq__22798_23298__$1);
var G__23300 = cljs.core.chunk_rest(seq__22798_23298__$1);
var G__23301 = c__4679__auto___23299;
var G__23302 = cljs.core.count(c__4679__auto___23299);
var G__23303 = (0);
seq__22798_23267 = G__23300;
chunk__22799_23268 = G__23301;
count__22800_23269 = G__23302;
i__22801_23270 = G__23303;
continue;
} else {
var map__22805_23304 = cljs.core.first(seq__22798_23298__$1);
var map__22805_23305__$1 = cljs.core.__destructure_map(map__22805_23304);
var gline_23306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22805_23305__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22805_23305__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22805_23305__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23306], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__22798_23267,chunk__22799_23268,count__22800_23269,i__22801_23270,seq__22680_23217,chunk__22681_23218,count__22682_23219,i__22683_23220,seq__22299_23107,chunk__22300_23108,count__22301_23109,i__22302_23110,map__22805_23304,map__22805_23305__$1,gline_23306,gcol_23307,name_23308,seq__22798_23298__$1,temp__5753__auto___23297__$2,vec__22795_23264,column_23265,column_info_23266,seq__22680_23258__$1,temp__5753__auto___23257__$1,vec__22677_23214,line_23215,columns_23216,seq__22299_23208__$1,temp__5753__auto___23207,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23307], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23215,new cljs.core.Keyword(null,"col","col",-1959363084),column_23265,new cljs.core.Keyword(null,"name","name",1843675177),name_23308], null));
});})(seq__22798_23267,chunk__22799_23268,count__22800_23269,i__22801_23270,seq__22680_23217,chunk__22681_23218,count__22682_23219,i__22683_23220,seq__22299_23107,chunk__22300_23108,count__22301_23109,i__22302_23110,map__22805_23304,map__22805_23305__$1,gline_23306,gcol_23307,name_23308,seq__22798_23298__$1,temp__5753__auto___23297__$2,vec__22795_23264,column_23265,column_info_23266,seq__22680_23258__$1,temp__5753__auto___23257__$1,vec__22677_23214,line_23215,columns_23216,seq__22299_23208__$1,temp__5753__auto___23207,inverted))
,cljs.core.sorted_map()));


var G__23309 = cljs.core.next(seq__22798_23298__$1);
var G__23310 = null;
var G__23311 = (0);
var G__23312 = (0);
seq__22798_23267 = G__23309;
chunk__22799_23268 = G__23310;
count__22800_23269 = G__23311;
i__22801_23270 = G__23312;
continue;
}
} else {
}
}
break;
}


var G__23313 = cljs.core.next(seq__22680_23258__$1);
var G__23314 = null;
var G__23315 = (0);
var G__23316 = (0);
seq__22680_23217 = G__23313;
chunk__22681_23218 = G__23314;
count__22682_23219 = G__23315;
i__22683_23220 = G__23316;
continue;
}
} else {
}
}
break;
}


var G__23317 = cljs.core.next(seq__22299_23208__$1);
var G__23318 = null;
var G__23319 = (0);
var G__23320 = (0);
seq__22299_23107 = G__23317;
chunk__22300_23108 = G__23318;
count__22301_23109 = G__23319;
i__22302_23110 = G__23320;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
