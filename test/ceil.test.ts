import { ceil } from '../src'

describe('ceil method', () => {

  test('should return in-range output', () => {

    expect(
      ceil(23, 20, 50, 2, 5),
    ).toBe(
      3,
    )

  })

  test('should return out-range output', () => {

    expect(
      ceil(6, 20, 50, 2, 5),
    ).toBe(
      1,
    )

    expect(
      ceil(62, 20, 50, 2, 5),
    ).toBe(
      7,
    )

  })

  test('should invert in-range output', () => {

    expect(
      ceil(3.1, 1, 9, 9, 1),
    ).toBe(
      7,
    )

  })

  test('should invert out-range output', () => {

    expect(
      ceil(-1.3, 1, 9, 9, 1),
    ).toBe(
      12,
    )

  })

})
