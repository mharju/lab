goog.provide('lab.codemirror');
lab.codemirror.cm_inst = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
lab.codemirror.focus = (function lab$codemirror$focus(){
return cljs.core.deref(lab.codemirror.cm_inst).focus();
});
lab.codemirror.set_value = (function lab$codemirror$set_value(value){
return cljs.core.deref(lab.codemirror.cm_inst).setValue(value);
});
lab.codemirror.get_value = (function lab$codemirror$get_value(){
return cljs.core.deref(lab.codemirror.cm_inst).getValue();
});
lab.codemirror.get_cursor = (function lab$codemirror$get_cursor(){
return cljs.core.deref(lab.codemirror.cm_inst).getCursor();
});
lab.codemirror.replace_range = (function lab$codemirror$replace_range(content,cursor){
return cljs.core.deref(lab.codemirror.cm_inst).replaceRange(content,cursor);
});
lab.codemirror.lines = (function lab$codemirror$lines(){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lab.codemirror.cm_inst).getValue(),/\n/);
});
lab.codemirror.set_inst_BANG_ = (function lab$codemirror$set_inst_BANG_(cm){
return cljs.core.reset_BANG_(lab.codemirror.cm_inst,cm);
});
lab.codemirror.init_BANG_ = (function lab$codemirror$init_BANG_(){
var cm = (new module$node_modules$codemirror$lib$codemirror(document.querySelector("#repl"),({"mode": "clojure", "lineNumbers": false, "theme": "solarized dark"})));
if(cljs.core.truth_(window.localStorage.getItem("vim-mode"))){
cm.setOption("keyMap","vim");
} else {
}

lab.codemirror.set_inst_BANG_(cm);

module$node_modules$parinfer_codemirror$parinfer_codemirror.init(cm);

cm.setOption("hintOptions",({"hint": lab.completion.get_completions}));

return cm;
});
