import React from "react";
import Radium from "radium";
import ButtonGroupItem from "./buttongroupitem";

const style = {
	buttongroup: {
		margin: 0,
		padding: 0,
	},
	firstButtonGroupItem: {
		borderTopLeftRadius: 3,
		borderBottomLeftRadius: 3
	},
	lastButtonGroupItem: {
		borderTopRightRadius: 3,
		borderBottomRightRadius: 3,
		borderRight: "none",
		width: 36
	},
	activeStyles: {
		background: "#b3b3b3",
		color: "#fff",

		":hover": {
			cursor: "pointer"
		}
	}
};

const ButtonGroup = React.createClass({

	render(){

		const showTip = this.props.showTip;
		const showTool = this.props.showTool;
		const activeTool = this.props.activeTool;

		return(
			<ul style={style.buttongroup} id="poo">
				{this.props.content.map(
					function(content, i, allContent){

						var idKey = content.toolName + "-buttonGroup";
						const firstStyles = (i === 0) ? style.firstButtonGroupItem : {};
						const lastStyles = (i === allContent.length - 1) ? style.lastButtonGroupItem : {};
						const aOinA = (activeTool === content.toolName) ? style.activeStyles : null;

						return <ButtonGroupItem 
									content={content} 
									key={i} 
									id={idKey} 
									buttonIndex={i} 
									style={[aOinA, Object.assign(firstStyles, lastStyles)]} 
									featureDescription={content.toolName} 
									showTip={showTip}
									showTool={showTool} 
									toolIcon={content.toolIcon}
									activeTool={activeTool}
								/>;
					}
				)}
			</ul>
		);
	}
});

export default Radium(ButtonGroup);