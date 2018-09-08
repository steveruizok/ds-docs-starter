module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rebass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rebass__);



var Sidebar = function Sidebar() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rebass__["Container"], {
    css: {
      height: "100%"
    },
    mt: "44px"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListSection, {
    title: "Introduction",
    links: [{
      href: "",
      title: "About"
    }, {
      href: "usage",
      title: "Usage"
    }, {
      href: "updating",
      title: "Updating"
    }, {
      href: "changelog",
      title: "Changelog"
    }]
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListSection, {
    title: "Brand",
    links: [{
      href: "principles",
      title: "Principles"
    }, {
      href: "voice",
      title: "Voice"
    }]
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListHeading, null, "Foundations"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListSection, {
    title: "Style",
    links: [{
      href: "colours",
      title: "Colours"
    }, {
      href: "typography",
      title: "Typography"
    }, {
      href: "photography",
      title: "Photography"
    }, {
      href: "icons",
      title: "Icons"
    }, {
      href: "logos",
      title: "Logos"
    }]
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListSection, {
    title: "Layout",
    links: [{
      href: "spacing",
      title: "Spacing"
    }, {
      href: "responsive",
      title: "Responsive"
    }]
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListHeading, null, "Components"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListSection, {
    title: "Buttons",
    links: [{
      href: "button",
      title: "Button"
    }, {
      href: "link",
      title: "Link"
    }]
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListSection, {
    title: "Cards",
    links: [{
      href: "card",
      title: "Card"
    }, {
      href: "list",
      title: "Featured"
    }, {
      href: "wodge",
      title: "Wodge"
    }, {
      href: "list",
      title: "List"
    }]
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListSection, {
    title: "Forms",
    links: [{
      href: "textarea",
      title: "Text Area"
    }, {
      href: "textinput",
      title: "Text input"
    }, {
      href: "select",
      title: "Select"
    }, {
      href: "radiobutton",
      title: "Radio button"
    }, {
      href: "checkbox",
      title: "Checkboxes"
    }, {
      href: "rangeinput",
      title: "Range input"
    }]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Sidebar);

var ListHeading = function ListHeading(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rebass__["Divider"], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rebass__["Heading"], {
    fontSize: 3,
    color: "#333"
  }, props.children));
};

var SidebarLink = function SidebarLink(_ref) {
  var href = _ref.href,
      children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    style: {
      padding: "0",
      margin: "12px 0"
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rebass__["Link"], {
    href: "/".concat(href),
    color: "black",
    mr: 16,
    css: {
      textDecoration: "none"
    }
  }, children));
};

var ListSection = function ListSection(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    style: {
      margin: "44px 0",
      padding: "0",
      listStyle: "none"
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rebass__["Heading"], {
    fontSize: 2,
    color: "#333"
  }, props.title), props.links.map(function (l, index) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SidebarLink, {
      key: "SidebarLink_" + index,
      href: l.href
    }, l.title);
  }));
};

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Document; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_document__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Sidebar__ = __webpack_require__(3);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var _Document =
/*#__PURE__*/
function (_Document2) {
  _inherits(_Document, _Document2);

  function _Document() {
    _classCallCheck(this, _Document);

    return _possibleConstructorReturn(this, (_Document.__proto__ || Object.getPrototypeOf(_Document)).apply(this, arguments));
  }

  _createClass(_Document, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          styleTags = _props.styleTags,
          title = _props.title;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("html", {
        lang: "en"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Head"], null, styleTags), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("body", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Main"], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["NextScript"], null)));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;
      var sheet = new __WEBPACK_IMPORTED_MODULE_3_styled_components__["ServerStyleSheet"]();
      var page = renderPage(function (App) {
        return function (props) {
          return sheet.collectStyles(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(App, props));
        };
      });
      var styleTags = sheet.getStyleElement();
      return _objectSpread({}, page, {
        styleTags: styleTags
      });
    }
  }]);

  return _Document;
}(__WEBPACK_IMPORTED_MODULE_1_next_document___default.a);



/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })
/******/ ]);