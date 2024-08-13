import { MapFunction } from '../../src';

interface Test<T> {
  value: number;
  expected: T;
}

export function expectValues<T>(
  values: Test<T>[],
  func: MapFunction<T>,
  a: number,
  b: number,
  c: number,
  d: number,
  method: 'toBeCloseTo' | 'toBe' = 'toBeCloseTo',
): void {
  values.forEach(({ value, expected }) => {
    expect(func(value, a, b, c, d))[method](expected as never, 8);
  });
}
