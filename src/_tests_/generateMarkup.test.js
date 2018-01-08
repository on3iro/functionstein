import { generateMarkup } from '../generateMarkup'

describe('generateMarkup()', () => {
  it('should return wrapped object', () => {
    expect(generateMarkup('myHtml')).toEqual({
      __html: 'myHtml'
    })
  })
}) // end generateMarkup()
