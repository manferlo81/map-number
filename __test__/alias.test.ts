import { compile, create, wrap, limit, clamp, transform, transformed } from '../src';

describe('alias', () => {

  test('Should export "compile" alias', () => {
    expect(create).toBe(compile);
    expect(wrap).toBe(compile);
  });

  test('Should export "limit" alias', () => {
    expect(clamp).toBe(limit);
  });

  test('Should export "transformed" alias', () => {
    expect(transform).toBe(transformed);
  });

});
