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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar */ "./src/components/SearchBar.js");
/* harmony import */ var _SearchResultList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchResultList */ "./src/components/SearchResultList.js");
/* harmony import */ var _hooks_useStickToTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useStickToTop */ "./src/components/hooks/useStickToTop.js");
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

  var searchBarContainer = (0,_hooks_useStickToTop__WEBPACK_IMPORTED_MODULE_3__.default)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.HashRouter, {
    hashType: "noslash"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
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
/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useDebounce */ "./src/components/hooks/useDebounce.js");
/* harmony import */ var _hooks_useKeyPress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useKeyPress */ "./src/components/hooks/useKeyPress.js");
/* harmony import */ var _SearchBarList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchBarList */ "./src/components/SearchBarList.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var SearchBar = function SearchBar(_ref) {
  var _ref$word = _ref.word,
      word = _ref$word === void 0 ? "" : _ref$word,
      history = _ref.history,
      setSearchResult = _ref.setSearchResult;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(word),
      _useState4 = _slicedToArray(_useState3, 2),
      inputValue = _useState4[0],
      setInputValue = _useState4[1];

  var debouncedInputValue = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_2__.default)(inputValue, 300);

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      list = _useState6[0],
      setList = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      focus = _useState8[0],
      setFocus = _useState8[1];

  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var enterKey = (0,_hooks_useKeyPress__WEBPACK_IMPORTED_MODULE_3__.default)('Enter');
  var escKey = (0,_hooks_useKeyPress__WEBPACK_IMPORTED_MODULE_3__.default)('Escape');
  var downKey = (0,_hooks_useKeyPress__WEBPACK_IMPORTED_MODULE_3__.default)('ArrowDown');
  var anyKey = (0,_hooks_useKeyPress__WEBPACK_IMPORTED_MODULE_3__.default)(function (_ref2) {
    var ctrlKey = _ref2.ctrlKey,
        altKey = _ref2.altKey,
        key = _ref2.key;
    return !ctrlKey && !altKey && key.match(/^[a-z]$/);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchDefinition(debouncedInputValue);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!focus || !enterKey || list.length === 0) {
      return;
    }

    var candidate = list[0].toLowerCase(); //complete the input from first list item

    if (candidate.includes(inputValue.toLowerCase()) || inputValue.toLowerCase().includes(candidate)) {
      selectCandidate(list[0]);
    }
  }, [enterKey]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!focus || !downKey || list.length === 0) {
      return;
    }

    setInputValue(list[0]);
  }, [downKey]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!focus || !escKey) {
      return;
    }

    setInputValue("");
  }, [escKey]); //regain focus if anykey is pressed

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (focus || !anyKey) {
      return;
    }

    inputRef.current.focus();
    setInputValue(anyKey);
  }, [anyKey]); //update candidate list

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    debouncedInputValue.length > 0 ? (0,_fetchJSON_js__WEBPACK_IMPORTED_MODULE_1__.default)({
      value: debouncedInputValue
    }).then(setList) : setList([]);
  }, [debouncedInputValue]);
  var fetchDefinition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (word) {
    if (word.length == 0) {
      return;
    }

    var pathname = "/" + word;

    if (history.location.pathname !== pathname) {
      history.push({
        pathname: pathname
      });
      return;
    }

    inputRef.current.blur();
    setLoading(true);
    (0,_fetchJSON_js__WEBPACK_IMPORTED_MODULE_1__.default)({
      value: word,
      action: "define"
    }).then(function (d) {
      setSearchResult(d);
      setLoading(false);
    });
  }, []);
  var selectCandidate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
    setInputValue(value);
    fetchDefinition(value);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    ref: inputRef,
    type: "text",
    placeholder: "Search",
    value: inputValue,
    onChange: function onChange(e) {
      return setInputValue(e.target.value);
    },
    onFocus: function onFocus() {
      return setFocus(true);
    },
    onBlur: function onBlur() {
      return setFocus(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SearchBarList__WEBPACK_IMPORTED_MODULE_4__.default, {
    hidden: !focus,
    items: list,
    onSelect: selectCandidate
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
  var hidden = _ref.hidden,
      items = _ref.items,
      onSelect = _ref.onSelect;
  var parseListItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      onMouseDown: function onMouseDown(e) {
        return e.preventDefault();
      },
      onClick: function onClick() {
        return onSelect(item);
      },
      key: key
    }, item);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    hidden: hidden
  }, items.map(parseListItem));
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
  var parseItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (item, key) {
    var name = item.name,
        definition = item.definition;

    if (name === "WordNet") {
      var word = definition.slice(0, definition.indexOf("\n"));
      definition = definition.replace(/[\n\s]+/g, " ") //remove \n and \s
      .replace(/\b(\d+:)/g, "<br><b>$1</b>") //insert \n at start of every numbered definition
      .replace(/\(p\)\}/g, "}") //remove unknown (p) tag 
      .replace(/\{([^}]+)\}/g, "<a href='#$1'>$1</a>") //insert redirect hash link
      .replace(/\[(syn|ant):/g, "<br>[$1:") //new line at the start of hash links
      .replace(new RegExp("\n".concat(word), "g"), "<br><br>" + word);
    }

    if (name === "English for Learners") {
      definition = definition.replace(/bword:\/\//g, "#");
    }

    if (name === "Thesaurus English") {
      definition = definition.replace(/\n/g, "<br>");
    }

    return definition && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card",
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
      className: "card-title"
    }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: definition
      }
    }));
  }, []);
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
  remote = "https://nextdawn.one:3333/json/dict?";
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

