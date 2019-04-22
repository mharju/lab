(defproject lab "0.1.0"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.7.1"

  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.520"]
                 [org.clojure/core.async  "0.4.490"
                  :exclusions [org.clojure/tools.reader]]
                 [cljsjs/jquery "3.2.1-0"]
                 [cljsjs/leaflet "1.4.0-0"]
                 [cljsjs/leaflet-omnivore "0.3.1-0"]
                 [cljsjs/c3 "0.6.8-0"]
                 [cljsjs/vis "4.21.0-1"]
                 [cljsjs/codemirror "5.44.0-1"]
                 [hiccup "1.0.5"]
                 [hiccups "0.3.0"]
                 [com.cognitect/transit-cljs "0.8.256"]
                 [replumb "0.2.4"]
                 [cljsjs/parinfer-codemirror "1.4.1-2"]]

  :resource-paths ["resources" "target"]
  :clean-targets ^{:protect false} ["target/public" :target-path]

  :aliases {"fig" ["trampoline" "run" "-m" "figwheel.main" "-b" "lab" "-r"]
            "release" ["do" "clean," "trampoline" "run" "-m" "figwheel.main" "-O" "simple" "-bo" "lab"]}

  :profiles {:dev {:dependencies [[com.bhauman/figwheel-main "0.2.0"]
                                  [binaryage/devtools "0.9.10"]
                                  [cider/piggieback "0.4.0"]]
                   :source-paths ["src" "dev"]
                   :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}}})
