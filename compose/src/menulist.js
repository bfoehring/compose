import React from "react";
import Radium from "radium";
import MenuListItem from "./menulistitem";

const MenuList = React.createClass({

	getDefaultProps() {
		return {
			checked: "",
		};
	},

	render() {

		const style = {
			menuList: {
				margin: 0,
				padding: 0
			}
		};

		const onClick = this.props.onClick;
		const checked = this.props.checked;

		return(
			<ul style={style.menuList}>
				{
					this.props.content.map(
						function(content, i) {

							const uId = content + "-menuListItem" + i;

							return (
								<MenuListItem content={content} onClick={onClick} key={uId} id={uId} checked={checked} />
							);
						}
					)
				}
			</ul>
		);
	}
});

export default Radium(MenuList);