// @flow

/**
  * Conditionally inserts a key-value pair into an object. To make practical
  * use of this function inside an object you have to use the object spread
  * operator on the result
  * @function insertInObjIf
  * @param {boolean} condition - condition to determine if property should be inserted
  * @param {string} property - property to insert
  * @param {any} value - property value
  * @return {object} new object either empty or containing the inserted property only
  */
export const insertInObjIf = (
  condition: boolean,
  property: string,
  value: any
): Object => {
  return condition ? { [property]: value } : {}
}
