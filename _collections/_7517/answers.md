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

Type                           | Use                                                                                                               | Attributes                                                                                                                                                                                                                                                         | Why this type of software is more appropriate for use specified compared to the alternatives
------------------------------ | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------
Word processing application    | Writing reports, memos, letters to customers                                                                      | A rich text editor with support for typesetting text with images, columns, fonts, etc. on a variety of formats, such as varying paper sizes, websites or emails                                                                                                    | Allows for the creation of text based documents which can automatically resize to fit page sizes and changes within the document.
Spreadsheet application        | Keeping simple company accounts, calculating employee commission payments, simple stock control system, modelling | A table with co-ordinates referring to cells, usually via a letter and a number combination which can be used to display numbers and perform automatic calculations in a table. Some may include the capability to create graphs and perform advanced calculations | Can allow quick "number crunching" to be performed on smaller data sets with less complex commands.
Database application           | Keeping customer records, sales records, appointments system                                                      | A program that can store data in the form of records, which can programatically be accessed by a server or client via SQL commands, or no-SQL commands, and with the ability to filter. Records each need an individual unique key, called the primary key         | Is faster to retrieve data compared to a spreadsheet, and can be accessed via multiple different servers.
Desktop publishing application | Creating leaflets, posters, business cards                                                                        | A program allowing the creation of documents with control on the location of elements on the page                                                                                                                                                                  | Allows the creation of documents with typesetting and design considerations.
Presentation software          | Creating presentations to show to customers or staff                                                              | A slide editor and viewer which can create and present slides, with free control on the location of elements, and may also include transitions, animations, hyperlinks and other embeds to enhance the presentation                                                | Has a presentation mode to look more professional. Each slide is it's own page, so content does not overflow.
Graphics application           | Manipulating images that can be used at home, school or a business                                                | An editor which allows the editing of image files                                                                                                                                                                                                                  | Can edit images.
Web design application         | Creating personal or business websites                                                                            | A WYSIWYG editor which allows the editing of a webpage as it appears on the screen, as well as editing the HTML and CSS. May come with templates and helpers to allow quick and fast prototyping of a website.                                                     | Includes a WYSIWYG preview window, which allows the user to visualise the output before saving and opening it in a browser. May include HTML, CSS and JS specific helpers designed to automatically include/help the user to add new elements to the page.

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
