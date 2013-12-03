# Images

Like many other areas within Bones, we plan to add many more customization and configuration options to images in the future. We feel like we have a pretty good base to start with.

## Sizes

We have three custom sizes available -- `thumb`, `medium` and `large` -- and we defatul to full size. The default sizes are listed below, but you can change as needed.

### Thumbnail

Thumbnail images are 150px wide by default.

```html
<img class="thumb" src="http://www.fillmurray.com/575/570">
```

### Medium

Medium images are 250px wide by default.

```html
<img class="medium" src="http://www.fillmurray.com/575/570">
```

### Large

Large images are 400px wide by default.

```html
<img class="large" src="http://www.fillmurray.com/575/570">
```

## Styles

We have just a few select styles available at this time, but many more on their way.

You may combine sizes and styles.

### Frame

Puts a thin "frame" around an image, with whitespace between the image and the frame.

```html
<img class="frame medium" src="http://www.fillmurray.com/575/570">
```

### Polaroid

A polaroid is like a frame, but gives you the option for larger whitespace on the bottom, for a Polaroid effect.

```html
<img class="polaroid medium" src="http://www.fillmurray.com/575/570">
```

### Panoramic

Panoramics are great for stretching a landscape photo across a container. They will stretch to 100% of the available width. They are also set to place the image absolutely at -40%. We have to choose a value here since we can't place these images dynamically with javascript (another feature in the works).

Make note that here you need a container around the image. Nothing else should be placed within this container.

```html
<div class="panoramic">
  <img src="http://www.fillmurray.com/575/570">  
</div>
```

### Circle

Circular images, like panoramics, need a container to cut off their edges. However, here we use sizes in conjunction with the `.circle` selector to change the sizing of the circles. The default is `thumb` size.

```html
<!-- default / thumb -->
<div class="circle">
  <img src="http://www.fillmurray.com/575/570">
</div>

<!-- medium -->
<div class="circle medium">
  <img src="http://www.fillmurray.com/575/570">
</div>
```