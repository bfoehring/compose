import React from "react";
import Radium from "radium";

const Tabs = React.createClass({
	render() {

		const style = {
			list: {
				padding: 0,
				margin: "0px 0px 20px 0px"
			},

			listItem: {
				listStyle: "none",
				display: "inline-block",
				textAlign: "center",
				padding: "0px 15px 10px 15px",
				fontFamily: "Proxima Nova",
				fontSize: 14,
				color: "#b3b3b3",

				":hover": {
					cursor: "pointer",
					color: "rgb(23, 184, 206)"
				}
			},

			activeStyles: {
				borderBottom: "2px solid rgb(23, 184, 206)",
				color: "rgb(23, 184, 206)",
				":hover": {
					color: "rgb(7, 151, 174)",
					borderBottom: "2px solid rgb(7, 151, 174)"
				}
			}
		};

		const onClick = this.props.onClick;
		const selectedTab = this.props.selectedTab;

		return(
			<ul style={style.list}>
				{
					this.props.options.map(
						function(content, i) {

							const key = content + "-tab" + i;
							const active = (i === selectedTab) ? style.activeStyles : style.listItem; 

							return(
								<li 
									style={[style.listItem, Object.assign(active)]} 
									key={key} 
									onClick={() => onClick(i)}
								>
									{content}
								</li>
							);
						}
					)
				}
			</ul>
		);
	}
});

export default Radium(Tabs)