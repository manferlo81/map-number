# map-number

processing/p5.js map like function, including floating point numbers

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

> *all other map functions are variants of this one and depend on it.*

```typescript
function map(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
```

#### floor

*maps a number in a range to a different range, returning a number truncated to the inmediate previous integer number, including number outside the given output range.*

```typescript
function floor(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
```

#### round

*maps a number in a range to a different range, returning a number rounded to the closest integer number, including number outside the given output range.*

```typescript
function round(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
```

#### limit

*maps a number in a range to a different range, returning a floting point number, limiting the result to the given output range.*

```typescript
function limit(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
```

#### create

*creates a single argument function implementing the given [`map`](#map), [`floor`](#floor), [`round`](#round) or [`limit`](#limit) function, useful when you need to map values multiple times with the same arguments, [see example](#example)*

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

## License

[MIT License](LICENSE)
