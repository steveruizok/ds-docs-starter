import React from "react";
import { Flex } from "rebass";

const Swatch = ({ color, bg }) => (
  <Flex
    bg={bg}
    color={color}
    css={{ height: "96px", width: "128px" }}
    alignItems="flex-end"
    p={8}
  >
    {bg}
  </Flex>
);

export default Swatch;
