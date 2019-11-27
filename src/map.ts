import { MapNumberFunction } from './types'

function map(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
  return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}

export default map as MapNumberFunction
