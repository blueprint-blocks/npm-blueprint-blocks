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
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : String(i);
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var classnames = {exports: {}};

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
} (classnames));

var classnamesExports = classnames.exports;
var npmClassNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

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
  var memoized = function () {
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

var _ref = blueprintBlocksLoaderSettings || {},
  _ref$tokenContext = _ref.tokenContext,
  tokenContext = _ref$tokenContext === void 0 ? {} : _ref$tokenContext;

/**
 * Returns the global context available to all blocks everywhere.
 */
function getGlobalContext() {
  var globalContext = _objectSpread2({}, tokenContext);
  if (Object.entries(globalContext).length === 0) {
    var _themeData$screenshot, _themeData$screenshot2;
    var siteData = wp.data.select("core").getSite();
    var themeData = wp.data.select("core").getCurrentTheme();
    globalContext.site = {};
    globalContext.site.url = (siteData === null || siteData === void 0 ? void 0 : siteData.url) || "";
    globalContext.theme.url = (themeData === null || themeData === void 0 || (_themeData$screenshot = themeData.screenshot) === null || _themeData$screenshot === void 0 ? void 0 : _themeData$screenshot.slice(0, (themeData === null || themeData === void 0 || (_themeData$screenshot2 = themeData.screenshot) === null || _themeData$screenshot2 === void 0 ? void 0 : _themeData$screenshot2.lastIndexOf("/")) || 0)) || "";
    globalContext.theme.path = globalContext.theme.url.slice(globalContext.site.url.length);
  }
  return globalContext;
}

var valueByIdentifier = createMemoizedFunction(function () {
  var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = _objectSpread2({}, context);
  var parts = identifier.split(".");
  if (parts.length === 0) {
    return "";
  }
  var key = parts.shift();
  if (!(context !== null && context !== void 0 && context[key])) {
    return "";
  }
  if (parts.length === 0 && key === "length") {
    return Object.values(value).length;
  }
  if (parts.length === 0 && _typeof(value[key]) === "object") {
    return JSON.stringify(value[key]);
  }
  if (parts.length === 0) {
    return value[key];
  }
  return valueByIdentifier(parts.join("."), value[key]);
});
function replaceTokens() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var allContext = _objectSpread2(_objectSpread2({}, getGlobalContext()), context);
  if (typeof string !== "string") {
    return string;
  }
  return string.replaceAll(/\{\{(.*?)\}\}/g, function (match, p1) {
    return valueByIdentifier(p1.trim(), allContext);
  });
}

