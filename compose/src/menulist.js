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
							var checkedState = "";

							for(var c = 0; c < checked.length; c++){
								if(content === checked[c]) {
									checkedState = true;
								}
							}

							return (
								<MenuListItem content={content} onClick={() => onClick(content)} key={uId} id={uId} checked={checkedState} />
							);
						}
					)
				}
			</ul>
		);
	}
});

export default Radium(MenuList);