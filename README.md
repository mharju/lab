# Lab

Starting point for a CLJS based "printf on steroids" supporting displaying data in a map, a C3 graph (line, bar
chart), ja vis.js network or plain text based console output.

The idea is that you listen for events to the websocket channel and update the view accordingly. The data can be
submitted for example via TCP with a simple script using `websocketd` and `nc`. The format for the websocket data is
`{"id": <some-id-that-is-listened>, "data": <arbitrary-data>}`

## Example

In the sending side you just send data directly to the websocket (or use the method
mentioned above to accomodate e.g. a plain TCP socket). `sock` is a WebSocket instance
connected to `ws://localhost:7890` (default listening address)

```clojure
(defn receive-location-info [{:keys [vehicle lat lon]}]
   ...
   (ws/send-msg sock {:id "vehicle" :data {:vehicle vehicle :lat lat :lon lon}))
```

In logger-side, you declare a listener for id "vehicle"  as follows (you can evaluate it
via nREPL or the provided in-line console)

```clojure
;; c ns built-in alias for lab.core
;; m is built-in alias for lab.map
;; v is build-in ns alias for lab.views
;; Also: lab.graph = g, lab.console = console, lab.vis = vis
(let [markers (atom {})]
  (c/connect!)                          ;; not necessary if already invoked in the session
  (v/set-mode :view :map)               ;; this is also performed implicitly by the map operations
  (m/clear-markers! :view)
  (c/listen! "locations" :view
     (fn [{:keys [vehicle lat lon]}]
       (if-let [marker (get @markers vehicle)]
          (.setLatLng marker (js/L.LatLng. lat lon))
          (swap! markers assoc
                 vehicle (m/add-marker! :view lat lon))))))
```

And wait for the data to start flowing in.

## Screenshot

This is a demo of evaluating some lat-long pairs and adding them to the view.

![Screenshot](screenshot.png)

## Development setup

To get an interactive development environment run:

    lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

    lein clean

To create a production build run:

    lein do clean, cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL.

## License

Copyright © 2017 Taiste

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
