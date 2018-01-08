import { insertInArrIf } from 'insertInArrIf'

describe('insertInArrIf()', () => {
  it('should return spreadable array with value only if condition is true', () => {
    expect(insertInArrIf(true, 'user1')).toEqual([ 'user1' ])
    expect(insertInArrIf(false, 'user1')).toEqual([])
  })
}) // end insertInArrIf()
