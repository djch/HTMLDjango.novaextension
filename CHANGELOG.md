## Version 1.2.0

Add a minor number to the version scheme in the hopes the Extension Library will pick it up...

## Version 1.2

Incorporates the latest changes from [the source grammar by @interdependence](https://github.com/interdependence/tree-sitter-htmldjango)

## Version 1.1

Literally just fixing all the README and CHANGELOG typos from my last release.

## Version 1.0

I am bumping the version up to 1.0. I've been pretty happy using my extension for the past 6 months or so.

New:

* A template-tag switching command has been added. You can use it to cycle through tag pairs e.g `{{ }}`, `{% %}` and `{# #}` at your selection/cursor position. The shortcut is bound to `cmd-shift->`, like the Rails extension that inspired it.

* Clips are now included for **if tags**, **for tags** and **block tags**. For example. you should be able to type *for*, hit the `tab` key and Nova will autocomplete it into a full set of tags with tab-indexed insertion points.


## Version 0.1

Syntax highlighting based on an existing grammar maintained by [interdependence/tree-sitter-htmldjango](https://github.com/interdependence/tree-sitter-htmldjango)
