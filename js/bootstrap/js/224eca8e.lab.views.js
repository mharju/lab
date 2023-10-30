goog.provide('lab.views');
lab.views.views = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
lab.views.view_info = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
lab.views.components = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
lab.views.find_end = (function lab$views$find_end(start,size,defs){
if(((((0) <= (start - (1)))) && (((start - (1)) <= (cljs.core.count(defs) - (1)))))){
var end = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__25797,cumulative_SINGLEQUOTE_){
var map__25798 = p__25797;
var map__25798__$1 = cljs.core.__destructure_map(map__25798);
var acc = map__25798__$1;
var cumulative = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25798__$1,new cljs.core.Keyword(null,"cumulative","cumulative",-1602244157));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25798__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if(((cumulative + cumulative_SINGLEQUOTE_) >= size)){
return cljs.core.reduced(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),index], null));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"cumulative","cumulative",-1602244157),cljs.core._PLUS_,cumulative_SINGLEQUOTE_),new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.inc);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cumulative","cumulative",-1602244157),(0),new cljs.core.Keyword(null,"index","index",-1531685915),(1)], null),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(defs,(start - (1)))));
if(cljs.core.truth_(end)){
return (start + end);
} else {
return null;
}
} else {
return null;
}
});
lab.views.need_new_def_QMARK_ = (function lab$views$need_new_def_QMARK_(col_index,original_size,new_size,defs){
var end_old = (lab.views.find_end((col_index + (1)),original_size,defs) - (1));
var temp__5751__auto__ = ((((((col_index + end_old) <= cljs.core.count(defs))) && (((2) <= (end_old - col_index)))))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(defs,col_index,end_old):null);
if(cljs.core.truth_(temp__5751__auto__)){
var usable_columns = temp__5751__auto__;
var a = lab.views.find_end((1),new_size,usable_columns);
var b = lab.views.find_end(a,new_size,usable_columns);
return cljs.core.not((function (){var and__4251__auto__ = a;
if(cljs.core.truth_(and__4251__auto__)){
return b;
} else {
return and__4251__auto__;
}
})());
} else {
return true;
}
});
lab.views.split_BANG_ = (function lab$views$split_BANG_(id,after,def_key,p__25809){
var map__25810 = p__25809;
var map__25810__$1 = cljs.core.__destructure_map(map__25810);
var data = map__25810__$1;
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25810__$1,new cljs.core.Keyword(null,"views","views",1450155487));
if(cljs.core.empty_QMARK_(data)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null),new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100)], null),new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100)], null)], null);
} else {
var defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,def_key);
var index = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__25818){
var map__25819 = p__25818;
var map__25819__$1 = cljs.core.__destructure_map(map__25819);
var id_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25819__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(after,id_SINGLEQUOTE_)){
return i;
} else {
return null;
}
}),views)));
var map__25811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(views,index);
var map__25811__$1 = cljs.core.__destructure_map(map__25811);
var sibling = map__25811__$1;
var vec__25812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25811__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var size_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25812,(0),null);
var size_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25812,(1),null);
var vec__25815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25811__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var start_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25815,(0),null);
var start_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25815,(1),null);
var col_index = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),def_key))?start_row:start_col) - (1));
var original_size = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),def_key))?size_row:size_col);
var new_size = (original_size / (2));
var new_size_def = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),def_key))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size_col,new_size], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_size,size_row], null));
var create_def_QMARK_ = lab.views.need_new_def_QMARK_(col_index,original_size,new_size,defs);
var col_def = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(defs,col_index);
var new_col_def = (col_def / (2));
var col_defs = ((create_def_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(defs,(0),col_index),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_col_def,new_col_def], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(defs,(col_index + (1)))], 0))):defs);
var move_if_needed = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,(function (p__25820){
var map__25821 = p__25820;
var map__25821__$1 = cljs.core.__destructure_map(map__25821);
var v = map__25821__$1;
var vec__25822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25821__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25822,(0),null);
var vr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25822,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"start","start",-355208981),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),def_key))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vc,(((start_row < vr))?(vr + (1)):vr)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((start_col < vc))?(vc + (1)):vc),vr], null)));
}));
var views__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(views,(0),index),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sibling,new cljs.core.Keyword(null,"size","size",1098693007),new_size_def),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"start","start",-355208981),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),def_key))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_col,lab.views.find_end((col_index + (1)),new_size,defs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lab.views.find_end((col_index + (1)),new_size,defs),start_row], null)),new cljs.core.Keyword(null,"size","size",1098693007),new_size_def], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25825 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(views,(index + (1)));
if(create_def_QMARK_){
return move_if_needed(G__25825);
} else {
return G__25825;
}
})()], 0)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,def_key,col_defs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"views","views",1450155487),views__$1], 0));
}
});
lab.views.find_view_info = (function lab$views$find_view_info(var_args){
var G__25827 = arguments.length;
switch (G__25827) {
case 1:
return lab.views.find_view_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lab.views.find_view_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lab.views.find_view_info.cljs$core$IFn$_invoke$arity$1 = (function (id){
return lab.views.find_view_info.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lab.views.view_info)));
}));

