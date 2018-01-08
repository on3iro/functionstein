import { compactArray } from '../compactArray'

describe('compactArray()', () => {
  it('should remove undefined and null values', () => {
    expect(compactArray([ 1, null, 2, 3, undefined, 4 ]))
      .toEqual([ 1, 2, 3, 4 ])
  })
}) // end compactArray()
