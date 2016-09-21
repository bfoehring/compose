import React from "react";
import Radium from "radium";
import Checkbox from "./checkbox"

const MenuListItem = React.createClass({

	getDefaultProps() {
		return{
			checked: "",
		};
	},

	render() {

		const style = {
			menuListItem: {
				padding: 10,
				listStyle: "none",
				borderBottom: "1px solid #eee",
				fontFamily: "Proxima Nova",
				fontSize: 16,
				color: "#4d4d4d",
				height: 19,

				":hover": {
					color: "#333",
					background: "#f6f6f6",
					cursor: "pointer"
				}
			},

			checkboxContain: {
				float: "right"
			}
		};

		const checked = this.props.checked;

		return(
			<li style={style.menuListItem} onClick={this.props.onClick} id={this.props.id}>
				{this.props.content}
				<div style={style.checkboxContain}>
					<Checkbox checked={checked} />
				</div>
			</li>
		);
	}
});

export default Radium(MenuListItem);