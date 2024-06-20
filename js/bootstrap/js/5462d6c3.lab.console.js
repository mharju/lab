goog.provide('lab.console');
lab.console.console_BANG_ = (function lab$console$console_BANG_(view){
return lab.views.set_mode_BANG_(view,new cljs.core.Keyword(null,"console","console",1228072057));
});
lab.console.make_row = (function lab$console$make_row(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.row","span.row",251881359),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.date","span.date",2108360793),(new Date()).toISOString().slice((0),(-1)).replace("T"," ")], null),text], null);
});
lab.console.find_element = (function lab$console$find_element(view){
return $(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.views),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view], null))).find(".console");
});
lab.console.vec_to_table = (function lab$console$vec_to_table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26029 = arguments.length;
var i__4865__auto___26033 = (0);
while(true){
if((i__4865__auto___26033 < len__4864__auto___26029)){
args__4870__auto__.push((arguments[i__4865__auto___26033]));

var G__26034 = (i__4865__auto___26033 + (1));
i__4865__auto___26033 = G__26034;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return lab.console.vec_to_table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(lab.console.vec_to_table.cljs$core$IFn$_invoke$arity$variadic = (function (v,p__25991){
var map__25992 = p__25991;
var map__25992__$1 = cljs.core.__destructure_map(map__25992);
var titles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25992__$1,new cljs.core.Keyword(null,"titles","titles",786106755));
var titles__$1 = (cljs.core.truth_(titles)?titles:cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(v)))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.vec","table.vec",-724457148),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (h){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),h], null);
}),titles__$1)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core.map_QMARK_(c))?(lab.console.map_to_table.cljs$core$IFn$_invoke$arity$1 ? lab.console.map_to_table.cljs$core$IFn$_invoke$arity$1(c) : lab.console.map_to_table.call(null,c)):((((cljs.core.vector_QMARK_(c)) && (cljs.core.map_QMARK_(cljs.core.first(c)))))?lab.console.vec_to_table.cljs$core$IFn$_invoke$arity$variadic(c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"titles","titles",786106755),((cljs.core.map_QMARK_(cljs.core.first(c)))?cljs.core.keys(cljs.core.first(c)):null)], 0)):cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)
))], null);
}),((cljs.core.map_QMARK_(row))?cljs.core.vals(row):row)));
}),v))], null);
}));

(lab.console.vec_to_table.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lab.console.vec_to_table.cljs$lang$applyTo = (function (seq25989){
var G__25990 = cljs.core.first(seq25989);
var seq25989__$1 = cljs.core.next(seq25989);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25990,seq25989__$1);
}));

lab.console.map_to_table = (function lab$console$map_to_table(m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.map","table.map",-196495937),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__25994){
var vec__25995 = p__25994;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25995,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25995,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),k], null),((cljs.core.map_QMARK_(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(lab.console.map_to_table.cljs$core$IFn$_invoke$arity$1 ? lab.console.map_to_table.cljs$core$IFn$_invoke$arity$1(v) : lab.console.map_to_table.call(null,v))], null):((((cljs.core.vector_QMARK_(v)) && (((cljs.core.map_QMARK_(cljs.core.first(v))) || (cljs.core.vector_QMARK_(cljs.core.first(v)))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),lab.console.vec_to_table.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"titles","titles",786106755),((cljs.core.map_QMARK_(cljs.core.first(v)))?cljs.core.keys(cljs.core.first(v)):null)], 0))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)], null)
))], null);
}),m))], null);
});
lab.console.make_table_row = (function lab$console$make_table_row(m){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.row","span.row",251881359),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.date","span.date",2108360793),(new Date()).toISOString().slice((0),(-1)).replace("T"," ")], null)], null),lab.console.map_to_table(m));
});
lab.console.scroll_to_bottom_BANG_ = (function lab$console$scroll_to_bottom_BANG_(view){
var v = lab.console.find_element(view).get((0));
return (v.scrollTop = v.scrollHeight);
});
lab.console.append_BANG_ = (function lab$console$append_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26042 = arguments.length;
var i__4865__auto___26043 = (0);
while(true){
if((i__4865__auto___26043 < len__4864__auto___26042)){
args__4870__auto__.push((arguments[i__4865__auto___26043]));

var G__26044 = (i__4865__auto___26043 + (1));
i__4865__auto___26043 = G__26044;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return lab.console.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(lab.console.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,text){
lab.console.console_BANG_(view);

lab.console.find_element(view).append(cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(lab.console.make_row(text))));

return lab.console.scroll_to_bottom_BANG_(view);
}));

