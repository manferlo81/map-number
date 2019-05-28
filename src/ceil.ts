import map from "./map";

function ceil(num: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  return Math.ceil(
    map(num, inMin, inMax, outMin, outMax),
  );
}

export default ceil;
