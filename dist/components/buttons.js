"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrevButton = exports.NextButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PrevButton = _ref => {
  let {
    prevSlide
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_styles.ButtonPrev, {
    onClick: prevSlide
  }, /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ButtonSvg, {
    viewBox: "137.718 -1.001 366.563 644"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"
  }))));
};
exports.PrevButton = PrevButton;
const NextButton = _ref2 => {
  let {
    nextSlide
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(_styles.ButtonNext, {
    onClick: nextSlide
  }, /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ButtonSvg, {
    viewBox: "0 0 238.003 238.003"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"
  }))));
};
exports.NextButton = NextButton;