import {
  compactArray,
  debounce,
  first,
  generateMarkup,
  immutablyDeleteProperty,
  insertInArrIf,
  insertInObjIf,
  last,
  objArrayToKeyedObj,
  objToArray,
  partial,
  pipe,
  range,
  sortByProperty,
  throttle,
  toggleClass
} from '../index'

describe('index', () => {
  it('should export compactArray', () => {
    expect(typeof compactArray).toBe('function')
  })

  it('should export debounce', () => {
    expect(typeof debounce).toBe('function')
  })

  it('should export first', () => {
    expect(typeof first).toBe('function')
  })

  it('should export generateMarkup', () => {
    expect(typeof generateMarkup).toBe('function')
  })

  it('should export immutablyDeleteProperty', () => {
    expect(typeof immutablyDeleteProperty).toBe('function')
  })

  it('should export insertInArrIf', () => {
    expect(typeof insertInArrIf).toBe('function')
  })

  it('should export insertInObjIf', () => {
    expect(typeof insertInObjIf).toBe('function')
  })

  it('should export last', () => {
    expect(typeof last).toBe('function')
  })

  it('should export objArrayToKeyedObj', () => {
    expect(typeof objArrayToKeyedObj).toBe('function')
  })

  it('should export objToArray', () => {
    expect(typeof objToArray).toBe('function')
  })

  it('should export partial', () => {
    expect(typeof partial).toBe('function')
  })

  it('should export pipe', () => {
    expect(typeof pipe).toBe('function')
  })

  it('should export range', () => {
    expect(typeof range).toBe('function')
  })

  it('should export sortByProperty', () => {
    expect(typeof sortByProperty).toBe('function')
  })

  it('should export throttle', () => {
    expect(typeof throttle).toBe('function')
  })

  it('should export debounce', () => {
    expect(typeof debounce).toBe('function')
  })

  it('should export toggleClass', () => {
    expect(typeof toggleClass).toBe('function')
  })
})
