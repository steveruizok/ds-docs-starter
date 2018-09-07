webpackHotUpdate(5,{

/***/ "./components/Sidebar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rebass__ = __webpack_require__("./node_modules/rebass/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rebass__);
var _jsxFileName = "/Users/stephenruiz/GitHub/ds-docs-starter/components/Sidebar.js";



var ListHeading = function ListHeading(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rebass__["Heading"], {
    fontSize: 3,
    color: "#333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, props.children);
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
      lineNumber: 11
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
      lineNumber: 12
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
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, props.title), props.links.map(function (l) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SidebarLink, {
      href: l.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, l.title);
  }));
};

var Sidebar = function Sidebar() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rebass__["Container"], {
    css: {
      height: "100%"
    },
    mt: "44px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
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
      lineNumber: 34
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListHeading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "Foundations"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListSection, {
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
      lineNumber: 44
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
      lineNumber: 51
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
      lineNumber: 61
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rebass__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListHeading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
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
      lineNumber: 71
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
      lineNumber: 78
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
      lineNumber: 87
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Sidebar);

/***/ })

})
//# sourceMappingURL=5.8cd74aff6043713cfbab.hot-update.js.map