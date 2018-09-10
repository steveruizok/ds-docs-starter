const React = require("react");
const Rebass = require("rebass");
const deepMerge = require("deepmerge"); //.default

import { markdownProps as defaultMdProps } from "./_defaultTheme";
import { markdownProps as customMdProps } from "./Theme";

const defaultProps = {};

Object.keys(defaultMdProps).forEach(k => {
  defaultProps[k] = customMdProps[k] ? customMdProps[k] : defaultMdProps[k];
});

// hack for webpack
const merge = deepMerge.default || deepMerge;

const {
  Base,
  Heading,
  Text,
  Image,
  Link,
  BlockLink,
  Blockquote,
  Divider,
  // Table,
  Pre,
  Code
} = Rebass;

const createComponent = (Component, defaultProps) => {
  const C = props => React.createElement(Component, props);
  C.defaultProps = defaultProps;
  return C;
};

const createHeading = Component => props => {
  if (!props.id) return React.createElement(Component, props);
  return React.createElement(
    Component,
    props,
    React.createElement(
      BlockLink,
      {
        href: "#" + props.id
      },
      props.children
    )
  );
};

const components = {
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

const tags = Object.keys(components);

const createComponents = (customProps = {}) => {
  const scope = {};
  tags.forEach(tag => {
    const Component = components[tag];
    const props = merge(defaultProps[tag], customProps[tag] || {});
    scope[tag] = createComponent(Component, props);
  });
  return scope;
};

export default createComponents();
