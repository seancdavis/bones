## Markup

Buttons can be used as `<a>` elements with a `button` class, or they can be `<button>` elements, or they can be `<input>` elements.

These are all the same:

```html
<button>Button 1</button>
<a href="#" class="button">Button 2</a>
<input type="submit" value="Button 3">
```

## Sizes

Using the `<button>` example, here are the types available to you:

```html
<button class="huge">Huge</button>
<button class="large">Large</button>
<button>Default</button>
<button class="small">Small</button>
```

And using the `<a>` equivalent, these will match the buttons above:

```html
<a class="button huge">Huge</a>
<a class="button large">Large</a>
<a class="button default">Default</a>
<a class="button small">Small</a>
```


## Colors

There are various colors configurations available to you.

```html
<button>Default</button>
<button class="primary">Primary</button>
<button class="accent-1">Accent 1</button>
<button class="accent-2">Accent 2</button>
<button class="accent-3">Accent 3</button>
<button class="accent-4">Accent 4</button>
<button class="dark">Dark</button>
<button class="light">Light</button>
<button class="success">Success</button>
<button class="notice">Notice</button>
<button class="alert">Alert</button>
```


And these would match:

```html
<a class="button">Default</a>
<a class="button primary">Primary</a>
<a class="button accent-1">Accent 1</a>
<a class="button accent-2">Accent 2</a>
<a class="button accent-3">Accent 3</a>
<a class="button accent-4">Accent 4</a>
<a class="button dark">Dark</a>
<a class="button light">Light</a>
<a class="button success">Success</a>
<a class="button notice">Notice</a>
<a class="button alert">Alert</a>
```

## Block

Block level buttons stretch across the width available to them.

```html
<button class="block">Block</button>
```

Or:

```html
<a class="button block">Block</a>
```

Or:

```html
<input type="submit" class="block">
```

## Disabled

Disabled buttons are greyed out and can not be clicked.

```html
<button disabled>Disabled</button>
<a class="button disabled">Disabled</a>
<input type="submit" disabled>
```