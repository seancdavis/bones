# Configuration

Bones really works best when you can alter it to match the desired configuration for your project. Of course, it will work fine out of the box, but Bones' power is in its ability to be easily altered.

## Directory Structure

Our structure is such:

```bash
+ stylesheets/
    + config/
    + styles/
        + helpers/
        + plugins/
    + vendor/
    + bones.css
    + bones.scss
```

And a quick explanation of these assets and directories:

* `config/`: configuration files
* `styles/`: all of bones styles
    * `helpers/`: helper stylesheets
    * `plugins/`: styles not contained within the core
* `vendor/`: non-bones files
* `bones.css`: compiled and compressed manifest file
* `bones.scss`: main controller

Configuration is going to take place within `bones.scss` and the `config` directory. I welcome you to edit anything within `vendor` and `styles` as you see fit, but that is not covered here. Let's look at our options in the sections below.

## Main Controller

The main controller -- `bones.scss` -- is an scss file where you choose which files you'd like to add to your project. All available files are listed.

### Loading Files

By default, all files/modules are loaded except plugins. Available plugins, however, are listed in the controller, but commented out. Simply uncomment the plugins you'd like to include, recompile, and you've got plugins!

### Removing Files

Removing files (or not including files) is often done to save weight with Bones. No, Bones is not heavy, but if you're never going to need a module, like a margin helper, for example, then there's no reason to include it.

To remove or not include a file/module, either comment out its `@import` line, or delete the line altogether. Then recompile and you're ready to go. Comments in scss can be made like so:

```scss
// this file would be included
@import 'styles/helpers/margin';

// this file would not
// @import 'styles/helpers/padding';
```

#### WARNING!

Be careful which files you choose not to include, as there are some dependencies built into Bones. These files are noted in the controller, but it general, there's no need to not include any config files, since they don't take up space in the final, compiled file.

## Configuration Files

The configuration files all live within the `config` directory. They are designed to mirror the files in the `styles` directory -- e.g. settings in `config/_forms.scss` apply to styles in `styles/_forms.scss`.

Edit these files as necessary, then recompile.

### Nomenclature

The configuration files are designed to be intuitive and semantic. The config variables are named to make them easy to understand. We follow the following convention:

```scss
$[file]-[section]-[style]-[state]-[index]
```

Explanation:

* `file`: name (or shortened name) of the configuration file
* `section`: section or subsection within the file where the setting can be found
* `style`: css style -- may not always be equivalent to the actual css style
* `state` (optional): state of style -- e.g. `hover`, `active`, `disabled`
* `index` (optional): integer if more than one are necessary

**Some Examples:**

```scss
$button-default-fontSize
$component-notification-padding
$nav-default-transition-hover
```