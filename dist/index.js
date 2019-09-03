"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.styledReset = void 0;

var _styledComponents = require("styled-components");

var _reset = _interopRequireDefault(require("./reset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styledReset = (0, _styledComponents.css)(_templateObject(), _reset["default"]);
exports.styledReset = styledReset;
var _default = styledReset;
exports["default"] = _default;