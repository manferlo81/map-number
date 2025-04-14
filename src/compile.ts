import { CompiledMapFunction, MapFunction } from './types';

export function compile<O = number, I = number>(map: MapFunction<O, I>, inputMin: number, inputMax: number, outputMin: number, outputMax: number): CompiledMapFunction<O, I> {
  return (input: I): O => map(input, inputMin, inputMax, outputMin, outputMax);
}
