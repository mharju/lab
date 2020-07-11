(ns lab.session
  (:require [clojure.string :as str]
            [lab.parsing])
  (:require-macros  [lab.core :refer [default-sessions]]) )

(def help-text
";; Eval (lab.core/toggle-help!) for help. Cmd-(Shift)-(E|R) Eval current (topmost) expression.
;; Cmd-J for pasting content as vars. Ctrl-Space for autocomplete.\n" )

(def save-session-proto
  #"\(lab.core/save-session\!.*\)")

(def sessions (default-sessions))
(def session-names (mapv name (keys sessions)))
(defonce loaded-session (atom "default"))

(defn list-sessions! []
  (->>
    (js/Object.keys js/window.localStorage)
    (js->clj)
    (filterv (fn [item]
               (str/starts-with? item "session-")))
    (mapv (fn [item] (subs item (count "session-"))))
    (into session-names)))

(defn delete-session! [name]
  (.removeItem js/window.localStorage (str "session-" name)))

(defn get-session [name]
  (reset! loaded-session name)
  (if ((set session-names) name)
    (->> (get sessions (keyword name))
         (lab.parsing/normalize-session)
         (str help-text))
    (some->> (or (.getItem js/window.localStorage (str "session-" name)) "\"\"")
             js/JSON.parse
             (str help-text))))
