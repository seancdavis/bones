# Typography

Many HTML elements have default styling. We also have a few variations of standard elements.

## Headings

Like standard HTML, we have six levels of headings. Standard headings are designed using `em` measurements, so they will shrink with various breakpoints.

```html
<h1>...</h1>
<h2>...</h2>
<h3>...</h3>
<h4>...</h4>
<h5>...</h5>
<h6>...</h6>
```

## Subheadings

Subheaddings use the same heading elements along with a `.subheading` class and instantly give you a new set of headings.

```html
<h1 class="subheading">...</h1>
<h2 class="subheading">...</h2>
<h3 class="subheading">...</h3>
<h4 class="subheading">...</h4>
<h5 class="subheading">...</h5>
<h6 class="subheading">...</h6>
```

## Block-Level Elements

### Paragraphs

The default grouping of text is a paragraph:

```html
<p>
  ...
</p>
```

There are some other elements that provide alternatives to plain paragraphs:

### Blockquotes

Blockquotes are a good way to call out text:

```html
<blockquote>
  ...
</blockquote>
```

### Code Blocks

Technical information works great within code blocks, which are designated with the `<pre>` tag:
  
```html
<pre>
  ...
</pre>
```

> An important note with `<pre>` tags is that it takes indentation literally. Therefore, you'll want to disregard the indentation in your HTML within `<pre>` tags.
  
## Characters

Within paragraphs, headings and other block-level elements, we have several tags that will affect individual characters.

### Small

Make characters smaller than the norm:

```html
<h1>Heading 1 <small>with a small addition</small></h1>
```

### Big

Or make them large:

```html
<h1>Heading 1 <big>with a BIG addition</big></h1>
```

### Italic

You can italize with `<em>`:
  
```html
<p>Normal text. <em>Italicized text.</em></p>
```

### Bold

And you make bold with `<strong>`:
  
```html
<p>Normal text. <strong>Bold text.</strong></p>
```

### Code

You can write code inline as well:

```html
<p>A normal paragraph with some <code>code</code></p>
```

## Lists

### Nesting

Unordered and ordered lists can be nested as far as you'd like:

```html
<ul>
  <li>...</li>
  <li>...
    <ul>
      <li>...</li>
      <li>...
        <ul>
          <li>...</li>
          <li>...</li>
          ...
        </ul>
      </li>
      ...
    </ul>
  </li>
  ...
</ul>
```

### Horizontal / Inline

If you'd like a horizontal or inline list, you just need a `.horizontal` selector:

```html
<ul class="horizontal">
  <li>...</li>
  ...
</ul>
```

### No Bullets

Unordered lists have bullets by default. To remove bullets, just add the `.no-bullet` class:

```html
<ul class="no-bullet">
  <li>...</li>
  ...
</ul>
```