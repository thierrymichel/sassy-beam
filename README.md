# 〒 Sassy Beam

> A Sass mixin to deal with a “BEM-like” notation and a simplified HTML markup

![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)
[![NPM version](https://img.shields.io/npm/v/sassy-beam.svg?style=flat-square)](https://www.npmjs.com/package/sassy-beam)
[![License](https://img.shields.io/badge/license-UNLICENSE-green.svg?style=flat-square)](https://github.com/thierrymichel/sassy-beam/blob/master/UNLICENSE)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Beam (or sassy-beam) allows the use of a [BEM](http://bem.info/method/definitions/)-like notation but with a lighter HTML markup.

It is a combo based on BEM, [Nicolas Gallagher's thoughs](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/) and [Harry Roberts's adaptations](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) … while adding my personal touch!

## The Sassy Beam goals

1. Using a BEM method like `.block__element--modifier`
2. __Keeping a light HTML markup!__

    ```
    <div class="block block--mod1 block--mod2 block--mod3">
    ```
    becomes:
    ```
    <div class="block--mod1--mod2--mod3">
    ```
3. Maintaining the integrity of class names (no dynamic concatenation [`#{$block}__element`] nor nesting [`&__element`])
4. Allowing nesting for readability … or not!

## Installation

### via npm

```sh
npm install sassy-beam
```

### via Bower

```sh
bower install sassy-beam
```

## Usage

### .html

```html
<div class="foo">
  <div class="foo__baz"></div>
  <div class="foo__baz--qux--quux"></div>
</div>
<div class="foo--bar"></div>
```

### .scss

```scss
@import 'sassy-beam';

@include beam('foo') {
  property: value;
}

@include beam('foo--bar') {
  property: value;
}

@include beam('foo__baz') {
  property: value;
}

@include beam('foo__baz--qux--quux') {
  property: value;
}
```

### .css (output)

```css
.foo, [class*="foo--"] {
  property: value;
}
[class*="foo--"][class*="--bar"] {
  property: value;
}
.foo__baz, [class*="foo__baz--"] {
  property: value;
}
[class*="foo__baz--"][class*="--qux"][class*="--quux"] {
  property: value;
}
```

## Extra

* [Documentation](https://thierrymichel.github.io/sassy-beam/)

---

> **Feel free to improve, comment, share, …**
