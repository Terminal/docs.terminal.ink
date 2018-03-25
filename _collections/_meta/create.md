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
category: docs
description: Index of the Terminal.ink Meta documentation
title: Writing Documentation
---

To create your own "collection", follow these few steps

0. Fork the repository and clone it
0. Make the following edits:
  - Create a folder in `_collections` with your collection name, prefixed with an underscore `_` character
  - Create a `.yml` file in `_data/type`, and add category heading titles
  - Adding the collection name inside the `_config.yml` file (and add `output: true`)
0. Create markdown files within the collection folder
