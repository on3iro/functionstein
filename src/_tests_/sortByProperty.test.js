import { sortByProperty } from '../sortByProperty'

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
