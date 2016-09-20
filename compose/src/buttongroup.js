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
		borderBottomRightRadius: 3
	}
};

const ButtonGroup = React.createClass({

	render(){

		const showTip = this.props.showTip;

		return(
			<ul style={style.buttongroup} id="poo">
				{this.props.content.map(
					function(content, i, allContent){

						var idKey = content + "-buttonGroup";
						const firstStyles = (i === 0) ? style.firstButtonGroupItem : {};
						const lastStyles = (i === allContent.length - 1) ? style.lastButtonGroupItem : {};

						return <ButtonGroupItem content={content} key={i} id={idKey} buttonIndex={i} style={Object.assign(firstStyles, lastStyles)} featureDescription={content} showTip={showTip} />;
					}
				)}
			</ul>
		);
	}
});

export default Radium(ButtonGroup);