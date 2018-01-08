// @flow

/**
  * Converts an array of objects to an object keyed by a specific property,
  * where each key is the value of the property and the value is the actual object.
  * @function objArrayToKeyedObj
  * @param {array} arr - Array containing objects each containing a specific property
  * @param {string} property - Property to key objects by
  * @return {object}
  */
export const objArrayToKeyedObj = (arr: Array<Object>, property: string): Object => arr
  .reduce((acc, obj) => {
    if (!obj) return acc

    return { ...acc, [obj[property]]: obj }
  }, {})
