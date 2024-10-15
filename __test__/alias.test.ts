import { clamp, compile, create, limit, transform, transformed, wrap } from '../src';

describe('alias', () => {

  test('Should export "compile" function aliases', () => {
    expect(create).toBe(compile);
    expect(wrap).toBe(compile);
  });

  test('Should export "limit" function alias', () => {
    expect(clamp).toBe(limit);
  });

  test('Should export "transformed" function alias', () => {
    expect(transform).toBe(transformed);
  });

});
