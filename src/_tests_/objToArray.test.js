import { objToArray } from '../objToArray'

describe('objToArray()', () => {
  it('should return an array of object values', () => {
    expect(objToArray({ id: 'TASK0', name: 'Heinrich Kerze' }))
      .toEqual([ 'TASK0', 'Heinrich Kerze' ])
  })
}) // end objToArray()
