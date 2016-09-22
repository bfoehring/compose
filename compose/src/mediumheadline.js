import React from "react";

const MediumHeadline = React.createClass({
	render() {

		const style = {
			mediumHeadline: {
				fontSize: 18,
				fontWeight: 600,
				color: "#333",
				fontFamily: "Proxima Nova",
				margin: "0px 0px 20px 0px"
			}
		}

		return(
			<h2 style={style.mediumHeadline}>{this.props.headline}</h2>
		);
	}
});

export default MediumHeadline;