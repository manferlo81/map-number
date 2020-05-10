import { limit } from '../src';
import { expectValues } from './tools/test-values';

describe('"limit" method', () => {

  test('Should return in-range output', () => {
    expectValues([
      { value: 20, expected: 2 },
      { value: 33, expected: 3.3 },
      { value: 39, expected: 3.9 },
      { value: 50, expected: 5 },
    ], limit, 20, 50, 2, 5);
  });

  test('Should limit output', () => {
    expectValues([
      { value: 1, expected: 20 },
      { value: 1.9, expected: 20 },
      { value: 6.1, expected: 50 },
      { value: 6, expected: 50 },
    ], limit, 2, 5, 20, 50);
  });

  test('Should limit inverted output', () => {
    expectValues([
      { value: -0.5, expected: 9 },
      { value: 1, expected: 9 },
      { value: 3.1, expected: 6.9 },
      { value: 9, expected: 1 },
      { value: 10.5, expected: 1 },
    ], limit, 1, 9, 9, 1);
  });

  test('Should return non integer output', () => {
    expectValues([
      { value: 9.9, expected: 1 },
      { value: 33.1, expected: 3.31 },
      { value: 55.3, expected: 5.53 },
      { value: 90.1, expected: 9 },
    ], limit, 10, 90, 1, 9);
  });

});
