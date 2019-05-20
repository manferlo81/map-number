import map from "./map";

function limit(num: number, min: number, max: number, outMin: number, outMax: number) {
  return Math.max(
    outMin,
    Math.min(
      outMax,
      map(num, min, max, outMin, outMax),
    ),
  );
}

export default limit;
