import { MapNumberFunction, transform } from '../src';
import { expectValues } from './tools/test-values';

describe('"transform" method', () => {

  test('Should transform map function output', () => {

    const fakeMapFunction: MapNumberFunction = (n) => n;

    const mapPlusOne = transform(
      fakeMapFunction,
      (n) => n + 1,
    );

    expectValues([10, 0.5, 2.2, 8].map((value) => ({
      value,
      expected: value + 1,
    })), mapPlusOne, 0, 0, 0, 0);

  });

});
