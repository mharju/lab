goog.provide('lab.layout');
lab.layout.handlers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
lab.layout.register_handler_BANG_ = (function lab$layout$register_handler_BANG_(handler){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lab.layout.handlers,cljs.core.conj,handler);
});
lab.layout.remove_handler_BANG_ = (function lab$layout$remove_handler_BANG_(handler){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lab.layout.handlers,cljs.core.disj,handler);
});
lab.layout.invalidate_sizes_BANG_ = (function lab$layout$invalidate_sizes_BANG_(){
return setTimeout((function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function lab$layout$invalidate_sizes_BANG__$_iter__25738(s__25739){
return (new cljs.core.LazySeq(null,(function (){
var s__25739__$1 = s__25739;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__25739__$1);
if(temp__5735__auto__){
var s__25739__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25739__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__25739__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__25741 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__25740 = (0);
while(true){
if((i__25740 < size__4528__auto__)){
var handler = cljs.core._nth(c__4527__auto__,i__25740);
cljs.core.chunk_append(b__25741,(handler.cljs$core$IFn$_invoke$arity$0 ? handler.cljs$core$IFn$_invoke$arity$0() : handler.call(null)));

var G__25900 = (i__25740 + (1));
i__25740 = G__25900;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25741),lab$layout$invalidate_sizes_BANG__$_iter__25738(cljs.core.chunk_rest(s__25739__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25741),null);
}
} else {
var handler = cljs.core.first(s__25739__$2);
return cljs.core.cons((handler.cljs$core$IFn$_invoke$arity$0 ? handler.cljs$core$IFn$_invoke$arity$0() : handler.call(null)),lab$layout$invalidate_sizes_BANG__$_iter__25738(cljs.core.rest(s__25739__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref(lab.layout.handlers));
})());
}),(0));
});
lab.layout.toggle_repl_BANG_ = (function lab$layout$toggle_repl_BANG_(var_args){
var G__25751 = arguments.length;
switch (G__25751) {
case 0:
return lab.layout.toggle_repl_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return lab.layout.toggle_repl_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lab.layout.toggle_repl_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
var $repl = module$node_modules$jquery$dist$jquery("#repl");
var visible_QMARK_ = cljs.core.not($repl.is(":visible"));
return lab.layout.toggle_repl_BANG_.cljs$core$IFn$_invoke$arity$1(visible_QMARK_);
}));

(lab.layout.toggle_repl_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (visible_QMARK_){
var $repl = module$node_modules$jquery$dist$jquery("#repl");
var dashboard = document.getElementById("dashboard");
var map__25760 = cljs.core.deref(lab.layout.repl_size);
var map__25760__$1 = (((((!((map__25760 == null))))?(((((map__25760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25760):map__25760);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25760__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25760__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
if(cljs.core.truth_(visible_QMARK_)){
$repl.show();

(dashboard.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) - size)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit instanceof cljs.core.Keyword))?cljs.core.name(unit):unit))].join(''));
} else {
$repl.hide();

(dashboard.style.height = "100vh");
}

return lab.layout.invalidate_sizes_BANG_();
}));

(lab.layout.toggle_repl_BANG_.cljs$lang$maxFixedArity = 1);

lab.layout.default_repl_size = (function lab$layout$default_repl_size(var_args){
var G__25765 = arguments.length;
switch (G__25765) {
case 0:
return lab.layout.default_repl_size.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return lab.layout.default_repl_size.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lab.layout.default_repl_size.cljs$core$IFn$_invoke$arity$0 = (function (){
return lab.layout.default_repl_size.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lab.layout.repl_direction_horizontal_QMARK_));
}));

(lab.layout.default_repl_size.cljs$core$IFn$_invoke$arity$1 = (function (_direction){
return (40);
}));

(lab.layout.default_repl_size.cljs$lang$maxFixedArity = 1);

lab.layout.repl_size_unit = (function lab$layout$repl_size_unit(var_args){
var G__25767 = arguments.length;
switch (G__25767) {
case 0:
return lab.layout.repl_size_unit.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return lab.layout.repl_size_unit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lab.layout.repl_size_unit.cljs$core$IFn$_invoke$arity$0 = (function (){
return lab.layout.repl_size_unit.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lab.layout.repl_direction_horizontal_QMARK_));
}));

(lab.layout.repl_size_unit.cljs$core$IFn$_invoke$arity$1 = (function (direction){
if(cljs.core.truth_(direction)){
return new cljs.core.Keyword(null,"vw","vw",1941049135);
} else {
return new cljs.core.Keyword(null,"vh","vh",79552846);
}
}));

(lab.layout.repl_size_unit.cljs$lang$maxFixedArity = 1);

lab.layout.repl_opposite_size_unit = (function lab$layout$repl_opposite_size_unit(var_args){
var G__25773 = arguments.length;
switch (G__25773) {
case 0:
return lab.layout.repl_opposite_size_unit.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return lab.layout.repl_opposite_size_unit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lab.layout.repl_opposite_size_unit.cljs$core$IFn$_invoke$arity$0 = (function (){
return lab.layout.repl_opposite_size_unit.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lab.layout.repl_direction_horizontal_QMARK_));
}));

(lab.layout.repl_opposite_size_unit.cljs$core$IFn$_invoke$arity$1 = (function (direction){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lab.layout.repl_size_unit.cljs$core$IFn$_invoke$arity$1(direction),new cljs.core.Keyword(null,"vw","vw",1941049135))){
return new cljs.core.Keyword(null,"vh","vh",79552846);
} else {
return new cljs.core.Keyword(null,"vw","vw",1941049135);
}
}));

