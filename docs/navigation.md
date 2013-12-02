# Navigation

## Top Bar

```html
<nav class="top-bar">
  <ul>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    <li><a href="#">Link 3</a></li>
    <li><a href="#">Link 4</a></li>
  </ul>
</nav>
```


    <div class="top-nav">
      <ul class="right">
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
        <li><a href="#">Link 4</a></li>
      </ul>
    </div>

## Horizontal (Inline) Nav

    <nav class="horizontal">
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
        <li><a href="#">Link 4</a></li>
      </ul>
    </nav>

Alternatively, you can use inline lists without the navigation connotation, should you have some other application in mind. In that case, the class hangs with the `<ul>` element instead of the `<nav>` element.


    <ul class="horizontal">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>

## Vertical Nav (Sidebar)

    <nav class="vertical">
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
        <li><a href="#">Link 4</a></li>
      </ul>
    </nav>

For vertical, unordered lists without the bullet points, we need:

    <ul class="no-bullet">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>

## Filters

    <ul class="filter">
      <li><a href="">Filter 1</a></li>
      <li><a href="">Filter 2</a></li>
      <li class="selected"><a href="">Filter 3 (selected)</a></li>
      <li><a href="">Filter 4</a></li>
    </ul>

## Pagination

Not entirely sure how to do this yet...

## Breadcrumbs

    <ul class="breadcrumb">
      <li><a href="#">Stop 1</a></li>
      <li class="disabled"><a href="#">Stop 2 (disabled)</a></li>
      <li><a href="#">Stop 3</a></li>
      <li class="active"><a href="#">Stop 4 (active)</a></li>
    </ul>