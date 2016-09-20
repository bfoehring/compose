import React from "react";
import Radium from "radium";

const SelectButton = React.createClass({
	render() {

		const style = {
			selectButton: {
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
			},

			downArrow: {
				marginLeft: 5
			}
		};

		return(
			<div 
				style={style.selectButton}
				onClick={this.props._onClick}
			>
				{this.props.selectButtonText}
				<i className="fa fa-angle-down" style={style.downArrow} aria-hidden="true"></i>
			</div>
		);
	}
});

export default Radium(SelectButton);