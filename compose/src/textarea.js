import React from "react";
import Radium from "radium";

const TextArea = React.createClass({

	getDefaultProps() {
		return {
			rows: "",
			resize: "none",
			placeholder: "Create your message here..."
		};
	},

	render() {

		const style = {
			textInput: {
				width: "calc(100% - 40px)",
				padding: 20,
				borderRadius: 3,
				border: "none",
				resize: this.props.resize,
				outline: "none",
				fontSize: 16,
				lineHeight: "24px",
				color: "#333",
				fontWeight: 300
			}
		};

		return(
			<textarea 
				style={style.textInput} 
				rows={this.props.rows}
				placeholder={this.props.placeholder}
			>
			</textarea>
		);
	}

});

export default Radium(TextArea);