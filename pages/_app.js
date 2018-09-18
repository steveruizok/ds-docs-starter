import React from "react";
import { MDXProvider } from "@mdx-js/tag";
import { Provider as RebassProvider, Flex, Container } from "rebass";

import Sidebar from "../components/Sidebar";
import createComponents from "@rebass/markdown";
import { markdownProps } from "../components/Theme";

const components = createComponents(markdownProps);

// fix broken rebass ul
components.ul = props => <ul>{props.children}</ul>;

export default ({ Component, pageProps }) => {
  return (
    <MDXProvider components={components}>
      <RebassProvider>
        <Flex flexDirection={["row", "row-reverse"]} flexWrap="wrap">
          <Container pb={64} width={[1, 1, 3 / 4]}>
            <Component {...pageProps} />
          </Container>
          <Sidebar mt={2} width={[1, 1, 1 / 4]} />
        </Flex>
      </RebassProvider>
    </MDXProvider>
  );
};
