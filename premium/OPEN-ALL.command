#!/bin/bash
set -u

DEMO_DIR="$(cd "$(dirname "$0")" && pwd)"
PORT=8777

if ! curl -fsS "http://127.0.0.1:${PORT}/" >/dev/null 2>&1; then
  nohup python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$DEMO_DIR" >"/tmp/cbd-premium-copies-server.log" 2>&1 &
  for _ in 1 2 3 4 5; do
    curl -fsS "http://127.0.0.1:${PORT}/" >/dev/null 2>&1 && break
    sleep 1
  done
fi

open "http://127.0.0.1:${PORT}/01-bioleafhub-material-atlas/"
open "http://127.0.0.1:${PORT}/02-eirra-objects-of-quiet/"
open "http://127.0.0.1:${PORT}/03-eirra-hemp-estate-360/"

