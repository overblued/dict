/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar */ "./src/components/SearchBar.js");
/* harmony import */ var _SearchResultList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchResultList */ "./src/components/SearchResultList.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      searchResult = _useState2[0],
      setSearchResult = _useState2[1];

  var searchBarContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    //sticky searchbar
    addEventListener("scroll", function (e) {
      var _searchBarContainer$c = searchBarContainer.current.getBoundingClientRect(),
          height = _searchBarContainer$c.height,
          top = _searchBarContainer$c.top;

      var isOutOfView = top <= 0 && scrollY >= height;
      searchBarContainer.current.className = "search".concat(isOutOfView ? " fixed" : "");
    });
    console.log("App mounted.");
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    //scroll to top when result changes 
    scrollTo(scrollX, 0);
  }, [searchResult]);

  function SearchBarRoute(_ref) {
    var _ref$match$params$wor = _ref.match.params.word,
        word = _ref$match$params$wor === void 0 ? "" : _ref$match$params$wor,
        history = _ref.history;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SearchBar__WEBPACK_IMPORTED_MODULE_1__.default, {
      key: word,
      word: word,
      history: history,
      setSearchResult: setSearchResult
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Dictionaries"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    ref: searchBarContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "search-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.HashRouter, {
    hashType: "noslash"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: ["/:word", "/"],
    render: SearchBarRoute
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "result"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SearchResultList__WEBPACK_IMPORTED_MODULE_2__.default, {
    items: searchResult
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/SearchBar.js":
/*!*************************************!*\
  !*** ./src/components/SearchBar.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _fetchJSON_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchJSON.js */ "./src/components/fetchJSON.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/components/utils.js");
/* harmony import */ var _SearchBarList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchBarList */ "./src/components/SearchBarList.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var SearchBar = function SearchBar(_ref) {
  var word = _ref.word,
      history = _ref.history,
      setSearchResult = _ref.setSearchResult;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(word),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      list = _useState6[0],
      setList = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (value.length > 0) {
      fetchDefinition(value);
    }
  }, []);
  var fetchCandidates = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.debounce)(function (value) {
    if (value.length === 0) {
      return;
    }

    (0,_fetchJSON_js__WEBPACK_IMPORTED_MODULE_1__.default)({
      value: value
    }).then(setList);
  }, 200), []);
  var fetchDefinition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.debounce)(function (value) {
    var pathname = "/" + value;

    if (history.location.pathname !== pathname) {
      history.push({
        pathname: pathname
      });
      return;
    }

    setLoading(true);
    setValue(value);
    setList([]);
    (0,_fetchJSON_js__WEBPACK_IMPORTED_MODULE_1__.default)({
      value: value,
      action: "define"
    }).then(function (d) {
      setSearchResult(d);
      setLoading(false);
    });
  }, 100), []); // end of Hooks

  var handleOnChange = function handleOnChange(_ref2) {
    var value = _ref2.target.value;
    setValue(value);
    fetchCandidates(value);

    if (value.length === 0) {
      setList([]);
    }
  };

  var handleOnKeyDown = function handleOnKeyDown(_ref3) {
    var key = _ref3.key;

    if (key !== "Enter") {
      return;
    }

    key = value;

    if (list[0]) {
      key = list[0];
    } else {
      //cancel previous debounced request
      fetchCandidates("");
    }

    fetchDefinition(key);
  };

  var handleOnFocus = function handleOnFocus() {
    if (value.length > 0 && list.length === 0) {
      fetchCandidates(value);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    placeholder: "Search",
    value: value,
    onKeyDown: handleOnKeyDown,
    onChange: handleOnChange,
    onFocus: handleOnFocus,
    onBlur: function onBlur() {
      return setList([]);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SearchBarList__WEBPACK_IMPORTED_MODULE_3__.default, {
    items: list,
    onSelect: fetchDefinition
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    hidden: !loading,
    className: "spinner"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./src/components/SearchBarList.js":
/*!*****************************************!*\
  !*** ./src/components/SearchBarList.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var SearchBarList = function SearchBarList(_ref) {
  var items = _ref.items,
      onSelect = _ref.onSelect;

  var parseListItem = function parseListItem(item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      onMouseDown: function onMouseDown(e) {
        return e.preventDefault();
      },
      onClick: function onClick() {
        return onSelect(item);
      },
      key: key
    }, item);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, items.map(parseListItem));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBarList);

/***/ }),

/***/ "./src/components/SearchResultList.js":
/*!********************************************!*\
  !*** ./src/components/SearchResultList.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var SearchResultList = function SearchResultList(_ref) {
  var items = _ref.items;

  var parseItem = function parseItem(item, key) {
    if (item.name === "WordNet") {
      var word = item.definition.slice(0, item.definition.indexOf("\n"));
      item.definition = item.definition.replace(/[\n\s]+/g, " ") //remove \n and \s
      .replace(/\b(\d+:)/g, "<br><b>$1</b>") //insert \n at start of every numbered definition
      .replace(/\(p\)\}/g, "}") //remove unknown (p) tag 
      .replace(/\{([^}]+)\}/g, "<a href='#$1'>$1</a>") //insert redirect hash link
      .replace(/\[(syn|ant):/g, "<br>[$1:") //new line at the start of hash links
      .replace(new RegExp("\n".concat(word), "g"), "<br><br>" + word);
    }

    if (item.name === "English for Learners") {
      item.definition = item.definition.replace(/bword:\/\//g, "#");
    }

    if (item.name === "Thesaurus English") {
      item.definition = item.definition.replace(/\n/g, "<br>");
    }

    return item.definition && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card",
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
      className: "card-title"
    }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: item.definition
      }
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, items.map(parseItem).filter(function (d) {
    return d;
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchResultList);

/***/ }),

