
/**
 * Reference:
 *   @link {https://stackoverflow.com/a/41658173}
 */

var isValidElement = require('react').isValidElement
var FUNCTION = "function"
var STRING = "string"
var FUNCOMP2STR = "return React.createElement"

function isClassComponent(component) {
  return typeof component == FUNCTION && component.prototype.isReactComponent
}

function isFunctionComponent(component) {
  return typeof component == FUNCTION && String(component).includes(FUNCOMP2STR)
}

function isReactComponent(component) {
  return isClassComponent(component) || isFunctionComponent(component)
}

function isDOMTypeElement(element) {
  return isValidElement(element) && typeof element.type == STRING
}

function isCompositeTypeElement(element) {
  return isValidElement(element) && typeof element.type == FUNCTION
}

var exports = {
  isClassComponent,
  isFunctionComponent,
  isReactComponent,
  isDOMTypeElement,
  isCompositeTypeElement,
  isCompositeTypeElement,
  isReactComponent: isValidElement,
  isValidElement,
}
exports.default = exports
module.exports = exports
