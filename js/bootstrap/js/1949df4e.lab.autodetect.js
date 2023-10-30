goog.provide('lab.autodetect');
lab.autodetect.detectors = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
lab.autodetect.IDetector = function(){};

var lab$autodetect$IDetector$_transform$dyn_26217 = (function (this$,data){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (lab.autodetect._transform[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,data) : m__4551__auto__.call(null,this$,data));
} else {
var m__4549__auto__ = (lab.autodetect._transform["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,data) : m__4549__auto__.call(null,this$,data));
} else {
throw cljs.core.missing_protocol("IDetector.-transform",this$);
}
}
});
lab.autodetect._transform = (function lab$autodetect$_transform(this$,data){
if((((!((this$ == null)))) && ((!((this$.lab$autodetect$IDetector$_transform$arity$2 == null)))))){
return this$.lab$autodetect$IDetector$_transform$arity$2(this$,data);
} else {
return lab$autodetect$IDetector$_transform$dyn_26217(this$,data);
}
});

lab.autodetect.register_BANG_ = (function lab$autodetect$register_BANG_(detector){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lab.autodetect.detectors,cljs.core.conj,detector);
});
lab.autodetect.detect = (function lab$autodetect$detect(data){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,detector){
var temp__5753__auto__ = lab.autodetect._transform(detector,data);
if(cljs.core.truth_(temp__5753__auto__)){
var result = temp__5753__auto__;
return cljs.core.reduced(result);
} else {
return null;
}
}),null,cljs.core.deref(lab.autodetect.detectors));
});
lab.autodetect.json = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26180 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26180 = (function (meta26181){
this.meta26181 = meta26181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26182,meta26181__$1){
var self__ = this;
var _26182__$1 = this;
return (new lab.autodetect.t_lab$autodetect26180(meta26181__$1));
}));

(lab.autodetect.t_lab$autodetect26180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26182){
var self__ = this;
var _26182__$1 = this;
return self__.meta26181;
}));

(lab.autodetect.t_lab$autodetect26180.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26180.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}catch (e26183){if((e26183 instanceof Error)){
var _ = e26183;
return null;
} else {
throw e26183;

}
}}));

(lab.autodetect.t_lab$autodetect26180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26181","meta26181",882372435,null)], null);
}));

(lab.autodetect.t_lab$autodetect26180.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26180.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26180");

(lab.autodetect.t_lab$autodetect26180.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"lab.autodetect/t_lab$autodetect26180");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26180.
 */
lab.autodetect.__GT_t_lab$autodetect26180 = (function lab$autodetect$__GT_t_lab$autodetect26180(meta26181){
return (new lab.autodetect.t_lab$autodetect26180(meta26181));
});

}

return (new lab.autodetect.t_lab$autodetect26180(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.csv = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26186 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26186 = (function (meta26187){
this.meta26187 = meta26187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26188,meta26187__$1){
var self__ = this;
var _26188__$1 = this;
return (new lab.autodetect.t_lab$autodetect26186(meta26187__$1));
}));

(lab.autodetect.t_lab$autodetect26186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26188){
var self__ = this;
var _26188__$1 = this;
return self__.meta26187;
}));

(lab.autodetect.t_lab$autodetect26186.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26186.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4251__auto__ = typeof data === 'string';
if(and__4251__auto__){
return cljs.core.re_find(/^(\w+,)(\w+,*)+/,data);
} else {
return and__4251__auto__;
}
})())){
var vec__26189 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26184_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__26184_SHARP_,",");
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(data,"\n"));
var seq__26190 = cljs.core.seq(vec__26189);
var first__26191 = cljs.core.first(seq__26190);
var seq__26190__$1 = cljs.core.next(seq__26190);
var header = first__26191;
var rows = seq__26190__$1;
var header__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(header),cljs.core.count(cljs.core.first(rows))))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,header):cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(rows)))));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26185_SHARP_){
return cljs.core.zipmap(header__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
var or__4253__auto__ = lab.autodetect.detect(v);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return v;
}
}),p1__26185_SHARP_));
}),rows);
} else {
return null;
}
}));

(lab.autodetect.t_lab$autodetect26186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26187","meta26187",1633026878,null)], null);
}));

(lab.autodetect.t_lab$autodetect26186.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26186.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26186");

(lab.autodetect.t_lab$autodetect26186.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"lab.autodetect/t_lab$autodetect26186");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26186.
 */
lab.autodetect.__GT_t_lab$autodetect26186 = (function lab$autodetect$__GT_t_lab$autodetect26186(meta26187){
return (new lab.autodetect.t_lab$autodetect26186(meta26187));
});

}

