// @flow

import { first } from './first'

/**
  * Returns the last element of an array
  * @function last
  * @param {array} arr - Array
  * @return {element} Last element of the array
  */
export const last = <T>(arr: Array<T>): T => first(arr.slice(-1))
