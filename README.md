# Lab

Web application that exposes bootstrapped Clojurescript REPL and provides simple tools to
make ad-hoc dashboards, data visualizations or such when in need. You can use it via the
built in REPL window or use the CLJS REPL through nREPL with your editor.

It also supports retrieving and passing live data to views using websocket. This is handy
if you want to have live updates from a production system or push data from a system under
development for simple, visual introspection.

## Sessions

The default session is stored on evaluation, in case you might press reload in the middle
of implementation.

You can list sessions using `(lab.core/list-sessions!)`, load sessions with
`(lab.core/load-session! <session-name>)` and store them using `(lab.core/store-session!  <session-name>)`.

The application hosts default sessions that are stored in `src/lab/experiments` folder.

## Keyboard shortcuts

| Keyboard shortcut | Description                                                                                       |
|-------------------|---------------------------------------------------------------------------------------------------|
| Cmd-Shift-L       | Evaluate current editor content form by form.                                                     |
| Cmd-(Shift)-E     | Evaluate (topmost) expression in current cursor position. Show result in HUD.                     |
| Cmd-(Shift)-R     | Evaluate (topmost) expression in current cursor position. Append result to the next row in editor.|
| Control-Space     | Get autosuggestions of built in functions and currently available view name keywords.             |
| Cmd-Shift-F       | Toggle Full REPL view.                                                                            |
| Cmd-(Shift)-Y     | Make REPL bigger / smaller.                                                                       |
| Cmd-G             | Toggle help.                                                                                      |
| Cmd-H             | Toggle REPL visibility.                                                                           |
| Cmd-J             | Paste var content.                                                                                |
| Cmd-Shift-O       | Show session loader, exit with ESC if you don't want to select.                                   |
| Esc               | Cancel paste window                                                                               |

## Screenshot

Sample using the open live data from Foli to show locations of busses in the map. You can
load the sample by evaluating `(lab.core/load-session! "foli")`, and then evaluating the editor content with `Cmd-Shift-L` to experiment with it yourself.

![Screenshot](screenshot.png)


## Lab-Wrapper

You can also use [Lab Wrapper](https://github.com/mharju/Lab-Wrapper/) to get TCP/WS
connectivity straight out of the box for OS X. Just copy out the contents of the
`resources/public` directory after release compilation to the project, compile and
install. I use a git hook for that:

```bash
#!/bin/bash

WRAPPER_PATH=/set/wrapper/project/path

set -e
npm run release &&\
    rsync -avh --delete resources/public/* $WRAPPER_PATH/public &&
    (cd $WRAPPER_PATH && xcodebuild && cp -r build/Release/Lab.app /Applications)
```


## Development setup

To get an interactive development environment run:

    shadow-cljs watch lab bootstrap


## License

Copyright © 2017-2020 Taiste

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
