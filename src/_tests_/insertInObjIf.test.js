import { insertInObjIf } from '../insertInObjIf'

describe('insertInObjIf', () => {
  it('should return spreadable object with property only if condition is true', () => {
    expect(insertInObjIf(true, 'id', 'user1')).toEqual({ id: 'user1' })
    expect(insertInObjIf(false, 'id', 'user1')).toEqual({})
  })
}) // end insertInObjIf()
