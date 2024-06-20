goog.provide('lab.core');
goog.scope(function(){
  lab.core.goog$module$goog$object = goog.module.get('goog.object');
});
cljs.core.enable_console_print_BANG_();
lab.core.data_connection = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentArrayMap.EMPTY], null));
lab.core.load_session_BANG_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lab.codemirror.set_value,lab.session.get_session);
goog.exportSymbol('lab.core.load_session_BANG_', lab.core.load_session_BANG_);
lab.core.save_session_BANG_ = (function lab$core$save_session_BANG_(name){
return window.localStorage.setItem(["session-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),JSON.stringify(lab.codemirror.get_value().replace(lab.session.help_text,"").replace(lab.session.save_session_proto,"")));
});
lab.core.listen_BANG_ = (function lab$core$listen_BANG_(id,listener){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.core.data_connection,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"listeners","listeners",394544445),id], null),listener);
});
lab.core.connect_BANG_ = (function lab$core$connect_BANG_(p__28080){
var map__28081 = p__28080;
var map__28081__$1 = cljs.core.__destructure_map(map__28081);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28081__$1,new cljs.core.Keyword(null,"host","host",-1558485167),"localhost");
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28081__$1,new cljs.core.Keyword(null,"port","port",1534937262),(9898));
var temp__5753__auto__ = cljs.core.deref(lab.core.data_connection);
if(cljs.core.truth_(temp__5753__auto__)){
var map__28082 = temp__5753__auto__;
var map__28082__$1 = cljs.core.__destructure_map(map__28082);
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28082__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
if((!((ws == null)))){
return ws;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lab.core.data_connection,cljs.core.assoc,new cljs.core.Keyword(null,"ws","ws",86841443),(function (){var s = (new WebSocket(["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join('')));
(s.onopen = (function (){
return console.log("Data socket opened at ws://",host,":",port);
}));

(s.onmessage = (function (e){
var map__28086 = (function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(e.data));
}catch (e28087){if((e28087 instanceof Error)){
var _ = e28087;
return e.data;
} else {
throw e28087;

}
}})();
var map__28086__$1 = cljs.core.__destructure_map(map__28086);
var message = map__28086__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28086__$1,"id");
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28086__$1,"data");
var listener = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.core.data_connection),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"listeners","listeners",394544445),id], null));
if(cljs.core.truth_((function (){var and__4251__auto__ = data;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = id;
if(cljs.core.truth_(and__4251__auto____$1)){
return listener;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return (listener.cljs$core$IFn$_invoke$arity$1 ? listener.cljs$core$IFn$_invoke$arity$1(data) : listener.call(null,data));
} else {
var seq__28097 = cljs.core.seq(cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.core.data_connection),new cljs.core.Keyword(null,"listeners","listeners",394544445))));
var chunk__28098 = null;
var count__28099 = (0);
var i__28100 = (0);
while(true){
if((i__28100 < count__28099)){
var listener__$1 = chunk__28098.cljs$core$IIndexed$_nth$arity$2(null,i__28100);
(listener__$1.cljs$core$IFn$_invoke$arity$1 ? listener__$1.cljs$core$IFn$_invoke$arity$1(message) : listener__$1.call(null,message));


var G__28228 = seq__28097;
var G__28229 = chunk__28098;
var G__28230 = count__28099;
var G__28231 = (i__28100 + (1));
seq__28097 = G__28228;
chunk__28098 = G__28229;
count__28099 = G__28230;
i__28100 = G__28231;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__28097);
if(temp__5753__auto____$1){
var seq__28097__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__28097__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__28097__$1);
var G__28232 = cljs.core.chunk_rest(seq__28097__$1);
var G__28233 = c__4679__auto__;
var G__28234 = cljs.core.count(c__4679__auto__);
var G__28235 = (0);
seq__28097 = G__28232;
chunk__28098 = G__28233;
count__28099 = G__28234;
i__28100 = G__28235;
continue;
} else {
var listener__$1 = cljs.core.first(seq__28097__$1);
(listener__$1.cljs$core$IFn$_invoke$arity$1 ? listener__$1.cljs$core$IFn$_invoke$arity$1(message) : listener__$1.call(null,message));


var G__28236 = cljs.core.next(seq__28097__$1);
var G__28237 = null;
var G__28238 = (0);
var G__28239 = (0);
seq__28097 = G__28236;
chunk__28098 = G__28237;
count__28099 = G__28238;
i__28100 = G__28239;
continue;
}
} else {
return null;
}
}
break;
}
}
}));