var OPERANDS = ["==", "!=", "<", "<=", ">", ">="];
function evaluateCondition() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
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
  if (operand === "==") {
    return before == after;
  }
  if (operand === "!=") {
    return before != after;
  }
  if (operand === "<") {
    return parseFloat(before) < parseFloat(after);
  }
  if (operand === "<=") {
    return parseFloat(before) <= parseFloat(after);
  }
  if (operand === ">") {
    return parseFloat(before) > parseFloat(after);
  }
  if (operand === ">=") {
    return parseFloat(before) >= parseFloat(after);
  }
  return false;
}
function evaluateConditionalString() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (typeof string !== "string" || string === "") {
    return string;
  }
  var open = null;
  var close = null;
  var evaluatedString = string;
  do {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === "(") {
        open = i;
      }
      if (open !== null && string[i] === ")") {
        close = i;
        break;
      }
    }
    var conditional = void 0,
      before = void 0,
      after = void 0;
    if (open === null && close === null) {
      conditional = string;
      before = "";
      after = "";
    } else {
      conditional = string.slice(open + 1, close - 1);
      before = string.slice(0, open - 1);
      after = string.slice(close + 1);
    }
    var ands = conditional.split("&&");
    var result = ands.reduce(function (result, and) {
      var ors = and.trim().split("||");
      return result && ors.reduce(function (reducedOr, or) {
        return reducedOr || evaluateCondition(or.trim(), context);
      }, null);
    }, true);
    if (before === "" && after === "") {
      evaluatedString = result && "1" || "0";
    } else {
      evaluatedString = before + (result && "true" || "false") + after;
    }
  } while (open !== null && close !== null);
  if (evaluatedString === "1" || evaluatedString === "true") {
    return true;
  }
  if (evaluatedString === "0" || evaluatedString === "false") {
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
    if (Array.isArray(className)) {
      return classNames(className, context);
    } else if (_typeof(className) === "object") {
      return Object.fromEntries(Object.entries(className).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        return [replaceTokens(key, context), typeof value === "boolean" ? value : evaluateConditionalString(value, context)];
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
  return Object.fromEntries(style.split(";").filter(function (property) {
    return !!property;
  }).map(function (property) {
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
  return _objectSpread2(_objectSpread2({}, blockContext), {}, {
    block: _objectSpread2({
      index: index
    }, attributes),
    innerBlocks: (innerBlocks === null || innerBlocks === void 0 ? void 0 : innerBlocks.length) && innerBlocks || new Array(length).fill(null)
  });
}

function isArray(value) {
  return Array.isArray(value) && value !== null;
}

function isObject(value) {
  return _typeof(value) === "object" && !Array.isArray(value) && value !== null;
}

function isEmptyObject(value) {
  var _Object$entries;
  return isObject(value) && ((_Object$entries = Object.entries(value)) === null || _Object$entries === void 0 ? void 0 : _Object$entries.length) === 0;
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

function normalizeComponentList(componentList) {
  var defaultComponent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (isObject(componentList) && !isEmptyObject(componentList)) {
    return [componentList];
  }
  if (isArray(componentList) && componentList.length > 0) {
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
  if (_typeof(_styles) !== "object") {
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
    attributeName = _ref$attributeName === void 0 ? "" : _ref$attributeName,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "html" : _ref$type,
    _ref$tagName = _ref.tagName,
    tagName = _ref$tagName === void 0 ? "div" : _ref$tagName,
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
    if (typeof value === "string" && EXCLUDED_ATTRIBUTES.includes(name) === false) {
      return [name, replaceTokens(value, _objectSpread2(_objectSpread2({}, context), {}, {
        attribute: {
          value: attributeValue
        }
      }))];
    } else {
      return [name, value];
    }
  }));
  if ("display" in jsxAttributes) {
    jsxAttributes.display = evaluateConditionalString(props.display, context);
  }
  var jsxClassNames = classNames([].concat(_toConsumableArray(Array.isArray(className) && className || [className]), _toConsumableArray((context === null || context === void 0 ? void 0 : context.context) === "edit" && (Array.isArray(editorClassName) && editorClassName || [editorClassName]) || []), _toConsumableArray((context === null || context === void 0 ? void 0 : context.context) === "save" && (Array.isArray(viewClassName) && viewClassName || [viewClassName]) || [])), _objectSpread2(_objectSpread2({}, context), {}, {
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
  var jsxTagName = replaceTokens(tagName, _objectSpread2(_objectSpread2({}, context), {}, {
    attribute: {
      value: attributeValue
    }
  }));
  var Component = jsxTagName;
  if (type in Components && Components[type]) {
    Component = Components[type];
  } else if ("".concat(type, "-field") in Components && Components["".concat(type, "-field")]) {
    Component = Components["".concat(type, "-field")];
  }
  if (Component !== jsxTagName) {
    return /*#__PURE__*/React.createElement(Component, _extends({}, jsxAttributes, {
      clientId: clientId,
      blockName: blockName,
      attributeName: attributeName,
      tagName: jsxTagName,
      attributes: attributes
    }, attributeValue !== undefined && {
      value: attributeValue
    }, setAttributes !== null && {
      attributeName: attributeName,
      setAttributes: setAttributes,
      onInput: function onInput(value) {
        if ((context === null || context === void 0 ? void 0 : context.context) === "save") {
          return;
        }
        setAttributes(_defineProperty({}, attributeName, value), persist);
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
    if (typeof jsxComponent === "function") {
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

export { camelize, classNames, convertStyleStringToObject, delimiterize, evaluateConditionalString, getBlockContext, getGlobalContext, isArray, isEmptyObject, isExternalUrl, isFragmentUrl, isObject, normalizeComponentList, renderJsxArray, replaceTokens, styles, throttle, useBlockIndex, useClickOutside, useInnerBlocks };
