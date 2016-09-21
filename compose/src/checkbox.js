import React from "react";
import Radium from "radium";

const Checkbox = React.createClass({

	getDefaultProps() {
		return {
			checked: "",
		};
	},

	render() {

		const style = {
			checked: {
				color: "#fff",
				borderRadius: 3,
				border: "1px solid rgb(89, 203, 89)",
				padding: 3,
				background: "rgb(89, 203, 89)",

				":hover": {
					cursor: "pointer",
				}
			},

			unChecked: {
				color: "#fff",
				borderRadius: 3,
				border: "1px solid #eee",
				padding: 3,

				":hover": {
					color: "#eee",
					cursor: "pointer"
				}
			}
		};

		return(
			<div>
				{this.props.checked ? <div style={style.checked} onClick={this.props.onClick}><i className="fa fa-check" aria-hidden="true"></i></div> : <div style={style.unChecked} onClick={this.props.onClick}><i className="fa fa-check" aria-hidden="true"></i></div>}
			</div>
		);
	}
});

export default Radium(Checkbox);