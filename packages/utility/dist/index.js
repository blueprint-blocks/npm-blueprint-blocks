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

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function ownKeys$e(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2$e(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$e(Object(t), !0).forEach(function (r) {
      _defineProperty$e(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$e(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive$e(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey$e(t) {
  var i = _toPrimitive$e(t, "string");
  return "symbol" == typeof i ? i : String(i);
}
function _typeof$d(o) {
  "@babel/helpers - typeof";

  return _typeof$d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$d(o);
}
function _defineProperty$e(obj, key, value) {
  key = _toPropertyKey$e(key);
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

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var classnames$e = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

	  var hasOwn = {}.hasOwnProperty;
	  function classNames() {
	    var classes = '';
	    for (var i = 0; i < arguments.length; i++) {
	      var arg = arguments[i];
	      if (arg) {
	        classes = appendClass(classes, parseValue(arg));
	      }
	    }
	    return classes;
	  }
	  function parseValue(arg) {
	    if (typeof arg === 'string' || typeof arg === 'number') {
	      return arg;
	    }
	    if (typeof arg !== 'object') {
	      return '';
	    }
	    if (Array.isArray(arg)) {
	      return classNames.apply(null, arg);
	    }
	    if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
	      return arg.toString();
	    }
	    var classes = '';
	    for (var key in arg) {
	      if (hasOwn.call(arg, key) && arg[key]) {
	        classes = appendClass(classes, key);
	      }
	    }
	    return classes;
	  }
	  function appendClass(value, newClass) {
	    if (!newClass) {
	      return value;
	    }
	    if (value) {
	      return value + ' ' + newClass;
	    }
	    return value + newClass;
	  }
	  if (module.exports) {
	    classNames.default = classNames;
	    module.exports = classNames;
	  } else {
	    window.classNames = classNames;
	  }
	})(); 
} (classnames$e));

var classnamesExports = classnames$e.exports;
var npmClassNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

/**
 * @constant DEFAULT_OPTIONS_KEYS the default options keys
 */
var DEFAULT_OPTIONS_KEYS$e = {
  isEqual: true,
  isMatchingKey: true,
  isPromise: true,
  maxSize: true,
  onCacheAdd: true,
  onCacheChange: true,
  onCacheHit: true,
  transformKey: true
};
/**
 * @function slice
 *
 * @description
 * slice.call() pre-bound
 */
var slice$e = Array.prototype.slice;
/**
 * @function cloneArray
 *
 * @description
 * clone the array-like object and return the new array
 *
 * @param arrayLike the array-like object to clone
 * @returns the clone as an array
 */
function cloneArray$e(arrayLike) {
  var length = arrayLike.length;
  if (!length) {
    return [];
  }
  if (length === 1) {
    return [arrayLike[0]];
  }
  if (length === 2) {
    return [arrayLike[0], arrayLike[1]];
  }
  if (length === 3) {
    return [arrayLike[0], arrayLike[1], arrayLike[2]];
  }
  return slice$e.call(arrayLike, 0);
}
/**
 * @function getCustomOptions
 *
 * @description
 * get the custom options on the object passed
 *
 * @param options the memoization options passed
 * @returns the custom options passed
 */
function getCustomOptions$e(options) {
  var customOptions = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in options) {
    if (!DEFAULT_OPTIONS_KEYS$e[key]) {
      customOptions[key] = options[key];
    }
  }
  /* eslint-enable */
  return customOptions;
}
/**
 * @function isMemoized
 *
 * @description
 * is the function passed already memoized
 *
 * @param fn the function to test
 * @returns is the function already memoized
 */
function isMemoized$e(fn) {
  return typeof fn === 'function' && fn.isMemoized;
}
/**
 * @function isSameValueZero
 *
 * @description
 * are the objects equal based on SameValueZero equality
 *
 * @param object1 the first object to compare
 * @param object2 the second object to compare
 * @returns are the two objects equal
 */
function isSameValueZero$e(object1, object2) {
  // eslint-disable-next-line no-self-compare
  return object1 === object2 || object1 !== object1 && object2 !== object2;
}
/**
 * @function mergeOptions
 *
 * @description
 * merge the options into the target
 *
 * @param existingOptions the options provided
 * @param newOptions the options to include
 * @returns the merged options
 */
function mergeOptions$e(existingOptions, newOptions) {
  var target = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in existingOptions) {
    target[key] = existingOptions[key];
  }
  for (var key in newOptions) {
    target[key] = newOptions[key];
  }
  /* eslint-enable */
  return target;
}

// utils
var Cache$e = /** @class */function () {
  function Cache(options) {
    this.keys = [];
    this.values = [];
    this.options = options;
    var isMatchingKeyFunction = typeof options.isMatchingKey === 'function';
    if (isMatchingKeyFunction) {
      this.getKeyIndex = this._getKeyIndexFromMatchingKey;
    } else if (options.maxSize > 1) {
      this.getKeyIndex = this._getKeyIndexForMany;
    } else {
      this.getKeyIndex = this._getKeyIndexForSingle;
    }
    this.canTransformKey = typeof options.transformKey === 'function';
    this.shouldCloneArguments = this.canTransformKey || isMatchingKeyFunction;
    this.shouldUpdateOnAdd = typeof options.onCacheAdd === 'function';
    this.shouldUpdateOnChange = typeof options.onCacheChange === 'function';
    this.shouldUpdateOnHit = typeof options.onCacheHit === 'function';
  }
  Object.defineProperty(Cache.prototype, "size", {
    /**
     * The number of cached [key,value] results.
     */
    get: function () {
      return this.keys.length;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Cache.prototype, "snapshot", {
    /**
     * A copy of the cache at a moment in time. This is useful
     * to compare changes over time, since the cache mutates
     * internally for performance reasons.
     */
    get: function () {
      return {
        keys: cloneArray$e(this.keys),
        size: this.size,
        values: cloneArray$e(this.values)
      };
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Gets the matching key index when a custom key matcher is used.
   */
  Cache.prototype._getKeyIndexFromMatchingKey = function (keyToMatch) {
    var _a = this.options,
      isMatchingKey = _a.isMatchingKey,
      maxSize = _a.maxSize;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (isMatchingKey(keys[0], keyToMatch)) {
      return 0;
    }
    if (maxSize > 1) {
      for (var index = 1; index < keysLength; index++) {
        if (isMatchingKey(keys[index], keyToMatch)) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when multiple keys are used.
   */
  Cache.prototype._getKeyIndexForMany = function (keyToMatch) {
    var isEqual = this.options.isEqual;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (keysLength === 1) {
      return this._getKeyIndexForSingle(keyToMatch);
    }
    var keyLength = keyToMatch.length;
    var existingKey;
    var argIndex;
    if (keyLength > 1) {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength) {
          argIndex = 0;
          for (; argIndex < keyLength; argIndex++) {
            if (!isEqual(existingKey[argIndex], keyToMatch[argIndex])) {
              break;
            }
          }
          if (argIndex === keyLength) {
            return index;
          }
        }
      }
    } else {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength && isEqual(existingKey[0], keyToMatch[0])) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when a single key is used.
   */
  Cache.prototype._getKeyIndexForSingle = function (keyToMatch) {
    var keys = this.keys;
    if (!keys.length) {
      return -1;
    }
    var existingKey = keys[0];
    var length = existingKey.length;
    if (keyToMatch.length !== length) {
      return -1;
    }
    var isEqual = this.options.isEqual;
    if (length > 1) {
      for (var index = 0; index < length; index++) {
        if (!isEqual(existingKey[index], keyToMatch[index])) {
          return -1;
        }
      }
      return 0;
    }
    return isEqual(existingKey[0], keyToMatch[0]) ? 0 : -1;
  };
  /**
   * Order the array based on a Least-Recently-Used basis.
   */
  Cache.prototype.orderByLru = function (key, value, startingIndex) {
    var keys = this.keys;
    var values = this.values;
    var currentLength = keys.length;
    var index = startingIndex;
    while (index--) {
      keys[index + 1] = keys[index];
      values[index + 1] = values[index];
    }
    keys[0] = key;
    values[0] = value;
    var maxSize = this.options.maxSize;
    if (currentLength === maxSize && startingIndex === currentLength) {
      keys.pop();
      values.pop();
    } else if (startingIndex >= maxSize) {
      // eslint-disable-next-line no-multi-assign
      keys.length = values.length = maxSize;
    }
  };
  /**
   * Update the promise method to auto-remove from cache if rejected, and
   * if resolved then fire cache hit / changed.
   */
  Cache.prototype.updateAsyncCache = function (memoized) {
    var _this = this;
    var _a = this.options,
      onCacheChange = _a.onCacheChange,
      onCacheHit = _a.onCacheHit;
    var firstKey = this.keys[0];
    var firstValue = this.values[0];
    this.values[0] = firstValue.then(function (value) {
      if (_this.shouldUpdateOnHit) {
        onCacheHit(_this, _this.options, memoized);
      }
      if (_this.shouldUpdateOnChange) {
        onCacheChange(_this, _this.options, memoized);
      }
      return value;
    }, function (error) {
      var keyIndex = _this.getKeyIndex(firstKey);
      if (keyIndex !== -1) {
        _this.keys.splice(keyIndex, 1);
        _this.values.splice(keyIndex, 1);
      }
      throw error;
    });
  };
  return Cache;
}();
function createMemoizedFunction$e(fn, options) {
  if (options === void 0) {
    options = {};
  }
  if (isMemoized$e(fn)) {
    return createMemoizedFunction$e(fn.fn, mergeOptions$e(fn.options, options));
  }
  if (typeof fn !== 'function') {
    throw new TypeError('You must pass a function to `memoize`.');
  }
  var _a = options.isEqual,
    isEqual = _a === void 0 ? isSameValueZero$e : _a,
    isMatchingKey = options.isMatchingKey,
    _b = options.isPromise,
    isPromise = _b === void 0 ? false : _b,
    _c = options.maxSize,
    maxSize = _c === void 0 ? 1 : _c,
    onCacheAdd = options.onCacheAdd,
    onCacheChange = options.onCacheChange,
    onCacheHit = options.onCacheHit,
    transformKey = options.transformKey;
  var normalizedOptions = mergeOptions$e({
    isEqual: isEqual,
    isMatchingKey: isMatchingKey,
    isPromise: isPromise,
    maxSize: maxSize,
    onCacheAdd: onCacheAdd,
    onCacheChange: onCacheChange,
    onCacheHit: onCacheHit,
    transformKey: transformKey
  }, getCustomOptions$e(options));
  var cache = new Cache$e(normalizedOptions);
  var keys = cache.keys,
    values = cache.values,
    canTransformKey = cache.canTransformKey,
    shouldCloneArguments = cache.shouldCloneArguments,
    shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
    shouldUpdateOnChange = cache.shouldUpdateOnChange,
    shouldUpdateOnHit = cache.shouldUpdateOnHit;
  var memoized = function () {
    var key = shouldCloneArguments ? cloneArray$e(arguments) : arguments;
    if (canTransformKey) {
      key = transformKey(key);
    }
    var keyIndex = keys.length ? cache.getKeyIndex(key) : -1;
    if (keyIndex !== -1) {
      if (shouldUpdateOnHit) {
        onCacheHit(cache, normalizedOptions, memoized);
      }
      if (keyIndex) {
        cache.orderByLru(keys[keyIndex], values[keyIndex], keyIndex);
        if (shouldUpdateOnChange) {
          onCacheChange(cache, normalizedOptions, memoized);
        }
      }
    } else {
      var newValue = fn.apply(this, arguments);
      var newKey = shouldCloneArguments ? key : cloneArray$e(arguments);
      cache.orderByLru(newKey, newValue, keys.length);
      if (isPromise) {
        cache.updateAsyncCache(memoized);
      }
      if (shouldUpdateOnAdd) {
        onCacheAdd(cache, normalizedOptions, memoized);
      }
      if (shouldUpdateOnChange) {
        onCacheChange(cache, normalizedOptions, memoized);
      }
    }
    return values[0];
  };
  memoized.cache = cache;
  memoized.fn = fn;
  memoized.isMemoized = true;
  memoized.options = normalizedOptions;
  return memoized;
}

var valueByIdentifier$e = createMemoizedFunction$e(function () {
  var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = _objectSpread2$e({}, context);
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
  return valueByIdentifier$e(parts.join('.'), value[key]);
});
function replaceTokens() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (typeof string !== 'string') {
    return string;
  }
  return string.replaceAll(/\{\{(.*?)\}\}/g, function (match, p1) {
    return valueByIdentifier$e(p1.trim(), context);
  });
}

var OPERANDS = ['==', '!=', '<', '<=', '>', '>='];
function evaluateCondition() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var operand = null;
  OPERANDS.forEach(function (OPERAND) {
    if (string.indexOf(OPERAND) !== -1) {
      operand = OPERAND;
    }
  });
  if (operand === null) {
    return Boolean(replaceTokens(string, context));
  }
  var before = replaceTokens(string.slice(0, string.indexOf(operand)).trim(), context);
  var after = replaceTokens(string.slice(string.indexOf(operand) + operand.length).trim(), context);
  if (before.slice(0, 1) === "'" && before.slice(-1) === "'" || before.slice(0, 1) === '"' && before.slice(-1) === '"') {
    before = before.slice(1, -1);
  }
  if (after.slice(0, 1) === "'" && after.slice(-1) === "'" || after.slice(0, 1) === '"' && after.slice(-1) === '"') {
    after = after.slice(1, -1);
  }
  if (operand === '==') {
    return before == after;
  }
  if (operand === '!=') {
    return before != after;
  }
  if (operand === '<') {
    return before < after;
  }
  if (operand === '<=') {
    return before <= after;
  }
  if (operand === '>') {
    return before > after;
  }
  if (operand === '>=') {
    return before >= after;
  }
  return false;
}
function evaluateConditionalString() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (typeof string !== 'string' || string === '') {
    return string;
  }
  var open = null;
  var close = null;
  var evaluatedString = string;
  do {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === '(') {
        open = i;
      }
      if (open !== null && string[i] === ')') {
        close = i;
        break;
      }
    }
    var conditional = void 0,
      before = void 0,
      after = void 0;
    if (open === null && close === null) {
      conditional = string;
      before = '';
      after = '';
    } else {
      conditional = string.slice(open + 1, close - 1);
      before = string.slice(0, open - 1);
      after = string.slice(close + 1);
    }
    var ands = conditional.split('&&');
    var result = ands.reduce(function (result, and) {
      var ors = and.trim().split('||');
      return result && ors.reduce(function (reducedOr, or) {
        return reducedOr || evaluateCondition(or.trim(), context);
      }, null);
    }, true);
    if (before === '' && after === '') {
      evaluatedString = result && '1' || '0';
    } else {
      evaluatedString = before + (result && 'true' || 'false') + after;
    }
  } while (open !== null && close !== null);
  if (evaluatedString === '1' || evaluatedString === 'true') {
    return true;
  }
  if (evaluatedString === '0' || evaluatedString === 'false') {
    return false;
  }
  return Boolean(evaluatedString);
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
    } else if (_typeof$d(className) === 'object') {
      return Object.fromEntries(Object.entries(className).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        return [replaceTokens(key, context), typeof value === 'boolean' ? value : evaluateConditionalString(value, context)];
      }));
    }
    return className;
  });
  return replaceTokens(npmClassNames.apply(void 0, _toConsumableArray(classNameArray)), context);
}

function convertStyleStringToObject() {
  var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  if (typeof style !== "string") {
    return {};
  }
  return Object.fromEntries(style.split(";").map(function (property) {
    return property.split(":");
  }));
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
  return _objectSpread2$e(_objectSpread2$e({}, blockContext), {}, {
    block: _objectSpread2$e({
      index: index
    }, attributes),
    innerBlocks: (innerBlocks === null || innerBlocks === void 0 ? void 0 : innerBlocks.length) && innerBlocks || new Array(length).fill(null)
  });
}

function isArray(value) {
  return Array.isArray(value) && value !== null;
}

function isExternalUrl(url) {
  if (url.length === 0 || url.indexOf('#') === 0 || url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
    return false;
  }
  try {
    new URL(url);
  } catch (error) {
    return false;
  }
  return new URL(url).origin !== location.origin;
}

function isFragmentUrl(url) {
  if (url.indexOf('#') === 0) {
    return true;
  }
  return false;
}

function isObject(value) {
  return _typeof$d(value) === 'object' && !Array.isArray(value) && value !== null;
}

