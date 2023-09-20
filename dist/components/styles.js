"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sharedButtonStyles = exports.Wrapper = exports.Score = exports.Right = exports.Rating = exports.Left = exports.ItemVideo = exports.ItemImage = exports.ItemDataContainer = exports.ItemContainer = exports.Info = exports.Episodes = exports.ContentContainer = exports.Content = exports.Container = exports.ButtonWrapper = exports.ButtonSvg = exports.ButtonPrev = exports.ButtonNext = exports.Background = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _colors = require("./_colors");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const ItemDataContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: none;\n  background-color: ", ";\n  color: ", ";\n  width: 100%;\n  height: fit-content;\n  padding: 1vh;\n  box-sizing: border-box;\n  transition: opacity 300ms ease-out, border-radius 200ms ease-out;\n  font-family: 'Netflix Sans', sans-serif;\n  border-radius: 0 0 2% 2%;\n"])), _colors.GrayOne, _colors.White);
exports.ItemDataContainer = ItemDataContainer;
const ItemImage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  transition: transform 0.5s ease;\n  border-radius: 2% 2% 0 0;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  background-size: cover !important;\n  background: ", ";\n  background-position: center !important;\n"])), _ref => {
  let {
    src
  } = _ref;
  return "url(".concat(src, ")");
});
exports.ItemImage = ItemImage;
const ItemVideo = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  transition: transform 0.5s ease;\n  border-radius: 2% 2% 0 0;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  background-size: cover !important;\n  background-position: center !important;\n  display: none;\n"])));
exports.ItemVideo = ItemVideo;
const Content = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-top: 40px;\n  height: 300px;\n  position: relative;\n"])));
exports.Content = Content;
const Background = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  height: 100%;\n"])));
exports.Background = Background;
const Left = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background: black;\n  width: 30%;\n  position: relative;\n\n  &:before {\n    content: '';\n    position: absolute;\n    background-image: linear-gradient(to right, #000, transparent);\n    top: 0;\n    bottom: 0;\n    left: 100%;\n    width: 275px;\n  }\n"])));
exports.Left = Left;
const Right = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background: green;\n  width: 70%;\n"])));
exports.Right = Right;
const ContentContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  color: white;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 30px;\n"])));
exports.ContentContainer = ContentContainer;
const ItemContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 20vw;\n  height: 20vh;\n  margin: 0 0.2vw;\n  z-index: 1;\n  transition: transform 100ms ease-out, border-radius 200ms ease-out;\n\n  &:hover {\n    border: 2%;\n    transform: scale(1.5) !important;\n    box-shadow: 0 0 2px #000a;\n\n    ", " {\n      display: block;\n    }\n  }\n"])), ItemDataContainer);
exports.ItemContainer = ItemContainer;
const Wrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: relative;\n  max-height: 20vh;\n"])));
exports.Wrapper = Wrapper;
const Container = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  max-height: 20vh;\n  margin: 0 10vh;\n\n  .hovered {\n    display: block;\n\n    iframe {\n      border: none;\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .imgHover {\n    display: none;\n  }\n\n  .notHover {\n    display: block;\n  }\n\n  &:hover ", " {\n    transform: translateX(-25%);\n  }\n\n  ", ":hover ~ ", " {\n    transform: translateX(25%);\n  }\n\n  ", ":hover {\n    transform: translate(0);\n  }\n"])), ItemContainer, ItemContainer, ItemContainer, ItemContainer);
exports.Container = Container;
const sharedButtonStyles = (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  transform: translateY(-50%);\n  border: 0;\n  width: 6rem;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  max-height: 20vh;\n\n  &:not(:disabled) {\n    cursor: pointer;\n    fill: #1bcacd;\n  }\n\n  &:disabled {\n    fill: #e9e9e9;\n  }\n"])));
exports.sharedButtonStyles = sharedButtonStyles;
const ButtonPrev = _styledComponents.default.button(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  ", "\n  left: 0;\n  cursor: pointer;\n"])), sharedButtonStyles);
exports.ButtonPrev = ButtonPrev;
const ButtonSvg = _styledComponents.default.svg(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 1.5rem;\n  height: 1.5rem;\n"])));
exports.ButtonSvg = ButtonSvg;
const ButtonWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  background-color: rgba(0, 0, 0, 0.2);\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n"])));
exports.ButtonWrapper = ButtonWrapper;
const ButtonNext = _styledComponents.default.button(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  ", "\n  right: 0;\n  cursor: pointer;\n"])), sharedButtonStyles);
exports.ButtonNext = ButtonNext;
const Info = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  font-size: 8px;\n  margin-top: 12px;\n"])));
exports.Info = Info;
const Score = _styledComponents.default.span(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  color: green;\n  padding: 1px 2px;\n  font-weight: bold;\n"])));
exports.Score = Score;
const Rating = _styledComponents.default.span(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  border: 0.1px solid ", ";\n  padding: 1px 2px;\n  color: ", ";\n"])), _colors.White, _colors.White);
exports.Rating = Rating;
const Episodes = _styledComponents.default.span(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  color: ", ";\n  padding: 1px 2px;\n"])), _colors.White);
exports.Episodes = Episodes;