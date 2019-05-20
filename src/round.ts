import map from "./map";

function round(num: number, min: number, max: number, outMin: number, outMax: number) {
  return Math.round(
    map(num, min, max, outMin, outMax),
  );
}

export default round;
