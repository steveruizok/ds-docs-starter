import React from "react";
import { MDXProvider } from "@mdx-js/tag";
import { Provider as RebassProvider } from "rebass";

import defaultTheme from "../components/_defaultTheme";
import customTheme from "../components/Theme";
import components from "../components/markdown";

// Apply custom theme

const newTheme = {};

Object.keys(defaultTheme).forEach(k => {
  newTheme[k] = customTheme[k] ? customTheme[k] : defaultTheme[k];
});

export default ({ Component, pageProps }) => {
  return (
    <MDXProvider components={components}>
      <RebassProvider>
        <Component />
      </RebassProvider>
    </MDXProvider>
  );
};
