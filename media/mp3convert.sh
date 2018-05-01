#!/bin/bash

for entry in "./harmonium"/*.wav
    do ffmpeg -i "$entry" -ab 320k "${entry%.*}.mp3"; 
done

for entry in "./tanpura"/*.wav
    do ffmpeg -i "$entry" -ab 320k "${entry%.*}.mp3"; 
done