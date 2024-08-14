# map-number

[![CircleCI](https://circleci.com/gh/manferlo81/map-number.svg?style=svg)](https://circleci.com/gh/manferlo81/map-number) [![npm](https://badgen.net/npm/v/map-number)](https://www.npmjs.com/package/map-number) [![codecov](https://codecov.io/gh/manferlo81/map-number/branch/master/graph/badge.svg)](https://codecov.io/gh/manferlo81/map-number) [![jsDelivr](https://data.jsdelivr.com/v1/package/npm/map-number/badge?style=rounded)](https://www.jsdelivr.com/package/npm/map-number) [![dependencies](https://badgen.net/david/dep/manferlo81/map-number)](https://david-dm.org/manferlo81/map-number) [![dev dependencies](https://badgen.net/david/dev/manferlo81/map-number)](https://david-dm.org/manferlo81/map-number?type=dev) [![packagephobia](https://badgen.net/packagephobia/install/map-number)](https://packagephobia.now.sh/result?p=map-number) [![bundlephobia](https://badgen.net/bundlephobia/min/map-number)](https://bundlephobia.com/result?p=map-number) [![types](https://img.shields.io/npm/types/map-number.svg)](https://github.com/microsoft/typescript) [![Known Vulnerabilities](https://snyk.io/test/github/manferlo81/map-number/badge.svg?targetFile=package.json)](https://snyk.io/test/github/manferlo81/map-number?targetFile=package.json) [![license](https://badgen.net/github/license/manferlo81/map-number)](LICENSE)

> :warning: this `map` function has nothing to do with `Array.prototype.map` method.

## In this guide

* [Install](#install)
* [CDN](#cdn)
* [Usage](#usage)
* [API](#api)
  * [function `map`](#function-map)
  * [function `floor`](#function-floor)
  * [function `ceil`](#function-ceil)
  * [function `round`](#function-round)
  * [function `limit`](#function-limit)
  * [function `compile`](#function-compile)
  * [function `transformed`](#function-transformed)
* [Types](#types)
  * [type `MapFunction`](#type-mapfunction)
  * [type `CompiledMapFunction`](#type-compiledmapfunction)
  * [type `TransformFunction`](#type-transformfunction)
  * [type `MapNumberFunction`](#type-mapnumberfunction)
  * [type `CompiledMapNumberFunction`](#type-compiledmapnumberfunction)

## Install

### using npm

```bash
npm install map-number
```

### using yarn

```bash
yarn add map-number
```

### using pnpm

```bash
pnpm add map-number
```

## CDN

### jsDelivr

```html
<script src="https://cdn.jsdelivr.net/npm/map-number@latest/dist/umd/map.js"></script>
```

***for production***

```html
<script src="https://cdn.jsdelivr.net/npm/map-number@latest/dist/umd/map.min.js"></script>
```

> *for production you may want to replace the "latest" version for a specific one.*

*[more options...](https://www.jsdelivr.com/package/npm/map-number?version=latest)*

### unpkg

```html
<script src="https://unpkg.com/map-number@latest/dist/umd/map.js"></script>
```

***for production***

```html
<script src="https://unpkg.com/map-number@latest/dist/umd/map.min.js"></script>
```

> *for production you may want to replace the "latest" version for a specific one.*

*[more options...](https://unpkg.com/map-number@latest/)*

## Usage

### Node.js

```javascript
const { map } = require('map-number');
const result = map(Math.sin(angle), -1, 1, 100, 0);
```

***using javascript modules...***

```javascript
import { map } from 'map-number';
const result = map(Math.sin(angle), -1, 1, 100, 0);
```

### Browser

*After the* `script` *tag has been added,* `mapNum` *will be available globally.*

```javascript
const result = mapNum.map(Math.sin(angle), -1, 1, 100, 0);
```

## API

### function `map`

*Maps a number within a given range to a different range, returning a floating point number. The result **WILL NOT** be limited (clamped) to the the given output range.*

*This is the core function and all other map function variants depend on it.*

* ***syntax***

```typescript
function map(
  input: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number,
): number;
```

* ***example***

```typescript
map(4, 0, 10, 0, 100); // => returns 40
```

### function `floor`

*Maps a number within a given range to a different range, returning a number rounded **down** to the **previous** integer number. The result **WILL NOT** be limited (clamped) to the the given output range.*

***syntax***

```typescript
function floor(
  input: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number,
): number;
```

### function `ceil`

*Maps a number within a given range to a different range, returning a number rounded **up** to the **next** integer number. The result **WILL NOT** be limited (clamped) to the the given output range.*

***syntax***

```typescript
function ceil(
  input: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number,
): number;
```

### function `round`

*Maps a number within a given range to a different range, returning a number **rounded** to the **closest** integer number. The result **WILL NOT** be limited (clamped) to the the given output range.*

***syntax***

```typescript
function round(
  input: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number,
): number;
```

> *If you need to round to a specific number of decimal places, you can use the [`transformed`](#function-transformed) method and write your own round function.*

### function `limit`

***alias: `clamp`***

*Maps a number within a given range to a different range, returning a floating point number. The result will be limited (clamped) to the given output range.*

***syntax***

```typescript
function limit(
  input: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number,
): number;
```

### function `compile`

***alias: `wrap`, `create`***

*Creates a single argument function implementing the given [`map`](#function-map), [`floor`](#function-floor), [`ceil`](#function-ceil), [`round`](#function-round), [`limit`](#function-limit), [`clamp`](#function-limit) or user created function. Useful when you need to map values multiple times within the same range, see example below.*

***syntax***

```typescript
function compile<O, I>(
  map: MapFunction<O, I>,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number,
): CompiledMapFunction<O, I>;
```

See [`MapFunction`](#type-mapfunction) and [`CompiledMapFunction`](#type-compiledmapfunction).

***example***

```javascript
import { map, compile } from "map-number";

const myMap = compile(map, -1, 1, 100, 0);

myMap(-0.2);
myMap(0.33);
myMap(0.51);

// ... is equivalent to...

map(-0.2, -1, 1, 100, 0);
map(0.33, -1, 1, 100, 0);
map(0.51, -1, 1, 100, 0);
```

### function `transformed`

***alias: `transform`***

*Creates a map function where the result of the given function is transformed to a different value. This method is used internally to create the [`floor`](#function-floor), [`ceil`](#function-ceil) and [`round`](#function-round) methods.*

***syntax***

```typescript
function transformed<O = number, M = number, I = number>(
  map: MapFunction<M, I>,
  transform: TransformFunction<M, O>,
): MapFunction<O, I>;
```

See [`MapFunction`](#type-mapfunction) and [`TransformFunction`](#type-transformfunction).

***example***

```javascript
import { transform, map } from "map-number";

const plusOne = transform(
  map,
  (value) => value + 1,
);

plusOne(0.4, 0, 1, 0, 100); // => 41 instead of 40
```

## Types

### type `MapFunction`

```typescript
type MapFunction<O = number, I = number> = (value: I, inMin: number, inMax: number, outMin: number, outMax: number) => O;
```

### type `CompiledMapFunction`

```typescript
type CompiledMapFunction<O = number, I = number> = (value: I) => O;
```

### type `TransformFunction`

```typescript
type TransformFunction<I = number, O = number> = (value: I) => O;
```

### type `MapNumberFunction`

```typescript
type MapNumberFunction = MapFunction<number, number>;
```

See [`MapFunction`](#type-mapfunction)

### type `CompiledMapNumberFunction`

```typescript
type CompiledMapNumberFunction = CompiledMapFunction<number, number>;
```

See [`CompiledMapFunction`](#type-compiledmapfunction)

## License

[MIT](LICENSE) &copy; 2019-2024 [Manuel Fernández](https://github.com/manferlo81)
