import { floor } from '../../src';

describe('"floor" function', () => {

  test('Should return in-range output', () => {
    const floorValue = (value: number) => floor(value, 20, 50, 2, 5);
    const cases = [
      { value: 20, expected: 2 },
      { value: 50, expected: 5 },
      { value: 30, expected: 3 },
      { value: 31, expected: 3 },
      { value: 39, expected: 3 },
      { value: 40, expected: 4 },
    ];
    cases.forEach(({ value, expected }) => {
      expect(floorValue(value)).toBeCloseTo(expected);
    });
  });

  test('Should return out-range output', () => {
    const floorValue = (value: number) => floor(value, 20, 50, 2, 5);
    const cases = [
      { value: 4, expected: 0 },
      { value: 6, expected: 0 },
      { value: 64, expected: 6 },
      { value: 66, expected: 6 },
    ];
    cases.forEach(({ value, expected }) => {
      expect(floorValue(value)).toBeCloseTo(expected);
    });
  });

  test('Should invert in-range output', () => {
    const floorValue = (value: number) => floor(value, 1, 9, 9, 1);
    const cases = [
      { value: 1, expected: 9 },
      { value: 4, expected: 6 },
      { value: 4.1, expected: 5 },
      { value: 4.9, expected: 5 },
      { value: 5, expected: 5 },
      { value: 9, expected: 1 },
    ];
    cases.forEach(({ value, expected }) => {
      expect(floorValue(value)).toBeCloseTo(expected);
    });
  });

  test('Should invert out-range output', () => {
    const floorValue = (value: number) => floor(value, 1, 9, 9, 1);
    const cases = [
      { value: 0, expected: 10 },
      { value: -0, expected: 10 },
      { value: -1.3, expected: 11 },
      { value: 10.1, expected: -1 },
      { value: 10.9, expected: -1 },
    ];
    cases.forEach(({ value, expected }) => {
      expect(floorValue(value)).toBeCloseTo(expected);
    });
  });

});
