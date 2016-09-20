import React from "react";
import Radium from "radium";

const ButtonGroupItem = React.createClass({

	render() {

		const style = {
			buttongroupitem: {
				display: "inline-block",
				listStyle: "none",
				background: "#eee",
				height: 36,
				width: 36,
				transition: "background 0.15s",

				":hover": {
					background: "#e6e6e6",
					cursor: "pointer"
				},
			},
		};

		return(
			<li id={this.props.id} style={[style.buttongroupitem, this.props.style]} onMouseOver={this.props.showTip} onMouseOut={this.props.showTip}></li>
		);
	}
});

export default Radium(ButtonGroupItem);