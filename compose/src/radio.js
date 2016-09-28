import React from "react";
import Radium from "radium";

const Radio = React.createClass({

	render() {

		const style = {

			radioActive: {
				color: "#fff",
				borderRadius: 24,
				border: "1px solid rgb(89, 203, 89)",
				padding: 3,
				height: 12,
				width: 12,
				fontSize: 12,
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
				borderRadius: 24,
				border: "1px solid #e6e6e6",
				padding: 3,
				height: 12,
				width: 12,
				fontSize: 12,
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

			label: {
				float: "left",
				marginTop: 2
			},

			firstChild: {
				margin: "0px 20px 0px 0px",
			}
		};

		const onClick = this.props.onClick;
		const radioActive = this.props.radioActive;

		return(
			<ul style={style.radios}>
				{this.props.options.map(
					function(options, i) {

						const key = options + i;
						const keyStyle= options + i + "style";
						var activeRadio = (i === radioActive) ? style.radioActive : style.radioInactive;
						var firstChild = (i === 0) ? style.firstChild : null;

						return(
							<li style={[style.radio, firstChild]} key={key} onClick={() => onClick(i)}>
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