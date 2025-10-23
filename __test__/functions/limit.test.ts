import { limit } from '../../src';

describe('"limit" function', () => {

  test('Should return in-range output', () => {
    const limitValue = (value: number) => limit(value, 20, 50, 2, 5);
    const cases = [
      { value: 20, expected: 2 },
      { value: 33, expected: 3.3 },
      { value: 39, expected: 3.9 },
      { value: 50, expected: 5 },
    ];
    cases.forEach(({ value, expected }) => {
      expect(limitValue(value)).toBeCloseTo(expected);
    });
  });

  test('Should limit output', () => {
    const limitValue = (value: number) => limit(value, 2, 5, 20, 50);
    const cases = [
      { value: 1, expected: 20 },
      { value: 1.9, expected: 20 },
      { value: 6.1, expected: 50 },
      { value: 6, expected: 50 },
    ];
    cases.forEach(({ value, expected }) => {
      expect(limitValue(value)).toBeCloseTo(expected);
    });
  });

  test('Should limit inverted output', () => {
    const limitValue = (value: number) => limit(value, 1, 9, 9, 1);
    const cases = [
      { value: -0.5, expected: 9 },
      { value: 1, expected: 9 },
      { value: 3.1, expected: 6.9 },
      { value: 9, expected: 1 },
      { value: 10.5, expected: 1 },
    ];
    cases.forEach(({ value, expected }) => {
      expect(limitValue(value)).toBeCloseTo(expected);
    });
  });

  test('Should return non integer output', () => {
    const limitValue = (value: number) => limit(value, 10, 90, 1, 9);
    const cases = [
      { value: 9.9, expected: 1 },
      { value: 33.1, expected: 3.31 },
      { value: 55.3, expected: 5.53 },
      { value: 90.1, expected: 9 },
    ];
    cases.forEach(({ value, expected }) => {
      expect(limitValue(value)).toBeCloseTo(expected);
    });
  });

});
