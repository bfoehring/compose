import React from "react";
import Radium from "radium";
import TokenList from "./tokenlist";

const ProfilePicker = React.createClass({

	render() {

		const style = {
			profilePicker: {
				fontFamily: "Proxima Nova",
				fontSize: 14,
				float: "left",
				marginTop: 2
			},
		};

		var addProfiles = this.props.addProfiles

		return (
			<div
				style={style.profilePicker}
				onClick={this.showMessageTypes}
			>
				{
					this.props.isEmpty ?
						<span>Choose profiles...</span> :
						<TokenList selectedProfiles={this.props.selectedProfiles} addProfiles={addProfiles}/>
				}
			</div>
		);
	}
});

export default Radium(ProfilePicker);