(lab.views.find_view_info.cljs$core$IFn$_invoke$arity$2 = (function (id,views){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,id),new cljs.core.Keyword(null,"id","id",-1388402092)),views));
}));

(lab.views.find_view_info.cljs$lang$maxFixedArity = 2);

lab.views.siblings = (function lab$views$siblings(pred,p__25828,id){
var map__25829 = p__25828;
var map__25829__$1 = cljs.core.__destructure_map(map__25829);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25829__$1,new cljs.core.Keyword(null,"views","views",1450155487));
var row_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25829__$1,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918));
var col_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25829__$1,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351));
var map__25830 = lab.views.find_view_info.cljs$core$IFn$_invoke$arity$2(id,views);
var map__25830__$1 = cljs.core.__destructure_map(map__25830);
var vec__25831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25830__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var start_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25831,(0),null);
var start_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25831,(1),null);
var vec__25834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25830__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var size_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25834,(0),null);
var size_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25834,(1),null);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25830__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var end_col_target = lab.views.find_end(start_col_target,size_col_target,col_defs);
var end_row_target = lab.views.find_end(start_row_target,size_row_target,row_defs);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filterv((function (p__25837){
var map__25838 = p__25837;
var map__25838__$1 = cljs.core.__destructure_map(map__25838);
var vec__25839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25838__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var start_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25839,(0),null);
var start_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25839,(1),null);
var vec__25842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25838__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var size_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25842,(0),null);
var size_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25842,(1),null);
var id_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25838__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var end_col = lab.views.find_end(start_col,size_col,col_defs);
var end_row = lab.views.find_end(start_row,size_row,row_defs);
var and__4251__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id_SINGLEQUOTE_,id__$1);
if(and__4251__auto__){
var G__25845 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_col,end_col,start_row,end_row], null);
var G__25846 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_col_target,end_col_target,start_row_target,end_row_target], null);
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__25845,G__25846) : pred.call(null,G__25845,G__25846));
} else {
return and__4251__auto__;
}
}),views)));
});
lab.views.left_siblings = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lab.views.siblings,(function (p__25855,p__25856){
var vec__25857 = p__25855;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25857,(0),null);
var end_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25857,(1),null);
var start_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25857,(2),null);
var end_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25857,(3),null);
var vec__25860 = p__25856;
var start_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25860,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25860,(1),null);
var start_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25860,(2),null);
var end_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25860,(3),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_col,start_col_target)) && ((((start_row_target <= start_row)) && ((((start_row <= end_row)) && ((end_row <= end_row_target)))))));
}));
lab.views.right_siblings = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lab.views.siblings,(function (p__25864,p__25865){
var vec__25866 = p__25864;
var start_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25866,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25866,(1),null);
var start_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25866,(2),null);
var end_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25866,(3),null);
var vec__25869 = p__25865;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25869,(0),null);
var end_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25869,(1),null);
var start_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25869,(2),null);
var end_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25869,(3),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_col,end_col_target)) && ((((start_row_target <= start_row)) && ((((start_row <= end_row)) && ((end_row <= end_row_target)))))));
}));
lab.views.up_siblings = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lab.views.siblings,(function (p__25872,p__25873){
var vec__25874 = p__25872;
var start_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25874,(0),null);
var end_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25874,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25874,(2),null);
var end_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25874,(3),null);
var vec__25877 = p__25873;
var start_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25877,(0),null);
var end_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25877,(1),null);
var start_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25877,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25877,(3),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_row,start_row_target)) && ((((start_col_target <= start_col)) && ((((start_col <= end_col)) && ((end_col <= end_col_target)))))));
}));
lab.views.down_siblings = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lab.views.siblings,(function (p__25880,p__25881){
var vec__25882 = p__25880;
var start_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25882,(0),null);
var end_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25882,(1),null);
var start_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25882,(2),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25882,(3),null);
var vec__25885 = p__25881;
var start_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25885,(0),null);
var end_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25885,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25885,(2),null);
var end_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25885,(3),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_row,end_row_target)) && ((((start_col_target <= start_col)) && ((((start_col <= end_col)) && ((end_col <= end_col_target)))))));
}));
lab.views.unsplit_left = (function lab$views$unsplit_left(p__25888,id){
var map__25889 = p__25888;
var map__25889__$1 = cljs.core.__destructure_map(map__25889);
var data = map__25889__$1;
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25889__$1,new cljs.core.Keyword(null,"views","views",1450155487));
var col_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25889__$1,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351));
var row_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25889__$1,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(views),(2))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,id),new cljs.core.Keyword(null,"id","id",-1388402092)),views))),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null),new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100)], null),new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100)], null)], null);
} else {
var grow = lab.views.left_siblings(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),views,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),col_defs,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),row_defs], null),id);
var vec__25890 = ((cljs.core.seq(grow))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,grow], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,lab.views.right_siblings(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),views,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),col_defs,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),row_defs], null),id)], null));
var is_left_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25890,(0),null);
var grow__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25890,(1),null);
var vec__25893 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(lab.views.find_view_info.cljs$core$IFn$_invoke$arity$2(id,views));
var grow_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25893,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25893,(1),null);
var views__$1 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,id),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25896){
var map__25897 = p__25896;
var map__25897__$1 = cljs.core.__destructure_map(map__25897);
var v = map__25897__$1;
var vec__25898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25897__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25898,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25898,(1),null);
var vec__25901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25897__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25901,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25901,(1),null);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25897__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.contains_QMARK_(grow__$1,id__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(w + grow_size),h], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"start","start",-355208981),(cljs.core.truth_(is_left_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sx - (1)),sy], null))], 0));
} else {
return v;
}
}),views)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"views","views",1450155487),views__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),row_defs,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),col_defs], 0));
}
});
lab.views.unsplit_up = (function lab$views$unsplit_up(p__25904,id){
var map__25905 = p__25904;
var map__25905__$1 = cljs.core.__destructure_map(map__25905);
var data = map__25905__$1;
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25905__$1,new cljs.core.Keyword(null,"views","views",1450155487));
var col_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25905__$1,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351));
var row_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25905__$1,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(views),(2))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,id),new cljs.core.Keyword(null,"id","id",-1388402092)),views))),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null),new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100)], null),new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100)], null)], null);
} else {
var grow = lab.views.up_siblings(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),views,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),col_defs,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),row_defs], null),id);
var vec__25906 = ((cljs.core.seq(grow))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,grow], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,lab.views.down_siblings(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),views,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),col_defs,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),row_defs], null),id)], null));
var is_up_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25906,(0),null);
var grow__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25906,(1),null);
var vec__25909 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,id),new cljs.core.Keyword(null,"id","id",-1388402092)),views)));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25909,(0),null);
var grow_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25909,(1),null);
var views__$1 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,id),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25912){
var map__25913 = p__25912;
var map__25913__$1 = cljs.core.__destructure_map(map__25913);
var v = map__25913__$1;
var vec__25914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25913__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25914,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25914,(1),null);
var vec__25917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25913__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25917,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25917,(1),null);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25913__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.contains_QMARK_(grow__$1,id__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,(h + grow_size)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"start","start",-355208981),(cljs.core.truth_(is_up_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,(sy - (1))], null))], 0));
} else {
return v;
}
}),views)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"views","views",1450155487),views__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),row_defs,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),col_defs], 0));
}
});
lab.views.unsplit = (function lab$views$unsplit(views,id){
var up_sib = cljs.core.count(lab.views.up_siblings(views,id));
var down_sib = cljs.core.count(lab.views.down_siblings(views,id));
var left_sib = cljs.core.count(lab.views.left_siblings(views,id));
var right_sib = cljs.core.count(lab.views.right_siblings(views,id));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([left_sib,right_sib,up_sib,down_sib], 0));

if((((left_sib > (0))) || ((right_sib > (0))))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["left/right it is!"], 0));

