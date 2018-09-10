import React from "react";
import { Box, Flex, Container } from "rebass";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default props => {
  return [
    <title key="meta-title">{props.title}</title>,
    <Container key="layout-content">
      {/* <Navbar /> */}
      <Flex flexDirection={["row", "row-reverse"]} flexWrap="wrap">
        <Container pb={64} width={[1, 1, 3 / 4]} {...props} />
        <Sidebar mt={2} width={[1, 1, 1 / 4]} />
      </Flex>
    </Container>
  ];
};
