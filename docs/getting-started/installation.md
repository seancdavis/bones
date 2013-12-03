# Installation

There are three common ways to use Bones. 

1. You could simply download the main css file and be done with it. This is the easiest method, but also the least versatile.
2. You can use the sass/scss features Bones has built in and create your own version of Bones to use in your project. This makes Bones very versatile, as it enables you to easily make it look different from project-to-project.
3. Since I mainly develop in Ruby on Rails, I've optimized Bones to play well with a Rails project.

Pick the one that's right for you and your project, then check the appropriate section below:

## CSS

If you simply want to get up and running right away, just grab the main css file and voila! You're ready to work. You can find the file here: `assets/stylesheets/bones.css`.

Note that everything will work just fine, but you are accepting my default configuration as the configuration for your project. This means everything down to the color palette has been chosen for you.

## Sass/SCSS

I like to say I can pretty much tell when a website was built using the Bootstrap framework. And that's exactly what I wanted to avoid with Bones. By taking advantage of the fact that Bones was built using the power of scss, you get the most out of Bones. This will enable you to make all your projects look completely different, even though you are beginning with the same framework.

### Preprocessor-Ready

If you already have a preprocessor, like [Compass](http://compass-style.org/) installed in your project, all you need to do is move the `assets/stylesheets` directory into your project. I suggest calling it something like `bones` and then getting to work.

### Installing Compass

If you don't have a preprocessor setup in your project, you can use the configuration we have here. First, move the `assets/stylesheets` directory into your project and rename it whatever you'd like.

Next, get Compass installed on your system. [Docs here](http://compass-style.org/install/).

Once you're compass-ready, open up your command-line application (Terminal) and navigate to where you placed the `stylesheets` directory:

```bash
$ cd path/to/stylesheets
```

Then run:

```bash
$ compass watch
```

and compass will watch for any changes to your files. When it detects a change it will rewrite the `bones.css` file.

> If you hate or don't know how to use the command line, refer to [this page](http://compass-style.org/install/) which has a couple apps that will help you use compass without the command line.

***

**In either case, since you are compiling everything, you only need to link to the `bones.css` file in your project.**

## Ruby on Rails

Using sass/scss is great, but if you're developing for a Ruby on Rails application, we have a much easier way for you to add Bones -- the `bones-rails` gem.

We've built a gem to abstract all the stuff that doesn't matter and just give you the configuration files. Refer to the [README](https://github.com/rocktreedesign/bones-rails) on how to use install and use the gem.

## Doc Help!

Please note, I have my own way of installing and using Bones that fits into my workflow. Certainly it's not ideal for everyone. If you have a better method of installation, please edit this doc or send your thoughts to [sean@rocktreedesign.com](mailto:sean@rocktreedesign.com).

