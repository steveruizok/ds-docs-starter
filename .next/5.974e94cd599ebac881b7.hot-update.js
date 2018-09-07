webpackHotUpdate(5,{

/***/ "./components/Sidebar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rebass__ = __webpack_require__("./node_modules/rebass/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rebass__);
var _jsxFileName = "/Users/stephenruiz/GitHub/ds-docs-starter/components/Sidebar.js";



var Sidebar = function Sidebar() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rebass__["Container"], {
    css: {
      height: "100%"
    },
    mt: "44px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListSection, {
    title: "Introduction",
    links: [{
      href: "usage",
      title: "Usage"
    }, {
      href: "updating",
      title: "Updating"
    }, {
      href: "changelog",
      title: "Changelog"
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListHeading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Foundations"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListSection, {
    title: "Brand",
    links: [{
      href: "priciples",
      title: "Principles"
    }, {
      href: "voice",
      title: "Voice"
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListSection, {
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
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListSection, {
    title: "Layout",
    links: [{
      href: "grid",
      title: "Spacing"
    }, {
      href: "grid",
      title: "Responsive"
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListHeading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "Components"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListSection, {
    title: "Buttons",
    links: [{
      href: "button",
      title: "Button"
    }, {
      href: "link",
      title: "Link"
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
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
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListSection, {
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
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Sidebar);

var ListHeading = function ListHeading(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rebass__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rebass__["Heading"], {
    fontSize: 3,
    color: "#333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, props.children));
};

var SidebarLink = function SidebarLink(_ref) {
  var href = _ref.href,
      children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    style: {
      padding: "0",
      margin: "12px 0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rebass__["Link"], {
    href: href,
    color: "black",
    mr: 16,
    css: {
      textDecoration: "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, children));
};

var ListSection = function ListSection(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    style: {
      margin: "44px 0",
      padding: "0",
      listStyle: "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rebass__["Heading"], {
    fontSize: 2,
    color: "#333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, props.title), props.links.map(function (l) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SidebarLink, {
      href: l.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      }
    }, l.title);
  }));
};

/***/ })

})
//# sourceMappingURL=5.974e94cd599ebac881b7.hot-update.js.map