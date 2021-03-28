---
layout: post
title: Jekyll with Tailwind CSS
subtitle: Setup Jekyll with Tailwind CSS with PostCSS and PurgeCSS (no Webpack involved)
date: 2021-03-27 -0500
image: '/assets/img/posts/2021-03-27-jekyll-with-tailwind/banner.jpg'
permalink: /blog/jekyll-with-tailwind
description: Setup Jekyll with Tailwind CSS with PostCSS and PurgeCSS (no Webpack involved)
---

[Tailwind CSS](https://tailwindcss.com) is a utility-first CSS framework that provides a deep catalog of CSS classes that you can use directly in your HTML instead of writing loads of CSS.

I really love Tailwind CSS and I wanted to integrate it into my next Jekyll project, but I struggled using the [jekyll-postcss](https://github.com/mhanberg/jekyll-postcss) plugin. I had difficulties with the cache when building multiple CSS files, so I decided to use [PostCSS](https://postcss.org/) directly.

## Installing Tailwind CSS

If you use [Tailwind via a CDN](https://tailwindcss.com/docs/installation#using-tailwind-via-cdn) you lose a lot of features that makes Tailwind great, like customization, third party plugins, etc. The recommended way is to install Tailwind as a [PostCSS](https://postcss.org/) plugin.

### Wait a minute... What is PostCSS?

Despite what its name implies, it's not a post-processor (or pre-processor). It is a development tool that uses plugins to transform your CSS. For example, if you use [postcss-preset-env](https://preset-env.cssdb.org/) you can use the latest CSS syntax and this plugin will transform it into something most browsers can understand (like [Babel](https://babeljs.io/) for CSS). The exact same way if we install Tailwind and it will generate the CSS file we need and Jekyll can use it.

### Ok, but how do I integrate it to my project?

Jekyll has its own build process, if you run the command `bundle exec jekyll serve` you're going to notice it creates a `_site` folder with the build version of your site. As I have mentioned before, there is a Jekyll plugin called [jekyll-postcss](https://github.com/mhanberg/jekyll-postcss) that let you integrate PostCSS inside the Jekyll build process, but I'm going to explain how to do it using PostCSS directly.

Of course you can use [Webpack](https://webpack.js.org/), [gulp.js](https://gulpjs.com/) or [Rollup](https://rollupjs.org/) as a module builder to integrate PostCSS, but to keep it simple, we will use [PostCSS CLI](https://github.com/postcss/postcss-cli) to build our CSS file.

## Enough with the explanation, let's do it!

First, create a Jekyll project. Follow [jekyll quickstart instructions](https://jekyllrb.com/docs/#instructions), but include the `--blank` flag to start a Jekyll site from scratch, without the default theme and configuration:

```bash
gem install jekyll bundler # Install the jekyll and bundler gems.
jekyll new --blank jekyll-with-tailwind # Create a new Jekyll site
cd jekyll-with-tailwind # Change into the new directory
```

Since you use the `--blank` flag, a `Gemfile` is not included by default. We need to create our own file at the root of our project, a minimal `Gemfile` would be:

```ruby
source "https://rubygems.org"

gem "jekyll", "~> 4.1.1"
gem "webrick", "~> 1.7" # This is needed if you are using ruby 3.0.0

```

Now we can build your site:

```bash
bundle exec jekyll serve
```

We can browse to [http://localhost:4000](http://localhost:4000) to make sure everything is in its place.

![Jekyll quickstart](/assets/img/posts/2021-03-27-jekyll-with-tailwind/jekyll-quickstart.png){:data-action="zoom"}

## Create a package.json file

As I mentioned before we're going to use [PostCSS CLI](https://github.com/postcss/postcss-cli), so we need to initialize npm, and install PostCSS:

```bash
npm init -y
npm install postcss postcss-cli --save-dev
```

## Install Tailwind and other PostCSS plugins

In addition Tailwind, we're going to install some convenience PostCSS plugins:

- [Autoprefixer](https://github.com/postcss/autoprefixer): Let you write CSS rules without vendor prefixes.
- [cssnano](https://github.com/cssnano/cssnano): Minifies our css. You can use [jekyll-minifier](https://github.com/digitalsparky/jekyll-minifier) instead.

```bash
npm install tailwindcss autoprefixer cssnano --save-dev
```

## Create a Tailwind configuration file

```bash
npx tailwindcss init
```

This will create a minimal `tailwind.config.js` file at the root of your project.

Now, include in the `purge` key the paths of all your `.html` files. Tailwind uses the [PurgeCSS](https://purgecss.com/) library under the hood and analyzes your content and your CSS files. Then It removes unused selectors from your CSS, resulting in smaller CSS files.

```javascript
// tailwind.config.js
module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.html',
    './*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

Here you can customize your theme and install any additional Tailwind plugin.

## Create a PostCSS configuration file

This `postcss.config.js` will be used by PostCSS by default to build our css file.

```javascript
// postcss.config.js

const cssnano = require('cssnano')({ preset: 'default' });

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('tailwindcss')('./tailwind.config.js'),
    ...(process.env.NODE_ENV === 'production' ? [cssnano] : []),
  ],
};
```

Notice we included a rule to ensure to minify our css when we build for production.

## Include Tailwind in your CSS

By default jekyll will include a `main.scss` inside the`_sass/` directory. Let's take advantage of that and replace its contents with Tailwind's `base`, `components`, and `utilities` styles.

```css
// _sass/main.scss
@tailwind base;
@tailwind components;
@tailwind utilities;

// Include any custom CSS here
```

## Create your npm scripts

Since we're already using npm, create a jekyll `dev` and `build` scripts inside our `package.json`:

```javascript
// package.json
"scripts": {
    "jekyll:dev": "bundle exec jekyll serve --incremental --watch",
    "jekyll:build": "JEKYLL_ENV=production bundle exec jekyll build"
  }
```

This will allow you to use `npm run jekyll:dev` to build and start the local server and `npm run jekyll:build` when you need to generate the site for production.

You're also going to need the same for PostCSS to run the PostCSS CLI commands:

```javascript
// package.json
"scripts": {
    "jekyll:dev": "bundle exec jekyll serve --incremental --watch",
    "jekyll:build": "JEKYLL_ENV=production bundle exec jekyll build",
    "css:dev": "postcss _sass/main.scss --output assets/css/style.css --watch",
    "css:build": "NODE_ENV=production postcss _sass/main.scss --output assets/css/style.css"
  }
```

Notice the input path is `_sass/main.scss`, this matches the file you edited earlier, and the output path is `assets/css/style.css`, this is the CSS file you are going to use in your Jekyll site. The `--watch` flag in the `dev` script ensures that if you change anything in your file it will recompile it.

## Let's test it!

Run the command `npm run css:dev` and you can see it created a `style.css` file inside the `assets/css` path with all the Tailwind classes.

## Integrate the CSS file into the Jekyll project

Now that the CSS file is created, you can simply import it inside your the `HEAD` tags of your `_layouts/default.html` file:

```html
<link rel="stylesheet" href="{{ "/assets/css/style.css" | relative_url }}">
```

## Include some Tailwind classes

By default, Jekyll created an `index.md` file. Rename it to `index.html` and replace it with some HTML to test it:

```html
---
layout: default
title: 'Tailwind CSS!'
---

<div class="flex h-screen">
  <div class="m-auto">
    <h1 class="text-5xl">I'm using Tailwind CSS!</h1>
  </div>
</div>
```

Now open a new terminal window and run the `jekyll:dev` command to build the site.

![Jekyll with tailwind](/assets/img/posts/2021-03-27-jekyll-with-tailwind/jekyll-with-tailwind.png){:data-action="zoom"}

## The last npm script

Now everything is ready, but you may have noticed that you need to run the `jekyll` and `css` commands at the same time. We can use [concurrently](https://github.com/kimmobrunfeldt/concurrently) to make our life easier. Let's install it:

```bash
npm install concurrently --save-dev
```

Create two new npm scripts `dev` and `build`. The final version of your `scripts` key in `package.json` should look like this:

```javascript
  "scripts": {
    "jekyll:dev": "bundle exec jekyll serve --incremental --watch",
    "jekyll:build": "JEKYLL_ENV=production bundle exec jekyll build",
    "css:dev": "postcss _sass/main.scss --output assets/css/style.css --watch",
    "css:build": "NODE_ENV=production postcss _sass/main.scss --output assets/css/style.css",
    "dev": "concurrently --kill-others \"npm run jekyll:dev\" \"npm run css:dev\"",
    "build": "npm run css:build && npm run jekyll:build"
  },
```

Notice in the `build` we used `&&` to ensure `css:build` runs first and then `jekyll:build`, to ensure your CSS file is created before Jekyll uses it.

## Gitignore

Finally, include the path of the `style.css` and `node_modules` in your `.gitignore`, since this is always going to be created at runtime. It should look like this:

```bash
_site/
.sass-cache/
.jekyll-cache/
.jekyll-metadata
node_modules
assets/css/style.css
```

## Source code

The code is available at my github repo [jekyll-with-tailwind](https://github.com/ocordova/jekyll-with-tailwind).
