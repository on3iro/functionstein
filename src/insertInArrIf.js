// @flow

/**
  * Conditionally inserts a value into an array. To make practical use of this
  * funciton inside an array you have to use the array spread operator on the
  * result.
  * @function insertInArrIf
  * @param {boolean} condition - condition to determine if property should be inserted
  * @param {any} value - value to insert
  * @return {array} either empty or containing the new value
  */
export const insertInArrIf = (
  condition: boolean,
  value: any
): Array<any> => {
  return condition ? [ value ] : []
}
