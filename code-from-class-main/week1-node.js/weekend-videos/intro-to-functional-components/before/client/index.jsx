import React from "react";
import ReactDOM from "react-dom";

function App() {
	return <h1> Hello World </h1>;
}

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(<App />, document.getElementById("app"));
});
