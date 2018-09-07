import React from "react";
import { Circle, Flex, Box, Link } from "rebass";

const NavLink = ({ href, children }) => (
	<Link href={href} color="white" mr={16}>
		{children}
	</Link>
);

const Navbar = () => (
	<Flex px={16} py={32} bg="#333" justifyContent="space-between">
		{/* <Box>
      <Box bg="#ccc" css={{ width: "100px", height: "24px" }} />
		</Box> */}
		<Box color="#fff">Version 0.1</Box>
		<Box>
			<NavLink href="#">Github</NavLink>
		</Box>
	</Flex>
);

export default Navbar;
