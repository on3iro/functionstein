import { partial } from '../partial'

describe('partial()', () => {
  it('should partially apply argument and return function expecting on less arg', () => {
    const add = (a, b) => a + b
    const addEight = partial(add, 8)

    expect(addEight(4)).toBe(12)
    expect(addEight(-2)).toBe(6)
  })
}) // end partial()
