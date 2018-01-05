import {
  compactArray,
  first,
  generateMarkup,
  insertInObjIf,
  insertInArrIf,
  last,
  objArrayToKeyedObj,
  objToArray,
  partial,
  pipe,
  range,
  sortByProperty,
  immutablyDeleteProperty
} from '../index'

describe('generateMarkup()', () => {
  it('should return wrapped object', () => {
    expect(generateMarkup('myHtml')).toEqual({
      __html: 'myHtml'
    })
  })
}) // end generateMarkup()

describe('sortByProperty()', () => {
  it('should sort elements correctly if every object contains the specified property', () => {
    const result = sortByProperty('name', 1, [
      { name: 'Heinrich' },
      { name: 'Arthur' },
      { name: 'Jonny' }
    ])

    expect(result).toEqual([
      { name: 'Arthur' },
      { name: 'Heinrich' },
      { name: 'Jonny' }
    ])
  })

  it('should sort elements correctly if some objects are missing the specified property (put to end of array)', () => {
    const result = sortByProperty('name', 1, [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: '4', name: 'Heinrich' },
      { id: '5', name: 'Arthur' },
      { id: '6', name: 'Jonny' }
    ])

    expect(result).toEqual([
      { id: '5', name: 'Arthur' },
      { id: '4', name: 'Heinrich' },
      { id: '6', name: 'Jonny' },
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ])
  })
}) // end sortByProperty()

describe('pipe()', () => {
  it('should combine multiple functions into one', () => {
    const add = (a, b) => a + b
    const stringify = (num) => num.toString()

    const stringifySum = pipe(
      add,
      stringify
    )

    expect(stringifySum(4, 4)).toBe('8')
  })
}) // end pipe()

describe('range()', () => {
  it('should create array of numbers in range', () => {
    expect(range(1, 9)).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8 ])
  })

  it('should handle negative numbers', () => {
    expect(range(-3, 4)).toEqual([ -3, -2, -1, 0, 1, 2, 3 ])
  })
}) // end range()

describe('first()', () => {
  it('should return first element of an array', () => {
    expect(first([ 'Heinrich Kerze', 'Jonny Ranch' ])).toBe('Heinrich Kerze')
  })
}) // end first()

describe('last()', () => {
  it('should return last element of an array', () => {
    expect(last([ 'Heinrich Kerze', 'Zylwira Zergler', 'Jonny Ranch' ]))
      .toBe('Jonny Ranch')
  })
}) // end last()

describe('partial()', () => {
  it('should partially apply argument and return function expecting on less arg', () => {
    const add = (a, b) => a + b
    const addEight = partial(add, 8)

    expect(addEight(4)).toBe(12)
    expect(addEight(-2)).toBe(6)
  })
}) // end partial()

describe('objToArray()', () => {
  it('should return an array of object values', () => {
    expect(objToArray({ id: 'TASK0', name: 'Heinrich Kerze' }))
      .toEqual([ 'TASK0', 'Heinrich Kerze' ])
  })
}) // end objToArray()

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

describe('compactArray()', () => {
  it('should remove undefined and null values', () => {
    expect(compactArray([ 1, null, 2, 3, undefined, 4 ]))
      .toEqual([ 1, 2, 3, 4 ])
  })
}) // end compactArray()

describe('insertInObjIf', () => {
  it('should return spreadable object with property only if condition is true', () => {
    expect(insertInObjIf(true, 'id', 'user1')).toEqual({ id: 'user1' })
    expect(insertInObjIf(false, 'id', 'user1')).toEqual({})
  })
}) // end insertInObjIf()

describe('insertInArrIf()', () => {
  it('should return spreadable array with value only if condition is true', () => {
    expect(insertInArrIf(true, 'user1')).toEqual([ 'user1' ])
    expect(insertInArrIf(false, 'user1')).toEqual([])
  })
}) // end insertInArrIf()

describe('immutablyDeleteProperty()', () => {
  const obj = {
    id: '1',
    name: 'Heinrich Kerze'
  }

  it('should return object without deleted property', () => {
    const result = immutablyDeleteProperty(obj, 'name')

    expect(result).toEqual({ id: '1' })
  })

  it('should return initial object if property can\'t be found ', () => {
    const result = immutablyDeleteProperty(obj, 'address')

    expect(result).toEqual(obj)
  })
}) // end immutablyDeleteProperty()
