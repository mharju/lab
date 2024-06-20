goog.provide('lab.autodetect');
lab.autodetect.detectors = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
lab.autodetect.IDetector = function(){};

var lab$autodetect$IDetector$_transform$dyn_26254 = (function (this$,data){
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
return lab$autodetect$IDetector$_transform$dyn_26254(this$,data);
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
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26124 = (function (meta26125){
this.meta26125 = meta26125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26126,meta26125__$1){
var self__ = this;
var _26126__$1 = this;
return (new lab.autodetect.t_lab$autodetect26124(meta26125__$1));
}));

(lab.autodetect.t_lab$autodetect26124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26126){
var self__ = this;
var _26126__$1 = this;
return self__.meta26125;
}));

(lab.autodetect.t_lab$autodetect26124.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26124.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}catch (e26130){if((e26130 instanceof Error)){
var _ = e26130;
return null;
} else {
throw e26130;

}
}}));

(lab.autodetect.t_lab$autodetect26124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26125","meta26125",-180588082,null)], null);
}));

(lab.autodetect.t_lab$autodetect26124.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26124.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26124");

(lab.autodetect.t_lab$autodetect26124.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"lab.autodetect/t_lab$autodetect26124");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26124.
 */
lab.autodetect.__GT_t_lab$autodetect26124 = (function lab$autodetect$__GT_t_lab$autodetect26124(meta26125){
return (new lab.autodetect.t_lab$autodetect26124(meta26125));
});

}

return (new lab.autodetect.t_lab$autodetect26124(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.csv = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26139 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26139 = (function (meta26140){
this.meta26140 = meta26140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26141,meta26140__$1){
var self__ = this;
var _26141__$1 = this;
return (new lab.autodetect.t_lab$autodetect26139(meta26140__$1));
}));

(lab.autodetect.t_lab$autodetect26139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26141){
var self__ = this;
var _26141__$1 = this;
return self__.meta26140;
}));

(lab.autodetect.t_lab$autodetect26139.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26139.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4251__auto__ = typeof data === 'string';
if(and__4251__auto__){
return cljs.core.re_find(/^(\w+,)(\w+,*)+/,data);
} else {
return and__4251__auto__;
}
})())){
var vec__26145 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26137_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__26137_SHARP_,",");
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(data,"\n"));
var seq__26146 = cljs.core.seq(vec__26145);
var first__26147 = cljs.core.first(seq__26146);
var seq__26146__$1 = cljs.core.next(seq__26146);
var header = first__26147;
var rows = seq__26146__$1;
var header__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(header),cljs.core.count(cljs.core.first(rows))))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,header):cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(rows)))));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26138_SHARP_){
return cljs.core.zipmap(header__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
var or__4253__auto__ = lab.autodetect.detect(v);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return v;
}
}),p1__26138_SHARP_));
}),rows);
} else {
return null;
}
}));

(lab.autodetect.t_lab$autodetect26139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26140","meta26140",-1661187298,null)], null);
}));

(lab.autodetect.t_lab$autodetect26139.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26139.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26139");

(lab.autodetect.t_lab$autodetect26139.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"lab.autodetect/t_lab$autodetect26139");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26139.
 */
lab.autodetect.__GT_t_lab$autodetect26139 = (function lab$autodetect$__GT_t_lab$autodetect26139(meta26140){
return (new lab.autodetect.t_lab$autodetect26139(meta26140));
});

}

return (new lab.autodetect.t_lab$autodetect26139(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.tsv = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26156 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26156 = (function (meta26157){
this.meta26157 = meta26157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26158,meta26157__$1){
var self__ = this;
var _26158__$1 = this;
return (new lab.autodetect.t_lab$autodetect26156(meta26157__$1));
}));

(lab.autodetect.t_lab$autodetect26156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26158){
var self__ = this;
var _26158__$1 = this;
return self__.meta26157;
}));

(lab.autodetect.t_lab$autodetect26156.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26156.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4251__auto__ = typeof data === 'string';
if(and__4251__auto__){
return cljs.core.re_find(/\t/,data);
} else {
return and__4251__auto__;
}
})())){
var vec__26159 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26152_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__26152_SHARP_,"\t");
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(data,"\n"));
var seq__26160 = cljs.core.seq(vec__26159);
var first__26161 = cljs.core.first(seq__26160);
var seq__26160__$1 = cljs.core.next(seq__26160);
var header = first__26161;
var rows = seq__26160__$1;
var header__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(header),cljs.core.count(cljs.core.first(rows))))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,header):cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(rows)))));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26154_SHARP_){
return cljs.core.zipmap(header__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
var or__4253__auto__ = lab.autodetect.detect(v);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return v;
}
}),p1__26154_SHARP_));
}),rows);
} else {
return null;
}
}));

