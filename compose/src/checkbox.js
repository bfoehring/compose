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
				padding: 2,
				background: "rgb(89, 203, 89)",
				fontSize: 12,

				":hover": {
					cursor: "pointer",
				}
			},

			unChecked: {
				color: "#fff",
				borderRadius: 3,
				border: "1px solid #eee",
				padding: 2,
				fontSize: 12,
				background: "#fff",

				":hover": {
					color: "#eee",
					cursor: "pointer",
					background: "#fff"
				}
			}
		};

		return(
			<div>
				{this.props.checked ? <div style={style.checked}><i className="fa fa-check" aria-hidden="true"></i></div> : <div style={style.unChecked}><i className="fa fa-check" aria-hidden="true"></i></div>}
			</div>
		);
	}
});

export default Radium(Checkbox);