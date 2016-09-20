import React from "react";
import Radium from "radium";
import Token from "./token";

const TokenList = React.createClass({
	render() {

		const style = {
			margin: 0,
			float: "left",
			padding: 0
		}

		var addProfiles = this.props.addProfiles;

		return(
			<ul style={style}>
				{
					this.props.selectedProfiles.map(
						function(selectedProfile, i) {

							const key = selectedProfile + "-tokenlist";

							return <Token selectedProfile={selectedProfile} key={key} id={key} onClick={addProfiles} />;
						}
					)
				}
			</ul>
		);
	}
});

export default Radium(TokenList);