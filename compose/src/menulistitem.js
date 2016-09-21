import React from "react";
import Radium from "radium";

const MenuListItem = React.createClass({

	getDefaultProps() {
		return{

		};
	},

	render() {

		const style = {
			menuListItem: {
				padding: "10px 0px 10px 10px",
				listStyle: "none",
				borderBottom: "1px solid #eee",
				fontFamily: "Proxima Nova",
				fontSize: 16,
				color: "#4d4d4d",

				":hover": {
					color: "#fff",
					background: "rgb(23, 184, 206)",
					cursor: "pointer"
				}
			}
		};

		return(
			<li style={style.menuListItem}>{this.props.content}</li>
		);
	}
});

export default Radium(MenuListItem);