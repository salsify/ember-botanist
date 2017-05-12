# ember-botanist [![Build Status](https://travis-ci.org/salsify/ember-botanist.svg?branch=master)](https://travis-ci.org/salsify/ember-botanist)

This addon is a thin wrapper over the [Botanist](https://github.com/salsify/botanist) library.

## Installation

```sh
yarn add [--dev] ember-botanist
```

## Usage

See the [Botanist README](https://github.com/salsify/botanist) for more details on usage.

```js
import { transform, rule, simple } from 'botanist';

let doMath = transform({
  @rule({ op: 'add', lhs: simple('left'), rhs: simple('right') })
  add({ left, right }) {
    return left + right;
  },

  @rule({ op: 'sub', lhs: simple('left'), rhs: simple('right') })
  subtract({ left, right }) {
    return left - right;
  }
});

doMath({ op: 'add', lhs: 1, rhs: 2 });
// => 3

doMath({ op: 'sub', lhs: { op: 'add', lhs: 2, rhs: 2 }, rhs: 1 });
// => 3
```
