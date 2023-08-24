import { replaceTokens, useClickOutside, classNames as classNames$1, styles } from '@blueprint-blocks/utility';
import { __ } from '@wordpress/i18n';
import { ToolbarGroup, ToolbarButton, ColorPalette, GradientPicker, Button, withNotices, SelectControl, TextareaControl, PanelBody } from '@wordpress/components';
import { useBlockProps, InnerBlocks, RichText, MediaPlaceholder, MediaUpload, InspectorControls, BlockControls } from '@wordpress/block-editor';
import classNames from 'classnames';
import { createRef, useState } from '@wordpress/element';
import memoize from 'micro-memoize';

var e = [],
  t = [];
function n(n, r) {
  if (n && "undefined" != typeof document) {
    var a,
      s = !0 === r.prepend ? "prepend" : "append",
      d = !0 === r.singleTag,
      i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];
    if (d) {
      var u = e.indexOf(i);
      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
    } else a = c();
    65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
  }
  function c() {
    var e = document.createElement("style");
    if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
    var a = "prepend" === s ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a, e), e;
  }
}

var css$i = ":root {\n  --blueprint-blocks-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  --blueprint-blocks-border: 1px solid var(--blueprint-blocks-color-gray);\n  --blueprint-blocks-border-radius: 2px;\n  --blueprint-blocks-color: #2c3338;\n  --blueprint-blocks-color-accent: var(--wp-components-color-accent, var(--wp-admin-theme-color, #007cba));\n  --blueprint-blocks-color-gray: #949494;\n  --blueprint-blocks-color-light-gray: var(--wp-components-color-gray-300, #ddd);\n  --blueprint-blocks-color-lightest-gray: #e6eaf0;\n  --blueprint-blocks-color-white: #fff;\n  --blueprint-blocks-font-size: 13px;\n}";
n(css$i,{});

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var css$h = ".components-toolbar-group .components-button.blueprint-blocks\\:toolbar-field-button[subscript],\n.components-toolbar-group .components-button.has-icon.blueprint-blocks\\:toolbar-field-button[subscript] {\n  padding-right: 16px;\n}\n\n.components-toolbar-group .components-button.blueprint-blocks\\:toolbar-field-button[subscript]::after,\n.components-toolbar-group .components-button.has-icon.blueprint-blocks\\:toolbar-field-button[subscript]::after {\n  bottom: calc(50% - 9px);\n  content: attr(subscript);\n  font-size: 12px;\n  font-weight: bold;\n  left: calc(100% - 17px);\n  line-height: 12px;\n  position: absolute;\n  transform: translateX(-50%);\n}";
n(css$h,{});

var _excluded$Z = ["onInput", "options", "multiple", "disabled", "value"],
  _excluded2$4 = ["icon", "subscript", "label"];
function edit$t(_ref) {
  var onInput = _ref.onInput,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options;
    _ref.multiple;
    _ref.disabled;
    var value = _ref.value;
    _objectWithoutProperties(_ref, _excluded$Z);
  return /*#__PURE__*/React.createElement(ToolbarGroup, {
    className: classNames('blueprint-blocks:toolbar-field')
  }, options.map(function (_ref2) {
    var icon = _ref2.icon,
      subscript = _ref2.subscript,
      label = _ref2.label,
      option = _objectWithoutProperties(_ref2, _excluded2$4);
    return /*#__PURE__*/React.createElement(ToolbarButton, {
      icon: icon || /*#__PURE__*/React.createElement("div", {
        className: "label"
      }, label),
      subscript: subscript,
      className: "blueprint-blocks:toolbar-field-button",
      title: label,
      isActive: option.value === value,
      onClick: function onClick() {
        return onInput(option.value);
      }
    });
  }));
}

var getFieldClassNames = memoize(function (_ref) {
  var blockName = _ref.blockName,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? '' : _ref$type,
    name = _ref.name,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value;
  return classNames(_defineProperty({}, "block:".concat(name), name === null || name === void 0 ? void 0 : name.length), _defineProperty({}, "".concat(blockName, ":").concat(name), name === null || name === void 0 ? void 0 : name.length), 'blueprint-blocks:component', 'blueprint-blocks:field', "blueprint-blocks:".concat(type, "-field"), {
    'has-value': value
  });
});

var css$g = ".components-panel__body .blueprint-blocks\\:field {\n  margin: 0 0 16px;\n}\n\n.components-panel__body .blueprint-blocks\\:field:last-child {\n  margin-bottom: 0;\n}\n\n.blueprint-blocks\\:field-label {\n  margin-bottom: 8px;\n}";
n(css$g,{});

var _excluded$Y = ["attributes", "blockName", "name", "attributeName", "children", "dangerouslySetInnerHTML", "innerHtml", "className", "label", "tagName", "type", "onInput"];
var selfClosingTagNames$1 = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
function preventEventPropagation(event) {
  event.stopPropagation();
  event.nativeEvent.stopPropagation();
  event.nativeEvent.stopImmediatePropagation();
}
function edit$s(_ref) {
  var _props3;
  var _ref$attributes = _ref.attributes,
    attributes = _ref$attributes === void 0 ? {} : _ref$attributes,
    blockName = _ref.blockName,
    name = _ref.name;
    _ref.attributeName;
    var _ref$children = _ref.children,
    children = _ref$children === void 0 ? [] : _ref$children,
    dangerouslySetInnerHTML = _ref.dangerouslySetInnerHTML;
    _ref.innerHtml;
    var _ref$className = _ref.className,
    className = _ref$className === void 0 ? [] : _ref$className,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    _ref$tagName = _ref.tagName,
    tagName = _ref$tagName === void 0 ? 'div' : _ref$tagName,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'field' : _ref$type;
    _ref.onInput;
    var props = _objectWithoutProperties(_ref, _excluded$Y);
  useBlockProps();
  var Component = tagName;
  var ref = createRef();
  props = Object.fromEntries(Object.entries(props).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      attributeName = _ref3[0],
      attributeValue = _ref3[1];
    return [attributeName, replaceTokens(attributeValue, {
      block: attributes,
      field: {}
    })];
  }));
  if (selfClosingTagNames$1.includes(tagName) === false && dangerouslySetInnerHTML) {
    var _props;
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      ref: ref,
      className: classNames.apply(void 0, [getFieldClassNames({
        blockName: blockName,
        name: name,
        type: type,
        value: (_props = props) === null || _props === void 0 ? void 0 : _props.value
      })].concat(_toConsumableArray(Array.isArray(className) && className || [className]))),
      onClick: preventEventPropagation,
      onInput: preventEventPropagation,
      onKeydown: preventEventPropagation,
      dangerouslySetInnerHTML: dangerouslySetInnerHTML
    }));
  }
  if (selfClosingTagNames$1.includes(tagName) === true || children.length === 0 && label.length === 0) {
    var _props2;
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      ref: ref,
      className: classNames.apply(void 0, [getFieldClassNames({
        blockName: blockName,
        name: name,
        type: type,
        value: (_props2 = props) === null || _props2 === void 0 ? void 0 : _props2.value
      })].concat(_toConsumableArray(Array.isArray(className) && className || [className]))),
      onClick: preventEventPropagation,
      onInput: preventEventPropagation,
      onKeydown: preventEventPropagation
    }));
  }
  return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
    ref: ref,
    className: classNames.apply(void 0, [getFieldClassNames({
      blockName: blockName,
      name: name,
      type: type,
      value: (_props3 = props) === null || _props3 === void 0 ? void 0 : _props3.value
    })].concat(_toConsumableArray(Array.isArray(className) && className || [className]))),
    onClick: preventEventPropagation,
    onInput: preventEventPropagation,
    onKeydown: preventEventPropagation
  }), label && /*#__PURE__*/React.createElement("div", {
    className: "blueprint-blocks:field-label"
  }, label), children);
}

var _excluded$X = ["attributes", "blockName", "name", "label", "children", "innerHtml", "className", "tagName", "type"];
var selfClosingTagNames = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
var fieldClassNames = memoize(function (_ref) {
  var blockName = _ref.blockName,
    name = _ref.name;
    _ref.type;
  return classNames(_defineProperty({}, "block:".concat(name), name === null || name === void 0 ? void 0 : name.length), _defineProperty({}, "".concat(blockName, ":").concat(name), name === null || name === void 0 ? void 0 : name.length));
});
function save$s(_ref2) {
  var attributes = _ref2.attributes,
    blockName = _ref2.blockName,
    name = _ref2.name;
    _ref2.label;
    var _ref2$children = _ref2.children,
    children = _ref2$children === void 0 ? [] : _ref2$children;
    _ref2.innerHtml;
    var _ref2$className = _ref2.className,
    className = _ref2$className === void 0 ? '' : _ref2$className,
    _ref2$tagName = _ref2.tagName,
    tagName = _ref2$tagName === void 0 ? 'div' : _ref2$tagName,
    _ref2$type = _ref2.type,
    type = _ref2$type === void 0 ? 'field' : _ref2$type,
    props = _objectWithoutProperties(_ref2, _excluded$X);
  var Component = tagName;
  props = Object.fromEntries(Object.entries(props).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      attributeName = _ref4[0],
      attributeValue = _ref4[1];
    return [attributeName, replaceTokens(attributeValue, {
      block: attributes,
      field: {}
    })];
  }));
  if (selfClosingTagNames.includes(tagName) === true || children.length === 0 || props.dangerouslySetInnerHTML) {
    /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      className: classNames.apply(void 0, [fieldClassNames({
        blockName: blockName,
        name: name,
        type: type
      })].concat(_toConsumableArray(Array.isArray(className) && className || [className])))
    }));
  }
  return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
    className: classNames.apply(void 0, [fieldClassNames({
      blockName: blockName,
      name: name,
      type: type
    })].concat(_toConsumableArray(Array.isArray(className) && className || [className]))),
    children: children
  }));
}

var Field = {
  edit: edit$s,
  save: save$s
};

var _excluded$W = ["value"];
function save$r(_ref) {
  var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$W);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "toolbar",
    dangerouslySetInnerHTML: {
      __html: value
    }
  }));
}

var ToolbarField = {
  name: 'toolbar-field',
  edit: edit$t,
  save: save$r
};

var full = {
	icon: "align-full-width",
	value: "full"
};
var wide = {
	icon: "align-wide-width",
	value: "wide"
};
var left$3 = {
	icon: "align-left",
	value: "left"
};
var center$1 = {
	icon: "align-center",
	value: "center"
};
var right$3 = {
	icon: "align-right",
	value: "right"
};
var ALIGN_CONTROLS = {
	full: full,
	wide: wide,
	left: left$3,
	center: center$1,
	right: right$3
};

var _excluded$V = ["onInput", "controls", "value"];
function edit$r(_ref) {
  var onInput = _ref.onInput,
    _ref$controls = _ref.controls,
    controls = _ref$controls === void 0 ? ['left', 'center', 'right'] : _ref$controls,
    value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$V);
  return /*#__PURE__*/React.createElement(ToolbarField.edit, _extends({}, props, {
    type: "align",
    value: value,
    options: controls.map(function (control) {
      return control in ALIGN_CONTROLS && ALIGN_CONTROLS[control] || control;
    }),
    onInput: onInput
  }));
}

var _excluded$U = ["value"];
function save$q(_ref) {
  var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$U);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "align",
    dangerouslySetInnerHTML: {
      __html: value
    }
  }));
}

var index$k = {
  name: 'align-field',
  edit: edit$r,
  save: save$q
};

var _excluded$T = ["onInput", "placeholder", "pattern", "customValidity", "disabled", "required", "value"];

//import './style.scss'

function edit$q(_ref) {
  var _onInput = _ref.onInput,
    placeholder = _ref.placeholder,
    _ref$pattern = _ref.pattern,
    pattern = _ref$pattern === void 0 ? '' : _ref$pattern,
    _ref$customValidity = _ref.customValidity,
    customValidity = _ref$customValidity === void 0 ? '' : _ref$customValidity,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$T);
  var ref = createRef();
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    type: "text",
    value: value
  }), /*#__PURE__*/React.createElement("input", {
    ref: ref,
    type: "text",
    onInput: function onInput(_ref2) {
      var _target$validity;
      var target = _ref2.target;
      if (target !== null && target !== void 0 && (_target$validity = target.validity) !== null && _target$validity !== void 0 && _target$validity.patternMismatch && customValidity) {
        target === null || target === void 0 ? void 0 : target.setCustomValidity(customValidity);
      } else {
        target === null || target === void 0 ? void 0 : target.setCustomValidity('');
      }
      target === null || target === void 0 ? void 0 : target.reportValidity();
      _onInput(target.value);
    },
    placeholder: placeholder,
    pattern: pattern,
    disabled: disabled,
    required: required,
    value: value
  }));
}

var _excluded$S = ["placeholder", "pattern", "disabled", "required", "value"];
function save$p(_ref) {
  _ref.placeholder;
    _ref.pattern;
    _ref.disabled;
    _ref.required;
    var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$S);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "text",
    dangerouslySetInnerHTML: {
      __html: value
    }
  }));
}

