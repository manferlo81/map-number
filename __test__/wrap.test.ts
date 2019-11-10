import { map, wrap } from '../src'

describe('wrap method', () => {

  test('should return the correct output', () => {

    const boundaries: [number, number, number, number] = [2, 5, 20, 50]
    const myMap = wrap(map, ...boundaries)

    const nums = [3.3, 0.01, 10]

    nums.forEach((num) => {
      const myMapResult = myMap(num)
      const mapResult = map(num, ...boundaries)
      expect(myMapResult).toBe(mapResult)
    })

  })

})
