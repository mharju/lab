goog.provide('cljs.source_map.base64_vlq');
cljs.source_map.base64_vlq.vlq_base_shift = (5);
cljs.source_map.base64_vlq.vlq_base = ((1) << (5));
cljs.source_map.base64_vlq.vlq_base_mask = (cljs.source_map.base64_vlq.vlq_base - (1));
cljs.source_map.base64_vlq.vlq_continuation_bit = cljs.source_map.base64_vlq.vlq_base;
cljs.source_map.base64_vlq.to_vlq_signed = (function cljs$source_map$base64_vlq$to_vlq_signed(v){
if((v < (0))){
return (((- v) << (1)) + (1));
} else {
return ((v << (1)) + (0));
}
});
cljs.source_map.base64_vlq.from_vlq_signed = (function cljs$source_map$base64_vlq$from_vlq_signed(v){
var neg_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((v & (1)),(1));
var shifted = (v >> (1));
if(neg_QMARK_){
return (- shifted);
} else {
return shifted;
}
});
cljs.source_map.base64_vlq.encode_val = (function cljs$source_map$base64_vlq$encode_val(n){
var sb = (new goog.string.StringBuffer());
var vlq = cljs.source_map.base64_vlq.to_vlq_signed(n);
var digit_21496 = (vlq & cljs.source_map.base64_vlq.vlq_base_mask);
var vlq_21497__$1 = (vlq >>> (5));
while(true){
if((vlq_21497__$1 > (0))){
var digit_21498__$1 = (digit_21496 | cljs.source_map.base64_vlq.vlq_continuation_bit);
sb.append(cljs.source_map.base64.encode(digit_21498__$1));

var G__21499 = (vlq_21497__$1 & cljs.source_map.base64_vlq.vlq_base_mask);
var G__21500 = (vlq_21497__$1 >>> (5));
digit_21496 = G__21499;
vlq_21497__$1 = G__21500;
continue;
} else {
sb.append(cljs.source_map.base64.encode(digit_21496));
}
break;
}

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
});
cljs.source_map.base64_vlq.encode = (function cljs$source_map$base64_vlq$encode(v){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.source_map.base64_vlq.encode_val,v));
});
cljs.source_map.base64_vlq.decode = (function cljs$source_map$base64_vlq$decode(s){
var l = s.length;
var i = (0);
var result = (0);
var shift = (0);
while(true){
if((i >= l)){
throw (new Error("Expected more digits in base 64 VLQ value."));
} else {
}

var digit = cljs.source_map.base64.decode(s.charAt(i));
var i__$1 = (i + (1));
var continuation_QMARK_ = ((digit & cljs.source_map.base64_vlq.vlq_continuation_bit) > (0));
var digit__$1 = (digit & cljs.source_map.base64_vlq.vlq_base_mask);
var result__$1 = (result + (digit__$1 << shift));
var shift__$1 = (shift + (5));
if(continuation_QMARK_){
var G__21513 = i__$1;
var G__21514 = result__$1;
var G__21515 = shift__$1;
i = G__21513;
result = G__21514;
shift = G__21515;
continue;
} else {
return (new cljs.core.LazySeq(null,((function (i,result,shift,i__$1,continuation_QMARK_,digit__$1,result__$1,shift__$1,digit,l){
return (function (){
return cljs.core.cons(cljs.source_map.base64_vlq.from_vlq_signed(result__$1),(function (){var s__$1 = s.substring(i__$1);
if(clojure.string.blank_QMARK_(s__$1)){
return null;
} else {
return (cljs.source_map.base64_vlq.decode.cljs$core$IFn$_invoke$arity$1 ? cljs.source_map.base64_vlq.decode.cljs$core$IFn$_invoke$arity$1(s__$1) : cljs.source_map.base64_vlq.decode.call(null,s__$1));
}
})());
});})(i,result,shift,i__$1,continuation_QMARK_,digit__$1,result__$1,shift__$1,digit,l))
,null,null));
}
break;
}
});
