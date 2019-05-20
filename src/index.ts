function map(num: number, min: number, max: number, outMin: number, outMax: number): number {
  return (num - min) / (max - min) * (outMax - outMin) + outMin;
}

function floor(num: number, min: number, max: number, outMin: number, outMax: number) {
  return Math.floor(
    map(num, min, max, outMin, outMax),
  );
}

function round(num: number, min: number, max: number, outMin: number, outMax: number) {
  return Math.round(
    map(num, min, max, outMin, outMax),
  );
}

function limit(num: number, min: number, max: number, outMin: number, outMax: number) {
  return Math.max(
    outMin,
    Math.min(
      outMax,
      map(num, min, max, outMin, outMax),
    ),
  );
}

export { map, floor, round, limit };
