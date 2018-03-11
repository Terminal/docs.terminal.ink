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
category: "extra"
title: Answers
import:
  - mathjax
---

## 4.5.6 Representing images, sound and other data

[![A line graph](/assets/img/soundgraph.png)](/assets/documents/soundgraph.ods)

1. Convert this analogue signal to an 3 bit depth digital representation
  - 000 010 100 111 110 011 010 001

```
hhhhhheeeeeeeeemmmmmttttttttttiihhhhha
```

1. How many bytes are used for the above string?
  - 38 bytes
2. What is the RLE encoded string for this string?
  - `6h9e5m10t2i5h1a`
3. How many bytes are used after encoding?
  - 15 bytes
4. How many bytes have been saved?
  - 23 bytes

## 4.6.5 Boolean Algebra
1. Simplify \\(\\overline{(\\overline A+B)}+\\overline{(\\overline A+C)}\\)
  - Use De Morgan's Law: \\((\\overline{\\overline A}.\\overline B)+(\\overline{\\overline A}.\\overline C)\\)
  - Use Double Complement Law: \\((A.\\overline B)+(A.\\overline C)\\)
  - Use the Distributive Law: \\(A.(\\overline B+\\overline C)\\)
