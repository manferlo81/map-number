import { map } from '../../src';

describe('"map" function', () => {

  test('Should return in-range output', () => {
    const mapValue = (value: number) => map(value, 2, 5, 20, 50);
    const cases = [
      { value: 2, expected: 20 },
      { value: 3, expected: 30 },
      { value: 3.1, expected: 31 },
      { value: 3.9, expected: 39 },
      { value: 4, expected: 40 },
      { value: 5, expected: 50 },
    ];
    cases.forEach(({ value, expected }) => {
      expect(mapValue(value)).toBeCloseTo(expected);
    });
  });

  test('Should return out-range output', () => {
    const mapValue = (value: number) => map(value, 2, 5, 20, 50);
    const cases = [
      { value: 1, expected: 10 },
      { value: 1.1, expected: 11 },
      { value: 5.9, expected: 59 },
      { value: 6, expected: 60 },
    ];
    cases.forEach(({ value, expected }) => {
      expect(mapValue(value)).toBeCloseTo(expected);
    });
  });

  test('Should invert in-range output', () => {
    const mapValue = (value: number) => map(value, 1, 9, 9, 1);
    const cases = [
      { value: 2.1, expected: 7.9 },
      { value: 3, expected: 7 },
      { value: 7, expected: 3 },
      { value: 8.8, expected: 1.2 },
    ];
    cases.forEach(({ value, expected }) => {
      expect(mapValue(value)).toBeCloseTo(expected);
    });
  });

  test('Should invert out-range output', () => {
    const mapValue = (value: number) => map(value, 1, 9, 9, 1);
    const cases = [
      { value: 0, expected: 10 },
      { value: -0, expected: 10 },
      { value: 0.9, expected: 9.1 },
      { value: 9.1, expected: 0.9 },
      { value: 10, expected: 0 },
    ];
    cases.forEach(({ value, expected }) => {
      expect(mapValue(value)).toBeCloseTo(expected);
    });
  });

  test('Should return non integer output', () => {
    const mapValue = (value: number) => map(value, 10, 90, 1, 9);
    const cases = [
      { value: 12.7, expected: 1.27 },
      { value: 33.1, expected: 3.31 },
      { value: 54.3, expected: 5.43 },
      { value: 86.1, expected: 8.61 },
    ];
    cases.forEach(({ value, expected }) => {
      expect(mapValue(value)).toBeCloseTo(expected);
    });
  });

});
