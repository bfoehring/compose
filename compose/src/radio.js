import React from "react";
import Radium from "radium";

const Radio = React.createClass({

	render() {

		const style = {

			radioActive: {
				color: "#fff",
				borderRadius: 17,
				border: "1px solid rgb(89, 203, 89)",
				padding: 3,
				height: 11,
				width: 11,
				fontSize: 10,
				background: "rgb(89, 203, 89)",
				margin: "0px 10px 0px 0px",
				float: "left",
				textAlign: "center",

				":hover": {
					cursor: "pointer",
					background: "rgb(43, 182, 86)",
					border: "1px solid rgb(43, 182, 86)"
				}
			},

			radioInactive: {
				color: "#fff",
				borderRadius: 17,
				border: "1px solid #e6e6e6",
				padding: 3,
				height: 11,
				width: 11,
				fontSize: 10,
				background: "#fff",
				margin: "0px 10px 0px 0px",
				float: "left",
				textAlign: "center",

				":hover": {
					color: "#e6e6e6",
					cursor: "pointer",
					background: "#fff"
				}
			},

			radios: {
				margin: 0,
				padding: 0
			},

			radio: {
				listStyle: "none",
				fontFamily: "'Proxima Nova', 'Helvetica', sans-serif",
				color: "#333",
				float: "left"
			},

			radioButton: {
				listStyle: "none",
				fontFamily: "'Proxima Nova', 'Helvetica', sans-serif",
				color: "#333",
				float: "left",
				padding: 8,
				borderRadius: 3,
				border: "1px solid #ddd",
				width: "calc(100% - 18px)",
				margin: "10px 0px 0px 0px",

				":hover": {
					cursor: "pointer",
					border: "1px solid rgb(23, 184, 206)",
				}
			},

			label: {
				float: "left",
				marginTop: 2,
				fontSize: 14
			},

			firstChild: {
				margin: "0px 0px 0px 0px",
			}
		};

		const onClick = this.props.onClick;
		const radioActive = this.props.radioActive;
		const button = this.props.button;

		return(
			<ul style={style.radios}>
				{this.props.options.map(
					function(options, i) {

						const key = options + i;
						const keyStyle= options + i + "style";
						var activeRadio = (i === radioActive) ? style.radioActive : style.radioInactive;
						var firstChild = (i === 0) ? style.firstChild : null;
						var liType = (button) ? style.radioButton : style.radio;

						return(
							<li style={[liType, firstChild]} key={key} onClick={() => onClick(i)}>
								<div style={activeRadio} key={keyStyle}><i className="fa fa-circle" aria-hidden="true"></i></div>
								<span style={style.label}>{options}</span>
							</li>
						);
					}
				)}
			</ul>
		);
	}
});

export default Radium(Radio);