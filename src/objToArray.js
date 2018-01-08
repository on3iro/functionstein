// @flow

/**
  * Converts an object to an array of its values. This is basically the same
  * as Object.values(). The latter sometimes has some unintended effects on
  * flow, which is why we currently fallback to this helper.
  * @function objToArray
  * @param {object} obj - Object to convert
  * @return {array} Array of values
  */
export const objToArray = (obj: Object): Array<*> => Object.keys(obj).map(k => obj[k])
