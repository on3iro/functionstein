import { range } from '../range'

describe('range()', () => {
  it('should create array of numbers in range', () => {
    expect(range(1, 9)).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8 ])
  })

  it('should handle negative numbers', () => {
    expect(range(-3, 4)).toEqual([ -3, -2, -1, 0, 1, 2, 3 ])
  })
}) // end range()
