import React from "react";
import { Box, Flex, Container } from "rebass";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default props => (
  <div>
    <Navbar />
    <Flex flexDirection={["row", "row-reverse"]} flexWrap="wrap">
      <Container px={32} pb={64} width={[1, 1, 3 / 4]} {...props} />
      <Box width={[1, 1, 1 / 4]}>
        <Sidebar />
      </Box>
    </Flex>
  </div>
);
