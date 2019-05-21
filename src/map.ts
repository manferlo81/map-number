function map(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
  return (num - inMin) / (inMax - inMin) * (outMax - outMin) + outMin;
}

export default map;