var TextField = {
  name: 'text-field',
  edit: edit$q,
  save: save$p
};

var css$f = ".blueprint-blocks\\:link-field-wrap {\n  position: relative;\n}\n\n.blueprint-blocks\\:link-field-properties {\n  align-items: center;\n  display: grid;\n  grid-gap: 8px;\n  grid-template-columns: 1fr 12px 34px;\n  row-gap: 4px;\n}\n\n.blueprint-blocks\\:link-field-properties:after {\n  background: var(--blueprint-blocks-color-gray);\n  content: \"\";\n  display: block;\n  height: 2px;\n  grid-column: 1/span 3;\n}\n\n.blueprint-blocks\\:link-field-properties .blueprint-blocks\\:url-field input[type=text] {\n  border: 0;\n  line-height: 32px;\n  padding: 0;\n}\n\n.blueprint-blocks\\:link-field-properties .blueprint-blocks\\:url-field input[type=text]:focus,\n.blueprint-blocks\\:link-field-properties .blueprint-blocks\\:url-field input[type=text]:hover {\n  border: 0;\n  box-shadow: none;\n  outline: none;\n}";
n(css$f,{});

var _excluded$R = ["onInput", "className", "customValidity", "placeholder", "value"];
function edit$p(_ref) {
  var _onInput = _ref.onInput,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? [] : _ref$className,
    _ref$customValidity = _ref.customValidity,
    customValidity = _ref$customValidity === void 0 ? '' : _ref$customValidity,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? '#anchor-name' : _ref$placeholder,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? {} : _ref$value,
    props = _objectWithoutProperties(_ref, _excluded$R);
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    description: (props === null || props === void 0 ? void 0 : props.description) || __('Enter an id for the anchor to this element on the page.'),
    className: classNames(Array.isArray(className) && className || [className]),
    type: "anchor",
    value: value
  }), /*#__PURE__*/React.createElement("div", {
    className: "blueprint-blocks:anchor-field-wrap"
  }, /*#__PURE__*/React.createElement(TextField.edit, {
    placeholder: placeholder,
    pattern: "#?[A-Za-z0-9_-]+",
    customValidity: customValidity || __('Anchors must be formatted with a # followed by letters, numbers, dashes, or underscores.'),
    value: value,
    onInput: function onInput(value) {
      if (value.slice(0, 1) !== '#') {
        _onInput("#".concat(value));
      } else {
        _onInput(value);
      }
    }
  })));
}

var _excluded$Q = ["value"];
function save$o(_ref) {
  var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$Q);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "anchor",
    dangerouslySetInnerHTML: {
      __html: value
    }
  }));
}

var index$j = {
  name: 'anchor-field',
  edit: edit$p,
  save: save$o
};

var css$e = ".blueprint-blocks\\:tooltip {\n  background: #000;\n  border-radius: 2px;\n  bottom: calc(100% + 5px);\n  color: #fff;\n  display: none;\n  font-size: 12px;\n  left: 50%;\n  padding: 4px 8px;\n  position: absolute;\n  min-width: 80px;\n  transform: translateX(-50%);\n  white-space: nowrap;\n  z-index: 10;\n}\n\n:hover > .blueprint-blocks\\:tooltip {\n  display: block;\n}\n\n.blueprint-blocks\\:tooltip:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid #000;\n  bottom: -4px;\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n}";
n(css$e,{});

function Tooltip(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('blueprint-blocks:tooltip')
  }, label);
}

var css$d = ".blueprint-blocks\\:boolean-field {\n  --padding: 2px;\n  --size: 22px;\n}\n\n.blueprint-blocks\\:boolean-field.is-small {\n  --size: 14px;\n}\n\n.blueprint-blocks\\:boolean-field-wrap {\n  border: 1px solid #8d96a0;\n  border-radius: calc(2px + var(--size) + var(--padding) * 2);\n  box-sizing: border-box;\n  cursor: pointer;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  height: calc(2px + var(--size) + var(--padding) * 2);\n  padding: var(--padding);\n  position: relative;\n  user-select: none;\n  width: calc(var(--size) * 2 + var(--padding) * 3);\n}\n\n.blueprint-blocks\\:boolean-field-false,\n.blueprint-blocks\\:boolean-field-true,\n.blueprint-blocks\\:boolean-field-toggle {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  height: var(--size);\n  width: var(--size);\n}\n\n.blueprint-blocks\\:boolean-field-false,\n.blueprint-blocks\\:boolean-field.is-false .blueprint-blocks\\:boolean-field-toggle {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.blueprint-blocks\\:boolean-field-true,\n.blueprint-blocks\\:boolean-field.is-true .blueprint-blocks\\:boolean-field-toggle {\n  grid-column: 2;\n  grid-row: 1;\n}\n\n.blueprint-blocks\\:boolean-field-toggle {\n  background: #8d96a0;\n  border-radius: var(--size);\n}\n\n.blueprint-blocks\\:boolean-field.is-true .blueprint-blocks\\:boolean-field-toggle {\n  background: var(--wp-admin-theme-color);\n}";
n(css$d,{});

var _excluded$P = ["onInput", "options", "multiple", "disabled", "size", "tooltip", "tooltipPosition", "value"];
function edit$o(_ref) {
  var onInput = _ref.onInput;
    _ref.options;
    _ref.multiple;
    _ref.disabled;
    var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'normal' : _ref$size,
    tooltip = _ref.tooltip;
    _ref.tooltipPosition;
    var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$P);
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    className: [{
      'is-true': !!value,
      'is-false': !value,
      'is-small': size === 'small'
    }].concat(_toConsumableArray(props.className || [])),
    type: "boolean",
    value: value
  }), /*#__PURE__*/React.createElement("div", {
    className: "blueprint-blocks:boolean-field-wrap",
    onClick: function onClick() {
      return onInput(!value);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames('blueprint-blocks:boolean-field-false')
  }), /*#__PURE__*/React.createElement("div", {
    className: classNames('blueprint-blocks:boolean-field-true')
  }), /*#__PURE__*/React.createElement("div", {
    className: classNames('blueprint-blocks:boolean-field-toggle')
  }), tooltip && /*#__PURE__*/React.createElement(Tooltip, {
    label: tooltip
  })));
}

var _excluded$O = ["value"];
function save$n(_ref) {
  var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$O);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "select",
    dangerouslySetInnerHTML: {
      __html: value && 'true' || 'false'
    }
  }));
}

var BooleanField = {
  name: 'boolean-field',
  edit: edit$o,
  save: save$n
};

var _excluded$N = ["blockName", "name", "colors", "clearable", "enableCustomColors", "enableAlpha", "value", "onInput"];
var getColor = memoize(function (slug) {
  var colors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  for (var i = 0; i < colors.length; i++) {
    if (colors[i].slug === slug) {
      return colors[i].color;
    }
  }
  return slug;
});
var getSlug$1 = memoize(function (color) {
  var colors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  for (var i = 0; i < colors.length; i++) {
    if (colors[i].color === color) {
      return colors[i].slug;
    }
  }
  return color;
});
function edit$n(_ref) {
  _ref.blockName;
    _ref.name;
    var _ref$colors = _ref.colors,
    colors = _ref$colors === void 0 ? [] : _ref$colors,
    _ref$clearable = _ref.clearable,
    clearable = _ref$clearable === void 0 ? true : _ref$clearable,
    _ref$enableCustomColo = _ref.enableCustomColors,
    enableCustomColors = _ref$enableCustomColo === void 0 ? true : _ref$enableCustomColo,
    _ref$enableAlpha = _ref.enableAlpha,
    enableAlpha = _ref$enableAlpha === void 0 ? false : _ref$enableAlpha,
    value = _ref.value,
    onInput = _ref.onInput,
    props = _objectWithoutProperties(_ref, _excluded$N);
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    type: "color",
    value: value
  }), /*#__PURE__*/React.createElement(ColorPalette, {
    colors: colors,
    clearable: clearable,
    disableCustomColors: !enableCustomColors,
    enableAlpha: enableAlpha,
    value: getColor(value, colors),
    onChange: function onChange(value) {
      return onInput(getSlug$1(value, colors));
    }
  }));
}

var _excluded$M = ["value"];
function save$m(_ref) {
  var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$M);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "color",
    dangerouslySetInnerHTML: {
      __html: value
    }
  }));
}

var index$i = {
  name: 'color-field',
  edit: edit$n,
  save: save$m
};

var _excluded$L = ["onInput", "placeholder", "pattern", "disabled", "multiple", "required", "value"];

//import './style.scss'

function edit$m(_ref) {
  var onInput = _ref.onInput,
    placeholder = _ref.placeholder,
    _ref$pattern = _ref.pattern,
    pattern = _ref$pattern === void 0 ? '' : _ref$pattern,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$multiple = _ref.multiple,
    multiple = _ref$multiple === void 0 ? false : _ref$multiple,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$L);
  var ref = createRef();
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    type: "email",
    value: value
  }), /*#__PURE__*/React.createElement("input", {
    ref: ref,
    type: "email",
    onBlur: function onBlur() {
      var _ref$current;
      return ref === null || ref === void 0 || (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.reportValidity();
    },
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      return onInput(target.value);
    },
    placeholder: placeholder,
    pattern: pattern,
    disabled: disabled,
    multiple: multiple,
    required: required,
    value: value
  }));
}

var _excluded$K = ["placeholder", "pattern", "disabled", "multiple", "required", "value"];
function save$l(_ref) {
  _ref.placeholder;
    _ref.pattern;
    _ref.disabled;
    _ref.multiple;
    _ref.required;
    var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$K);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "email",
    dangerouslySetInnerHTML: {
      __html: value
    }
  }));
}

var index$h = {
  name: 'email-field',
  edit: edit$m,
  save: save$l
};

var _excluded$J = ["blockName", "name", "gradients", "clearable", "enableCustomGradients", "value", "onInput"];
var getGradient = memoize(function (slug) {
  var gradients = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  for (var i = 0; i < gradients.length; i++) {
    if (gradients[i].slug === slug) {
      return gradients[i].gradient;
    }
  }
  return slug;
});
var getSlug = memoize(function (gradient) {
  var gradients = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  for (var i = 0; i < gradients.length; i++) {
    if (gradients[i].gradient === gradient) {
      return gradients[i].slug;
    }
  }
  return gradient;
});
function edit$l(_ref) {
  _ref.blockName;
    _ref.name;
    var _ref$gradients = _ref.gradients,
    gradients = _ref$gradients === void 0 ? [] : _ref$gradients,
    _ref$clearable = _ref.clearable,
    clearable = _ref$clearable === void 0 ? true : _ref$clearable,
    _ref$enableCustomGrad = _ref.enableCustomGradients,
    enableCustomGradients = _ref$enableCustomGrad === void 0 ? true : _ref$enableCustomGrad,
    value = _ref.value,
    onInput = _ref.onInput,
    props = _objectWithoutProperties(_ref, _excluded$J);
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    type: "gradient",
    value: value
  }), /*#__PURE__*/React.createElement(GradientPicker, {
    gradients: gradients,
    clearable: clearable,
    disableCustomGradients: !enableCustomGradients,
    value: getGradient(value, gradients),
    onChange: function onChange(value) {
      return onInput(getSlug(value, gradients));
    }
  }));
}

var _excluded$I = ["value"];
function save$k(_ref) {
  var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$I);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "gradient",
    dangerouslySetInnerHTML: {
      __html: value
    }
  }));
}

var index$g = {
  name: 'gradient-field',
  edit: edit$l,
  save: save$k
};

var desktop = {
	icon: "desktop",
	label: "Desktop"
};
var laptop = {
	icon: "laptop",
	label: "Laptop"
};
var tablet = {
	icon: "tablet-android",
	label: "Tablet"
};
var mobile = {
	icon: "mobile-android",
	label: "Mobile"
};
var DEFINED_BREAKPOINTS = {
	desktop: desktop,
	laptop: laptop,
	tablet: tablet,
	mobile: mobile
};

var getBreakpointLabels = memoize(function (breakpoints) {
  return breakpoints.map(function (breakpoint) {
    if (typeof breakpoint === 'string' && breakpoint in DEFINED_BREAKPOINTS) {
      var _DEFINED_BREAKPOINTS$, _DEFINED_BREAKPOINTS$2;
      return {
        icon: ((_DEFINED_BREAKPOINTS$ = DEFINED_BREAKPOINTS[breakpoint]) === null || _DEFINED_BREAKPOINTS$ === void 0 ? void 0 : _DEFINED_BREAKPOINTS$.icon) || null,
        label: ((_DEFINED_BREAKPOINTS$2 = DEFINED_BREAKPOINTS[breakpoint]) === null || _DEFINED_BREAKPOINTS$2 === void 0 ? void 0 : _DEFINED_BREAKPOINTS$2.label) || breakpoint,
        value: breakpoint
      };
    } else if (typeof breakpoint === 'string') {
      return {
        icon: null,
        label: breakpoint,
        value: breakpoint
      };
    }
    return breakpoint;
  });
});

