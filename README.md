# Overview

This is a simple example on how to use BLE in in your JS/TS projects

# Intro

Handy uses Protobuf to communicate. The compiled protobuf code can be found in this project.

## TS

folder: proto-ts
nb! requires protobufjs

## Node/commonJS:

Folder: proto-commonjs

### Changes from src/index.js

- Include espressif and handyplug from **proto-commonjs** folder
- Do not require lodash
- Change the webBLE to other BLE implantation

## Vanilla

dist/bundle.js

# Functions

Only HDSP with percent and time params are implemented. For more advanced features please use our online APIs. The function in is LinearCMD based on the buttplug.io specification.

# Session

NB! This step is not needed in latest FW!

Before you start sending a LinearCMD, you must start a session.

Send a **SessionData** data message with **SecSchemeVersion** and a blank **Sec0Payload**

See the code example (startSession() function) for more details.

# Vanilla notes

The webpack hack to put handy function in window (window.handy) is super hack. Probably 1000 ways of doing it better. We use the typescript implementation here, so this was just some quick and dirty way of showing a live browser example.
