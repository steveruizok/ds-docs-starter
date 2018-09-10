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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@mdx-js/tag");

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "@mdx-js/tag"
var tag_ = __webpack_require__(2);
var tag__default = /*#__PURE__*/__webpack_require__.n(tag_);

// EXTERNAL MODULE: external "rebass"
var external__rebass_ = __webpack_require__(1);
var external__rebass__default = /*#__PURE__*/__webpack_require__.n(external__rebass_);

// CONCATENATED MODULE: ./components/_defaultTheme.js
// Default Theme
// Hi there,
// If you're looking to make changes to the project's theme,
// edit the Theme.js file - not this one!
// -----------------------
// Typography
var fonts = {
  sans: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif",
  serif: "Garamond, Times New Roman, serif",
  mono: "\"SF Mono\", \"Roboto Mono\", Menlo, monospace"
};
var font = fonts.sans;
var fontFamilies = fonts;
var monospace = fonts.mono;
var fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96];
var weights = [400, 700]; // Colors

var colors = {
  base: "#0077cc",
  blue: "#0077cc",
  blue0: "#e4f1fa",
  blue1: "#c7e1f4",
  blue2: "#a5cfed",
  blue3: "#7dbae5",
  blue4: "#4b9fdb",
  blue5: "#0077cc",
  blue6: "#006bb8",
  blue7: "#005ea1",
  blue8: "#004d84",
  blue9: "#00375e",
  black: "#000",
  cyan: "#00ddcc",
  cyan0: "#edfdfb",
  cyan1: "#c5f7f3",
  cyan2: "#94f1ea",
  cyan3: "#55e8dd",
  cyan4: "#00dbca",
  cyan5: "#00c8b9",
  cyan6: "#00b3a5",
  cyan7: "#009a8e",
  cyan8: "#007a70",
  cyan9: "#004842",
  gray: "#adb4b9",
  gray0: "#f9f9fa",
  gray1: "#eceeef",
  gray2: "#dee1e3",
  gray3: "#cfd3d7",
  gray4: "#bfc5c9",
  gray5: "#adb4b9",
  gray6: "#98a1a8",
  gray7: "#7f8b93",
  gray8: "#606e79",
  gray9: "#374047",
  green: "#11cc00",
  green0: "#e6fae4",
  green1: "#caf4c6",
  green2: "#aaeda4",
  green3: "#84e57b",
  green4: "#54da48",
  green5: "#11cc00",
  green6: "#0fb900",
  green7: "#0ea200",
  green8: "#0b8700",
  green9: "#086100",
  orange: "#ff9900",
  orange0: "#fff9ef",
  orange1: "#ffebcd",
  orange2: "#ffdca6",
  orange3: "#ffca7b",
  orange4: "#ffb647",
  orange5: "#ff9c07",
  orange6: "#e68a00",
  orange7: "#c57600",
  orange8: "#9c5e00",
  orange9: "#5c3700",
  pink: "#cc0077",
  pink0: "#fbeaf4",
  pink1: "#f6d2e7",
  pink2: "#f0b6d8",
  pink3: "#ea94c6",
  pink4: "#e066ad",
  pink5: "#cc0077",
  pink6: "#b9006c",
  pink7: "#a2005f",
  pink8: "#87004e",
  pink9: "#610039",
  red: "#dd0000",
  red0: "#fbeaec",
  red1: "#f6d3d6",
  red2: "#f1b8bc",
  red3: "#ea969d",
  red4: "#e16973",
  red5: "#cc0011",
  red6: "#b9000f",
  red7: "#a2000e",
  red8: "#87000b",
  red9: "#610008",
  violet: "#5500cc",
  violet0: "#f1eafb",
  violet1: "#e1d2f6",
  violet2: "#cfb6f0",
  violet3: "#b895ea",
  violet4: "#9a67e1",
  violet5: "#5500cc",
  violet6: "#4d00b8",
  violet7: "#4300a1",
  violet8: "#370085",
  violet9: "#27005f",
  white: "#fff",
  yellow: "#ffee33",
  yellow0: "#fffbd1",
  yellow1: "#fff159",
  yellow2: "#f4e431",
  yellow3: "#e5d62e",
  yellow4: "#d5c72b",
  yellow5: "#c3b627",
  yellow6: "#aea223",
  yellow7: "#958b1e",
  yellow8: "#766e18",
  yellow9: "#45400e",
  shadow: "rgba(0, 0, 0, 0.16)",
  shadow1: "rgba(0, 0, 0, 0.08)",
  shadow2: "rgba(0, 0, 0, 0.24)"
};
var breakpoints = [32, 48, 64, 80];
var space = [0, 4, 8, 16, 32, 64, 128];
var radius = 4;
var lineHeights = [1.3];
var letterSpacings = [1, 1.2];
var opacity = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0];
var shadows = ["0 5px 10px ".concat(colors.shadow), "0 5px 10px ".concat(colors.shadow1), "0 5px 10px ".concat(colors.shadow2)];
var borders = ["1px solid ".concat(colors.gray)];
var markdownProps = {
  h1: {
    is: "h1",
    mt: 4,
    mb: 3,
    fontSize: [5, 6]
  },
  h2: {
    is: "h2",
    mt: 4,
    mb: 3,
    fontSize: [4, 5]
  },
  h3: {
    is: "h3",
    mt: 4,
    mb: 3,
    fontSize: 3
  },
  h4: {
    is: "h4",
    mt: 4,
    mb: 3,
    fontSize: 2
  },
  h5: {
    is: "h5",
    mt: 4,
    mb: 3,
    fontSize: 1
  },
  h6: {
    is: "h6",
    mt: 4,
    mb: 3,
    fontSize: 0
  },
  p: {
    is: "p",
    lineHeight: 1.625,
    mt: 3,
    mb: 4,
    css: {
      "ul &": {
        marginTop: 0,
        marginBottom: 0
      }
    }
  },
  a: {
    color: "blue"
  },
  img: {},
  blockquote: {
    fontWeight: "bold",
    pl: 3,
    mt: 4,
    mb: 4
  },
  hr: {},
  code: {
    fontSize: "inherit"
  },
  inlineCode: {
    fontSize: "inherit"
  },
  pre: {
    p: 3,
    mt: 4,
    mb: 4,
    bg: "#f6f6f6"
  },
  ul: {
    is: "ul",
    mt: 0,
    mb: 4,
    css: {
      "ul &": {
        marginBottom: 0
      }
    }
  },
  li: {
    is: "li",
    mt: 2,
    mb: 2
  },
  // placeholder until Table is in core
  table: {
    // todo: wrap in overflow container
    is: "table",
    mt: 4,
    mb: 4,
    css: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
      borderColor: "#eee",
      "& th": {
        textAlign: "left",
        verticalAlign: "bottom"
      },
      "& td": {
        verticalAlign: "top"
      },
      "& td, & th": {
        paddingTop: "8px",
        paddingBottom: "8px",
        paddingLeft: "0px",
        paddingRight: "16px",
        borderColor: "inherit",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid"
      }
    }
  }
};
/* harmony default export */ var _defaultTheme = ({
  font: font,
  monospace: monospace,
  fontFamilies: fontFamilies,
  weights: weights,
  fontSizes: fontSizes,
  colors: colors,
  breakpoints: breakpoints,
  space: space,
  radius: radius,
  shadows: shadows,
  borders: borders,
  letterSpacings: letterSpacings,
  lineHeights: lineHeights,
  opacity: opacity
});
// CONCATENATED MODULE: ./components/Theme.js
// Custom Theme
// To make changes to the project's styling, change the values below.
// This file is a rebass theme. For more on rebass theming, check https://rebassjs.org/theming.
// -----------------------
// Typography
var Theme_fonts = {
  sans: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif",
  serif: "Garamond, Times New Roman, serif",
  mono: "\"SF Mono\", \"Roboto Mono\", Menlo, monospace"
};
var Theme_font = Theme_fonts.sans;
var Theme_fontFamilies = Theme_fonts;
var Theme_monospace = Theme_fonts.mono;
var Theme_fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96];
var Theme_weights = [400, 700]; // Colors

