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
    - If there must always be a number
  - `6h9e5m10t2i5ha`
    - If the 5 in 5h does not apply to the a
    - `5(h) + a`, not `5(ha)`
3. How many bytes are used after encoding?
  - 15 bytes
4. How many bytes have been saved?
  - 23 bytes

## 4.6.1.2 Classification of software
1. Explain what is meant by system software
  - System software is software that runs the operating system, utilities for the system and drivers which runs the computer.
2. Explain what is meant by application software
  - Application software is "every day" software that is not part of system software, such as word processing software, image manipulation software and web browsers.
3. What is general purpose software and discuss the pros and cons associated to it
  - General purpose application software is software that is designed to perform multiple "general" tasks around the same category, such as a word processing software being able to make emails, letters, mail merge and more.
  - Advantages
    - Relatively cheap
    - 
4. What is special purpose application software and discuss the pros and cons associated to it
  - Special purpose application software is software that
5. What is bespoke application software and discuss the pros and cons associated to it
6. Complete the attributes column of the table below

Type                           | Use                                                                                                               | Attributes | Why this type of software is more appropriate for use specified compared to the alternatives
------------------------------ | ----------------------------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------
Word processing application    | Writing reports, memos, letters to customers                                                                      |            |
Spreadsheet application        | Keeping simple company accounts, calculating employee commission payments, simple stock control system, modelling |            |
Database application           | Keeping customer records, sales records, appointments system                                                      |            |
Desktop publishing application | Creating leaflets, posters, business cards                                                                        |            |
Presentation software          | Creating presentations to show to customers or staff                                                              |            |
Graphics application           | Manipulating images that can be used at home, school or a business                                                |            |
Web design application         | Creating personal or business websites                                                                            |            |


## 4.6.3.1 Types of program translator
1. Do interpreters produce a binary?
  - False. They run the code line by line, statement by statement.
2. Which method is faster to run code and why?
  - Compiled code is faster compared to interpreted code at the "running" stage, as the program is converted to a binary which a computer understands.
  - **Do not accept:** Interpreted as you need to wait for the compiler to compile a binary.

## 4.6.5 Boolean Algebra
1. Simplify \\(\\overline{(\\overline A+B)}+\\overline{(\\overline A+C)}\\)
  - Use De Morgan's Law: \\((\\overline{\\overline A}.\\overline B)+(\\overline{\\overline A}.\\overline C)\\)
  - Use Double Complement Law: \\((A.\\overline B)+(A.\\overline C)\\)
  - Use the Distributive Law: \\(A.(\\overline B+\\overline C)\\)