return (new lab.autodetect.t_lab$autodetect26186(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.tsv = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26194 = (function (meta26195){
this.meta26195 = meta26195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26196,meta26195__$1){
var self__ = this;
var _26196__$1 = this;
return (new lab.autodetect.t_lab$autodetect26194(meta26195__$1));
}));

(lab.autodetect.t_lab$autodetect26194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26196){
var self__ = this;
var _26196__$1 = this;
return self__.meta26195;
}));

(lab.autodetect.t_lab$autodetect26194.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26194.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4251__auto__ = typeof data === 'string';
if(and__4251__auto__){
return cljs.core.re_find(/\t/,data);
} else {
return and__4251__auto__;
}
})())){
var vec__26197 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26192_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__26192_SHARP_,"\t");
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(data,"\n"));
var seq__26198 = cljs.core.seq(vec__26197);
var first__26199 = cljs.core.first(seq__26198);
var seq__26198__$1 = cljs.core.next(seq__26198);
var header = first__26199;
var rows = seq__26198__$1;
var header__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(header),cljs.core.count(cljs.core.first(rows))))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,header):cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(rows)))));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26193_SHARP_){
return cljs.core.zipmap(header__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
var or__4253__auto__ = lab.autodetect.detect(v);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return v;
}
}),p1__26193_SHARP_));
}),rows);
} else {
return null;
}
}));

(lab.autodetect.t_lab$autodetect26194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26195","meta26195",1361924558,null)], null);
}));

(lab.autodetect.t_lab$autodetect26194.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26194.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26194");

(lab.autodetect.t_lab$autodetect26194.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"lab.autodetect/t_lab$autodetect26194");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26194.
 */
lab.autodetect.__GT_t_lab$autodetect26194 = (function lab$autodetect$__GT_t_lab$autodetect26194(meta26195){
return (new lab.autodetect.t_lab$autodetect26194(meta26195));
});

}

return (new lab.autodetect.t_lab$autodetect26194(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.postgres = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26202 = (function (meta26203){
this.meta26203 = meta26203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26204,meta26203__$1){
var self__ = this;
var _26204__$1 = this;
return (new lab.autodetect.t_lab$autodetect26202(meta26203__$1));
}));

(lab.autodetect.t_lab$autodetect26202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26204){
var self__ = this;
var _26204__$1 = this;
return self__.meta26203;
}));

(lab.autodetect.t_lab$autodetect26202.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26202.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.re_find(/\s+\w+\s+/,data);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.re_find(/\-+/,data);
} else {
return and__4251__auto__;
}
})())){
var vec__26205 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26200_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__26200_SHARP_,/\s+\||$/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(data,"\n"));
var seq__26206 = cljs.core.seq(vec__26205);
var first__26207 = cljs.core.first(seq__26206);
var seq__26206__$1 = cljs.core.next(seq__26206);
var header = first__26207;
var first__26207__$1 = cljs.core.first(seq__26206__$1);
var seq__26206__$2 = cljs.core.next(seq__26206__$1);
var _ = first__26207__$1;
var rows = seq__26206__$2;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26201_SHARP_){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$1(clojure.string.trim),header),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
var v__$1 = clojure.string.trim(v);
var or__4253__auto__ = lab.autodetect.detect(v__$1);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return v__$1;
}
}),p1__26201_SHARP_));
}),rows);
} else {
return null;
}
}));

(lab.autodetect.t_lab$autodetect26202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26203","meta26203",-2076056750,null)], null);
}));

(lab.autodetect.t_lab$autodetect26202.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26202.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26202");

(lab.autodetect.t_lab$autodetect26202.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"lab.autodetect/t_lab$autodetect26202");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26202.
 */
lab.autodetect.__GT_t_lab$autodetect26202 = (function lab$autodetect$__GT_t_lab$autodetect26202(meta26203){
return (new lab.autodetect.t_lab$autodetect26202(meta26203));
});

}

return (new lab.autodetect.t_lab$autodetect26202(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.numeric = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26208 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26208 = (function (meta26209){
this.meta26209 = meta26209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26210,meta26209__$1){
var self__ = this;
var _26210__$1 = this;
return (new lab.autodetect.t_lab$autodetect26208(meta26209__$1));
}));

(lab.autodetect.t_lab$autodetect26208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26210){
var self__ = this;
var _26210__$1 = this;
return self__.meta26209;
}));

