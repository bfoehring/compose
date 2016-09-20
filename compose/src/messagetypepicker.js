import React from "react";
import Radium from "radium";

const MessageTypePicker = React.createClass({
	render() {

		const style = {
			profilePicker: {
				color: "#fff",
				fontFamily: "Proxima Nova",
				float: "left",
			}
		}

		return(
			<div 
				style={style.profilePicker}
				onClick={this.props.showPicker}
			>
				{this.props.messageType}
			</div>
		);
	}
});

export default Radium(MessageTypePicker);