/***/ "./src/components/hooks/useDebounce.js":
/*!*********************************************!*\
  !*** ./src/components/hooks/useDebounce.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useDebounce; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useDebounce(value, delay) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      debouncedValue = _useState2[0],
      setDebouncedValue = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay);
    return function () {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

/***/ }),

/***/ "./src/components/hooks/useKeyPress.js":
/*!*********************************************!*\
  !*** ./src/components/hooks/useKeyPress.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useKeyPress; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useKeyPress(targetKey) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      keyPressed = _useState2[0],
      setKeyPressed = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var tester = function tester(e) {
      if (typeof targetKey === "function") {
        return targetKey(e);
      } else {
        return e.key === targetKey;
      }
    };

    var downHandler = function downHandler(e) {
      tester(e) && setKeyPressed(e.key);
    };

    var upHandler = function upHandler(e) {
      tester(e) && setKeyPressed(null);
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler); // Remove event listeners on cleanup

    return function () {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);
  return keyPressed;
}

/***/ }),

/***/ "./src/components/hooks/useStickToTop.js":
/*!***********************************************!*\
  !*** ./src/components/hooks/useStickToTop.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
 //this toggle fixed class on a useRef object

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var toggler = function toggler(e) {
      var _ref$current$getBound = ref.current.getBoundingClientRect(),
          height = _ref$current$getBound.height,
          top = _ref$current$getBound.top;

      var isOutOfView = top <= 0 && scrollY >= height;
      ref.current.className = "search".concat(isOutOfView ? " fixed" : "");
    };

    addEventListener("scroll", toggler);
    return function () {
      removeEventListener("scroll", toggler);
    };
  }, []);
  return ref;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmUvLi9zcmMvY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vb25lLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzIiwid2VicGFjazovL29uZS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhckxpc3QuanMiLCJ3ZWJwYWNrOi8vb25lLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0TGlzdC5qcyIsIndlYnBhY2s6Ly9vbmUvLi9zcmMvY29tcG9uZW50cy9mZXRjaEpTT04uanMiLCJ3ZWJwYWNrOi8vb25lLy4vc3JjL2NvbXBvbmVudHMvaG9va3MvdXNlRGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vb25lLy4vc3JjL2NvbXBvbmVudHMvaG9va3MvdXNlS2V5UHJlc3MuanMiLCJ3ZWJwYWNrOi8vb25lLy4vc3JjL2NvbXBvbmVudHMvaG9va3MvdXNlU3RpY2tUb1RvcC5qcyIsIndlYnBhY2s6Ly9vbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29uZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL29uZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29uZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29uZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vbmUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIkFwcCIsInVzZVN0YXRlIiwic2VhcmNoUmVzdWx0Iiwic2V0U2VhcmNoUmVzdWx0Iiwic2VhcmNoQmFyQ29udGFpbmVyIiwidXNlU3RpY2tUb1RvcCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJzY3JvbGxUbyIsInNjcm9sbFgiLCJTZWFyY2hCYXJSb3V0ZSIsIm1hdGNoIiwicGFyYW1zIiwid29yZCIsImhpc3RvcnkiLCJTZWFyY2hCYXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiZGVib3VuY2VkSW5wdXRWYWx1ZSIsInVzZURlYm91bmNlIiwibGlzdCIsInNldExpc3QiLCJmb2N1cyIsInNldEZvY3VzIiwiaW5wdXRSZWYiLCJ1c2VSZWYiLCJlbnRlcktleSIsInVzZUtleVByZXNzIiwiZXNjS2V5IiwiZG93bktleSIsImFueUtleSIsImN0cmxLZXkiLCJhbHRLZXkiLCJrZXkiLCJmZXRjaERlZmluaXRpb24iLCJsZW5ndGgiLCJjYW5kaWRhdGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2VsZWN0Q2FuZGlkYXRlIiwiY3VycmVudCIsImZldGNoSlNPTiIsInZhbHVlIiwidGhlbiIsInVzZUNhbGxiYWNrIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInB1c2giLCJibHVyIiwiYWN0aW9uIiwiZCIsImUiLCJ0YXJnZXQiLCJTZWFyY2hCYXJMaXN0IiwiaGlkZGVuIiwiaXRlbXMiLCJvblNlbGVjdCIsInBhcnNlTGlzdEl0ZW0iLCJpdGVtIiwicHJldmVudERlZmF1bHQiLCJtYXAiLCJTZWFyY2hSZXN1bHRMaXN0IiwicGFyc2VJdGVtIiwibmFtZSIsImRlZmluaXRpb24iLCJzbGljZSIsImluZGV4T2YiLCJyZXBsYWNlIiwiUmVnRXhwIiwiX19odG1sIiwiZmlsdGVyIiwiYWN0aW9ucyIsInF1ZXJ5IiwiZGVmaW5lIiwic2V0dGluZ3MiLCJsYXN0RmV0Y2hQZXJBY3Rpb24iLCJPYmplY3QiLCJhc3NpZ24iLCJyZW1vdGUiLCJ0ZXN0IiwiZG9jdW1lbnQiLCJVUkwiLCJxdWVyeU9iaiIsInEiLCJlbmNvZGVVUklDb21wb25lbnQiLCJhIiwicXVlcnlTdHJpbmciLCJlbnRyaWVzIiwiZW50cnkiLCJqb2luIiwiUHJvbWlzZSIsInJlcyIsInJlaiIsImZldGNoIiwianNvbiIsImVycm9yIiwiZGVsYXkiLCJkZWJvdW5jZWRWYWx1ZSIsInNldERlYm91bmNlZFZhbHVlIiwiaGFuZGxlciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJ0YXJnZXRLZXkiLCJrZXlQcmVzc2VkIiwic2V0S2V5UHJlc3NlZCIsInRlc3RlciIsImRvd25IYW5kbGVyIiwidXBIYW5kbGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWYiLCJ0b2dnbGVyIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwidG9wIiwiaXNPdXRPZlZpZXciLCJzY3JvbGxZIiwiY2xhc3NOYW1lIiwiUmVhY3RET00iLCJxdWVyeVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBLGtCQUN1QkMsK0NBQVEsQ0FBQyxFQUFELENBRC9CO0FBQUE7QUFBQSxNQUNUQyxZQURTO0FBQUEsTUFDSUMsZUFESjs7QUFFaEIsTUFBTUMsa0JBQWtCLEdBQUdDLDZEQUFhLEVBQXhDO0FBRUFDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0QsR0FGUSxFQUVQLEVBRk8sQ0FBVDtBQUlBRixrREFBUyxDQUFDLFlBQU07QUFDZDtBQUNBRyxZQUFRLENBQUNDLE9BQUQsRUFBUyxDQUFULENBQVI7QUFDRCxHQUhRLEVBR04sQ0FBQ1IsWUFBRCxDQUhNLENBQVQ7O0FBTUEsV0FBU1MsY0FBVCxPQUE0RDtBQUFBLHFDQUFuQ0MsS0FBbUMs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Q0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsOEJBQThCLHdDQUF3QztXQUN0RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdCQUFnQixxQkFBcUI7V0FDckM7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDLG1IQUFtSCxnREFBZ0QsRUFBRTtXQUNySztXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBLGNBQWMsMEJBQTBCLEVBQUU7V0FDMUMsY0FBYyxlQUFlO1dBQzdCLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCw2Q0FBNkMsd0RBQXdELEU7Ozs7O1dDQXJHO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQSw2Q0FBNkMsdUNBQXVDOztXQUVwRjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSw0Rzs7Ozs7VUNoREE7VUFDQTtVQUNBO1VBQ0Esb0ZBQW9GLDhDQUE4QyxFQUFFO1VBQ3BJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7SGFzaFJvdXRlciwgUm91dGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vU2VhcmNoQmFyJ1xuaW1wb3J0IFNlYXJjaFJlc3VsdExpc3QgZnJvbSAnLi9TZWFyY2hSZXN1bHRMaXN0J1xuaW1wb3J0IHVzZVN0aWNrVG9Ub3AgZnJvbSAnLi9ob29rcy91c2VTdGlja1RvVG9wJ1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hSZXN1bHQsc2V0U2VhcmNoUmVzdWx0XSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBzZWFyY2hCYXJDb250YWluZXIgPSB1c2VTdGlja1RvVG9wKClcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJBcHAgbW91bnRlZC5cIilcbiAgfSxbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vc2Nyb2xsIHRvIHRvcCB3aGVuIHJlc3VsdCBjaGFuZ2VzIFxuICAgIHNjcm9sbFRvKHNjcm9sbFgsMClcbiAgfSwgW3NlYXJjaFJlc3VsdF0pXG5cblxuICBmdW5jdGlvbiBTZWFyY2hCYXJSb3V0ZSh7bWF0Y2g6e3BhcmFtczp7d29yZD1cIlwifX0sIGhpc3Rvcnl9KXtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlYXJjaEJhciBrZXk9e3dvcmR9IHdvcmQ9e3dvcmR9IGhpc3Rvcnk9e2hpc3Rvcnl9IHNldFNlYXJjaFJlc3VsdD17c2V0U2VhcmNoUmVzdWx0fSAvPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoPD5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxoND5EaWN0aW9uYXJpZXM8L2g0PlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIHJlZj17c2VhcmNoQmFyQ29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhclwiPlxuICAgICAgICAgIDxIYXNoUm91dGVyIGhhc2hUeXBlPVwibm9zbGFzaFwiPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9e1tcIi86d29yZFwiLFwiL1wiXX0gcmVuZGVyPXtTZWFyY2hCYXJSb3V0ZX0+PC9Sb3V0ZT5cbiAgICAgICAgICA8L0hhc2hSb3V0ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVzdWx0XCI+XG4gICAgICAgIDxTZWFyY2hSZXN1bHRMaXN0IGl0ZW1zPXtzZWFyY2hSZXN1bHR9Lz5cbiAgICA8L3NlY3Rpb24+XG4gIDwvPilcbn1cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBmZXRjaEpTT04gZnJvbSAnLi9mZXRjaEpTT04uanMnXG5pbXBvcnQgdXNlRGVib3VuY2UgZnJvbSAnLi9ob29rcy91c2VEZWJvdW5jZSdcbmltcG9ydCB1c2VLZXlQcmVzcyBmcm9tICcuL2hvb2tzL3VzZUtleVByZXNzJ1xuaW1wb3J0IFNlYXJjaEJhckxpc3QgZnJvbSAnLi9TZWFyY2hCYXJMaXN0J1xuXG5jb25zdCBTZWFyY2hCYXIgPSAoeyB3b3JkID0gXCJcIiwgaGlzdG9yeSwgc2V0U2VhcmNoUmVzdWx0IH0pID0+IHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKHdvcmQpXG4gIGNvbnN0IGRlYm91bmNlZElucHV0VmFsdWUgPSB1c2VEZWJvdW5jZShpbnB1dFZhbHVlLCAzMDApXG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbZm9jdXMsIHNldEZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpXG4gIGNvbnN0IGVudGVyS2V5ID0gdXNlS2V5UHJlc3MoJ0VudGVyJylcbiAgY29uc3QgZXNjS2V5ID0gdXNlS2V5UHJlc3MoJ0VzY2FwZScpXG4gIGNvbnN0IGRvd25LZXkgPSB1c2VLZXlQcmVzcygnQXJyb3dEb3duJylcbiAgY29uc3QgYW55S2V5ID0gdXNlS2V5UHJlc3MoKHsgY3RybEtleSwgYWx0S2V5LCBrZXkgfSkgPT4ge1xuICAgIHJldHVybiAhY3RybEtleSAmJiAhYWx0S2V5ICYmIGtleS5tYXRjaCgvXlthLXpdJC8pXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaERlZmluaXRpb24oZGVib3VuY2VkSW5wdXRWYWx1ZSlcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWZvY3VzIHx8ICFlbnRlcktleSB8fCBsaXN0Lmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gfVxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGxpc3RbMF0udG9Mb3dlckNhc2UoKVxuICAgIC8vY29tcGxldGUgdGhlIGlucHV0IGZyb20gZmlyc3QgbGlzdCBpdGVtXG4gICAgaWYgKGNhbmRpZGF0ZS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIHx8IGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhjYW5kaWRhdGUpKSB7XG4gICAgICBzZWxlY3RDYW5kaWRhdGUobGlzdFswXSlcbiAgICB9XG4gIH0sIFtlbnRlcktleV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWZvY3VzIHx8ICFkb3duS2V5IHx8IGxpc3QubGVuZ3RoID09PSAwKSB7IHJldHVybiB9XG4gICAgc2V0SW5wdXRWYWx1ZShsaXN0WzBdKVxuICB9LCBbZG93bktleV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWZvY3VzIHx8ICFlc2NLZXkpIHsgcmV0dXJuIH1cbiAgICBzZXRJbnB1dFZhbHVlKFwiXCIpXG4gIH0sIFtlc2NLZXldKVxuICBcbiAgLy9yZWdhaW4gZm9jdXMgaWYgYW55a2V5IGlzIHByZXNzZWRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZm9jdXMgfHwgIWFueUtleSkgeyByZXR1cm4gfVxuICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKVxuICAgIHNldElucHV0VmFsdWUoYW55S2V5KVxuICB9LCBbYW55S2V5XSlcblxuICAvL3VwZGF0ZSBjYW5kaWRhdGUgbGlzdFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRlYm91bmNlZElucHV0VmFsdWUubGVuZ3RoID4gMFxuICAgICAgPyBmZXRjaEpTT04oeyB2YWx1ZTogZGVib3VuY2VkSW5wdXRWYWx1ZSB9KS50aGVuKHNldExpc3QpXG4gICAgICA6IHNldExpc3QoW10pXG4gIH0sIFtkZWJvdW5jZWRJbnB1dFZhbHVlXSlcblxuICBjb25zdCBmZXRjaERlZmluaXRpb24gPSB1c2VDYWxsYmFjaygod29yZCkgPT4ge1xuICAgIGlmICh3b3JkLmxlbmd0aCA9PSAwKSB7IHJldHVybiB9XG4gICAgY29uc3QgcGF0aG5hbWUgPSBcIi9cIiArIHdvcmRcbiAgICBpZiAoaGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIGhpc3RvcnkucHVzaCh7IHBhdGhuYW1lIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaW5wdXRSZWYuY3VycmVudC5ibHVyKClcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgZmV0Y2hKU09OKHsgdmFsdWU6IHdvcmQsIGFjdGlvbjogXCJkZWZpbmVcIiB9KS50aGVuKGQgPT4ge1xuICAgICAgc2V0U2VhcmNoUmVzdWx0KGQpXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHNlbGVjdENhbmRpZGF0ZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xuICAgIHNldElucHV0VmFsdWUodmFsdWUpXG4gICAgZmV0Y2hEZWZpbml0aW9uKHZhbHVlKVxuICB9LCBbXSlcblxuICByZXR1cm4gKDw+XG4gICAgPGlucHV0IHJlZj17aW5wdXRSZWZ9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgIG9uQ2hhbmdlPXtlID0+IHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgb25Gb2N1cz17KCkgPT4gc2V0Rm9jdXModHJ1ZSl9IG9uQmx1cj17KCkgPT4gc2V0Rm9jdXMoZmFsc2UpfSAvPlxuICAgIDxTZWFyY2hCYXJMaXN0IGhpZGRlbj17IWZvY3VzfSBpdGVtcz17bGlzdH0gb25TZWxlY3Q9e3NlbGVjdENhbmRpZGF0ZX0gLz5cbiAgICA8ZGl2IGhpZGRlbj17IWxvYWRpbmd9IGNsYXNzTmFtZT1cInNwaW5uZXJcIj48L2Rpdj5cbiAgPC8+KVxufVxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFNlYXJjaEJhckxpc3QgPSAoe2hpZGRlbixpdGVtcywgb25TZWxlY3R9KSA9PiB7XG4gIGNvbnN0IHBhcnNlTGlzdEl0ZW0gPSB1c2VDYWxsYmFjaygoaXRlbSxrZXkpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIG9uTW91c2VEb3duPXtlID0+IGUucHJldmVudERlZmF1bHQoKX0gb25DbGljaz17KCkgPT4gb25TZWxlY3QoaXRlbSl9XG4gICAgICAga2V5PXtrZXl9PntpdGVtfTwvbGk+XG4gICAgKVxuICB9LFtdKVxuICByZXR1cm4gKFxuICAgIDx1bCBoaWRkZW49e2hpZGRlbn0+XG4gICAgICB7aXRlbXMubWFwKHBhcnNlTGlzdEl0ZW0pfSBcbiAgICA8L3VsPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXJMaXN0XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFNlYXJjaFJlc3VsdExpc3QgPSAoe2l0ZW1zfSkgPT4ge1xuICBjb25zdCBwYXJzZUl0ZW0gPSB1c2VDYWxsYmFjaygoaXRlbSxrZXkpID0+IHtcbiAgICBsZXQge25hbWUsIGRlZmluaXRpb259ID0gaXRlbVxuICAgIGlmIChuYW1lPT09XCJXb3JkTmV0XCIpe1xuICAgICAgY29uc3Qgd29yZCA9IGRlZmluaXRpb24uc2xpY2UoMCxkZWZpbml0aW9uLmluZGV4T2YoXCJcXG5cIikpXG4gICAgICBkZWZpbml0aW9uID0gZGVmaW5pdGlvbi5yZXBsYWNlKC9bXFxuXFxzXSsvZyxcIiBcIikgLy9yZW1vdmUgXFxuIGFuZCBcXHNcbiAgICAgICAgLnJlcGxhY2UoL1xcYihcXGQrOikvZyxcIjxicj48Yj4kMTwvYj5cIikgLy9pbnNlcnQgXFxuIGF0IHN0YXJ0IG9mIGV2ZXJ5IG51bWJlcmVkIGRlZmluaXRpb25cbiAgICAgICAgLnJlcGxhY2UoL1xcKHBcXClcXH0vZyxcIn1cIikgLy9yZW1vdmUgdW5rbm93biAocCkgdGFnIFxuICAgICAgICAucmVwbGFjZSgvXFx7KFtefV0rKVxcfS9nLFwiPGEgaHJlZj0nIyQxJz4kMTwvYT5cIikgLy9pbnNlcnQgcmVkaXJlY3QgaGFzaCBsaW5rXG4gICAgICAgIC5yZXBsYWNlKC9cXFsoc3lufGFudCk6L2csXCI8YnI+WyQxOlwiKSAvL25ldyBsaW5lIGF0IHRoZSBzdGFydCBvZiBoYXNoIGxpbmtzXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoYFxcbiR7d29yZH1gLFwiZ1wiKSxcIjxicj48YnI+XCIrd29yZCkgXG4gICAgfVxuICAgIGlmIChuYW1lPT09XCJFbmdsaXNoIGZvciBMZWFybmVyc1wiKXtcbiAgICAgIGRlZmluaXRpb24gPSBkZWZpbml0aW9uLnJlcGxhY2UoL2J3b3JkOlxcL1xcLy9nLFwiI1wiKVxuICAgIH1cbiAgICBpZiAobmFtZT09PVwiVGhlc2F1cnVzIEVuZ2xpc2hcIil7XG4gICAgICBkZWZpbml0aW9uID0gZGVmaW5pdGlvbi5yZXBsYWNlKC9cXG4vZyxcIjxicj5cIilcbiAgICB9XG4gICAgcmV0dXJuIGRlZmluaXRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIga2V5PXtrZXl9ID5cbiAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e25hbWV9PC9oNj5cbiAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGVmaW5pdGlvbn19PjwvZGl2PlxuICAgIDwvZGl2PlxuICB9LFtdKVxuICByZXR1cm4gKDw+XG4gICAge2l0ZW1zLm1hcChwYXJzZUl0ZW0pLmZpbHRlcihkID0+IGQpfVxuICA8Lz4pXG59XG5leHBvcnQgZGVmYXVsdCBTZWFyY2hSZXN1bHRMaXN0XG4iLCJjb25zdCBhY3Rpb25zID0ge3F1ZXJ5OjIsZGVmaW5lOjEsc2V0dGluZ3M6MH1cbmNvbnN0IGxhc3RGZXRjaFBlckFjdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sYWN0aW9ucylcblxubGV0IHJlbW90ZVxuaWYgKC9eaHR0cHM/OlxcL1xcL2xvY2FsaG9zdC8udGVzdChkb2N1bWVudC5VUkwpKXtcbiAgcmVtb3RlID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9qc29uL2RpY3Q/YFxufSBlbHNlIHtcbiAgcmVtb3RlID0gYGh0dHBzOi8vbmV4dGRhd24ub25lOjMzMzMvanNvbi9kaWN0P2Bcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHt2YWx1ZSxhY3Rpb249XCJxdWVyeVwifSkge1xuXG4gIGNvbnN0IHF1ZXJ5T2JqID0ge1xuICAgIHE6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSksXG4gICAgYTogYWN0aW9uc1thY3Rpb25dLFxuICB9XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmVudHJpZXMocXVlcnlPYmopLm1hcChlbnRyeSA9PiBlbnRyeS5qb2luKFwiPVwiKSkuam9pbihcIiZcIikgXG4gIGxhc3RGZXRjaFBlckFjdGlvblthY3Rpb25dID0gcXVlcnlTdHJpbmdcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGZldGNoKHJlbW90ZSArIHF1ZXJ5U3RyaW5nKVxuICAgICAgLnRoZW4oZCA9PiBkLmpzb24oKSlcbiAgICAgIC50aGVuKGQgPT4ge1xuICAgICAgICBpZiAoZC5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5U3RyaW5nLGQpXG4gICAgICAgICAgZCA9IFtdXG4gICAgICAgIH1cbiAgICAgICAgLy9vbmx5IHByb2Nlc3MgdGhlIGxhc3Rlc3QgcmVxdWVzdFxuICAgICAgICBpZiAocXVlcnlTdHJpbmc9PT1sYXN0RmV0Y2hQZXJBY3Rpb25bYWN0aW9uXSl7XG4gICAgICAgICAgcmVzKGQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH0pXG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VEZWJvdW5jZSh2YWx1ZSwgZGVsYXkpIHtcclxuICBjb25zdCBbZGVib3VuY2VkVmFsdWUsIHNldERlYm91bmNlZFZhbHVlXSA9IHVzZVN0YXRlKHZhbHVlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXREZWJvdW5jZWRWYWx1ZSh2YWx1ZSlcclxuICAgIH0sIGRlbGF5KVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZXIpXHJcbiAgICB9XHJcbiAgfSwgW3ZhbHVlLCBkZWxheV0pXHJcblxyXG4gIHJldHVybiBkZWJvdW5jZWRWYWx1ZVxyXG59IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlS2V5UHJlc3ModGFyZ2V0S2V5KSB7XHJcbiAgY29uc3QgW2tleVByZXNzZWQsIHNldEtleVByZXNzZWRdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRlc3RlciA9IChlKSA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2YgdGFyZ2V0S2V5ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0S2V5KGUpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGUua2V5ID09PSB0YXJnZXRLZXlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZG93bkhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICB0ZXN0ZXIoZSkgJiYgc2V0S2V5UHJlc3NlZChlLmtleSlcclxuICAgIH1cclxuICAgIGNvbnN0IHVwSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgIHRlc3RlcihlKSAmJiBzZXRLZXlQcmVzc2VkKG51bGwpXHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZG93bkhhbmRsZXIpXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHVwSGFuZGxlcilcclxuICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgb24gY2xlYW51cFxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGRvd25IYW5kbGVyKVxyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHVwSGFuZGxlcilcclxuICAgIH1cclxuICB9LCBbXSlcclxuICByZXR1cm4ga2V5UHJlc3NlZFxyXG59XHJcbiIsIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG4vL3RoaXMgdG9nZ2xlIGZpeGVkIGNsYXNzIG9uIGEgdXNlUmVmIG9iamVjdFxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRvZ2dsZXIgPSBlID0+IHtcclxuICAgICAgY29uc3QgeyBoZWlnaHQsIHRvcCB9ID0gcmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgY29uc3QgaXNPdXRPZlZpZXcgPSB0b3AgPD0gMCAmJiBzY3JvbGxZID49IGhlaWdodFxyXG4gICAgICByZWYuY3VycmVudC5jbGFzc05hbWUgPSBgc2VhcmNoJHtpc091dE9mVmlldyA/IFwiIGZpeGVkXCIgOiBcIlwifWBcclxuICAgIH1cclxuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdG9nZ2xlcilcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIix0b2dnbGVyKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gcmVmXHJcbn0iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJ1xuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykpO1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gZnVuY3Rpb24ocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeShmdW5jdGlvbihrZXkpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKTsgfSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHRyZXN1bHQgPSBmbigpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSBmdW5jdGlvbihjaHVua0lkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDA7IH07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gZnVuY3Rpb24ocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpIHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rb25lXCJdID0gc2VsZltcIndlYnBhY2tDaHVua29uZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==