(lab.autodetect.t_lab$autodetect26208.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26208.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4251__auto__ = typeof data === 'string';
if(and__4251__auto__){
return cljs.core.re_find(/^\d+\.*\d*$/,data);
} else {
return and__4251__auto__;
}
})())){
return parseFloat(data);
} else {
return null;
}
}));

(lab.autodetect.t_lab$autodetect26208.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26209","meta26209",1123086669,null)], null);
}));

(lab.autodetect.t_lab$autodetect26208.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26208.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26208");

(lab.autodetect.t_lab$autodetect26208.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"lab.autodetect/t_lab$autodetect26208");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26208.
 */
lab.autodetect.__GT_t_lab$autodetect26208 = (function lab$autodetect$__GT_t_lab$autodetect26208(meta26209){
return (new lab.autodetect.t_lab$autodetect26208(meta26209));
});

}

return (new lab.autodetect.t_lab$autodetect26208(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.datetime = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26211 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26211 = (function (meta26212){
this.meta26212 = meta26212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26213,meta26212__$1){
var self__ = this;
var _26213__$1 = this;
return (new lab.autodetect.t_lab$autodetect26211(meta26212__$1));
}));

(lab.autodetect.t_lab$autodetect26211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26213){
var self__ = this;
var _26213__$1 = this;
return self__.meta26212;
}));

(lab.autodetect.t_lab$autodetect26211.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26211.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
var temp__5753__auto__ = (new Date(data));
if(cljs.core.truth_(temp__5753__auto__)){
var match = temp__5753__auto__;
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.re_find(/[^0-9\-\.:]/,data);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return isNaN(match.getTime());
}
})())){
return null;
} else {
return match;
}
} else {
return null;
}
}));

(lab.autodetect.t_lab$autodetect26211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26212","meta26212",-2008123450,null)], null);
}));

(lab.autodetect.t_lab$autodetect26211.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26211.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26211");

(lab.autodetect.t_lab$autodetect26211.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"lab.autodetect/t_lab$autodetect26211");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26211.
 */
lab.autodetect.__GT_t_lab$autodetect26211 = (function lab$autodetect$__GT_t_lab$autodetect26211(meta26212){
return (new lab.autodetect.t_lab$autodetect26211(meta26212));
});

}

return (new lab.autodetect.t_lab$autodetect26211(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.number_list = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26214 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26214 = (function (meta26215){
this.meta26215 = meta26215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26216,meta26215__$1){
var self__ = this;
var _26216__$1 = this;
return (new lab.autodetect.t_lab$autodetect26214(meta26215__$1));
}));

(lab.autodetect.t_lab$autodetect26214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26216){
var self__ = this;
var _26216__$1 = this;
return self__.meta26215;
}));

(lab.autodetect.t_lab$autodetect26214.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26214.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4251__auto__ = typeof data === 'string';
if(and__4251__auto__){
return cljs.core.re_find(/^\d+\.*\d*[\s,]\d+\.*\d*/,data);
} else {
return and__4251__auto__;
}
})())){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$1(parseFloat),cljs.core.re_seq(/\d+\.*\d*/,data));
} else {
return null;
}
}));

(lab.autodetect.t_lab$autodetect26214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26215","meta26215",1819093628,null)], null);
}));

(lab.autodetect.t_lab$autodetect26214.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26214.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26214");

(lab.autodetect.t_lab$autodetect26214.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"lab.autodetect/t_lab$autodetect26214");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26214.
 */
lab.autodetect.__GT_t_lab$autodetect26214 = (function lab$autodetect$__GT_t_lab$autodetect26214(meta26215){
return (new lab.autodetect.t_lab$autodetect26214(meta26215));
});

}

return (new lab.autodetect.t_lab$autodetect26214(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cljs.core.reset_BANG_(lab.autodetect.detectors,cljs.core.PersistentVector.EMPTY);

lab.autodetect.register_BANG_(lab.autodetect.json);

lab.autodetect.register_BANG_(lab.autodetect.csv);

lab.autodetect.register_BANG_(lab.autodetect.tsv);

lab.autodetect.register_BANG_(lab.autodetect.postgres);

lab.autodetect.register_BANG_(lab.autodetect.numeric);

lab.autodetect.register_BANG_(lab.autodetect.number_list);

lab.autodetect.register_BANG_(lab.autodetect.datetime);
