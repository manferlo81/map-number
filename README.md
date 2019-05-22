# map-number

[![CircleCI](https://circleci.com/gh/manferlo81/map-number.svg?style=svg)](https://circleci.com/gh/manferlo81/map-number) [![Greenkeeper badge](https://badges.greenkeeper.io/manferlo81/map-number.svg)](https://greenkeeper.io/) [![npm](https://img.shields.io/npm/v/map-number.svg)](https://www.npmjs.com/package/map-number) [![devDependencies Status](https://david-dm.org/manferlo81/map-number/dev-status.svg)](https://david-dm.org/manferlo81/map-number?type=dev) [![npm bundle size](https://img.shields.io/bundlephobia/min/map-number.svg)](https://bundlephobia.com/result?p=map-number) [![codecov](https://codecov.io/gh/manferlo81/map-number/branch/master/graph/badge.svg)](https://codecov.io/gh/manferlo81/map-number) [![GitHub](https://img.shields.io/github/license/manferlo81/map-number.svg)](LICENSE)

[processing](https://processing.org/reference/map_.html)/[p5.js](http://p5js.org/reference/#/p5/map) map like function, including floating point numbers

> :warning: this `map` function has nothing to do with `Array.prototype.map` method.

## Install

#### npm

```bash
npm install map-number
```

#### jsDelivr

```html
<script src="https://cdn.jsdelivr.net/npm/map-number/dist/map.umd.min.js"></script>
```

## API

#### map

*maps a number in a range to a different range, returning a floting point number, including number outside the given output range.*

> *all other map function variants depend on this one.*

###### syntax

```typescript
function map(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
```

#### floor

*maps a number in a range to a different range, returning a number truncated to the inmediate previous integer number, including number outside the given output range.*

###### syntax

```typescript
function floor(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
```

#### round

*maps a number in a range to a different range, returning a number rounded to the closest integer number, including number outside the given output range.*

###### syntax

```typescript
function round(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
```

#### limit

*maps a number in a range to a different range, returning a floting point number, limiting the result to the given output range.*

###### syntax

```typescript
function limit(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
```

#### create

*creates a single argument function implementing the given [`map`](#map), [`floor`](#floor), [`round`](#round) or [`limit`](#limit) function, useful when you need to map values multiple times within the same range, [see example](#example)*

###### syntax

```typescript
function create(func: MapFunction, inMin: number, inMax: number, outMin: number, outMax: number): (num: number) => number;
```

###### example

```javascript
const myMap = create(map, -1, 1, 0, 10);
myMap(0.5);
// ... is equivalent to...
map(0.5, -1, 1, 0, 10);
```

#### wrap

*an alias for [create](#create) method*

## License

[MIT License](LICENSE)
