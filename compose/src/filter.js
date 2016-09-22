import React from "react";
import Radium from "radium";

const Filter = React.createClass({

	render() {

		const style = {
			filter: {
				padding: 8,
				background: "#fff",
				border: "1px solid #ddd",
				color: "#4d4d4d",
				borderRadius: 3,
				width: "calc(100% - 16px)",
				fontFamily: "Proxima Nova",
				fontSize: 14,
				outline: "none",

				":focus": {
					border: "1px solid 	rgb(89, 203, 89)"
				}
			}
		};

		return(
			<input style={style.filter} type="text" placeholder="Narrow results..." />
		);
	}
});

export default Radium(Filter);