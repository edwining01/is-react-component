
/**
 * Reference:
 *   @link {https://stackoverflow.com/a/41658173}
 */

var isValidElement = require('react').isValidElement
var FUNCTION = "function"
var STRING = "string"
var PROTOTYPE = "prototype"

function isReactComponent(component) {
  return typeof component === FUNCTION
}

function isClassComponent(component) {
  return isReactComponent(component) &&
    component.hasOwnProperty(PROTOTYPE) &&
    component.prototype.isReactComponent
}

function isFunctionComponent(component) {
  return isReactComponent(component) && !component.hasOwnProperty(PROTOTYPE)
}

function isDOMTypeElement(element) {
  return isValidElement(element) && typeof element.type === STRING
}

function isCompositeTypeElement(element) {
  return isValidElement(element) && typeof element.type === FUNCTION
}

var exports = {
  isClassComponent,
  isFunctionComponent,
  
  isReactComponent,
  isComponent: isReactComponent,
  
  isDOMTypeElement,
  isCompositeTypeElement,
  
  isValidElement,
  isElement: isValidElement,
}
exports.default = exports
Object.freeze && Object.freeze(exports)

module.exports = exports
