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
var args__4742__auto__ = [];
var len__4736__auto___26536 = arguments.length;
var i__4737__auto___26537 = (0);
while(true){
if((i__4737__auto___26537 < len__4736__auto___26536)){
args__4742__auto__.push((arguments[i__4737__auto___26537]));

var G__26538 = (i__4737__auto___26537 + (1));
i__4737__auto___26537 = G__26538;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return lab.console.vec_to_table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(lab.console.vec_to_table.cljs$core$IFn$_invoke$arity$variadic = (function (v,p__26517){
var map__26518 = p__26517;
var map__26518__$1 = (((((!((map__26518 == null))))?(((((map__26518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26518):map__26518);
var titles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26518__$1,new cljs.core.Keyword(null,"titles","titles",786106755));
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
(lab.console.vec_to_table.cljs$lang$applyTo = (function (seq26515){
var G__26516 = cljs.core.first(seq26515);
var seq26515__$1 = cljs.core.next(seq26515);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26516,seq26515__$1);
}));

lab.console.map_to_table = (function lab$console$map_to_table(m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.map","table.map",-196495937),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__26520){
var vec__26521 = p__26520;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26521,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26521,(1),null);
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
var args__4742__auto__ = [];
var len__4736__auto___26539 = arguments.length;
var i__4737__auto___26540 = (0);
while(true){
if((i__4737__auto___26540 < len__4736__auto___26539)){
args__4742__auto__.push((arguments[i__4737__auto___26540]));

var G__26541 = (i__4737__auto___26540 + (1));
i__4737__auto___26540 = G__26541;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return lab.console.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(lab.console.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,text){
lab.console.console_BANG_(view);

lab.console.find_element(view).append(cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(lab.console.make_row(text))));

return lab.console.scroll_to_bottom_BANG_(view);
}));

(lab.console.append_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lab.console.append_BANG_.cljs$lang$applyTo = (function (seq26524){
var G__26525 = cljs.core.first(seq26524);
var seq26524__$1 = cljs.core.next(seq26524);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26525,seq26524__$1);
}));

lab.console.append_map_BANG_ = (function lab$console$append_map_BANG_(view,m){
lab.console.console_BANG_(view);

lab.console.find_element(view).append(cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(lab.console.make_table_row(m))));

return lab.console.scroll_to_bottom_BANG_(view);
});
lab.console.append_vec_BANG_ = (function lab$console$append_vec_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26542 = arguments.length;
var i__4737__auto___26543 = (0);
while(true){
if((i__4737__auto___26543 < len__4736__auto___26542)){
args__4742__auto__.push((arguments[i__4737__auto___26543]));

var G__26544 = (i__4737__auto___26543 + (1));
i__4737__auto___26543 = G__26544;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return lab.console.append_vec_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(lab.console.append_vec_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,v,p__26530){
var map__26531 = p__26530;
var map__26531__$1 = (((((!((map__26531 == null))))?(((((map__26531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26531):map__26531);
var titles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26531__$1,new cljs.core.Keyword(null,"titles","titles",786106755));
lab.console.console_BANG_(view);

return lab.console.find_element(view).append(["<span"," class=\"row\"",">",(function (){var attrs26533 = (new Date()).toISOString().slice((0),(-1)).replace("T"," ");
if(cljs.core.map_QMARK_(attrs26533)){
return ["<span",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"date"], null),attrs26533], 0)))),">","</span>"].join('');
} else {
return ["<span class=\"date\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs26533)),"</span>"].join('');
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(lab.console.vec_to_table.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"titles","titles",786106755),titles], 0)))),"</span>"].join(''));
}));

(lab.console.append_vec_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(lab.console.append_vec_BANG_.cljs$lang$applyTo = (function (seq26527){
var G__26528 = cljs.core.first(seq26527);
var seq26527__$1 = cljs.core.next(seq26527);
var G__26529 = cljs.core.first(seq26527__$1);
var seq26527__$2 = cljs.core.next(seq26527__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26528,G__26529,seq26527__$2);
}));

lab.console.prepend_BANG_ = (function lab$console$prepend_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26545 = arguments.length;
var i__4737__auto___26546 = (0);
while(true){
if((i__4737__auto___26546 < len__4736__auto___26545)){
args__4742__auto__.push((arguments[i__4737__auto___26546]));

var G__26547 = (i__4737__auto___26546 + (1));
i__4737__auto___26546 = G__26547;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return lab.console.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(lab.console.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,text){
lab.console.console_BANG_(view);

return lab.console.find_element(view).prepend(cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(lab.console.make_row(text))));
}));

(lab.console.prepend_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lab.console.prepend_BANG_.cljs$lang$applyTo = (function (seq26534){
var G__26535 = cljs.core.first(seq26534);
var seq26534__$1 = cljs.core.next(seq26534);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26535,seq26534__$1);
}));

lab.console.prepend_map_BANG_ = (function lab$console$prepend_map_BANG_(view,m){
lab.console.console_BANG_(view);

return lab.console.find_element(view).prepend(cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(lab.console.make_table_row(m))));
});
lab.console.clear_BANG_ = (function lab$console$clear_BANG_(view){
var element = $(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.views.views),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view], null))).find(".console");
return element.html("");
});
