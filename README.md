# map-number

[![CircleCI](https://circleci.com/gh/manferlo81/map-number.svg?style=svg)](https://circleci.com/gh/manferlo81/map-number) [![npm](https://badgen.net/npm/v/map-number)](https://www.npmjs.com/package/map-number) [![codecov](https://codecov.io/gh/manferlo81/map-number/branch/master/graph/badge.svg)](https://codecov.io/gh/manferlo81/map-number) [![jsDelivr](https://data.jsdelivr.com/v1/package/npm/map-number/badge?style=rounded)](https://www.jsdelivr.com/package/npm/map-number) [![dependencies](https://badgen.net/david/dep/manferlo81/map-number)](https://david-dm.org/manferlo81/map-number) [![dev dependencies](https://badgen.net/david/dev/manferlo81/map-number)](https://david-dm.org/manferlo81/map-number?type=dev) [![packagephobia](https://badgen.net/packagephobia/install/map-number)](https://packagephobia.now.sh/result?p=map-number) [![bundlephobia](https://badgen.net/bundlephobia/min/map-number)](https://bundlephobia.com/result?p=map-number) [![types](https://img.shields.io/npm/types/map-number.svg)](https://github.com/microsoft/typescript) [![Known Vulnerabilities](https://snyk.io/test/github/manferlo81/map-number/badge.svg?targetFile=package.json)](https://snyk.io/test/github/manferlo81/map-number?targetFile=package.json) [![license](https://badgen.net/github/license/manferlo81/map-number)](LICENSE)

> :warning: this `map` function has nothing to do with `Array.prototype.map` method.

## Install

```bash
npm i map-number
```

## CDN

### jsDelivr

```html
<script src="https://cdn.jsdelivr.net/npm/map-number@latest/dist/map.umd.js"></script>
```

***for production***

```html
<script src="https://cdn.jsdelivr.net/npm/map-number@latest/dist/map.umd.min.js"></script>
```

> *for production you may want to replace the "latest" version for a specific one.*

*[more options...](https://www.jsdelivr.com/package/npm/map-number?version=latest)*

### unpkg

```html
<script src="https://unpkg.com/map-number@latest/dist/map.umd.js"></script>
```

***for production***

```html
<script src="https://unpkg.com/map-number@latest/dist/map.umd.min.js"></script>
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

### map

*Maps a number within a given range to a different range, returning a floating point number. The result **WILL NOT** be limited (clamped) to the the given output range.*

*This is the core function and all other map function variants depend on it.*

***syntax***

```typescript
map: (
  input: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number,
) => number;
```

### floor

*Maps a number within a given range to a different range, returning a number rounded **down** to the **previous** integer number. The result **WILL NOT** be limited (clamped) to the the given output range.*

***syntax***

```typescript
floor: (
  input: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number,
) => number;
```

### ceil

*Maps a number within a given range to a different range, returning a number rounded **up** to the **next** integer number. The result **WILL NOT** be limited (clamped) to the the given output range.*

***syntax***

```typescript
ceil: (
  input: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number,
) => number;
```

### round

*Maps a number within a given range to a different range, returning a number **rounded** to the **closest** integer number. The result **WILL NOT** be limited (clamped) to the the given output range.*

***syntax***

```typescript
round: (
  input: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number,
) => number;
```

> *If you need to round to a specific number of decimal places, you can use the [`transformed`](#transformed) method and write your own round function.*

### limit

***alias: `clamp`***

*Maps a number within a given range to a different range, returning a floating point number. The result will be limited (clamped) to the given output range.*

***syntax***

```typescript
limit: (
  input: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number,
) => number;
```

### compile

***alias: `wrap`, `create`***

*Creates a single argument function implementing the given [`map`](#map), [`floor`](#floor), [`ceil`](#ceil), [`round`](#round), [`limit`](#limit), [`clamp`](#limit) or user created function. Useful when you need to map values multiple times within the same range, see example below.*

***syntax***

```typescript
compile: <O, I>(
  map: MapFunction<O, I>,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number,
) => Compiled<O, I>;

type Compiled<O, I> = (input: I) => O;
```

***example***

```javascript
import { map, round, compile } from "map-number";

const myMap = compile(map, -1, 1, 100, 0);

myMap(-0.2);
myMap(0.33);
myMap(0.5);

// ... is equivalent to...

map(-0.2, -1, 1, 100, 0);
map(0.33, -1, 1, 100, 0);
map(0.5, -1, 1, 100, 0);
```

### transformed

***alias: `transform`***

*Creates a map function where the result of the given function is transformed to a different value. This method is used internally to create the [`floor`](#floor), [`ceil`](#ceil) and [`round`](#round) methods.*

***syntax***

```typescript
transformed: <O, M, I>(
  map: MapFunction<I, M>,
  transform: Transformer<O, M>,
) => MapFunction<O, I>;

type Transformer<O, I> = (value: I, outputMin: number, outputMax: number) => O;
```

***example***

```javascript
import { transform, map } from "map-number";

const plusOne = transform(
  map,
  (value) => value + 1,
);

plusOne(0.4, 0, 1, 0, 100); // => 41 instead of 40
```

## License

[MIT](LICENSE) &copy; [Manuel Fernández](https://github.com/manferlo81)
