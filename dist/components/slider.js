"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _buttons = require("./buttons");
var _sliderItem = _interopRequireDefault(require("./slider-item"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Slider = _ref => {
  let {
    slidesToShow,
    slides
  } = _ref;
  const [currentImageIndex, setCurrentImageIndex] = (0, _react.useState)(0);
  const prevSlide = () => {
    const resetToVeryBack = currentImageIndex === 0;
    const index = resetToVeryBack ? slides.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(index);
  };
  const nextSlide = () => {
    const resetIndex = currentImageIndex === slides.length - 1;
    const index = resetIndex ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(index);
  };
  const activeImageSourcesFromState = slides.slice(currentImageIndex, currentImageIndex + slidesToShow);
  const imageSourcesToDisplay = activeImageSourcesFromState.length < slidesToShow ? [...activeImageSourcesFromState, ...slides.slice(0, slidesToShow - activeImageSourcesFromState.length)] : activeImageSourcesFromState;
  return /*#__PURE__*/_react.default.createElement(_styles.Wrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, imageSourcesToDisplay.map((item, index) => /*#__PURE__*/_react.default.createElement(_sliderItem.default, {
    key: index,
    item: item
  }))), /*#__PURE__*/_react.default.createElement(_buttons.PrevButton, {
    prevSlide: prevSlide
  }), /*#__PURE__*/_react.default.createElement(_buttons.NextButton, {
    nextSlide: nextSlide
  }));
};
var _default = Slider;
exports.default = _default;