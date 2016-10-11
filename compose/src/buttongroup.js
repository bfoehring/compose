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
	},
	activeMessageType: {
		color: "rgb(23, 184, 206)"
	}
};

const ButtonGroup = React.createClass({

	render(){

		const showTip = this.props.showTip;
		const showTool = this.props.showTool;
		const activeTool = this.props.activeTool;
		const enableSchedule = this.props.enableSchedule;
		const enableQueue = this.props.enableQueue;

		return(
			<ul style={style.buttongroup} id="poo">
				{this.props.content.map(
					function(content, i, allContent){

						var idKey = content.toolName + "-buttonGroup";
						const firstStyles = (i === 0) ? style.firstButtonGroupItem : {};
						const lastStyles = (i === allContent.length - 1) ? style.lastButtonGroupItem : {};
						const aOinA = (activeTool === content.toolName) ? style.activeStyles : null;
						var activeMessageType = "";

						if(content.toolName === "Schedule" && enableSchedule && activeTool === "Schedule") {

						} else if(content.toolName === "Queue" && enableQueue && activeTool === "Queue") {

						} else {
							if(content.toolName === "Schedule" && enableSchedule) {
								activeMessageType = style.activeMessageType;
							} else if(content.toolName === "Queue" && enableQueue) {
								activeMessageType = style.activeMessageType;
							} else {
								activeMessageType = null;
							}
						}

						if(content.length > 5) {
							var overflow= content.slice(5, content.length - 1);
							console.log(overflow);
						}

						return <ButtonGroupItem 
									content={content} 
									key={i} 
									id={idKey} 
									buttonIndex={i} 
									style={[aOinA, Object.assign(firstStyles, lastStyles), activeMessageType]} 
									featureDescription={content.toolName} 
									showTip={showTip}
									showTool={showTool} 
									toolIcon={content.toolIcon}
									activeTool={activeTool}
									enableSchedule={enableSchedule}
									enableQueue={enableQueue}
								/>;
					}
				)}
			</ul>
		);
	}
});

export default Radium(ButtonGroup);