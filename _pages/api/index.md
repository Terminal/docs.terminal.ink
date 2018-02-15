---
layout: default
permalink: "/api/"

title: "ls.terminal.ink"
---

# api.terminal.ink
The Terminal.ink API is a free to use REST based endpoint, which accepts and returns JSON.

The base URL is `https://api.terminal.ink/`

## Colour `GET /colour`
Get an image of a colour.

Query Parameter       | Value                           | Optional | Default   | Description
--------------------- | ------------------------------- | -------- | --------- | -----------
c / color / colour    | HEX Colour                      | Yes      | `FFFFFF`  | Set colour
w / width             | Integer Pixels                  | Yes      | `100`     | Set width
h / height            | Integer Pixels                  | Yes      | `100`     | Set height
size                  | Integer Pixels                  | Yes      | `100`     | Set both width and height. Overrides width and height

**Returns:** `image/png`

## Steam `GET /steamid`
Get information on a SteamID.

Query Parameter       | Value                           | Optional | Default   | Description
--------------------- | ------------------------------- | -------- | --------- | -----------
search                | SteamID64, SteamID32, CustomURL |          |           | The search query
key                   | Steam API Key                   |          |           | The Steam API Key. [Obtain one here](http://steamcommunity.com/dev/apikey)

**Returns:**

Key                   | Data Type | Optional | Description
--------------------- | --------- | -------- | -----------
status                | Number    |          | The HTTP status code returned by Steam. The API server will still send `200`
message               | String    |          | A message on the error

**Ratelimits:** 100,000 requests per day
