import { CompiledMapNumberFunction, MapNumberFunction } from './types';

function compile(func: MapNumberFunction, inMin: number, inMax: number, outMin: number, outMax: number): CompiledMapNumberFunction {
  return (num: number): number => func(num, inMin, inMax, outMin, outMax);
}

export default compile;
