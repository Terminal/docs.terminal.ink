---
# docs.terminal.ink
# Copyright (C) 2018 Terminal.ink
#
# This file is licenced under the CC-BY-SA-4.0. You should have
# recieved a copy of the licence with this documentation series.
# If not, please read a copy here:
#
# https://creativecommons.org/licenses/by-sa/4.0/
layout: docs
permalink: "/cats/"
type: "cats"

title: "cats.terminal.ink"
description: "Home"
---

# cats.terminal.ink
The Terminal.ink Cats API is a free to use REST based endpoint, which accepts and returns images

The base URL is `https://cats.terminal.ink/api`

## Cats `GET /`
Get an image of a cat.

Query Parameter       | Value                           | Optional | Default   | Description
--------------------- | ------------------------------- | -------- | --------- | -----------
ext                   | `png` / `gif`                   | Yes      | any       | The file type of the result. Can be either by default.

**Returns:** `image/png` or `image/gif`
