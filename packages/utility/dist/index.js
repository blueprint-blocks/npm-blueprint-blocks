import npmClassNames from 'classnames';
import memoize from 'micro-memoize';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

function delimiterize() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(/([a-z])([A-Z])/g, function (match, p1, p2) {
    return "".concat(p1, "-").concat(p2);
  }).replace(/[^\w\s-]/g, '').replace(/(\s)/g, '-').toLowerCase();
}

function camelize() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return delimiterize(string).replace(/\-(.)/g, function (match, p1) {
    return p1.toUpperCase();
  });
}

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
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
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

var valueByIdentifier = memoize(function () {
  var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = _objectSpread2({}, context);
  var parts = identifier.split('.');
  if (parts.length === 0) {
    return '';
  }
  var key = parts.shift();
  if (!(context !== null && context !== void 0 && context[key])) {
    return '';
  }
  if (parts.length === 0 && key === 'length') {
    return Object.values(value).length;
  }
  if (parts.length === 0) {
    return value[key];
  }
  return valueByIdentifier(parts.join('.'), value[key]);
});
function replaceTokens() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (typeof string !== 'string') {
    return string;
  }
  return string.replaceAll(/\{\{\s(.*?)\s\}\}/g, function (match, p1) {
    return valueByIdentifier(p1, context);
  });
}

/**
 * Wraps the default classNames function to provide 
 * contextual token replacement
 */
function classNames() {
  var _classNames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var classNameArray = Array.isArray(_classNames) && _classNames || [_classNames];
  classNameArray = classNameArray.map(function (className) {
    if (typeof className === 'array') {
      return classNames(className, context);
    } else if (_typeof(className) === 'object') {
      return Object.fromEntries(Object.entries(className).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        return [replaceTokens(key, context), typeof value === 'boolean' ? value : classNames(value, context)];
      }));
    }
    return className;
  });
  return replaceTokens(npmClassNames.apply(void 0, _toConsumableArray(classNameArray)), context);
}

var _excluded$1 = ["clientId", "attributes", "innerBlocks"];
/**
 * Returns the block context with private attributes formatted.
 * 
 * Note: The length of the inner blocks is saved as an attribute because 
 * they can not be directly referenced upon initial save.
 */
function getBlockContext() {
  var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  context.clientId;
    var attributes = context.attributes,
    innerBlocks = context.innerBlocks,
    blockContext = _objectWithoutProperties(context, _excluded$1);
  var index = 1 + ((attributes === null || attributes === void 0 ? void 0 : attributes._index) || 0);
  var length = (attributes === null || attributes === void 0 ? void 0 : attributes._innerBlocksLength) || 0;
  return _objectSpread2(_objectSpread2({}, blockContext), {}, {
    block: _objectSpread2({
      index: index
    }, attributes),
    innerBlocks: (innerBlocks === null || innerBlocks === void 0 ? void 0 : innerBlocks.length) && innerBlocks || new Array(length).fill(null)
  });
}

/**
 * React hook for retrieving props from registered selectors.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/#useselect
 */

/**
 * 
 * @param {*} clientId 
 * @returns 
 */
function getBlockIndex(clientId) {
  var _useSelect = useSelect(function (select) {
      return {
        getBlockIndex: select('core/editor').getBlockIndex
      };
    }),
    getBlockIndex = _useSelect.getBlockIndex;
  return getBlockIndex(clientId) || 0;
}

/**
 * React hook for retrieving props from registered selectors.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/#useselect
 */

/**
 * 
 * @param {*} clientId 
 * @returns 
 */
function getInnerBlocks(clientId) {
  var _useSelect = useSelect(function (select) {
      return {
        getBlocks: select('core/block-editor').getBlocks
      };
    }),
    getBlocks = _useSelect.getBlocks;
  return getBlocks(clientId) || [];
}

