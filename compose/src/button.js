import React from "react";
import Radium from "radium";

const Button = React.createClass({

	getDefaultProps() {
		return {
			buttonText: "",
		};
	},

	render() {

		const style = {
			button: {
				background: "rgb(89, 203, 89)",
				padding: 10,
				borderRadius: 3,
				textAlign: "center",
				fontFamily: "Proxima Nova",
				color: "#fff",
				transition: "background 0.15s",

				":hover": {
					background: "rgb(43, 182, 86)",
					cursor: "pointer"
				},
			}
		};

		return(
			<div 
				style={style.button}
				onClick={this.props._onClick}
			>	
				{this.props.buttonText}
			</div>
		);
	}
});

export default Radium(Button);