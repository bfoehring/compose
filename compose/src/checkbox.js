import React from "react";
import Radium from "radium";

const Checkbox = React.createClass({

	getDefaultProps() {
		return {
			checked: "",
			label: "",
			labelText: "",
		};
	},

	render() {

		const style = {
			checked: {
				color: "#fff",
				borderRadius: 3,
				border: "1px solid rgb(89, 203, 89)",
				padding: 2,
				height: 14,
				width: 13,
				background: "rgb(89, 203, 89)",
				fontSize: 12,
				margin: 0,

				":hover": {
					cursor: "pointer",
				}
			},

			unChecked: {
				color: "#fff",
				borderRadius: 3,
				border: "1px solid #e6e6e6",
				padding: 2,
				height: 14,
				width: 13,
				fontSize: 12,
				background: "#fff",
				margin: 0,

				":hover": {
					color: "#e6e6e6",
					cursor: "pointer",
					background: "#fff"
				}
			},
		};

		return(
			<div>
				{this.props.checked ? 
					<div style={style.checked} onClick={this.props.onClick}><i className="fa fa-check" aria-hidden="true"></i></div> : 
					<div style={style.unChecked} onClick={this.props.onClick}><i className="fa fa-check" aria-hidden="true"></i></div>
				}
			</div>
		);
	}
});

export default Radium(Checkbox);