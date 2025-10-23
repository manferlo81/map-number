import { compile, map } from '../../src';

describe('"compile" function', () => {

  test('Should return the correct output', () => {

    const boundaries: [number, number, number, number] = [2, 5, 20, 50];
    const compiled = compile(map, ...boundaries);

    const values = [
      3.3,
      0.01,
      10,
    ];

    values.forEach((value) => {
      const valueFromCompiled = compiled(value);
      const valueFromMapFunction = map(value, ...boundaries);
      expect(valueFromCompiled).toBe(valueFromMapFunction);
    });

  });

});
