import React from "react";
import { MDXProvider } from "@mdx-js/tag";
import { Provider as RebassProvider } from "rebass";

import components from "../components/markdown";

const theme = {
  colors: {
    gray: "#eeeeee",
    blue: "#aaaaaa",
    black: "#555555",
    white: "#ffffff",
    darken: "#aaaaaa"
  }
};

export default ({ Component, pageProps }) => (
  <MDXProvider components={components}>
    <RebassProvider theme={theme}>
      <Component {...pageProps} />
    </RebassProvider>
  </MDXProvider>
);