/***/ "./src/components/fetchJSON.js":
/*!*************************************!*\
  !*** ./src/components/fetchJSON.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
var actions = {
  query: 2,
  define: 1,
  settings: 0
};
var lastFetchPerAction = Object.assign({}, actions);
var remote;

if (/^https?:\/\/localhost/.test(document.URL)) {
  remote = "http://localhost:3333/json/dict?";
} else {
  remote = "http://72.19.12.242:3333/json/dict?";
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref) {
  var value = _ref.value,
      _ref$action = _ref.action,
      action = _ref$action === void 0 ? "query" : _ref$action;
  var queryObj = {
    q: encodeURIComponent(value),
    a: actions[action]
  };
  var queryString = Object.entries(queryObj).map(function (entry) {
    return entry.join("=");
  }).join("&");
  lastFetchPerAction[action] = queryString;
  return new Promise(function (res, rej) {
    fetch(remote + queryString).then(function (d) {
      return d.json();
    }).then(function (d) {
      if (d.error) {
        console.log(queryString, d);
        d = [];
      } //only process the lastest request


      if (queryString === lastFetchPerAction[action]) {
        res(d);
      }
    });
  });
}

/***/ }),

/***/ "./src/components/utils.js":
/*!*********************************!*\
  !*** ./src/components/utils.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": function() { return /* binding */ debounce; },
