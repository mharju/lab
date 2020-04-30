(ns lab.codemirror
  (:require [clojure.string :as str]))

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
  (.replaceRange @cm-inst content cursor))
(defn lines []
  (-> (.getValue @cm-inst)
      (str/split #"\n")))
