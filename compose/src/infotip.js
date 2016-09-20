import React from "react";
import Radium from "radium";

const InfoTip = React.createClass({

	render() {

		const style = {
			infoTip: {
				padding: 10,
				background: "rgba(0,0,0,.85)",
				color: "#fff",
				borderRadius: 24,
				fontFamily: "Proxima Nova",
				fontSize: 14,
				fontWeight: 300,
				textAlign: "center",
				position: "absolute",
				top: -25,
				left: this.props.tipPosition,
				//maxWidth: 150,
				zIndex: 1000
			}
		}

		return(
			<div style={style.infoTip}>{this.props.featureDescription}</div>
		);
	}

});

export default Radium(InfoTip);