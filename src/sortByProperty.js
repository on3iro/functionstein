// @flow

/**
 * Given an array of objects sorts the array by the given property of
 * each object in either ascending or descending order.
 * @function sortByProperty
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
