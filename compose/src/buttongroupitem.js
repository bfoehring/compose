import React from "react";
import Radium from "radium";

const ButtonGroupItem = React.createClass({

	render() {

		const style = {
			buttongroupitem: {
				display: "inline-block",
				listStyle: "none",
				background: "#eee",
				height: 26,
				width: 35,
				paddingTop: 10,
				color: "#b3b3b3",
				textAlign: "center",
				borderRight: "1px solid #ddd",
				transition: "background 0.15s",

				":hover": {
					background: "#b3b3b3",
					color: "#fff",
					cursor: "pointer"
				},
			},
		};

		return(
			<li id={this.props.id} 
				style={[style.buttongroupitem, this.props.style]} 
				onMouseOver={this.props.showTip} 
				onMouseOut={this.props.showTip}
				onClick={this.props.showTool}
			>
				<i className={this.props.toolIcon} aria-hidden="true"></i>
			</li>
		);
	}
});

export default Radium(ButtonGroupItem);