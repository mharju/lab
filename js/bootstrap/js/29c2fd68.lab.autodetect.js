goog.provide('lab.autodetect');
lab.autodetect.detectors = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
lab.autodetect.IDetector = function(){};

var lab$autodetect$IDetector$_transform$dyn_26782 = (function (this$,data){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (lab.autodetect._transform[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,data) : m__4429__auto__.call(null,this$,data));
} else {
var m__4426__auto__ = (lab.autodetect._transform["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,data) : m__4426__auto__.call(null,this$,data));
} else {
throw cljs.core.missing_protocol("IDetector.-transform",this$);
}
}
});
lab.autodetect._transform = (function lab$autodetect$_transform(this$,data){
if((((!((this$ == null)))) && ((!((this$.lab$autodetect$IDetector$_transform$arity$2 == null)))))){
return this$.lab$autodetect$IDetector$_transform$arity$2(this$,data);
} else {
return lab$autodetect$IDetector$_transform$dyn_26782(this$,data);
}
});

lab.autodetect.register_BANG_ = (function lab$autodetect$register_BANG_(detector){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lab.autodetect.detectors,cljs.core.conj,detector);
});
lab.autodetect.detect = (function lab$autodetect$detect(data){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,detector){
var temp__5735__auto__ = lab.autodetect._transform(detector,data);
if(cljs.core.truth_(temp__5735__auto__)){
var result = temp__5735__auto__;
return cljs.core.reduced(result);
} else {
return null;
}
}),null,cljs.core.deref(lab.autodetect.detectors));
});
lab.autodetect.json = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26742 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26742 = (function (meta26743){
this.meta26743 = meta26743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26744,meta26743__$1){
var self__ = this;
var _26744__$1 = this;
return (new lab.autodetect.t_lab$autodetect26742(meta26743__$1));
}));

(lab.autodetect.t_lab$autodetect26742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26744){
var self__ = this;
var _26744__$1 = this;
return self__.meta26743;
}));

(lab.autodetect.t_lab$autodetect26742.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26742.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}catch (e26745){if((e26745 instanceof Error)){
var _ = e26745;
return null;
} else {
throw e26745;

}
}}));

(lab.autodetect.t_lab$autodetect26742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26743","meta26743",-1236250536,null)], null);
}));

(lab.autodetect.t_lab$autodetect26742.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26742.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26742");

(lab.autodetect.t_lab$autodetect26742.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"lab.autodetect/t_lab$autodetect26742");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26742.
 */
lab.autodetect.__GT_t_lab$autodetect26742 = (function lab$autodetect$__GT_t_lab$autodetect26742(meta26743){
return (new lab.autodetect.t_lab$autodetect26742(meta26743));
});

}

return (new lab.autodetect.t_lab$autodetect26742(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.csv = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26748 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26748 = (function (meta26749){
this.meta26749 = meta26749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26750,meta26749__$1){
var self__ = this;
var _26750__$1 = this;
return (new lab.autodetect.t_lab$autodetect26748(meta26749__$1));
}));

(lab.autodetect.t_lab$autodetect26748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26750){
var self__ = this;
var _26750__$1 = this;
return self__.meta26749;
}));

(lab.autodetect.t_lab$autodetect26748.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26748.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(((typeof data === 'string')?cljs.core.re_find(/^(\w+,)(\w+,*)+/,data):false))){
var vec__26751 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26746_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__26746_SHARP_,",");
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(data,"\n"));
var seq__26752 = cljs.core.seq(vec__26751);
var first__26753 = cljs.core.first(seq__26752);
var seq__26752__$1 = cljs.core.next(seq__26752);
var header = first__26753;
var rows = seq__26752__$1;
var header__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(header),cljs.core.count(cljs.core.first(rows))))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,header):cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(rows)))));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26747_SHARP_){
return cljs.core.zipmap(header__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
var or__4126__auto__ = lab.autodetect.detect(v);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return v;
}
}),p1__26747_SHARP_));
}),rows);
} else {
return null;
}
}));

(lab.autodetect.t_lab$autodetect26748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26749","meta26749",-1815918245,null)], null);
}));

(lab.autodetect.t_lab$autodetect26748.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26748.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26748");

(lab.autodetect.t_lab$autodetect26748.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"lab.autodetect/t_lab$autodetect26748");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26748.
 */
lab.autodetect.__GT_t_lab$autodetect26748 = (function lab$autodetect$__GT_t_lab$autodetect26748(meta26749){
return (new lab.autodetect.t_lab$autodetect26748(meta26749));
});

}

