// @flow

/**
  * Eliminates null/undefined values from array (flow compliant)
  * @function compactArray
  * @param {array} arr - Source array
  * @return {array}
  */
// TODO narrow down types (this is quite a hard task =))
export const compactArray = <T>(arr: Array<?T>): Array<T> => {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i]
    if (el !== null && el !== undefined) {
      result.push(el)
    }
  }

  return result
}

export default compactArray
