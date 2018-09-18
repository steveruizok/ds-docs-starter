import React from "react";
import { Heading, Text, Box, Divider, Link, Container } from "rebass";

export default props => (
  <Container {...props}>
    <Box mt={0}>
      <img
        alt="Logo"
        style={{ width: "144px" }}
        src="/static/logos/default.png"
      />
      <Text fontSize={1}>Design System v.01</Text>
    </Box>
    <ListSection
      links={[
        { href: "", title: "About" },
        { href: "usage", title: "Usage" },
        { href: "updating", title: "Updating" },
        { href: "changelog", title: "Changelog" }
      ]}
    />
    <ListHeading>Foundations</ListHeading>
    <ListSection
      title="Brand"
      links={[
        { href: "principles", title: "Principles" },
        { href: "voice", title: "Voice" }
      ]}
    />
    <ListSection
      title="Style"
      links={[
        { href: "colours", title: "Colours" },
        { href: "typography", title: "Typography" },
        { href: "photography", title: "Photography" },
        { href: "icons", title: "Icons" },
        { href: "logos", title: "Logos" }
      ]}
    />
    <ListSection
      title="Layout"
      links={[
        { href: "spacing", title: "Spacing" },
        { href: "responsive", title: "Responsive" }
      ]}
    />
    <ListHeading>Components</ListHeading>
    <ListSection
      title="Buttons"
      links={[
        { href: "button", title: "Button" },
        { href: "link", title: "Link" }
      ]}
    />
    <ListSection
      title="Cards"
      links={[
        { href: "card", title: "Card" },
        { href: "list", title: "Featured" },
        { href: "wodge", title: "Wodge" },
        { href: "list", title: "List" }
      ]}
    />
    <ListSection
      title="Forms"
      links={[
        { href: "textarea", title: "Text Area" },
        { href: "textinput", title: "Text input" },
        { href: "select", title: "Select" },
        { href: "radiobutton", title: "Radio button" },
        { href: "checkbox", title: "Checkboxes" },
        { href: "rangeinput", title: "Range input" }
      ]}
    />
    <Divider />
    <Box fontSize={1}>
      <p>
        <a href="#">Github</a>
      </p>
      <p>Copyright 2018</p>
    </Box>
  </Container>
);

const ListHeading = props => (
  <>
    <Divider />
    <Heading fontSize={3} color="greyDark">
      {props.children}
    </Heading>
  </>
);

const SidebarLink = ({ href, children }) => (
  <li style={{ padding: "0", margin: "12px 0" }}>
    <Link
      href={`/${href}`}
      color="black"
      mr={16}
      css={{ textDecoration: "none" }}
    >
      {children}
    </Link>
  </li>
);

const ListSection = props => (
  <ul style={{ margin: "44px 0", padding: "0", listStyle: "none" }}>
    {props.title && (
      <Heading fontSize={2} color="greyDark">
        {props.title}
      </Heading>
    )}
    {props.links.map((l, index) => (
      <SidebarLink key={"SidebarLink_" + index} href={l.href}>
        {l.title}
      </SidebarLink>
    ))}
  </ul>
);