var getGridAlign = memoize(function (value, breakpoint) {
  var _value$breakpoint;
  return (value === null || value === void 0 || (_value$breakpoint = value[breakpoint]) === null || _value$breakpoint === void 0 ? void 0 : _value$breakpoint.align) || [];
});

var getGridGap = memoize(function (value, breakpoint) {
  var _value$breakpoint;
  return (value === null || value === void 0 || (_value$breakpoint = value[breakpoint]) === null || _value$breakpoint === void 0 ? void 0 : _value$breakpoint.gap) || [];
});

var getGridJustify = memoize(function (value, breakpoint) {
  var _value$breakpoint;
  return (value === null || value === void 0 || (_value$breakpoint = value[breakpoint]) === null || _value$breakpoint === void 0 ? void 0 : _value$breakpoint.justify) || [];
});

var getGridRows = memoize(function (value, breakpoint) {
  var _value$breakpoint;
  return (value === null || value === void 0 || (_value$breakpoint = value[breakpoint]) === null || _value$breakpoint === void 0 ? void 0 : _value$breakpoint.rows) || [];
});

var getRowWidth = memoize(function (row) {
  return row.reduce(function (sum, column) {
    return sum + column;
  }, 0);
});

var css$c = ".blueprint-blocks\\:grid-field-breakpoint-toggle {\n  display: grid;\n  gap: 2px;\n  grid-auto-columns: 1fr;\n  grid-auto-flow: column;\n}\n\n.blueprint-blocks\\:grid-field-breakpoint-toggle > div {\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: var(--blueprint-blocks-border-radius);\n  cursor: pointer;\n  display: grid;\n  justify-content: center;\n  height: 26px;\n  line-height: 24px;\n  text-align: center;\n  transition: border 0.4s, colors 0.4s;\n}\n\n.blueprint-blocks\\:grid-field-breakpoint-toggle > div:hover {\n  border-color: var(--blueprint-blocks-color-accent);\n  color: var(--blueprint-blocks-color-accent);\n}\n\n.blueprint-blocks\\:grid-field-breakpoint-toggle > div:active {\n  background: var(--blueprint-blocks-color-light-gray);\n}\n\n.blueprint-blocks\\:grid-field-breakpoint-toggle > div.is-active {\n  background-color: var(--blueprint-blocks-color-accent);\n  color: var(--blueprint-blocks-color-white);\n}";
n(css$c,{});

var _excluded$H = ["onChange", "currentBreakpoint", "breakpoints"];
function BreakpointToggle(_ref) {
  var onChange = _ref.onChange,
    currentBreakpoint = _ref.currentBreakpoint,
    _ref$breakpoints = _ref.breakpoints,
    breakpoints = _ref$breakpoints === void 0 ? ['desktop', 'laptop', 'tablet', 'mobile'] : _ref$breakpoints;
    _objectWithoutProperties(_ref, _excluded$H);
  var breakpointLabels = getBreakpointLabels(breakpoints);
  return /*#__PURE__*/React.createElement("div", {
    className: "blueprint-blocks:grid-field-breakpoint-toggle"
  }, breakpointLabels.map(function (_ref2) {
    _ref2.icon;
      var label = _ref2.label,
      value = _ref2.value;
    return /*#__PURE__*/React.createElement("div", {
      className: classNames({
        'is-active': currentBreakpoint === value
      }),
      onClick: function onClick() {
        return onChange(value);
      }
    }, label);
  }));
}

var arrowDown = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M212.6 454.6L190 477.3l-22.6-22.6-144-144L.7 288 46 242.8l22.6 22.6L158 354.8 158 64l0-32 64 0 0 32 0 290.7 89.4-89.4L334 242.8 379.3 288l-22.6 22.6-144 144z\"/></svg>";

var arrowDownLeft = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M46 416H14V384 160 128H78v32V306.7L279.4 105.4 302 82.7 347.3 128l-22.6 22.6L123.3 352H270h32v64H270 46z\"/></svg>";

var arrowDownRight = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M302 416h32V384 160 128H270v32V306.7L68.6 105.4 46 82.7 .7 128l22.6 22.6L224.7 352H78 46v64H78 302z\"/></svg>";

var arrowLeft = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M25.4 278.6L2.7 256l22.6-22.6 144-144L192 66.7 237.2 112l-22.6 22.6L125.2 224 416 224l32 0 0 64-32 0-290.7 0 89.4 89.4L237.2 400 192 445.3l-22.6-22.6-144-144z\"/></svg>";

var arrowRight = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M422.6 278.6L445.3 256l-22.6-22.6-144-144L256 66.7 210.8 112l22.6 22.6L322.8 224 32 224 0 224l0 64 32 0 290.7 0-89.4 89.4L210.8 400 256 445.3l22.6-22.6 144-144z\"/></svg>";

var arrowUp = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M212.6 57.4L190 34.7 167.4 57.4l-144 144L.7 224 46 269.2l22.6-22.6L158 157.2V448v32h64V448 157.2l89.4 89.4L334 269.2 379.3 224l-22.6-22.6-144-144z\"/></svg>";

var arrowUpLeft = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M46 96H14v32V352v32H78V352 205.3L279.4 406.6 302 429.3 347.3 384l-22.6-22.6L123.3 160H270h32V96H270 46z\"/></svg>";

var arrowUpRight = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M302 96h32v32V352v32H270V352 205.3L68.6 406.6 46 429.3 .7 384l22.6-22.6L224.7 160H78 46V96H78 302z\"/></svg>";

var angleLeft = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M.7 256l22.6 22.6 160 160L206 461.3 251.3 416l-22.6-22.6L91.3 256 228.6 118.6 251.3 96 206 50.7 183.4 73.4l-160 160L.7 256z\"/></svg>";

var angleRight = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M283.3 256l-22.6 22.6-160 160L78 461.3 32.7 416l22.6-22.6L192.7 256 55.4 118.6 32.7 96 78 50.7l22.6 22.6 160 160L283.3 256z\"/></svg>";

var circle = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z\"/></svg>";

var link = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M563.2 267.3c56.2-56.2 56.2-147.4 0-203.6S415.8 7.4 359.6 63.7L348.3 75l45.3 45.3 11.3-11.3c31.2-31.2 81.9-31.2 113.1 0s31.2 81.9 0 113.1L404.8 335.2c-31.2 31.2-81.9 31.2-113.1 0c-25.6-25.6-30.3-64.3-13.8-94.6c1.8-3.4 3.9-6.7 6.3-9.8l-51.2-38.4c-4.3 5.7-8.1 11.6-11.4 17.8c-29.5 54.6-21.3 124.2 24.9 170.3c56.2 56.2 147.4 56.2 203.6 0L563.2 267.3zM42.8 244.7c-56.2 56.2-56.2 147.4 0 203.6s147.4 56.2 203.6 0L257.7 437l-45.3-45.3-11.3 11.3c-31.2 31.2-81.9 31.2-113.1 0s-31.2-81.9 0-113.1L201.2 176.8c31.2-31.2 81.9-31.2 113.1 0c25.6 25.6 30.3 64.3 13.8 94.6c-1.8 3.4-3.9 6.7-6.3 9.8l51.2 38.4c4.3-5.7 8.1-11.6 11.4-17.8c29.5-54.6 21.3-124.2-24.9-170.3c-56.2-56.2-147.4-56.2-203.6 0L42.8 244.7z\"/></svg>";

var minus = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M416 288H384L32 288H0l0-64 32 0 352 0 32 0v64z\"/></svg>";

var pencil = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M9.8 463.5l-9.6 48 48-9.6 102.6-20.5L396.2 236l-15.1-15.1-90.4-90.4-15.1-15.1L30.4 360.9 9.8 463.5zM297 94.2l15.1 15.1 90.4 90.4 15.1 15.1L450.2 182l31.9-31.9-31.9-31.9L393.6 61.5 361.6 29.6 329.7 61.5 297 94.2zM94.2 360.9h11.4v45.2h45.2v11.4l-22.3 22.3L57.8 453.9 72 383.1l22.3-22.3zM307.6 195.2L297 205.9 161.5 341.4l-10.6 10.6-21.3-21.3 10.6-10.6L275.7 184.6l10.6-10.6 21.3 21.3z\"/></svg>";

var plus = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M240 80V48H176V80 224H32 0v64H32 176V432v32h64V432 288H384h32V224H384 240V80z\"/></svg>";

var trash = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z\"/></svg>";

var upRightFromSquare = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M512 176l-32 32-65.4-65.4-168 168L224 333.3 178.7 288l22.6-22.6 168-168L304 32 336 0H512V176zM0 32H32 160h32V96H160 64V448H416V352 320h64v32V480v32H448 32 0V480 64 32z\"/></svg>";

var Icons = /*#__PURE__*/Object.freeze({
	__proto__: null,
	angleLeft: angleLeft,
	angleRight: angleRight,
	arrowDown: arrowDown,
	arrowDownLeft: arrowDownLeft,
	arrowDownRight: arrowDownRight,
	arrowLeft: arrowLeft,
	arrowRight: arrowRight,
	arrowUp: arrowUp,
	arrowUpLeft: arrowUpLeft,
	arrowUpRight: arrowUpRight,
	circle: circle,
	link: link,
	minus: minus,
	pencil: pencil,
	plus: plus,
	trash: trash,
	upRightFromSquare: upRightFromSquare
});

var css$b = ".blueprint-blocks\\:grid-field-minus {\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: var(--blueprint-blocks-border-radius);\n  cursor: pointer;\n  display: grid;\n  justify-content: center;\n  height: 26px;\n  transition: border 0.4s, colors 0.4s;\n  width: 26px;\n}\n\n.blueprint-blocks\\:grid-field-minus:not(.is-disabled):hover {\n  border-color: var(--blueprint-blocks-color-accent);\n  color: var(--blueprint-blocks-color-accent);\n}\n\n.blueprint-blocks\\:grid-field-minus:not(.is-disabled):active {\n  background: var(--blueprint-blocks-color-light-gray);\n}\n\n.blueprint-blocks\\:grid-field-minus.is-disabled {\n  cursor: default;\n  opacity: 0.25;\n}\n\n.blueprint-blocks\\:grid-field-minus svg {\n  display: block;\n  height: 12px;\n  width: 12px;\n}";
n(css$b,{});

function DecrementButton(_ref) {
  var _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('blueprint-blocks:grid-field-minus', {
      'is-disabled': disabled
    }),
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: minus
    }
  }));
}

var css$a = ".blueprint-blocks\\:grid-field-plus {\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: var(--blueprint-blocks-border-radius);\n  cursor: pointer;\n  display: grid;\n  justify-content: center;\n  height: 26px;\n  transition: border 0.4s, colors 0.4s;\n  width: 26px;\n}\n\n.blueprint-blocks\\:grid-field-plus:not(.is-disabled):hover {\n  border-color: var(--blueprint-blocks-color-accent);\n  color: var(--blueprint-blocks-color-accent);\n}\n\n.blueprint-blocks\\:grid-field-plus:not(.is-disabled):active {\n  background: var(--blueprint-blocks-color-light-gray);\n}\n\n.blueprint-blocks\\:grid-field-plus.is-disabled {\n  cursor: default;\n  opacity: 0.25;\n}\n\n.blueprint-blocks\\:grid-field-plus svg {\n  display: block;\n  height: 12px;\n  width: 12px;\n}";
n(css$a,{});

function IncrementButton(_ref) {
  var _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('blueprint-blocks:grid-field-plus', {
      'is-disabled': disabled
    }),
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: plus
    }
  }));
}

var css$9 = ".blueprint-blocks\\:grid-field-grid {\n  border: 1px solid var(--blueprint-blocks-color-gray);\n  border-radius: var(--blueprint-blocks-border-radius);\n  display: grid;\n  gap: 2px;\n  grid-template-columns: 1fr;\n  justify-content: stretch;\n  padding: 2px;\n}\n\n.blueprint-blocks\\:grid-field-grid > .blueprint-blocks\\:grid-field-plus,\n.blueprint-blocks\\:grid-field-grid > .blueprint-blocks\\:grid-field-minus {\n  width: auto;\n}\n\n.blueprint-blocks\\:grid-field-grid-row-wrap {\n  align-items: stretch;\n  display: grid;\n  gap: 2px;\n  grid-template-columns: 26px 1fr 26px;\n}\n\n.blueprint-blocks\\:grid-field-grid-row-wrap > .blueprint-blocks\\:grid-field-plus,\n.blueprint-blocks\\:grid-field-grid-row-wrap > .blueprint-blocks\\:grid-field-minus {\n  height: auto;\n}\n\n.blueprint-blocks\\:grid-field-grid-row {\n  align-items: stretch;\n  border: 1px solid var(--blueprint-blocks-color-light-gray);\n  border-radius: var(--blueprint-blocks-border-radius);\n  display: grid;\n  gap: 2px;\n  grid-template-columns: repeat(var(--columns, 1), 1fr);\n  height: 80px;\n  padding: 2px;\n}\n\n.blueprint-blocks\\:grid-field-grid-column {\n  background: var(--blueprint-blocks-color-lightest-gray);\n  grid-column-end: span var(--column, 1);\n}";
n(css$9,{});