function styles() {
  var _styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (_typeof(_styles) !== 'object') {
    return {};
  }
  var stylesArray = Object.entries(_styles).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      property = _ref2[0],
      value = _ref2[1];
    return [replaceTokens(property, context), replaceTokens(value, context)];
  });
  return Object.fromEntries(stylesArray);
}

var _excluded = ["children", "className", "style", "name", "attributeName", "type", "tagName"];

/**
 * Renders an array of JSX objects
 * 
 * @param {array} jsx 
 */
function renderJsxArray(_ref) {
  var blockName = _ref.blockName,
    attributes = _ref.attributes,
    _ref$setAttributes = _ref.setAttributes,
    setAttributes = _ref$setAttributes === void 0 ? null : _ref$setAttributes,
    _ref$jsx = _ref.jsx,
    jsx = _ref$jsx === void 0 ? [] : _ref$jsx,
    _ref$context = _ref.context,
    context = _ref$context === void 0 ? {} : _ref$context;
  var Components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return jsx.map(function (_ref2) {
    var _ref2$children = _ref2.children,
      children = _ref2$children === void 0 ? [] : _ref2$children,
      _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? [] : _ref2$className,
      _ref2$style = _ref2.style,
      style = _ref2$style === void 0 ? {} : _ref2$style,
      _ref2$name = _ref2.name,
      name = _ref2$name === void 0 ? '' : _ref2$name,
      _ref2$attributeName = _ref2.attributeName,
      attributeName = _ref2$attributeName === void 0 ? '' : _ref2$attributeName,
      _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? '' : _ref2$type,
      _ref2$tagName = _ref2.tagName,
      tagName = _ref2$tagName === void 0 ? 'div' : _ref2$tagName,
      props = _objectWithoutProperties(_ref2, _excluded);
    var attributeValue = attributes === null || attributes === void 0 ? void 0 : attributes[attributeName];
    var jsxAttributes = Object.fromEntries(Object.entries(props).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        name = _ref4[0],
        value = _ref4[1];
      if (typeof value === 'string') {
        return [name, replaceTokens(value, _objectSpread2(_objectSpread2({}, context), {}, {
          attribute: {
            value: attributeValue
          }
        }))];
      } else {
        return [name, value];
      }
    }));
    var jsxClassNames = classNames(className, _objectSpread2(_objectSpread2({}, context), {}, {
      attribute: {
        value: attributeValue
      }
    }));
    if (jsxClassNames) {
      jsxAttributes.className = jsxClassNames;
    }
    var jsxStyles = styles(style, _objectSpread2(_objectSpread2({}, context), {}, {
      attribute: {
        value: attributeValue
      }
    }));
    if (Object.values(jsxStyles).length > 0) {
      jsxAttributes.style = jsxStyles;
    }
    var Component = tagName;
    if (type in Components && Components[type]) {
      Component = Components[type];
      return /*#__PURE__*/React.createElement(Component, _extends({}, jsxAttributes, {
        blockName: blockName,
        name: name,
        tagName: tagName,
        attributes: attributes
      }, setAttributes !== null && {
        attributeName: attributeName,
        setAttributes: setAttributes,
        onInput: function onInput(value) {
          if (!attributeName) {
            return;
          }
          setAttributes(_defineProperty({}, attributeName, value));
        }
      }), renderJsxArray({
        blockName: blockName,
        attributes: attributes,
        setAttributes: setAttributes,
        jsx: children,
        context: context
      }, Components));
    }
    return /*#__PURE__*/React.createElement(Component, _extends({}, jsxAttributes, {
      blockName: blockName
    }), renderJsxArray({
      blockName: blockName,
      attributes: attributes,
      setAttributes: setAttributes,
      jsx: children,
      context: context
    }, Components));
  });
}

function useClickOutside(ref, callback) {
  useEffect(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback && callback(event);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

export { camelize, classNames, delimiterize, getBlockContext, getBlockIndex, getInnerBlocks, renderJsxArray, replaceTokens, styles, useClickOutside };
//# sourceMappingURL=index.js.map