return lab.views.unsplit_left(views,id);
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["up/down it is!"], 0));

return lab.views.unsplit_up(views,id);
}
});
lab.views.__GT_css = (function lab$views$__GT_css(p__25934){
var map__25935 = p__25934;
var map__25935__$1 = cljs.core.__destructure_map(map__25935);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25935__$1,new cljs.core.Keyword(null,"views","views",1450155487));
var col_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25935__$1,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351));
var row_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25935__$1,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918));
return [[".container { grid-template: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25932_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25932_SHARP_),"%"].join('');
}),row_defs))," / ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25933_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25933_SHARP_),"vw"].join('');
}),col_defs)),"; }\n"].join(''),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25945){
var map__25946 = p__25945;
var map__25946__$1 = cljs.core.__destructure_map(map__25946);
var vec__25947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25946__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var start_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25947,(0),null);
var start_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25947,(1),null);
var vec__25950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25946__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var size_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25950,(0),null);
var size_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25950,(1),null);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25946__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var end_col = lab.views.find_end(start_col,size_col,col_defs);
var end_row = lab.views.find_end(start_row,size_row,row_defs);
return ["#",cljs.core.name(id)," { grid-area: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_row)," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_col)," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_row)," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_col),"; }"].join('');
}),views))].join('');
});
lab.views.new_view = (function lab$views$new_view(id){
return ["<div",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name(id),new cljs.core.Keyword(null,"class","class",-2030961996),"view"], null))),">","<div"," class=\"info\"",">",(function (){var attrs25955 = id;
if(cljs.core.map_QMARK_(attrs25955)){
return ["<span",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"id"], null),attrs25955], 0)))),">","</span>"].join('');
} else {
return ["<span class=\"id\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs25955)),"</span>"].join('');
}
})(),"<span class=\"connection-status\"></span>","</div>","<div class=\"map\"></div>","<div class=\"graph\"></div>","<div class=\"vis\"></div>","<div class=\"console\"></div>","<div class=\"dashboard\"></div>","</div>"].join('');
});
lab.views.__GT_element = (function lab$views$__GT_element(html){
var container = document.createElement("div");
(container.innerHTML = html);

return container.firstChild;
});
lab.views.update_styles_BANG_ = (function lab$views$update_styles_BANG_(styles){
var stylesheet = document.getElementById("dashboard-styles");
return (stylesheet.innerHTML = styles);
});
lab.views.direction_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"row-defs","row-defs",1715332918)], null);
lab.views.set_views_BANG_ = (function lab$views$set_views_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___25990 = arguments.length;
var i__4865__auto___25991 = (0);
while(true){
if((i__4865__auto___25991 < len__4864__auto___25990)){
args__4870__auto__.push((arguments[i__4865__auto___25991]));

var G__25992 = (i__4865__auto___25991 + (1));
i__4865__auto___25991 = G__25992;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return lab.views.set_views_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(lab.views.set_views_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__25969){
var map__25970 = p__25969;
var map__25970__$1 = cljs.core.__destructure_map(map__25970);
var declared_views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25970__$1,new cljs.core.Keyword(null,"views","views",1450155487));
var col_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25970__$1,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351));
var row_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25970__$1,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918));
var parent = document.getElementById("dashboard");
(parent.innerHTML = "");

