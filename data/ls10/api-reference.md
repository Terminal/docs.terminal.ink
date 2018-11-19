---
pagename: API Reference
description: Endpoints for ls.terminal.ink
---

_The ls.terminal.ink API is unfinished._

### GET `/api/v1/bots/`
Get a list of all markdown files.

### GET `/api/v1/bots/:id`
Get a single bot

```json
{
  "authors": [
    "205427654042583040"
  ],
  "cachedImages": { // https://ls.terminal.ink/appdata/image.png
    "avatar": "/appdata/7c5c872eb93e695362ae5bcb0b166da198721d5c74e379e1529d776f73464377.png",
    "cover": null,
    "preview": []
  },
  "category": "other",
  "contents": { // Contents of bot pages, but localised
    "en-GB": {
      "description": "An all-in-one and easy-to-use bot for Discord",
      "name": "Homer",
      "page": "<!-- Markdown page in English -->"
    },
    "fr": {
      "description": "Un bot tout-en-un pour Discord",
      "name": "Homer",
      "page": "<!-- Markdown page in French -->"
    }
  },
  "created": 1542569433000,
  "edited": 1542590182486,
  "github": {
    "owner": "iDroid27",
    "repo": "homer"
  },
  "id": "305277118105911296",
  "images": {
    "avatar": "https://cdn.discordapp.com/avatars/305277118105911296/83edde7cf67d195b5828b731fb9ff9a4.png",
    "cover": null,
    "preview": []
  },
  "invite": "https://homer.idroid.me",
  "legacy": true,
  "nsfw": false,
  "oauth": null,
  "random": 1.4167843460262775,
  "support": null,
  "trigger": {
    "customisable": false,
    "mentionable": false,
    "prefix": [
      "h:"
    ]
  },
  "verified": true,
  "website": null
}
```
