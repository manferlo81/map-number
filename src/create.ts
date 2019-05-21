type MapFunction = (num: number, inMin: number, inMax: number, outMin: number, outMax: number) => number;

function create(func: MapFunction, inMin: number, inMax: number, outMin: number, outMax: number) {
  return (num: number) => func(num, inMin, inMax, outMin, outMax);
}

export default create;