(lab.layout.repl_opposite_size_unit.cljs$lang$maxFixedArity = 1);

lab.layout.repl_direction_horizontal_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
lab.layout.repl_size = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),lab.layout.default_repl_size.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"unit","unit",375175175),lab.layout.repl_size_unit.cljs$core$IFn$_invoke$arity$0()], null));
cljs.core.add_watch(lab.layout.repl_direction_horizontal_QMARK_,new cljs.core.Keyword(null,"size-change","size-change",1658574179),(function (_key,_atom,_old_state,horizontal_QMARK_){
var G__25775_25916 = module$node_modules$jquery$dist$jquery(document.body);
var G__25775_25917__$1 = (cljs.core.truth_(horizontal_QMARK_)?G__25775_25916.addClass("horizontal"):G__25775_25916);
if(cljs.core.not(horizontal_QMARK_)){
G__25775_25917__$1.removeClass("horizontal");
} else {
}

return cljs.core.reset_BANG_(lab.layout.repl_size,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),lab.layout.default_repl_size.cljs$core$IFn$_invoke$arity$1(horizontal_QMARK_),new cljs.core.Keyword(null,"unit","unit",375175175),lab.layout.repl_size_unit.cljs$core$IFn$_invoke$arity$1(horizontal_QMARK_)], null));
}));
lab.layout.update_repl_size = (function lab$layout$update_repl_size(var_args){
var G__25779 = arguments.length;
switch (G__25779) {
case 0:
return lab.layout.update_repl_size.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return lab.layout.update_repl_size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lab.layout.update_repl_size.cljs$core$IFn$_invoke$arity$0 = (function (){
return lab.layout.update_repl_size.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.layout.repl_direction_horizontal_QMARK_),cljs.core.deref(lab.layout.repl_size));
}));

