import { map } from './map';
import { max, min } from './math';

export function limit(input: number, inputMin: number, inputMax: number, outputMin: number, outputMax: number): number {
  const boundMin = min(outputMin, outputMax);
  const boundMax = max(outputMin, outputMax);
  const result = map(input, inputMin, inputMax, outputMin, outputMax);
  if (result < boundMin) return boundMin;
  if (result > boundMax) return boundMax;
  return result;
}
