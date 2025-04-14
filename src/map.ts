export function map(input: number, inputMin: number, inputMax: number, outputMin: number, outputMax: number): number {
  const inputRange = inputMax - inputMin;
  const outputRange = outputMax - outputMin;
  return (input - inputMin) * outputRange / inputRange + outputMin;
}