return (new lab.autodetect.t_lab$autodetect26748(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.tsv = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26759 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26759 = (function (meta26760){
this.meta26760 = meta26760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26761,meta26760__$1){
var self__ = this;
var _26761__$1 = this;
return (new lab.autodetect.t_lab$autodetect26759(meta26760__$1));
}));

(lab.autodetect.t_lab$autodetect26759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26761){
var self__ = this;
var _26761__$1 = this;
return self__.meta26760;
}));

(lab.autodetect.t_lab$autodetect26759.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26759.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(((typeof data === 'string')?cljs.core.re_find(/\t/,data):false))){
var vec__26762 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26757_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__26757_SHARP_,"\t");
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(data,"\n"));
var seq__26763 = cljs.core.seq(vec__26762);
var first__26764 = cljs.core.first(seq__26763);
var seq__26763__$1 = cljs.core.next(seq__26763);
var header = first__26764;
var rows = seq__26763__$1;
var header__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(header),cljs.core.count(cljs.core.first(rows))))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,header):cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(rows)))));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26758_SHARP_){
return cljs.core.zipmap(header__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
var or__4126__auto__ = lab.autodetect.detect(v);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return v;
}
}),p1__26758_SHARP_));
}),rows);
} else {
return null;
}
}));

(lab.autodetect.t_lab$autodetect26759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26760","meta26760",-1106833983,null)], null);
}));

(lab.autodetect.t_lab$autodetect26759.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26759.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26759");

(lab.autodetect.t_lab$autodetect26759.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"lab.autodetect/t_lab$autodetect26759");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26759.
 */
lab.autodetect.__GT_t_lab$autodetect26759 = (function lab$autodetect$__GT_t_lab$autodetect26759(meta26760){
return (new lab.autodetect.t_lab$autodetect26759(meta26760));
});

}

return (new lab.autodetect.t_lab$autodetect26759(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.postgres = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26767 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26767 = (function (meta26768){
this.meta26768 = meta26768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26769,meta26768__$1){
var self__ = this;
var _26769__$1 = this;
return (new lab.autodetect.t_lab$autodetect26767(meta26768__$1));
}));

(lab.autodetect.t_lab$autodetect26767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26769){
var self__ = this;
var _26769__$1 = this;
return self__.meta26768;
}));

(lab.autodetect.t_lab$autodetect26767.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26767.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.re_find(/\s+\w+\s+/,data);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.re_find(/\-+/,data);
} else {
return and__4115__auto__;
}
})())){
var vec__26770 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26765_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__26765_SHARP_,/\s+\||$/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(data,"\n"));
var seq__26771 = cljs.core.seq(vec__26770);
var first__26772 = cljs.core.first(seq__26771);
var seq__26771__$1 = cljs.core.next(seq__26771);
var header = first__26772;
var first__26772__$1 = cljs.core.first(seq__26771__$1);
var seq__26771__$2 = cljs.core.next(seq__26771__$1);
var _ = first__26772__$1;
var rows = seq__26771__$2;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26766_SHARP_){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$1(clojure.string.trim),header),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
var v__$1 = clojure.string.trim(v);
var or__4126__auto__ = lab.autodetect.detect(v__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return v__$1;
}
}),p1__26766_SHARP_));
}),rows);
} else {
return null;
}
}));

(lab.autodetect.t_lab$autodetect26767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26768","meta26768",-952309446,null)], null);
}));

(lab.autodetect.t_lab$autodetect26767.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26767.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26767");

(lab.autodetect.t_lab$autodetect26767.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"lab.autodetect/t_lab$autodetect26767");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26767.
 */
lab.autodetect.__GT_t_lab$autodetect26767 = (function lab$autodetect$__GT_t_lab$autodetect26767(meta26768){
return (new lab.autodetect.t_lab$autodetect26767(meta26768));
});

}

return (new lab.autodetect.t_lab$autodetect26767(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.numeric = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26773 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26773 = (function (meta26774){
this.meta26774 = meta26774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26775,meta26774__$1){
var self__ = this;
var _26775__$1 = this;
return (new lab.autodetect.t_lab$autodetect26773(meta26774__$1));
}));

(lab.autodetect.t_lab$autodetect26773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26775){
var self__ = this;
var _26775__$1 = this;
return self__.meta26774;
}));

