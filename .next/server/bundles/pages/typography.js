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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
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

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "@mdx-js/tag"
var tag_ = __webpack_require__(2);
var tag__default = /*#__PURE__*/__webpack_require__.n(tag_);

// EXTERNAL MODULE: ./components/Layout.js + 2 modules
var Layout = __webpack_require__(3);

// EXTERNAL MODULE: external "rebass"
var external__rebass_ = __webpack_require__(1);
var external__rebass__default = /*#__PURE__*/__webpack_require__.n(external__rebass_);

// CONCATENATED MODULE: ./components/CodeBlock.js



var CodeBlock_CodeBlock = function CodeBlock(props) {
  return external__react__default.a.createElement(external__rebass_["Container"], {
    mb: "48px"
  }, external__react__default.a.createElement(external__rebass_["Code"], {
    p: "16px",
    bg: "#ececef"
  }, props.children));
};

/* harmony default export */ var components_CodeBlock = (CodeBlock_CodeBlock);
// CONCATENATED MODULE: ./pages/typography.md
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }






/* harmony default export */ var typography = __webpack_exports__["default"] = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return external__react__default.a.createElement(tag_["MDXTag"], {
    name: "wrapper",
    Layout: Layout["a" /* default */],
    layoutProps: props,
    components: components
  }, external__react__default.a.createElement(tag_["MDXTag"], {
    name: "h1",
    components: components
  }, "Typography"), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "hr",
    components: components
  }), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "h3",
    components: components
  }, "h1"), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "p",
    components: components
  }, external__react__default.a.createElement("h1", null, "Dear Mr. President.")), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "pre",
    components: components
  }, external__react__default.a.createElement(tag_["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-jsx"
    }
  }, "<h1>Hello world</h1>\n")), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "hr",
    components: components
  }), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "h3",
    components: components
  }, "h2"), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "p",
    components: components
  }, external__react__default.a.createElement("h2", null, "First, I would like to introduce myself.")), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "pre",
    components: components
  }, external__react__default.a.createElement(tag_["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-jsx"
    }
  }, "<h2>Hello world</h2>\n")), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "hr",
    components: components
  }), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "h3",
    components: components
  }, "h3"), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "p",
    components: components
  }, external__react__default.a.createElement("h3", null, "I am Elvis Presley and admire you and have great respect for your office.")), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "pre",
    components: components
  }, external__react__default.a.createElement(tag_["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-jsx"
    }
  }, "<h3>Hello world</h3>\n")), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "hr",
    components: components
  }), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "h3",
    components: components
  }, "h4"), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "p",
    components: components
  }, external__react__default.a.createElement("h4", null, "I talked to Vice President Agnew in Palm Springs three weeks ago and expressed my concern for our country.")), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "pre",
    components: components
  }, external__react__default.a.createElement(tag_["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-jsx"
    }
  }, "<h4>Hello world</h4>\n")), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "hr",
    components: components
  }), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "h3",
    components: components
  }, "h5"), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "h2",
    components: components
  }, external__react__default.a.createElement("h5", null, "The drug culture, the hippie elements, the SDS, Black Panthers, etc. do not consider me as their enemy or as they call it the establishment.")), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "pre",
    components: components
  }, external__react__default.a.createElement(tag_["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-jsx"
    }
  }, "<h5>Hello world</h5>\n")), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "h3",
    components: components
  }, "h6"), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "p",
    components: components
  }, external__react__default.a.createElement("h6", null, "I call it America and I love it. Sir, I can and will be of any service that I can to help the country out.")), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "pre",
    components: components
  }, external__react__default.a.createElement(tag_["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-jsx"
    }
  }, "<h6>Hello world</h6>\n")), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "hr",
    components: components
  }), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "h3",
    components: components
  }, "Lead"), external__react__default.a.createElement(external__rebass_["Lead"], null, "I have no concern or motives other than helping the country out."), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "pre",
    components: components
  }, external__react__default.a.createElement(tag_["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-jsx"
    }
  }, "<Lead>Hello world</Lead>\n")), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "hr",
    components: components
  }), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "h3",
    components: components
  }, "p"), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "p",
    components: components
  }, external__react__default.a.createElement("p", null, "So I wish not to be given a title or an appointed position. I can and will do more good if I were made a Federal Agent at Large and I will help out by doing it my way through my communications with people of all ages. First and foremost, I am an entertainer, but all I need is the Federal credentials.")), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "pre",
    components: components
  }, external__react__default.a.createElement(tag_["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-jsx"
    }
  }, "<p>Hello world</p>\n")), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "hr",
    components: components
  }), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "h3",
    components: components
  }, "a"), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "p",
    components: components
  }, external__react__default.a.createElement("a", {
    href: "#"
  }, "Sir, I am staying at the Washington Hotel, Room 505-506-507.")), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "pre",
    components: components
  }, external__react__default.a.createElement(tag_["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-jsx"
    }
  }, "<a href=\"#\">Hello world</a>\n")), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "hr",
    components: components
  }), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "h3",
    components: components
  }, "blockquote"), external__react__default.a.createElement("blockquote", null, "I am on this plane with Senator George Murphy and we have been discussing the problems that our country is faced with."), external__react__default.a.createElement(tag_["MDXTag"], {
    name: "pre",
    components: components
  }, external__react__default.a.createElement(tag_["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-jsx"
    }
  }, "<blockquote>Hello world</blockquote>\n")));
});

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "rebass"
var external__rebass_ = __webpack_require__(1);
var external__rebass__default = /*#__PURE__*/__webpack_require__.n(external__rebass_);