var Theme_colors = {
  base: "#0077cc",
  blue: "#0077cc",
  blue0: "#e4f1fa",
  blue1: "#c7e1f4",
  blue2: "#a5cfed",
  blue3: "#7dbae5",
  blue4: "#4b9fdb",
  blue5: "#0077cc",
  blue6: "#006bb8",
  blue7: "#005ea1",
  blue8: "#004d84",
  blue9: "#00375e",
  black: "#000",
  cyan: "#00ddcc",
  cyan0: "#edfdfb",
  cyan1: "#c5f7f3",
  cyan2: "#94f1ea",
  cyan3: "#55e8dd",
  cyan4: "#00dbca",
  cyan5: "#00c8b9",
  cyan6: "#00b3a5",
  cyan7: "#009a8e",
  cyan8: "#007a70",
  cyan9: "#004842",
  gray: "#adb4b9",
  gray0: "#f9f9fa",
  gray1: "#eceeef",
  gray2: "#dee1e3",
  gray3: "#cfd3d7",
  gray4: "#bfc5c9",
  gray5: "#adb4b9",
  gray6: "#98a1a8",
  gray7: "#7f8b93",
  gray8: "#606e79",
  gray9: "#374047",
  green: "#11cc00",
  green0: "#e6fae4",
  green1: "#caf4c6",
  green2: "#aaeda4",
  green3: "#84e57b",
  green4: "#54da48",
  green5: "#11cc00",
  green6: "#0fb900",
  green7: "#0ea200",
  green8: "#0b8700",
  green9: "#086100",
  orange: "#ff9900",
  orange0: "#fff9ef",
  orange1: "#ffebcd",
  orange2: "#ffdca6",
  orange3: "#ffca7b",
  orange4: "#ffb647",
  orange5: "#ff9c07",
  orange6: "#e68a00",
  orange7: "#c57600",
  orange8: "#9c5e00",
  orange9: "#5c3700",
  pink: "#cc0077",
  pink0: "#fbeaf4",
  pink1: "#f6d2e7",
  pink2: "#f0b6d8",
  pink3: "#ea94c6",
  pink4: "#e066ad",
  pink5: "#cc0077",
  pink6: "#b9006c",
  pink7: "#a2005f",
  pink8: "#87004e",
  pink9: "#610039",
  red: "#dd0000",
  red0: "#fbeaec",
  red1: "#f6d3d6",
  red2: "#f1b8bc",
  red3: "#ea969d",
  red4: "#e16973",
  red5: "#cc0011",
  red6: "#b9000f",
  red7: "#a2000e",
  red8: "#87000b",
  red9: "#610008",
  violet: "#5500cc",
  violet0: "#f1eafb",
  violet1: "#e1d2f6",
  violet2: "#cfb6f0",
  violet3: "#b895ea",
  violet4: "#9a67e1",
  violet5: "#5500cc",
  violet6: "#4d00b8",
  violet7: "#4300a1",
  violet8: "#370085",
  violet9: "#27005f",
  white: "#fff",
  yellow: "#ffee33",
  yellow0: "#fffbd1",
  yellow1: "#fff159",
  yellow2: "#f4e431",
  yellow3: "#e5d62e",
  yellow4: "#d5c72b",
  yellow5: "#c3b627",
  yellow6: "#aea223",
  yellow7: "#958b1e",
  yellow8: "#766e18",
  yellow9: "#45400e",
  shadow: "rgba(0, 0, 0, 0.16)",
  shadow1: "rgba(0, 0, 0, 0.08)",
  shadow2: "rgba(0, 0, 0, 0.24)"
};
var Theme_breakpoints = [32, 48, 64, 80];
var Theme_space = [0, 4, 8, 16, 32, 64, 128];
var Theme_radius = 4;
var Theme_lineHeights = [1.3];
var Theme_letterSpacings = [1, 1.2];
var Theme_opacity = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0];
var Theme_shadows = ["0 5px 10px ".concat(Theme_colors.shadow), "0 5px 10px ".concat(Theme_colors.shadow1), "0 5px 10px ".concat(Theme_colors.shadow2)];
var Theme_borders = ["1px solid ".concat(Theme_colors.gray)];
var Theme_markdownProps = {
  h1: {
    is: "h1",
    mt: 4,
    mb: 3,
    fontSize: [5, 6]
  },
  h2: {
    is: "h2",
    mt: 4,
    mb: 3,
    fontSize: [4, 5]
  },
  h3: {
    is: "h3",
    mt: 4,
    mb: 3,
    fontSize: 3
  },
  h4: {
    is: "h4",
    mt: 4,
    mb: 3,
    fontSize: 2
  },
  h5: {
    is: "h5",
    mt: 4,
    mb: 3,
    fontSize: 1
  },
  h6: {
    is: "h6",
    mt: 4,
    mb: 3,
    fontSize: 0
  },
  p: {
    is: "p",
    lineHeight: 1.625,
    mt: 3,
    mb: 4,
    css: {
      "ul &": {
        marginTop: 0,
        marginBottom: 0
      }
    }
  },
  a: {
    color: "blue"
  },
  img: {},
  blockquote: {
    fontWeight: "bold",
    pl: 3,
    mt: 4,
    mb: 4
  },
  hr: {},
  code: {
    fontSize: "inherit"
  },
  inlineCode: {
    fontSize: 1,
    px: 1,
    bg: Theme_colors.gray1
  },
  pre: {
    p: 3,
    mt: 4,
    mb: 4,
    bg: Theme_colors.gray1
  },
  ul: {
    is: "ul",
    mt: 0,
    mb: 4,
    css: {
      "ul &": {
        marginBottom: 0
      }
    }
  },
  li: {
    is: "li",
    mt: 2,
    mb: 2
  },
  // placeholder until Table is in core
  table: {
    // todo: wrap in overflow container
    is: "table",
    mt: 4,
    mb: 4,
    css: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
      borderColor: "#eee",
      "& th": {
        textAlign: "left",
        verticalAlign: "bottom"
      },
      "& td": {
        verticalAlign: "top"
      },
      "& td, & th": {
        paddingTop: "8px",
        paddingBottom: "8px",
        paddingLeft: "0px",
        paddingRight: "16px",
        borderColor: "inherit",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid"
      }
    }
  }
};
/* harmony default export */ var Theme = ({
  font: Theme_font,
  monospace: Theme_monospace,
  fontFamilies: Theme_fontFamilies,
  weights: Theme_weights,
  fontSizes: Theme_fontSizes,
  colors: Theme_colors,
  breakpoints: Theme_breakpoints,
  space: Theme_space,
  radius: Theme_radius,
  shadows: Theme_shadows,
  borders: Theme_borders,
  letterSpacings: Theme_letterSpacings,
  lineHeights: Theme_lineHeights,
  opacity: Theme_opacity
});
// CONCATENATED MODULE: ./components/markdown.js
var React = __webpack_require__(0);

