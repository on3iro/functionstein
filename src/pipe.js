// @flow

/**
 * Pipes the output of functions as arguments into the next function
 * (from left to right).
 * @function pipe
 * @example
 * const splitString = str => str.split('')
 * const getLength = arr => arr.length
 * pipe(splitString, getLength)('Hello world') // => 11
 *
 * @param {function} f1 - first function to call
 * @param {array} ...fns - Additional functions to pipe through
 * @return {function} Composed function
  */
export const pipe = (f1: Function, ...fns: Array<Function>): Function =>
  (...args: Array<mixed>): Function => {
    return fns.reduce((res, fn) => fn(res), f1.apply(null, args))
  }