function GridControl(_ref) {
  var _ref$columns = _ref.columns,
    columns = _ref$columns === void 0 ? 6 : _ref$columns,
    _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? [] : _ref$rows;
    _ref.gap;
    _ref.align;
    _ref.justify;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('blueprint-blocks:grid-field-grid')
  }, /*#__PURE__*/React.createElement(DecrementButton, null), rows.map(function (row) {
    return /*#__PURE__*/React.createElement("div", {
      className: classNames('blueprint-blocks:grid-field-grid-row-wrap')
    }, /*#__PURE__*/React.createElement(DecrementButton, null), /*#__PURE__*/React.createElement("div", {
      className: classNames('blueprint-blocks:grid-field-grid-row'),
      style: {
        '--columns': columns,
        '--row': getRowWidth(row)
      }
    }, row.map(function (column) {
      return /*#__PURE__*/React.createElement("div", {
        className: classNames('blueprint-blocks:grid-field-grid-column'),
        style: {
          '--column': column
        }
      }, column);
    })), /*#__PURE__*/React.createElement(IncrementButton, null));
  }), /*#__PURE__*/React.createElement(IncrementButton, null));
}

var css$8 = ".blueprint-blocks\\:grid-field-wrap {\n  display: grid;\n  gap: 2px;\n}";
n(css$8,{});

var _excluded$G = ["onInput", "columns", "breakpoints", "gaps", "align", "justify", "enableUniqueColumnWidths", "value"];
function edit$k(_ref) {
  var _breakpointLabels$;
  _ref.onInput;
    var _ref$columns = _ref.columns,
    columns = _ref$columns === void 0 ? 6 : _ref$columns,
    _ref$breakpoints = _ref.breakpoints,
    breakpoints = _ref$breakpoints === void 0 ? ['desktop', 'laptop', 'tablet', 'mobile'] : _ref$breakpoints;
    _ref.gaps;
    _ref.align;
    _ref.justify;
    _ref.enableUniqueColumnWidths;
    var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$G);
  var breakpointLabels = getBreakpointLabels(breakpoints);
  var _useState = useState(breakpointLabels === null || breakpointLabels === void 0 || (_breakpointLabels$ = breakpointLabels[0]) === null || _breakpointLabels$ === void 0 ? void 0 : _breakpointLabels$.value),
    _useState2 = _slicedToArray(_useState, 2),
    currentBreakpoint = _useState2[0],
    setCurrentBreakpoint = _useState2[1];
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    type: "grid",
    value: value
  }), /*#__PURE__*/React.createElement("div", {
    className: "blueprint-blocks:grid-field-wrap"
  }, /*#__PURE__*/React.createElement(BreakpointToggle, {
    breakpoints: breakpointLabels,
    currentBreakpoint: currentBreakpoint,
    onChange: setCurrentBreakpoint
  }), /*#__PURE__*/React.createElement(GridControl, {
    columns: columns,
    rows: getGridRows(value, currentBreakpoint),
    gap: getGridGap(value, currentBreakpoint),
    align: getGridAlign(value, currentBreakpoint),
    justify: getGridJustify(value, currentBreakpoint)
  })));
}

var _excluded$F = ["value"];
function save$j(_ref) {
  var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$F);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "grid",
    dangerouslySetInnerHTML: {
      __html: (Array.isArray(value) && value || [value]).join(',')
    }
  }));
}

var index$f = {
  name: 'grid-field',
  edit: edit$k,
  save: save$j
};

var _excluded$E = ["children", "dangerouslySetInnerHTML", "innerHtml"];
function edit$j(_ref) {
  var children = _ref.children;
    _ref.dangerouslySetInnerHTML;
    var _ref$innerHtml = _ref.innerHtml,
    innerHtml = _ref$innerHtml === void 0 ? '' : _ref$innerHtml,
    props = _objectWithoutProperties(_ref, _excluded$E);
  if (innerHtml.length > 0) {
    return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
      type: "html",
      dangerouslySetInnerHTML: {
        __html: replaceTokens(innerHtml, {
          block: (props === null || props === void 0 ? void 0 : props.attributes) || {},
          field: {}
        })
      }
    }));
  }
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    type: "html",
    children: children
  }));
}

var _excluded$D = ["children", "dangerouslySetInnerHTML", "innerHtml"];
function save$i(_ref) {
  var children = _ref.children;
    _ref.dangerouslySetInnerHTML;
    var _ref$innerHtml = _ref.innerHtml,
    innerHtml = _ref$innerHtml === void 0 ? '' : _ref$innerHtml,
    props = _objectWithoutProperties(_ref, _excluded$D);
  if (innerHtml.length > 0) {
    return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
      type: "html",
      dangerouslySetInnerHTML: {
        __html: replaceTokens(innerHtml, {
          block: (props === null || props === void 0 ? void 0 : props.attributes) || {},
          field: {}
        })
      }
    }));
  }
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "html",
    children: children
  }));
}

var index$e = {
  name: 'html',
  edit: edit$j,
  save: save$i
};

var css$7 = ".blueprint-blocks\\:increment-field-wrap {\n  border: 1px solid #8d96a0;\n  border-radius: 4px;\n  display: grid;\n  grid-template-columns: 27px 1fr 27px;\n  height: 28px;\n  overflow: hidden;\n  position: relative;\n  user-select: none;\n}\n\n.blueprint-blocks\\:increment-field-minus,\n.blueprint-blocks\\:increment-field-plus {\n  align-items: center;\n  cursor: pointer;\n  display: grid;\n  justify-content: center;\n  height: 26px;\n  transition: background 0.4s, colors 0.4s;\n  width: 27px;\n}\n\n.blueprint-blocks\\:increment-field-minus {\n  border-right: 1px solid #e2e4e7;\n}\n\n.blueprint-blocks\\:increment-field-plus {\n  border-left: 1px solid #e2e4e7;\n}\n\n.blueprint-blocks\\:increment-field-minus:not(.is-disabled):hover,\n.blueprint-blocks\\:increment-field-plus:not(.is-disabled):hover {\n  background: #e5f3f8;\n  color: #0085ba;\n}\n\n.blueprint-blocks\\:increment-field-minus.is-disabled,\n.blueprint-blocks\\:increment-field-plus.is-disabled {\n  cursor: default;\n  opacity: 0.25;\n}\n\n.blueprint-blocks\\:increment-field-minus svg,\n.blueprint-blocks\\:increment-field-plus svg {\n  display: block;\n  height: 14px;\n  width: 14px;\n}\n\n.blueprint-blocks\\:increment-field-label {\n  height: 26px;\n  line-height: 26px;\n  text-align: center;\n  width: calc(100% - 54px);\n}";
n(css$7,{});

var _excluded$C = ["onInput", "options", "multiple", "disabled", "value"];
var activeIndex = memoize(function (options, activeValue) {
  for (var i = 0; i < options.length; i++) {
    var _options$i;
    if (((_options$i = options[i]) === null || _options$i === void 0 ? void 0 : _options$i.value) === activeValue) {
      return i;
    }
  }
  return 0;
});
function edit$i(_ref) {
  var _options$index;
  var onInput = _ref.onInput,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options;
    _ref.multiple;
    _ref.disabled;
    var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$C);
  var index = activeIndex(options, value);
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    type: "increment",
    value: value
  }), /*#__PURE__*/React.createElement("div", {
    className: "blueprint-blocks:increment-field-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames('blueprint-blocks:increment-field-minus', {
      'is-disabled': index === 0
    }),
    onClick: function onClick() {
      if (index > 0) {
        var _options;
        onInput(options === null || options === void 0 || (_options = options[index - 1]) === null || _options === void 0 ? void 0 : _options.value);
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: angleLeft
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: classNames('blueprint-blocks:increment-field-label')
  }, options === null || options === void 0 || (_options$index = options[index]) === null || _options$index === void 0 ? void 0 : _options$index.label), /*#__PURE__*/React.createElement("div", {
    className: classNames('blueprint-blocks:increment-field-plus', {
      'is-disabled': index === options.length - 1
    }),
    onClick: function onClick() {
      if (index < options.length - 1) {
        var _options2;
        onInput(options === null || options === void 0 || (_options2 = options[index + 1]) === null || _options2 === void 0 ? void 0 : _options2.value);
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: angleRight
    }
  }))));
}

var _excluded$B = ["value"];
function save$h(_ref) {
  var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$B);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "increment",
    dangerouslySetInnerHTML: {
      __html: (Array.isArray(value) && value || [value]).join(',')
    }
  }));
}

var IncrementField = {
  name: 'increment-field',
  edit: edit$i,
  save: save$h
};

var _excluded$A = ["name", "template", "templateLock"];
function edit$h(_ref) {
  var _ref$name = _ref.name,
    name = _ref$name === void 0 ? 'inner-blocks' : _ref$name,
    _ref$template = _ref.template,
    template = _ref$template === void 0 ? [] : _ref$template,
    _ref$templateLock = _ref.templateLock,
    templateLock = _ref$templateLock === void 0 ? false : _ref$templateLock,
    props = _objectWithoutProperties(_ref, _excluded$A);
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    type: "inner-blocks",
    name: name
  }), /*#__PURE__*/React.createElement(InnerBlocks, _extends({
    template: template,
    templateLock: templateLock
  }, props)));
}

var _excluded$z = ["template", "templateLock"];
function save$g(_ref) {
  _ref.template;
    _ref.templateLock;
    var props = _objectWithoutProperties(_ref, _excluded$z);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "inner-blocks"
  }), /*#__PURE__*/React.createElement(InnerBlocks.Content, null));
}

var index$d = {
  name: 'inner-blocks',
  edit: edit$h,
  save: save$g
};

var _excluded$y = ["blockName", "name", "placeholder", "allowedFormats", "disabled", "tagName", "className", "value", "onInput"];
function edit$g(_ref) {
  var blockName = _ref.blockName,
    name = _ref.name,
    placeholder = _ref.placeholder,
    _ref$allowedFormats = _ref.allowedFormats,
    allowedFormats = _ref$allowedFormats === void 0 ? [] : _ref$allowedFormats,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$tagName = _ref.tagName,
    tagName = _ref$tagName === void 0 ? 'p' : _ref$tagName,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? [] : _ref$className,
    value = _ref.value,
    onInput = _ref.onInput;
    _objectWithoutProperties(_ref, _excluded$y);
  if (disabled === true) {
    var Component = tagName;
    return /*#__PURE__*/React.createElement(Component, {
      className: classNames.apply(void 0, [getFieldClassNames({
        blockName: blockName,
        name: name,
        type: 'rich-text',
        value: value
      })].concat(_toConsumableArray(Array.isArray(className) && className || [className]))),
      dangerouslySetInnerHTML: {
        __html: value
      }
    });
  }
  return /*#__PURE__*/React.createElement(RichText, {
    className: classNames.apply(void 0, [getFieldClassNames({
      blockName: blockName,
      name: name,
      type: 'rich-text',
      value: value
    })].concat(_toConsumableArray(Array.isArray(className) && className || [className]))),
    onChange: onInput,
    tagName: tagName,
    allowedFormats: allowedFormats,
    keepPlaceholderOnFocus: true,
    placeholder: placeholder,
    value: value
  });
}

var _excluded$x = ["multiLine", "placeholder", "tagName", "value"];
function save$f(_ref) {
  _ref.multiLine;
    _ref.placeholder;
    var _ref$tagName = _ref.tagName,
    tagName = _ref$tagName === void 0 ? 'p' : _ref$tagName,
    value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$x);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    tagName: tagName,
    type: "rich-text",
    dangerouslySetInnerHTML: {
      __html: value
    }
  }));
}

var RichTextField = {
  name: 'rich-text-field',
  edit: edit$g,
  save: save$f
};

var css$6 = ".blueprint-blocks\\:dialog {\n  align-items: start;\n  display: inline-grid;\n  height: 16px;\n  justify-content: center;\n  position: relative;\n  width: 16px;\n}\n\n.blueprint-blocks\\:dialog-toggle img {\n  grid-column: 1;\n  grid-row: 1;\n  height: 16px;\n  width: 16px;\n}\n\n.blueprint-blocks\\:dialog.is-open .blueprint-blocks\\:dialog-toggle:after {\n  grid-column: 1;\n  grid-row: 1;\n  position: relative;\n  transform: translateY(-100%);\n}\n\n.blueprint-blocks\\:dialog-wrap {\n  background: #fff;\n  box-shadow: var(--blueprint-blocks-box-shadow);\n  border-radius: 4px;\n  bottom: calc(100% + 7px);\n  left: 50%;\n  padding: 8px;\n  position: absolute;\n  transform: translateX(-50%);\n  width: min(240px, 100vw - 16px);\n  z-index: 100;\n}\n\n.blueprint-blocks\\:dialog-wrap:after {\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid #fff;\n  bottom: -6px;\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n}";
n(css$6,{});

