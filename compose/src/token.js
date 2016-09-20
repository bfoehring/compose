import React from "react";
import Radium from "radium";

const Token = React.createClass({
	render() {

		const style = {
			padding: 5,
			border: "1px solid #ddd",
			background: "#fff",
			float: "left",
			listStyle: "none",
			borderRadius: 3,
			fontSize: 12,
			fontFamily: "Proxima Nova",
			margin: "0px 5px 0px 0px",
			color: "#333",

			":hover": {
				background: "rgb(23, 184, 206)",
				color: "#fff",
				cursor: "pointer"
			}
		};

		return(
			<li id={this.props.id} style={style} onClick={this.props.onClick}>{this.props.selectedProfile}</li>
		);
	}
});

export default Radium(Token);