import { MapFunction, transform } from '../src';
import { expectValues } from './tools/test-values';

describe('"transform" method', () => {

  test('Should transform map function output', () => {

    const fakeMapFunction: MapFunction = (n) => n;

    const mapPlusOne = transform(
      fakeMapFunction,
      (n) => n + 1,
    );

    expectValues([10, 0.5, 2.2, 8].map((value) => ({
      value,
      expected: value + 1,
    })), mapPlusOne, 0, 0, 0, 0);

  });

  test('Should transform map function output to a non number value', () => {

    const fakeMapFunction: MapFunction = (n) => n;

    const mapPlusOne = transform(
      fakeMapFunction,
      (n) => `$ ${n}`,
    );

    expectValues([10, 0.5, 2.2, 8].map((value) => ({
      value,
      expected: `$ ${value}`,
    })), mapPlusOne, 0, 0, 0, 0, 'toBe');

  });

  test('Should chain transform map function output', () => {

    const fakeMapFunction: MapFunction = (n) => n;

    const mapPlusOne = transform(
      transform(
        fakeMapFunction,
        (n) => `$ ${n}`,
      ),
      (s) => `-${s}`
    );

    expectValues([10, 0.5, 2.2, 8].map((value) => ({
      value,
      expected: `-$ ${value}`,
    })), mapPlusOne, 0, 0, 0, 0, 'toBe');

  });

});
