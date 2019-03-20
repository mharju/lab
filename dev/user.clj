(ns user
  (:require [figwheel.main.api :as api]))

(defn repl []
  (api/start {:mode :serve} "lab")
  (api/cljs-repl "lab"))
