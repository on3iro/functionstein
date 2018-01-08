import { immutablyDeleteProperty } from '../immutablyDeleteProperty'

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