function ownKeys$d(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2$d(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$d(Object(t), !0).forEach(function (r) {
      _defineProperty$d(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$d(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive$d(t, r) {
  if ("object" != _typeof$d(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$d(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey$d(t) {
  var i = _toPrimitive$d(t, "string");
  return "symbol" == _typeof$d(i) ? i : String(i);
}
function _typeof$c(o) {
  "@babel/helpers - typeof";

  return _typeof$c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$c(o);
}
function _defineProperty$d(obj, key, value) {
  key = _toPropertyKey$d(key);
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
var classnames$d = {
  exports: {}
};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
  /* global define */

  (function () {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = '';
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === 'string' || typeof arg === 'number') {
        return arg;
      }
      if (_typeof$d(arg) !== 'object') {
        return '';
      }
      if (Array.isArray(arg)) {
        return classNames.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
        return arg.toString();
      }
      var classes = '';
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + ' ' + newClass;
      }
      return value + newClass;
    }
    if (module.exports) {
      classNames["default"] = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames$d);

/**
 * @constant DEFAULT_OPTIONS_KEYS the default options keys
 */
var DEFAULT_OPTIONS_KEYS$d = {
  isEqual: true,
  isMatchingKey: true,
  isPromise: true,
  maxSize: true,
  onCacheAdd: true,
  onCacheChange: true,
  onCacheHit: true,
  transformKey: true
};
/**
 * @function slice
 *
 * @description
 * slice.call() pre-bound
 */
var slice$d = Array.prototype.slice;
/**
 * @function cloneArray
 *
 * @description
 * clone the array-like object and return the new array
 *
 * @param arrayLike the array-like object to clone
 * @returns the clone as an array
 */
function cloneArray$d(arrayLike) {
  var length = arrayLike.length;
  if (!length) {
    return [];
  }
  if (length === 1) {
    return [arrayLike[0]];
  }
  if (length === 2) {
    return [arrayLike[0], arrayLike[1]];
  }
  if (length === 3) {
    return [arrayLike[0], arrayLike[1], arrayLike[2]];
  }
  return slice$d.call(arrayLike, 0);
}
/**
 * @function getCustomOptions
 *
 * @description
 * get the custom options on the object passed
 *
 * @param options the memoization options passed
 * @returns the custom options passed
 */
function getCustomOptions$d(options) {
  var customOptions = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in options) {
    if (!DEFAULT_OPTIONS_KEYS$d[key]) {
      customOptions[key] = options[key];
    }
  }
  /* eslint-enable */
  return customOptions;
}
/**
 * @function isMemoized
 *
 * @description
 * is the function passed already memoized
 *
 * @param fn the function to test
 * @returns is the function already memoized
 */
function isMemoized$d(fn) {
  return typeof fn === 'function' && fn.isMemoized;
}
/**
 * @function isSameValueZero
 *
 * @description
 * are the objects equal based on SameValueZero equality
 *
 * @param object1 the first object to compare
 * @param object2 the second object to compare
 * @returns are the two objects equal
 */
function isSameValueZero$d(object1, object2) {
  // eslint-disable-next-line no-self-compare
  return object1 === object2 || object1 !== object1 && object2 !== object2;
}
/**
 * @function mergeOptions
 *
 * @description
 * merge the options into the target
 *
 * @param existingOptions the options provided
 * @param newOptions the options to include
 * @returns the merged options
 */
function mergeOptions$d(existingOptions, newOptions) {
  var target = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in existingOptions) {
    target[key] = existingOptions[key];
  }
  for (var key in newOptions) {
    target[key] = newOptions[key];
  }
  /* eslint-enable */
  return target;
}

// utils
var Cache$d = /** @class */function () {
  function Cache(options) {
    this.keys = [];
    this.values = [];
    this.options = options;
    var isMatchingKeyFunction = typeof options.isMatchingKey === 'function';
    if (isMatchingKeyFunction) {
      this.getKeyIndex = this._getKeyIndexFromMatchingKey;
    } else if (options.maxSize > 1) {
      this.getKeyIndex = this._getKeyIndexForMany;
    } else {
      this.getKeyIndex = this._getKeyIndexForSingle;
    }
    this.canTransformKey = typeof options.transformKey === 'function';
    this.shouldCloneArguments = this.canTransformKey || isMatchingKeyFunction;
    this.shouldUpdateOnAdd = typeof options.onCacheAdd === 'function';
    this.shouldUpdateOnChange = typeof options.onCacheChange === 'function';
    this.shouldUpdateOnHit = typeof options.onCacheHit === 'function';
  }
  Object.defineProperty(Cache.prototype, "size", {
    /**
     * The number of cached [key,value] results.
     */
    get: function get() {
      return this.keys.length;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Cache.prototype, "snapshot", {
    /**
     * A copy of the cache at a moment in time. This is useful
     * to compare changes over time, since the cache mutates
     * internally for performance reasons.
     */
    get: function get() {
      return {
        keys: cloneArray$d(this.keys),
        size: this.size,
        values: cloneArray$d(this.values)
      };
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Gets the matching key index when a custom key matcher is used.
   */
  Cache.prototype._getKeyIndexFromMatchingKey = function (keyToMatch) {
    var _a = this.options,
      isMatchingKey = _a.isMatchingKey,
      maxSize = _a.maxSize;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (isMatchingKey(keys[0], keyToMatch)) {
      return 0;
    }
    if (maxSize > 1) {
      for (var index = 1; index < keysLength; index++) {
        if (isMatchingKey(keys[index], keyToMatch)) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when multiple keys are used.
   */
  Cache.prototype._getKeyIndexForMany = function (keyToMatch) {
    var isEqual = this.options.isEqual;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (keysLength === 1) {
      return this._getKeyIndexForSingle(keyToMatch);
    }
    var keyLength = keyToMatch.length;
    var existingKey;
    var argIndex;
    if (keyLength > 1) {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength) {
          argIndex = 0;
          for (; argIndex < keyLength; argIndex++) {
            if (!isEqual(existingKey[argIndex], keyToMatch[argIndex])) {
              break;
            }
          }
          if (argIndex === keyLength) {
            return index;
          }
        }
      }
    } else {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength && isEqual(existingKey[0], keyToMatch[0])) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when a single key is used.
   */
  Cache.prototype._getKeyIndexForSingle = function (keyToMatch) {
    var keys = this.keys;
    if (!keys.length) {
      return -1;
    }
    var existingKey = keys[0];
    var length = existingKey.length;
    if (keyToMatch.length !== length) {
      return -1;
    }
    var isEqual = this.options.isEqual;
    if (length > 1) {
      for (var index = 0; index < length; index++) {
        if (!isEqual(existingKey[index], keyToMatch[index])) {
          return -1;
        }
      }
      return 0;
    }
    return isEqual(existingKey[0], keyToMatch[0]) ? 0 : -1;
  };
  /**
   * Order the array based on a Least-Recently-Used basis.
   */
  Cache.prototype.orderByLru = function (key, value, startingIndex) {
    var keys = this.keys;
    var values = this.values;
    var currentLength = keys.length;
    var index = startingIndex;
    while (index--) {
      keys[index + 1] = keys[index];
      values[index + 1] = values[index];
    }
    keys[0] = key;
    values[0] = value;
    var maxSize = this.options.maxSize;
    if (currentLength === maxSize && startingIndex === currentLength) {
      keys.pop();
      values.pop();
    } else if (startingIndex >= maxSize) {
      // eslint-disable-next-line no-multi-assign
      keys.length = values.length = maxSize;
    }
  };
  /**
   * Update the promise method to auto-remove from cache if rejected, and
   * if resolved then fire cache hit / changed.
   */
  Cache.prototype.updateAsyncCache = function (memoized) {
    var _this = this;
    var _a = this.options,
      onCacheChange = _a.onCacheChange,
      onCacheHit = _a.onCacheHit;
    var firstKey = this.keys[0];
    var firstValue = this.values[0];
    this.values[0] = firstValue.then(function (value) {
      if (_this.shouldUpdateOnHit) {
        onCacheHit(_this, _this.options, memoized);
      }
      if (_this.shouldUpdateOnChange) {
        onCacheChange(_this, _this.options, memoized);
      }
      return value;
    }, function (error) {
      var keyIndex = _this.getKeyIndex(firstKey);
      if (keyIndex !== -1) {
        _this.keys.splice(keyIndex, 1);
        _this.values.splice(keyIndex, 1);
      }
      throw error;
    });
  };
  return Cache;
}();
function createMemoizedFunction$d(fn, options) {
  if (options === void 0) {
    options = {};
  }
  if (isMemoized$d(fn)) {
    return createMemoizedFunction$d(fn.fn, mergeOptions$d(fn.options, options));
  }
  if (typeof fn !== 'function') {
    throw new TypeError('You must pass a function to `memoize`.');
  }
  var _a = options.isEqual,
    isEqual = _a === void 0 ? isSameValueZero$d : _a,
    isMatchingKey = options.isMatchingKey,
    _b = options.isPromise,
    isPromise = _b === void 0 ? false : _b,
    _c = options.maxSize,
    maxSize = _c === void 0 ? 1 : _c,
    onCacheAdd = options.onCacheAdd,
    onCacheChange = options.onCacheChange,
    onCacheHit = options.onCacheHit,
    transformKey = options.transformKey;
  var normalizedOptions = mergeOptions$d({
    isEqual: isEqual,
    isMatchingKey: isMatchingKey,
    isPromise: isPromise,
    maxSize: maxSize,
    onCacheAdd: onCacheAdd,
    onCacheChange: onCacheChange,
    onCacheHit: onCacheHit,
    transformKey: transformKey
  }, getCustomOptions$d(options));
  var cache = new Cache$d(normalizedOptions);
  var keys = cache.keys,
    values = cache.values,
    canTransformKey = cache.canTransformKey,
    shouldCloneArguments = cache.shouldCloneArguments,
    shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
    shouldUpdateOnChange = cache.shouldUpdateOnChange,
    shouldUpdateOnHit = cache.shouldUpdateOnHit;
  var memoized = function memoized() {
    var key = shouldCloneArguments ? cloneArray$d(arguments) : arguments;
    if (canTransformKey) {
      key = transformKey(key);
    }
    var keyIndex = keys.length ? cache.getKeyIndex(key) : -1;
    if (keyIndex !== -1) {
      if (shouldUpdateOnHit) {
        onCacheHit(cache, normalizedOptions, memoized);
      }
      if (keyIndex) {
        cache.orderByLru(keys[keyIndex], values[keyIndex], keyIndex);
        if (shouldUpdateOnChange) {
          onCacheChange(cache, normalizedOptions, memoized);
        }
      }
    } else {
      var newValue = fn.apply(this, arguments);
      var newKey = shouldCloneArguments ? key : cloneArray$d(arguments);
      cache.orderByLru(newKey, newValue, keys.length);
      if (isPromise) {
        cache.updateAsyncCache(memoized);
      }
      if (shouldUpdateOnAdd) {
        onCacheAdd(cache, normalizedOptions, memoized);
      }
      if (shouldUpdateOnChange) {
        onCacheChange(cache, normalizedOptions, memoized);
      }
    }
    return values[0];
  };
  memoized.cache = cache;
  memoized.fn = fn;
  memoized.isMemoized = true;
  memoized.options = normalizedOptions;
  return memoized;
}
var valueByIdentifier$d = createMemoizedFunction$d(function () {
  var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = _objectSpread2$d({}, context);
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
  return valueByIdentifier$d(parts.join('.'), value[key]);
});
function isArray$1(value) {
  return Array.isArray(value) && value !== null;
}
function isObject$1(value) {
  return _typeof$c(value) === 'object' && !Array.isArray(value) && value !== null;
}
function ownKeys$c(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2$c(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$c(Object(t), !0).forEach(function (r) {
      _defineProperty$c(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$c(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive$c(t, r) {
  if ("object" != _typeof$c(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$c(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey$c(t) {
  var i = _toPrimitive$c(t, "string");
  return "symbol" == _typeof$c(i) ? i : String(i);
}
function _typeof$b(o) {
  "@babel/helpers - typeof";

  return _typeof$b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$b(o);
}
function _defineProperty$c(obj, key, value) {
  key = _toPropertyKey$c(key);
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
var classnames$c = {
  exports: {}
};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
  /* global define */

  (function () {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = '';
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === 'string' || typeof arg === 'number') {
        return arg;
      }
      if (_typeof$c(arg) !== 'object') {
        return '';
      }
      if (Array.isArray(arg)) {
        return classNames.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
        return arg.toString();
      }
      var classes = '';
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + ' ' + newClass;
      }
      return value + newClass;
    }
    if (module.exports) {
      classNames["default"] = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames$c);

/**
 * @constant DEFAULT_OPTIONS_KEYS the default options keys
 */
var DEFAULT_OPTIONS_KEYS$c = {
  isEqual: true,
  isMatchingKey: true,
  isPromise: true,
  maxSize: true,
  onCacheAdd: true,
  onCacheChange: true,
  onCacheHit: true,
  transformKey: true
};
/**
 * @function slice
 *
 * @description
 * slice.call() pre-bound
 */
var slice$c = Array.prototype.slice;
/**
 * @function cloneArray
 *
 * @description
 * clone the array-like object and return the new array
 *
 * @param arrayLike the array-like object to clone
 * @returns the clone as an array
 */
function cloneArray$c(arrayLike) {
  var length = arrayLike.length;
  if (!length) {
    return [];
  }
  if (length === 1) {
    return [arrayLike[0]];
  }
  if (length === 2) {
    return [arrayLike[0], arrayLike[1]];
  }
  if (length === 3) {
    return [arrayLike[0], arrayLike[1], arrayLike[2]];
  }
  return slice$c.call(arrayLike, 0);
}
/**
 * @function getCustomOptions
 *
 * @description
 * get the custom options on the object passed
 *
 * @param options the memoization options passed
 * @returns the custom options passed
 */
function getCustomOptions$c(options) {
  var customOptions = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in options) {
    if (!DEFAULT_OPTIONS_KEYS$c[key]) {
      customOptions[key] = options[key];
    }
  }
  /* eslint-enable */
  return customOptions;
}
/**
 * @function isMemoized
 *
 * @description
 * is the function passed already memoized
 *
 * @param fn the function to test
 * @returns is the function already memoized
 */
function isMemoized$c(fn) {
  return typeof fn === 'function' && fn.isMemoized;
}
/**
 * @function isSameValueZero
 *
 * @description
 * are the objects equal based on SameValueZero equality
 *
 * @param object1 the first object to compare
 * @param object2 the second object to compare
 * @returns are the two objects equal
 */
function isSameValueZero$c(object1, object2) {
  // eslint-disable-next-line no-self-compare
  return object1 === object2 || object1 !== object1 && object2 !== object2;
}
/**
 * @function mergeOptions
 *
 * @description
 * merge the options into the target
 *
 * @param existingOptions the options provided
 * @param newOptions the options to include
 * @returns the merged options
 */
function mergeOptions$c(existingOptions, newOptions) {
  var target = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in existingOptions) {
    target[key] = existingOptions[key];
  }
  for (var key in newOptions) {
    target[key] = newOptions[key];
  }
  /* eslint-enable */
  return target;
}

// utils
var Cache$c = /** @class */function () {
  function Cache(options) {
    this.keys = [];
    this.values = [];
    this.options = options;
    var isMatchingKeyFunction = typeof options.isMatchingKey === 'function';
    if (isMatchingKeyFunction) {
      this.getKeyIndex = this._getKeyIndexFromMatchingKey;
    } else if (options.maxSize > 1) {
      this.getKeyIndex = this._getKeyIndexForMany;
    } else {
      this.getKeyIndex = this._getKeyIndexForSingle;
    }
    this.canTransformKey = typeof options.transformKey === 'function';
    this.shouldCloneArguments = this.canTransformKey || isMatchingKeyFunction;
    this.shouldUpdateOnAdd = typeof options.onCacheAdd === 'function';
    this.shouldUpdateOnChange = typeof options.onCacheChange === 'function';
    this.shouldUpdateOnHit = typeof options.onCacheHit === 'function';
  }
  Object.defineProperty(Cache.prototype, "size", {
    /**
     * The number of cached [key,value] results.
     */
    get: function get() {
      return this.keys.length;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Cache.prototype, "snapshot", {
    /**
     * A copy of the cache at a moment in time. This is useful
     * to compare changes over time, since the cache mutates
     * internally for performance reasons.
     */
    get: function get() {
      return {
        keys: cloneArray$c(this.keys),
        size: this.size,
        values: cloneArray$c(this.values)
      };
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Gets the matching key index when a custom key matcher is used.
   */
  Cache.prototype._getKeyIndexFromMatchingKey = function (keyToMatch) {
    var _a = this.options,
      isMatchingKey = _a.isMatchingKey,
      maxSize = _a.maxSize;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (isMatchingKey(keys[0], keyToMatch)) {
      return 0;
    }
    if (maxSize > 1) {
      for (var index = 1; index < keysLength; index++) {
        if (isMatchingKey(keys[index], keyToMatch)) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when multiple keys are used.
   */
  Cache.prototype._getKeyIndexForMany = function (keyToMatch) {
    var isEqual = this.options.isEqual;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (keysLength === 1) {
      return this._getKeyIndexForSingle(keyToMatch);
    }
    var keyLength = keyToMatch.length;
    var existingKey;
    var argIndex;
    if (keyLength > 1) {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength) {
          argIndex = 0;
          for (; argIndex < keyLength; argIndex++) {
            if (!isEqual(existingKey[argIndex], keyToMatch[argIndex])) {
              break;
            }
          }
          if (argIndex === keyLength) {
            return index;
          }
        }
      }
    } else {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength && isEqual(existingKey[0], keyToMatch[0])) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when a single key is used.
   */
  Cache.prototype._getKeyIndexForSingle = function (keyToMatch) {
    var keys = this.keys;
    if (!keys.length) {
      return -1;
    }
    var existingKey = keys[0];
    var length = existingKey.length;
    if (keyToMatch.length !== length) {
      return -1;
    }
    var isEqual = this.options.isEqual;
    if (length > 1) {
      for (var index = 0; index < length; index++) {
        if (!isEqual(existingKey[index], keyToMatch[index])) {
          return -1;
        }
      }
      return 0;
    }
    return isEqual(existingKey[0], keyToMatch[0]) ? 0 : -1;
  };
  /**
   * Order the array based on a Least-Recently-Used basis.
   */
  Cache.prototype.orderByLru = function (key, value, startingIndex) {
    var keys = this.keys;
    var values = this.values;
    var currentLength = keys.length;
    var index = startingIndex;
    while (index--) {
      keys[index + 1] = keys[index];
      values[index + 1] = values[index];
    }
    keys[0] = key;
    values[0] = value;
    var maxSize = this.options.maxSize;
    if (currentLength === maxSize && startingIndex === currentLength) {
      keys.pop();
      values.pop();
    } else if (startingIndex >= maxSize) {
      // eslint-disable-next-line no-multi-assign
      keys.length = values.length = maxSize;
    }
  };
  /**
   * Update the promise method to auto-remove from cache if rejected, and
   * if resolved then fire cache hit / changed.
   */
  Cache.prototype.updateAsyncCache = function (memoized) {
    var _this = this;
    var _a = this.options,
      onCacheChange = _a.onCacheChange,
      onCacheHit = _a.onCacheHit;
    var firstKey = this.keys[0];
    var firstValue = this.values[0];
    this.values[0] = firstValue.then(function (value) {
      if (_this.shouldUpdateOnHit) {
        onCacheHit(_this, _this.options, memoized);
      }
      if (_this.shouldUpdateOnChange) {
        onCacheChange(_this, _this.options, memoized);
      }
      return value;
    }, function (error) {
      var keyIndex = _this.getKeyIndex(firstKey);
      if (keyIndex !== -1) {
        _this.keys.splice(keyIndex, 1);
        _this.values.splice(keyIndex, 1);
      }
      throw error;
    });
  };
  return Cache;
}();
function createMemoizedFunction$c(fn, options) {
  if (options === void 0) {
    options = {};
  }
  if (isMemoized$c(fn)) {
    return createMemoizedFunction$c(fn.fn, mergeOptions$c(fn.options, options));
  }
  if (typeof fn !== 'function') {
    throw new TypeError('You must pass a function to `memoize`.');
  }
  var _a = options.isEqual,
    isEqual = _a === void 0 ? isSameValueZero$c : _a,
    isMatchingKey = options.isMatchingKey,
    _b = options.isPromise,
    isPromise = _b === void 0 ? false : _b,
    _c = options.maxSize,
    maxSize = _c === void 0 ? 1 : _c,
    onCacheAdd = options.onCacheAdd,
    onCacheChange = options.onCacheChange,
    onCacheHit = options.onCacheHit,
    transformKey = options.transformKey;
  var normalizedOptions = mergeOptions$c({
    isEqual: isEqual,
    isMatchingKey: isMatchingKey,
    isPromise: isPromise,
    maxSize: maxSize,
    onCacheAdd: onCacheAdd,
    onCacheChange: onCacheChange,
    onCacheHit: onCacheHit,
    transformKey: transformKey
  }, getCustomOptions$c(options));
  var cache = new Cache$c(normalizedOptions);
  var keys = cache.keys,
    values = cache.values,
    canTransformKey = cache.canTransformKey,
    shouldCloneArguments = cache.shouldCloneArguments,
    shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
    shouldUpdateOnChange = cache.shouldUpdateOnChange,
    shouldUpdateOnHit = cache.shouldUpdateOnHit;
  var memoized = function memoized() {
    var key = shouldCloneArguments ? cloneArray$c(arguments) : arguments;
    if (canTransformKey) {
      key = transformKey(key);
    }
    var keyIndex = keys.length ? cache.getKeyIndex(key) : -1;
    if (keyIndex !== -1) {
      if (shouldUpdateOnHit) {
        onCacheHit(cache, normalizedOptions, memoized);
      }
      if (keyIndex) {
        cache.orderByLru(keys[keyIndex], values[keyIndex], keyIndex);
        if (shouldUpdateOnChange) {
          onCacheChange(cache, normalizedOptions, memoized);
        }
      }
    } else {
      var newValue = fn.apply(this, arguments);
      var newKey = shouldCloneArguments ? key : cloneArray$c(arguments);
      cache.orderByLru(newKey, newValue, keys.length);
      if (isPromise) {
        cache.updateAsyncCache(memoized);
      }
      if (shouldUpdateOnAdd) {
        onCacheAdd(cache, normalizedOptions, memoized);
      }
      if (shouldUpdateOnChange) {
        onCacheChange(cache, normalizedOptions, memoized);
      }
    }
    return values[0];
  };
  memoized.cache = cache;
  memoized.fn = fn;
  memoized.isMemoized = true;
  memoized.options = normalizedOptions;
  return memoized;
}
var valueByIdentifier$c = createMemoizedFunction$c(function () {
  var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = _objectSpread2$c({}, context);
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
  return valueByIdentifier$c(parts.join('.'), value[key]);
});
function ownKeys$b(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2$b(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$b(Object(t), !0).forEach(function (r) {
      _defineProperty$b(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$b(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive$b(t, r) {
  if ("object" != _typeof$b(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$b(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey$b(t) {
  var i = _toPrimitive$b(t, "string");
  return "symbol" == _typeof$b(i) ? i : String(i);
}
function _typeof$a(o) {
  "@babel/helpers - typeof";

  return _typeof$a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$a(o);
}
function _defineProperty$b(obj, key, value) {
  key = _toPropertyKey$b(key);
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
var classnames$b = {
  exports: {}
};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
  /* global define */

  (function () {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = '';
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === 'string' || typeof arg === 'number') {
        return arg;
      }
      if (_typeof$b(arg) !== 'object') {
        return '';
      }
      if (Array.isArray(arg)) {
        return classNames.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
        return arg.toString();
      }
      var classes = '';
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + ' ' + newClass;
      }
      return value + newClass;
    }
    if (module.exports) {
      classNames["default"] = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames$b);

/**
 * @constant DEFAULT_OPTIONS_KEYS the default options keys
 */
var DEFAULT_OPTIONS_KEYS$b = {
  isEqual: true,
  isMatchingKey: true,
  isPromise: true,
  maxSize: true,
  onCacheAdd: true,
  onCacheChange: true,
  onCacheHit: true,
  transformKey: true
};
/**
 * @function slice
 *
 * @description
 * slice.call() pre-bound
 */
var slice$b = Array.prototype.slice;
/**
 * @function cloneArray
 *
 * @description
 * clone the array-like object and return the new array
 *
 * @param arrayLike the array-like object to clone
 * @returns the clone as an array
 */
function cloneArray$b(arrayLike) {
  var length = arrayLike.length;
  if (!length) {
    return [];
  }
  if (length === 1) {
    return [arrayLike[0]];
  }
  if (length === 2) {
    return [arrayLike[0], arrayLike[1]];
  }
  if (length === 3) {
    return [arrayLike[0], arrayLike[1], arrayLike[2]];
  }
  return slice$b.call(arrayLike, 0);
}
/**
 * @function getCustomOptions
 *
 * @description
 * get the custom options on the object passed
 *
 * @param options the memoization options passed
 * @returns the custom options passed
 */
function getCustomOptions$b(options) {
  var customOptions = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in options) {
    if (!DEFAULT_OPTIONS_KEYS$b[key]) {
      customOptions[key] = options[key];
    }
  }
  /* eslint-enable */
  return customOptions;
}
/**
 * @function isMemoized
 *
 * @description
 * is the function passed already memoized
 *
 * @param fn the function to test
 * @returns is the function already memoized
 */
function isMemoized$b(fn) {
  return typeof fn === 'function' && fn.isMemoized;
}
/**
 * @function isSameValueZero
 *
 * @description
 * are the objects equal based on SameValueZero equality
 *
 * @param object1 the first object to compare
 * @param object2 the second object to compare
 * @returns are the two objects equal
 */
function isSameValueZero$b(object1, object2) {
  // eslint-disable-next-line no-self-compare
  return object1 === object2 || object1 !== object1 && object2 !== object2;
}
/**
 * @function mergeOptions
 *
 * @description
 * merge the options into the target
 *
 * @param existingOptions the options provided
 * @param newOptions the options to include
 * @returns the merged options
 */
function mergeOptions$b(existingOptions, newOptions) {
  var target = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in existingOptions) {
    target[key] = existingOptions[key];
  }
  for (var key in newOptions) {
    target[key] = newOptions[key];
  }
  /* eslint-enable */
  return target;
}

// utils
var Cache$b = /** @class */function () {
  function Cache(options) {
    this.keys = [];
    this.values = [];
    this.options = options;
    var isMatchingKeyFunction = typeof options.isMatchingKey === 'function';
    if (isMatchingKeyFunction) {
      this.getKeyIndex = this._getKeyIndexFromMatchingKey;
    } else if (options.maxSize > 1) {
      this.getKeyIndex = this._getKeyIndexForMany;
    } else {
      this.getKeyIndex = this._getKeyIndexForSingle;
    }
    this.canTransformKey = typeof options.transformKey === 'function';
    this.shouldCloneArguments = this.canTransformKey || isMatchingKeyFunction;
    this.shouldUpdateOnAdd = typeof options.onCacheAdd === 'function';
    this.shouldUpdateOnChange = typeof options.onCacheChange === 'function';
    this.shouldUpdateOnHit = typeof options.onCacheHit === 'function';
  }
  Object.defineProperty(Cache.prototype, "size", {
    /**
     * The number of cached [key,value] results.
     */
    get: function get() {
      return this.keys.length;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Cache.prototype, "snapshot", {
    /**
     * A copy of the cache at a moment in time. This is useful
     * to compare changes over time, since the cache mutates
     * internally for performance reasons.
     */
    get: function get() {
      return {
        keys: cloneArray$b(this.keys),
        size: this.size,
        values: cloneArray$b(this.values)
      };
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Gets the matching key index when a custom key matcher is used.
   */
  Cache.prototype._getKeyIndexFromMatchingKey = function (keyToMatch) {
    var _a = this.options,
      isMatchingKey = _a.isMatchingKey,
      maxSize = _a.maxSize;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (isMatchingKey(keys[0], keyToMatch)) {
      return 0;
    }
    if (maxSize > 1) {
      for (var index = 1; index < keysLength; index++) {
        if (isMatchingKey(keys[index], keyToMatch)) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when multiple keys are used.
   */
  Cache.prototype._getKeyIndexForMany = function (keyToMatch) {
    var isEqual = this.options.isEqual;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (keysLength === 1) {
      return this._getKeyIndexForSingle(keyToMatch);
    }
    var keyLength = keyToMatch.length;
    var existingKey;
    var argIndex;
    if (keyLength > 1) {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength) {
          argIndex = 0;
          for (; argIndex < keyLength; argIndex++) {
            if (!isEqual(existingKey[argIndex], keyToMatch[argIndex])) {
              break;
            }
          }
          if (argIndex === keyLength) {
            return index;
          }
        }
      }
    } else {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength && isEqual(existingKey[0], keyToMatch[0])) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when a single key is used.
   */
  Cache.prototype._getKeyIndexForSingle = function (keyToMatch) {
    var keys = this.keys;
    if (!keys.length) {
      return -1;
    }
    var existingKey = keys[0];
    var length = existingKey.length;
    if (keyToMatch.length !== length) {
      return -1;
    }
    var isEqual = this.options.isEqual;
    if (length > 1) {
      for (var index = 0; index < length; index++) {
        if (!isEqual(existingKey[index], keyToMatch[index])) {
          return -1;
        }
      }
      return 0;
    }
    return isEqual(existingKey[0], keyToMatch[0]) ? 0 : -1;
  };
  /**
   * Order the array based on a Least-Recently-Used basis.
   */
  Cache.prototype.orderByLru = function (key, value, startingIndex) {
    var keys = this.keys;
    var values = this.values;
    var currentLength = keys.length;
    var index = startingIndex;
    while (index--) {
      keys[index + 1] = keys[index];
      values[index + 1] = values[index];
    }
    keys[0] = key;
    values[0] = value;
    var maxSize = this.options.maxSize;
    if (currentLength === maxSize && startingIndex === currentLength) {
      keys.pop();
      values.pop();
    } else if (startingIndex >= maxSize) {
      // eslint-disable-next-line no-multi-assign
      keys.length = values.length = maxSize;
    }
  };
  /**
   * Update the promise method to auto-remove from cache if rejected, and
   * if resolved then fire cache hit / changed.
   */
  Cache.prototype.updateAsyncCache = function (memoized) {
    var _this = this;
    var _a = this.options,
      onCacheChange = _a.onCacheChange,
      onCacheHit = _a.onCacheHit;
    var firstKey = this.keys[0];
    var firstValue = this.values[0];
    this.values[0] = firstValue.then(function (value) {
      if (_this.shouldUpdateOnHit) {
        onCacheHit(_this, _this.options, memoized);
      }
      if (_this.shouldUpdateOnChange) {
        onCacheChange(_this, _this.options, memoized);
      }
      return value;
    }, function (error) {
      var keyIndex = _this.getKeyIndex(firstKey);
      if (keyIndex !== -1) {
        _this.keys.splice(keyIndex, 1);
        _this.values.splice(keyIndex, 1);
      }
      throw error;
    });
  };
  return Cache;
}();
function createMemoizedFunction$b(fn, options) {
  if (options === void 0) {
    options = {};
  }
  if (isMemoized$b(fn)) {
    return createMemoizedFunction$b(fn.fn, mergeOptions$b(fn.options, options));
  }
  if (typeof fn !== 'function') {
    throw new TypeError('You must pass a function to `memoize`.');
  }
  var _a = options.isEqual,
    isEqual = _a === void 0 ? isSameValueZero$b : _a,
    isMatchingKey = options.isMatchingKey,
    _b = options.isPromise,
    isPromise = _b === void 0 ? false : _b,
    _c = options.maxSize,
    maxSize = _c === void 0 ? 1 : _c,
    onCacheAdd = options.onCacheAdd,
    onCacheChange = options.onCacheChange,
    onCacheHit = options.onCacheHit,
    transformKey = options.transformKey;
  var normalizedOptions = mergeOptions$b({
    isEqual: isEqual,
    isMatchingKey: isMatchingKey,
    isPromise: isPromise,
    maxSize: maxSize,
    onCacheAdd: onCacheAdd,
    onCacheChange: onCacheChange,
    onCacheHit: onCacheHit,
    transformKey: transformKey
  }, getCustomOptions$b(options));
  var cache = new Cache$b(normalizedOptions);
  var keys = cache.keys,
    values = cache.values,
    canTransformKey = cache.canTransformKey,
    shouldCloneArguments = cache.shouldCloneArguments,
    shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
    shouldUpdateOnChange = cache.shouldUpdateOnChange,
    shouldUpdateOnHit = cache.shouldUpdateOnHit;
  var memoized = function memoized() {
    var key = shouldCloneArguments ? cloneArray$b(arguments) : arguments;
    if (canTransformKey) {
      key = transformKey(key);
    }
    var keyIndex = keys.length ? cache.getKeyIndex(key) : -1;
    if (keyIndex !== -1) {
      if (shouldUpdateOnHit) {
        onCacheHit(cache, normalizedOptions, memoized);
      }
      if (keyIndex) {
        cache.orderByLru(keys[keyIndex], values[keyIndex], keyIndex);
        if (shouldUpdateOnChange) {
          onCacheChange(cache, normalizedOptions, memoized);
        }
      }
    } else {
      var newValue = fn.apply(this, arguments);
      var newKey = shouldCloneArguments ? key : cloneArray$b(arguments);
      cache.orderByLru(newKey, newValue, keys.length);
      if (isPromise) {
        cache.updateAsyncCache(memoized);
      }
      if (shouldUpdateOnAdd) {
        onCacheAdd(cache, normalizedOptions, memoized);
      }
      if (shouldUpdateOnChange) {
        onCacheChange(cache, normalizedOptions, memoized);
      }
    }
    return values[0];
  };
  memoized.cache = cache;
  memoized.fn = fn;
  memoized.isMemoized = true;
  memoized.options = normalizedOptions;
  return memoized;
}
var valueByIdentifier$b = createMemoizedFunction$b(function () {
  var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = _objectSpread2$b({}, context);
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
  return valueByIdentifier$b(parts.join('.'), value[key]);
});
function ownKeys$a(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2$a(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$a(Object(t), !0).forEach(function (r) {
      _defineProperty$a(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive$a(t, r) {
  if ("object" != _typeof$a(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$a(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey$a(t) {
  var i = _toPrimitive$a(t, "string");
  return "symbol" == _typeof$a(i) ? i : String(i);
}
function _typeof$9(o) {
  "@babel/helpers - typeof";

  return _typeof$9 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$9(o);
}
function _defineProperty$a(obj, key, value) {
  key = _toPropertyKey$a(key);
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
var classnames$a = {
  exports: {}
};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
  /* global define */

  (function () {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = '';
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === 'string' || typeof arg === 'number') {
        return arg;
      }
      if (_typeof$a(arg) !== 'object') {
        return '';
      }
      if (Array.isArray(arg)) {
        return classNames.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
        return arg.toString();
      }
      var classes = '';
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + ' ' + newClass;
      }
      return value + newClass;
    }
    if (module.exports) {
      classNames["default"] = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames$a);

/**
 * @constant DEFAULT_OPTIONS_KEYS the default options keys
 */
var DEFAULT_OPTIONS_KEYS$a = {
  isEqual: true,
  isMatchingKey: true,
  isPromise: true,
  maxSize: true,
  onCacheAdd: true,
  onCacheChange: true,
  onCacheHit: true,
  transformKey: true
};
/**
 * @function slice
 *
 * @description
 * slice.call() pre-bound
 */
var slice$a = Array.prototype.slice;
/**
 * @function cloneArray
 *
 * @description
 * clone the array-like object and return the new array
 *
 * @param arrayLike the array-like object to clone
 * @returns the clone as an array
 */
function cloneArray$a(arrayLike) {
  var length = arrayLike.length;
  if (!length) {
    return [];
  }
  if (length === 1) {
    return [arrayLike[0]];
  }
  if (length === 2) {
    return [arrayLike[0], arrayLike[1]];
  }
  if (length === 3) {
    return [arrayLike[0], arrayLike[1], arrayLike[2]];
  }
  return slice$a.call(arrayLike, 0);
}
/**
 * @function getCustomOptions
 *
 * @description
 * get the custom options on the object passed
 *
 * @param options the memoization options passed
 * @returns the custom options passed
 */
function getCustomOptions$a(options) {
  var customOptions = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in options) {
    if (!DEFAULT_OPTIONS_KEYS$a[key]) {
      customOptions[key] = options[key];
    }
  }
  /* eslint-enable */
  return customOptions;
}
/**
 * @function isMemoized
 *
 * @description
 * is the function passed already memoized
 *
 * @param fn the function to test
 * @returns is the function already memoized
 */
function isMemoized$a(fn) {
  return typeof fn === 'function' && fn.isMemoized;
}
/**
 * @function isSameValueZero
 *
 * @description
 * are the objects equal based on SameValueZero equality
 *
 * @param object1 the first object to compare
 * @param object2 the second object to compare
 * @returns are the two objects equal
 */
function isSameValueZero$a(object1, object2) {
  // eslint-disable-next-line no-self-compare
  return object1 === object2 || object1 !== object1 && object2 !== object2;
}
/**
 * @function mergeOptions
 *
 * @description
 * merge the options into the target
 *
 * @param existingOptions the options provided
 * @param newOptions the options to include
 * @returns the merged options
 */
function mergeOptions$a(existingOptions, newOptions) {
  var target = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in existingOptions) {
    target[key] = existingOptions[key];
  }
  for (var key in newOptions) {
    target[key] = newOptions[key];
  }
  /* eslint-enable */
  return target;
}

// utils
var Cache$a = /** @class */function () {
  function Cache(options) {
    this.keys = [];
    this.values = [];
    this.options = options;
    var isMatchingKeyFunction = typeof options.isMatchingKey === 'function';
    if (isMatchingKeyFunction) {
      this.getKeyIndex = this._getKeyIndexFromMatchingKey;
    } else if (options.maxSize > 1) {
      this.getKeyIndex = this._getKeyIndexForMany;
    } else {
      this.getKeyIndex = this._getKeyIndexForSingle;
    }
    this.canTransformKey = typeof options.transformKey === 'function';
    this.shouldCloneArguments = this.canTransformKey || isMatchingKeyFunction;
    this.shouldUpdateOnAdd = typeof options.onCacheAdd === 'function';
    this.shouldUpdateOnChange = typeof options.onCacheChange === 'function';
    this.shouldUpdateOnHit = typeof options.onCacheHit === 'function';
  }
  Object.defineProperty(Cache.prototype, "size", {
    /**
     * The number of cached [key,value] results.
     */
    get: function get() {
      return this.keys.length;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Cache.prototype, "snapshot", {
    /**
     * A copy of the cache at a moment in time. This is useful
     * to compare changes over time, since the cache mutates
     * internally for performance reasons.
     */
    get: function get() {
      return {
        keys: cloneArray$a(this.keys),
        size: this.size,
        values: cloneArray$a(this.values)
      };
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Gets the matching key index when a custom key matcher is used.
   */
  Cache.prototype._getKeyIndexFromMatchingKey = function (keyToMatch) {
    var _a = this.options,
      isMatchingKey = _a.isMatchingKey,
      maxSize = _a.maxSize;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (isMatchingKey(keys[0], keyToMatch)) {
      return 0;
    }
    if (maxSize > 1) {
      for (var index = 1; index < keysLength; index++) {
        if (isMatchingKey(keys[index], keyToMatch)) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when multiple keys are used.
   */
  Cache.prototype._getKeyIndexForMany = function (keyToMatch) {
    var isEqual = this.options.isEqual;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (keysLength === 1) {
      return this._getKeyIndexForSingle(keyToMatch);
    }
    var keyLength = keyToMatch.length;
    var existingKey;
    var argIndex;
    if (keyLength > 1) {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength) {
          argIndex = 0;
          for (; argIndex < keyLength; argIndex++) {
            if (!isEqual(existingKey[argIndex], keyToMatch[argIndex])) {
              break;
            }
          }
          if (argIndex === keyLength) {
            return index;
          }
        }
      }
    } else {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength && isEqual(existingKey[0], keyToMatch[0])) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when a single key is used.
   */
  Cache.prototype._getKeyIndexForSingle = function (keyToMatch) {
    var keys = this.keys;
    if (!keys.length) {
      return -1;
    }
    var existingKey = keys[0];
    var length = existingKey.length;
    if (keyToMatch.length !== length) {
      return -1;
    }
    var isEqual = this.options.isEqual;
    if (length > 1) {
      for (var index = 0; index < length; index++) {
        if (!isEqual(existingKey[index], keyToMatch[index])) {
          return -1;
        }
      }
      return 0;
    }
    return isEqual(existingKey[0], keyToMatch[0]) ? 0 : -1;
  };
  /**
   * Order the array based on a Least-Recently-Used basis.
   */
  Cache.prototype.orderByLru = function (key, value, startingIndex) {
    var keys = this.keys;
    var values = this.values;
    var currentLength = keys.length;
    var index = startingIndex;
    while (index--) {
      keys[index + 1] = keys[index];
      values[index + 1] = values[index];
    }
    keys[0] = key;
    values[0] = value;
    var maxSize = this.options.maxSize;
    if (currentLength === maxSize && startingIndex === currentLength) {
      keys.pop();
      values.pop();
    } else if (startingIndex >= maxSize) {
      // eslint-disable-next-line no-multi-assign
      keys.length = values.length = maxSize;
    }
  };
  /**
   * Update the promise method to auto-remove from cache if rejected, and
   * if resolved then fire cache hit / changed.
   */
  Cache.prototype.updateAsyncCache = function (memoized) {
    var _this = this;
    var _a = this.options,
      onCacheChange = _a.onCacheChange,
      onCacheHit = _a.onCacheHit;
    var firstKey = this.keys[0];
    var firstValue = this.values[0];
    this.values[0] = firstValue.then(function (value) {
      if (_this.shouldUpdateOnHit) {
        onCacheHit(_this, _this.options, memoized);
      }
      if (_this.shouldUpdateOnChange) {
        onCacheChange(_this, _this.options, memoized);
      }
      return value;
    }, function (error) {
      var keyIndex = _this.getKeyIndex(firstKey);
      if (keyIndex !== -1) {
        _this.keys.splice(keyIndex, 1);
        _this.values.splice(keyIndex, 1);
      }
      throw error;
    });
  };
  return Cache;
}();
function createMemoizedFunction$a(fn, options) {
  if (options === void 0) {
    options = {};
  }
  if (isMemoized$a(fn)) {
    return createMemoizedFunction$a(fn.fn, mergeOptions$a(fn.options, options));
  }
  if (typeof fn !== 'function') {
    throw new TypeError('You must pass a function to `memoize`.');
  }
  var _a = options.isEqual,
    isEqual = _a === void 0 ? isSameValueZero$a : _a,
    isMatchingKey = options.isMatchingKey,
    _b = options.isPromise,
    isPromise = _b === void 0 ? false : _b,
    _c = options.maxSize,
    maxSize = _c === void 0 ? 1 : _c,
    onCacheAdd = options.onCacheAdd,
    onCacheChange = options.onCacheChange,
    onCacheHit = options.onCacheHit,
    transformKey = options.transformKey;
  var normalizedOptions = mergeOptions$a({
    isEqual: isEqual,
    isMatchingKey: isMatchingKey,
    isPromise: isPromise,
    maxSize: maxSize,
    onCacheAdd: onCacheAdd,
    onCacheChange: onCacheChange,
    onCacheHit: onCacheHit,
    transformKey: transformKey
  }, getCustomOptions$a(options));
  var cache = new Cache$a(normalizedOptions);
  var keys = cache.keys,
    values = cache.values,
    canTransformKey = cache.canTransformKey,
    shouldCloneArguments = cache.shouldCloneArguments,
    shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
    shouldUpdateOnChange = cache.shouldUpdateOnChange,
    shouldUpdateOnHit = cache.shouldUpdateOnHit;
  var memoized = function memoized() {
    var key = shouldCloneArguments ? cloneArray$a(arguments) : arguments;
    if (canTransformKey) {
      key = transformKey(key);
    }
    var keyIndex = keys.length ? cache.getKeyIndex(key) : -1;
    if (keyIndex !== -1) {
      if (shouldUpdateOnHit) {
        onCacheHit(cache, normalizedOptions, memoized);
      }
      if (keyIndex) {
        cache.orderByLru(keys[keyIndex], values[keyIndex], keyIndex);
        if (shouldUpdateOnChange) {
          onCacheChange(cache, normalizedOptions, memoized);
        }
      }
    } else {
      var newValue = fn.apply(this, arguments);
      var newKey = shouldCloneArguments ? key : cloneArray$a(arguments);
      cache.orderByLru(newKey, newValue, keys.length);
      if (isPromise) {
        cache.updateAsyncCache(memoized);
      }
      if (shouldUpdateOnAdd) {
        onCacheAdd(cache, normalizedOptions, memoized);
      }
      if (shouldUpdateOnChange) {
        onCacheChange(cache, normalizedOptions, memoized);
      }
    }
    return values[0];
  };
  memoized.cache = cache;
  memoized.fn = fn;
  memoized.isMemoized = true;
  memoized.options = normalizedOptions;
  return memoized;
}
var valueByIdentifier$a = createMemoizedFunction$a(function () {
  var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = _objectSpread2$a({}, context);
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
  return valueByIdentifier$a(parts.join('.'), value[key]);
});
function ownKeys$9(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2$9(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$9(Object(t), !0).forEach(function (r) {
      _defineProperty$9(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive$9(t, r) {
  if ("object" != _typeof$9(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$9(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey$9(t) {
  var i = _toPrimitive$9(t, "string");
  return "symbol" == _typeof$9(i) ? i : String(i);
}
function _typeof$8(o) {
  "@babel/helpers - typeof";

  return _typeof$8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$8(o);
}
function _defineProperty$9(obj, key, value) {
  key = _toPropertyKey$9(key);
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
var classnames$9 = {
  exports: {}
};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
  /* global define */

  (function () {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = '';
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === 'string' || typeof arg === 'number') {
        return arg;
      }
      if (_typeof$9(arg) !== 'object') {
        return '';
      }
      if (Array.isArray(arg)) {
        return classNames.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
        return arg.toString();
      }
      var classes = '';
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + ' ' + newClass;
      }
      return value + newClass;
    }
    if (module.exports) {
      classNames["default"] = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames$9);

/**
 * @constant DEFAULT_OPTIONS_KEYS the default options keys
 */
var DEFAULT_OPTIONS_KEYS$9 = {
  isEqual: true,
  isMatchingKey: true,
  isPromise: true,
  maxSize: true,
  onCacheAdd: true,
  onCacheChange: true,
  onCacheHit: true,
  transformKey: true
};
/**
 * @function slice
 *
 * @description
 * slice.call() pre-bound
 */
var slice$9 = Array.prototype.slice;
/**
 * @function cloneArray
 *
 * @description
 * clone the array-like object and return the new array
 *
 * @param arrayLike the array-like object to clone
 * @returns the clone as an array
 */
function cloneArray$9(arrayLike) {
  var length = arrayLike.length;
  if (!length) {
    return [];
  }
  if (length === 1) {
    return [arrayLike[0]];
  }
  if (length === 2) {
    return [arrayLike[0], arrayLike[1]];
  }
  if (length === 3) {
    return [arrayLike[0], arrayLike[1], arrayLike[2]];
  }
  return slice$9.call(arrayLike, 0);
}
/**
 * @function getCustomOptions
 *
 * @description
 * get the custom options on the object passed
 *
 * @param options the memoization options passed
 * @returns the custom options passed
 */
function getCustomOptions$9(options) {
  var customOptions = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in options) {
    if (!DEFAULT_OPTIONS_KEYS$9[key]) {
      customOptions[key] = options[key];
    }
  }
  /* eslint-enable */
  return customOptions;
}
/**
 * @function isMemoized
 *
 * @description
 * is the function passed already memoized
 *
 * @param fn the function to test
 * @returns is the function already memoized
 */
function isMemoized$9(fn) {
  return typeof fn === 'function' && fn.isMemoized;
}
/**
 * @function isSameValueZero
 *
 * @description
 * are the objects equal based on SameValueZero equality
 *
 * @param object1 the first object to compare
 * @param object2 the second object to compare
 * @returns are the two objects equal
 */
function isSameValueZero$9(object1, object2) {
  // eslint-disable-next-line no-self-compare
  return object1 === object2 || object1 !== object1 && object2 !== object2;
}
/**
 * @function mergeOptions
 *
 * @description
 * merge the options into the target
 *
 * @param existingOptions the options provided
 * @param newOptions the options to include
 * @returns the merged options
 */
function mergeOptions$9(existingOptions, newOptions) {
  var target = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in existingOptions) {
    target[key] = existingOptions[key];
  }
  for (var key in newOptions) {
    target[key] = newOptions[key];
  }
  /* eslint-enable */
  return target;
}

// utils
var Cache$9 = /** @class */function () {
  function Cache(options) {
    this.keys = [];
    this.values = [];
    this.options = options;
    var isMatchingKeyFunction = typeof options.isMatchingKey === 'function';
    if (isMatchingKeyFunction) {
      this.getKeyIndex = this._getKeyIndexFromMatchingKey;
    } else if (options.maxSize > 1) {
      this.getKeyIndex = this._getKeyIndexForMany;
    } else {
      this.getKeyIndex = this._getKeyIndexForSingle;
    }
    this.canTransformKey = typeof options.transformKey === 'function';
    this.shouldCloneArguments = this.canTransformKey || isMatchingKeyFunction;
    this.shouldUpdateOnAdd = typeof options.onCacheAdd === 'function';
    this.shouldUpdateOnChange = typeof options.onCacheChange === 'function';
    this.shouldUpdateOnHit = typeof options.onCacheHit === 'function';
  }
  Object.defineProperty(Cache.prototype, "size", {
    /**
     * The number of cached [key,value] results.
     */
    get: function get() {
      return this.keys.length;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Cache.prototype, "snapshot", {
    /**
     * A copy of the cache at a moment in time. This is useful
     * to compare changes over time, since the cache mutates
     * internally for performance reasons.
     */
    get: function get() {
      return {
        keys: cloneArray$9(this.keys),
        size: this.size,
        values: cloneArray$9(this.values)
      };
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Gets the matching key index when a custom key matcher is used.
   */
  Cache.prototype._getKeyIndexFromMatchingKey = function (keyToMatch) {
    var _a = this.options,
      isMatchingKey = _a.isMatchingKey,
      maxSize = _a.maxSize;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (isMatchingKey(keys[0], keyToMatch)) {
      return 0;
    }
    if (maxSize > 1) {
      for (var index = 1; index < keysLength; index++) {
        if (isMatchingKey(keys[index], keyToMatch)) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when multiple keys are used.
   */
  Cache.prototype._getKeyIndexForMany = function (keyToMatch) {
    var isEqual = this.options.isEqual;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (keysLength === 1) {
      return this._getKeyIndexForSingle(keyToMatch);
    }
    var keyLength = keyToMatch.length;
    var existingKey;
    var argIndex;
    if (keyLength > 1) {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength) {
          argIndex = 0;
          for (; argIndex < keyLength; argIndex++) {
            if (!isEqual(existingKey[argIndex], keyToMatch[argIndex])) {
              break;
            }
          }
          if (argIndex === keyLength) {
            return index;
          }
        }
      }
    } else {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength && isEqual(existingKey[0], keyToMatch[0])) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when a single key is used.
   */
  Cache.prototype._getKeyIndexForSingle = function (keyToMatch) {
    var keys = this.keys;
    if (!keys.length) {
      return -1;
    }
    var existingKey = keys[0];
    var length = existingKey.length;
    if (keyToMatch.length !== length) {
      return -1;
    }
    var isEqual = this.options.isEqual;
    if (length > 1) {
      for (var index = 0; index < length; index++) {
        if (!isEqual(existingKey[index], keyToMatch[index])) {
          return -1;
        }
      }
      return 0;
    }
    return isEqual(existingKey[0], keyToMatch[0]) ? 0 : -1;
  };
  /**
   * Order the array based on a Least-Recently-Used basis.
   */
  Cache.prototype.orderByLru = function (key, value, startingIndex) {
    var keys = this.keys;
    var values = this.values;
    var currentLength = keys.length;
    var index = startingIndex;
    while (index--) {
      keys[index + 1] = keys[index];
      values[index + 1] = values[index];
    }
    keys[0] = key;
    values[0] = value;
    var maxSize = this.options.maxSize;
    if (currentLength === maxSize && startingIndex === currentLength) {
      keys.pop();
      values.pop();
    } else if (startingIndex >= maxSize) {
      // eslint-disable-next-line no-multi-assign
      keys.length = values.length = maxSize;
    }
  };
  /**
   * Update the promise method to auto-remove from cache if rejected, and
   * if resolved then fire cache hit / changed.
   */
  Cache.prototype.updateAsyncCache = function (memoized) {
    var _this = this;
    var _a = this.options,
      onCacheChange = _a.onCacheChange,
      onCacheHit = _a.onCacheHit;
    var firstKey = this.keys[0];
    var firstValue = this.values[0];
    this.values[0] = firstValue.then(function (value) {
      if (_this.shouldUpdateOnHit) {
        onCacheHit(_this, _this.options, memoized);
      }
      if (_this.shouldUpdateOnChange) {
        onCacheChange(_this, _this.options, memoized);
      }
      return value;
    }, function (error) {
      var keyIndex = _this.getKeyIndex(firstKey);
      if (keyIndex !== -1) {
        _this.keys.splice(keyIndex, 1);
        _this.values.splice(keyIndex, 1);
      }
      throw error;
    });
  };
  return Cache;
}();
function createMemoizedFunction$9(fn, options) {
  if (options === void 0) {
    options = {};
  }
  if (isMemoized$9(fn)) {
    return createMemoizedFunction$9(fn.fn, mergeOptions$9(fn.options, options));
  }
  if (typeof fn !== 'function') {
    throw new TypeError('You must pass a function to `memoize`.');
  }
  var _a = options.isEqual,
    isEqual = _a === void 0 ? isSameValueZero$9 : _a,
    isMatchingKey = options.isMatchingKey,
    _b = options.isPromise,
    isPromise = _b === void 0 ? false : _b,
    _c = options.maxSize,
    maxSize = _c === void 0 ? 1 : _c,
    onCacheAdd = options.onCacheAdd,
    onCacheChange = options.onCacheChange,
    onCacheHit = options.onCacheHit,
    transformKey = options.transformKey;
  var normalizedOptions = mergeOptions$9({
    isEqual: isEqual,
    isMatchingKey: isMatchingKey,
    isPromise: isPromise,
    maxSize: maxSize,
    onCacheAdd: onCacheAdd,
    onCacheChange: onCacheChange,
    onCacheHit: onCacheHit,
    transformKey: transformKey
  }, getCustomOptions$9(options));
  var cache = new Cache$9(normalizedOptions);
  var keys = cache.keys,
    values = cache.values,
    canTransformKey = cache.canTransformKey,
    shouldCloneArguments = cache.shouldCloneArguments,
    shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
    shouldUpdateOnChange = cache.shouldUpdateOnChange,
    shouldUpdateOnHit = cache.shouldUpdateOnHit;
  var memoized = function memoized() {
    var key = shouldCloneArguments ? cloneArray$9(arguments) : arguments;
    if (canTransformKey) {
      key = transformKey(key);
    }
    var keyIndex = keys.length ? cache.getKeyIndex(key) : -1;
    if (keyIndex !== -1) {
      if (shouldUpdateOnHit) {
        onCacheHit(cache, normalizedOptions, memoized);
      }
      if (keyIndex) {
        cache.orderByLru(keys[keyIndex], values[keyIndex], keyIndex);
        if (shouldUpdateOnChange) {
          onCacheChange(cache, normalizedOptions, memoized);
        }
      }
    } else {
      var newValue = fn.apply(this, arguments);
      var newKey = shouldCloneArguments ? key : cloneArray$9(arguments);
      cache.orderByLru(newKey, newValue, keys.length);
      if (isPromise) {
        cache.updateAsyncCache(memoized);
      }
      if (shouldUpdateOnAdd) {
        onCacheAdd(cache, normalizedOptions, memoized);
      }
      if (shouldUpdateOnChange) {
        onCacheChange(cache, normalizedOptions, memoized);
      }
    }
    return values[0];
  };
  memoized.cache = cache;
  memoized.fn = fn;
  memoized.isMemoized = true;
  memoized.options = normalizedOptions;
  return memoized;
}
var valueByIdentifier$9 = createMemoizedFunction$9(function () {
  var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = _objectSpread2$9({}, context);
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
  return valueByIdentifier$9(parts.join('.'), value[key]);
});
function ownKeys$8(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2$8(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$8(Object(t), !0).forEach(function (r) {
      _defineProperty$8(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive$8(t, r) {
  if ("object" != _typeof$8(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$8(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey$8(t) {
  var i = _toPrimitive$8(t, "string");
  return "symbol" == _typeof$8(i) ? i : String(i);
}
function _typeof$7(o) {
  "@babel/helpers - typeof";

  return _typeof$7 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$7(o);
}
function _defineProperty$8(obj, key, value) {
  key = _toPropertyKey$8(key);
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
var classnames$8 = {
  exports: {}
};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
  /* global define */

  (function () {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = '';
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === 'string' || typeof arg === 'number') {
        return arg;
      }
      if (_typeof$8(arg) !== 'object') {
        return '';
      }
      if (Array.isArray(arg)) {
        return classNames.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
        return arg.toString();
      }
      var classes = '';
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + ' ' + newClass;
      }
      return value + newClass;
    }
    if (module.exports) {
      classNames["default"] = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames$8);

/**
 * @constant DEFAULT_OPTIONS_KEYS the default options keys
 */
var DEFAULT_OPTIONS_KEYS$8 = {
  isEqual: true,
  isMatchingKey: true,
  isPromise: true,
  maxSize: true,
  onCacheAdd: true,
  onCacheChange: true,
  onCacheHit: true,
  transformKey: true
};
/**
 * @function slice
 *
 * @description
 * slice.call() pre-bound
 */
var slice$8 = Array.prototype.slice;
/**
 * @function cloneArray
 *
 * @description
 * clone the array-like object and return the new array
 *
 * @param arrayLike the array-like object to clone
 * @returns the clone as an array
 */
function cloneArray$8(arrayLike) {
  var length = arrayLike.length;
  if (!length) {
    return [];
  }
  if (length === 1) {
    return [arrayLike[0]];
  }
  if (length === 2) {
    return [arrayLike[0], arrayLike[1]];
  }
  if (length === 3) {
    return [arrayLike[0], arrayLike[1], arrayLike[2]];
  }
  return slice$8.call(arrayLike, 0);
}
/**
 * @function getCustomOptions
 *
 * @description
 * get the custom options on the object passed
 *
 * @param options the memoization options passed
 * @returns the custom options passed
 */
function getCustomOptions$8(options) {
  var customOptions = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in options) {
    if (!DEFAULT_OPTIONS_KEYS$8[key]) {
      customOptions[key] = options[key];
    }
  }
  /* eslint-enable */
  return customOptions;
}
/**
 * @function isMemoized
 *
 * @description
 * is the function passed already memoized
 *
 * @param fn the function to test
 * @returns is the function already memoized
 */
function isMemoized$8(fn) {
  return typeof fn === 'function' && fn.isMemoized;
}
/**
 * @function isSameValueZero
 *
 * @description
 * are the objects equal based on SameValueZero equality
 *
 * @param object1 the first object to compare
 * @param object2 the second object to compare
 * @returns are the two objects equal
 */
function isSameValueZero$8(object1, object2) {
  // eslint-disable-next-line no-self-compare
  return object1 === object2 || object1 !== object1 && object2 !== object2;
}
/**
 * @function mergeOptions
 *
 * @description
 * merge the options into the target
 *
 * @param existingOptions the options provided
 * @param newOptions the options to include
 * @returns the merged options
 */
function mergeOptions$8(existingOptions, newOptions) {
  var target = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in existingOptions) {
    target[key] = existingOptions[key];
  }
  for (var key in newOptions) {
    target[key] = newOptions[key];
  }
  /* eslint-enable */
  return target;
}

// utils
var Cache$8 = /** @class */function () {
  function Cache(options) {
    this.keys = [];
    this.values = [];
    this.options = options;
    var isMatchingKeyFunction = typeof options.isMatchingKey === 'function';
    if (isMatchingKeyFunction) {
      this.getKeyIndex = this._getKeyIndexFromMatchingKey;
    } else if (options.maxSize > 1) {
      this.getKeyIndex = this._getKeyIndexForMany;
    } else {
      this.getKeyIndex = this._getKeyIndexForSingle;
    }
    this.canTransformKey = typeof options.transformKey === 'function';
    this.shouldCloneArguments = this.canTransformKey || isMatchingKeyFunction;
    this.shouldUpdateOnAdd = typeof options.onCacheAdd === 'function';
    this.shouldUpdateOnChange = typeof options.onCacheChange === 'function';
    this.shouldUpdateOnHit = typeof options.onCacheHit === 'function';
  }
  Object.defineProperty(Cache.prototype, "size", {
    /**
     * The number of cached [key,value] results.
     */
    get: function get() {
      return this.keys.length;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Cache.prototype, "snapshot", {
    /**
     * A copy of the cache at a moment in time. This is useful
     * to compare changes over time, since the cache mutates
     * internally for performance reasons.
     */
    get: function get() {
      return {
        keys: cloneArray$8(this.keys),
        size: this.size,
        values: cloneArray$8(this.values)
      };
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Gets the matching key index when a custom key matcher is used.
   */
  Cache.prototype._getKeyIndexFromMatchingKey = function (keyToMatch) {
    var _a = this.options,
      isMatchingKey = _a.isMatchingKey,
      maxSize = _a.maxSize;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (isMatchingKey(keys[0], keyToMatch)) {
      return 0;
    }
    if (maxSize > 1) {
      for (var index = 1; index < keysLength; index++) {
        if (isMatchingKey(keys[index], keyToMatch)) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when multiple keys are used.
   */
  Cache.prototype._getKeyIndexForMany = function (keyToMatch) {
    var isEqual = this.options.isEqual;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (keysLength === 1) {
      return this._getKeyIndexForSingle(keyToMatch);
    }
    var keyLength = keyToMatch.length;
    var existingKey;
    var argIndex;
    if (keyLength > 1) {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength) {
          argIndex = 0;
          for (; argIndex < keyLength; argIndex++) {
            if (!isEqual(existingKey[argIndex], keyToMatch[argIndex])) {
              break;
            }
          }
          if (argIndex === keyLength) {
            return index;
          }
        }
      }
    } else {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength && isEqual(existingKey[0], keyToMatch[0])) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when a single key is used.
   */
  Cache.prototype._getKeyIndexForSingle = function (keyToMatch) {
    var keys = this.keys;
    if (!keys.length) {
      return -1;
    }
    var existingKey = keys[0];
    var length = existingKey.length;
    if (keyToMatch.length !== length) {
      return -1;
    }
    var isEqual = this.options.isEqual;
    if (length > 1) {
      for (var index = 0; index < length; index++) {
        if (!isEqual(existingKey[index], keyToMatch[index])) {
          return -1;
        }
      }
      return 0;
    }
    return isEqual(existingKey[0], keyToMatch[0]) ? 0 : -1;
  };
  /**
   * Order the array based on a Least-Recently-Used basis.
   */
  Cache.prototype.orderByLru = function (key, value, startingIndex) {
    var keys = this.keys;
    var values = this.values;
    var currentLength = keys.length;
    var index = startingIndex;
    while (index--) {
      keys[index + 1] = keys[index];
      values[index + 1] = values[index];
    }
    keys[0] = key;
    values[0] = value;
    var maxSize = this.options.maxSize;
    if (currentLength === maxSize && startingIndex === currentLength) {
      keys.pop();
      values.pop();
    } else if (startingIndex >= maxSize) {
      // eslint-disable-next-line no-multi-assign
      keys.length = values.length = maxSize;
    }
  };
  /**
   * Update the promise method to auto-remove from cache if rejected, and
   * if resolved then fire cache hit / changed.
   */
  Cache.prototype.updateAsyncCache = function (memoized) {
    var _this = this;
    var _a = this.options,
      onCacheChange = _a.onCacheChange,
      onCacheHit = _a.onCacheHit;
    var firstKey = this.keys[0];
    var firstValue = this.values[0];
    this.values[0] = firstValue.then(function (value) {
      if (_this.shouldUpdateOnHit) {
        onCacheHit(_this, _this.options, memoized);
      }
      if (_this.shouldUpdateOnChange) {
        onCacheChange(_this, _this.options, memoized);
      }
      return value;
    }, function (error) {
      var keyIndex = _this.getKeyIndex(firstKey);
      if (keyIndex !== -1) {
        _this.keys.splice(keyIndex, 1);
        _this.values.splice(keyIndex, 1);
      }
      throw error;
    });
  };
  return Cache;
}();
function createMemoizedFunction$8(fn, options) {
  if (options === void 0) {
    options = {};
  }
  if (isMemoized$8(fn)) {
    return createMemoizedFunction$8(fn.fn, mergeOptions$8(fn.options, options));
  }
  if (typeof fn !== 'function') {
    throw new TypeError('You must pass a function to `memoize`.');
  }
  var _a = options.isEqual,
    isEqual = _a === void 0 ? isSameValueZero$8 : _a,
    isMatchingKey = options.isMatchingKey,
    _b = options.isPromise,
    isPromise = _b === void 0 ? false : _b,
    _c = options.maxSize,
    maxSize = _c === void 0 ? 1 : _c,
    onCacheAdd = options.onCacheAdd,
    onCacheChange = options.onCacheChange,
    onCacheHit = options.onCacheHit,
    transformKey = options.transformKey;
  var normalizedOptions = mergeOptions$8({
    isEqual: isEqual,
    isMatchingKey: isMatchingKey,
    isPromise: isPromise,
    maxSize: maxSize,
    onCacheAdd: onCacheAdd,
    onCacheChange: onCacheChange,
    onCacheHit: onCacheHit,
    transformKey: transformKey
  }, getCustomOptions$8(options));
  var cache = new Cache$8(normalizedOptions);
  var keys = cache.keys,
    values = cache.values,
    canTransformKey = cache.canTransformKey,
    shouldCloneArguments = cache.shouldCloneArguments,
    shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
    shouldUpdateOnChange = cache.shouldUpdateOnChange,
    shouldUpdateOnHit = cache.shouldUpdateOnHit;
  var memoized = function memoized() {
    var key = shouldCloneArguments ? cloneArray$8(arguments) : arguments;
    if (canTransformKey) {
      key = transformKey(key);
    }
    var keyIndex = keys.length ? cache.getKeyIndex(key) : -1;
    if (keyIndex !== -1) {
      if (shouldUpdateOnHit) {
        onCacheHit(cache, normalizedOptions, memoized);
      }
      if (keyIndex) {
        cache.orderByLru(keys[keyIndex], values[keyIndex], keyIndex);
        if (shouldUpdateOnChange) {
          onCacheChange(cache, normalizedOptions, memoized);
        }
      }
    } else {
      var newValue = fn.apply(this, arguments);
      var newKey = shouldCloneArguments ? key : cloneArray$8(arguments);
      cache.orderByLru(newKey, newValue, keys.length);
      if (isPromise) {
        cache.updateAsyncCache(memoized);
      }
      if (shouldUpdateOnAdd) {
        onCacheAdd(cache, normalizedOptions, memoized);
      }
      if (shouldUpdateOnChange) {
        onCacheChange(cache, normalizedOptions, memoized);
      }
    }
    return values[0];
  };
  memoized.cache = cache;
  memoized.fn = fn;
  memoized.isMemoized = true;
  memoized.options = normalizedOptions;
  return memoized;
}
var valueByIdentifier$8 = createMemoizedFunction$8(function () {
  var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = _objectSpread2$8({}, context);
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
  return valueByIdentifier$8(parts.join('.'), value[key]);
});
function ownKeys$7(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2$7(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$7(Object(t), !0).forEach(function (r) {
      _defineProperty$7(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive$7(t, r) {
  if ("object" != _typeof$7(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$7(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey$7(t) {
  var i = _toPrimitive$7(t, "string");
  return "symbol" == _typeof$7(i) ? i : String(i);
}
function _typeof$6(o) {
  "@babel/helpers - typeof";

  return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$6(o);
}
function _defineProperty$7(obj, key, value) {
  key = _toPropertyKey$7(key);
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
var classnames$7 = {
  exports: {}
};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
  /* global define */

  (function () {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = '';
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === 'string' || typeof arg === 'number') {
        return arg;
      }
      if (_typeof$7(arg) !== 'object') {
        return '';
      }
      if (Array.isArray(arg)) {
        return classNames.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
        return arg.toString();
      }
      var classes = '';
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + ' ' + newClass;
      }
      return value + newClass;
    }
    if (module.exports) {
      classNames["default"] = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames$7);

/**
 * @constant DEFAULT_OPTIONS_KEYS the default options keys
 */
var DEFAULT_OPTIONS_KEYS$7 = {
  isEqual: true,
  isMatchingKey: true,
  isPromise: true,
  maxSize: true,
  onCacheAdd: true,
  onCacheChange: true,
  onCacheHit: true,
  transformKey: true
};
/**
 * @function slice
 *
 * @description
 * slice.call() pre-bound
 */
var slice$7 = Array.prototype.slice;
/**
 * @function cloneArray
 *
 * @description
 * clone the array-like object and return the new array
 *
 * @param arrayLike the array-like object to clone
 * @returns the clone as an array
 */
function cloneArray$7(arrayLike) {
  var length = arrayLike.length;
  if (!length) {
    return [];
  }
  if (length === 1) {
    return [arrayLike[0]];
  }
  if (length === 2) {
    return [arrayLike[0], arrayLike[1]];
  }
  if (length === 3) {
    return [arrayLike[0], arrayLike[1], arrayLike[2]];
  }
  return slice$7.call(arrayLike, 0);
}
/**
 * @function getCustomOptions
 *
 * @description
 * get the custom options on the object passed
 *
 * @param options the memoization options passed
 * @returns the custom options passed
 */
function getCustomOptions$7(options) {
  var customOptions = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in options) {
    if (!DEFAULT_OPTIONS_KEYS$7[key]) {
      customOptions[key] = options[key];
    }
  }
  /* eslint-enable */
  return customOptions;
}
/**
 * @function isMemoized
 *
 * @description
 * is the function passed already memoized
 *
 * @param fn the function to test
 * @returns is the function already memoized
 */
function isMemoized$7(fn) {
  return typeof fn === 'function' && fn.isMemoized;
}
/**
 * @function isSameValueZero
 *
 * @description
 * are the objects equal based on SameValueZero equality
 *
 * @param object1 the first object to compare
 * @param object2 the second object to compare
 * @returns are the two objects equal
 */
function isSameValueZero$7(object1, object2) {
  // eslint-disable-next-line no-self-compare
  return object1 === object2 || object1 !== object1 && object2 !== object2;
}
/**
 * @function mergeOptions
 *
 * @description
 * merge the options into the target
 *
 * @param existingOptions the options provided
 * @param newOptions the options to include
 * @returns the merged options
 */
function mergeOptions$7(existingOptions, newOptions) {
  var target = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in existingOptions) {
    target[key] = existingOptions[key];
  }
  for (var key in newOptions) {
    target[key] = newOptions[key];
  }
  /* eslint-enable */
  return target;
}

// utils
var Cache$7 = /** @class */function () {
  function Cache(options) {
    this.keys = [];
    this.values = [];
    this.options = options;
    var isMatchingKeyFunction = typeof options.isMatchingKey === 'function';
    if (isMatchingKeyFunction) {
      this.getKeyIndex = this._getKeyIndexFromMatchingKey;
    } else if (options.maxSize > 1) {
      this.getKeyIndex = this._getKeyIndexForMany;
    } else {
      this.getKeyIndex = this._getKeyIndexForSingle;
    }
    this.canTransformKey = typeof options.transformKey === 'function';
    this.shouldCloneArguments = this.canTransformKey || isMatchingKeyFunction;
    this.shouldUpdateOnAdd = typeof options.onCacheAdd === 'function';
    this.shouldUpdateOnChange = typeof options.onCacheChange === 'function';
    this.shouldUpdateOnHit = typeof options.onCacheHit === 'function';
  }
  Object.defineProperty(Cache.prototype, "size", {
    /**
     * The number of cached [key,value] results.
     */
    get: function get() {
      return this.keys.length;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Cache.prototype, "snapshot", {
    /**
     * A copy of the cache at a moment in time. This is useful
     * to compare changes over time, since the cache mutates
     * internally for performance reasons.
     */
    get: function get() {
      return {
        keys: cloneArray$7(this.keys),
        size: this.size,
        values: cloneArray$7(this.values)
      };
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Gets the matching key index when a custom key matcher is used.
   */
  Cache.prototype._getKeyIndexFromMatchingKey = function (keyToMatch) {
    var _a = this.options,
      isMatchingKey = _a.isMatchingKey,
      maxSize = _a.maxSize;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (isMatchingKey(keys[0], keyToMatch)) {
      return 0;
    }
    if (maxSize > 1) {
      for (var index = 1; index < keysLength; index++) {
        if (isMatchingKey(keys[index], keyToMatch)) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when multiple keys are used.
   */
  Cache.prototype._getKeyIndexForMany = function (keyToMatch) {
    var isEqual = this.options.isEqual;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (keysLength === 1) {
      return this._getKeyIndexForSingle(keyToMatch);
    }
    var keyLength = keyToMatch.length;
    var existingKey;
    var argIndex;
    if (keyLength > 1) {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength) {
          argIndex = 0;
          for (; argIndex < keyLength; argIndex++) {
            if (!isEqual(existingKey[argIndex], keyToMatch[argIndex])) {
              break;
            }
          }
          if (argIndex === keyLength) {
            return index;
          }
        }
      }
    } else {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength && isEqual(existingKey[0], keyToMatch[0])) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when a single key is used.
   */
  Cache.prototype._getKeyIndexForSingle = function (keyToMatch) {
    var keys = this.keys;
    if (!keys.length) {
      return -1;
    }
    var existingKey = keys[0];
    var length = existingKey.length;
    if (keyToMatch.length !== length) {
      return -1;
    }
    var isEqual = this.options.isEqual;
    if (length > 1) {
      for (var index = 0; index < length; index++) {
        if (!isEqual(existingKey[index], keyToMatch[index])) {
          return -1;
        }
      }
      return 0;
    }
    return isEqual(existingKey[0], keyToMatch[0]) ? 0 : -1;
  };
  /**
   * Order the array based on a Least-Recently-Used basis.
   */
  Cache.prototype.orderByLru = function (key, value, startingIndex) {
    var keys = this.keys;
    var values = this.values;
    var currentLength = keys.length;
    var index = startingIndex;
    while (index--) {
      keys[index + 1] = keys[index];
      values[index + 1] = values[index];
    }
    keys[0] = key;
    values[0] = value;
    var maxSize = this.options.maxSize;
    if (currentLength === maxSize && startingIndex === currentLength) {
      keys.pop();
      values.pop();
    } else if (startingIndex >= maxSize) {
      // eslint-disable-next-line no-multi-assign
      keys.length = values.length = maxSize;
    }
  };
  /**
   * Update the promise method to auto-remove from cache if rejected, and
   * if resolved then fire cache hit / changed.
   */
  Cache.prototype.updateAsyncCache = function (memoized) {
    var _this = this;
    var _a = this.options,
      onCacheChange = _a.onCacheChange,
      onCacheHit = _a.onCacheHit;
    var firstKey = this.keys[0];
    var firstValue = this.values[0];
    this.values[0] = firstValue.then(function (value) {
      if (_this.shouldUpdateOnHit) {
        onCacheHit(_this, _this.options, memoized);
      }
      if (_this.shouldUpdateOnChange) {
        onCacheChange(_this, _this.options, memoized);
      }
      return value;
    }, function (error) {
      var keyIndex = _this.getKeyIndex(firstKey);
      if (keyIndex !== -1) {
        _this.keys.splice(keyIndex, 1);
        _this.values.splice(keyIndex, 1);
      }
      throw error;
    });
  };
  return Cache;
}();
function createMemoizedFunction$7(fn, options) {
  if (options === void 0) {
    options = {};
  }
  if (isMemoized$7(fn)) {
    return createMemoizedFunction$7(fn.fn, mergeOptions$7(fn.options, options));
  }
  if (typeof fn !== 'function') {
    throw new TypeError('You must pass a function to `memoize`.');
  }
  var _a = options.isEqual,
    isEqual = _a === void 0 ? isSameValueZero$7 : _a,
    isMatchingKey = options.isMatchingKey,
    _b = options.isPromise,
    isPromise = _b === void 0 ? false : _b,
    _c = options.maxSize,
    maxSize = _c === void 0 ? 1 : _c,
    onCacheAdd = options.onCacheAdd,
    onCacheChange = options.onCacheChange,
    onCacheHit = options.onCacheHit,
    transformKey = options.transformKey;
  var normalizedOptions = mergeOptions$7({
    isEqual: isEqual,
    isMatchingKey: isMatchingKey,
    isPromise: isPromise,
    maxSize: maxSize,
    onCacheAdd: onCacheAdd,
    onCacheChange: onCacheChange,
    onCacheHit: onCacheHit,
    transformKey: transformKey
  }, getCustomOptions$7(options));
  var cache = new Cache$7(normalizedOptions);
  var keys = cache.keys,
    values = cache.values,
    canTransformKey = cache.canTransformKey,
    shouldCloneArguments = cache.shouldCloneArguments,
    shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
    shouldUpdateOnChange = cache.shouldUpdateOnChange,
    shouldUpdateOnHit = cache.shouldUpdateOnHit;
  var memoized = function memoized() {
    var key = shouldCloneArguments ? cloneArray$7(arguments) : arguments;
    if (canTransformKey) {
      key = transformKey(key);
    }
    var keyIndex = keys.length ? cache.getKeyIndex(key) : -1;
    if (keyIndex !== -1) {
      if (shouldUpdateOnHit) {
        onCacheHit(cache, normalizedOptions, memoized);
      }
      if (keyIndex) {
        cache.orderByLru(keys[keyIndex], values[keyIndex], keyIndex);
        if (shouldUpdateOnChange) {
          onCacheChange(cache, normalizedOptions, memoized);
        }
      }
    } else {
      var newValue = fn.apply(this, arguments);
      var newKey = shouldCloneArguments ? key : cloneArray$7(arguments);
      cache.orderByLru(newKey, newValue, keys.length);
      if (isPromise) {
        cache.updateAsyncCache(memoized);
      }
      if (shouldUpdateOnAdd) {
        onCacheAdd(cache, normalizedOptions, memoized);
      }
      if (shouldUpdateOnChange) {
        onCacheChange(cache, normalizedOptions, memoized);
      }
    }
    return values[0];
  };
  memoized.cache = cache;
  memoized.fn = fn;
  memoized.isMemoized = true;
  memoized.options = normalizedOptions;
  return memoized;
}
var valueByIdentifier$7 = createMemoizedFunction$7(function () {
  var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = _objectSpread2$7({}, context);
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
  return valueByIdentifier$7(parts.join('.'), value[key]);
});
function ownKeys$6(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2$6(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$6(Object(t), !0).forEach(function (r) {
      _defineProperty$6(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive$6(t, r) {
  if ("object" != _typeof$6(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$6(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey$6(t) {
  var i = _toPrimitive$6(t, "string");
  return "symbol" == _typeof$6(i) ? i : String(i);
}
function _typeof$5(o) {
  "@babel/helpers - typeof";

  return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$5(o);
}
function _defineProperty$6(obj, key, value) {
  key = _toPropertyKey$6(key);
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
var classnames$6 = {
  exports: {}
};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
  /* global define */

  (function () {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = '';
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === 'string' || typeof arg === 'number') {
        return arg;
      }
      if (_typeof$6(arg) !== 'object') {
        return '';
      }
      if (Array.isArray(arg)) {
        return classNames.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
        return arg.toString();
      }
      var classes = '';
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + ' ' + newClass;
      }
      return value + newClass;
    }
    if (module.exports) {
      classNames["default"] = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames$6);

/**
 * @constant DEFAULT_OPTIONS_KEYS the default options keys
 */
var DEFAULT_OPTIONS_KEYS$6 = {
  isEqual: true,
  isMatchingKey: true,
  isPromise: true,
  maxSize: true,
  onCacheAdd: true,
  onCacheChange: true,
  onCacheHit: true,
  transformKey: true
};
/**
 * @function slice
 *
 * @description
 * slice.call() pre-bound
 */
var slice$6 = Array.prototype.slice;
/**
 * @function cloneArray
 *
 * @description
 * clone the array-like object and return the new array
 *
 * @param arrayLike the array-like object to clone
 * @returns the clone as an array
 */
function cloneArray$6(arrayLike) {
  var length = arrayLike.length;
  if (!length) {
    return [];
  }
  if (length === 1) {
    return [arrayLike[0]];
  }
  if (length === 2) {
    return [arrayLike[0], arrayLike[1]];
  }
  if (length === 3) {
    return [arrayLike[0], arrayLike[1], arrayLike[2]];
  }
  return slice$6.call(arrayLike, 0);
}
/**
 * @function getCustomOptions
 *
 * @description
 * get the custom options on the object passed
 *
 * @param options the memoization options passed
 * @returns the custom options passed
 */
function getCustomOptions$6(options) {
  var customOptions = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in options) {
    if (!DEFAULT_OPTIONS_KEYS$6[key]) {
      customOptions[key] = options[key];
    }
  }
  /* eslint-enable */
  return customOptions;
}
/**
 * @function isMemoized
 *
 * @description
 * is the function passed already memoized
 *
 * @param fn the function to test
 * @returns is the function already memoized
 */
function isMemoized$6(fn) {
  return typeof fn === 'function' && fn.isMemoized;
}
/**
 * @function isSameValueZero
 *
 * @description
 * are the objects equal based on SameValueZero equality
 *
 * @param object1 the first object to compare
 * @param object2 the second object to compare
 * @returns are the two objects equal
 */
function isSameValueZero$6(object1, object2) {
  // eslint-disable-next-line no-self-compare
  return object1 === object2 || object1 !== object1 && object2 !== object2;
}
/**
 * @function mergeOptions
 *
 * @description
 * merge the options into the target
 *
 * @param existingOptions the options provided
 * @param newOptions the options to include
 * @returns the merged options
 */
function mergeOptions$6(existingOptions, newOptions) {
  var target = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in existingOptions) {
    target[key] = existingOptions[key];
  }
  for (var key in newOptions) {
    target[key] = newOptions[key];
  }
  /* eslint-enable */
  return target;
}

// utils
var Cache$6 = /** @class */function () {
  function Cache(options) {
    this.keys = [];
    this.values = [];
    this.options = options;
    var isMatchingKeyFunction = typeof options.isMatchingKey === 'function';
    if (isMatchingKeyFunction) {
      this.getKeyIndex = this._getKeyIndexFromMatchingKey;
    } else if (options.maxSize > 1) {
      this.getKeyIndex = this._getKeyIndexForMany;
    } else {
      this.getKeyIndex = this._getKeyIndexForSingle;
    }
    this.canTransformKey = typeof options.transformKey === 'function';
    this.shouldCloneArguments = this.canTransformKey || isMatchingKeyFunction;
    this.shouldUpdateOnAdd = typeof options.onCacheAdd === 'function';
    this.shouldUpdateOnChange = typeof options.onCacheChange === 'function';
    this.shouldUpdateOnHit = typeof options.onCacheHit === 'function';
  }
  Object.defineProperty(Cache.prototype, "size", {
    /**
     * The number of cached [key,value] results.
     */
    get: function get() {
      return this.keys.length;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Cache.prototype, "snapshot", {
    /**
     * A copy of the cache at a moment in time. This is useful
     * to compare changes over time, since the cache mutates
     * internally for performance reasons.
     */
    get: function get() {
      return {
        keys: cloneArray$6(this.keys),
        size: this.size,
        values: cloneArray$6(this.values)
      };
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Gets the matching key index when a custom key matcher is used.
   */
  Cache.prototype._getKeyIndexFromMatchingKey = function (keyToMatch) {
    var _a = this.options,
      isMatchingKey = _a.isMatchingKey,
      maxSize = _a.maxSize;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (isMatchingKey(keys[0], keyToMatch)) {
      return 0;
    }
    if (maxSize > 1) {
      for (var index = 1; index < keysLength; index++) {
        if (isMatchingKey(keys[index], keyToMatch)) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when multiple keys are used.
   */
  Cache.prototype._getKeyIndexForMany = function (keyToMatch) {
    var isEqual = this.options.isEqual;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (keysLength === 1) {
      return this._getKeyIndexForSingle(keyToMatch);
    }
    var keyLength = keyToMatch.length;
    var existingKey;
    var argIndex;
    if (keyLength > 1) {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength) {
          argIndex = 0;
          for (; argIndex < keyLength; argIndex++) {
            if (!isEqual(existingKey[argIndex], keyToMatch[argIndex])) {
              break;
            }
          }
          if (argIndex === keyLength) {
            return index;
          }
        }
      }
    } else {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength && isEqual(existingKey[0], keyToMatch[0])) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when a single key is used.
   */
  Cache.prototype._getKeyIndexForSingle = function (keyToMatch) {
    var keys = this.keys;
    if (!keys.length) {
      return -1;
    }
    var existingKey = keys[0];
    var length = existingKey.length;
    if (keyToMatch.length !== length) {
      return -1;
    }
    var isEqual = this.options.isEqual;
    if (length > 1) {
      for (var index = 0; index < length; index++) {
        if (!isEqual(existingKey[index], keyToMatch[index])) {
          return -1;
        }
      }
      return 0;
    }
    return isEqual(existingKey[0], keyToMatch[0]) ? 0 : -1;
  };
  /**
   * Order the array based on a Least-Recently-Used basis.
   */
  Cache.prototype.orderByLru = function (key, value, startingIndex) {
    var keys = this.keys;
    var values = this.values;
    var currentLength = keys.length;
    var index = startingIndex;
    while (index--) {
      keys[index + 1] = keys[index];
      values[index + 1] = values[index];
    }
    keys[0] = key;
    values[0] = value;
    var maxSize = this.options.maxSize;
    if (currentLength === maxSize && startingIndex === currentLength) {
      keys.pop();
      values.pop();
    } else if (startingIndex >= maxSize) {
      // eslint-disable-next-line no-multi-assign
      keys.length = values.length = maxSize;
    }
  };
  /**
   * Update the promise method to auto-remove from cache if rejected, and
   * if resolved then fire cache hit / changed.
   */
  Cache.prototype.updateAsyncCache = function (memoized) {
    var _this = this;
    var _a = this.options,
      onCacheChange = _a.onCacheChange,
      onCacheHit = _a.onCacheHit;
    var firstKey = this.keys[0];
    var firstValue = this.values[0];
    this.values[0] = firstValue.then(function (value) {
      if (_this.shouldUpdateOnHit) {
        onCacheHit(_this, _this.options, memoized);
      }
      if (_this.shouldUpdateOnChange) {
        onCacheChange(_this, _this.options, memoized);
      }
      return value;
    }, function (error) {
      var keyIndex = _this.getKeyIndex(firstKey);
      if (keyIndex !== -1) {
        _this.keys.splice(keyIndex, 1);
        _this.values.splice(keyIndex, 1);
      }
      throw error;
    });
  };
  return Cache;
}();
function createMemoizedFunction$6(fn, options) {
  if (options === void 0) {
    options = {};
  }
  if (isMemoized$6(fn)) {
    return createMemoizedFunction$6(fn.fn, mergeOptions$6(fn.options, options));
  }
  if (typeof fn !== 'function') {
    throw new TypeError('You must pass a function to `memoize`.');
  }
  var _a = options.isEqual,
    isEqual = _a === void 0 ? isSameValueZero$6 : _a,
    isMatchingKey = options.isMatchingKey,
    _b = options.isPromise,
    isPromise = _b === void 0 ? false : _b,
    _c = options.maxSize,
    maxSize = _c === void 0 ? 1 : _c,
    onCacheAdd = options.onCacheAdd,
    onCacheChange = options.onCacheChange,
    onCacheHit = options.onCacheHit,
    transformKey = options.transformKey;
  var normalizedOptions = mergeOptions$6({
    isEqual: isEqual,
    isMatchingKey: isMatchingKey,
    isPromise: isPromise,
    maxSize: maxSize,
    onCacheAdd: onCacheAdd,
    onCacheChange: onCacheChange,
    onCacheHit: onCacheHit,
    transformKey: transformKey
  }, getCustomOptions$6(options));
  var cache = new Cache$6(normalizedOptions);
  var keys = cache.keys,
    values = cache.values,
    canTransformKey = cache.canTransformKey,
    shouldCloneArguments = cache.shouldCloneArguments,
    shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
    shouldUpdateOnChange = cache.shouldUpdateOnChange,
    shouldUpdateOnHit = cache.shouldUpdateOnHit;
  var memoized = function memoized() {
    var key = shouldCloneArguments ? cloneArray$6(arguments) : arguments;
    if (canTransformKey) {
      key = transformKey(key);
    }
    var keyIndex = keys.length ? cache.getKeyIndex(key) : -1;
    if (keyIndex !== -1) {
      if (shouldUpdateOnHit) {
        onCacheHit(cache, normalizedOptions, memoized);
      }
      if (keyIndex) {
        cache.orderByLru(keys[keyIndex], values[keyIndex], keyIndex);
        if (shouldUpdateOnChange) {
          onCacheChange(cache, normalizedOptions, memoized);
        }
      }
    } else {
      var newValue = fn.apply(this, arguments);
      var newKey = shouldCloneArguments ? key : cloneArray$6(arguments);
      cache.orderByLru(newKey, newValue, keys.length);
      if (isPromise) {
        cache.updateAsyncCache(memoized);
      }
      if (shouldUpdateOnAdd) {
        onCacheAdd(cache, normalizedOptions, memoized);
      }
      if (shouldUpdateOnChange) {
        onCacheChange(cache, normalizedOptions, memoized);
      }
    }
    return values[0];
  };
  memoized.cache = cache;
  memoized.fn = fn;
  memoized.isMemoized = true;
  memoized.options = normalizedOptions;
  return memoized;
}
var valueByIdentifier$6 = createMemoizedFunction$6(function () {
  var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = _objectSpread2$6({}, context);
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
  return valueByIdentifier$6(parts.join('.'), value[key]);
});
function ownKeys$5(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2$5(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$5(Object(t), !0).forEach(function (r) {
      _defineProperty$5(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive$5(t, r) {
  if ("object" != _typeof$5(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$5(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey$5(t) {
  var i = _toPrimitive$5(t, "string");
  return "symbol" == _typeof$5(i) ? i : String(i);
}
function _typeof$4(o) {
  "@babel/helpers - typeof";

  return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$4(o);
}
function _defineProperty$5(obj, key, value) {
  key = _toPropertyKey$5(key);
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
var classnames$5 = {
  exports: {}
};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
  /* global define */

  (function () {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = '';
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === 'string' || typeof arg === 'number') {
        return arg;
      }
      if (_typeof$5(arg) !== 'object') {
        return '';
      }
      if (Array.isArray(arg)) {
        return classNames.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
        return arg.toString();
      }
      var classes = '';
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + ' ' + newClass;
      }
      return value + newClass;
    }
    if (module.exports) {
      classNames["default"] = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames$5);

/**
 * @constant DEFAULT_OPTIONS_KEYS the default options keys
 */
var DEFAULT_OPTIONS_KEYS$5 = {
  isEqual: true,
  isMatchingKey: true,
  isPromise: true,
  maxSize: true,
  onCacheAdd: true,
  onCacheChange: true,
  onCacheHit: true,
  transformKey: true
};
/**
 * @function slice
 *
 * @description
 * slice.call() pre-bound
 */
var slice$5 = Array.prototype.slice;
/**
 * @function cloneArray
 *
 * @description
 * clone the array-like object and return the new array
 *
 * @param arrayLike the array-like object to clone
 * @returns the clone as an array
 */
function cloneArray$5(arrayLike) {
  var length = arrayLike.length;
  if (!length) {
    return [];
  }
  if (length === 1) {
    return [arrayLike[0]];
  }
  if (length === 2) {
    return [arrayLike[0], arrayLike[1]];
  }
  if (length === 3) {
    return [arrayLike[0], arrayLike[1], arrayLike[2]];
  }
  return slice$5.call(arrayLike, 0);
}
/**
 * @function getCustomOptions
 *
 * @description
 * get the custom options on the object passed
 *
 * @param options the memoization options passed
 * @returns the custom options passed
 */
function getCustomOptions$5(options) {
  var customOptions = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in options) {
    if (!DEFAULT_OPTIONS_KEYS$5[key]) {
      customOptions[key] = options[key];
    }
  }
  /* eslint-enable */
  return customOptions;
}
/**
 * @function isMemoized
 *
 * @description
 * is the function passed already memoized
 *
 * @param fn the function to test
 * @returns is the function already memoized
 */
function isMemoized$5(fn) {
  return typeof fn === 'function' && fn.isMemoized;
}
/**
 * @function isSameValueZero
 *
 * @description
 * are the objects equal based on SameValueZero equality
 *
 * @param object1 the first object to compare
 * @param object2 the second object to compare
 * @returns are the two objects equal
 */
function isSameValueZero$5(object1, object2) {
  // eslint-disable-next-line no-self-compare
  return object1 === object2 || object1 !== object1 && object2 !== object2;
}
/**
 * @function mergeOptions
 *
 * @description
 * merge the options into the target
 *
 * @param existingOptions the options provided
 * @param newOptions the options to include
 * @returns the merged options
 */
function mergeOptions$5(existingOptions, newOptions) {
  var target = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in existingOptions) {
    target[key] = existingOptions[key];
  }
  for (var key in newOptions) {
    target[key] = newOptions[key];
  }
  /* eslint-enable */
  return target;
}

// utils
var Cache$5 = /** @class */function () {
  function Cache(options) {
    this.keys = [];
    this.values = [];
    this.options = options;
    var isMatchingKeyFunction = typeof options.isMatchingKey === 'function';
    if (isMatchingKeyFunction) {
      this.getKeyIndex = this._getKeyIndexFromMatchingKey;
    } else if (options.maxSize > 1) {
      this.getKeyIndex = this._getKeyIndexForMany;
    } else {
      this.getKeyIndex = this._getKeyIndexForSingle;
    }
    this.canTransformKey = typeof options.transformKey === 'function';
    this.shouldCloneArguments = this.canTransformKey || isMatchingKeyFunction;
    this.shouldUpdateOnAdd = typeof options.onCacheAdd === 'function';
    this.shouldUpdateOnChange = typeof options.onCacheChange === 'function';
    this.shouldUpdateOnHit = typeof options.onCacheHit === 'function';
  }
  Object.defineProperty(Cache.prototype, "size", {
    /**
     * The number of cached [key,value] results.
     */
    get: function get() {
      return this.keys.length;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Cache.prototype, "snapshot", {
    /**
     * A copy of the cache at a moment in time. This is useful
     * to compare changes over time, since the cache mutates
     * internally for performance reasons.
     */
    get: function get() {
      return {
        keys: cloneArray$5(this.keys),
        size: this.size,
        values: cloneArray$5(this.values)
      };
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Gets the matching key index when a custom key matcher is used.
   */
  Cache.prototype._getKeyIndexFromMatchingKey = function (keyToMatch) {
    var _a = this.options,
      isMatchingKey = _a.isMatchingKey,
      maxSize = _a.maxSize;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (isMatchingKey(keys[0], keyToMatch)) {
      return 0;
    }
    if (maxSize > 1) {
      for (var index = 1; index < keysLength; index++) {
        if (isMatchingKey(keys[index], keyToMatch)) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when multiple keys are used.
   */
  Cache.prototype._getKeyIndexForMany = function (keyToMatch) {
    var isEqual = this.options.isEqual;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (keysLength === 1) {
      return this._getKeyIndexForSingle(keyToMatch);
    }
    var keyLength = keyToMatch.length;
    var existingKey;
    var argIndex;
    if (keyLength > 1) {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength) {
          argIndex = 0;
          for (; argIndex < keyLength; argIndex++) {
            if (!isEqual(existingKey[argIndex], keyToMatch[argIndex])) {
              break;
            }
          }
          if (argIndex === keyLength) {
            return index;
          }
        }
      }
    } else {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength && isEqual(existingKey[0], keyToMatch[0])) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when a single key is used.
   */
  Cache.prototype._getKeyIndexForSingle = function (keyToMatch) {
    var keys = this.keys;
    if (!keys.length) {
      return -1;
    }
    var existingKey = keys[0];
    var length = existingKey.length;
    if (keyToMatch.length !== length) {
      return -1;
    }
    var isEqual = this.options.isEqual;
    if (length > 1) {
      for (var index = 0; index < length; index++) {
        if (!isEqual(existingKey[index], keyToMatch[index])) {
          return -1;
        }
      }
      return 0;
    }
    return isEqual(existingKey[0], keyToMatch[0]) ? 0 : -1;
  };
  /**
   * Order the array based on a Least-Recently-Used basis.
   */
  Cache.prototype.orderByLru = function (key, value, startingIndex) {
    var keys = this.keys;
    var values = this.values;
    var currentLength = keys.length;
    var index = startingIndex;
    while (index--) {
      keys[index + 1] = keys[index];
      values[index + 1] = values[index];
    }
    keys[0] = key;
    values[0] = value;
    var maxSize = this.options.maxSize;
    if (currentLength === maxSize && startingIndex === currentLength) {
      keys.pop();
      values.pop();
    } else if (startingIndex >= maxSize) {
      // eslint-disable-next-line no-multi-assign
      keys.length = values.length = maxSize;
    }
  };
  /**
   * Update the promise method to auto-remove from cache if rejected, and
   * if resolved then fire cache hit / changed.
   */
  Cache.prototype.updateAsyncCache = function (memoized) {
    var _this = this;
    var _a = this.options,
      onCacheChange = _a.onCacheChange,
      onCacheHit = _a.onCacheHit;
    var firstKey = this.keys[0];
    var firstValue = this.values[0];
    this.values[0] = firstValue.then(function (value) {
      if (_this.shouldUpdateOnHit) {
        onCacheHit(_this, _this.options, memoized);
      }
      if (_this.shouldUpdateOnChange) {
        onCacheChange(_this, _this.options, memoized);
      }
      return value;
    }, function (error) {
      var keyIndex = _this.getKeyIndex(firstKey);
      if (keyIndex !== -1) {
        _this.keys.splice(keyIndex, 1);
        _this.values.splice(keyIndex, 1);
      }
      throw error;
    });
  };
  return Cache;
}();
function createMemoizedFunction$5(fn, options) {
  if (options === void 0) {
    options = {};
  }
  if (isMemoized$5(fn)) {
    return createMemoizedFunction$5(fn.fn, mergeOptions$5(fn.options, options));
  }
  if (typeof fn !== 'function') {
    throw new TypeError('You must pass a function to `memoize`.');
  }
  var _a = options.isEqual,
    isEqual = _a === void 0 ? isSameValueZero$5 : _a,
    isMatchingKey = options.isMatchingKey,
    _b = options.isPromise,
    isPromise = _b === void 0 ? false : _b,
    _c = options.maxSize,
    maxSize = _c === void 0 ? 1 : _c,
    onCacheAdd = options.onCacheAdd,
    onCacheChange = options.onCacheChange,
    onCacheHit = options.onCacheHit,
    transformKey = options.transformKey;
  var normalizedOptions = mergeOptions$5({
    isEqual: isEqual,
    isMatchingKey: isMatchingKey,
    isPromise: isPromise,
    maxSize: maxSize,
    onCacheAdd: onCacheAdd,
    onCacheChange: onCacheChange,
    onCacheHit: onCacheHit,
    transformKey: transformKey
  }, getCustomOptions$5(options));
  var cache = new Cache$5(normalizedOptions);
  var keys = cache.keys,
    values = cache.values,
    canTransformKey = cache.canTransformKey,
    shouldCloneArguments = cache.shouldCloneArguments,
    shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
    shouldUpdateOnChange = cache.shouldUpdateOnChange,
    shouldUpdateOnHit = cache.shouldUpdateOnHit;
  var memoized = function memoized() {
    var key = shouldCloneArguments ? cloneArray$5(arguments) : arguments;
    if (canTransformKey) {
      key = transformKey(key);
    }
    var keyIndex = keys.length ? cache.getKeyIndex(key) : -1;
    if (keyIndex !== -1) {
      if (shouldUpdateOnHit) {
        onCacheHit(cache, normalizedOptions, memoized);
      }
      if (keyIndex) {
        cache.orderByLru(keys[keyIndex], values[keyIndex], keyIndex);
        if (shouldUpdateOnChange) {
          onCacheChange(cache, normalizedOptions, memoized);
        }
      }
    } else {
      var newValue = fn.apply(this, arguments);
      var newKey = shouldCloneArguments ? key : cloneArray$5(arguments);
      cache.orderByLru(newKey, newValue, keys.length);
      if (isPromise) {
        cache.updateAsyncCache(memoized);
      }
      if (shouldUpdateOnAdd) {
        onCacheAdd(cache, normalizedOptions, memoized);
      }
      if (shouldUpdateOnChange) {
        onCacheChange(cache, normalizedOptions, memoized);
      }
    }
    return values[0];
  };
  memoized.cache = cache;
  memoized.fn = fn;
  memoized.isMemoized = true;
  memoized.options = normalizedOptions;
  return memoized;
}
var valueByIdentifier$5 = createMemoizedFunction$5(function () {
  var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = _objectSpread2$5({}, context);
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
  return valueByIdentifier$5(parts.join('.'), value[key]);
});
function ownKeys$4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2$4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$4(Object(t), !0).forEach(function (r) {
      _defineProperty$4(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive$4(t, r) {
  if ("object" != _typeof$4(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$4(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey$4(t) {
  var i = _toPrimitive$4(t, "string");
  return "symbol" == _typeof$4(i) ? i : String(i);
}
function _typeof$3(o) {
  "@babel/helpers - typeof";

  return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$3(o);
}
function _defineProperty$4(obj, key, value) {
  key = _toPropertyKey$4(key);
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
var classnames$4 = {
  exports: {}
};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
  /* global define */

  (function () {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = '';
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === 'string' || typeof arg === 'number') {
        return arg;
      }
      if (_typeof$4(arg) !== 'object') {
        return '';
      }
      if (Array.isArray(arg)) {
        return classNames.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
        return arg.toString();
      }
      var classes = '';
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + ' ' + newClass;
      }
      return value + newClass;
    }
    if (module.exports) {
      classNames["default"] = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames$4);

/**
 * @constant DEFAULT_OPTIONS_KEYS the default options keys
 */
var DEFAULT_OPTIONS_KEYS$4 = {
  isEqual: true,
  isMatchingKey: true,
  isPromise: true,
  maxSize: true,
  onCacheAdd: true,
  onCacheChange: true,
  onCacheHit: true,
  transformKey: true
};
/**
 * @function slice
 *
 * @description
 * slice.call() pre-bound
 */
var slice$4 = Array.prototype.slice;
/**
 * @function cloneArray
 *
 * @description
 * clone the array-like object and return the new array
 *
 * @param arrayLike the array-like object to clone
 * @returns the clone as an array
 */
function cloneArray$4(arrayLike) {
  var length = arrayLike.length;
  if (!length) {
    return [];
  }
  if (length === 1) {
    return [arrayLike[0]];
  }
  if (length === 2) {
    return [arrayLike[0], arrayLike[1]];
  }
  if (length === 3) {
    return [arrayLike[0], arrayLike[1], arrayLike[2]];
  }
  return slice$4.call(arrayLike, 0);
}
/**
 * @function getCustomOptions
 *
 * @description
 * get the custom options on the object passed
 *
 * @param options the memoization options passed
 * @returns the custom options passed
 */
function getCustomOptions$4(options) {
  var customOptions = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in options) {
    if (!DEFAULT_OPTIONS_KEYS$4[key]) {
      customOptions[key] = options[key];
    }
  }
  /* eslint-enable */
  return customOptions;
}
/**
 * @function isMemoized
 *
 * @description
 * is the function passed already memoized
 *
 * @param fn the function to test
 * @returns is the function already memoized
 */
function isMemoized$4(fn) {
  return typeof fn === 'function' && fn.isMemoized;
}
/**
 * @function isSameValueZero
 *
 * @description
 * are the objects equal based on SameValueZero equality
 *
 * @param object1 the first object to compare
 * @param object2 the second object to compare
 * @returns are the two objects equal
 */
function isSameValueZero$4(object1, object2) {
  // eslint-disable-next-line no-self-compare
  return object1 === object2 || object1 !== object1 && object2 !== object2;
}
/**
 * @function mergeOptions
 *
 * @description
 * merge the options into the target
 *
 * @param existingOptions the options provided
 * @param newOptions the options to include
 * @returns the merged options
 */
function mergeOptions$4(existingOptions, newOptions) {
  var target = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in existingOptions) {
    target[key] = existingOptions[key];
  }
  for (var key in newOptions) {
    target[key] = newOptions[key];
  }
  /* eslint-enable */
  return target;
}

// utils
var Cache$4 = /** @class */function () {
  function Cache(options) {
    this.keys = [];
    this.values = [];
    this.options = options;
    var isMatchingKeyFunction = typeof options.isMatchingKey === 'function';
    if (isMatchingKeyFunction) {
      this.getKeyIndex = this._getKeyIndexFromMatchingKey;
    } else if (options.maxSize > 1) {
      this.getKeyIndex = this._getKeyIndexForMany;
    } else {
      this.getKeyIndex = this._getKeyIndexForSingle;
    }
    this.canTransformKey = typeof options.transformKey === 'function';
    this.shouldCloneArguments = this.canTransformKey || isMatchingKeyFunction;
    this.shouldUpdateOnAdd = typeof options.onCacheAdd === 'function';
    this.shouldUpdateOnChange = typeof options.onCacheChange === 'function';
    this.shouldUpdateOnHit = typeof options.onCacheHit === 'function';
  }
  Object.defineProperty(Cache.prototype, "size", {
    /**
     * The number of cached [key,value] results.
     */
    get: function get() {
      return this.keys.length;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Cache.prototype, "snapshot", {
    /**
     * A copy of the cache at a moment in time. This is useful
     * to compare changes over time, since the cache mutates
     * internally for performance reasons.
     */
    get: function get() {
      return {
        keys: cloneArray$4(this.keys),
        size: this.size,
        values: cloneArray$4(this.values)
      };
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Gets the matching key index when a custom key matcher is used.
   */
  Cache.prototype._getKeyIndexFromMatchingKey = function (keyToMatch) {
    var _a = this.options,
      isMatchingKey = _a.isMatchingKey,
      maxSize = _a.maxSize;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (isMatchingKey(keys[0], keyToMatch)) {
      return 0;
    }
    if (maxSize > 1) {
      for (var index = 1; index < keysLength; index++) {
        if (isMatchingKey(keys[index], keyToMatch)) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when multiple keys are used.
   */
  Cache.prototype._getKeyIndexForMany = function (keyToMatch) {
    var isEqual = this.options.isEqual;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (keysLength === 1) {
      return this._getKeyIndexForSingle(keyToMatch);
    }
    var keyLength = keyToMatch.length;
    var existingKey;
    var argIndex;
    if (keyLength > 1) {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength) {
          argIndex = 0;
          for (; argIndex < keyLength; argIndex++) {
            if (!isEqual(existingKey[argIndex], keyToMatch[argIndex])) {
              break;
            }
          }
          if (argIndex === keyLength) {
            return index;
          }
        }
      }
    } else {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength && isEqual(existingKey[0], keyToMatch[0])) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when a single key is used.
   */
  Cache.prototype._getKeyIndexForSingle = function (keyToMatch) {
    var keys = this.keys;
    if (!keys.length) {
      return -1;
    }
    var existingKey = keys[0];
    var length = existingKey.length;
    if (keyToMatch.length !== length) {
      return -1;
    }
    var isEqual = this.options.isEqual;
    if (length > 1) {
      for (var index = 0; index < length; index++) {
        if (!isEqual(existingKey[index], keyToMatch[index])) {
          return -1;
        }
      }
      return 0;
    }
    return isEqual(existingKey[0], keyToMatch[0]) ? 0 : -1;
  };
  /**
   * Order the array based on a Least-Recently-Used basis.
   */
  Cache.prototype.orderByLru = function (key, value, startingIndex) {
    var keys = this.keys;
    var values = this.values;
    var currentLength = keys.length;
    var index = startingIndex;
    while (index--) {
      keys[index + 1] = keys[index];
      values[index + 1] = values[index];
    }
    keys[0] = key;
    values[0] = value;
    var maxSize = this.options.maxSize;
    if (currentLength === maxSize && startingIndex === currentLength) {
      keys.pop();
      values.pop();
    } else if (startingIndex >= maxSize) {
      // eslint-disable-next-line no-multi-assign
      keys.length = values.length = maxSize;
    }
  };
  /**
   * Update the promise method to auto-remove from cache if rejected, and
   * if resolved then fire cache hit / changed.
   */
  Cache.prototype.updateAsyncCache = function (memoized) {
    var _this = this;
    var _a = this.options,
      onCacheChange = _a.onCacheChange,
      onCacheHit = _a.onCacheHit;
    var firstKey = this.keys[0];
    var firstValue = this.values[0];
    this.values[0] = firstValue.then(function (value) {
      if (_this.shouldUpdateOnHit) {
        onCacheHit(_this, _this.options, memoized);
      }
      if (_this.shouldUpdateOnChange) {
        onCacheChange(_this, _this.options, memoized);
      }
      return value;
    }, function (error) {
      var keyIndex = _this.getKeyIndex(firstKey);
      if (keyIndex !== -1) {
        _this.keys.splice(keyIndex, 1);
        _this.values.splice(keyIndex, 1);
      }
      throw error;
    });
  };
  return Cache;
}();
function createMemoizedFunction$4(fn, options) {
  if (options === void 0) {
    options = {};
  }
  if (isMemoized$4(fn)) {
    return createMemoizedFunction$4(fn.fn, mergeOptions$4(fn.options, options));
  }
  if (typeof fn !== 'function') {
    throw new TypeError('You must pass a function to `memoize`.');
  }
  var _a = options.isEqual,
    isEqual = _a === void 0 ? isSameValueZero$4 : _a,
    isMatchingKey = options.isMatchingKey,
    _b = options.isPromise,
    isPromise = _b === void 0 ? false : _b,
    _c = options.maxSize,
    maxSize = _c === void 0 ? 1 : _c,
    onCacheAdd = options.onCacheAdd,
    onCacheChange = options.onCacheChange,
    onCacheHit = options.onCacheHit,
    transformKey = options.transformKey;
  var normalizedOptions = mergeOptions$4({
    isEqual: isEqual,
    isMatchingKey: isMatchingKey,
    isPromise: isPromise,
    maxSize: maxSize,
    onCacheAdd: onCacheAdd,
    onCacheChange: onCacheChange,
    onCacheHit: onCacheHit,
    transformKey: transformKey
  }, getCustomOptions$4(options));
  var cache = new Cache$4(normalizedOptions);
  var keys = cache.keys,
    values = cache.values,
    canTransformKey = cache.canTransformKey,
    shouldCloneArguments = cache.shouldCloneArguments,
    shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
    shouldUpdateOnChange = cache.shouldUpdateOnChange,
    shouldUpdateOnHit = cache.shouldUpdateOnHit;
  var memoized = function memoized() {
    var key = shouldCloneArguments ? cloneArray$4(arguments) : arguments;
    if (canTransformKey) {
      key = transformKey(key);
    }
    var keyIndex = keys.length ? cache.getKeyIndex(key) : -1;
    if (keyIndex !== -1) {
      if (shouldUpdateOnHit) {
        onCacheHit(cache, normalizedOptions, memoized);
      }
      if (keyIndex) {
        cache.orderByLru(keys[keyIndex], values[keyIndex], keyIndex);
        if (shouldUpdateOnChange) {
          onCacheChange(cache, normalizedOptions, memoized);
        }
      }
    } else {
      var newValue = fn.apply(this, arguments);
      var newKey = shouldCloneArguments ? key : cloneArray$4(arguments);
      cache.orderByLru(newKey, newValue, keys.length);
      if (isPromise) {
        cache.updateAsyncCache(memoized);
      }
      if (shouldUpdateOnAdd) {
        onCacheAdd(cache, normalizedOptions, memoized);
      }
      if (shouldUpdateOnChange) {
        onCacheChange(cache, normalizedOptions, memoized);
      }
    }
    return values[0];
  };
  memoized.cache = cache;
  memoized.fn = fn;
  memoized.isMemoized = true;
  memoized.options = normalizedOptions;
  return memoized;
}
var valueByIdentifier$4 = createMemoizedFunction$4(function () {
  var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = _objectSpread2$4({}, context);
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
  return valueByIdentifier$4(parts.join('.'), value[key]);
});
function ownKeys$3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2$3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$3(Object(t), !0).forEach(function (r) {
      _defineProperty$3(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive$3(t, r) {
  if ("object" != _typeof$3(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$3(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey$3(t) {
  var i = _toPrimitive$3(t, "string");
  return "symbol" == _typeof$3(i) ? i : String(i);
}
function _typeof$2(o) {
  "@babel/helpers - typeof";

  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$2(o);
}
function _defineProperty$3(obj, key, value) {
  key = _toPropertyKey$3(key);
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
var classnames$3 = {
  exports: {}
};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
  /* global define */

  (function () {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = '';
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === 'string' || typeof arg === 'number') {
        return arg;
      }
      if (_typeof$3(arg) !== 'object') {
        return '';
      }
      if (Array.isArray(arg)) {
        return classNames.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
        return arg.toString();
      }
      var classes = '';
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + ' ' + newClass;
      }
      return value + newClass;
    }
    if (module.exports) {
      classNames["default"] = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames$3);

/**
 * @constant DEFAULT_OPTIONS_KEYS the default options keys
 */
var DEFAULT_OPTIONS_KEYS$3 = {
  isEqual: true,
  isMatchingKey: true,
  isPromise: true,
  maxSize: true,
  onCacheAdd: true,
  onCacheChange: true,
  onCacheHit: true,
  transformKey: true
};
/**
 * @function slice
 *
 * @description
 * slice.call() pre-bound
 */
var slice$3 = Array.prototype.slice;
/**
 * @function cloneArray
 *
 * @description
 * clone the array-like object and return the new array
 *
 * @param arrayLike the array-like object to clone
 * @returns the clone as an array
 */
function cloneArray$3(arrayLike) {
  var length = arrayLike.length;
  if (!length) {
    return [];
  }
  if (length === 1) {
    return [arrayLike[0]];
  }
  if (length === 2) {
    return [arrayLike[0], arrayLike[1]];
  }
  if (length === 3) {
    return [arrayLike[0], arrayLike[1], arrayLike[2]];
  }
  return slice$3.call(arrayLike, 0);
}
/**
 * @function getCustomOptions
 *
 * @description
 * get the custom options on the object passed
 *
 * @param options the memoization options passed
 * @returns the custom options passed
 */
function getCustomOptions$3(options) {
  var customOptions = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in options) {
    if (!DEFAULT_OPTIONS_KEYS$3[key]) {
      customOptions[key] = options[key];
    }
  }
  /* eslint-enable */
  return customOptions;
}
/**
 * @function isMemoized
 *
 * @description
 * is the function passed already memoized
 *
 * @param fn the function to test
 * @returns is the function already memoized
 */
function isMemoized$3(fn) {
  return typeof fn === 'function' && fn.isMemoized;
}
/**
 * @function isSameValueZero
 *
 * @description
 * are the objects equal based on SameValueZero equality
 *
 * @param object1 the first object to compare
 * @param object2 the second object to compare
 * @returns are the two objects equal
 */
function isSameValueZero$3(object1, object2) {
  // eslint-disable-next-line no-self-compare
  return object1 === object2 || object1 !== object1 && object2 !== object2;
}
/**
 * @function mergeOptions
 *
 * @description
 * merge the options into the target
 *
 * @param existingOptions the options provided
 * @param newOptions the options to include
 * @returns the merged options
 */
function mergeOptions$3(existingOptions, newOptions) {
  var target = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in existingOptions) {
    target[key] = existingOptions[key];
  }
  for (var key in newOptions) {
    target[key] = newOptions[key];
  }
  /* eslint-enable */
  return target;
}

// utils
var Cache$3 = /** @class */function () {
  function Cache(options) {
    this.keys = [];
    this.values = [];
    this.options = options;
    var isMatchingKeyFunction = typeof options.isMatchingKey === 'function';
    if (isMatchingKeyFunction) {
      this.getKeyIndex = this._getKeyIndexFromMatchingKey;
    } else if (options.maxSize > 1) {
      this.getKeyIndex = this._getKeyIndexForMany;
    } else {
      this.getKeyIndex = this._getKeyIndexForSingle;
    }
    this.canTransformKey = typeof options.transformKey === 'function';
    this.shouldCloneArguments = this.canTransformKey || isMatchingKeyFunction;
    this.shouldUpdateOnAdd = typeof options.onCacheAdd === 'function';
    this.shouldUpdateOnChange = typeof options.onCacheChange === 'function';
    this.shouldUpdateOnHit = typeof options.onCacheHit === 'function';
  }
  Object.defineProperty(Cache.prototype, "size", {
    /**
     * The number of cached [key,value] results.
     */
    get: function get() {
      return this.keys.length;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Cache.prototype, "snapshot", {
    /**
     * A copy of the cache at a moment in time. This is useful
     * to compare changes over time, since the cache mutates
     * internally for performance reasons.
     */
    get: function get() {
      return {
        keys: cloneArray$3(this.keys),
        size: this.size,
        values: cloneArray$3(this.values)
      };
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Gets the matching key index when a custom key matcher is used.
   */
  Cache.prototype._getKeyIndexFromMatchingKey = function (keyToMatch) {
    var _a = this.options,
      isMatchingKey = _a.isMatchingKey,
      maxSize = _a.maxSize;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (isMatchingKey(keys[0], keyToMatch)) {
      return 0;
    }
    if (maxSize > 1) {
      for (var index = 1; index < keysLength; index++) {
        if (isMatchingKey(keys[index], keyToMatch)) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when multiple keys are used.
   */
  Cache.prototype._getKeyIndexForMany = function (keyToMatch) {
    var isEqual = this.options.isEqual;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (keysLength === 1) {
      return this._getKeyIndexForSingle(keyToMatch);
    }
    var keyLength = keyToMatch.length;
    var existingKey;
    var argIndex;
    if (keyLength > 1) {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength) {
          argIndex = 0;
          for (; argIndex < keyLength; argIndex++) {
            if (!isEqual(existingKey[argIndex], keyToMatch[argIndex])) {
              break;
            }
          }
          if (argIndex === keyLength) {
            return index;
          }
        }
      }
    } else {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength && isEqual(existingKey[0], keyToMatch[0])) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when a single key is used.
   */
  Cache.prototype._getKeyIndexForSingle = function (keyToMatch) {
    var keys = this.keys;
    if (!keys.length) {
      return -1;
    }
    var existingKey = keys[0];
    var length = existingKey.length;
    if (keyToMatch.length !== length) {
      return -1;
    }
    var isEqual = this.options.isEqual;
    if (length > 1) {
      for (var index = 0; index < length; index++) {
        if (!isEqual(existingKey[index], keyToMatch[index])) {
          return -1;
        }
      }
      return 0;
    }
    return isEqual(existingKey[0], keyToMatch[0]) ? 0 : -1;
  };
  /**
   * Order the array based on a Least-Recently-Used basis.
   */
  Cache.prototype.orderByLru = function (key, value, startingIndex) {
    var keys = this.keys;
    var values = this.values;
    var currentLength = keys.length;
    var index = startingIndex;
    while (index--) {
      keys[index + 1] = keys[index];
      values[index + 1] = values[index];
    }
    keys[0] = key;
    values[0] = value;
    var maxSize = this.options.maxSize;
    if (currentLength === maxSize && startingIndex === currentLength) {
      keys.pop();
      values.pop();
    } else if (startingIndex >= maxSize) {
      // eslint-disable-next-line no-multi-assign
      keys.length = values.length = maxSize;
    }
  };
  /**
   * Update the promise method to auto-remove from cache if rejected, and
   * if resolved then fire cache hit / changed.
   */
  Cache.prototype.updateAsyncCache = function (memoized) {
    var _this = this;
    var _a = this.options,
      onCacheChange = _a.onCacheChange,
      onCacheHit = _a.onCacheHit;
    var firstKey = this.keys[0];
    var firstValue = this.values[0];
    this.values[0] = firstValue.then(function (value) {
      if (_this.shouldUpdateOnHit) {
        onCacheHit(_this, _this.options, memoized);
      }
      if (_this.shouldUpdateOnChange) {
        onCacheChange(_this, _this.options, memoized);
      }
      return value;
    }, function (error) {
      var keyIndex = _this.getKeyIndex(firstKey);
      if (keyIndex !== -1) {
        _this.keys.splice(keyIndex, 1);
        _this.values.splice(keyIndex, 1);
      }
      throw error;
    });
  };
  return Cache;
}();
function createMemoizedFunction$3(fn, options) {
  if (options === void 0) {
    options = {};
  }
  if (isMemoized$3(fn)) {
    return createMemoizedFunction$3(fn.fn, mergeOptions$3(fn.options, options));
  }
  if (typeof fn !== 'function') {
    throw new TypeError('You must pass a function to `memoize`.');
  }
  var _a = options.isEqual,
    isEqual = _a === void 0 ? isSameValueZero$3 : _a,
    isMatchingKey = options.isMatchingKey,
    _b = options.isPromise,
    isPromise = _b === void 0 ? false : _b,
    _c = options.maxSize,
    maxSize = _c === void 0 ? 1 : _c,
    onCacheAdd = options.onCacheAdd,
    onCacheChange = options.onCacheChange,
    onCacheHit = options.onCacheHit,
    transformKey = options.transformKey;
  var normalizedOptions = mergeOptions$3({
    isEqual: isEqual,
    isMatchingKey: isMatchingKey,
    isPromise: isPromise,
    maxSize: maxSize,
    onCacheAdd: onCacheAdd,
    onCacheChange: onCacheChange,
    onCacheHit: onCacheHit,
    transformKey: transformKey
  }, getCustomOptions$3(options));
  var cache = new Cache$3(normalizedOptions);
  var keys = cache.keys,
    values = cache.values,
    canTransformKey = cache.canTransformKey,
    shouldCloneArguments = cache.shouldCloneArguments,
    shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
    shouldUpdateOnChange = cache.shouldUpdateOnChange,
    shouldUpdateOnHit = cache.shouldUpdateOnHit;
  var memoized = function memoized() {
    var key = shouldCloneArguments ? cloneArray$3(arguments) : arguments;
    if (canTransformKey) {
      key = transformKey(key);
    }
    var keyIndex = keys.length ? cache.getKeyIndex(key) : -1;
    if (keyIndex !== -1) {
      if (shouldUpdateOnHit) {
        onCacheHit(cache, normalizedOptions, memoized);
      }
      if (keyIndex) {
        cache.orderByLru(keys[keyIndex], values[keyIndex], keyIndex);
        if (shouldUpdateOnChange) {
          onCacheChange(cache, normalizedOptions, memoized);
        }
      }
    } else {
      var newValue = fn.apply(this, arguments);
      var newKey = shouldCloneArguments ? key : cloneArray$3(arguments);
      cache.orderByLru(newKey, newValue, keys.length);
      if (isPromise) {
        cache.updateAsyncCache(memoized);
      }
      if (shouldUpdateOnAdd) {
        onCacheAdd(cache, normalizedOptions, memoized);
      }
      if (shouldUpdateOnChange) {
        onCacheChange(cache, normalizedOptions, memoized);
      }
    }
    return values[0];
  };
  memoized.cache = cache;
  memoized.fn = fn;
  memoized.isMemoized = true;
  memoized.options = normalizedOptions;
  return memoized;
}
var valueByIdentifier$3 = createMemoizedFunction$3(function () {
  var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = _objectSpread2$3({}, context);
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
  return valueByIdentifier$3(parts.join('.'), value[key]);
});
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) {
      _defineProperty$2(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive$2(t, r) {
  if ("object" != _typeof$2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey$2(t) {
  var i = _toPrimitive$2(t, "string");
  return "symbol" == _typeof$2(i) ? i : String(i);
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _defineProperty$2(obj, key, value) {
  key = _toPropertyKey$2(key);
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
var classnames$2 = {
  exports: {}
};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
  /* global define */

  (function () {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = '';
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === 'string' || typeof arg === 'number') {
        return arg;
      }
      if (_typeof$2(arg) !== 'object') {
        return '';
      }
      if (Array.isArray(arg)) {
        return classNames.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
        return arg.toString();
      }
      var classes = '';
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + ' ' + newClass;
      }
      return value + newClass;
    }
    if (module.exports) {
      classNames["default"] = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames$2);

/**
 * @constant DEFAULT_OPTIONS_KEYS the default options keys
 */
var DEFAULT_OPTIONS_KEYS$2 = {
  isEqual: true,
  isMatchingKey: true,
  isPromise: true,
  maxSize: true,
  onCacheAdd: true,
  onCacheChange: true,
  onCacheHit: true,
  transformKey: true
};
/**
 * @function slice
 *
 * @description
 * slice.call() pre-bound
 */
var slice$2 = Array.prototype.slice;
/**
 * @function cloneArray
 *
 * @description
 * clone the array-like object and return the new array
 *
 * @param arrayLike the array-like object to clone
 * @returns the clone as an array
 */
function cloneArray$2(arrayLike) {
  var length = arrayLike.length;
  if (!length) {
    return [];
  }
  if (length === 1) {
    return [arrayLike[0]];
  }
  if (length === 2) {
    return [arrayLike[0], arrayLike[1]];
  }
  if (length === 3) {
    return [arrayLike[0], arrayLike[1], arrayLike[2]];
  }
  return slice$2.call(arrayLike, 0);
}
/**
 * @function getCustomOptions
 *
 * @description
 * get the custom options on the object passed
 *
 * @param options the memoization options passed
 * @returns the custom options passed
 */
function getCustomOptions$2(options) {
  var customOptions = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in options) {
    if (!DEFAULT_OPTIONS_KEYS$2[key]) {
      customOptions[key] = options[key];
    }
  }
  /* eslint-enable */
  return customOptions;
}
/**
 * @function isMemoized
 *
 * @description
 * is the function passed already memoized
 *
 * @param fn the function to test
 * @returns is the function already memoized
 */
function isMemoized$2(fn) {
  return typeof fn === 'function' && fn.isMemoized;
}
/**
 * @function isSameValueZero
 *
 * @description
 * are the objects equal based on SameValueZero equality
 *
 * @param object1 the first object to compare
 * @param object2 the second object to compare
 * @returns are the two objects equal
 */
function isSameValueZero$2(object1, object2) {
  // eslint-disable-next-line no-self-compare
  return object1 === object2 || object1 !== object1 && object2 !== object2;
}
/**
 * @function mergeOptions
 *
 * @description
 * merge the options into the target
 *
 * @param existingOptions the options provided
 * @param newOptions the options to include
 * @returns the merged options
 */
function mergeOptions$2(existingOptions, newOptions) {
  var target = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in existingOptions) {
    target[key] = existingOptions[key];
  }
  for (var key in newOptions) {
    target[key] = newOptions[key];
  }
  /* eslint-enable */
  return target;
}

// utils
var Cache$2 = /** @class */function () {
  function Cache(options) {
    this.keys = [];
    this.values = [];
    this.options = options;
    var isMatchingKeyFunction = typeof options.isMatchingKey === 'function';
    if (isMatchingKeyFunction) {
      this.getKeyIndex = this._getKeyIndexFromMatchingKey;
    } else if (options.maxSize > 1) {
      this.getKeyIndex = this._getKeyIndexForMany;
    } else {
      this.getKeyIndex = this._getKeyIndexForSingle;
    }
    this.canTransformKey = typeof options.transformKey === 'function';
    this.shouldCloneArguments = this.canTransformKey || isMatchingKeyFunction;
    this.shouldUpdateOnAdd = typeof options.onCacheAdd === 'function';
    this.shouldUpdateOnChange = typeof options.onCacheChange === 'function';
    this.shouldUpdateOnHit = typeof options.onCacheHit === 'function';
  }
  Object.defineProperty(Cache.prototype, "size", {
    /**
     * The number of cached [key,value] results.
     */
    get: function get() {
      return this.keys.length;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Cache.prototype, "snapshot", {
    /**
     * A copy of the cache at a moment in time. This is useful
     * to compare changes over time, since the cache mutates
     * internally for performance reasons.
     */
    get: function get() {
      return {
        keys: cloneArray$2(this.keys),
        size: this.size,
        values: cloneArray$2(this.values)
      };
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Gets the matching key index when a custom key matcher is used.
   */
  Cache.prototype._getKeyIndexFromMatchingKey = function (keyToMatch) {
    var _a = this.options,
      isMatchingKey = _a.isMatchingKey,
      maxSize = _a.maxSize;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (isMatchingKey(keys[0], keyToMatch)) {
      return 0;
    }
    if (maxSize > 1) {
      for (var index = 1; index < keysLength; index++) {
        if (isMatchingKey(keys[index], keyToMatch)) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when multiple keys are used.
   */
  Cache.prototype._getKeyIndexForMany = function (keyToMatch) {
    var isEqual = this.options.isEqual;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (keysLength === 1) {
      return this._getKeyIndexForSingle(keyToMatch);
    }
    var keyLength = keyToMatch.length;
    var existingKey;
    var argIndex;
    if (keyLength > 1) {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength) {
          argIndex = 0;
          for (; argIndex < keyLength; argIndex++) {
            if (!isEqual(existingKey[argIndex], keyToMatch[argIndex])) {
              break;
            }
          }
          if (argIndex === keyLength) {
            return index;
          }
        }
      }
    } else {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength && isEqual(existingKey[0], keyToMatch[0])) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when a single key is used.
   */
  Cache.prototype._getKeyIndexForSingle = function (keyToMatch) {
    var keys = this.keys;
    if (!keys.length) {
      return -1;
    }
    var existingKey = keys[0];
    var length = existingKey.length;
    if (keyToMatch.length !== length) {
      return -1;
    }
    var isEqual = this.options.isEqual;
    if (length > 1) {
      for (var index = 0; index < length; index++) {
        if (!isEqual(existingKey[index], keyToMatch[index])) {
          return -1;
        }
      }
      return 0;
    }
    return isEqual(existingKey[0], keyToMatch[0]) ? 0 : -1;
  };
  /**
   * Order the array based on a Least-Recently-Used basis.
   */
  Cache.prototype.orderByLru = function (key, value, startingIndex) {
    var keys = this.keys;
    var values = this.values;
    var currentLength = keys.length;
    var index = startingIndex;
    while (index--) {
      keys[index + 1] = keys[index];
      values[index + 1] = values[index];
    }
    keys[0] = key;
    values[0] = value;
    var maxSize = this.options.maxSize;
    if (currentLength === maxSize && startingIndex === currentLength) {
      keys.pop();
      values.pop();
    } else if (startingIndex >= maxSize) {
      // eslint-disable-next-line no-multi-assign
      keys.length = values.length = maxSize;
    }
  };
  /**
   * Update the promise method to auto-remove from cache if rejected, and
   * if resolved then fire cache hit / changed.
   */
  Cache.prototype.updateAsyncCache = function (memoized) {
    var _this = this;
    var _a = this.options,
      onCacheChange = _a.onCacheChange,
      onCacheHit = _a.onCacheHit;
    var firstKey = this.keys[0];
    var firstValue = this.values[0];
    this.values[0] = firstValue.then(function (value) {
      if (_this.shouldUpdateOnHit) {
        onCacheHit(_this, _this.options, memoized);
      }
      if (_this.shouldUpdateOnChange) {
        onCacheChange(_this, _this.options, memoized);
      }
      return value;
    }, function (error) {
      var keyIndex = _this.getKeyIndex(firstKey);
      if (keyIndex !== -1) {
        _this.keys.splice(keyIndex, 1);
        _this.values.splice(keyIndex, 1);
      }
      throw error;
    });
  };
  return Cache;
}();
function createMemoizedFunction$2(fn, options) {
  if (options === void 0) {
    options = {};
  }
  if (isMemoized$2(fn)) {
    return createMemoizedFunction$2(fn.fn, mergeOptions$2(fn.options, options));
  }
  if (typeof fn !== 'function') {
    throw new TypeError('You must pass a function to `memoize`.');
  }
  var _a = options.isEqual,
    isEqual = _a === void 0 ? isSameValueZero$2 : _a,
    isMatchingKey = options.isMatchingKey,
    _b = options.isPromise,
    isPromise = _b === void 0 ? false : _b,
    _c = options.maxSize,
    maxSize = _c === void 0 ? 1 : _c,
    onCacheAdd = options.onCacheAdd,
    onCacheChange = options.onCacheChange,
    onCacheHit = options.onCacheHit,
    transformKey = options.transformKey;
  var normalizedOptions = mergeOptions$2({
    isEqual: isEqual,
    isMatchingKey: isMatchingKey,
    isPromise: isPromise,
    maxSize: maxSize,
    onCacheAdd: onCacheAdd,
    onCacheChange: onCacheChange,
    onCacheHit: onCacheHit,
    transformKey: transformKey
  }, getCustomOptions$2(options));
  var cache = new Cache$2(normalizedOptions);
  var keys = cache.keys,
    values = cache.values,
    canTransformKey = cache.canTransformKey,
    shouldCloneArguments = cache.shouldCloneArguments,
    shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
    shouldUpdateOnChange = cache.shouldUpdateOnChange,
    shouldUpdateOnHit = cache.shouldUpdateOnHit;
  var memoized = function memoized() {
    var key = shouldCloneArguments ? cloneArray$2(arguments) : arguments;
    if (canTransformKey) {
      key = transformKey(key);
    }
    var keyIndex = keys.length ? cache.getKeyIndex(key) : -1;
    if (keyIndex !== -1) {
      if (shouldUpdateOnHit) {
        onCacheHit(cache, normalizedOptions, memoized);
      }
      if (keyIndex) {
        cache.orderByLru(keys[keyIndex], values[keyIndex], keyIndex);
        if (shouldUpdateOnChange) {
          onCacheChange(cache, normalizedOptions, memoized);
        }
      }
    } else {
      var newValue = fn.apply(this, arguments);
      var newKey = shouldCloneArguments ? key : cloneArray$2(arguments);
      cache.orderByLru(newKey, newValue, keys.length);
      if (isPromise) {
        cache.updateAsyncCache(memoized);
      }
      if (shouldUpdateOnAdd) {
        onCacheAdd(cache, normalizedOptions, memoized);
      }
      if (shouldUpdateOnChange) {
        onCacheChange(cache, normalizedOptions, memoized);
      }
    }
    return values[0];
  };
  memoized.cache = cache;
  memoized.fn = fn;
  memoized.isMemoized = true;
  memoized.options = normalizedOptions;
  return memoized;
}
var valueByIdentifier$2 = createMemoizedFunction$2(function () {
  var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = _objectSpread2$2({}, context);
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
  return valueByIdentifier$2(parts.join('.'), value[key]);
});
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) {
      _defineProperty$1(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _typeof$1(o) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$1(o);
}
function _defineProperty$1(obj, key, value) {
  key = _toPropertyKey$1(key);
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
var classnames$1 = {
  exports: {}
};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
  /* global define */

  (function () {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = '';
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === 'string' || typeof arg === 'number') {
        return arg;
      }
      if (_typeof(arg) !== 'object') {
        return '';
      }
      if (Array.isArray(arg)) {
        return classNames.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
        return arg.toString();
      }
      var classes = '';
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + ' ' + newClass;
      }
      return value + newClass;
    }
    if (module.exports) {
      classNames["default"] = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames$1);

/**
 * @constant DEFAULT_OPTIONS_KEYS the default options keys
 */
var DEFAULT_OPTIONS_KEYS$1 = {
  isEqual: true,
  isMatchingKey: true,
  isPromise: true,
  maxSize: true,
  onCacheAdd: true,
  onCacheChange: true,
  onCacheHit: true,
  transformKey: true
};
/**
 * @function slice
 *
 * @description
 * slice.call() pre-bound
 */
var slice$1 = Array.prototype.slice;
/**
 * @function cloneArray
 *
 * @description
 * clone the array-like object and return the new array
 *
 * @param arrayLike the array-like object to clone
 * @returns the clone as an array
 */
function cloneArray$1(arrayLike) {
  var length = arrayLike.length;
  if (!length) {
    return [];
  }
  if (length === 1) {
    return [arrayLike[0]];
  }
  if (length === 2) {
    return [arrayLike[0], arrayLike[1]];
  }
  if (length === 3) {
    return [arrayLike[0], arrayLike[1], arrayLike[2]];
  }
  return slice$1.call(arrayLike, 0);
}
/**
 * @function getCustomOptions
 *
 * @description
 * get the custom options on the object passed
 *
 * @param options the memoization options passed
 * @returns the custom options passed
 */
function getCustomOptions$1(options) {
  var customOptions = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in options) {
    if (!DEFAULT_OPTIONS_KEYS$1[key]) {
      customOptions[key] = options[key];
    }
  }
  /* eslint-enable */
  return customOptions;
}
/**
 * @function isMemoized
 *
 * @description
 * is the function passed already memoized
 *
 * @param fn the function to test
 * @returns is the function already memoized
 */
function isMemoized$1(fn) {
  return typeof fn === 'function' && fn.isMemoized;
}
/**
 * @function isSameValueZero
 *
 * @description
 * are the objects equal based on SameValueZero equality
 *
 * @param object1 the first object to compare
 * @param object2 the second object to compare
 * @returns are the two objects equal
 */
function isSameValueZero$1(object1, object2) {
  // eslint-disable-next-line no-self-compare
  return object1 === object2 || object1 !== object1 && object2 !== object2;
}
/**
 * @function mergeOptions
 *
 * @description
 * merge the options into the target
 *
 * @param existingOptions the options provided
 * @param newOptions the options to include
 * @returns the merged options
 */
function mergeOptions$1(existingOptions, newOptions) {
  var target = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in existingOptions) {
    target[key] = existingOptions[key];
  }
  for (var key in newOptions) {
    target[key] = newOptions[key];
  }
  /* eslint-enable */
  return target;
}

// utils
var Cache$1 = /** @class */function () {
  function Cache(options) {
    this.keys = [];
    this.values = [];
    this.options = options;
    var isMatchingKeyFunction = typeof options.isMatchingKey === 'function';
    if (isMatchingKeyFunction) {
      this.getKeyIndex = this._getKeyIndexFromMatchingKey;
    } else if (options.maxSize > 1) {
      this.getKeyIndex = this._getKeyIndexForMany;
    } else {
      this.getKeyIndex = this._getKeyIndexForSingle;
    }
    this.canTransformKey = typeof options.transformKey === 'function';
    this.shouldCloneArguments = this.canTransformKey || isMatchingKeyFunction;
    this.shouldUpdateOnAdd = typeof options.onCacheAdd === 'function';
    this.shouldUpdateOnChange = typeof options.onCacheChange === 'function';
    this.shouldUpdateOnHit = typeof options.onCacheHit === 'function';
  }
  Object.defineProperty(Cache.prototype, "size", {
    /**
     * The number of cached [key,value] results.
     */
    get: function get() {
      return this.keys.length;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Cache.prototype, "snapshot", {
    /**
     * A copy of the cache at a moment in time. This is useful
     * to compare changes over time, since the cache mutates
     * internally for performance reasons.
     */
    get: function get() {
      return {
        keys: cloneArray$1(this.keys),
        size: this.size,
        values: cloneArray$1(this.values)
      };
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Gets the matching key index when a custom key matcher is used.
   */
  Cache.prototype._getKeyIndexFromMatchingKey = function (keyToMatch) {
    var _a = this.options,
      isMatchingKey = _a.isMatchingKey,
      maxSize = _a.maxSize;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (isMatchingKey(keys[0], keyToMatch)) {
      return 0;
    }
    if (maxSize > 1) {
      for (var index = 1; index < keysLength; index++) {
        if (isMatchingKey(keys[index], keyToMatch)) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when multiple keys are used.
   */
  Cache.prototype._getKeyIndexForMany = function (keyToMatch) {
    var isEqual = this.options.isEqual;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (keysLength === 1) {
      return this._getKeyIndexForSingle(keyToMatch);
    }
    var keyLength = keyToMatch.length;
    var existingKey;
    var argIndex;
    if (keyLength > 1) {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength) {
          argIndex = 0;
          for (; argIndex < keyLength; argIndex++) {
            if (!isEqual(existingKey[argIndex], keyToMatch[argIndex])) {
              break;
            }
          }
          if (argIndex === keyLength) {
            return index;
          }
        }
      }
    } else {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength && isEqual(existingKey[0], keyToMatch[0])) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when a single key is used.
   */
  Cache.prototype._getKeyIndexForSingle = function (keyToMatch) {
    var keys = this.keys;
    if (!keys.length) {
      return -1;
    }
    var existingKey = keys[0];
    var length = existingKey.length;
    if (keyToMatch.length !== length) {
      return -1;
    }
    var isEqual = this.options.isEqual;
    if (length > 1) {
      for (var index = 0; index < length; index++) {
        if (!isEqual(existingKey[index], keyToMatch[index])) {
          return -1;
        }
      }
      return 0;
    }
    return isEqual(existingKey[0], keyToMatch[0]) ? 0 : -1;
  };
  /**
   * Order the array based on a Least-Recently-Used basis.
   */
  Cache.prototype.orderByLru = function (key, value, startingIndex) {
    var keys = this.keys;
    var values = this.values;
    var currentLength = keys.length;
    var index = startingIndex;
    while (index--) {
      keys[index + 1] = keys[index];
      values[index + 1] = values[index];
    }
    keys[0] = key;
    values[0] = value;
    var maxSize = this.options.maxSize;
    if (currentLength === maxSize && startingIndex === currentLength) {
      keys.pop();
      values.pop();
    } else if (startingIndex >= maxSize) {
      // eslint-disable-next-line no-multi-assign
      keys.length = values.length = maxSize;
    }
  };
  /**
   * Update the promise method to auto-remove from cache if rejected, and
   * if resolved then fire cache hit / changed.
   */
  Cache.prototype.updateAsyncCache = function (memoized) {
    var _this = this;
    var _a = this.options,
      onCacheChange = _a.onCacheChange,
      onCacheHit = _a.onCacheHit;
    var firstKey = this.keys[0];
    var firstValue = this.values[0];
    this.values[0] = firstValue.then(function (value) {
      if (_this.shouldUpdateOnHit) {
        onCacheHit(_this, _this.options, memoized);
      }
      if (_this.shouldUpdateOnChange) {
        onCacheChange(_this, _this.options, memoized);
      }
      return value;
    }, function (error) {
      var keyIndex = _this.getKeyIndex(firstKey);
      if (keyIndex !== -1) {
        _this.keys.splice(keyIndex, 1);
        _this.values.splice(keyIndex, 1);
      }
      throw error;
    });
  };
  return Cache;
}();
function createMemoizedFunction$1(fn, options) {
  if (options === void 0) {
    options = {};
  }
  if (isMemoized$1(fn)) {
    return createMemoizedFunction$1(fn.fn, mergeOptions$1(fn.options, options));
  }
  if (typeof fn !== 'function') {
    throw new TypeError('You must pass a function to `memoize`.');
  }
  var _a = options.isEqual,
    isEqual = _a === void 0 ? isSameValueZero$1 : _a,
    isMatchingKey = options.isMatchingKey,
    _b = options.isPromise,
    isPromise = _b === void 0 ? false : _b,
    _c = options.maxSize,
    maxSize = _c === void 0 ? 1 : _c,
    onCacheAdd = options.onCacheAdd,
    onCacheChange = options.onCacheChange,
    onCacheHit = options.onCacheHit,
    transformKey = options.transformKey;
  var normalizedOptions = mergeOptions$1({
    isEqual: isEqual,
    isMatchingKey: isMatchingKey,
    isPromise: isPromise,
    maxSize: maxSize,
    onCacheAdd: onCacheAdd,
    onCacheChange: onCacheChange,
    onCacheHit: onCacheHit,
    transformKey: transformKey
  }, getCustomOptions$1(options));
  var cache = new Cache$1(normalizedOptions);
  var keys = cache.keys,
    values = cache.values,
    canTransformKey = cache.canTransformKey,
    shouldCloneArguments = cache.shouldCloneArguments,
    shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
    shouldUpdateOnChange = cache.shouldUpdateOnChange,
    shouldUpdateOnHit = cache.shouldUpdateOnHit;
  var memoized = function memoized() {
    var key = shouldCloneArguments ? cloneArray$1(arguments) : arguments;
    if (canTransformKey) {
      key = transformKey(key);
    }
    var keyIndex = keys.length ? cache.getKeyIndex(key) : -1;
    if (keyIndex !== -1) {
      if (shouldUpdateOnHit) {
        onCacheHit(cache, normalizedOptions, memoized);
      }
      if (keyIndex) {
        cache.orderByLru(keys[keyIndex], values[keyIndex], keyIndex);
        if (shouldUpdateOnChange) {
          onCacheChange(cache, normalizedOptions, memoized);
        }
      }
    } else {
      var newValue = fn.apply(this, arguments);
      var newKey = shouldCloneArguments ? key : cloneArray$1(arguments);
      cache.orderByLru(newKey, newValue, keys.length);
      if (isPromise) {
        cache.updateAsyncCache(memoized);
      }
      if (shouldUpdateOnAdd) {
        onCacheAdd(cache, normalizedOptions, memoized);
      }
      if (shouldUpdateOnChange) {
        onCacheChange(cache, normalizedOptions, memoized);
      }
    }
    return values[0];
  };
  memoized.cache = cache;
  memoized.fn = fn;
  memoized.isMemoized = true;
  memoized.options = normalizedOptions;
  return memoized;
}
var valueByIdentifier$1 = createMemoizedFunction$1(function () {
  var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = _objectSpread2$1({}, context);
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
  return valueByIdentifier$1(parts.join('.'), value[key]);
});
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof$1(i) ? i : String(i);
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
var classnames = {
  exports: {}
};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
  /* global define */

  (function () {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = '';
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === 'string' || typeof arg === 'number') {
        return arg;
      }
      if (_typeof$1(arg) !== 'object') {
        return '';
      }
      if (Array.isArray(arg)) {
        return classNames.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
        return arg.toString();
      }
      var classes = '';
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + ' ' + newClass;
      }
      return value + newClass;
    }
    if (module.exports) {
      classNames["default"] = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames);

/**
 * @constant DEFAULT_OPTIONS_KEYS the default options keys
 */
var DEFAULT_OPTIONS_KEYS = {
  isEqual: true,
  isMatchingKey: true,
  isPromise: true,
  maxSize: true,
  onCacheAdd: true,
  onCacheChange: true,
  onCacheHit: true,
  transformKey: true
};
/**
 * @function slice
 *
 * @description
 * slice.call() pre-bound
 */
var slice = Array.prototype.slice;
/**
 * @function cloneArray
 *
 * @description
 * clone the array-like object and return the new array
 *
 * @param arrayLike the array-like object to clone
 * @returns the clone as an array
 */
function cloneArray(arrayLike) {
  var length = arrayLike.length;
  if (!length) {
    return [];
  }
  if (length === 1) {
    return [arrayLike[0]];
  }
  if (length === 2) {
    return [arrayLike[0], arrayLike[1]];
  }
  if (length === 3) {
    return [arrayLike[0], arrayLike[1], arrayLike[2]];
  }
  return slice.call(arrayLike, 0);
}
/**
 * @function getCustomOptions
 *
 * @description
 * get the custom options on the object passed
 *
 * @param options the memoization options passed
 * @returns the custom options passed
 */
function getCustomOptions(options) {
  var customOptions = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in options) {
    if (!DEFAULT_OPTIONS_KEYS[key]) {
      customOptions[key] = options[key];
    }
  }
  /* eslint-enable */
  return customOptions;
}
/**
 * @function isMemoized
 *
 * @description
 * is the function passed already memoized
 *
 * @param fn the function to test
 * @returns is the function already memoized
 */
function isMemoized(fn) {
  return typeof fn === 'function' && fn.isMemoized;
}
/**
 * @function isSameValueZero
 *
 * @description
 * are the objects equal based on SameValueZero equality
 *
 * @param object1 the first object to compare
 * @param object2 the second object to compare
 * @returns are the two objects equal
 */
function isSameValueZero(object1, object2) {
  // eslint-disable-next-line no-self-compare
  return object1 === object2 || object1 !== object1 && object2 !== object2;
}
/**
 * @function mergeOptions
 *
 * @description
 * merge the options into the target
 *
 * @param existingOptions the options provided
 * @param newOptions the options to include
 * @returns the merged options
 */
function mergeOptions(existingOptions, newOptions) {
  var target = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in existingOptions) {
    target[key] = existingOptions[key];
  }
  for (var key in newOptions) {
    target[key] = newOptions[key];
  }
  /* eslint-enable */
  return target;
}

// utils
var Cache = /** @class */function () {
  function Cache(options) {
    this.keys = [];
    this.values = [];
    this.options = options;
    var isMatchingKeyFunction = typeof options.isMatchingKey === 'function';
    if (isMatchingKeyFunction) {
      this.getKeyIndex = this._getKeyIndexFromMatchingKey;
    } else if (options.maxSize > 1) {
      this.getKeyIndex = this._getKeyIndexForMany;
    } else {
      this.getKeyIndex = this._getKeyIndexForSingle;
    }
    this.canTransformKey = typeof options.transformKey === 'function';
    this.shouldCloneArguments = this.canTransformKey || isMatchingKeyFunction;
    this.shouldUpdateOnAdd = typeof options.onCacheAdd === 'function';
    this.shouldUpdateOnChange = typeof options.onCacheChange === 'function';
    this.shouldUpdateOnHit = typeof options.onCacheHit === 'function';
  }
  Object.defineProperty(Cache.prototype, "size", {
    /**
     * The number of cached [key,value] results.
     */
    get: function get() {
      return this.keys.length;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Cache.prototype, "snapshot", {
    /**
     * A copy of the cache at a moment in time. This is useful
     * to compare changes over time, since the cache mutates
     * internally for performance reasons.
     */
    get: function get() {
      return {
        keys: cloneArray(this.keys),
        size: this.size,
        values: cloneArray(this.values)
      };
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Gets the matching key index when a custom key matcher is used.
   */
  Cache.prototype._getKeyIndexFromMatchingKey = function (keyToMatch) {
    var _a = this.options,
      isMatchingKey = _a.isMatchingKey,
      maxSize = _a.maxSize;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (isMatchingKey(keys[0], keyToMatch)) {
      return 0;
    }
    if (maxSize > 1) {
      for (var index = 1; index < keysLength; index++) {
        if (isMatchingKey(keys[index], keyToMatch)) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when multiple keys are used.
   */
  Cache.prototype._getKeyIndexForMany = function (keyToMatch) {
    var isEqual = this.options.isEqual;
    var keys = this.keys;
    var keysLength = keys.length;
    if (!keysLength) {
      return -1;
    }
    if (keysLength === 1) {
      return this._getKeyIndexForSingle(keyToMatch);
    }
    var keyLength = keyToMatch.length;
    var existingKey;
    var argIndex;
    if (keyLength > 1) {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength) {
          argIndex = 0;
          for (; argIndex < keyLength; argIndex++) {
            if (!isEqual(existingKey[argIndex], keyToMatch[argIndex])) {
              break;
            }
          }
          if (argIndex === keyLength) {
            return index;
          }
        }
      }
    } else {
      for (var index = 0; index < keysLength; index++) {
        existingKey = keys[index];
        if (existingKey.length === keyLength && isEqual(existingKey[0], keyToMatch[0])) {
          return index;
        }
      }
    }
    return -1;
  };
  /**
   * Gets the matching key index when a single key is used.
   */
  Cache.prototype._getKeyIndexForSingle = function (keyToMatch) {
    var keys = this.keys;
    if (!keys.length) {
      return -1;
    }
    var existingKey = keys[0];
    var length = existingKey.length;
    if (keyToMatch.length !== length) {
      return -1;
    }
    var isEqual = this.options.isEqual;
    if (length > 1) {
      for (var index = 0; index < length; index++) {
        if (!isEqual(existingKey[index], keyToMatch[index])) {
          return -1;
        }
      }
      return 0;
    }
    return isEqual(existingKey[0], keyToMatch[0]) ? 0 : -1;
  };
  /**
   * Order the array based on a Least-Recently-Used basis.
   */
  Cache.prototype.orderByLru = function (key, value, startingIndex) {
    var keys = this.keys;
    var values = this.values;
    var currentLength = keys.length;
    var index = startingIndex;
    while (index--) {
      keys[index + 1] = keys[index];
      values[index + 1] = values[index];
    }
    keys[0] = key;
    values[0] = value;
    var maxSize = this.options.maxSize;
    if (currentLength === maxSize && startingIndex === currentLength) {
      keys.pop();
      values.pop();
    } else if (startingIndex >= maxSize) {
      // eslint-disable-next-line no-multi-assign
      keys.length = values.length = maxSize;
    }
  };
  /**
   * Update the promise method to auto-remove from cache if rejected, and
   * if resolved then fire cache hit / changed.
   */
  Cache.prototype.updateAsyncCache = function (memoized) {
    var _this = this;
    var _a = this.options,
      onCacheChange = _a.onCacheChange,
      onCacheHit = _a.onCacheHit;
    var firstKey = this.keys[0];
    var firstValue = this.values[0];
    this.values[0] = firstValue.then(function (value) {
      if (_this.shouldUpdateOnHit) {
        onCacheHit(_this, _this.options, memoized);
      }
      if (_this.shouldUpdateOnChange) {
        onCacheChange(_this, _this.options, memoized);
      }
      return value;
    }, function (error) {
      var keyIndex = _this.getKeyIndex(firstKey);
      if (keyIndex !== -1) {
        _this.keys.splice(keyIndex, 1);
        _this.values.splice(keyIndex, 1);
      }
      throw error;
    });
  };
  return Cache;
}();
function createMemoizedFunction(fn, options) {
  if (options === void 0) {
    options = {};
  }
  if (isMemoized(fn)) {
    return createMemoizedFunction(fn.fn, mergeOptions(fn.options, options));
  }
  if (typeof fn !== 'function') {
    throw new TypeError('You must pass a function to `memoize`.');
  }
  var _a = options.isEqual,
    isEqual = _a === void 0 ? isSameValueZero : _a,
    isMatchingKey = options.isMatchingKey,
    _b = options.isPromise,
    isPromise = _b === void 0 ? false : _b,
    _c = options.maxSize,
    maxSize = _c === void 0 ? 1 : _c,
    onCacheAdd = options.onCacheAdd,
    onCacheChange = options.onCacheChange,
    onCacheHit = options.onCacheHit,
    transformKey = options.transformKey;
  var normalizedOptions = mergeOptions({
    isEqual: isEqual,
    isMatchingKey: isMatchingKey,
    isPromise: isPromise,
    maxSize: maxSize,
    onCacheAdd: onCacheAdd,
    onCacheChange: onCacheChange,
    onCacheHit: onCacheHit,
    transformKey: transformKey
  }, getCustomOptions(options));
  var cache = new Cache(normalizedOptions);
  var keys = cache.keys,
    values = cache.values,
    canTransformKey = cache.canTransformKey,
    shouldCloneArguments = cache.shouldCloneArguments,
    shouldUpdateOnAdd = cache.shouldUpdateOnAdd,
    shouldUpdateOnChange = cache.shouldUpdateOnChange,
    shouldUpdateOnHit = cache.shouldUpdateOnHit;
  var memoized = function memoized() {
    var key = shouldCloneArguments ? cloneArray(arguments) : arguments;
    if (canTransformKey) {
      key = transformKey(key);
    }
    var keyIndex = keys.length ? cache.getKeyIndex(key) : -1;
    if (keyIndex !== -1) {
      if (shouldUpdateOnHit) {
        onCacheHit(cache, normalizedOptions, memoized);
      }
      if (keyIndex) {
        cache.orderByLru(keys[keyIndex], values[keyIndex], keyIndex);
        if (shouldUpdateOnChange) {
          onCacheChange(cache, normalizedOptions, memoized);
        }
      }
    } else {
      var newValue = fn.apply(this, arguments);
      var newKey = shouldCloneArguments ? key : cloneArray(arguments);
      cache.orderByLru(newKey, newValue, keys.length);
      if (isPromise) {
        cache.updateAsyncCache(memoized);
      }
      if (shouldUpdateOnAdd) {
        onCacheAdd(cache, normalizedOptions, memoized);
      }
      if (shouldUpdateOnChange) {
        onCacheChange(cache, normalizedOptions, memoized);
      }
    }
    return values[0];
  };
  memoized.cache = cache;
  memoized.fn = fn;
  memoized.isMemoized = true;
  memoized.options = normalizedOptions;
  return memoized;
}
var valueByIdentifier = createMemoizedFunction(function () {
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

function normalizeComponentList(componentList) {
  var defaultComponent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (isObject$1(componentList)) {
    return [componentList];
  }
  if (isArray$1(componentList) && componentList.length > 0) {
    return componentList;
  }
  return [defaultComponent];
}

var EXCLUDED_ATTRIBUTES = [
	"saveAs"
];

function styles() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _styles = structuredClone(styles);
  if (typeof _styles === "string") {
    _styles = convertStyleStringToObject(_styles);
  }
  if (_typeof$d(_styles) !== "object") {
    return {};
  }
  return Object.fromEntries(Object.entries(_styles).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      property = _ref2[0],
      value = _ref2[1];
    return [replaceTokens(property, context), replaceTokens(value, context)];
  }));
}

var _excluded = ["children", "className", "editorClassName", "viewClassName", "style", "attributeName", "type", "tagName", "persist"],
  _excluded2 = ["jsx"];

/**
 * Renders an item inside a JSX objects array
 */
function render(_ref, _ref2) {
  var _ref$children = _ref.children,
    children = _ref$children === void 0 ? [] : _ref$children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? [] : _ref$className,
    _ref$editorClassName = _ref.editorClassName,
    editorClassName = _ref$editorClassName === void 0 ? [] : _ref$editorClassName,
    _ref$viewClassName = _ref.viewClassName,
    viewClassName = _ref$viewClassName === void 0 ? [] : _ref$viewClassName,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$attributeName = _ref.attributeName,
    attributeName = _ref$attributeName === void 0 ? '' : _ref$attributeName,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'html' : _ref$type,
    _ref$tagName = _ref.tagName,
    tagName = _ref$tagName === void 0 ? 'div' : _ref$tagName,
    _ref$persist = _ref.persist,
    persist = _ref$persist === void 0 ? true : _ref$persist,
    props = _objectWithoutProperties(_ref, _excluded);
  var clientId = _ref2.clientId,
    blockName = _ref2.blockName,
    attributes = _ref2.attributes,
    _ref2$setAttributes = _ref2.setAttributes,
    setAttributes = _ref2$setAttributes === void 0 ? null : _ref2$setAttributes,
    _ref2$context = _ref2.context,
    context = _ref2$context === void 0 ? {} : _ref2$context;
  var Components = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var attributeValue = attributes === null || attributes === void 0 ? void 0 : attributes[attributeName];
  if (attributeValue === undefined) {
    attributeValue = props === null || props === void 0 ? void 0 : props.value;
  }
  var jsxAttributes = Object.fromEntries(Object.entries(props).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      name = _ref4[0],
      value = _ref4[1];
    if (typeof value === 'string' && EXCLUDED_ATTRIBUTES.includes(name) === false) {
      return [name, replaceTokens(value, _objectSpread2$e(_objectSpread2$e({}, context), {}, {
        attribute: {
          value: attributeValue
        }
      }))];
    } else {
      return [name, value];
    }
  }));
  if ('display' in jsxAttributes) {
    jsxAttributes.display = evaluateConditionalString(props.display, context);
  }
  var jsxClassNames = classNames([].concat(_toConsumableArray(Array.isArray(className) && className || [className]), _toConsumableArray((context === null || context === void 0 ? void 0 : context.context) === 'edit' && (Array.isArray(editorClassName) && editorClassName || [editorClassName]) || []), _toConsumableArray((context === null || context === void 0 ? void 0 : context.context) === 'save' && (Array.isArray(viewClassName) && viewClassName || [viewClassName]) || [])), _objectSpread2$e(_objectSpread2$e({}, context), {}, {
    attribute: {
      value: attributeValue
    }
  }));
  if (jsxClassNames) {
    jsxAttributes.className = jsxClassNames;
  }
  var jsxStyles = styles(style, _objectSpread2$e(_objectSpread2$e({}, context), {}, {
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
  } else if ("".concat(type, "-field") in Components && Components["".concat(type, "-field")]) {
    Component = Components["".concat(type, "-field")];
  }
  if (Component !== tagName) {
    return /*#__PURE__*/React.createElement(Component, _extends({}, jsxAttributes, {
      clientId: clientId,
      blockName: blockName,
      attributeName: attributeName,
      tagName: tagName,
      attributes: attributes
    }, attributeValue !== undefined && {
      value: attributeValue
    }, setAttributes !== null && {
      attributeName: attributeName,
      setAttributes: setAttributes,
      onInput: function onInput(value) {
        if ((context === null || context === void 0 ? void 0 : context.context) === 'save') {
          return;
        }
        setAttributes(_defineProperty$e({}, attributeName, value), persist);
      }
    }), renderJsxArray({
      clientId: clientId,
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
    clientId: clientId,
    blockName: blockName,
    attributes: attributes,
    setAttributes: setAttributes,
    jsx: children,
    context: context
  }, Components));
}

/**
 * Renders an array of JSX objects
 *
 * @param {array} jsx
 */
function renderJsxArray(_ref5) {
  var _ref5$jsx = _ref5.jsx,
    jsx = _ref5$jsx === void 0 ? [] : _ref5$jsx,
    blockProps = _objectWithoutProperties(_ref5, _excluded2);
  var Components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (Array.isArray(jsx) === false || jsx.length === 0) {
    return null;
  }
  var jsxComponents = jsx.map(function (jsxComponent) {
    if (typeof jsxComponent === 'function') {
      return jsxComponent(blockProps);
    }
    return render(jsxComponent, blockProps, Components);
  });
  if (jsxComponents.length === 1) {
    return jsxComponents[0];
  }
  return jsxComponents;
}

/**
 *
 *
 * @param {*} callback
 * @returns
 */
function throttle(callback, delay) {
  var wait = false;
  var callbackArgs = null;
  function attemptCall() {
    if (callbackArgs === null) {
      wait = false;
    } else {
      callback.apply(void 0, _toConsumableArray(callbackArgs));
      callbackArgs = null;
      setTimeout(attemptCall, delay);
    }
  }
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (wait) {
      callbackArgs = args;
      return;
    }
    callback.apply(void 0, args);
    wait = true;
    setTimeout(attemptCall, delay);
  };
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
function useBlockIndex(clientId) {
  var _useSelect = wp.data.useSelect(function (select) {
      var _select;
      return {
        getBlockIndex: (_select = select('core/block-editor')) === null || _select === void 0 ? void 0 : _select.getBlockIndex
      };
    }),
    getBlockIndex = _useSelect.getBlockIndex;
  return getBlockIndex && getBlockIndex(clientId) || 0;
}

function useClickOutside(ref, callback) {
  wp.element.useEffect(function () {
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
function useInnerBlocks(clientId) {
  var _useSelect = wp.data.useSelect(function (select) {
      var _select;
      return {
        getBlocks: (_select = select('core/block-editor')) === null || _select === void 0 ? void 0 : _select.getBlocks
      };
    }),
    getBlocks = _useSelect.getBlocks;
  return getBlocks && getBlocks(clientId) || [];
}

export { camelize, classNames, convertStyleStringToObject, delimiterize, evaluateConditionalString, getBlockContext, isArray, isExternalUrl, isFragmentUrl, isObject, normalizeComponentList, renderJsxArray, replaceTokens, styles, throttle, useBlockIndex, useClickOutside, useInnerBlocks };
