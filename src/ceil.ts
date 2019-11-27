import map from './map'
import { MapNumberFunction } from './types'

function ceil(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
  return Math.ceil(
    map(num, inMin, inMax, outMin, outMax),
  )
}

export default ceil as MapNumberFunction