return s;
})());
}
} else {
return null;
}
});
cljs.core.deref(lab.core.data_connection);
lab.core.on_draw_created = (function lab$core$on_draw_created(e){
var layer_type = e.layerType;
var layer = e.layer;
var cursor = lab.codemirror.get_cursor();
var geometry = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layer_type,"marker"))?(function (){var ll = layer.getLatLng();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ll.lat)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ll.lng)].join('');
})():(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28107_28240 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28108_28241 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28109_28242 = true;
var _STAR_print_fn_STAR__temp_val__28110_28243 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28109_28242);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28110_28243);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__28106_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(p1__28106_SHARP_),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(p1__28106_SHARP_)],null));
}),(function (latlngs){
if(cljs.core.vector_QMARK_(cljs.core.first(latlngs))){
return cljs.core.first(latlngs);
} else {
return latlngs;
}
})(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(layer.getLatLngs(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)))));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28108_28241);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28107_28240);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})()
);
return lab.codemirror.replace_range(geometry,cursor);
});
lab.core.toggle_help_BANG_ = (function lab$core$toggle_help_BANG_(){
return module$node_modules$jquery$dist$jquery(".help").toggle();
});
lab.core.paste_BANG_ = (function lab$core$paste_BANG_(){
return module$node_modules$jquery$dist$jquery("#pasteboard").show().addClass("visible").find("input[type=\"text\"]").focus();
});
lab.core.handle_key = (function lab$core$handle_key(e){
if(cljs.core.truth_((function (){var and__4251__auto__ = module$node_modules$jquery$dist$jquery("#pasteboard").is(":visible");
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.keyCode,(27));
} else {
return and__4251__auto__;
}
})())){
(lab.core.reset_pasteboard_BANG_.cljs$core$IFn$_invoke$arity$0 ? lab.core.reset_pasteboard_BANG_.cljs$core$IFn$_invoke$arity$0() : lab.core.reset_pasteboard_BANG_.call(null));

module$node_modules$jquery$dist$jquery("#pasteboard").hide();
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.getElementById("sessions").getAttribute("class"),"visible")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.keyCode,(27))))){
lab.session.close_session_load_display_BANG_();
} else {
}