(lab.console.append_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lab.console.append_BANG_.cljs$lang$applyTo = (function (seq25998){
var G__25999 = cljs.core.first(seq25998);
var seq25998__$1 = cljs.core.next(seq25998);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25999,seq25998__$1);
}));

lab.console.append_map_BANG_ = (function lab$console$append_map_BANG_(view,m){
lab.console.console_BANG_(view);

lab.console.find_element(view).append(cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(lab.console.make_table_row(m))));

return lab.console.scroll_to_bottom_BANG_(view);
});
lab.console.append_vec_BANG_ = (function lab$console$append_vec_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26045 = arguments.length;
var i__4865__auto___26046 = (0);
while(true){
if((i__4865__auto___26046 < len__4864__auto___26045)){
args__4870__auto__.push((arguments[i__4865__auto___26046]));

var G__26047 = (i__4865__auto___26046 + (1));
i__4865__auto___26046 = G__26047;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return lab.console.append_vec_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(lab.console.append_vec_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,v,p__26003){
var map__26004 = p__26003;
var map__26004__$1 = cljs.core.__destructure_map(map__26004);
var titles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26004__$1,new cljs.core.Keyword(null,"titles","titles",786106755));
lab.console.console_BANG_(view);

return lab.console.find_element(view).append(["<span"," class=\"row\"",">",(function (){var attrs26005 = (new Date()).toISOString().slice((0),(-1)).replace("T"," ");
if(cljs.core.map_QMARK_(attrs26005)){
return ["<span",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"date"], null),attrs26005], 0)))),">","</span>"].join('');
} else {
return ["<span class=\"date\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs26005)),"</span>"].join('');
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(lab.console.vec_to_table.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"titles","titles",786106755),titles], 0)))),"</span>"].join(''));
}));

(lab.console.append_vec_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(lab.console.append_vec_BANG_.cljs$lang$applyTo = (function (seq26000){
var G__26001 = cljs.core.first(seq26000);
var seq26000__$1 = cljs.core.next(seq26000);
var G__26002 = cljs.core.first(seq26000__$1);
var seq26000__$2 = cljs.core.next(seq26000__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26001,G__26002,seq26000__$2);
}));

lab.console.prepend_BANG_ = (function lab$console$prepend_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26048 = arguments.length;
var i__4865__auto___26049 = (0);
while(true){
if((i__4865__auto___26049 < len__4864__auto___26048)){
args__4870__auto__.push((arguments[i__4865__auto___26049]));

var G__26050 = (i__4865__auto___26049 + (1));
i__4865__auto___26049 = G__26050;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return lab.console.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(lab.console.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,text){
lab.console.console_BANG_(view);

return lab.console.find_element(view).prepend(cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(lab.console.make_row(text))));
}));

(lab.console.prepend_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lab.console.prepend_BANG_.cljs$lang$applyTo = (function (seq26006){
var G__26007 = cljs.core.first(seq26006);
var seq26006__$1 = cljs.core.next(seq26006);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26007,seq26006__$1);
}));

lab.console.prepend_map_BANG_ = (function lab$console$prepend_map_BANG_(view,m){
lab.console.console_BANG_(view);

return lab.console.find_element(view).prepend(cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(lab.console.make_table_row(m))));
});
lab.console.clear_BANG_ = (function lab$console$clear_BANG_(view){
var element = $(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.views),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view], null))).find(".console");
return element.html("");
});
