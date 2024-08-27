export function map(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
  const inRange = inMax - inMin;
  const outRange = outMax - outMin;
  return (num - inMin) * outRange / inRange + outMin;
}
