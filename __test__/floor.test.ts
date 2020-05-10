import { floor } from '../src';
import { expectValues } from './tools/test-values';

describe('"floor" method', () => {

  test('Should return in-range output', () => {
    expectValues([
      { value: 20, expected: 2 },
      { value: 50, expected: 5 },
      { value: 30, expected: 3 },
      { value: 31, expected: 3 },
      { value: 39, expected: 3 },
      { value: 40, expected: 4 },
    ], floor, 20, 50, 2, 5);
  });

  test('Should return out-range output', () => {
    expectValues([
      { value: 4, expected: 0 },
      { value: 6, expected: 0 },
      { value: 64, expected: 6 },
      { value: 66, expected: 6 },
    ], floor, 20, 50, 2, 5);
  });

  test('Should invert in-range output', () => {
    expectValues([
      { value: 1, expected: 9 },
      { value: 4, expected: 6 },
      { value: 4.1, expected: 5 },
      { value: 4.9, expected: 5 },
      { value: 5, expected: 5 },
      { value: 9, expected: 1 },
    ], floor, 1, 9, 9, 1);
  });

  test('Should invert out-range output', () => {
    expectValues([
      { value: 0, expected: 10 },
      { value: -0, expected: 10 },
      { value: -1.3, expected: 11 },
      { value: 10.1, expected: -1 },
      { value: 10.9, expected: -1 },
    ], floor, 1, 9, 9, 1);
  });

});
