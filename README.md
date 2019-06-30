# map-number

[![CircleCI](https://circleci.com/gh/manferlo81/map-number.svg?style=svg)](https://circleci.com/gh/manferlo81/map-number) [![Greenkeeper badge](https://badges.greenkeeper.io/manferlo81/map-number.svg)](https://greenkeeper.io/) [![npm](https://img.shields.io/npm/v/map-number.svg)](https://www.npmjs.com/package/map-number) [![jsdelivr](https://data.jsdelivr.com/v1/package/npm/map-number/badge?style=rounded)](https://www.jsdelivr.com/package/npm/map-number) [![dependencies Status](https://david-dm.org/manferlo81/map-number/status.svg)](https://david-dm.org/manferlo81/map-number) [![devDependencies Status](https://david-dm.org/manferlo81/map-number/dev-status.svg)](https://david-dm.org/manferlo81/map-number?type=dev) [![install size](https://packagephobia.now.sh/badge?p=map-number)](https://packagephobia.now.sh/result?p=map-number) [![npm bundle size](https://img.shields.io/bundlephobia/min/map-number.svg)](https://bundlephobia.com/result?p=map-number) [![npm type definitions](https://img.shields.io/npm/types/map-number.svg)](https://github.com/microsoft/typescript) [![codecov](https://codecov.io/gh/manferlo81/map-number/branch/master/graph/badge.svg)](https://codecov.io/gh/manferlo81/map-number) [![Known Vulnerabilities](https://snyk.io/test/github/manferlo81/map-number/badge.svg?targetFile=package.json)](https://snyk.io/test/github/manferlo81/map-number?targetFile=package.json) [![GitHub](https://img.shields.io/github/license/manferlo81/map-number.svg)](LICENSE)

[processing](https://processing.org/reference/map_.html) / [p5.js](http://p5js.org/reference/#/p5/map) map like function, including floating point numbers support.

> :warning: this `map` function has nothing to do with `Array.prototype.map` method.

## Install

```bash
npm i map-number
```

## CDN

### jsDelivr

*[www.jsdelivr.com](https://www.jsdelivr.com)*

```html
<script src="https://cdn.jsdelivr.net/npm/map-number@latest/dist/map.umd.js"></script>
```

***for production***

```html
<script src="https://cdn.jsdelivr.net/npm/map-number@latest/dist/map.umd.min.js"></script>
```

*[more options...](https://www.jsdelivr.com/package/npm/map-number?version=latest)*

### unpkg

*[unpkg.com](https://unpkg.com)*

```html
<script src="https://unpkg.com/map-number@latest/dist/map.umd.js"></script>
```

***for production***

```html
<script src="https://unpkg.com/map-number@latest/dist/map.umd.min.js"></script>
```

*[more options...](https://unpkg.com/map-number@latest/)*

## Usage

### Node.js

```javascript
const mapNum = require("map-number");
const y = mapNum.map(Math.sin(angle), -1, 1, 100, 0);
```

### Browser

*After the* `script` *tag has been added,* `mapNum` *will be available globally.*

```javascript
const y = mapNum.map(Math.sin(angle), -1, 1, 100, 0);
```

## API

### map

*Maps a number in a range to a different range, returning a floting point number. The result is not limited to the the given output range.*

> *This is the core function and all other map function variants depend on it.*

***syntax***

```typescript
function map(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
```

### floor

*Maps a number in a range to a different range, returning a number rounded **down** to the **previous** integer number. The result is not limited to the the given output range.*

***syntax***

```typescript
function floor(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
```

### ceil

*Maps a number in a range to a different range, returning a number rounded **up** to the **next** integer number. The result is not blimitedto the the given output range.*

***syntax***

```typescript
function ceil(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
```

### round

*Maps a number in a range to a different range, returning a number **rounded** to the **closest** integer number. The result is not blimitedto the the given output range.*

***syntax***

```typescript
function round(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
```

### limit

*Maps a number in a range to a different range, returning a floting point number. The result will be bounded to the given output range.*

***syntax***

```typescript
function limit(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
```

### wrap

*Creates a single argument function implementing the given [`map`](#map), [`floor`](#floor), [`ceil`](#ceil), [`round`](#round) or [`limit`](#limit) function. Useful when you need to map values multiple times within the same range, [see example](#example).*

***syntax***

```typescript
function wrap(func: MapFunction, inMin: number, inMax: number, outMin: number, outMax: number): (num: number) => number;
```

***example***

```javascript
import { map, wrap } from "map-number";

const myMap = wrap(map, -1, 1, 100, 0);

myMap(-0.2);
myMap(0.33);

// ... is equivalent to...

map(-0.2, -1, 1, 100, 0);
map(0.33, -1, 1, 100, 0);
```

### create

*An alias for [wrap](#wrap) method, deprecated in version* `1.2.0`*, use [wrap](#wrap) instead.*

## License

[MIT](LICENSE) &copy; [Manuel Fernández](https://github.com/manferlo81)
