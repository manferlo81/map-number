import map from './map'
import { max, min } from './math'

function limit(num: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  return max(
    min(
      outMin,
      outMax,
    ),
    min(
      max(
        outMin,
        outMax,
      ),
      map(num, inMin, inMax, outMin, outMax),
    ),
  )
}

export default limit
