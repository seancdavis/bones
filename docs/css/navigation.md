# Navigation

With Bones 1.0, we wanted to allow for some flexibility with navigation right out of the gate. Of course, there's still much work to be done here, but we have some options.

## Default

To make it easy to get right up and running, there are default options attributed to `<nav>` and `<div class="nav">`. This can help streamline your markup, especially if you only want one "type" of nav menu throughout your application.
  
We place lists within these nav containers like so:

```html
<nav>
  <ul>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    ...
  </ul>
</nav>
```

or:

```html
<div class="nav">
  <ul>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    ...
  </ul>
</div>
```

### Floating Right

You can easily push a navigation menu to the right by applying a `.right` selector to **the `<ul>` within the nav container**.
  
For example:

```html
<nav>
  <ul class="right">
    ...
  </ul>
</nav>
```

## Navbar

The approach we took was to let you style the default navigation however you'd like. By default, Bones gives you free-floating links that are underlined on hover. 

Still, most applications today are using some form of a navbar. Therefore, we have a second set of horizontal navigation meant for a navbar. All we need is the appropriate class selector `.bar`:

```html
<nav class="bar">
  <ul>
    <li><a href="#">...</a></li>
    ...
  </ul>
</nav>
```

or

```html
<div class="nav bar">
  <ul>
    <li><a href="#">...</a></li>
    ...
  </ul>
</div>
```

> The important note to remember here is to keep a space between `.nav` and `.bar` if using a `<div>` element, which simply helps us reuse some of the default styling.
  
### Floating Right

We can also float these list items right while maintaining the bar itself by applying a `.right` selector to the `<ul>` within the container.
  
```html
<div class="nav bar">
  <ul class="right">
    ...
  </ul>
</div>
```

## Vertical Nav (Sidebar)

Vertical navigation is often useful in a sidebar type of application. All we need here is the `.vertical` selector:

```html
<nav class="vertical">
  <ul>
    <li><a href="#">...</a></li>
    ...
  </ul>
</nav>
```

or:

```html
<nav class="nav vertical">
  <ul>
    <li><a href="#">...</a></li>
    ...
  </ul>
</nav>
```

> Again, keep a space between `.nav` and `.vertical` if using a `<div>` element.

## Filters

Filters are a specific type of horizontal navigation, but often you want them to look different than your default nav. Once again, one simple selector gets the job done:

```html
<ul class="filter">
  <li><a href="#">...</a></li>
  ...
</ul>
```

Do note here we **don't need a container**, but apply the `.filter` selector to the `<ul>` element.
  
You also have an option for disabled and active list items by adding the appropriate class to the `<li>` element:

```html
<ul class="filter">
  <li class="disabled"><a href="#">...</a></li>
  <li class="active"><a href="#">...</a></li>
  ...
</ul>
```

## Breadcrumbs

Breadcrumbs work just like filters, but with an additional variable for the separator between the items.

```html
<ul class="breadcrumbs">
  <li><a href="#">...</a></li>
  ...
</ul>
```

Again, here we have `.disabled` and `.active` selectors.

```html
<ul class="breadcrumbs">
  <li class="disabled"><a href="#">...</a></li>
  <li class="active"><a href="#">...</a></li>
  ...
</ul>
```

## Lists

You don't necessarily need a list to be a navigation menu to benefit from some of these styles. We have a plain (no-bullet) vertical list available as:

```html
<ul class="no-bullet">
  <li>...</li>
  ...
</ul>
```

Or you can horizontal list:

```html
<ul class="horizontal">
  <li>...</li>
  ...
</ul>
```