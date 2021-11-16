"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.parse-int.js");

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _reactQuill = _interopRequireDefault(require("react-quill"));

require("react-quill/dist/quill.snow.css");

require("../index.scss");

var _CustomFormControls = require("./CustomFormControls");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Sticky = () => {
  const defaultSticky = {
    id: Date.now(),
    title: "",
    content: ""
  };
  const [stickies, setStickies] = (0, _react.useState)([{
    id: 1,
    title: "First sticky",
    content: ""
  }, {
    id: 2,
    title: "",
    content: ""
  }]); // console.log(stickies);

  const addSticky = () => {
    // if (stickies.length < 5)
    setStickies(prev => [...prev, defaultSticky]);
  };

  const removeSticky = id => {
    setStickies(stickies.filter(item => parseInt(item.id) !== parseInt(id)));
  };

  const modules = {
    toolbar: [["bold", "italic", "underline", "image"]]
  };
  const formats = ["bold", "italic", "underline", "strike", "link", "image"];

  const changeHandler = (event, field, delta) => {
    if (field === "title") {
      setStickies(stickies.map(item => "title" + item.id === event.target.name ? _objectSpread(_objectSpread({}, item), {}, {
        title: event.target.value
      }) : item));
    } else {
      setStickies(stickies.map(item => item.id === field ? _objectSpread(_objectSpread({}, item), {}, {
        content: event
      }) : item));
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex align-items-center border-bottom pb-2 h3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-100"
  }, "Sticky"), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex",
    role: "button",
    onClick: addSticky
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-plus fa-lg"
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    style: {
      overflowY: "scroll"
    },
    className: "custom-scrollbar"
  }, stickies === null || stickies === void 0 ? void 0 : stickies.map(item => /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    xl: 6,
    lg: 6,
    md: 6,
    sm: 6,
    xs: 12,
    key: item.id,
    className: "my-5"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card, {
    className: "px-3 pt-3 shadow rounded sticky-yellow"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: addSticky,
    className: "d-flex",
    role: "button"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-plus text-dark"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-100 mx-4"
  }, /*#__PURE__*/_react.default.createElement(_CustomFormControls.InputControl, {
    name: "title" + item.id,
    onChange: event => changeHandler(event, "title"),
    placeholder: "add title",
    value: item.title,
    className: "border-0 sticky-yellow dark-placeholder p-0",
    wrapperClass: "",
    style: {
      // padding: "0",
      height: "fit-content",
      overflow: "hidden",
      borderRadius: "0"
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => removeSticky(item.id),
    className: "d-flex",
    role: "button"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-times text-dark"
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    lg: 12,
    xl: 12
  }, /*#__PURE__*/_react.default.createElement(_reactQuill.default, {
    theme: "snow",
    modules: modules,
    formats: formats,
    value: item.content,
    onChange: (content, delta) => {
      changeHandler(content, item.id, delta);
    },
    placeholder: "Type here..."
  }))))))));
};

var _default = Sticky;
exports.default = _default;