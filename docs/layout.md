# Layout / Wireframe

**Variables:** `variables/_wireframe.scss`

**Styles:** `partials/_wireframe.scss`

## Containers

You can create a generic container by adding a `.container` class to any block-level element. For example:

```html
<div class="container"></div>
```

The container is built to be responsive. We have a max-width variable -- `$container-width`. The container will hang in the middle of the window when the display is larger than the max width. 

### No Container

Content does not need to live within a container, in which case the bounds become the width of the `<body>`, which is set to `100%`.
  
### Multiple Containers

The container was designed as though it would be the main container in your template/layout. We've made it a class so you could add more containers if you wanted to, although its not necessary, as we've provided you with a `.content` selector to use for grouping or laying out content within a container.

Therefore, this is the recommended markup:

```html
<div class="container">
  <div class="content"></div>
</div>
```

However, additional containers within the main container are possible, and would simply stretch to `100%` of their allowable width:

```html
<div class="container">
  <div class="container">
    <!-- stretches to its max allowable width -->
  </div>
</div>
```

## Grid

The grid, like all of Bones, is young, but its easy to use and is working nicely. Everything within the grid is based on one value applied to the `$grid-cols` variable:

```scss
$grid-cols: 12; // number of columns as base of building grid -- any number is permitted
```

Like the comment says, any number is permitted here. `12` is the default, but if you need more, use more! From here, we have the following basic structure:

```html
<div class="row">
  <div class="column-12"></div>
</div>
```

The concept is that the number following `column-` is the **number of columns (out of the total number of columns) you'd like this column to span**. This means, in most cases, your numbers within a `.row` will add up to the number you've chose for the `$grid-cols` variable.

In other words, the example above would be one full-width spanning row (which is usually pointless). But if you wanted a sidebar, for example, you might do something like this:

```html
<div class="row">
  <div class="column-4">
    <!-- sidebar -->
  </div>
  <div class="column-8">
    <!-- main content -->
  </div>
</div>
```

### Rows

The widths of the columns are calculated such that you don't *need* the `.row` container, but you'll likely run into some issues without it. For example, because the columns are floated, they don't hold physical height. The row container realizes the height of its columns and will help push all subsequent content to its desired position on the page.


