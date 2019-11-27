import map from './map'
import { MapNumberFunction } from './types'

function floor(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
  return Math.floor(
    map(num, inMin, inMax, outMin, outMax),
  )
}

export default floor as MapNumberFunction