var seq__25971_25993 = cljs.core.seq(declared_views);
var chunk__25972_25994 = null;
var count__25973_25995 = (0);
var i__25974_25996 = (0);
while(true){
if((i__25974_25996 < count__25973_25995)){
var map__25977_25997 = chunk__25972_25994.cljs$core$IIndexed$_nth$arity$2(null,i__25974_25996);
var map__25977_25998__$1 = cljs.core.__destructure_map(map__25977_25997);
var id_25999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25977_25998__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
parent.appendChild(lab.views.__GT_element(lab.views.new_view(id_25999)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.views.views,cljs.core.assoc,id_25999,document.getElementById(cljs.core.name(id_25999)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.views.components,cljs.core.assoc,id_25999,cljs.core.PersistentArrayMap.EMPTY);


var G__26000 = seq__25971_25993;
var G__26001 = chunk__25972_25994;
var G__26002 = count__25973_25995;
var G__26003 = (i__25974_25996 + (1));
seq__25971_25993 = G__26000;
chunk__25972_25994 = G__26001;
count__25973_25995 = G__26002;
i__25974_25996 = G__26003;
continue;
} else {
var temp__5753__auto___26004 = cljs.core.seq(seq__25971_25993);
if(temp__5753__auto___26004){
var seq__25971_26005__$1 = temp__5753__auto___26004;
if(cljs.core.chunked_seq_QMARK_(seq__25971_26005__$1)){
var c__4679__auto___26006 = cljs.core.chunk_first(seq__25971_26005__$1);
var G__26007 = cljs.core.chunk_rest(seq__25971_26005__$1);
var G__26008 = c__4679__auto___26006;
var G__26009 = cljs.core.count(c__4679__auto___26006);
var G__26010 = (0);
seq__25971_25993 = G__26007;
chunk__25972_25994 = G__26008;
count__25973_25995 = G__26009;
i__25974_25996 = G__26010;
continue;
} else {
var map__25978_26011 = cljs.core.first(seq__25971_26005__$1);
var map__25978_26012__$1 = cljs.core.__destructure_map(map__25978_26011);
var id_26013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25978_26012__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
parent.appendChild(lab.views.__GT_element(lab.views.new_view(id_26013)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.views.views,cljs.core.assoc,id_26013,document.getElementById(cljs.core.name(id_26013)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.views.components,cljs.core.assoc,id_26013,cljs.core.PersistentArrayMap.EMPTY);


var G__26014 = cljs.core.next(seq__25971_26005__$1);
var G__26015 = null;
var G__26016 = (0);
var G__26017 = (0);
seq__25971_25993 = G__26014;
chunk__25972_25994 = G__26015;
count__25973_25995 = G__26016;
i__25974_25996 = G__26017;
continue;
}
} else {
}
}
break;
}

return lab.views.update_styles_BANG_(lab.views.__GT_css(cljs.core.reset_BANG_(lab.views.view_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),declared_views,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),row_defs,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),col_defs], null))));
}));

