import { ceil } from '../src';

describe('"ceil" method', () => {

  test('Should return in-range output', () => {
    const cases = [
      { value: 20, expected: 2 },
      { value: 50, expected: 5 },
      { value: 30, expected: 3 },
      { value: 31, expected: 4 },
      { value: 39, expected: 4 },
      { value: 40, expected: 4 },
    ];
    cases.forEach(({ value, expected }) => {
      expect(ceil(value, 20, 50, 2, 5)).toBeCloseTo(expected);
    });
  });

  test('Should return out-range output', () => {
    const cases = [
      { value: 0, expected: 0 },
      { value: -2, expected: 0 },
      { value: -16, expected: -1 },
      { value: 4, expected: 1 },
      { value: 6, expected: 1 },
      { value: 64, expected: 7 },
      { value: 66, expected: 7 },
    ];
    cases.forEach(({ value, expected }) => {
      expect(ceil(value, 20, 50, 2, 5)).toBeCloseTo(expected);
    });
  });

  test('Should invert in-range output', () => {
    const cases = [
      { value: 1, expected: 9 },
      { value: 3.1, expected: 7 },
      { value: 3.9, expected: 7 },
      { value: 9, expected: 1 },
    ];
    cases.forEach(({ value, expected }) => {
      expect(ceil(value, 1, 9, 9, 1)).toBeCloseTo(expected);
    });
  });

  test('Should invert out-range output', () => {
    const cases = [
      { value: -1.3, expected: 12 },
      { value: -1.9, expected: 12 },
      { value: 10.1, expected: 0 },
      { value: 10.9, expected: 0 },
    ];
    cases.forEach(({ value, expected }) => {
      expect(ceil(value, 1, 9, 9, 1)).toBeCloseTo(expected);
    });
  });

});
