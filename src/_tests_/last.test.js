import { last } from '../last'

describe('last()', () => {
  it('should return last element of an array', () => {
    expect(last([ 'Heinrich Kerze', 'Zylwira Zergler', 'Jonny Ranch' ]))
      .toBe('Jonny Ranch')
  })
}) // end last()
