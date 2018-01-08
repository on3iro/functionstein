// @flow

/**
 * Given a string containing markup renders the markup into a
 * React component. This needs to be called inside the
 * 'dangerouslySetInnerHTML' prop to work.
 * @function generateMarkup
 * @param {string} markup - String containing HTML
 * @return {object} Object which is transformed to innerHTML by
 * dangerouslySetInnerHTML
  */
export const generateMarkup = (markup: string): Object => {
  return {
    __html: markup
  }
}