(lab.layout.update_repl_size.cljs$core$IFn$_invoke$arity$2 = (function (direction,p__25780){
var map__25781 = p__25780;
var map__25781__$1 = (((((!((map__25781 == null))))?(((((map__25781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25781):map__25781);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25781__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25781__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var dashboard = document.getElementById("dashboard");
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function lab$layout$iter__25785(s__25786){
return (new cljs.core.LazySeq(null,(function (){
var s__25786__$1 = s__25786;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__25786__$1);
if(temp__5735__auto__){
var s__25786__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25786__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__25786__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__25788 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__25787 = (0);
while(true){
if((i__25787 < size__4528__auto__)){
var elem = cljs.core._nth(c__4527__auto__,i__25787);
var isize = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) - size)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit instanceof cljs.core.Keyword))?cljs.core.name(unit):unit))].join('');
var size__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit instanceof cljs.core.Keyword))?cljs.core.name(unit):unit))].join('');
cljs.core.chunk_append(b__25788,(function (){
if(cljs.core.truth_(direction)){
(elem.style.width = size__$1);

(dashboard.style.height = "100vh");

(elem.style.height = "100%");
} else {
(elem.style.height = size__$1);

(dashboard.style.height = isize);

(elem.style.width = "100%");
}

return lab.layout.invalidate_sizes_BANG_();
})()
);

var G__25955 = (i__25787 + (1));
i__25787 = G__25955;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25788),lab$layout$iter__25785(cljs.core.chunk_rest(s__25786__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25788),null);
}
} else {
var elem = cljs.core.first(s__25786__$2);
var isize = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) - size)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit instanceof cljs.core.Keyword))?cljs.core.name(unit):unit))].join('');
var size__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit instanceof cljs.core.Keyword))?cljs.core.name(unit):unit))].join('');
return cljs.core.cons((function (){
if(cljs.core.truth_(direction)){
(elem.style.width = size__$1);

(dashboard.style.height = "100vh");

(elem.style.height = "100%");
} else {
(elem.style.height = size__$1);

(dashboard.style.height = isize);

(elem.style.width = "100%");
}

return lab.layout.invalidate_sizes_BANG_();
})()
,lab$layout$iter__25785(cljs.core.rest(s__25786__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [document.getElementById("repl"),document.querySelector(".CodeMirror")], null));
})());
}));

(lab.layout.update_repl_size.cljs$lang$maxFixedArity = 2);

cljs.core.add_watch(lab.layout.repl_size,new cljs.core.Keyword(null,"size-change","size-change",1658574179),(function (_key,_atom,_old_state,size){
return lab.layout.update_repl_size.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.layout.repl_direction_horizontal_QMARK_),size);
}));
lab.layout.toggle_direction_BANG_ = (function lab$layout$toggle_direction_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lab.layout.repl_direction_horizontal_QMARK_,cljs.core.not);
});
lab.layout.resize_repl_BANG_ = (function lab$layout$resize_repl_BANG_(new_height){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lab.layout.repl_size,cljs.core.assoc,new cljs.core.Keyword(null,"size","size",1098693007),new_height,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"vh","vh",79552846)], 0));
});
lab.layout.step_repl_size_BANG_ = (function lab$layout$step_repl_size_BANG_(increment){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lab.layout.repl_size,(function (p__25840){
var map__25841 = p__25840;
var map__25841__$1 = (((((!((map__25841 == null))))?(((((map__25841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25841):map__25841);
var s = map__25841__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25841__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25841__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.Keyword(null,"vh","vh",79552846))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.Keyword(null,"vw","vw",1941049135))))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(size + increment),new cljs.core.Keyword(null,"unit","unit",375175175),unit], null);
} else {
console.warn("Not in em mode while resizing!");

return s;
}
}));
});
lab.layout.full_repl_BANG_ = (function lab$layout$full_repl_BANG_(){
var map__25862 = cljs.core.deref(lab.layout.repl_size);
var map__25862__$1 = (((((!((map__25862 == null))))?(((((map__25862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25862):map__25862);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25862__$1,new cljs.core.Keyword(null,"size","size",1098693007));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(size,(100))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lab.layout.repl_size,cljs.core.assoc,new cljs.core.Keyword(null,"size","size",1098693007),(100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unit","unit",375175175),lab.layout.repl_size_unit.cljs$core$IFn$_invoke$arity$0()], 0));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lab.layout.repl_size,cljs.core.assoc,new cljs.core.Keyword(null,"size","size",1098693007),lab.layout.default_repl_size.cljs$core$IFn$_invoke$arity$0(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unit","unit",375175175),lab.layout.repl_size_unit.cljs$core$IFn$_invoke$arity$0()], 0));
}
});
