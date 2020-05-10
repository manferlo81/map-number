import { ceil } from '../src';
import { expectValues } from './tools/test-values';

describe('"ceil" method', () => {

  test('Should return in-range output', () => {
    expectValues([
      { value: 20, expected: 2 },
      { value: 50, expected: 5 },
      { value: 30, expected: 3 },
      { value: 31, expected: 4 },
      { value: 39, expected: 4 },
      { value: 40, expected: 4 },
    ], ceil, 20, 50, 2, 5);
  });

  test('Should return out-range output', () => {
    expectValues([
      { value: 0, expected: 0 },
      { value: 4, expected: 1 },
      { value: 6, expected: 1 },
      { value: 64, expected: 7 },
      { value: 66, expected: 7 },
    ], ceil, 20, 50, 2, 5);
  });

  test('Should invert in-range output', () => {
    expectValues([
      { value: 1, expected: 9 },
      { value: 3.1, expected: 7 },
      { value: 3.9, expected: 7 },
      { value: 9, expected: 1 },
    ], ceil, 1, 9, 9, 1);
  });

  test('Should invert out-range output', () => {
    expectValues([
      { value: -1.3, expected: 12 },
      { value: -1.9, expected: 12 },
      { value: 10.1, expected: 0 },
      { value: 10.9, expected: 0 },
    ], ceil, 1, 9, 9, 1);
  });

});
