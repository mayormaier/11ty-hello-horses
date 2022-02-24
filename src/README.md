# hello-horses

This site is a hello-world for 11ty, a very powerful, static site generator for javascript.

## definitions

- **template** - a file that contains content (written in a templating language)
- **layout** - pre-built wrappers for templates. Used to define a common structure for a set of templates/pages
- **front matter** - key-value pairs at the top of a template that define specific variables that are used when rendering pages in 11ty
- **data file** - purpose built files that define variables to be inherited by all templates in a defined directory.
  - Ex. in the directory `/posts `, `/posts/posts.json` would be the directory data file, and would define variables that all other template files `/posts/*` should inherit.

## methodology

- Content files are written as "templates"
- Templates are converted to HTML files in the output folder as `_site`
  - The output file structure mirrors the project directory
- template data can be inserted into a layout (typically html)
  - multiple layouts can be applied to the same template
  - found in the `_includes` directory
  - layouts are specified in the "front matter" of a markup file under the "layout" key
- The ["Eleventy Data Cascade"](https://www.11ty.dev/docs/data-cascade/) describes the priority of data inheritance in the world of 11ty.
- Configuration file (where plugins live) is found at `/.eleventy.js`