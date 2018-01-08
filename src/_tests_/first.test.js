import { first } from '../first'

describe('first()', () => {
  it('should return first element of an array', () => {
    expect(first([ 'Heinrich Kerze', 'Jonny Ranch' ])).toBe('Heinrich Kerze')
  })
}) // end first()
