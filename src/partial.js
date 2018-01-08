// @flow

/**
  * Function partially apply arguments to a function. (Left to right)
  * @function partial
  * @param {function} fn - Function to apply to.
  * @param {array} ...args - Arguments to apply
  * @return {function} Partially applied function
  */
export const partial = (fn: Function, ...args: Array<mixed>): Function => {
  return (...otherArgs) => {
    return fn(...args, ...otherArgs)
  }
}
