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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("@mdx-js/tag");

/***/ }),

/***/ 3:
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

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(4);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    Layout: __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
    layoutProps: props,
    components: components
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components
  }, "Logos"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components
  }, "..."));
});

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "rebass"
var external__rebass_ = __webpack_require__(1);
var external__rebass__default = /*#__PURE__*/__webpack_require__.n(external__rebass_);

// EXTERNAL MODULE: ./components/Sidebar.js
var Sidebar = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Navbar.js



var Navbar_NavLink = function NavLink(_ref) {
  var href = _ref.href,
      children = _ref.children;
  return external__react__default.a.createElement(external__rebass_["Link"], {
    href: href,
    color: "white",
    mr: 16
  }, children);
};

var Navbar_Navbar = function Navbar() {
  return external__react__default.a.createElement(external__rebass_["Flex"], {
    px: 16,
    py: 32,
    bg: "#333",
    justifyContent: "space-between"
  }, external__react__default.a.createElement(external__rebass_["Box"], {
    color: "#fff"
  }, "Version 0.1"), external__react__default.a.createElement(external__rebass_["Box"], null, external__react__default.a.createElement(Navbar_NavLink, {
    href: "#"
  }, "Github")));
};

/* harmony default export */ var components_Navbar = (Navbar_Navbar);
// CONCATENATED MODULE: ./components/Layout.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





/* harmony default export */ var Layout = __webpack_exports__["a"] = (function (props) {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(components_Navbar, null), external__react__default.a.createElement(external__rebass_["Flex"], {
    flexDirection: ["row", "row-reverse"],
    flexWrap: "wrap"
  }, external__react__default.a.createElement(external__rebass_["Container"], _extends({
    px: 32,
    pb: 64,
    width: [1, 1, 3 / 4]
  }, props)), external__react__default.a.createElement(external__rebass_["Box"], {
    width: [1, 1, 1 / 4]
  }, external__react__default.a.createElement(Sidebar["a" /* default */], null))));
});

/***/ })

/******/ });