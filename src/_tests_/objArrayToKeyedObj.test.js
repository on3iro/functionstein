import { objArrayToKeyedObj } from 'objArrayToKeyedObj'

describe('objArrayToKeyedObj()', () => {
  it('should transform an array of objects into an object containing these objects by a respective key', () => {
    expect(objArrayToKeyedObj([
      { id: 'user0', name: 'Heinrich Kerze' },
      { id: 'user1', name: 'Jonny Ranch' }
    ], 'id')).toEqual({
      'user0': { id: 'user0', name: 'Heinrich Kerze' },
      'user1': { id: 'user1', name: 'Jonny Ranch' }
    })
  })
}) // end objArrayToKeyedObj()
