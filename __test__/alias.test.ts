import { compile, create, wrap, limit, clamp } from '../src';

describe('alias', () => {

  test('Should export compile alias', () => {
    expect(create).toBe(compile);
    expect(wrap).toBe(compile);
  });

  test('Should export limit alias', () => {
    expect(clamp).toBe(limit);
  });

});