var Rebass = __webpack_require__(1);

var deepMerge = __webpack_require__(8); //.default




var defaultProps = {};
Object.keys(markdownProps).forEach(function (k) {
  defaultProps[k] = Theme_markdownProps[k] ? Theme_markdownProps[k] : markdownProps[k];
}); // hack for webpack

var merge = deepMerge.default || deepMerge;
var Base = Rebass.Base,
    Heading = Rebass.Heading,
    Text = Rebass.Text,
    Image = Rebass.Image,
    Link = Rebass.Link,
    BlockLink = Rebass.BlockLink,
    Blockquote = Rebass.Blockquote,
    Divider = Rebass.Divider,
    Pre = Rebass.Pre,
    Code = Rebass.Code;

var createComponent = function createComponent(Component, defaultProps) {
  var C = function C(props) {
    return React.createElement(Component, props);
  };

  C.defaultProps = defaultProps;
  return C;
};

var createHeading = function createHeading(Component) {
  return function (props) {
    if (!props.id) return React.createElement(Component, props);
    return React.createElement(Component, props, React.createElement(BlockLink, {
      href: "#" + props.id
    }, props.children));
  };
};

var components = {
  h1: createHeading(Heading),
  h2: createHeading(Heading),
  h3: createHeading(Heading),
  h4: createHeading(Heading),
  h5: createHeading(Heading),
  h6: createHeading(Heading),
  p: Text,
  a: Link,
  img: Image,
  hr: Divider,
  blockquote: Blockquote,
  pre: Pre,
  code: Code,
  inlineCode: Code,
  // placeholders
  ul: Base,
  li: Text,
  table: Base
};
var tags = Object.keys(components);

var createComponents = function createComponents() {
  var customProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var scope = {};
  tags.forEach(function (tag) {
    var Component = components[tag];
    var props = merge(defaultProps[tag], customProps[tag] || {});
    scope[tag] = createComponent(Component, props);
  });
  return scope;
};

/* harmony default export */ var markdown = (createComponents());
// CONCATENATED MODULE: ./pages/_app.js





 // Apply custom theme

var newTheme = {};
Object.keys(_defaultTheme).forEach(function (k) {
  newTheme[k] = Theme[k] ? Theme[k] : _defaultTheme[k];
});
/* harmony default export */ var _app = __webpack_exports__["default"] = (function (_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return external__react__default.a.createElement(tag_["MDXProvider"], {
    components: markdown
  }, external__react__default.a.createElement(external__rebass_["Provider"], null, external__react__default.a.createElement(Component, null)));
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("deepmerge");

/***/ })
/******/ ]);