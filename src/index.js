// @flow

/**
 * Given a string containing markup renders the markup into a
 * React component. This needs to be called inside the
 * 'dangerouslySetInnerHTML' prop to work.
 * @param {string} markup - String containing HTML
 * @return {object} Object which is transformed to innerHTML by
 * dangerouslySetInnerHTML
  */
export const generateMarkup = (markup: string): Object => {
  return {
    __html: markup
  }
}

/**
 * Given an array of objects sorts the array by the given property of
 * each object in either ascending or descending order.
 * @param {string} property - Property to sort by
 * @param {number} order - Should be either 1 or -1
 * @param {array} list - list of objects to sort
 * @return {array} Sorted list
  */
export const sortByProperty = (
  property: string,
  order: number,
  list: Array<Object>
): Array<Object> => list.sort((a, b) => {
  const aHasProperty = typeof a[property] !== 'undefined'
  const bHasProperty = typeof b[property] !== 'undefined'

  const aIsSmaller = a[property] < b[property]
  if (
    aIsSmaller ||
    (aHasProperty && !bHasProperty)
) return -order

  const aIsLarger = a[property] > b[property]
  if (
    aIsLarger ||
    (!aHasProperty && bHasProperty)
  ) return order

  return 0
})

/**
 * Pipes the output of functions as arguments into the next function
 * (from left to right).
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

/**
  * Creates an array containing a range of numbers.
  * @param {number} start - First number of the range, array index 0
  * @param {number} end - Endindex, not included inside the resulting array
  * @return {array} array of numbers
  * @example
  * range(2, 6) // => [2, 3, 4, 5]
  */
export const range = (start: number, end: number): Array<number> => {
  return Array.from({length: (end - start)}, (v, k) => k + start)
}

/**
  * Returns the first element of an array
  * @param {array} arr - Array
  * @return {element} First element of the array
  */
export const first = <T>(arr: Array<T>): T => arr[0]

/**
  * Returns the last element of an array
  * @param {array} arr - Array
  * @return {element} Last element of the array
  */
export const last = <T>(arr: Array<T>): T => first(arr.slice(-1))

/**
  * Toggles the class on a DOM node by a given condition
  * @param {Node} node - Domnode to add/remove class to/from
  * @param {string} className - Class to add/remove
  * @param {bool} condition - Expression that resolves to true/false
  * @return {undefined}
  */
export const toggleClass = (
  node: HTMLElement,
  className: string,
  condition: boolean
): void => {
  condition
    ? node.classList.add(className)
    : node.classList.remove(className)
}

/**
  * Function partially apply arguments to a function. (Left to right)
  * @param {function} fn - Function to apply to.
  * @param {array} ...args - Arguments to apply
  * @return {function} Partially applied function
  */
export const partial = (fn: Function, ...args: Array<mixed>): Function => {
  return (...otherArgs) => {
    return fn(...args, ...otherArgs)
  }
}

/**
  * Converts an object to an array of its values. This is basically the same
  * as Object.values(). The latter sometimes has some unintended effects on
  * flow, which is why we currently fallback to this helper.
  * @param {Object} obj - Object to convert
  * @return {Array} Array of values
  */
export const objToArray = (obj: Object): Array<*> => Object.keys(obj).map(k => obj[k])

/**
  * Converts an array of objects to an object keyed by a specific property,
  * where each key is the value of the property and the value is the actual object.
  * @param {Array} arr - Array containing objects each containing a specific property
  * @param {String} property - Property to key objects by
  * @return {Object}
  */
export const objArrayToKeyedObj = (arr: Array<Object>, property: string): Object => arr
  .reduce((acc, obj) => {
    if (!obj) return acc

    return { ...acc, [obj[property]]: obj }
  }, {})

/**
  * Eliminates null/undefined values from array (flow compliant)
  * @param {Array} arr - Source array
  * @return {Array}
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

/**
  * Conditionally inserts a key-value pair into an object. To make practical
  * use of this function inside an object you have to use the object spread
  * operator on the result
  */
export const insertInObjIf = (
  condition: boolean,
  property: string,
  value: any
): Object => {
  return condition ? { [property]: value } : {}
}

/**
  * Conditionally inserts a value into an array. To make practical use of this
  * funciton inside an array you have to use the array spread operator on the
  * result.
  */
export const insertInArrIf = (
  condition: boolean,
  value: any
): Array<any> => {
  return condition ? [ value ] : []
}
