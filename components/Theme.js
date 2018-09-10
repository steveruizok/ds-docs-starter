// Custom Theme

// To make changes to the project's styling, change the values below.
// This file is a rebass theme. For more on rebass theming, check https://rebassjs.org/theming.

// -----------------------

// Typography
const fonts = {
  sans: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,
  serif: `Garamond, Times New Roman, serif`,
  mono: `"SF Mono", "Roboto Mono", Menlo, monospace`
};

export const font = fonts.sans;
export const fontFamilies = fonts;
export const monospace = fonts.mono;

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96];

export const weights = [400, 700];

// Colors
export const colors = {
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

export const breakpoints = [32, 48, 64, 80];

export const space = [0, 4, 8, 16, 32, 64, 128];

export const radius = 4;

export const lineHeights = [1.3];

export const letterSpacings = [1, 1.2];

export const opacity = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0];

export const shadows = [
  `0 5px 10px ${colors.shadow}`,
  `0 5px 10px ${colors.shadow1}`,
  `0 5px 10px ${colors.shadow2}`
];

export const borders = [`1px solid ${colors.gray}`];

export const markdownProps = {
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
    bg: colors.gray1
  },
  pre: {
    p: 3,
    mt: 4,
    mb: 4,
    bg: colors.gray1
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

export default {
  font,
  monospace,
  fontFamilies,
  weights,
  fontSizes,
  colors,
  breakpoints,
  space,
  radius,
  shadows,
  borders,
  letterSpacings,
  lineHeights,
  opacity
};
