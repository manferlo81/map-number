import { MapFunction, MapNumberFunction, TransformFunction } from './types';

export function transform<T>(func: MapNumberFunction, transformer: TransformFunction<T>): MapFunction<T> {
  return (num: number, inMin: number, inMax: number, outMin: number, outMax: number): T => transformer(
    func(num, inMin, inMax, outMin, outMax),
  );
}
