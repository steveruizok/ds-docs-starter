import React from "react";
import { Card, Code, Box } from "rebass";

const Swatch = ({ bg }) => (
  <Card>
    <Box
      bg={bg}
      css={{ height: "96px", width: "100%" }}
      alignItems="flex-end"
      p={8}
      mb={2}
    />
    <Code>{bg}</Code>
  </Card>
);

export default Swatch;
