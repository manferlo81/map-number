import { compile, create, wrap, limit, clamp } from '../src'

describe('alias', () => {

  test('should export compile alias', () => {
    expect(create).toBe(compile)
    expect(wrap).toBe(compile)
  })

  test('should export limit alias', () => {
    expect(clamp).toBe(limit)
  })

})
