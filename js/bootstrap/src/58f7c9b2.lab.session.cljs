(ns lab.session
  (:require [clojure.string :as str]
            [hiccups.runtime]
            [lab.parsing]
            ["jquery" :as $])
  (:require-macros  [lab.core :refer [default-sessions]]
                    [hiccups.core :as hiccups :refer [html]]))

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
    (into session-names)
    (sort)))

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

(defn session-load-display []
  (html [:div
         [:h2 "Select a session to load"]
         [:div.options
           (doall
             (for [session (list-sessions!)]
               [:div.option {:onClick (str "javascript:lab.core.load_session_BANG_(\"" session "\"); lab.session.close_session_load_display_BANG_()")} session]))]]))

(defn open-session-load-display! []
  (let [elem (js/document.getElementById "sessions")]
    (set! (.-innerHTML elem) (session-load-display))
    (.add (.-classList elem) "visible")))

(defn ^:export close-session-load-display! []
  (let [elem (js/document.getElementById "sessions")]
    (.remove (.-classList elem) "visible")
    (js/setTimeout
      (fn []
        (set! (.-innerHTML elem) ""))
      1000)))
