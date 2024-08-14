import { MapFunction, TransformFunction } from './types';

export function transformed<O = number, M = number, I = number>(map: MapFunction<M, I>, transform: TransformFunction<M, O>): MapFunction<O, I> {
  return (num: I, inMin: number, inMax: number, outMin: number, outMax: number): O => transform(
    map(num, inMin, inMax, outMin, outMax),
  );
}
