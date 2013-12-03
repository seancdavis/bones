# Helpers

Helpers are a series of class selectors that can help you style elements without adding custom CSS code. I like helpers because they keep you from repeating the same custom CSS code over and over.

But, helpers come with a few caveats you should be aware of. First, they are verbose. You may not use them all that much, while they take up about 1/3 of the code in `bones.css`. Of course, today, `bones.css` is less than 50KB, so we're not talking about too much data. And second, while they keep your stylesheets clean, they can very quickly make your HTML markup messy.

As a result, I tend to keep helpers in my Bones installation, but I use them sparingly -- typically for one-off purposes. In other words, if a whole series of elements needs to be a particular color, I'll write custom CSS. If it's one item, I'll use a helper.

## Background

Background helpers will fill the background of an item. The convention is `.bg-[color]-[tint]`. All of your colors are available.

So this:

```html
<div class="bg-1-light">...</div>
```

fills the `div` with the color value of `$color-1-light`.

## Border

The border style and weight is configurable, but is consistent throughout the border helper. In other words, you can't have multiple styles and widths unless you build them in there yourself. The selector, on the other hand, determines the color of the border. The convention is `.border-[color]-[tint]`

This:

```html
<div class="border-1-light">...</div>
```

add a border to the `div` with the color value of `$color-1-light`.

## Color

Color works almost identically to background, except the selectors are `.color-[color]-[tint]`. The funny thing here is the class selector is actually going to match the color variable.

So this:

```html
<div class="color-1-light">...</div>
```

will make the text within the `div` the color value of `$color-1-light`.

Of course, while we add `!important` tags to all these helpers, if there is a more specific style, it will be overridden.

## Margin

You have three configurable degrees of margins -- `small`, `medium`, `large`. The selector works like this: `.margin-[direction]-[degree]`.

This:

```html
<div class="margin-v-medium">...</div>
```

adds a `medium` margin to your `div` on the top and the bottom, while this:

```html
<div class="margin-medium">...</div>
```

adds a `medium` margin to your `div` in every direction.

Possible directions are:

* `[empty]`: all directions
* `h`: left/right
* `v`: top/bottom
* `top`: top
* `right`: right
* `bottom`: bottom
* `left`: left

## Padding

See the Margin section above and substitute `margin` with `padding`.

## Positioning

You have a few options for positioning elements:

### Float

Just add `float` and the direction to float an element:

```html
<div class="float-left">...</div>
```

### Align

You can align the text within an element with `align` and the direction:

```html
<div class="align-right">...</div>
```

You can use `left`, `right` and `center` here.

Depending on your styling, you may also be able to center an item by adding the `.center` class to it.

## Size

### Width

You can change the width of any item by adding `.width-[value]` to it. These are measured in `px`, and by default, they go from `10` to `1000`. This is configured by multiplying an index from 1 to your configured max value (100 by default) by a configured value (10 by default).

Let's say the image sizes available aren't enough for your page, you could add:

```html
<img class="width-460" src="">
```

and you'd have an image with a width of `460px`. By default you have every numerical integer divisible by 10 from 10 to 1000.