var _excluded$w = ["icon", "label", "children"];
function Dialog(_ref) {
  var icon = _ref.icon,
    label = _ref.label,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? [] : _ref$children;
    _objectWithoutProperties(_ref, _excluded$w);
  var ref = createRef();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDialogOpen = _useState2[0],
    openDialog = _useState2[1];
  useClickOutside(ref, function (event) {
    return openDialog(false);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('blueprint-blocks:dialog', {
      'is-open': isDialogOpen
    }),
    ref: ref
  }, /*#__PURE__*/React.createElement(Button, {
    className: classNames('blueprint-blocks:dialog-toggle'),
    icon: icon,
    label: label,
    onClick: function onClick() {
      return openDialog(true);
    }
  }), isDialogOpen && /*#__PURE__*/React.createElement("div", {
    className: classNames('blueprint-blocks:dialog-wrap')
  }, children));
}

var css$5 = ".blueprint-blocks\\:url-field input[type=text] {\n  border: var(--blueprint-blocks-border);\n  border-radius: var(--blueprint-blocks-border-radius);\n  color: var(--blueprint-blocks-color);\n  display: block;\n  font-size: var(--blueprint-blocks-font-size) !important;\n  height: 32px !important;\n  line-height: 30px !important;\n  padding: 0 8px;\n  text-align: inherit;\n  transition: none;\n  width: 100% !important;\n}\n\n.blueprint-blocks\\:url-field input[type=text]::placeholder,\n.blueprint-blocks\\:url-field input[type=text]:focus::placeholder,\n.blueprint-blocks\\:url-field input[type=text]:hover::placeholder {\n  color: var(--blueprint-blocks-color);\n  opacity: 0.5;\n}";
n(css$5,{});

var _excluded$v = ["onInput", "placeholder", "required", "value"];
function edit$f(_ref) {
  var onInput = _ref.onInput,
    placeholder = _ref.placeholder,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$v);
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    type: "url",
    value: value
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    onBlur: function onBlur() {
      var _ref2;
      return (_ref2 = ref) === null || _ref2 === void 0 || (_ref2 = _ref2.current) === null || _ref2 === void 0 ? void 0 : _ref2.reportValidity();
    },
    onChange: function onChange(_ref3) {
      var target = _ref3.target;
      return onInput(target.value);
    },
    placeholder: placeholder,
    required: required,
    value: value
  }));
}

var _excluded$u = ["value"];
function save$e(_ref) {
  var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$u);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "number",
    dangerouslySetInnerHTML: {
      __html: value
    }
  }));
}

var UrlField = {
  name: 'url-field',
  edit: edit$f,
  save: save$e
};

var css$4 = ".blueprint-blocks\\:link-field-wrap {\n  position: relative;\n}\n\n.blueprint-blocks\\:link-field-properties {\n  align-items: center;\n  display: grid;\n  grid-gap: 8px;\n  grid-template-columns: 1fr 12px 34px;\n  row-gap: 4px;\n}\n\n.blueprint-blocks\\:link-field-properties:after {\n  background: var(--blueprint-blocks-color-gray);\n  content: \"\";\n  display: block;\n  height: 2px;\n  grid-column: 1/span 3;\n}\n\n.blueprint-blocks\\:link-field-properties .blueprint-blocks\\:url-field input[type=text] {\n  border: 0;\n  line-height: 32px;\n  padding: 0;\n}\n\n.blueprint-blocks\\:link-field-properties .blueprint-blocks\\:url-field input[type=text]:focus,\n.blueprint-blocks\\:link-field-properties .blueprint-blocks\\:url-field input[type=text]:hover {\n  border: 0;\n  box-shadow: none;\n  outline: none;\n}";
n(css$4,{});

var _excluded$t = ["onInput", "className", "placeholder", "value"];
function edit$e(_ref) {
  var _onInput = _ref.onInput,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? [] : _ref$className,
    placeholder = _ref.placeholder,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? {} : _ref$value,
    props = _objectWithoutProperties(_ref, _excluded$t);
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    className: classNames(Array.isArray(className) && className || [className]),
    type: "link",
    value: value
  }), /*#__PURE__*/React.createElement("div", {
    className: "blueprint-blocks:link-field-wrap"
  }, /*#__PURE__*/React.createElement(RichTextField.edit, {
    tagName: "span",
    placeholder: placeholder,
    value: (value === null || value === void 0 ? void 0 : value.label) || '',
    onInput: function onInput(label) {
      return _onInput(Object.assign({}, value, {
        label: label
      }));
    }
  }), /*#__PURE__*/React.createElement(Dialog, {
    icon: /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: link
      }
    }),
    label: __('Edit Link Properties')
  }, /*#__PURE__*/React.createElement("div", {
    className: "blueprint-blocks:link-field-properties"
  }, /*#__PURE__*/React.createElement(UrlField.edit, {
    placeholder: "https://",
    value: value === null || value === void 0 ? void 0 : value.href,
    onInput: function onInput(href) {
      return _onInput(Object.assign({}, value, {
        href: href
      }));
    }
  }), /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: upRightFromSquare
    }
  }), /*#__PURE__*/React.createElement(BooleanField.edit, {
    options: [{
      label: 'Same Window',
      value: '_self'
    }, {
      label: 'New Window',
      value: '_blank'
    }],
    tooltip: "Open in new window?",
    tooltipPosition: "left",
    size: "small",
    value: (value === null || value === void 0 ? void 0 : value.target) === '_blank',
    onInput: function onInput(newWindow) {
      return _onInput(Object.assign({}, value, {
        target: newWindow && '_blank' || '_self'
      }));
    }
  })))));
}

var _excluded$s = ["value"];
function save$d(_ref) {
  var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$s);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "link",
    dangerouslySetInnerHTML: {
      __html: value
    }
  }));
}

var index$c = {
  name: 'link-field',
  edit: edit$e,
  save: save$d
};

var all$1 = {
	label: "Margin"
};
var bottom$1 = {
	label: "Margin Bottom"
};
var horizontal$1 = {
	label: "Horizontal Margins"
};
var left$2 = {
	label: "Margin Left"
};
var right$2 = {
	label: "Margin Right"
};
var top$1 = {
	label: "Margin Top"
};
var vertical$1 = {
	label: "Vertical Margins"
};
var MARGIN_DEFINITIONS = {
	all: all$1,
	bottom: bottom$1,
	horizontal: horizontal$1,
	left: left$2,
	right: right$2,
	top: top$1,
	vertical: vertical$1
};

var none$1 = {
	label: "None",
	value: "none"
};
var small$1 = {
	label: "Small",
	value: "small"
};
var medium$1 = {
	label: "Medium",
	value: "medium"
};
var large$1 = {
	label: "Large",
	value: "large"
};
var MARGIN_SIZES = {
	none: none$1,
	"xx-small": {
	label: "XX-Small",
	value: "xx-small"
},
	"x-small": {
	label: "X-Small",
	value: "x-small"
},
	small: small$1,
	medium: medium$1,
	large: large$1,
	"x-large": {
	label: "X-Large",
	value: "x-large"
},
	"xx-large": {
	label: "XX-Large",
	value: "xx-large"
}
};

var _excluded$r = ["onInput", "definitions", "sizes", "disabled", "value"];
function edit$d(_ref) {
  var _onInput = _ref.onInput,
    _ref$definitions = _ref.definitions,
    definitions = _ref$definitions === void 0 ? ['top', 'bottom'] : _ref$definitions,
    _ref$sizes = _ref.sizes,
    sizes = _ref$sizes === void 0 ? ['none', 'small', 'medium', 'large'] : _ref$sizes,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? {} : _ref$value,
    props = _objectWithoutProperties(_ref, _excluded$r);
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    type: "margin",
    value: value
  }), definitions.map(function (definition) {
    var _ref2 = definition in MARGIN_DEFINITIONS && MARGIN_DEFINITIONS[definition] || definition,
      label = _ref2.label;
    return /*#__PURE__*/React.createElement(IncrementField.edit, {
      disabled: disabled,
      label: label,
      options: sizes.map(function (size) {
        return size in MARGIN_SIZES && MARGIN_SIZES[size] || size;
      }),
      value: value === null || value === void 0 ? void 0 : value[definition],
      onInput: function onInput(newValue) {
        return _onInput(_objectSpread2(_objectSpread2({}, value), {}, _defineProperty({}, definition, newValue)));
      }
    });
  }));
}

var _excluded$q = ["value"];
function save$c(_ref) {
  var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$q);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "margin",
    dangerouslySetInnerHTML: {
      __html: value
    }
  }));
}

var index$b = {
  name: 'margin-field',
  edit: edit$d,
  save: save$c
};

var ALL_TYPES = [
	"image",
	"audio",
	"text",
	"video",
	"pdf"
];

var getAllowedTypes = memoize(function () {
  var allowedTypes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  if (!allowedTypes || (allowedTypes === null || allowedTypes === void 0 ? void 0 : allowedTypes.length) === 0) {
    return ALL_TYPES;
  }
  return allowedTypes.filter(function (type) {
    return ALL_TYPES.includes(type);
  });
});

var hasValue = memoize(function (value) {
  if (Array.isArray(value) && value.length > 0) {
    return true;
  }
  return !value;
});

var css$3 = ".blueprint-blocks\\:media-field-wrap {\n  position: relative;\n}\n\n.blueprint-blocks\\:media-field-item {\n  position: relative;\n  width: fit-content;\n}\n\n.blueprint-blocks\\:media-field-item img {\n  display: block;\n}\n\n.blueprint-blocks\\:media-field-item-options {\n  align-items: center;\n  background: rgba(0, 0, 0, 0.5);\n  bottom: 0;\n  display: flex;\n  left: 0;\n  justify-content: center;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: opacity 0.4s;\n}\n\n.blueprint-blocks\\:media-field-item-options > div {\n  align-items: center;\n  background: #fff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  padding: 4px;\n}\n\n.blueprint-blocks\\:media-field-item-options button {\n  height: 32px;\n  border-radius: 4px;\n  justify-content: center;\n  width: 32px;\n}\n\n.blueprint-blocks\\:media-field-item-options button:hover {\n  background: #eee;\n}\n\n.blueprint-blocks\\:media-field-item-options svg {\n  height: 16px;\n  width: 16px;\n}\n\n.blueprint-blocks\\:media-field-item:hover .blueprint-blocks\\:media-field-item-options {\n  opacity: 1;\n}";
n(css$3,{});

var _excluded$p = ["onInput", "label", "allowedTypes", "multiple", "noticeUI", "noticeOperations", "value"],
  _excluded2$3 = ["id", "height", "type", "url", "width"],
  _excluded3$1 = ["id", "height", "type", "url", "width"];
function edit$b(_ref) {
  var onInput = _ref.onInput,
    label = _ref.label,
    _ref$allowedTypes = _ref.allowedTypes,
    allowedTypes = _ref$allowedTypes === void 0 ? [] : _ref$allowedTypes,
    _ref$multiple = _ref.multiple,
    multiple = _ref$multiple === void 0 ? false : _ref$multiple,
    noticeUI = _ref.noticeUI,
    noticeOperations = _ref.noticeOperations,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? [] : _ref$value,
    props = _objectWithoutProperties(_ref, _excluded$p);
  var removeItem = function removeItem(id) {
    onInput(Object.values(value).filter(function (item) {
      return item.id !== id;
    }));
  };
  var selectItem = function selectItem(_ref2) {
    var id = _ref2.id,
      height = _ref2.height,
      type = _ref2.type,
      url = _ref2.url,
      width = _ref2.width;
      _objectWithoutProperties(_ref2, _excluded2$3);
    onInput([{
      id: id,
      height: height,
      width: width,
      type: type,
      url: url
    }]);
  };
  var selectMultiple = function selectMultiple(items) {
    onInput(Object.values(items).map(function (_ref3) {
      var id = _ref3.id,
        height = _ref3.height,
        type = _ref3.type,
        url = _ref3.url,
        width = _ref3.width;
        _objectWithoutProperties(_ref3, _excluded3$1);
      return {
        id: id,
        height: height,
        width: width,
        type: type,
        url: url
      };
    }));
  };
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    type: "media",
    value: value
  }), /*#__PURE__*/React.createElement("div", {
    className: "blueprint-blocks:media-field-wrap"
  }, !hasValue(value) && /*#__PURE__*/React.createElement(MediaPlaceholder, {
    icon: "format-image",
    labels: {
      title: label
    },
    allowedTypes: ALL_TYPES,
    multiple: multiple,
    onSelect: multiple && selectMultiple || selectItem,
    notices: noticeUI,
    onError: noticeOperations.createErrorNotice
  }), hasValue(value) && /*#__PURE__*/React.createElement("div", {
    className: "blueprint-blocks:media-field-items"
  }, (value || []).map(function (_ref4) {
    var id = _ref4.id;
      _ref4.height;
      var type = _ref4.type,
      url = _ref4.url;
      _ref4.width;
    return /*#__PURE__*/React.createElement("div", {
      className: "blueprint-blocks:media-field-item"
    }, type === 'image' && getAllowedTypes(allowedTypes).includes('image') && /*#__PURE__*/React.createElement("img", {
      src: url
    }), type === 'pdf' && getAllowedTypes(allowedTypes).includes('pdf') && /*#__PURE__*/React.createElement("span", {
      className: "fa-solid fa-file-pdf"
    }), /*#__PURE__*/React.createElement("div", {
      className: "blueprint-blocks:media-field-item-options"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MediaUpload, {
      allowedTypes: ALL_TYPES,
      gallery: multiple,
      multiple: multiple,
      onSelect: multiple && selectMultiple || selectItem,
      value: value.map(function (_ref5) {
        var id = _ref5.id;
        return id;
      }),
      render: function render(_ref6) {
        var open = _ref6.open;
        return /*#__PURE__*/React.createElement(Button, {
          label: __("Edit ".concat(label || 'Image')),
          onClick: open,
          icon: /*#__PURE__*/React.createElement("div", {
            dangerouslySetInnerHTML: {
              __html: pencil
            }
          })
        });
      }
    }), /*#__PURE__*/React.createElement(Button, {
      label: __("Remove ".concat(label || 'Image')),
      icon: /*#__PURE__*/React.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: trash
        }
      }),
      onClick: function onClick() {
        return removeItem(id);
      }
    }))));
  }), multiple && /*#__PURE__*/React.createElement(MediaUpload, {
    allowedTypes: ALL_TYPES,
    gallery: multiple,
    multiple: multiple,
    onSelect: multiple && selectMultiple || selectItem,
    value: value.map(function (_ref7) {
      var id = _ref7.id;
      return id;
    }),
    render: function render(_ref8) {
      var open = _ref8.open;
      return /*#__PURE__*/React.createElement("div", {
        onClick: open
      }, /*#__PURE__*/React.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: plus
        }
      }));
    }
  }))));
}
var edit$c = withNotices(edit$b);

