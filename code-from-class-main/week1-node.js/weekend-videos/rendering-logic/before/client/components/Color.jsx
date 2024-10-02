import React from "react";

function Color(props) {
	const { color } = props;
	return <p style={{ color: color }}>{color} - Nice!</p>;
}

export default Color;
