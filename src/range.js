// @flow

/**
  * Creates an array containing a range of numbers.
  * @function range
  * @param {number} start - First number of the range, array index 0
  * @param {number} end - Endindex, not included inside the resulting array
  * @return {array} array of numbers
  * @example
  * range(2, 6) // => [2, 3, 4, 5]
  */
export const range = (start: number, end: number): Array<number> => {
  return Array.from({length: (end - start)}, (v, k) => k + start)
}
