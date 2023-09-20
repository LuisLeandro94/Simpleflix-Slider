"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
var _react = _interopRequireWildcard(require("react"));
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const SliderItem = _ref => {
  var _item$images, _item$trailer, _item$trailer2, _item$trailer3, _item$rating;
  let {
    item
  } = _ref;
  const [hovered, setHovered] = (0, _react.useState)(false);
  const toggleHover = () => setHovered(!hovered);
  return /*#__PURE__*/_react.default.createElement(_styles.ItemContainer, {
    id: "image",
    onMouseEnter: toggleHover,
    onMouseLeave: toggleHover
  }, /*#__PURE__*/_react.default.createElement(_styles.ItemImage, {
    src: item === null || item === void 0 || (_item$images = item.images) === null || _item$images === void 0 || (_item$images = _item$images.jpg) === null || _item$images === void 0 ? void 0 : _item$images.large_image_url,
    className: hovered && item !== null && item !== void 0 && (_item$trailer = item.trailer) !== null && _item$trailer !== void 0 && _item$trailer.embed_url ? 'imgHover' : 'notHover'
  }), /*#__PURE__*/_react.default.createElement(_styles.ItemVideo, {
    className: hovered && item !== null && item !== void 0 && (_item$trailer2 = item.trailer) !== null && _item$trailer2 !== void 0 && _item$trailer2.embed_url ? 'hovered' : ''
  }, /*#__PURE__*/_react.default.createElement("iframe", {
    src: item === null || item === void 0 || (_item$trailer3 = item.trailer) === null || _item$trailer3 === void 0 ? void 0 : _item$trailer3.embed_url,
    title: item === null || item === void 0 ? void 0 : item.title,
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop"
  })), /*#__PURE__*/_react.default.createElement(_styles.ItemDataContainer, null, item === null || item === void 0 ? void 0 : item.title, /*#__PURE__*/_react.default.createElement(_styles.Info, null, /*#__PURE__*/_react.default.createElement(_styles.Score, null, item === null || item === void 0 ? void 0 : item.score, "/10"), /*#__PURE__*/_react.default.createElement(_styles.Rating, null, item === null || item === void 0 || (_item$rating = item.rating) === null || _item$rating === void 0 ? void 0 : _item$rating.replace(/\D/g, '').slice(0, 2), "+"), /*#__PURE__*/_react.default.createElement(_styles.Episodes, null, item === null || item === void 0 ? void 0 : item.episodes, " eps."))));
};
var _default = SliderItem;
exports.default = _default;