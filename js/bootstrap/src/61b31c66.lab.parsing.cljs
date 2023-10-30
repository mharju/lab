(ns lab.parsing
 (:require [clojure.string :as string]
           [cljs.reader]
           ["codemirror" :as CodeMirror]))

(defprotocol ICode
  (get-line [this n])
  (line-count [this])
  (get-range [this start end]))

(extend-protocol ICode
  PersistentVector
  (get-line [this n]
    (nth this n))
  (line-count [this]
    (count this))
  (get-range [this {start-line :line start-ch :ch} {end-line :line end-ch :ch}]
    (if (= start-line end-line)
      (subs (nth this start-line) start-ch end-ch)
      (let [first-line (subs (nth this start-line) start-ch)
            full-lines-between (if (pos? (- end-line (inc start-line)))
                                 (subvec this (inc start-line) end-line)
                                 nil)
            last-line (subs (nth this end-line) 0 end-ch)]
        (->>
          (if full-lines-between
            (into (into [first-line] full-lines-between) [last-line])
            (conj [first-line] last-line))
          (string/join "\n")))))

  CodeMirror
  (get-line [this n]
    (.getLine this n))
  (line-count [this]
    (.lineCount this))
  (get-range [this start end]
    (.getRange this (clj->js start) (clj->js end))))

(defn- find-start-paren [cm cursor]
  (loop [{:keys [line ch]} cursor]
    (let [current-line (-> (get-line cm line) string/reverse)
          length (count current-line)
          search-col (- length ch 1)
          index (.indexOf current-line "(" search-col)]
      (if (>= index 0)
        {:line line :ch (- length index 1)}
        (when (pos? line) (recur {:line (dec line)
                                  :ch (count (get-line cm (dec line)))}))))))

(defn- match-parens [counter line]
  (reduce
    (fn [{:keys [counter pos]} ch]
      (if (= ch ";")
        (reduced {:counter counter :pos pos})
        (let [counter (cond
                         (= ch "(") (inc counter)
                         (= ch ")") (dec counter)
                         :else counter)]
          (if (zero? counter)
            (reduced {:success true :pos pos})
            {:counter counter :pos (inc pos)}))))
    {:counter counter :pos 0}
    line))

(defn find-end-paren
  ([cm {:keys [line ch] :as cursor}]
   (let [start-ch (.charAt (get-line cm line) ch)]
     (find-end-paren cm cursor (if (=  start-ch "(") 0 1))))
  ([cm cursor counter-init]
    (loop [{:keys [line ch]} cursor counter counter-init]
      (let [current-line (.substring (get-line cm line) ch)
            {:keys [success counter pos]} (match-parens counter current-line)]
       (if success
         {:line line :ch (+ pos ch 1)}
         (when (< (inc line) (line-count cm))
           (recur
             {:line (inc line) :ch 0}
             counter)))))))

;; TODO does not work if in closing paren of larger form
(defn get-current-form [cm cursor]
  (let [start (find-start-paren cm cursor)
        end (find-end-paren cm cursor)]
    (when (and start end)
      (.getRange cm (clj->js start) (clj->js end)))))

(defn find-top-form [cm cursor]
  (loop [{:keys [line]} cursor]
    (let [current-line (get-line cm line)]
      (if (.startsWith current-line "(")
        {:line line :ch 1}
        (when (pos? (dec line)) (recur {:line (dec line) :ch 0}))))))

(defn get-top-form [cm cursor]
  (let [cursor (find-top-form cm cursor)
        start (find-start-paren cm cursor)
        end (find-end-paren cm cursor)]
    (when (and start end)
      (get-range cm start end))))

(defn lines->forms [lines]
  (loop [cursor {:line 0 :ch 0} forms []]
    (if-let [end-cursor (find-end-paren lines cursor 0)]
      (let [form (get-range lines cursor end-cursor)]
        (if (< (:line cursor) (line-count lines))
          (recur end-cursor (conj forms form))
          forms))
      forms)))

(defn normalize-ns [ns-form]
  (let [dcl (->> ns-form
                 cljs.reader/read-string
                 (drop-while #(do
                                (println %)
                                (or (not (seq? %))
                                    (not= :require (first %)))))
                 first
                 (drop 1))]
    (when (seq dcl)
      (str "(require "
            (-> (string/join " " dcl)
                (string/replace #"\[" "'[")) ")"))))

(defn normalize-session [session]
  session
  (let [forms (-> session
                  (string/split #"\n")
                  lines->forms)
        ns-form (normalize-ns (first forms))]
    (->> (rest forms)
         (into (or [ns-form] []))
         string/join)))

(comment
  (require 'lab.core)
  (require '[goog.object :as gobj])

  (let [cmi @lab.codemirror/cm-inst
        cursor (.getCursor @lab.codemirror/cm-inst)
        cursor {:line (.-line cursor) :ch (.-ch cursor)}
        top-form (find-top-form cmi cursor)
        start (find-start-paren cmi top-form)
        end (find-end-paren cmi top-form)]
    (js/console.log "top form at line" top-form start end)
    (when (and start end)
      (.getRange cmi (clj->js start) (clj->js end))))

  (let [code ["(ns foo (:import [test]) (:require [foo] [bar] [baz]) (:require-macros [seppo :as s]))"]
        res (lines->forms code)]
    (normalize-ns (first res)))

  (let [cm @lab.codemirror/cm-inst
        cursor-pos (.getCursor cm)
        cursor {:line (.-line cursor-pos) :ch (.-ch cursor-pos)}]
    (get-current-form cm cursor))

  (-> (.getValue @lab.codemirror/cm-inst)
      (string/split  #"\n")
      lines->forms))