if(cljs.core.truth_(e.metaKey)){
var G__28137 = e.keyCode;
switch (G__28137) {
case (70):
lab.layout.full_repl_BANG_();

return e.preventDefault();

break;
case (72):
lab.layout.toggle_repl_BANG_.cljs$core$IFn$_invoke$arity$0();

return e.preventDefault();

break;
case (71):
lab.core.toggle_help_BANG_();

return e.preventDefault();

break;
case (74):
lab.core.paste_BANG_();

return e.preventDefault();

break;
case (75):
lab.session.open_session_load_display_BANG_();

return e.preventDefault();

break;
case (89):
if(cljs.core.truth_(e.altKey)){
return null;
} else {
lab.layout.step_repl_size_BANG_((cljs.core.truth_(e.shiftKey)?(-1):(1)));

return e.preventDefault();
}

break;
default:
return true;

}
} else {
return null;
}
});
lab.core.file_contents = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
lab.core.handle_drop = (function lab$core$handle_drop(e){
e.preventDefault();

var f = (lab.core.goog$module$goog$object.getValueByKeys(e,"dataTransfer","files")[(0)]);
return f.text().then((function (content){
if((cljs.core.count(content) >= (1024))){
cljs.core.reset_BANG_(lab.core.file_contents,content);

return lab.core.goog$module$goog$object.set(document.getElementById("drop-target"),"value",["Loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lab.core.goog$module$goog$object.get(f,"name")),", size ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(content))," bytes."].join(''));
} else {
return lab.core.goog$module$goog$object.set(document.getElementById("drop-target"),"value",content);
}
}));
});
lab.core.handle_dragover = (function lab$core$handle_dragover(e){
return e.preventDefault();
});
lab.core.reset_pasteboard_BANG_ = (function lab$core$reset_pasteboard_BANG_(){
var input = module$node_modules$jquery$dist$jquery("#pasteboard input[name=var]");
var textarea = module$node_modules$jquery$dist$jquery("#pasteboard textarea");
var wrap = module$node_modules$jquery$dist$jquery("#pasteboard input[name=wrap]");
var detect = module$node_modules$jquery$dist$jquery("#pasteboard input[name=detect]");
var re_eval = module$node_modules$jquery$dist$jquery("#pasteboard input[name=eval]");
cljs.core.reset_BANG_(lab.core.file_contents,null);

input.val("");

textarea.val("");

wrap.prop("checked",false);

detect.prop("checked",true);

re_eval.prop("checked",false);

return module$node_modules$jquery$dist$jquery("#pasteboard").removeClass("visible");
});
lab.core.alternate_keys = (function lab$core$alternate_keys(form){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form,cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k.replace("Cmd","Ctrl"),v);
}),cljs.core.PersistentArrayMap.EMPTY,form)], 0));
});
lab.core.maybe_save_default_BANG_ = (function lab$core$maybe_save_default_BANG_(form,p__28163){
var map__28164 = p__28163;
var map__28164__$1 = cljs.core.__destructure_map(map__28164);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28164__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.session.loaded_session),"default")) && (((cljs.core.not(cljs.core.re_find(/session\!/,form))) && (((cljs.core.not(cljs.core.re_find(/lab\.core\/reset\!/,form))) && (cljs.core.not(error)))))))){
return lab.core.save_session_BANG_("default");
} else {
return null;
}
});
lab.core.set_shortcuts_BANG_ = (function lab$core$set_shortcuts_BANG_(cm){
var eval_form = (function lab$core$set_shortcuts_BANG__$_eval_form(cm__$1){
return lab.eval.try_eval_BANG_.cljs$core$IFn$_invoke$arity$variadic(cm__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"comment-evaled","comment-evaled",-1603842930),cljs.core.deref(lab.eval.comment_evaled),new cljs.core.Keyword(null,"hud-result","hud-result",942343078),true,new cljs.core.Keyword(null,"hud-duration","hud-duration",-1418254741),cljs.core.deref(lab.hud.hud_duration),new cljs.core.Keyword(null,"after","after",594996914),lab.core.maybe_save_default_BANG_], 0));
});
var eval_top_form = (function lab$core$set_shortcuts_BANG__$_eval_top_form(cm__$1){
return lab.eval.try_eval_BANG_.cljs$core$IFn$_invoke$arity$variadic(cm__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"comment-evaled","comment-evaled",-1603842930),cljs.core.deref(lab.eval.comment_evaled),new cljs.core.Keyword(null,"top-form","top-form",-437124996),true,new cljs.core.Keyword(null,"hud-result","hud-result",942343078),true,new cljs.core.Keyword(null,"hud-duration","hud-duration",-1418254741),cljs.core.deref(lab.hud.hud_duration),new cljs.core.Keyword(null,"after","after",594996914),lab.core.maybe_save_default_BANG_], 0));
});
var eval_alt_form = (function lab$core$set_shortcuts_BANG__$_eval_alt_form(cm__$1){
return lab.eval.try_eval_BANG_.cljs$core$IFn$_invoke$arity$variadic(cm__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"comment-evaled","comment-evaled",-1603842930),cljs.core.deref(lab.eval.comment_evaled),new cljs.core.Keyword(null,"hud-result","hud-result",942343078),false,new cljs.core.Keyword(null,"after","after",594996914),lab.core.maybe_save_default_BANG_], 0));
});
var eval_alt_top_form = (function lab$core$set_shortcuts_BANG__$_eval_alt_top_form(cm__$1){
return lab.eval.try_eval_BANG_.cljs$core$IFn$_invoke$arity$variadic(cm__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"comment-evaled","comment-evaled",-1603842930),cljs.core.deref(lab.eval.comment_evaled),new cljs.core.Keyword(null,"top-form","top-form",-437124996),true,new cljs.core.Keyword(null,"hud-result","hud-result",942343078),false,new cljs.core.Keyword(null,"after","after",594996914),lab.core.maybe_save_default_BANG_], 0));
});
var eval_editor = (function lab$core$set_shortcuts_BANG__$_eval_editor(_){
return lab.eval.eval_forms_BANG_(lab.codemirror.lines());
});
return cm.setOption("extraKeys",cljs.core.clj__GT_js(lab.core.alternate_keys(new cljs.core.PersistentArrayMap(null, 6, ["Cmd-E",eval_form,"Shift-Cmd-E",eval_top_form,"Cmd-R",eval_alt_form,"Shift-Cmd-R",eval_alt_top_form,"Shift-Cmd-L",eval_editor,"Ctrl-Space","autocomplete"], null))));
});
lab.core.init = module$node_modules$jquery$dist$jquery(document).ready((function (_){
module$node_modules$jquery$dist$jquery(document.body).append("<div class=\"help\"><a class=\"close\">Close</a><table><thead><tr><th>Keyboard shortcut</th><th>Description</th></tr></thead><tbody><tr><td>Cmd-Shift-L</td><td>Evaluate current editor content form by form.</td></tr><tr><td>Cmd-(Shift)-E</td><td>Evaluate (topmost) expression in current cursor position. Show result in HUD.</td></tr><tr><td>Cmd-(Shift)-R</td><td>Evaluate (topmost) expression in current cursor position. Append result to the next row in editor.</td></tr><tr><td>Control-Space</td><td>Get autosuggestions of built in functions and currently available view name keywords.</td></tr><tr><td>Cmd-Shift-F</td><td>Toggle Full REPL view.</td></tr><tr><td>Cmd-(Shift)-Y</td><td>Make REPL bigger / smaller</td></tr><tr><td>Cmd-G</td><td>Toggle help.</td></tr><tr><td>Cmd-H</td><td>Toggle REPL visibility.</td></tr><tr><td>Cmd-J</td><td>Paste var content</td></tr></tbody></table><div class=\"section\"><h3>lab.core</h3><table><tr><td>(alternate-keys [form])<div class=\"doc\"></div></td></tr><tr><td>(connect! [{:keys [host port], :or {host \"localhost\", port 9898}}])<div class=\"doc\"></div></td></tr><tr><td>(handle-dragover [e])<div class=\"doc\"></div></td></tr><tr><td>(handle-drop [e])<div class=\"doc\"></div></td></tr><tr><td>(listen! [id listener])<div class=\"doc\"></div></td></tr><tr><td>(maybe-save-default! [form {:keys [error]}])<div class=\"doc\"></div></td></tr><tr><td>(on-draw-created [e])<div class=\"doc\"></div></td></tr><tr><td>(paste! [])<div class=\"doc\"></div></td></tr><tr><td>(reset-pasteboard! [])<div class=\"doc\"></div></td></tr><tr><td>(save-session! [name])<div class=\"doc\"></div></td></tr><tr><td>(set-shortcuts! [cm])<div class=\"doc\"></div></td></tr><tr><td>(toggle-help! [])<div class=\"doc\"></div></td></tr></table></div><div class=\"section\"><h3>lab.map</h3><table><tr><td>(add-custom-layer! [view layer])<div class=\"doc\"></div></td></tr><tr><td>(add-geojson! [view data])<div class=\"doc\"></div></td></tr><tr><td class=\"has-doc\">(add-kml! [view kml-string])<div class=\"doc\">Add a KML object to the view</div></td></tr><tr><td class=\"has-doc\">(add-marker! [view lat lon & {:keys [rev center? zoom center-opts icon data on-click], :or {rev false, center? true, zoom 13, center-opts {:padding [10 10]}}}])<div class=\"doc\">Add a new marker to view with latitude and longitude.</div></td></tr><tr><td>(add-markers! [view points & {:keys [key-fn data-fn], :as args, :or {key-fn identity, data-fn nil}}])<div class=\"doc\"></div></td></tr><tr><td class=\"has-doc\">(add-polyline! [view points & {:keys [rev as-list fit-bounds], :or {rev false, as-list false, fit-bounds true}}])<div class=\"doc\">Add a polyline with the given seq of lat-lon pairs or flattened list (:as-list true).</div></td></tr><tr><td class=\"has-doc\">(add-wkt! [view wkt-string & {:keys [fit-bounds? options], :or {fit-bounds? false, options nil}}])<div class=\"doc\">Add a WKT object to the view</div></td></tr><tr><td>(cartodb-positron [])<div class=\"doc\"></div></td></tr><tr><td>(cartodb-voyager [])<div class=\"doc\"></div></td></tr><tr><td>(clear! [view])<div class=\"doc\"></div></td></tr><tr><td>(clear-markers! [view])<div class=\"doc\"></div></td></tr><tr><td>(invalidate-size! [])<div class=\"doc\"></div></td></tr><tr><td class=\"has-doc\">(map! [view & {:keys [provider draw-mode?], :or {provider :cartodb-voyager, draw-mode? nil}}])<div class=\"doc\">Create a new map for view. Optional provider :cartodb-positron</div></td></tr><tr><td class=\"has-doc\">(map-center! [view center])<div class=\"doc\">Center the map to the given point and zoom level. Zoom defaults to 13.</div></td></tr><tr><td class=\"has-doc\">(map-center! [view center zoom])<div class=\"doc\">Center the map to the given point and zoom level. Zoom defaults to 13.</div></td></tr><tr><td class=\"has-doc\">(map-center! [view center zoom opts])<div class=\"doc\">Center the map to the given point and zoom level. Zoom defaults to 13.</div></td></tr><tr><td class=\"has-doc\">(map-center-and-radius [view])<div class=\"doc\">Get the map's current center and radius</div></td></tr><tr><td>(next-color [])<div class=\"doc\"></div></td></tr><tr><td class=\"has-doc\">(pan-to! [view lat lon])<div class=\"doc\">Pan the map to the given latitude and longitude position.</div></td></tr><tr><td class=\"has-doc\">(pan-to! [view lat lon animate?])<div class=\"doc\">Pan the map to the given latitude and longitude position.</div></td></tr><tr><td class=\"has-doc\">(polyline-from-dbdump! [view dump])<div class=\"doc\">Parse a Postgres DB dump and get latitude-longitude pairs from a column that has comma-separated lat and long value.</div></td></tr><tr><td class=\"has-doc\">(polyline-from-str! [view points])<div class=\"doc\">Add a polyline from a string value with each row containing comma-separated lat and long values.</div></td></tr><tr><td>(update-data! [marker data])<div class=\"doc\"></div></td></tr></table></div><div class=\"section\"><h3>lab.graph</h3><table><tr><td>(->freqs-columns [data k])<div class=\"doc\"></div></td></tr><tr><td class=\"has-doc\">(columnize [data column value & {:keys [x-axis]}])<div class=\"doc\">Convert rows of data to columnar format. Handy if you should want pie charts out of JSON.\n\n  Example:\n  (g/columnize [{:type :foo :value 1} {:type :bar :value 2}] :type :value)</div></td></tr><tr><td class=\"has-doc\">(flow! [view opts])<div class=\"doc\">Flow data into existing graph in view.\n\n  Example:\n  (g/flow! :view {:columns [[\"x\" 8 9 10 11 12 13] [\"data\" 1 3 4 5 6 7]]}})</div></td></tr><tr><td>(frequencies! [view data k])<div class=\"doc\"></div></td></tr><tr><td class=\"has-doc\">(graph! [view opts])<div class=\"doc\">Generate a graph with C3.js. By default contains a default color pattern and binding to the view's graph container.\n\n  Example:\n  (g/graph! :view {:data {:columns [[\"data\" 1 2 3 4 3 2 1]]}})\n  (g/graph! :view {:data {:columns (g/columnize [{:type :foo :value 1} {:type :bar :value 2}] :type :value) :type :pie}})</div></td></tr><tr><td>(invalidate-size! [])<div class=\"doc\"></div></td></tr><tr><td class=\"has-doc\">(load! [view opts])<div class=\"doc\">Load data into existing graph in view.\n\n  Example:\n  (g/load! :view {:data {:columns [\"data\" 2 3 4 5 6]}})</div></td></tr><tr><td class=\"has-doc\">(simple! [view data y])<div class=\"doc\">Simple plot generated from `data` using the `y` and `x` as key\n  to retrieve the y axis with an optional x-axis parameter.</div></td></tr><tr><td class=\"has-doc\">(simple! [view data x y])<div class=\"doc\">Simple plot generated from `data` using the `y` and `x` as key\n  to retrieve the y axis with an optional x-axis parameter.</div></td></tr></table></div><div class=\"section\"><h3>lab.console</h3><table><tr><td>(append! [view & text])<div class=\"doc\"></div></td></tr><tr><td>(append-map! [view m])<div class=\"doc\"></div></td></tr><tr><td>(append-vec! [view v & {:keys [titles]}])<div class=\"doc\"></div></td></tr><tr><td>(clear! [view])<div class=\"doc\"></div></td></tr><tr><td>(console! [view])<div class=\"doc\"></div></td></tr><tr><td>(find-element [view])<div class=\"doc\"></div></td></tr><tr><td>(make-row [text])<div class=\"doc\"></div></td></tr><tr><td>(make-table-row [m])<div class=\"doc\"></div></td></tr><tr><td>(map-to-table [m])<div class=\"doc\"></div></td></tr><tr><td>(prepend! [view & text])<div class=\"doc\"></div></td></tr><tr><td>(prepend-map! [view m])<div class=\"doc\"></div></td></tr><tr><td>(scroll-to-bottom! [view])<div class=\"doc\"></div></td></tr><tr><td>(vec-to-table [v & {:keys [titles]}])<div class=\"doc\"></div></td></tr></table></div><div class=\"section\"><h3>lab.vis</h3><table></table></div><div class=\"section\"><h3>lab.views</h3><table><tr><td>(->css [{:keys [views col-defs row-defs]}])<div class=\"doc\"></div></td></tr><tr><td>(->element [html])<div class=\"doc\"></div></td></tr><tr><td>(add-view! [id])<div class=\"doc\"></div></td></tr><tr><td>(add-view! [id after])<div class=\"doc\"></div></td></tr><tr><td>(add-view! [id after direction])<div class=\"doc\"></div></td></tr><tr><td>(find-end [start size defs])<div class=\"doc\"></div></td></tr><tr><td>(find-view-info [id])<div class=\"doc\"></div></td></tr><tr><td>(find-view-info [id views])<div class=\"doc\"></div></td></tr><tr><td>(list-views [])<div class=\"doc\"></div></td></tr><tr><td>(need-new-def? [col-index original-size new-size defs])<div class=\"doc\"></div></td></tr><tr><td>(new-view [id])<div class=\"doc\"></div></td></tr><tr><td>(remove-view! [id])<div class=\"doc\"></div></td></tr><tr><td>(rename-view! [id new-id])<div class=\"doc\"></div></td></tr><tr><td>(set-mode! [view mode])<div class=\"doc\"></div></td></tr><tr><td>(set-views! [& {:keys [col-defs row-defs], declared-views :views}])<div class=\"doc\"></div></td></tr><tr><td>(split! [id after def-key {views :views, :as data}])<div class=\"doc\"></div></td></tr><tr><td>(swap-view! [id another-id])<div class=\"doc\"></div></td></tr><tr><td>(unsplit [views id])<div class=\"doc\"></div></td></tr><tr><td>(unsplit-left [{views :views, :as data, col-defs :col-defs, row-defs :row-defs} id])<div class=\"doc\"></div></td></tr><tr><td>(unsplit-up [{views :views, :as data, col-defs :col-defs, row-defs :row-defs} id])<div class=\"doc\"></div></td></tr><tr><td>(update-styles! [styles])<div class=\"doc\"></div></td></tr></table></div><div class=\"section\"><h3>lab.dashboard</h3><table><tr><td>(clear! [view])<div class=\"doc\"></div></td></tr><tr><td>(dashboard! [view])<div class=\"doc\"></div></td></tr><tr><td>(metric! [view id value & {:keys [title unit]}])<div class=\"doc\"></div></td></tr><tr><td>(update! [view id value])<div class=\"doc\"></div></td></tr></table></div><div class=\"section\"><h3>lab.helpers</h3><table><tr><td class=\"has-doc\">(csv-header [data])<div class=\"doc\">Get the header field of a CSV string</div></td></tr><tr><td class=\"has-doc\">(csv-sample-data [data n])<div class=\"doc\">Samples n entries from a dataset from a CSV string.</div></td></tr><tr><td class=\"has-doc\">(csv-sample-row [data])<div class=\"doc\">Sample a CSV string row. Handy for bigger files that can only be loaded in as strings.</div></td></tr><tr><td class=\"has-doc\">(load-json [& args])<div class=\"doc\">Load JSON data using `js/fetch`, keywordizes keys on return values</div></td></tr><tr><td class=\"has-doc\">(load-json-into [destination & args])<div class=\"doc\">Loads a JSON data from the given destination, passing rest of the `args`\n  to `load-json`</div></td></tr><tr><td class=\"has-doc\">(to-csv [data])<div class=\"doc\">Convert a seq to CSV string.</div></td></tr></table></div></div>");

module$node_modules$jquery$dist$jquery("#hud, #pasteboard").hide();

module$node_modules$jquery$dist$jquery(document).on("keydown",lab.core.handle_key);

var drop_target_28251 = document.getElementById("drop-target");
drop_target_28251.addEventListener("drop",lab.core.handle_drop);

drop_target_28251.addEventListener("dragover",lab.core.handle_dragover);

module$node_modules$jquery$dist$jquery(document).delegate(".help a","click",(function (e){
lab.core.toggle_help_BANG_();

return e.preventDefault();
}));

module$node_modules$jquery$dist$jquery(document).delegate("#save","click",(function (e){
var input = module$node_modules$jquery$dist$jquery("#pasteboard input[name=var]");
var textarea = module$node_modules$jquery$dist$jquery("#pasteboard textarea");
var wrap = module$node_modules$jquery$dist$jquery("#pasteboard input[name=wrap]");
var detect = module$node_modules$jquery$dist$jquery("#pasteboard input[name=detect]");
var re_eval = module$node_modules$jquery$dist$jquery("#pasteboard input[name=eval]");
var var_name = input.val();
var value = (function (){var or__4253__auto__ = cljs.core.deref(lab.core.file_contents);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return textarea.val();
}
})();
var wrap_to_string_QMARK_ = wrap.prop("checked");
var auto_detect_QMARK_ = detect.prop("checked");
var re_eval_QMARK_ = re_eval.prop("checked");
lab.core.reset_pasteboard_BANG_();

setTimeout((function (){
module$node_modules$jquery$dist$jquery("#pasteboard").hide();

var value__$1 = ["(def ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(wrap_to_string_QMARK_)?["\"",clojure.string.replace(value,/\"/,"\\\""),"\""].join(''):(cljs.core.truth_(auto_detect_QMARK_)?["(lab.autodetect/detect \"",clojure.string.replace(clojure.string.replace(value,/\\/,"\\\\"),/\"/,"\\\""),"\")"].join(''):value
))),")"].join('');
console.log(value__$1);

return lab.eval.eval_BANG_.cljs$core$IFn$_invoke$arity$2(value__$1,(function (___$1){
if(cljs.core.truth_(re_eval_QMARK_)){
return lab.eval.eval_forms_BANG_(lab.codemirror.lines());
} else {
return lab.hud.show_BANG_(var_name);
}
}));
}),(800));

return e.preventDefault();
}));

module$node_modules$jquery$dist$jquery(document).delegate("#cancel","click",(function (___$1){
return lab.core.reset_pasteboard_BANG_();
}));

lab.core.toggle_help_BANG_();

var cm_28253 = lab.codemirror.init_BANG_();
lab.core.set_shortcuts_BANG_(cm_28253);

lab.layout.toggle_repl_BANG_.cljs$core$IFn$_invoke$arity$1(true);

cm_28253.setCursor(({"line": (3), "ch": (0)}));

lab.views.add_view_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"view","view",1247994814));

lab.map.map_BANG_(new cljs.core.Keyword(null,"view","view",1247994814));

lab.layout.update_repl_size.cljs$core$IFn$_invoke$arity$0();

return lab.core.load_session_BANG_("default");
}));
lab.core.reset_BANG_ = (function lab$core$reset_BANG_(){
return window.location.reload();
});
lab.core.on_js_reload = (function lab$core$on_js_reload(){
module$node_modules$jquery$dist$jquery(document).off("keydown");

return module$node_modules$jquery$dist$jquery(document).on("keydown",lab.core.handle_key);
});
