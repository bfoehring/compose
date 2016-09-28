import React from "react";
import Radium from "radium";

const TextLink = React.createClass({
	render() {

		const style = {
			textLink: {
				color: "rgb(23, 184, 206)",
				fontFamily: "Proxima Nova",
				fontSize: 16,
				padding: 10,
				textAlign: "center",

				":hover": {
					color: "rgb(7, 151, 174)",
					cursor: "pointer"
				}
			}
		}

		return(
			<div style={style.textLink}>
				<a href={this.props.href} onClick={this.props.onClick}>{this.props.textLinkName}</a>
			</div>
		);
	}
});

export default Radium(TextLink);