// CONCATENATED MODULE: ./components/Sidebar.js



var Sidebar_Sidebar = function Sidebar() {
  return external__react__default.a.createElement(external__rebass_["Container"], {
    css: {
      height: "100%"
    },
    mt: "44px"
  }, external__react__default.a.createElement(Sidebar_ListSection, {
    title: "Introduction",
    links: [{
      href: "about",
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
  }), external__react__default.a.createElement(Sidebar_ListHeading, null, "Foundations"), external__react__default.a.createElement(Sidebar_ListSection, {
    title: "Brand",
    links: [{
      href: "priciples",
      title: "Principles"
    }, {
      href: "voice",
      title: "Voice"
    }]
  }), external__react__default.a.createElement(Sidebar_ListSection, {
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
  }), external__react__default.a.createElement(Sidebar_ListSection, {
    title: "Layout",
    links: [{
      href: "grid",
      title: "Spacing"
    }, {
      href: "grid",
      title: "Responsive"
    }]
  }), external__react__default.a.createElement(Sidebar_ListHeading, null, "Components"), external__react__default.a.createElement(Sidebar_ListSection, {
    title: "Buttons",
    links: [{
      href: "button",
      title: "Button"
    }, {
      href: "link",
      title: "Link"
    }]
  }), external__react__default.a.createElement(Sidebar_ListSection, {
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
  }), external__react__default.a.createElement(Sidebar_ListSection, {
    title: "Forms",
    links: [{
      href: "textinput",
      title: "Text input"
    }, {
      href: "select",
      title: "Select"
    }, {
      href: "radiobuttons",
      title: "Radio buttons"
    }, {
      href: "checkboxes",
      title: "Checkboxes"
    }, {
      href: "filterinput",
      title: "Filter input"
    }, {
      href: "rangeinput",
      title: "Range input"
    }]
  }));
};

/* harmony default export */ var components_Sidebar = (Sidebar_Sidebar);

var Sidebar_ListHeading = function ListHeading(props) {
  return external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement(external__rebass_["Divider"], null), external__react__default.a.createElement(external__rebass_["Heading"], {
    fontSize: 3,
    color: "#333"
  }, props.children));
};

var Sidebar_SidebarLink = function SidebarLink(_ref) {
  var href = _ref.href,
      children = _ref.children;
  return external__react__default.a.createElement("li", {
    style: {
      padding: "0",
      margin: "12px 0"
    }
  }, external__react__default.a.createElement(external__rebass_["Link"], {
    href: href,
    color: "black",
    mr: 16,
    css: {
      textDecoration: "none"
    }
  }, children));
};

var Sidebar_ListSection = function ListSection(props) {
  return external__react__default.a.createElement("ul", {
    style: {
      margin: "44px 0",
      padding: "0",
      listStyle: "none"
    }
  }, external__react__default.a.createElement(external__rebass_["Heading"], {
    fontSize: 2,
    color: "#333"
  }, props.title), props.links.map(function (l) {
    return external__react__default.a.createElement(Sidebar_SidebarLink, {
      href: l.href
    }, l.title);
  }));
};
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
  }, external__react__default.a.createElement(external__rebass_["Box"], null, external__react__default.a.createElement(external__rebass_["Box"], {
    bg: "#ccc",
    css: {
      width: "100px",
      height: "24px"
    }
  })), external__react__default.a.createElement(external__rebass_["Box"], null, external__react__default.a.createElement(Navbar_NavLink, {
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
  }, external__react__default.a.createElement(components_Sidebar, null))));
});

/***/ })

/******/ });