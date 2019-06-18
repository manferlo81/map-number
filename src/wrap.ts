type MapFunction = (num: number, inMin: number, inMax: number, outMin: number, outMax: number) => number;
type WrappedMapFunction = (num: number) => number;

function wrap(func: MapFunction, inMin: number, inMax: number, outMin: number, outMax: number): WrappedMapFunction {
  return (num: number) => func(num, inMin, inMax, outMin, outMax);
}

export default wrap;