(lab.autodetect.t_lab$autodetect26773.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26773.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(((typeof data === 'string')?cljs.core.re_find(/^\d+\.*\d*$/,data):false))){
return parseFloat(data);
} else {
return null;
}
}));

(lab.autodetect.t_lab$autodetect26773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26774","meta26774",-1344337980,null)], null);
}));

(lab.autodetect.t_lab$autodetect26773.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26773.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26773");

(lab.autodetect.t_lab$autodetect26773.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"lab.autodetect/t_lab$autodetect26773");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26773.
 */
lab.autodetect.__GT_t_lab$autodetect26773 = (function lab$autodetect$__GT_t_lab$autodetect26773(meta26774){
return (new lab.autodetect.t_lab$autodetect26773(meta26774));
});

}

return (new lab.autodetect.t_lab$autodetect26773(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.datetime = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26776 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26776 = (function (meta26777){
this.meta26777 = meta26777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26778,meta26777__$1){
var self__ = this;
var _26778__$1 = this;
return (new lab.autodetect.t_lab$autodetect26776(meta26777__$1));
}));

(lab.autodetect.t_lab$autodetect26776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26778){
var self__ = this;
var _26778__$1 = this;
return self__.meta26777;
}));

(lab.autodetect.t_lab$autodetect26776.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26776.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
var temp__5735__auto__ = (new Date(data));
if(cljs.core.truth_(temp__5735__auto__)){
var match = temp__5735__auto__;
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.re_find(/[^0-9\-\.:]/,data);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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

(lab.autodetect.t_lab$autodetect26776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26777","meta26777",-1089656856,null)], null);
}));

(lab.autodetect.t_lab$autodetect26776.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26776.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26776");

(lab.autodetect.t_lab$autodetect26776.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"lab.autodetect/t_lab$autodetect26776");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26776.
 */
lab.autodetect.__GT_t_lab$autodetect26776 = (function lab$autodetect$__GT_t_lab$autodetect26776(meta26777){
return (new lab.autodetect.t_lab$autodetect26776(meta26777));
});

}

return (new lab.autodetect.t_lab$autodetect26776(cljs.core.PersistentArrayMap.EMPTY));
})()
;
lab.autodetect.number_list = (function (){
if((typeof lab !== 'undefined') && (typeof lab.autodetect !== 'undefined') && (typeof lab.autodetect.t_lab$autodetect26779 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {lab.autodetect.IDetector}
*/
lab.autodetect.t_lab$autodetect26779 = (function (meta26780){
this.meta26780 = meta26780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(lab.autodetect.t_lab$autodetect26779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26781,meta26780__$1){
var self__ = this;
var _26781__$1 = this;
return (new lab.autodetect.t_lab$autodetect26779(meta26780__$1));
}));

(lab.autodetect.t_lab$autodetect26779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26781){
var self__ = this;
var _26781__$1 = this;
return self__.meta26780;
}));

(lab.autodetect.t_lab$autodetect26779.prototype.lab$autodetect$IDetector$ = cljs.core.PROTOCOL_SENTINEL);

(lab.autodetect.t_lab$autodetect26779.prototype.lab$autodetect$IDetector$_transform$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(((typeof data === 'string')?cljs.core.re_find(/^\d+\.*\d*[\s,]\d+\.*\d*/,data):false))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$1(parseFloat),cljs.core.re_seq(/\d+\.*\d*/,data));
} else {
return null;
}
}));

(lab.autodetect.t_lab$autodetect26779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26780","meta26780",1320883808,null)], null);
}));

(lab.autodetect.t_lab$autodetect26779.cljs$lang$type = true);

(lab.autodetect.t_lab$autodetect26779.cljs$lang$ctorStr = "lab.autodetect/t_lab$autodetect26779");

(lab.autodetect.t_lab$autodetect26779.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"lab.autodetect/t_lab$autodetect26779");
}));

/**
 * Positional factory function for lab.autodetect/t_lab$autodetect26779.
 */
lab.autodetect.__GT_t_lab$autodetect26779 = (function lab$autodetect$__GT_t_lab$autodetect26779(meta26780){
return (new lab.autodetect.t_lab$autodetect26779(meta26780));
});

}

return (new lab.autodetect.t_lab$autodetect26779(cljs.core.PersistentArrayMap.EMPTY));
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
