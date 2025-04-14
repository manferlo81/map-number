import { MapFunction, TransformFunction } from './types';

export function transformed<O = number, M = number, I = number>(map: MapFunction<M, I>, transform: TransformFunction<M, O>): MapFunction<O, I> {
  return (input: I, inputMin: number, inputMax: number, outputMin: number, outputMax: number): O => transform(
    map(input, inputMin, inputMax, outputMin, outputMax),
  );
}
