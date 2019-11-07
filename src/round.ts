import map from './map'

function round(num: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  return Math.round(
    map(num, inMin, inMax, outMin, outMax),
  )
}

export default round
