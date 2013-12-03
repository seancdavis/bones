# Components

CSS components are going to be a big part of Bones v2.0. But I wanted to get v1.0 released, so all we have today are a small series of notifications.

## Notifications

### Elements

Notifications should be placed in either a `div` or `p` tag:

```html
<!-- identical -->
<p class="notification">...</p>
<div class="notification">...</div>
```

### Classes

To make it easier to remember, you have the option of using any one of three classes -- `notification`, `notice`, `alert`:

```html
<!-- identical -->
<div class="notification">...</div>
<div class="notice">...</div>
<div class="alert">...</div>
```

> These notifications default to the `$color-1` background color with a `$color-light` text color.

### Standard Colors

Because notifications are typically offering a message of no feeling (`$color-1` or default), warning, danger or success, there are a few alternates that will work:

```html
<!-- red -->
<div class="danger">...</div>

<!-- yellow -->
<div class="warning">...</div>

<!-- green -->
<div class="success">...</div>
```

### Custom Colors

Because of the versatility offered with the color and background helpers, I recommend you keep those helpers loaded. Then you can create custom color combinations notifications like so:

```html
<!-- light background with dark text -->
<div class="notification bg-light color-dark">...</div>

<!-- dark background with dark text -->
<div class="alert bg-dark bg-dark-lightest">...</div>
```