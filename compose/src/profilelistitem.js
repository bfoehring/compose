import React from "react";
import Radium from "radium";

const ProfileListItem = React.createClass({
	render() {

		const style = {
			listItem: {
				padding: 10,
				background: "fff"
			}
		};

		return (
			<li style={style.listItem}>
				{this.props.profileList}
			</li>
		);
	}
});

export default Radium(ProfileListItem);