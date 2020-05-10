import { round } from '../src';
import { expectValues } from './tools/test-values';

describe('"round" method', () => {

  test('Should return in-range output', () => {
    expectValues([
      { value: 20, expected: 2 },
      { value: 30, expected: 3 },
      { value: 31, expected: 3 },
      { value: 39, expected: 4 },
      { value: 40, expected: 4 },
      { value: 50, expected: 5 },
    ], round, 20, 50, 2, 5);
  });

  test('Should return out-range output', () => {
    expectValues([
      { value: 4, expected: 0 },
      { value: 6, expected: 1 },
      { value: 64, expected: 6 },
      { value: 66, expected: 7 },
    ], round, 20, 50, 2, 5);
  });

  test('Should invert in-range output', () => {
    expectValues([
      { value: 1, expected: 9 },
      { value: 3.1, expected: 7 },
      { value: 7.7, expected: 2 },
      { value: 9, expected: 1 },
    ], round, 1, 9, 9, 1);
  });

  test('Should invert out-range output', () => {
    expectValues([
      { value: -1.7, expected: 12 },
      { value: -1.1, expected: 11 },
      { value: 10.1, expected: 0 },
      { value: 10.9, expected: -1 },
    ], round, 1, 9, 9, 1);
  });

});
