# Console

Starting point for a CLJS based "printf on steroids" supporting displaying data in a map, a C3 graph (line, bar
chart), ja vis.js network or plain text based console output.

The idea is that you listen for events to the websocket channel and update the view accordingly. The data can be
submitted for example via TCP with a simple script using `websocketd` and `nc`. The format for the websocket data is
`{"id": <some-id-that-is-listened>, "data": <arbitrary-data>}`

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
