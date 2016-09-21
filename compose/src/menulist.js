import React from "react";
import Radium from "radium";
import MenuListItem from "./menulistitem";

const MenuList = React.createClass({
	render() {

		const style = {
			menuList: {
				margin: 0,
				padding: 0
			}
		}

		return(
			<ul style={style.menuList}>
				{
					this.props.content.map(
						function(content, i) {

							const uId = content + "-menuListItem" + i;

							return <MenuListItem content={content} key={uId} id={uId} />;
						}
					)
				}
			</ul>
		);
	}
});

export default Radium(MenuList);