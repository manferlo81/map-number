import { map } from './map';
import { max, min } from './math';

export function limit(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
  const boundMin = min(outMin, outMax);
  const boundMax = max(outMin, outMax);
  const result = map(num, inMin, inMax, outMin, outMax);
  if (result < boundMin) return boundMin;
  if (result > boundMax) return boundMax;
  return result;
}
