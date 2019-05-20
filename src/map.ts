function map(num: number, min: number, max: number, outMin: number, outMax: number): number {
  return (num - min) / (max - min) * (outMax - outMin) + outMin;
}

export default map;
