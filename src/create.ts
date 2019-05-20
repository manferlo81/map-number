type MapFunction = (num: number, min: number, max: number, outMin: number, outMax: number) => number;

function create(func: MapFunction, min: number, max: number, outMin: number, outMax: number) {
  return (num: number) => func(num, min, max, outMin, outMax);
}

export default create;
