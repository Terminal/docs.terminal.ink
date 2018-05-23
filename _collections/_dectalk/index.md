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
category: index
description: Documentation for the online DECtalk Text to Speech REST based API, running on a VPS using Wine.
title: DECtalk Text to Speech API
---

The MSS DECtalk webserver is licenced under the [MIT Licence](https://github.com/moustacheminer/dectalk-webserver/blob/master/LICENCE.txt)

[View the repository here](https://github.com/moustacheminer/dectalk-webserver/blob/master)

## **GET** `/api/gen?dectalk=[talk]`
Fetch a dectalk with a query.

## **POST** `/api/gen`
Fetch a dectalk with a query. 
Queries are preferably in JSON, but can also be url-encoded.

Key     | Description
------- | ------------------
dectalk | The text to talk.

<form action="https://talk.moustacheminer.com/api/gen.wav method="POST">
  <label for="dectalk">Insert DECtalk Query</label>
  <textarea name="dectalk" />
  <button type="submit">Download »</button>
</form>
