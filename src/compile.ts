import { CompiledMapFunction, MapFunction } from './types';

export function compile<O = number, I = number>(map: MapFunction<O, I>, inMin: number, inMax: number, outMin: number, outMax: number): CompiledMapFunction<O, I> {
  return (value: I): O => map(value, inMin, inMax, outMin, outMax);
}