/* harmony export */   "throttle": function() { return /* binding */ throttle; }
/* harmony export */ });
function debounce(fn) {
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  var tID = 0;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(tID);
    tID = setTimeout(function () {
      return fn.apply(void 0, args);
    }, limit);
  };
}
function throttle(fn) {
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  var tID = -1;
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (tID >= 0) {
      return;
    }

    tID = setTimeout(function () {
      tID = -1;
      fn.apply(void 0, args);
    }, limit);
  };
}
/* harmony default export */ __webpack_exports__["default"] = ({
  debounce: debounce,
  throttle: throttle
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");





react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__.default, null), document.querySelector('main'));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkone"] = self["webpackChunkone"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmUvLi9zcmMvY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vb25lLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzIiwid2VicGFjazovL29uZS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhckxpc3QuanMiLCJ3ZWJwYWNrOi8vb25lLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0TGlzdC5qcyIsIndlYnBhY2s6Ly9vbmUvLi9zcmMvY29tcG9uZW50cy9mZXRjaEpTT04uanMiLCJ3ZWJwYWNrOi8vb25lLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vb25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vbmUvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9vbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vbmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vbmUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb25lL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJBcHAiLCJ1c2VTdGF0ZSIsInNlYXJjaFJlc3VsdCIsInNldFNlYXJjaFJlc3VsdCIsInNlYXJjaEJhckNvbnRhaW5lciIsInVzZVJlZiIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsInRvcCIsImlzT3V0T2ZWaWV3Iiwic2Nyb2xsWSIsImNsYXNzTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJzY3JvbGxUbyIsInNjcm9sbFgiLCJTZWFyY2hCYXJSb3V0ZSIsIm1hdGNoIiwicGFyYW1zIiwid29yZCIsImhpc3RvcnkiLCJTZWFyY2hCYXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInZhbHVlIiwic2V0VmFsdWUiLCJsaXN0Iiwic2V0TGlzdCIsImxlbmd0aCIsImZldGNoRGVmaW5pdGlvbiIsImZldGNoQ2FuZGlkYXRlcyIsInVzZUNhbGxiYWNrIiwiZGVib3VuY2UiLCJmZXRjaEpTT04iLCJ0aGVuIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInB1c2giLCJhY3Rpb24iLCJkIiwiaGFuZGxlT25DaGFuZ2UiLCJ0YXJnZXQiLCJoYW5kbGVPbktleURvd24iLCJrZXkiLCJoYW5kbGVPbkZvY3VzIiwiU2VhcmNoQmFyTGlzdCIsIml0ZW1zIiwib25TZWxlY3QiLCJwYXJzZUxpc3RJdGVtIiwiaXRlbSIsInByZXZlbnREZWZhdWx0IiwibWFwIiwiU2VhcmNoUmVzdWx0TGlzdCIsInBhcnNlSXRlbSIsIm5hbWUiLCJkZWZpbml0aW9uIiwic2xpY2UiLCJpbmRleE9mIiwicmVwbGFjZSIsIlJlZ0V4cCIsIl9faHRtbCIsImZpbHRlciIsImFjdGlvbnMiLCJxdWVyeSIsImRlZmluZSIsInNldHRpbmdzIiwibGFzdEZldGNoUGVyQWN0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwicmVtb3RlIiwidGVzdCIsImRvY3VtZW50IiwiVVJMIiwicXVlcnlPYmoiLCJxIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYSIsInF1ZXJ5U3RyaW5nIiwiZW50cmllcyIsImVudHJ5Iiwiam9pbiIsIlByb21pc2UiLCJyZXMiLCJyZWoiLCJmZXRjaCIsImpzb24iLCJlcnJvciIsImZuIiwibGltaXQiLCJ0SUQiLCJhcmdzIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIs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QStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUEsNkNBQTZDLHVDQUF1Qzs7V0FFcEY7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1VDaERBO1VBQ0E7VUFDQTtVQUNBLG9GQUFvRiw4Q0FBOEMsRUFBRTtVQUNwSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7SGFzaFJvdXRlciwgUm91dGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vU2VhcmNoQmFyJ1xuaW1wb3J0IFNlYXJjaFJlc3VsdExpc3QgZnJvbSAnLi9TZWFyY2hSZXN1bHRMaXN0J1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hSZXN1bHQsc2V0U2VhcmNoUmVzdWx0XSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBzZWFyY2hCYXJDb250YWluZXIgPSB1c2VSZWYobnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vc3RpY2t5IHNlYXJjaGJhclxuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixlID0+IHtcbiAgICAgIGNvbnN0IHtoZWlnaHQsIHRvcH0gPSBzZWFyY2hCYXJDb250YWluZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgY29uc3QgaXNPdXRPZlZpZXcgPSB0b3AgPD0gMCAmJiBzY3JvbGxZID49IGhlaWdodFxuICAgICAgc2VhcmNoQmFyQ29udGFpbmVyLmN1cnJlbnQuY2xhc3NOYW1lID0gYHNlYXJjaCR7aXNPdXRPZlZpZXcgPyBcIiBmaXhlZFwiIDogXCJcIn1gXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhcIkFwcCBtb3VudGVkLlwiKVxuICB9LFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy9zY3JvbGwgdG8gdG9wIHdoZW4gcmVzdWx0IGNoYW5nZXMgXG4gICAgc2Nyb2xsVG8oc2Nyb2xsWCwwKVxuICB9LCBbc2VhcmNoUmVzdWx0XSlcblxuXG4gIGZ1bmN0aW9uIFNlYXJjaEJhclJvdXRlKHttYXRjaDp7cGFyYW1zOnt3b3JkPVwiXCJ9fSwgaGlzdG9yeX0pe1xuICAgIHJldHVybiAoXG4gICAgICA8U2VhcmNoQmFyIGtleT17d29yZH0gd29yZD17d29yZH0gaGlzdG9yeT17aGlzdG9yeX0gc2V0U2VhcmNoUmVzdWx0PXtzZXRTZWFyY2hSZXN1bHR9IC8+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuICg8PlxuICAgIDxzZWN0aW9uPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGg0PkRpY3Rpb25hcmllczwvaDQ+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gcmVmPXtzZWFyY2hCYXJDb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCI+XG4gICAgICAgICAgPEhhc2hSb3V0ZXIgaGFzaFR5cGU9XCJub3NsYXNoXCI+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD17W1wiLzp3b3JkXCIsXCIvXCJdfSByZW5kZXI9e1NlYXJjaEJhclJvdXRlfT48L1JvdXRlPlxuICAgICAgICAgIDwvSGFzaFJvdXRlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZXN1bHRcIj5cbiAgICAgICAgPFNlYXJjaFJlc3VsdExpc3QgaXRlbXM9e3NlYXJjaFJlc3VsdH0vPlxuICAgIDwvc2VjdGlvbj5cbiAgPC8+KVxufVxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXG5pbXBvcnQgZmV0Y2hKU09OIGZyb20gJy4vZmV0Y2hKU09OLmpzJ1xuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSAnLi91dGlscy5qcydcbmltcG9ydCBTZWFyY2hCYXJMaXN0IGZyb20gJy4vU2VhcmNoQmFyTGlzdCdcblxuXG5jb25zdCBTZWFyY2hCYXIgPSAoe3dvcmQsaGlzdG9yeSxzZXRTZWFyY2hSZXN1bHR9KSA9PiB7XG4gIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFt2YWx1ZSxzZXRWYWx1ZV0gPSB1c2VTdGF0ZSh3b3JkKVxuICBjb25zdCBbbGlzdCxzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZhbHVlLmxlbmd0aD4wKXtcbiAgICAgIGZldGNoRGVmaW5pdGlvbih2YWx1ZSlcbiAgICB9XG4gIH0sIFtdKVxuICBjb25zdCBmZXRjaENhbmRpZGF0ZXMgPSB1c2VDYWxsYmFjayhkZWJvdW5jZSgodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUubGVuZ3RoPT09MCl7cmV0dXJufVxuICAgIGZldGNoSlNPTih7dmFsdWV9KS50aGVuKHNldExpc3QpXG4gIH0sMjAwKSxbXSlcblxuICBjb25zdCBmZXRjaERlZmluaXRpb24gPSB1c2VDYWxsYmFjayhkZWJvdW5jZSgodmFsdWUpID0+IHtcbiAgICBjb25zdCBwYXRobmFtZSA9IFwiL1wiICsgdmFsdWVcbiAgICBpZiAoaGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZSAhPT0gcGF0aG5hbWUpe1xuICAgICAgaGlzdG9yeS5wdXNoKHtwYXRobmFtZX0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIHNldFZhbHVlKHZhbHVlKVxuICAgIHNldExpc3QoW10pXG4gICAgZmV0Y2hKU09OKHt2YWx1ZSxhY3Rpb246XCJkZWZpbmVcIn0pLnRoZW4oZCA9PiB7XG4gICAgICBzZXRTZWFyY2hSZXN1bHQoZClcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfSlcbiAgfSwxMDApLFtdKVxuXG4gIC8vIGVuZCBvZiBIb29rc1xuXG4gIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gKHt0YXJnZXQ6e3ZhbHVlfX0pID0+IHtcbiAgICBzZXRWYWx1ZSh2YWx1ZSlcbiAgICBmZXRjaENhbmRpZGF0ZXModmFsdWUpXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCl7IFxuICAgICAgc2V0TGlzdChbXSlcbiAgICB9XG4gIH1cbiAgY29uc3QgaGFuZGxlT25LZXlEb3duID0gKHtrZXl9KSA9PiB7XG4gICAgaWYgKGtleSAhPT0gXCJFbnRlclwiKSB7IHJldHVybiB9XG4gICAga2V5ID0gdmFsdWVcbiAgICBpZiAobGlzdFswXSl7XG4gICAgICBrZXkgPSBsaXN0WzBdXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vY2FuY2VsIHByZXZpb3VzIGRlYm91bmNlZCByZXF1ZXN0XG4gICAgICBmZXRjaENhbmRpZGF0ZXMoXCJcIilcbiAgICB9XG4gICAgZmV0Y2hEZWZpbml0aW9uKGtleSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU9uRm9jdXMgPSAoKSA9PiB7XG4gICAgaWYgKHZhbHVlLmxlbmd0aD4wICYmIGxpc3QubGVuZ3RoPT09MCl7XG4gICAgICBmZXRjaENhbmRpZGF0ZXModmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICg8PlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgdmFsdWU9e3ZhbHVlfVxuICAgICAgb25LZXlEb3duPXtoYW5kbGVPbktleURvd259IG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgIG9uRm9jdXM9e2hhbmRsZU9uRm9jdXN9IG9uQmx1cj17KCkgPT4gc2V0TGlzdChbXSl9Lz5cbiAgICA8U2VhcmNoQmFyTGlzdCBpdGVtcz17bGlzdH0gb25TZWxlY3Q9e2ZldGNoRGVmaW5pdGlvbn0gLz5cbiAgICA8ZGl2IGhpZGRlbj17IWxvYWRpbmd9IGNsYXNzTmFtZT1cInNwaW5uZXJcIj48L2Rpdj4gICAgXG4gIDwvPilcbn1cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBTZWFyY2hCYXJMaXN0ID0gKHtpdGVtcywgb25TZWxlY3R9KSA9PiB7XG4gIGNvbnN0IHBhcnNlTGlzdEl0ZW0gPSAoaXRlbSxrZXkpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIG9uTW91c2VEb3duPXtlID0+IGUucHJldmVudERlZmF1bHQoKX0gb25DbGljaz17KCkgPT4gb25TZWxlY3QoaXRlbSl9XG4gICAgICAga2V5PXtrZXl9PntpdGVtfTwvbGk+XG4gICAgKVxuICB9XG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge2l0ZW1zLm1hcChwYXJzZUxpc3RJdGVtKX0gXG4gICAgPC91bD5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyTGlzdFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBTZWFyY2hSZXN1bHRMaXN0ID0gKHtpdGVtc30pID0+IHtcblxuICBjb25zdCBwYXJzZUl0ZW0gPSAoaXRlbSxrZXkpID0+IHtcbiAgICBpZiAoaXRlbS5uYW1lPT09XCJXb3JkTmV0XCIpe1xuICAgICAgY29uc3Qgd29yZCA9IGl0ZW0uZGVmaW5pdGlvbi5zbGljZSgwLGl0ZW0uZGVmaW5pdGlvbi5pbmRleE9mKFwiXFxuXCIpKVxuICAgICAgaXRlbS5kZWZpbml0aW9uID0gaXRlbS5kZWZpbml0aW9uLnJlcGxhY2UoL1tcXG5cXHNdKy9nLFwiIFwiKSAvL3JlbW92ZSBcXG4gYW5kIFxcc1xuICAgICAgICAucmVwbGFjZSgvXFxiKFxcZCs6KS9nLFwiPGJyPjxiPiQxPC9iPlwiKSAvL2luc2VydCBcXG4gYXQgc3RhcnQgb2YgZXZlcnkgbnVtYmVyZWQgZGVmaW5pdGlvblxuICAgICAgICAucmVwbGFjZSgvXFwocFxcKVxcfS9nLFwifVwiKSAvL3JlbW92ZSB1bmtub3duIChwKSB0YWcgXG4gICAgICAgIC5yZXBsYWNlKC9cXHsoW159XSspXFx9L2csXCI8YSBocmVmPScjJDEnPiQxPC9hPlwiKSAvL2luc2VydCByZWRpcmVjdCBoYXNoIGxpbmtcbiAgICAgICAgLnJlcGxhY2UoL1xcWyhzeW58YW50KTovZyxcIjxicj5bJDE6XCIpIC8vbmV3IGxpbmUgYXQgdGhlIHN0YXJ0IG9mIGhhc2ggbGlua3NcbiAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChgXFxuJHt3b3JkfWAsXCJnXCIpLFwiPGJyPjxicj5cIit3b3JkKSBcbiAgICB9XG4gICAgaWYgKGl0ZW0ubmFtZT09PVwiRW5nbGlzaCBmb3IgTGVhcm5lcnNcIil7XG4gICAgICBpdGVtLmRlZmluaXRpb24gPSBpdGVtLmRlZmluaXRpb24ucmVwbGFjZSgvYndvcmQ6XFwvXFwvL2csXCIjXCIpXG4gICAgfVxuICAgIGlmIChpdGVtLm5hbWU9PT1cIlRoZXNhdXJ1cyBFbmdsaXNoXCIpe1xuICAgICAgaXRlbS5kZWZpbml0aW9uID0gaXRlbS5kZWZpbml0aW9uLnJlcGxhY2UoL1xcbi9nLFwiPGJyPlwiKVxuICAgIH1cbiAgICByZXR1cm4gaXRlbS5kZWZpbml0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17a2V5fSA+XG4gICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntpdGVtLm5hbWV9PC9oNj5cbiAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6aXRlbS5kZWZpbml0aW9ufX0+PC9kaXY+XG4gICAgPC9kaXY+XG4gIH1cbiAgcmV0dXJuICg8PlxuICAgIHtpdGVtcy5tYXAocGFyc2VJdGVtKS5maWx0ZXIoZCA9PiBkKX1cbiAgPC8+KVxufVxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0TGlzdFxuIiwiY29uc3QgYWN0aW9ucyA9IHtxdWVyeToyLGRlZmluZToxLHNldHRpbmdzOjB9XG5jb25zdCBsYXN0RmV0Y2hQZXJBY3Rpb24gPSBPYmplY3QuYXNzaWduKHt9LGFjdGlvbnMpXG5cbmxldCByZW1vdGVcbmlmICgvXmh0dHBzPzpcXC9cXC9sb2NhbGhvc3QvLnRlc3QoZG9jdW1lbnQuVVJMKSl7XG4gIHJlbW90ZSA9IGBodHRwOi8vbG9jYWxob3N0OjMzMzMvanNvbi9kaWN0P2Bcbn0gZWxzZSB7XG4gIHJlbW90ZSA9IGBodHRwOi8vNzIuMTkuMTIuMjQyOjMzMzMvanNvbi9kaWN0P2Bcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHt2YWx1ZSxhY3Rpb249XCJxdWVyeVwifSkge1xuXG4gIGNvbnN0IHF1ZXJ5T2JqID0ge1xuICAgIHE6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSksXG4gICAgYTogYWN0aW9uc1thY3Rpb25dLFxuICB9XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmVudHJpZXMocXVlcnlPYmopLm1hcChlbnRyeSA9PiBlbnRyeS5qb2luKFwiPVwiKSkuam9pbihcIiZcIikgXG4gIGxhc3RGZXRjaFBlckFjdGlvblthY3Rpb25dID0gcXVlcnlTdHJpbmdcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGZldGNoKHJlbW90ZSArIHF1ZXJ5U3RyaW5nKVxuICAgICAgLnRoZW4oZCA9PiBkLmpzb24oKSlcbiAgICAgIC50aGVuKGQgPT4ge1xuICAgICAgICBpZiAoZC5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5U3RyaW5nLGQpXG4gICAgICAgICAgZCA9IFtdXG4gICAgICAgIH1cbiAgICAgICAgLy9vbmx5IHByb2Nlc3MgdGhlIGxhc3Rlc3QgcmVxdWVzdFxuICAgICAgICBpZiAocXVlcnlTdHJpbmc9PT1sYXN0RmV0Y2hQZXJBY3Rpb25bYWN0aW9uXSl7XG4gICAgICAgICAgcmVzKGQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH0pXG59XG4iLCJcbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmbiwgbGltaXQgPSAxMDAwKSB7XG4gIGxldCB0SUQgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBjbGVhclRpbWVvdXQodElEKTtcbiAgICB0SUQgPSBzZXRUaW1lb3V0KCgpID0+IGZuKC4uLmFyZ3MpLCBsaW1pdCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlKGZuLCBsaW1pdCA9IDEwMDApIHtcbiAgbGV0IHRJRCA9IC0xO1xuICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBpZiAodElEID49IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdElEID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0SUQgPSAtMTtcbiAgICAgIGZuKC4uLmFyZ3MpO1xuICAgIH0sIGxpbWl0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7ZGVib3VuY2UsdGhyb3R0bGV9XG4iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJ1xuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykpO1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gZnVuY3Rpb24ocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeShmdW5jdGlvbihrZXkpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKTsgfSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHRyZXN1bHQgPSBmbigpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSBmdW5jdGlvbihjaHVua0lkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDA7IH07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gZnVuY3Rpb24ocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpIHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rb25lXCJdID0gc2VsZltcIndlYnBhY2tDaHVua29uZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==