(lab.views.set_views_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(lab.views.set_views_BANG_.cljs$lang$applyTo = (function (seq25968){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25968));
}));

lab.views.add_view_BANG_ = (function lab$views$add_view_BANG_(var_args){
var G__25980 = arguments.length;
switch (G__25980) {
case 1:
return lab.views.add_view_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lab.views.add_view_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lab.views.add_view_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lab.views.add_view_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (id){
return lab.views.add_view_BANG_.cljs$core$IFn$_invoke$arity$3(id,(function (){var G__25981 = cljs.core.deref(lab.views.view_info);
var G__25981__$1 = (((G__25981 == null))?null:new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(G__25981));
var G__25981__$2 = (((G__25981__$1 == null))?null:cljs.core.last(G__25981__$1));
if((G__25981__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__25981__$2);
}
})(),new cljs.core.Keyword(null,"vertical","vertical",718696748));
}));

(lab.views.add_view_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id,after){
return lab.views.add_view_BANG_.cljs$core$IFn$_invoke$arity$3(id,after,new cljs.core.Keyword(null,"vertical","vertical",718696748));
}));

(lab.views.add_view_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (id,after,direction){
if(cljs.core.contains_QMARK_(cljs.core.deref(lab.views.components),id)){
return null;
} else {
var $parent = module$node_modules$jquery$dist$jquery("#dashboard");
var G__25982_26019 = lab.views.new_view(id);
var G__25982_26020__$1 = (cljs.core.truth_(after)?module$node_modules$jquery$dist$jquery(["#",cljs.core.name(after)].join('')).after(G__25982_26019):G__25982_26019);
if(cljs.core.not(after)){
$parent.append(G__25982_26020__$1);
} else {
}

lab.layout.invalidate_sizes_BANG_();

lab.views.update_styles_BANG_(lab.views.__GT_css(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lab.views.view_info,(function (old_views){
return lab.views.split_BANG_(id,after,cljs.core.get.cljs$core$IFn$_invoke$arity$2(lab.views.direction_map,direction),old_views);
}))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.views.views,cljs.core.assoc,id,document.getElementById(cljs.core.name(id)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.views.components,cljs.core.assoc,id,cljs.core.PersistentArrayMap.EMPTY);
}
}));

