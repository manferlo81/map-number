import { MapNumberFunction } from '../../src';

interface Test {
  value: number;
  expected: number;
}

export function expectValues(
  values: Test[],
  func: MapNumberFunction,
  a: number,
  b: number,
  c: number,
  d: number,
): void {
  values.forEach(({ value, expected }) => {
    expect(func(value, a, b, c, d)).toBeCloseTo(expected, 8);
  });
}
