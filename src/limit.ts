import { map } from './map';

export function limit(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number {

  const result = map(num, inMin, inMax, outMin, outMax);

  let boundMin = outMin;
  let boundMax = outMax;

  if (boundMax < boundMin) {
    const temp = boundMin;
    boundMin = boundMax;
    boundMax = temp;
  }

  return result > boundMax ? boundMax : result < boundMin ? boundMin : result;

}
