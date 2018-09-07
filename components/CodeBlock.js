import React from "react";
import { Code, Container } from "rebass";

const CodeBlock = props => (
  <Container mb="48px">
    <Code p="16px" bg="#ececef">
      {props.children}
    </Code>
  </Container>
);

export default CodeBlock;
