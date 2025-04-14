import * as map from '../src';

describe('exports', () => {

  test('Should export functions', () => {
    expect(map).toEqual<Record<keyof typeof map, unknown>>({
      map: expect.any(Function),

      transform: expect.any(Function),
      transformed: expect.any(Function),

      ceil: expect.any(Function),
      floor: expect.any(Function),
      round: expect.any(Function),

      limit: expect.any(Function),
      clamp: expect.any(Function),

      compile: expect.any(Function),
      create: expect.any(Function),
      wrap: expect.any(Function),
    });
  });

});