var _excluded$o = ["allowedTypes", "multiple", "value"];
function save$b(_ref) {
  var _ref$allowedTypes = _ref.allowedTypes,
    allowedTypes = _ref$allowedTypes === void 0 ? [] : _ref$allowedTypes;
    _ref.multiple;
    var _ref$value = _ref.value,
    value = _ref$value === void 0 ? [] : _ref$value,
    props = _objectWithoutProperties(_ref, _excluded$o);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "media"
  }), (value || []).map(function (_ref2) {
    _ref2.id;
      _ref2.height;
      var type = _ref2.type,
      url = _ref2.url;
      _ref2.width;
    return /*#__PURE__*/React.createElement("div", null, type === 'image' && getAllowedTypes(allowedTypes).includes('image') && /*#__PURE__*/React.createElement("img", {
      src: url
    }), type === 'pdf' && getAllowedTypes(allowedTypes).includes('pdf') && /*#__PURE__*/React.createElement("span", {
      className: "fa-solid fa-file-pdf"
    }));
  }));
}

var index$a = {
  name: 'media-field',
  edit: edit$c,
  save: save$b
};

var _excluded$n = ["onInput", "min", "max", "step", "disabled", "value"];

//import './style.scss'

function edit$a(_ref) {
  var onInput = _ref.onInput,
    _ref$min = _ref.min,
    min = _ref$min === void 0 ? 0 : _ref$min,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? null : _ref$max,
    _ref$step = _ref.step,
    step = _ref$step === void 0 ? 1 : _ref$step,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$n);
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    type: "number",
    value: value
  }), /*#__PURE__*/React.createElement("input", {
    type: "number",
    disabled: disabled,
    min: Number(min),
    max: Number(max),
    step: Number(step),
    value: value,
    onChange: function onChange(event) {
      return onInput(Number(event.target.value));
    }
  }));
}

var _excluded$m = ["value"];
function save$a(_ref) {
  var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$m);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "number",
    dangerouslySetInnerHTML: {
      __html: value
    }
  }));
}

var index$9 = {
  name: 'number-field',
  edit: edit$a,
  save: save$a
};

var all = {
	label: "Padding"
};
var bottom = {
	label: "Padding Bottom"
};
var horizontal = {
	label: "Horizontal Paddings"
};
var left$1 = {
	label: "Padding Left"
};
var right$1 = {
	label: "Padding Right"
};
var top = {
	label: "Padding Top"
};
var vertical = {
	label: "Vertical Paddings"
};
var PADDING_DEFINITIONS = {
	all: all,
	bottom: bottom,
	horizontal: horizontal,
	left: left$1,
	right: right$1,
	top: top,
	vertical: vertical
};

var none = {
	label: "None",
	value: "none"
};
var small = {
	label: "Small",
	value: "small"
};
var medium = {
	label: "Medium",
	value: "medium"
};
var large = {
	label: "Large",
	value: "large"
};
var PADDING_SIZES = {
	none: none,
	"xx-small": {
	label: "XX-Small",
	value: "xx-small"
},
	"x-small": {
	label: "X-Small",
	value: "x-small"
},
	small: small,
	medium: medium,
	large: large,
	"x-large": {
	label: "X-Large",
	value: "x-large"
},
	"xx-large": {
	label: "XX-Large",
	value: "xx-large"
}
};

var _excluded$l = ["onInput", "definitions", "sizes", "disabled", "value"];
function edit$9(_ref) {
  var _onInput = _ref.onInput,
    _ref$definitions = _ref.definitions,
    definitions = _ref$definitions === void 0 ? ['top', 'bottom'] : _ref$definitions,
    _ref$sizes = _ref.sizes,
    sizes = _ref$sizes === void 0 ? ['none', 'small', 'medium', 'large'] : _ref$sizes,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? {} : _ref$value,
    props = _objectWithoutProperties(_ref, _excluded$l);
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    type: "padding",
    value: value
  }), definitions.map(function (definition) {
    var _ref2 = definition in PADDING_DEFINITIONS && PADDING_DEFINITIONS[definition] || definition,
      label = _ref2.label;
    return /*#__PURE__*/React.createElement(IncrementField.edit, {
      disabled: disabled,
      label: label,
      options: sizes.map(function (size) {
        return size in PADDING_SIZES && PADDING_SIZES[size] || size;
      }),
      value: value === null || value === void 0 ? void 0 : value[definition],
      onInput: function onInput(newValue) {
        return _onInput(_objectSpread2(_objectSpread2({}, value), {}, _defineProperty({}, definition, newValue)));
      }
    });
  }));
}

var _excluded$k = ["value"];
function save$9(_ref) {
  var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$k);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "padding",
    dangerouslySetInnerHTML: {
      __html: value
    }
  }));
}

var index$8 = {
  name: 'padding-field',
  edit: edit$9,
  save: save$9
};

var BOTH_AXES_OPTIONS = [
	{
		icon: "arrowUpLeft",
		label: "Left Top",
		value: [
			"left",
			"top"
		]
	},
	{
		icon: "arrowUp",
		label: "Center Top",
		value: [
			"center",
			"top"
		]
	},
	{
		icon: "arrowUpRight",
		label: "Right Top",
		value: [
			"right",
			"top"
		]
	},
	{
		icon: "arrowLeft",
		label: "Left Middle",
		value: [
			"left",
			"center"
		]
	},
	{
		icon: "circle",
		label: "Center Middle",
		value: [
			"center",
			"center"
		]
	},
	{
		icon: "arrowRight",
		label: "Right Middle",
		value: [
			"right",
			"center"
		]
	},
	{
		icon: "arrowDownLeft",
		label: "Left Bottom",
		value: [
			"left",
			"bottom"
		]
	},
	{
		icon: "arrowDown",
		label: "Center Bottom",
		value: [
			"center",
			"bottom"
		]
	},
	{
		icon: "arrowDownRight",
		label: "Right Bottom",
		value: [
			"right",
			"bottom"
		]
	}
];

var X_AXIS_OPTIONS = [
	{
		icon: "arrowLeft",
		label: "Left",
		value: [
			"left",
			null
		]
	},
	{
		icon: "circle",
		label: "Center",
		value: [
			"center",
			null
		]
	},
	{
		icon: "arrowRight",
		label: "Right",
		value: [
			"right",
			null
		]
	}
];

var Y_AXIS_OPTIONS = [
	{
		icon: "arrowUp",
		label: "Top",
		value: [
			null,
			"top"
		]
	},
	{
		icon: "circle",
		label: "Center",
		value: [
			null,
			"center"
		]
	},
	{
		icon: "arrowDown",
		label: "Bottom",
		value: [
			null,
			"Bottom"
		]
	}
];

var css$2 = ".blueprint-blocks\\:position-field-wrap {\n  border: 1px solid #8d96a0;\n  border-radius: 4px;\n  display: grid;\n  grid-auto-columns: 26px;\n  grid-auto-rows: 26px;\n  overflow: hidden;\n  position: relative;\n  user-select: none;\n}\n\n.blueprint-blocks\\:position-field-wrap.is-both-axes {\n  grid-template-columns: repeat(3, 26px);\n  height: 80px;\n  width: 80px;\n}\n\n.blueprint-blocks\\:position-field-wrap.is-x-axis {\n  grid-template-columns: repeat(3, 26px);\n  height: 28px;\n  width: 80px;\n}\n\n.blueprint-blocks\\:position-field-wrap.is-y-axis {\n  height: 80px;\n  width: 28px;\n}\n\n.blueprint-blocks\\:position-field-wrap > div {\n  align-items: center;\n  cursor: pointer;\n  display: grid;\n  justify-content: center;\n  position: relative;\n}\n\n.blueprint-blocks\\:position-field-wrap svg {\n  display: block;\n  height: 14px;\n  opacity: 0.25;\n  width: 14px;\n}\n\n.blueprint-blocks\\:position-field-wrap > div.is-active img {\n  opacity: 1;\n}\n\n.blueprint-blocks\\:position-field-wrap.is-stretch > div.is-active:before {\n  background: #e5f3f8;\n  content: \"\";\n  display: block;\n  height: 78px;\n  left: 0;\n  position: absolute;\n  top: -26px;\n  width: 26px;\n  z-index: -1;\n}";
n(css$2,{});

var _excluded$j = ["onInput", "axis", "stretch", "value"];
var getActiveIndex = memoize(function () {
  var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'both';
  var activeValue = arguments.length > 1 ? arguments[1] : undefined;
  var values = axisValues(axis);
  for (var i = 0; i < values.length; i++) {
    var _values$i, _values$i2, _values$i3;
    if ((activeValue === null || activeValue === void 0 ? void 0 : activeValue[0]) === ((_values$i = values[i]) === null || _values$i === void 0 ? void 0 : _values$i[0]) && ((activeValue === null || activeValue === void 0 ? void 0 : activeValue[1]) === ((_values$i2 = values[i]) === null || _values$i2 === void 0 ? void 0 : _values$i2[1]) || (activeValue === null || activeValue === void 0 ? void 0 : activeValue[1]) === 'stretch' && ((_values$i3 = values[i]) === null || _values$i3 === void 0 ? void 0 : _values$i3[1]) === 'center')) {
      return i;
    }
  }
  return 0;
});
var axisOptions = memoize(function () {
  var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'both';
  if (axis === 'x') {
    return X_AXIS_OPTIONS;
  } else if (axis === 'y') {
    return Y_AXIS_OPTIONS;
  }
  return BOTH_AXES_OPTIONS;
});
var axisValues = memoize(function () {
  var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'both';
  return axisOptions(axis).map(function (_ref) {
    var value = _ref.value;
    return value;
  });
});
function edit$8(_ref2) {
  var onInput = _ref2.onInput,
    _ref2$axis = _ref2.axis,
    axis = _ref2$axis === void 0 ? 'both' : _ref2$axis,
    _ref2$stretch = _ref2.stretch,
    stretch = _ref2$stretch === void 0 ? true : _ref2$stretch,
    value = _ref2.value,
    props = _objectWithoutProperties(_ref2, _excluded$j);
  var activeIndex = getActiveIndex('both', value);
  var onChange = function onChange(_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      horizontal = _ref4[0],
      vertical = _ref4[1];
    if (axis === 'both' && stretch === true && (value === null || value === void 0 ? void 0 : value[0]) === horizontal && (value === null || value === void 0 ? void 0 : value[1]) === vertical) {
      onInput([horizontal, 'stretch']);
    } else {
      onInput([horizontal, vertical]);
    }
  };
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    type: "position",
    value: value
  }), /*#__PURE__*/React.createElement("div", {
    className: classNames('blueprint-blocks:position-field-wrap', _defineProperty({
      'can-stretch': axis === 'both' && stretch === true,
      'is-stretch': axis === 'both' && stretch === true && (value === null || value === void 0 ? void 0 : value[1]) === 'stretch',
      'is-both-axes': axis === 'both'
    }, "is-".concat(axis, "-axis"), axis !== 'both'))
  }, axisOptions(axis).map(function (_ref5, index) {
    var icon = _ref5.icon,
      label = _ref5.label,
      value = _ref5.value;
    return /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return onChange(value);
      },
      title: label,
      className: classNames({
        'is-active': index === activeIndex
      })
    }, /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: Icons[icon]
      }
    }));
  })));
}

