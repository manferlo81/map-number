import { CompiledMapFunction, MapFunction } from './types';

export function compile<T>(func: MapFunction<T>, inMin: number, inMax: number, outMin: number, outMax: number): CompiledMapFunction<T> {
  return (num: number): T => func(num, inMin, inMax, outMin, outMax);
}
