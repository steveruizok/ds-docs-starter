import React from "react";
import { Panel, Code, Box } from "rebass";

const Swatch = ({ cssvariable, bg }) => (
	<Panel borderColor="#eee">
		<Box
			bg={bg}
			css={{ height: "96px", width: "100%" }}
			alignItems="flex-end"
			p={8}
		/>
		<Panel.Footer bg="#fafafa">
			<Code>{bg}</Code>
		</Panel.Footer>
		{cssvariable && (
			<Panel.Footer bg="#fafafa">
				<Code>
					--var(
					{cssvariable})
				</Code>
			</Panel.Footer>
		)}
	</Panel>
);

export default Swatch;
