// @flow

/**
 * Makes sure that a given function is only called once in a specified
 * timeframe.
 * @function throttle
 * @param {function} fn - Function to call after timeout
 * @param {number} time - Timeout in ms
 * @param {object} context - Useful for throttling object methods
 * @return {function} Throttled function
  */
export const throttle = (fn: Function, time: number, context: Object = this): Function => {
  let timeout
  let callbackArgs

  const callback = () => {
    fn.apply(context, callbackArgs)
    clearTimeout(timeout)
    timeout = undefined
  }

  // Has to be a 'real' function, not an arrow function, to preserve
  // context of 'this'
  return function (...args: Array<mixed>) {
    if (timeout) return

    callbackArgs = args
    timeout = setTimeout(callback, time)
  }
}