(lab.autodetect.t_lab$autodetect26156.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26157","meta26157",817919008,null)], null);
}));

(lab.autodetect.t_lab$autodetect26156.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26156.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26156");

(lab.autodetect.t_lab$autodetect26156.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"lab.autodetect/t_lab$autodetect26156");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26156.
 */
lab.autodetect.__GT_t_lab$autodetect26156 = (function lab$autodetect$__GT_t_lab$autodetect26156(meta26157){
return (new lab.autodetect.t_lab$autodetect26156(meta26157));
});

}

return (new lab.autodetect.t_lab$autodetect26156(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.postgres = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26166 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26166 = (function (meta26167){
this.meta26167 = meta26167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26168,meta26167__$1){
var self__ = this;
var _26168__$1 = this;
return (new lab.autodetect.t_lab$autodetect26166(meta26167__$1));
}));

(lab.autodetect.t_lab$autodetect26166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26168){
var self__ = this;
var _26168__$1 = this;
return self__.meta26167;
}));

(lab.autodetect.t_lab$autodetect26166.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26166.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.re_find(/\s+\w+\s+/,data);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.re_find(/\-+/,data);
} else {
return and__4251__auto__;
}
})())){
var vec__26169 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26164_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__26164_SHARP_,/\s+\||$/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(data,"\n"));
var seq__26170 = cljs.core.seq(vec__26169);
var first__26171 = cljs.core.first(seq__26170);
var seq__26170__$1 = cljs.core.next(seq__26170);
var header = first__26171;
var first__26171__$1 = cljs.core.first(seq__26170__$1);
var seq__26170__$2 = cljs.core.next(seq__26170__$1);
var _ = first__26171__$1;
var rows = seq__26170__$2;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26165_SHARP_){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$1(clojure.string.trim),header),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
var v__$1 = clojure.string.trim(v);
var or__4253__auto__ = lab.autodetect.detect(v__$1);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return v__$1;
}
}),p1__26165_SHARP_));
}),rows);
} else {
return null;
}
}));

(lab.autodetect.t_lab$autodetect26166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26167","meta26167",1231273083,null)], null);
}));

(lab.autodetect.t_lab$autodetect26166.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26166.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26166");

(lab.autodetect.t_lab$autodetect26166.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"lab.autodetect/t_lab$autodetect26166");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26166.
 */
lab.autodetect.__GT_t_lab$autodetect26166 = (function lab$autodetect$__GT_t_lab$autodetect26166(meta26167){
return (new lab.autodetect.t_lab$autodetect26166(meta26167));
});

}

return (new lab.autodetect.t_lab$autodetect26166(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.numeric = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26174 = (function (meta26175){
this.meta26175 = meta26175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26176,meta26175__$1){
var self__ = this;
var _26176__$1 = this;
return (new lab.autodetect.t_lab$autodetect26174(meta26175__$1));
}));

(lab.autodetect.t_lab$autodetect26174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26176){
var self__ = this;
var _26176__$1 = this;
return self__.meta26175;
}));

(lab.autodetect.t_lab$autodetect26174.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26174.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
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

(lab.autodetect.t_lab$autodetect26174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26175","meta26175",-1804705232,null)], null);
}));

(lab.autodetect.t_lab$autodetect26174.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26174.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26174");

(lab.autodetect.t_lab$autodetect26174.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"lab.autodetect/t_lab$autodetect26174");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26174.
 */
lab.autodetect.__GT_t_lab$autodetect26174 = (function lab$autodetect$__GT_t_lab$autodetect26174(meta26175){
return (new lab.autodetect.t_lab$autodetect26174(meta26175));
});

}

return (new lab.autodetect.t_lab$autodetect26174(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.datetime = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26199 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26199 = (function (meta26200){
this.meta26200 = meta26200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26201,meta26200__$1){
var self__ = this;
var _26201__$1 = this;
return (new lab.autodetect.t_lab$autodetect26199(meta26200__$1));
}));

(lab.autodetect.t_lab$autodetect26199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26201){
var self__ = this;
var _26201__$1 = this;
return self__.meta26200;
}));

(lab.autodetect.t_lab$autodetect26199.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26199.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
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

(lab.autodetect.t_lab$autodetect26199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26200","meta26200",-1847670750,null)], null);
}));

(lab.autodetect.t_lab$autodetect26199.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26199.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26199");

(lab.autodetect.t_lab$autodetect26199.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"lab.autodetect/t_lab$autodetect26199");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26199.
 */
lab.autodetect.__GT_t_lab$autodetect26199 = (function lab$autodetect$__GT_t_lab$autodetect26199(meta26200){
return (new lab.autodetect.t_lab$autodetect26199(meta26200));
});

}

return (new lab.autodetect.t_lab$autodetect26199(cljs.core.PersistentArrayMap.EMPTY));
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