var _excluded$i = ["value"];
function save$8(_ref) {
  var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$i);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "select",
    dangerouslySetInnerHTML: {
      __html: (Array.isArray(value) && value || [value]).join(',')
    }
  }));
}

var index$7 = {
  name: 'position-field',
  edit: edit$8,
  save: save$8
};

var _excluded$h = ["onInput", "min", "max", "step", "disabled", "value"];

//import './style.scss'

function edit$7(_ref) {
  var onInput = _ref.onInput,
    _ref$min = _ref.min,
    min = _ref$min === void 0 ? 0 : _ref$min,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? 100 : _ref$max,
    _ref$step = _ref.step,
    step = _ref$step === void 0 ? 1 : _ref$step;
    _ref.disabled;
    var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$h);
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    type: "text",
    value: value
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: Number(min),
    max: Number(max),
    step: Number(step),
    value: value,
    onChange: function onChange(event) {
      return onInput(Number(event.target.value));
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: Number(min),
    max: Number(max),
    step: Number(step),
    value: value,
    onChange: function onChange(event) {
      return onInput(Number(event.target.value));
    }
  }));
}

var _excluded$g = ["placeholder", "value"];
function save$7(_ref) {
  _ref.placeholder;
    var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$g);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "range",
    dangerouslySetInnerHTML: {
      __html: value
    }
  }));
}

var RangeField = {
  name: 'range-field',
  edit: edit$7,
  save: save$7
};

var css$1 = ".blueprint-blocks\\:repeating-field-wrap {\n  position: relative;\n}\n\n.blueprint-blocks\\:repeating-field-minus,\n.blueprint-blocks\\:repeating-field-plus {\n  align-items: center;\n  cursor: pointer;\n  display: grid;\n  justify-content: center;\n  height: 26px;\n  transition: background 0.4s, colors 0.4s;\n  width: 26px;\n}\n\n.blueprint-blocks\\:repeating-field-minus:not(.is-disabled):hover,\n.blueprint-blocks\\:repeating-field-plus:not(.is-disabled):hover {\n  background: #e5f3f8;\n  color: #0085ba;\n}\n\n.blueprint-blocks\\:repeating-field-minus.is-disabled,\n.blueprint-blocks\\:repeating-field-plus.is-disabled {\n  cursor: default;\n  opacity: 0.25;\n}\n\n.blueprint-blocks\\:repeating-field-minus img,\n.blueprint-blocks\\:repeating-field-plus img {\n  display: block;\n  height: 14px;\n  width: 14px;\n}";
n(css$1,{});

var _excluded$f = ["onInput", "children", "min", "max", "value"];
function edit$6(_ref) {
  var _onInput = _ref.onInput,
    children = _ref.children,
    _ref$min = _ref.min,
    min = _ref$min === void 0 ? 0 : _ref$min,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? null : _ref$max,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? [] : _ref$value,
    props = _objectWithoutProperties(_ref, _excluded$f);
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    type: "repeating"
  }), value.map(function (row, index) {
    return children.map(function (_ref2) {
      var props = _ref2.props,
        type = _ref2.type;
      var Component = type;
      return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
        onInput: function onInput(childValue) {
          if (!(props !== null && props !== void 0 && props.attributeName)) {
            return;
          }
          var newValue = _toConsumableArray(value);
          newValue[index][props.attributeName] = childValue;
          _onInput(newValue);
        },
        value: row === null || row === void 0 ? void 0 : row[props.attributeName]
      }));
    });
  }), /*#__PURE__*/React.createElement("div", {
    className: classNames('blueprint-blocks:repeating-field-minus', {
      'is-disabled': value.length <= min
    }),
    onClick: function onClick() {
      _onInput(value.slice(0, -1));
    }
  }, /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: minus
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: classNames('blueprint-blocks:repeating-field-minus', {
      'is-disabled': max !== null && value.length >= max
    }),
    onClick: function onClick() {
      _onInput([].concat(_toConsumableArray(value), [{}]));
    }
  }, /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: plus
    }
  })));
}

var _excluded$e = ["value"];
function save$6(_ref) {
  _ref.value;
    var props = _objectWithoutProperties(_ref, _excluded$e);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "repeating"
  }));
}

var index$6 = {
  name: 'repeating-field',
  edit: edit$6,
  save: save$6
};

var _excluded$d = ["onInput", "options", "multiple", "disabled", "value"];

//import './style.scss'

function edit$5(_ref) {
  var _ref2;
  var onInput = _ref.onInput,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    _ref$multiple = _ref.multiple,
    multiple = _ref$multiple === void 0 ? false : _ref$multiple,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$d);
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    type: "select",
    value: value
  }), /*#__PURE__*/React.createElement(SelectControl, {
    disabled: disabled,
    onChange: onInput,
    options: options,
    multiple: multiple,
    value: multiple && (Array.isArray(value) && value || [value]) || ((_ref2 = Array.isArray(value) && value || [value]) === null || _ref2 === void 0 ? void 0 : _ref2[0])
  }));
}

var _excluded$c = ["value"];
function save$5(_ref) {
  var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$c);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "select",
    dangerouslySetInnerHTML: {
      __html: (Array.isArray(value) && value || [value]).join(',')
    }
  }));
}

var index$5 = {
  name: 'select-field',
  edit: edit$5,
  save: save$5
};

var _excluded$b = ["onInput", "placeholder", "disabled", "rows", "value"];

//import './style.scss'

function edit$4(_ref) {
  var onInput = _ref.onInput,
    placeholder = _ref.placeholder,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? 8 : _ref$rows,
    value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$b);
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    type: "text",
    value: value
  }), /*#__PURE__*/React.createElement(TextareaControl, {
    disabled: disabled,
    onChange: onInput,
    placeholder: placeholder,
    rows: rows,
    value: value
  }));
}

var _excluded$a = ["value"];
function save$4(_ref) {
  var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$a);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "textarea",
    dangerouslySetInnerHTML: {
      __html: value
    }
  }));
}

var index$4 = {
  name: 'textarea-field',
  edit: edit$4,
  save: save$4
};

var left = {
	icon: "editor-alignleft",
	value: "left"
};
var center = {
	icon: "editor-aligncenter",
	value: "center"
};
var right = {
	icon: "editor-alignright",
	value: "right"
};
var TEXT_ALIGN_CONTROLS = {
	left: left,
	center: center,
	right: right
};

var _excluded$9 = ["onInput", "controls", "value"];
function edit$3(_ref) {
  var onInput = _ref.onInput,
    _ref$controls = _ref.controls,
    controls = _ref$controls === void 0 ? ['left', 'center', 'right'] : _ref$controls,
    value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$9);
  return /*#__PURE__*/React.createElement(ToolbarField.edit, _extends({}, props, {
    type: "align",
    value: value,
    options: controls.map(function (control) {
      return control in TEXT_ALIGN_CONTROLS && TEXT_ALIGN_CONTROLS[control] || control;
    }),
    onInput: onInput
  }));
}

var _excluded$8 = ["value"];
function save$3(_ref) {
  var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$8);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "align",
    dangerouslySetInnerHTML: {
      __html: value
    }
  }));
}

var index$3 = {
  name: 'text-align-field',
  edit: edit$3,
  save: save$3
};

var h1 = {
	icon: "heading",
	subscript: "1",
	label: "Heading 1",
	value: "h1"
};
var h2 = {
	icon: "heading",
	subscript: "2",
	label: "Heading 2",
	value: "h2"
};
var h3 = {
	icon: "heading",
	subscript: "3",
	label: "Heading 3",
	value: "h3"
};
var h4 = {
	icon: "heading",
	subscript: "4",
	label: "Heading 4",
	value: "h4"
};
var h5 = {
	icon: "heading",
	subscript: "5",
	label: "Heading 5",
	value: "h5"
};
var h6 = {
	icon: "heading",
	subscript: "6",
	label: "Heading 6",
	value: "h6"
};
var p = {
	icon: "paragraph",
	label: "Paragraph",
	value: "p"
};
var TEXT_SIZES = {
	h1: h1,
	h2: h2,
	h3: h3,
	h4: h4,
	h5: h5,
	h6: h6,
	p: p
};

var _excluded$7 = ["onInput", "textSizes", "value"];
function edit$2(_ref) {
  var onInput = _ref.onInput,
    _ref$textSizes = _ref.textSizes,
    textSizes = _ref$textSizes === void 0 ? ['h1', 'h2', 'h3', 'h4'] : _ref$textSizes,
    value = _ref.value;
    _objectWithoutProperties(_ref, _excluded$7);
  return /*#__PURE__*/React.createElement(ToolbarField.edit, {
    options: textSizes.map(function (textSize) {
      return textSize in TEXT_SIZES && TEXT_SIZES[textSize] || textSize;
    }),
    value: value,
    onInput: onInput
  });
}

var _excluded$6 = ["value"];
function save$2(_ref) {
  var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$6);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "text-size",
    dangerouslySetInnerHTML: {
      __html: value
    }
  }));
}

var index$2 = {
  name: 'text-size-field',
  edit: edit$2,
  save: save$2
};

var css = ".blueprint-blocks\\:toggle-field-wrap {\n  --grid-columns: 2;\n  border: 1px solid #8d96a0;\n  border-radius: 4px;\n  min-height: 26px;\n  overflow: hidden;\n  position: relative;\n  user-select: none;\n}\n\n.blueprint-blocks\\:toggle-field-items {\n  display: grid;\n  gap: 1px;\n  grid-template-columns: repeat(var(--grid-columns), minmax(0, 1fr));\n  width: 100%;\n}\n\n.blueprint-blocks\\:toggle-field-item {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  height: 26px;\n  outline: 1px solid #e2e4e7;\n  text-align: center;\n  transition: background 0.4s, colors 0.4s;\n  white-space: nowrap;\n}\n\n.blueprint-blocks\\:toggle-field-item.has-icon i {\n  font-size: 16px;\n}\n\n.blueprint-blocks\\:toggle-field-items.has-images .blueprint-blocks\\:toggle-field-item {\n  flex-direction: column;\n  height: auto;\n  justify-content: start;\n  overflow: hidden;\n  white-space: normal;\n}\n\n.blueprint-blocks\\:toggle-field-items.has-images .blueprint-blocks\\:toggle-field-item span {\n  padding: 8px;\n}\n\n.blueprint-blocks\\:toggle-field-items.has-images .blueprint-blocks\\:toggle-field-item.has-icon i {\n  font-size: 32px;\n}\n\n.blueprint-blocks\\:toggle-field-item.has-image img {\n  display: block;\n  height: 100%;\n  object-fit: contain;\n  object-position: center;\n  width: 100%;\n}\n\n.blueprint-blocks\\:toggle-field-item:hover {\n  background: #e5f3f8;\n  color: #0085ba;\n}\n\n.blueprint-blocks\\:toggle-field-item.is-active {\n  background: #0085ba;\n  color: #fff;\n}\n\n.blueprint-blocks\\:toggle-field-image {\n  display: grid;\n  width: 100%;\n}\n\n.blueprint-blocks\\:toggle-field-image:before {\n  content: \"\";\n  display: block;\n  padding-bottom: 64%;\n}\n\n.blueprint-blocks\\:toggle-field-image:before,\n.blueprint-blocks\\:toggle-field-image img {\n  grid-column: 1;\n  grid-row: 1;\n}";
n(css,{});

var _excluded$5 = ["onInput", "options", "multiple", "disabled", "value"],
  _excluded2$2 = ["icon", "image", "label"];
var optionsHaveImages = memoize(function (options) {
  return options.reduce(function (hasImages, _ref) {
    var image = _ref.image;
    return !!(hasImages || image);
  }, false);
});
function edit$1(_ref2) {
  var onInput = _ref2.onInput,
    _ref2$options = _ref2.options,
    options = _ref2$options === void 0 ? [] : _ref2$options,
    _ref2$multiple = _ref2.multiple,
    multiple = _ref2$multiple === void 0 ? false : _ref2$multiple;
    _ref2.disabled;
    var _ref2$value = _ref2.value,
    value = _ref2$value === void 0 ? [] : _ref2$value,
    props = _objectWithoutProperties(_ref2, _excluded$5);
  var hasImages = optionsHaveImages(options);
  var onChooseOption = function onChooseOption(index) {
    var _options$index;
    var newValue = _toConsumableArray(value);
    var optionValue = options === null || options === void 0 || (_options$index = options[index]) === null || _options$index === void 0 ? void 0 : _options$index.value;
    if (multiple) {
      if (newValue.indexOf(optionValue) === -1) {
        newValue.push(optionValue);
      } else {
        newValue = newValue.filter(function (value) {
          return value !== optionValue;
        });
      }
    } else {
      var _options$index2;
      newValue = [options === null || options === void 0 || (_options$index2 = options[index]) === null || _options$index2 === void 0 ? void 0 : _options$index2.value];
    }
    onInput(newValue);
  };
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    type: "toggle",
    value: value
  }), /*#__PURE__*/React.createElement("div", {
    className: "blueprint-blocks:toggle-field-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blueprint-blocks:toggle-field-items"
  }, options.map(function (_ref3, index) {
    var icon = _ref3.icon,
      image = _ref3.image,
      label = _ref3.label,
      option = _objectWithoutProperties(_ref3, _excluded2$2);
    return /*#__PURE__*/React.createElement("div", {
      className: classNames('blueprint-blocks:toggle-field-item', {
        'is-active': (value === null || value === void 0 ? void 0 : value.indexOf(option === null || option === void 0 ? void 0 : option.value)) !== -1,
        'has-icon': !!icon,
        'has-image': !!image
      }),
      title: !!icon && label,
      onClick: function onClick() {
        return onChooseOption(index);
      }
    }, !!image && /*#__PURE__*/React.createElement("div", {
      className: "blueprint-blocks:toggle-field-label"
    }, /*#__PURE__*/React.createElement("img", {
      src: image
    })), !!icon && !image && /*#__PURE__*/React.createElement("i", {
      className: icon
    }), (!icon || hasImages) && /*#__PURE__*/React.createElement("span", null, label));
  }))));
}

