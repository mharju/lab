goog.provide('lab.views');
lab.views.views = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
lab.views.view_info = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
lab.views.components = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
lab.views.find_end = (function lab$views$find_end(start,size,defs){
if(((((0) <= (start - (1)))) && (((start - (1)) <= (cljs.core.count(defs) - (1)))))){
var end = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__25796,cumulative_SINGLEQUOTE_){
var map__25797 = p__25796;
var map__25797__$1 = cljs.core.__destructure_map(map__25797);
var acc = map__25797__$1;
var cumulative = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25797__$1,new cljs.core.Keyword(null,"cumulative","cumulative",-1602244157));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25797__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
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
lab.views.split_BANG_ = (function lab$views$split_BANG_(id,after,def_key,p__25799){
var map__25800 = p__25799;
var map__25800__$1 = cljs.core.__destructure_map(map__25800);
var data = map__25800__$1;
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25800__$1,new cljs.core.Keyword(null,"views","views",1450155487));
if(cljs.core.empty_QMARK_(data)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null),new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100)], null),new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100)], null)], null);
} else {
var defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,def_key);
var index = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__25808){
var map__25809 = p__25808;
var map__25809__$1 = cljs.core.__destructure_map(map__25809);
var id_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25809__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(after,id_SINGLEQUOTE_)){
return i;
} else {
return null;
}
}),views)));
var map__25801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(views,index);
var map__25801__$1 = cljs.core.__destructure_map(map__25801);
var sibling = map__25801__$1;
var vec__25802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25801__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var size_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25802,(0),null);
var size_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25802,(1),null);
var vec__25805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25801__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var start_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25805,(0),null);
var start_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25805,(1),null);
var col_index = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),def_key))?start_row:start_col) - (1));
var original_size = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),def_key))?size_row:size_col);
var new_size = (original_size / (2));
var new_size_def = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),def_key))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size_col,new_size], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_size,size_row], null));
var create_def_QMARK_ = lab.views.need_new_def_QMARK_(col_index,original_size,new_size,defs);
var col_def = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(defs,col_index);
var new_col_def = (col_def / (2));
var col_defs = ((create_def_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(defs,(0),col_index),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_col_def,new_col_def], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(defs,(col_index + (1)))], 0))):defs);
var move_if_needed = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,(function (p__25810){
var map__25811 = p__25810;
var map__25811__$1 = cljs.core.__destructure_map(map__25811);
var v = map__25811__$1;
var vec__25812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25811__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25812,(0),null);
var vr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25812,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"start","start",-355208981),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),def_key))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vc,(((start_row < vr))?(vr + (1)):vr)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((start_col < vc))?(vc + (1)):vc),vr], null)));
}));
var views__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(views,(0),index),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sibling,new cljs.core.Keyword(null,"size","size",1098693007),new_size_def),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"start","start",-355208981),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),def_key))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_col,lab.views.find_end((col_index + (1)),new_size,defs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lab.views.find_end((col_index + (1)),new_size,defs),start_row], null)),new cljs.core.Keyword(null,"size","size",1098693007),new_size_def], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25815 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(views,(index + (1)));
if(create_def_QMARK_){
return move_if_needed(G__25815);
} else {
return G__25815;
}
})()], 0)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,def_key,col_defs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"views","views",1450155487),views__$1], 0));
}
});
lab.views.find_view_info = (function lab$views$find_view_info(var_args){
var G__25817 = arguments.length;
switch (G__25817) {
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

lab.views.siblings = (function lab$views$siblings(pred,p__25819,id){
var map__25820 = p__25819;
var map__25820__$1 = cljs.core.__destructure_map(map__25820);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25820__$1,new cljs.core.Keyword(null,"views","views",1450155487));
var row_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25820__$1,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918));
var col_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25820__$1,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351));
var map__25821 = lab.views.find_view_info.cljs$core$IFn$_invoke$arity$2(id,views);
var map__25821__$1 = cljs.core.__destructure_map(map__25821);
var vec__25822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25821__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var start_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25822,(0),null);
var start_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25822,(1),null);
var vec__25825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25821__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var size_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25825,(0),null);
var size_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25825,(1),null);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25821__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var end_col_target = lab.views.find_end(start_col_target,size_col_target,col_defs);
var end_row_target = lab.views.find_end(start_row_target,size_row_target,row_defs);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filterv((function (p__25828){
var map__25829 = p__25828;
var map__25829__$1 = cljs.core.__destructure_map(map__25829);
var vec__25830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25829__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var start_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25830,(0),null);
var start_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25830,(1),null);
var vec__25833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25829__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var size_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25833,(0),null);
var size_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25833,(1),null);
var id_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25829__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var end_col = lab.views.find_end(start_col,size_col,col_defs);
var end_row = lab.views.find_end(start_row,size_row,row_defs);
var and__4251__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id_SINGLEQUOTE_,id__$1);
if(and__4251__auto__){
var G__25836 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_col,end_col,start_row,end_row], null);
var G__25837 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_col_target,end_col_target,start_row_target,end_row_target], null);
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__25836,G__25837) : pred.call(null,G__25836,G__25837));
} else {
return and__4251__auto__;
}
}),views)));
});
lab.views.left_siblings = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lab.views.siblings,(function (p__25838,p__25839){
var vec__25840 = p__25838;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25840,(0),null);
var end_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25840,(1),null);
var start_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25840,(2),null);
var end_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25840,(3),null);
var vec__25843 = p__25839;
var start_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25843,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25843,(1),null);
var start_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25843,(2),null);
var end_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25843,(3),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_col,start_col_target)) && ((((start_row_target <= start_row)) && ((((start_row <= end_row)) && ((end_row <= end_row_target)))))));
}));
lab.views.right_siblings = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lab.views.siblings,(function (p__25846,p__25847){
var vec__25848 = p__25846;
var start_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25848,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25848,(1),null);
var start_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25848,(2),null);
var end_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25848,(3),null);
var vec__25851 = p__25847;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25851,(0),null);
var end_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25851,(1),null);
var start_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25851,(2),null);
var end_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25851,(3),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_col,end_col_target)) && ((((start_row_target <= start_row)) && ((((start_row <= end_row)) && ((end_row <= end_row_target)))))));
}));
lab.views.up_siblings = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lab.views.siblings,(function (p__25854,p__25855){
var vec__25856 = p__25854;
var start_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25856,(0),null);
var end_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25856,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25856,(2),null);
var end_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25856,(3),null);
var vec__25859 = p__25855;
var start_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25859,(0),null);
var end_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25859,(1),null);
var start_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25859,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25859,(3),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_row,start_row_target)) && ((((start_col_target <= start_col)) && ((((start_col <= end_col)) && ((end_col <= end_col_target)))))));
}));
lab.views.down_siblings = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lab.views.siblings,(function (p__25866,p__25867){
var vec__25868 = p__25866;
var start_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25868,(0),null);
var end_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25868,(1),null);
var start_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25868,(2),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25868,(3),null);
var vec__25871 = p__25867;
var start_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25871,(0),null);
var end_col_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25871,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25871,(2),null);
var end_row_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25871,(3),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_row,end_row_target)) && ((((start_col_target <= start_col)) && ((((start_col <= end_col)) && ((end_col <= end_col_target)))))));
}));
lab.views.unsplit_left = (function lab$views$unsplit_left(p__25879,id){
var map__25880 = p__25879;
var map__25880__$1 = cljs.core.__destructure_map(map__25880);
var data = map__25880__$1;
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25880__$1,new cljs.core.Keyword(null,"views","views",1450155487));
var col_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25880__$1,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351));
var row_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25880__$1,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(views),(2))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,id),new cljs.core.Keyword(null,"id","id",-1388402092)),views))),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null),new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100)], null),new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100)], null)], null);
} else {
var grow = lab.views.left_siblings(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),views,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),col_defs,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),row_defs], null),id);
var vec__25881 = ((cljs.core.seq(grow))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,grow], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,lab.views.right_siblings(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),views,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),col_defs,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),row_defs], null),id)], null));
var is_left_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25881,(0),null);
var grow__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25881,(1),null);
var vec__25884 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(lab.views.find_view_info.cljs$core$IFn$_invoke$arity$2(id,views));
var grow_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25884,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25884,(1),null);
var views__$1 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,id),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25887){
var map__25888 = p__25887;
var map__25888__$1 = cljs.core.__destructure_map(map__25888);
var v = map__25888__$1;
var vec__25889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25888__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25889,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25889,(1),null);
var vec__25892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25888__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25892,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25892,(1),null);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25888__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.contains_QMARK_(grow__$1,id__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(w + grow_size),h], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"start","start",-355208981),(cljs.core.truth_(is_left_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sx - (1)),sy], null))], 0));
} else {
return v;
}
}),views)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"views","views",1450155487),views__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),row_defs,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),col_defs], 0));
}
});
lab.views.unsplit_up = (function lab$views$unsplit_up(p__25895,id){
var map__25896 = p__25895;
var map__25896__$1 = cljs.core.__destructure_map(map__25896);
var data = map__25896__$1;
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25896__$1,new cljs.core.Keyword(null,"views","views",1450155487));
var col_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25896__$1,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351));
var row_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25896__$1,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(views),(2))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,id),new cljs.core.Keyword(null,"id","id",-1388402092)),views))),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null),new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100)], null),new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100)], null)], null);
} else {
var grow = lab.views.up_siblings(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),views,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),col_defs,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),row_defs], null),id);
var vec__25897 = ((cljs.core.seq(grow))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,grow], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,lab.views.down_siblings(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"views","views",1450155487),views,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351),col_defs,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918),row_defs], null),id)], null));
var is_up_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25897,(0),null);
var grow__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25897,(1),null);
var vec__25900 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,id),new cljs.core.Keyword(null,"id","id",-1388402092)),views)));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25900,(0),null);
var grow_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25900,(1),null);
var views__$1 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,id),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25903){
var map__25904 = p__25903;
var map__25904__$1 = cljs.core.__destructure_map(map__25904);
var v = map__25904__$1;
var vec__25905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25904__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25905,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25905,(1),null);
var vec__25908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25904__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25908,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25908,(1),null);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25904__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
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
lab.views.__GT_css = (function lab$views$__GT_css(p__25913){
var map__25914 = p__25913;
var map__25914__$1 = cljs.core.__destructure_map(map__25914);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25914__$1,new cljs.core.Keyword(null,"views","views",1450155487));
var col_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25914__$1,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351));
var row_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25914__$1,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918));
return [[".container { grid-template: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25911_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25911_SHARP_),"%"].join('');
}),row_defs))," / ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25912_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25912_SHARP_),"vw"].join('');
}),col_defs)),"; }\n"].join(''),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25923){
var map__25924 = p__25923;
var map__25924__$1 = cljs.core.__destructure_map(map__25924);
var vec__25925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25924__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var start_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25925,(0),null);
var start_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25925,(1),null);
var vec__25928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25924__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var size_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25928,(0),null);
var size_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25928,(1),null);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25924__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var end_col = lab.views.find_end(start_col,size_col,col_defs);
var end_row = lab.views.find_end(start_row,size_row,row_defs);
return ["#",cljs.core.name(id)," { grid-area: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_row)," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_col)," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_row)," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_col),"; }"].join('');
}),views))].join('');
});
lab.views.new_view = (function lab$views$new_view(id){
return ["<div",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name(id),new cljs.core.Keyword(null,"class","class",-2030961996),"view"], null))),">","<div"," class=\"info\"",">",(function (){var attrs25931 = id;
if(cljs.core.map_QMARK_(attrs25931)){
return ["<span",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"id"], null),attrs25931], 0)))),">","</span>"].join('');
} else {
return ["<span class=\"id\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs25931)),"</span>"].join('');
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
var len__4864__auto___26008 = arguments.length;
var i__4865__auto___26009 = (0);
while(true){
if((i__4865__auto___26009 < len__4864__auto___26008)){
args__4870__auto__.push((arguments[i__4865__auto___26009]));

var G__26010 = (i__4865__auto___26009 + (1));
i__4865__auto___26009 = G__26010;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return lab.views.set_views_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(lab.views.set_views_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__25953){
var map__25954 = p__25953;
var map__25954__$1 = cljs.core.__destructure_map(map__25954);
var declared_views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25954__$1,new cljs.core.Keyword(null,"views","views",1450155487));
var col_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25954__$1,new cljs.core.Keyword(null,"col-defs","col-defs",-2018914351));
var row_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25954__$1,new cljs.core.Keyword(null,"row-defs","row-defs",1715332918));
var parent = document.getElementById("dashboard");
(parent.innerHTML = "");

var seq__25955_26011 = cljs.core.seq(declared_views);
var chunk__25956_26012 = null;
var count__25957_26013 = (0);
var i__25958_26014 = (0);
while(true){
if((i__25958_26014 < count__25957_26013)){
var map__25961_26015 = chunk__25956_26012.cljs$core$IIndexed$_nth$arity$2(null,i__25958_26014);
var map__25961_26016__$1 = cljs.core.__destructure_map(map__25961_26015);
var id_26017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25961_26016__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
parent.appendChild(lab.views.__GT_element(lab.views.new_view(id_26017)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.views.views,cljs.core.assoc,id_26017,document.getElementById(cljs.core.name(id_26017)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.views.components,cljs.core.assoc,id_26017,cljs.core.PersistentArrayMap.EMPTY);


var G__26018 = seq__25955_26011;
var G__26019 = chunk__25956_26012;
var G__26020 = count__25957_26013;
var G__26021 = (i__25958_26014 + (1));
seq__25955_26011 = G__26018;
chunk__25956_26012 = G__26019;
count__25957_26013 = G__26020;
i__25958_26014 = G__26021;
continue;
} else {
var temp__5753__auto___26022 = cljs.core.seq(seq__25955_26011);
if(temp__5753__auto___26022){
var seq__25955_26023__$1 = temp__5753__auto___26022;
if(cljs.core.chunked_seq_QMARK_(seq__25955_26023__$1)){
var c__4679__auto___26024 = cljs.core.chunk_first(seq__25955_26023__$1);
var G__26025 = cljs.core.chunk_rest(seq__25955_26023__$1);
var G__26026 = c__4679__auto___26024;
var G__26027 = cljs.core.count(c__4679__auto___26024);
var G__26028 = (0);
seq__25955_26011 = G__26025;
chunk__25956_26012 = G__26026;
count__25957_26013 = G__26027;
i__25958_26014 = G__26028;
continue;
} else {
var map__25963_26030 = cljs.core.first(seq__25955_26023__$1);
var map__25963_26031__$1 = cljs.core.__destructure_map(map__25963_26030);
var id_26032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25963_26031__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
parent.appendChild(lab.views.__GT_element(lab.views.new_view(id_26032)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.views.views,cljs.core.assoc,id_26032,document.getElementById(cljs.core.name(id_26032)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.views.components,cljs.core.assoc,id_26032,cljs.core.PersistentArrayMap.EMPTY);


var G__26035 = cljs.core.next(seq__25955_26023__$1);
var G__26036 = null;
var G__26037 = (0);
var G__26038 = (0);
seq__25955_26011 = G__26035;
chunk__25956_26012 = G__26036;
count__25957_26013 = G__26037;
i__25958_26014 = G__26038;
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
(lab.views.set_views_BANG_.cljs$lang$applyTo = (function (seq25952){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25952));
}));

lab.views.add_view_BANG_ = (function lab$views$add_view_BANG_(var_args){
var G__25965 = arguments.length;
switch (G__25965) {
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
return lab.views.add_view_BANG_.cljs$core$IFn$_invoke$arity$3(id,(function (){var G__25966 = cljs.core.deref(lab.views.view_info);
var G__25966__$1 = (((G__25966 == null))?null:new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(G__25966));
var G__25966__$2 = (((G__25966__$1 == null))?null:cljs.core.last(G__25966__$1));
if((G__25966__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__25966__$2);
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
var G__25967_26040 = lab.views.new_view(id);
var G__25967_26041__$1 = (cljs.core.truth_(after)?module$node_modules$jquery$dist$jquery(["#",cljs.core.name(after)].join('')).after(G__25967_26040):G__25967_26040);
if(cljs.core.not(after)){
$parent.append(G__25967_26041__$1);
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_info,new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__25980){
var map__25981 = p__25980;
var map__25981__$1 = cljs.core.__destructure_map(map__25981);
var data = map__25981__$1;
var id_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25981__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
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
return lab.views.update_styles_BANG_(lab.views.__GT_css(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lab.views.view_info,(function (p__25982){
var map__25983 = p__25982;
var map__25983__$1 = cljs.core.__destructure_map(map__25983);
var old_info = map__25983__$1;
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25983__$1,new cljs.core.Keyword(null,"views","views",1450155487));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_info,new cljs.core.Keyword(null,"views","views",1450155487),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25985){
var map__25986 = p__25985;
var map__25986__$1 = cljs.core.__destructure_map(map__25986);
var data = map__25986__$1;
var id_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25986__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
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