(lab.views.add_view_BANG_.cljs$lang$maxFixedArity = 3);

lab.views.remove_view_BANG_ = (function lab$views$remove_view_BANG_(id){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lab.views.views,cljs.core.dissoc,id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lab.views.components,cljs.core.dissoc,id);

document.querySelector(["#",cljs.core.name(id)].join('')).remove();

lab.views.update_styles_BANG_(lab.views.__GT_css(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lab.views.view_info,lab.views.unsplit,id)));

return lab.layout.invalidate_sizes_BANG_();
});
lab.views.rename_view_BANG_ = (function lab$views$rename_view_BANG_(id,new_id){
if(cljs.core.contains_QMARK_(cljs.core.deref(lab.views.components),new_id)){
return null;
} else {
var view = document.getElementById(cljs.core.name(id));
view.setAttribute("id",cljs.core.name(new_id));

(view.querySelector(".id").innerHTML = new_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lab.views.views,clojure.set.rename_keys,cljs.core.PersistentArrayMap.createAsIfByAssoc([id,new_id]));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lab.views.components,clojure.set.rename_keys,cljs.core.PersistentArrayMap.createAsIfByAssoc([id,new_id]));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lab.views.view_info,(function (old_info){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_info,new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__25983){
var map__25984 = p__25983;
var map__25984__$1 = cljs.core.__destructure_map(map__25984);
var data = map__25984__$1;
var id_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25984__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,id_SINGLEQUOTE_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"id","id",-1388402092),new_id);
} else {
return data;
}
}),new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(old_info)));
}));
}
});
lab.views.swap_view_BANG_ = (function lab$views$swap_view_BANG_(id,another_id){
var view_data = lab.views.find_view_info.cljs$core$IFn$_invoke$arity$1(id);
var another_data = lab.views.find_view_info.cljs$core$IFn$_invoke$arity$1(another_id);
return lab.views.update_styles_BANG_(lab.views.__GT_css(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lab.views.view_info,(function (p__25985){
var map__25986 = p__25985;
var map__25986__$1 = cljs.core.__destructure_map(map__25986);
var old_info = map__25986__$1;
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25986__$1,new cljs.core.Keyword(null,"views","views",1450155487));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_info,new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25987){
var map__25988 = p__25987;
var map__25988__$1 = cljs.core.__destructure_map(map__25988);
var data = map__25988__$1;
var id_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25988__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_SINGLEQUOTE_,another_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(view_data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(view_data)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_SINGLEQUOTE_,id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(another_data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(another_data)], 0));
} else {
return data;

}
}
}),views)));
}))));
});
lab.views.set_mode_BANG_ = (function lab$views$set_mode_BANG_(view,mode){
var p = module$node_modules$jquery$dist$jquery(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.views),view));
p.find([".",cljs.core.name(mode)].join('')).show();

return p.find(["> div:not(.",cljs.core.name(mode),", .info)"].join('')).hide();
});
lab.views.list_views = (function lab$views$list_views(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.keys(cljs.core.deref(lab.views.views))));
});
