import map from './map';
import { MapNumberFunction } from './types';

function round(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
  return Math.round(
    map(num, inMin, inMax, outMin, outMax),
  );
}

export default round as MapNumberFunction;
