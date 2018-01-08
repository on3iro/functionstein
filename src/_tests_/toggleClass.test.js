import { toggleClass } from '../toggleClass'

describe('toggleClass()', () => {
  const setUp = (nodeOw, className = 'any-class', condition = true) => {
    const add = jest.fn()
    const remove = jest.fn()

    const node = {
      classList: {
        add,
        remove
      },
      ...nodeOw
    }

    toggleClass(node, className, condition)

    return {
      add,
      remove,
      className
    }
  }

  it('should call node.classList.add() with className if condition is true', () => {
    const { add, remove, className } = setUp()

    expect(add).toHaveBeenCalledWith(className)
    expect(remove).toHaveBeenCalledTimes(0)
  })

  it('should call node.classList.remove() with className if condition is false', () => {
    const { add, remove, className } = setUp(null, 'any-class', false)

    expect(remove).toHaveBeenCalledWith(className)
    expect(add).toHaveBeenCalledTimes(0)
  })
})
