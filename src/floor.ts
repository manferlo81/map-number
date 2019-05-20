import map from "./map";

function floor(num: number, min: number, max: number, outMin: number, outMax: number) {
  return Math.floor(
    map(num, min, max, outMin, outMax),
  );
}

export default floor;
