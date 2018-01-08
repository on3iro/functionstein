// @flow

/**
  * Toggles the class on a DOM node by a given condition
  * @function toggleClass
  * @param {HTMLElement} node - Domnode to add/remove class to/from
  * @param {string} className - Class to add/remove
  * @param {boolean} condition - Expression that resolves to true/false
  * @return {void}
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