var _excluded$4 = ["value"];
function save$1(_ref) {
  var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$4);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "toggle",
    dangerouslySetInnerHTML: {
      __html: (Array.isArray(value) && value || [value]).join(',')
    }
  }));
}

var index$1 = {
  name: 'toggle-field',
  edit: edit$1,
  save: save$1
};

var _excluded$3 = ["onInput", "min", "max", "step", "disabled", "value"];
function edit(_ref) {
  var onInput = _ref.onInput,
    _ref$min = _ref.min,
    min = _ref$min === void 0 ? 0 : _ref$min,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? null : _ref$max,
    _ref$step = _ref.step,
    step = _ref$step === void 0 ? 1 : _ref$step,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$3);
  return /*#__PURE__*/React.createElement(Field.edit, _extends({}, props, {
    type: "width",
    value: value
  }), /*#__PURE__*/React.createElement(RangeField.edit, {
    disabled: disabled,
    min: Number(min),
    max: Number(max),
    step: Number(step),
    value: value,
    onInput: onInput
  }));
}

var _excluded$2 = ["value"];
function save(_ref) {
  var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded$2);
  return /*#__PURE__*/React.createElement(Field.save, _extends({}, props, {
    type: "number",
    dangerouslySetInnerHTML: {
      __html: value
    }
  }));
}

var index = {
  name: 'width-field',
  edit: edit,
  save: save
};

var Fields = /*#__PURE__*/Object.freeze({
	__proto__: null,
	AlignField: index$k,
	AnchorField: index$j,
	BooleanField: BooleanField,
	ColorField: index$i,
	EmailField: index$h,
	GradientField: index$g,
	GridField: index$f,
	Html: index$e,
	IncrementField: IncrementField,
	InnerBlocks: index$d,
	LinkField: index$c,
	MarginField: index$b,
	MediaField: index$a,
	NumberField: index$9,
	PaddingField: index$8,
	PositionField: index$7,
	RangeField: RangeField,
	RepeatingField: index$6,
	RichTextField: RichTextField,
	SelectField: index$5,
	TextAlignField: index$3,
	TextField: TextField,
	TextSizeField: index$2,
	TextareaField: index$4,
	ToggleField: index$1,
	ToolbarField: ToolbarField,
	UrlField: UrlField,
	WidthField: index
});

var _excluded$1 = ["children", "className", "style", "name", "attributeName", "type", "tagName"],
  _excluded2$1 = ["children", "tagName"],
  _excluded3 = ["label"],
  _excluded4 = ["label"];
var Components$1 = Object.fromEntries(Object.values(Fields).map(function (_ref) {
  var name = _ref.name,
    edit = _ref.edit,
    save = _ref.save;
  return [name, {
    edit: edit,
    save: save
  }];
}));

/**
 * Renders an array of JSX objects
 * 
 * @param {array} jsx 
 */
function renderJsxArray$1(_ref2) {
  var blockName = _ref2.blockName,
    attributes = _ref2.attributes,
    setAttributes = _ref2.setAttributes,
    _ref2$jsx = _ref2.jsx,
    jsx = _ref2$jsx === void 0 ? [] : _ref2$jsx;
  return jsx.map(function (_ref3) {
    var _ref3$children = _ref3.children,
      children = _ref3$children === void 0 ? [] : _ref3$children,
      _ref3$className = _ref3.className,
      className = _ref3$className === void 0 ? [] : _ref3$className,
      _ref3$style = _ref3.style,
      style = _ref3$style === void 0 ? {} : _ref3$style,
      _ref3$name = _ref3.name,
      name = _ref3$name === void 0 ? '' : _ref3$name,
      _ref3$attributeName = _ref3.attributeName,
      attributeName = _ref3$attributeName === void 0 ? '' : _ref3$attributeName,
      _ref3$type = _ref3.type,
      type = _ref3$type === void 0 ? '' : _ref3$type,
      _ref3$tagName = _ref3.tagName,
      tagName = _ref3$tagName === void 0 ? 'div' : _ref3$tagName,
      props = _objectWithoutProperties(_ref3, _excluded$1);
    var Component = tagName;
    if (type in Components$1 && Components$1[type]) {
      Component = Components$1[type].edit;
      if (typeof (attributes === null || attributes === void 0 ? void 0 : attributes[attributeName]) !== 'undefined') {
        props.value = attributes === null || attributes === void 0 ? void 0 : attributes[attributeName];
      }
      return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
        blockName: blockName,
        className: classNames$1(className, {
          block: attributes
        }),
        styles: styles(style, {
          block: attributes
        }),
        name: name,
        attributeName: attributeName,
        tagName: tagName,
        attributes: attributes,
        setAttributes: setAttributes,
        onInput: function onInput(value) {
          if (!attributeName) {
            return;
          }
          setAttributes(_defineProperty({}, attributeName, value));
        }
      }), renderJsxArray$1({
        blockName: blockName,
        attributes: attributes,
        setAttributes: setAttributes,
        jsx: children
      }));
    }
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      blockName: blockName,
      className: classNames$1(className, {
        block: attributes
      }),
      styles: styles(style, {
        block: attributes
      })
    }), renderJsxArray$1({
      blockName: blockName,
      attributes: attributes,
      setAttributes: setAttributes,
      jsx: children
    }));
  });
}

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
function BlockEdit(blueprint) {
  return function (_ref4) {
    var attributes = _ref4.attributes,
      setAttributes = _ref4.setAttributes;
    var blockProps = useBlockProps();
    var blockName = blockProps['data-type'];
    var blockSidebar = Array.isArray(blueprint.blockSidebar) && blueprint.blockSidebar || [blueprint.blockSidebar];
    var blockToolbar = Array.isArray(blueprint.blockToolbar) && blueprint.blockToolbar || [blueprint.blockToolbar];
    var _ref5 = blueprint.blockEdit || {},
      _ref5$children = _ref5.children,
      children = _ref5$children === void 0 ? [] : _ref5$children,
      _ref5$tagName = _ref5.tagName,
      tagName = _ref5$tagName === void 0 ? 'div' : _ref5$tagName,
      blockEdit = _objectWithoutProperties(_ref5, _excluded2$1);
    var Component = tagName;
    var blockClassNames = [].concat(_toConsumableArray(Array.isArray(blockProps.className) && blockProps.className || [blockProps.className]), _toConsumableArray(Array.isArray(blockEdit.className) && blockEdit.className || [blockEdit.className]));
    var blockStyles = Object.assign({}, blockProps.style || {}, blockEdit.style || {});
    return /*#__PURE__*/React.createElement(Component, _extends({}, blockProps, blockEdit, {
      className: classNames$1(blockClassNames, {
        block: attributes
      }),
      style: styles(blockStyles, {
        block: attributes
      })
    }), renderJsxArray$1({
      blockName: blockName,
      attributes: attributes,
      setAttributes: setAttributes,
      jsx: children
    }), blockSidebar.map(function (_ref6) {
      var label = _ref6.label,
        props = _objectWithoutProperties(_ref6, _excluded3);
      return /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
        title: label
      }, renderJsxArray$1({
        blockName: blockName,
        attributes: attributes,
        setAttributes: setAttributes,
        jsx: [props]
      })));
    }), blockToolbar.map(function (_ref7) {
      _ref7.label;
        var props = _objectWithoutProperties(_ref7, _excluded4);
      return /*#__PURE__*/React.createElement(BlockControls, null, renderJsxArray$1({
        blockName: blockName,
        attributes: attributes,
        setAttributes: setAttributes,
        jsx: [props]
      }));
    }));
  };
}

var _excluded = ["children", "className", "style", "name", "attributeName", "type", "tagName"],
  _excluded2 = ["children", "tagName"];
var Components = Object.fromEntries(Object.values(Fields).map(function (_ref) {
  var name = _ref.name,
    edit = _ref.edit,
    save = _ref.save;
  return [name, {
    edit: edit,
    save: save
  }];
}));

/**
 * Renders an array of JSX objects
 * 
 * @param {array} jsx 
 */
function renderJsxArray(_ref2) {
  var blockName = _ref2.blockName,
    attributes = _ref2.attributes,
    _ref2$jsx = _ref2.jsx,
    jsx = _ref2$jsx === void 0 ? [] : _ref2$jsx;
  return jsx.map(function (_ref3) {
    var _ref3$children = _ref3.children,
      children = _ref3$children === void 0 ? [] : _ref3$children,
      _ref3$className = _ref3.className,
      className = _ref3$className === void 0 ? [] : _ref3$className,
      _ref3$style = _ref3.style,
      style = _ref3$style === void 0 ? {} : _ref3$style,
      _ref3$name = _ref3.name,
      name = _ref3$name === void 0 ? '' : _ref3$name,
      _ref3$attributeName = _ref3.attributeName,
      attributeName = _ref3$attributeName === void 0 ? '' : _ref3$attributeName,
      _ref3$type = _ref3.type,
      type = _ref3$type === void 0 ? '' : _ref3$type,
      _ref3$tagName = _ref3.tagName,
      tagName = _ref3$tagName === void 0 ? 'div' : _ref3$tagName,
      props = _objectWithoutProperties(_ref3, _excluded);
    var Component = tagName;
    if (type in Components && Components[type]) {
      Component = Components[type].save;
      if (typeof (attributes === null || attributes === void 0 ? void 0 : attributes[attributeName]) !== 'undefined') {
        props.value = attributes === null || attributes === void 0 ? void 0 : attributes[attributeName];
      }
      return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
        blockName: blockName,
        className: classNames$1(className, {
          block: attributes
        }),
        styles: styles(style, {
          block: attributes
        }),
        name: name,
        tagName: tagName,
        attributes: attributes
      }), renderJsxArray({
        blockName: blockName,
        attributes: attributes,
        jsx: children
      }));
    }
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      blockName: blockName,
      className: classNames$1(className, {
        block: attributes
      }),
      styles: styles(style, {
        block: attributes
      })
    }), renderJsxArray({
      blockName: blockName,
      attributes: attributes,
      jsx: children
    }));
  });
}

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
function BlockSave(blueprint) {
  return function (_ref4) {
    var attributes = _ref4.attributes;
    var blockProps = useBlockProps.save();
    var blockName = blockProps.className;
    var _ref5 = blueprint.blockSave !== null && blueprint.blockSave || blueprint.blockEdit || {},
      _ref5$children = _ref5.children,
      children = _ref5$children === void 0 ? [] : _ref5$children,
      _ref5$tagName = _ref5.tagName,
      tagName = _ref5$tagName === void 0 ? 'div' : _ref5$tagName,
      blockSave = _objectWithoutProperties(_ref5, _excluded2);
    var Component = tagName;
    var blockClassNames = [].concat(_toConsumableArray(Array.isArray(blockProps.className) && blockProps.className || [blockProps.className]), _toConsumableArray(Array.isArray(blockSave.className) && blockSave.className || [blockSave.className]));
    var blockStyles = Object.assign({}, blockProps.style || {}, blockSave.style || {});
    return /*#__PURE__*/React.createElement(Component, _extends({}, blockProps, blockSave, {
      className: classNames$1(blockClassNames, {
        block: attributes
      }),
      style: styles(blockStyles, {
        block: attributes
      })
    }), renderJsxArray({
      blockName: blockName,
      attributes: attributes,
      jsx: children
    }));
  };
}

export { index$k as AlignField, index$j as AnchorField, BlockEdit, BlockSave, BooleanField, index$i as ColorField, index$h as EmailField, index$g as GradientField, index$f as GridField, index$e as Html, IncrementField, index$d as InnerBlocks, index$c as LinkField, index$b as MarginField, index$a as MediaField, index$9 as NumberField, index$8 as PaddingField, index$7 as PositionField, RangeField, index$6 as RepeatingField, RichTextField, index$5 as SelectField, index$3 as TextAlignField, TextField, index$2 as TextSizeField, index$4 as TextareaField, index$1 as ToggleField, ToolbarField, UrlField, index as WidthField };
//# sourceMappingURL=index.js.map
