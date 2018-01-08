// @flow

/**
 *  Removes a property from an object and returns a new object. The original
 *  object is not altered.
  * @function immutablyDeleteProperty
  * @param {object} obj - Object to delete property from
  * @param {string} property - property to delete
  * @return {object} new object without the specified property
  */
export const immutablyDeleteProperty = (obj: Object, property: string): Object => {
  return Object.keys(obj)
    .filter(k => k !== property)
    .reduce((acc, k) => {
      return { ...acc, [k]: obj[k] }
    }, {})
}
