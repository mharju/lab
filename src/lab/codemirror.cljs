(ns lab.codemirror)

(defonce cm-inst (atom nil))

(defn set-inst! [cm]
  (reset! cm-inst cm))
(defn focus []
  (.focus @cm-inst))
(defn set-value [value]
  (.setValue @cm-inst value))
(defn get-value []
  (.getValue @cm-inst))
(defn get-cursor []
  (.getCursor @cm-inst))
(defn replace-range [content cursor]
  (.replaceRanve @cm-inst content cursor))
