import React from "react";
import Radium from "radium";

const ListItem = React.createClass({
	render() {

		const style = {
			listItem: {
				listStyle: "none",
				fontFamily: "Proxima Nova",
				fontSize: 16,
				margin: 0,
				padding: 10,
				background: "#fff",
				color: "#333",
				transition: "background 0.15s, color 0.15s",

				":hover": {
					cursor: "pointer",
					background: "rgb(23, 184, 206)",
					color: "#fff"
				}
			}
		};

		return(
			<li id={this.props.id} style={style.listItem} onClick={this.props.handle}>{this.props.listItem}</li>
		);
	}
});

export default Radium(ListItem);