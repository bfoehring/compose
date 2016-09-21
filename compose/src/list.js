import React from "react";
import Radium from "radium";
import ListItem from "./listitem";

const List = React.createClass({

	render() {

		const style = {
			flyout: {
				padding: 0,
				margin: 0,
				boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.25)",
				minWidth: 250,
				zIndex: 4000
			}
		};

		const handle = this.props.handle;

		return(
			<ul style={style.flyout}>
				{
					this.props.listItem.map(
						function(content, i){

							const key = content + "-list";

							return <ListItem listItem={content} key={key} id={key} handle={handle} />;
						}
					)
				}
			</ul>
		);
	}
});

export default Radium(List);