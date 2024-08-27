import { MapNumberFunction, transform } from '../src';

describe('"transform" method', () => {

  test('Should transform map function output', () => {

    const returnInput: MapNumberFunction = (n) => n;

    const mapPlusOne = transform(
      returnInput,
      (n) => n + 1,
    );

    const values = [10, 0.5, 2.2, 8];

    values.forEach((value) => {
      const result = mapPlusOne(value, 0, 0, 0, 0);
      const expected = value + 1;
      expect(result).toBeCloseTo(expected);
    });

  });

  test('Should transform map function output to a non number value', () => {

    const returnInput: MapNumberFunction = (n) => n;

    const dollarMap = transform(
      returnInput,
      (amount) => `$ ${amount}`,
    );

    const values = [10, 0.5, 2.2, 8];

    values.forEach((value) => {
      const result = dollarMap(value, 0, 0, 0, 0);
      const expected = `$ ${value}`;
      expect(result).toBe(expected);
    });

  });

  test('Should chain transform map function output', () => {

    const returnInput: MapNumberFunction = (n) => n;

    const dollarMap = transform(
      returnInput,
      (amount) => `$ ${amount}`,
    );

    const negativeDollarMap = transform(
      dollarMap,
      (dollar) => `-${dollar}`,
    );

    const values = [10, 0.5, 2.2, 8];

    values.forEach((value) => {
      const result = negativeDollarMap(value, 0, 0, 0, 0);
      const expected = `-$ ${value}`;
      expect(result).toBe(expected);
    });

  });

});
