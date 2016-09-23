import React from "react";
import Radium from "radium";

const Filter = React.createClass({

	render() {

		const style = {
			filter: {
				padding: "8px 8px 8px 27px",
				background: "#fff",
				border: "1px solid #ddd",
				color: "#4d4d4d",
				borderRadius: 3,
				width: "calc(100% - 37px)",
				fontFamily: "Proxima Nova",
				fontSize: 14,
				outline: "none",

				":focus": {
					border: "1px solid 	rgb(89, 203, 89)"
				}
			},

			search: {
				color: "#ddd",
				position: "relative",
				top: 24,
				left: 8
			},

			contain: {
				marginTop: -20
			}
		};

		return(
			<div style={style.contain}>
				<i style={style.search} className="fa fa-search" aria-hidden="true"></i>
				<input style={style.filter} type="text" placeholder="Narrow results..." onChange={this.props.onChange} />
			</div>
		);
	}
});

export default Radium(Filter);