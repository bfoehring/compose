import React from "react";
import Radium from "radium";
import ProfileListItem from "./profilelistitem";

const ProfileList = React.createClass({
	render() {

		const style = {
			profileList: {
				background: "#fff",
				listStyle: "none",
				padding: 0,
				fontFamily: "Proxima Nova",
				position: "absolute",
				top: 63,
				left: 20,
				boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.25)"
			}
		}

		return (
			<ul style={style.profileList}>
				{
					this.props.profileList.map(
						function(profileName, i){
							return <ProfileListItem profileList={profileName} key={i} />;
						}
					)
				}
			</ul>
		);
	}
});

export default Radium(ProfileList);