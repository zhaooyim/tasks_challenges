import React from "react";

import Color from "./Color";

const colorData = ["magenta", "turquoise", "grey", "darkslateblue"];

function Colors(props) {
	return (
		<>
			{props.showColors && (
				<>
					<h3>These are your colours!</h3>
					<Color color={colorData[0]} />
					<Color color={colorData[1]} />
					<Color color={colorData[2]} />
					<Color color={colorData[3]} />
				</>
			)}
		</>
	);
}

export default Colors;
