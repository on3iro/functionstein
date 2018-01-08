import { pipe } from '../pipe'

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
