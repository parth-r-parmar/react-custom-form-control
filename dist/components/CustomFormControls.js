"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectControl = exports.InputControl = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

require("../style/bootstrap.min.css");

const _excluded = ["label", "type", "name", "isValid", "required", "wrap", "className", "wrapperClass", "labelClass"],
      _excluded2 = ["label", "name", "required", "wrap", "wrapperClass", "labelClass", "isValid", "onChange", "options", "value", "placeholder"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const InputControl = props => {
  const {
    label,
    type = "text",
    name,
    isValid = {
      valid: true,
      message: ""
    },
    required,
    wrap,
    className = "",
    wrapperClass = "mt-5",
    labelClass = "font-weight-bolder"
  } = props,
        otherProps = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex row ".concat(wrapperClass)
  }, label && /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-".concat(wrap ? 3 : 12, " col-sm-").concat(wrap ? 3 : 12)
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: name,
    className: labelClass
  }, label, required && /*#__PURE__*/_react.default.createElement("span", {
    className: "text-danger ml-1"
  }, "*"))), type.toLowerCase() === "textarea" ? /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-".concat(wrap ? 9 : 12, " col-sm-").concat(wrap ? 9 : 12)
  }, /*#__PURE__*/_react.default.createElement("textarea", _extends({
    id: name,
    className: "form-control ".concat(className, " ").concat(!isValid.valid ? "is-invalid" : ""),
    name: name
  }, otherProps))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-".concat(wrap ? 9 : 12, " col-sm-").concat(wrap ? 9 : 12)
  }, /*#__PURE__*/_react.default.createElement("input", _extends({
    id: name,
    type: type,
    className: "form-control ".concat(className, " ").concat(!isValid.valid ? "is-invalid" : ""),
    name: name
  }, otherProps))), !isValid.valid && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-".concat(wrap ? 3 : 0, " col-sm-").concat(wrap ? 3 : 0)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-".concat(wrap ? 9 : 12, " col-sm-").concat(wrap ? 9 : 12)
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "text-danger"
  }, isValid.message)))));
};

exports.InputControl = InputControl;

const SelectControl = props => {
  const {
    label,
    name,
    required,
    wrap,
    wrapperClass = "mt-5",
    labelClass = "font-weight-bolder",
    isValid = {
      valid: true,
      message: ""
    },
    onChange: _onChange,
    options,
    value,
    placeholder
  } = props,
        otherProps = _objectWithoutProperties(props, _excluded2);

  var colourStyles = {};

  if (!isValid.valid) {
    colourStyles = {
      control: styles => _objectSpread(_objectSpread({}, styles), {}, {
        borderColor: "#F64E60",
        "&:hover": {
          borderColor: "#F64E60"
        }
      })
    };
  } else {
    colourStyles = {
      control: styles => _objectSpread(_objectSpread({}, styles), {}, {
        borderColor: "#E4E6EF",
        boxShadow: "none",
        "&:hover": {
          borderColor: "#E4E6EF"
        }
      })
    };
  }

  let valueItem = null;

  if (!!value) {
    valueItem = options === null || options === void 0 ? void 0 : options.find(x => x.value === value);
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex row align-items-center ".concat(wrapperClass)
  }, label && /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-".concat(wrap ? 3 : 12, " col-sm-").concat(wrap ? 3 : 12)
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: name,
    className: labelClass
  }, label, required && /*#__PURE__*/_react.default.createElement("span", {
    className: "text-danger ml-1"
  }, "*"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-".concat(wrap ? 9 : 12, " col-sm-").concat(wrap ? 9 : 12)
  }, /*#__PURE__*/_react.default.createElement(_reactSelect.default, _extends({
    placeholder: /*#__PURE__*/_react.default.createElement("div", {
      className: "text-muted"
    }, placeholder !== null && placeholder !== void 0 ? placeholder : "Select...."),
    id: name,
    name: name,
    styles: colourStyles,
    onChange: e => {
      var event = {
        target: {
          name: "",
          value: ""
        }
      };
      event.target.name = name;
      event.target.value = e === null || e === void 0 ? void 0 : e.value;

      _onChange(event);
    },
    options: options,
    value: valueItem,
    menuPlacement: "auto"
  }, otherProps))), !isValid.valid && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-".concat(wrap ? 3 : 0, " col-sm-").concat(wrap ? 3 : 0)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-".concat(wrap ? 9 : 12, " col-sm-").concat(wrap ? 9 : 12)
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "text-danger"
  }, isValid.message)))));
};

exports.SelectControl = SelectControl;