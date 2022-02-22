# hello-horses

## definitions

- **template** - a file that contains content (written in a templating language)

## methodology

- Files are written as "templates"
- Templates are converted to HTML files in the output folder as `_site`
- The output file structure mirrors the project directory
- Layouts are pre-built wrappers for templates- template data can be inserted into a layout (typically html)
  - found in the `_includes` directory
- Configuration file (where plugins live) is found at `/.eleventy.js`