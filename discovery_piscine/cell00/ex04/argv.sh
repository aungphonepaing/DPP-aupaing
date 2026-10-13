#!/bin/bash
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    for arg in "${@:1:4}"; do
        echo "$arg"
    done
fi