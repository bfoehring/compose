// props are from above | state is what you change.

import React from "react";
import Radium from "radium";
import Button from "./button";
import TextArea from "./textarea";
import ButtonGroup from "./buttongroup";
import List from "./list";
import MessageTypePicker from "./messagetypepicker";
import ProfilePicker from "./profilepicker";
import InfoTip from "./infotip";
import MediumHeadline from "./mediumheadline";
import MenuList from "./menulist";
import Filter from "./filter";

const Container = React.createClass({

	getDefaultProps() {
		return {
			_close: () => {},
			icon: '',
			iconColor: 'black',
			profiles: ["15charactername", "16charactername", "17charactername", "bill_foehring", "anotherHandle"],
			textRows: "4",
			availableTools: {
				schedulingTools: [{toolName: "Scheduling Options", toolIcon: "fa fa-calendar"}, {toolName: "Media", toolIcon: "fa fa-paperclip"}, {toolName: "Targeting", toolIcon: "fa fa-bullseye"}, {toolName: "Tagging", toolIcon: "fa fa-tag"}, {toolName: "Message Approval", toolIcon: "fa fa-check-circle"}],
				queueTools: [{toolName: "Queue Options", toolIcon: "fa fa-hourglass-half"}, {toolName: "Media", toolIcon: "fa fa-paperclip"}, {toolName: "Targeting", toolIcon: "fa fa-bullseye"}, {toolName: "Tagging", toolIcon: "fa fa-tag"}, {toolName: "Message Approval", toolIcon: "fa fa-check-circle"}],
				draftTools: [{toolName: "Media", toolIcon: "fa fa-paperclip"}, {toolName: "Targeting", toolIcon: "fa fa-bullseye"}, {toolName: "Tagging", toolIcon: "fa fa-tag"}, {toolName: "Message Approval", toolIcon: "fa fa-check-circle"}],
				composeTools: [{toolName: "Media", toolIcon: "fa fa-paperclip"}, {toolName: "Targeting", toolIcon: "fa fa-bullseye"}, {toolName: "Tagging", toolIcon: "fa fa-tag"}],
			},
			messageTypes: ["Compose", "Schedule", "Queue", "Draft"],
			users: ["Arnita Hayden", "Bill Foehring", "Henry Millison", "Cory Danielson", "Brian Cordionnier", "Ryan Skurkis", "Austin Gundry", "Viju Hullur"],
			tags: ["sproutsocial", "social media", "sprout coffee", "YOLO", "getsocial", "productideas", "customer support", "compose 2.0", "new compose"],
		};
	},

	getInitialState() {
		return {
			buttonText: "Send",
			messageType: "Compose",
			isPickerShown: false,
			selectedProfiles: [],
			isInactive: true,
			isMessagePickerShown: false,
			showToken: false,
			availableTools: this.props.availableTools.composeTools,
			isEmpty: true,
			showTip: false,
			tipDescription: "",
			tipPosition: "",
			isMinimized: false,
			showTool: false,
			activeTool: "",
			checkedTags: "",
			tagsChecked: [],
			unfilteredTags: this.props.tags,
			filteredTags: "",
			checkedUsers: "",
			usersChecked: [],
			unfilteredUsers: this.props.users,
			filteredUsers: "",
		};
	},

	componentWillMount() {
		this.setState({
			filteredTags: this.state.unfilteredTags,
			filteredUsers: this.state.unfilteredUsers
		});
	},

	showPicker() {
		this.setState({
			isPickerShown: !this.state.isPickerShown,
			isMessagePickerShown: false
		});
	},

	changeMessageType(e) {

		this.showPicker();
		this.setState({
			activeTool: "",
			showTool: false
		});

		if(e.currentTarget.id === "Schedule-list") {
			this.setState({
				messageType: "Schedule",
				buttonText: "Schedule",
				availableTools: this.props.availableTools.schedulingTools
			});
		} else if (e.currentTarget.id === "Queue-list") {
			this.setState({
				messageType: "Queue",
				buttonText: "Queue",
				availableTools: this.props.availableTools.queueTools
			});
		} else if (e.currentTarget.id === "Draft-list") {
			this.setState({
				messageType: "Draft",
				buttonText: "Draft",
				availableTools: this.props.availableTools.draftTools
			});
		} else if (e.currentTarget.id === "Compose-list") {
			this.setState({
				messageType: "Compose",
				buttonText: "Send",
				availableTools: this.props.availableTools.composeTools
			});
		}
	},

	showMessageTypes() {
		this.setState({
			isMessagePickerShown: !this.state.isMessagePickerShown,
			isPickerShown: false
		});
	},

	addProfiles(e) {

		e.stopPropagation();

		var profile = e.currentTarget.id;
		var adjustedProfile = "";

		if(profile.includes("-list")) {
			var listLess = profile.replace("-list", "");
			adjustedProfile = listLess;
		} else if(profile.includes("-tokenlist")) {
			var tokenListless = profile.replace("-tokenlist", "");
			adjustedProfile = tokenListless;
		}

		if(this.state.selectedProfiles.indexOf(adjustedProfile) > -1) {
			for(var s = 0; s < this.state.selectedProfiles.length; s++) {
				if(this.state.selectedProfiles[s] === adjustedProfile) {

					var profileClicked = this.state.selectedProfiles.indexOf(this.state.selectedProfiles[s]);
					this.state.selectedProfiles.splice(profileClicked, 1);

					this.setState({
						selectedProfiles: this.state.selectedProfiles,
					});

					if(this.state.selectedProfiles.length === 0) {
						this.setState({
							isEmpty: true,
							showToken: false
						});
					}

				} 
			}
		} else {
			this.state.selectedProfiles.push(adjustedProfile);
			this.setState({
				showToken: true,
				isEmpty: false
			});
		}

	},

	send() {

		switch(this.state.buttonText) {
			case "Send":
				alert("your message was sent");
				break;
			case "Schedule":
				alert("your message was scheduled");
				break;
			case "Queue":
				alert("your message was queued");
				break;
			case "Draft":
				alert("your message was drafted");
				break;
			default:
				alert("there was an error");
				break;
		}
	},

	showTip(e) {

		var tipId = e.currentTarget.id.replace("-buttonGroup", "");
		var buttonWidthPX = e.currentTarget.style.width;
		var buttonWidth = buttonWidthPX.replace("px", "");
		var finalValue = Number(buttonWidth);
		var grouping = document.getElementById("poo").childNodes;
		var buttonIndex = "";

		for(var i = 0; i < grouping.length; i++) {
			if(grouping[i].id === e.currentTarget.id) {
				buttonIndex = i;
			}
		}
		var buttonPosition = buttonIndex * finalValue + 10;

		this.setState({
			showTip: !this.state.showTip,
			tipDescription: tipId,
			tipPosition: buttonPosition
		});
	},

	minimize() {
		this.setState({
			isMinimized: !this.state.isMinimized
		});
	},

	showTool(e) {
		
		var tool = e.currentTarget.id;
		var name = tool.replace("-buttonGroup", "");

		switch(name) {
			case name:
				if(this.state.showTool && this.state.activeTool === name) {
					this.setState({
						showTool: false,
						activeTool: ""
					});
				} else {
					this.setState({
						activeTool: name,
						showTool: true
					});
				}
				break;
			default:
				console.log("something went wrong");
				break;
		}
	},

	checkTags(num) {

		var lI = this.state.tagsChecked;

		if(lI.indexOf(num) > -1) {
			for(var i = 0; i < lI.length; i++) {
				if(lI[i] === num) {
					console.log(lI[i]);
					lI.splice(lI.indexOf(num), 1);
					this.setState({
						checkedTags: lI
					});
				}
			}
		} else {
			lI.push(num);
			this.setState({
				checkedTags: lI
			});
		}
		console.log(this.state.checkedTags);
	},

	checkUser(num) {

		var lI = this.state.usersChecked;

		if(lI.indexOf(num) > -1) {
			for(var i = 0; i < lI.length; i++) {
				if(lI[i] === num) {
					console.log(lI[i]);
					lI.splice(lI.indexOf(num), 1);
					this.setState({
						checkedUsers: lI
					});
				}
			}
		} else {
			lI.push(num);
			this.setState({
				checkedUsers: lI
			});
		}
	},

	filterTagList(e) {
		var updatedList= this.state.unfilteredTags;

		updatedList = updatedList.filter(function(item){
			return item.toLowerCase().search(
				e.target.value.toLowerCase()
			) !== -1 ;
		});
		this.setState({
			filteredTags: updatedList
		});
	},

	filterUserList(e) {
		var updatedList= this.state.unfilteredUsers;

		updatedList = updatedList.filter(function(item){
			return item.toLowerCase().search(
				e.target.value.toLowerCase()
			) !== -1 ;
		});
		this.setState({
			filteredUsers: updatedList
		});
	},
	
	render() {

		const style = {
			container: {
				background: "#fff",
				boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.25)",
				width: 680,
				padding: 0
			},

			minimize: {
				background: "#fff",
				boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.25)",
				width: 380,
				height: 330,
				overflow: "scroll",
				padding: 0,
				position: "absolute",
				bottom: 0,
				right: 20,
			},

			bottomBar: {
				padding: 20,
				borderTop: "1px solid #eee",
				width: "calc(100%-40px)",
				height: 36,
				position: "relative"
			},

			buttonContainer: {
				width: "30%",
				float: "right"
			},

			buttonGroupContainer: {
				width: "60%",
				float: "left",
				margin: 0
			},

			topBar: {
				background: "#4d4d4e",
				float: "left",
				width: "100%",
			},

			profilePickerBar: {
				background: "#eee",
				float: "left",
				width: "100%",
			},

			profPickerMenu: {
				position: "absolute",
				top: 84,
				left: 8,
				zIndex: 4000
			},

			menuWithToken: {
				position: "absolute",
				top: 92,
				left: 8,
				zIndex: 4000
			},

			messageTypePicker: {
				background: "#4d4d4d",
				padding: 10,
				float: "left",

				":hover": {
					background: "#333",
					cursor: "pointer"
				}
			},

			profilePickerContain: {
				background: "#eee",
				color: "#333",
				padding: 10,
				float: "left",
				width: "calc(100% - 20px)",

				":hover": {
					background: "#ddd",
					color: "#1a1a1a",
					cursor: "pointer",
				}
			},

			messageTypeMenu: {
				position: "absolute",
				top: 46,
				left: 8,
				zIndex: 1000
			},

			messageTypeChevDown: {
				margin: "0px 0px 0px 10px",
				color: "#fff",
				transition: "transform 0.1s"
			},

			messageTypeChevUp: {
				margin: "0px 0px 0px 10px",
				color: "#fff",
				transform: "rotate(180deg)",
				transition: "transform 0.1s"
			},

			close: {
				float: "right",
				color: "#fff",
				padding: 10,
				background: "#4d4d4d",

				":hover": {
					background: "#333",
					cursor: "pointer"
				}
			},

			minimizeContainer: {
				float: "right",
				color: "#fff",
				padding: 10,
				background: "#4d4d4d",

				":hover": {
					background: "#333",
					cursor: "pointer"
				}
			},

			profPickChevDown: {
				margin: "0px 0px 2px 10px",
				color: "#333",
				transition: "transform 0.1s",
			},

			profPickChevUp: {
				margin: "0px 0px 2px 10px",
				color: "#333",
				transform: "rotate(180deg)",
				transition: "transform 0.1s"
			},	

			openWithToken: {
				margin: "5px 0px 2px 10px",
				color: "#333",
				transform: "rotate(180deg)",
				transition: "transform 0.1s",
			},

			closedWithToken: {
				margin: "5px 0px 2px 10px",
				color: "#333",
				transition: "transform 0.1s",
			},

			networkIcon: {
				color: this.props.iconColor,
				float: "left",
				margin: "0px 5px 0px 0px",
			},

			networkIconToken: {
				color: this.props.iconColor,
				float: "left",
				margin: "5px 5px 0px 0px",
			},

			toolContainer: {
				padding: "0px 20px 20px 20px",
				maxHeight: 200,
				overflow: "scroll"
			},

			minToolContainer: {
				padding: "0px 20px 20px 20px",
			},

			filterContain: {
				margin: "0px 0px 10px 0px"
			}
		};

		var allMessageTypes = this.props.messageTypes;
		var availableMessageTypes = [];

		for(var i = 0; i < allMessageTypes.length; i++) {
			if(allMessageTypes[i] === this.state.messageType) {

			} else {
				availableMessageTypes.push(allMessageTypes[i]);
			}
		}

		var arrowStyle = style.profPickChevDown;
		var menuStyle = style.profPickerMenu;

		if(this.state.isMessagePickerShown && this.state.showToken) {
			arrowStyle = style.openWithToken;
			menuStyle = style.menuWithToken;
		} else if(this.state.showToken) {
			arrowStyle = style.closedWithToken;
		} else if(this.state.isMessagePickerShown) {
			arrowStyle = style.profPickChevUp;
		}

		return(
			<div style={this.state.isMinimized ? style.minimize : style.container}>
				<div style={style.topBar}>
					<div style={style.messageTypePicker} key="one" onClick={this.showPicker}>
						<MessageTypePicker messageType={this.state.messageType + " " + "New Message"} key="five" />
						<i className="fa fa-angle-down" key="two" style={this.state.isPickerShown ? style.messageTypeChevUp : style.messageTypeChevDown} aria-hidden="true"></i>
					</div>
					<div style={style.messageTypeMenu}>
						{this.state.isPickerShown ? <List listItem={availableMessageTypes} handle={this.changeMessageType} /> : null}
					</div>
					<div style={style.close} key="close-action" onClick={this.props._close}>
						<i className="fa fa-times fa-fw" aria-hidden="true"></i>
					</div>
					<div style={style.minimizeContainer} key="minimize-action" onClick={this.minimize}>
						<i className="fa fa-minus fa-fw" aria-hidden="true"></i>
					</div>
				</div>

				<div style={style.profilePickerBar}>
					<div style={style.profilePickerContain} key="three" onClick={this.showMessageTypes}>
						<i className={this.props.icon} aria-hidden="true" style={this.state.showToken ? style.networkIconToken : style.networkIcon}></i>
						<ProfilePicker isEmpty={this.state.isEmpty} selectedProfiles={this.state.selectedProfiles} addProfiles={this.addProfiles}/>
						<i className="fa fa-angle-down" key="four" style={arrowStyle} aria-hidden="true"></i>
					</div>
					<div style={menuStyle}>
						{this.state.isMessagePickerShown ? <List listItem={this.props.profiles} handle={this.addProfiles} /> : null}
					</div>
				</div>

				<div style={style.textAreaContainer}>
					<TextArea rows={this.props.textRows} />
				</div>

				<div style={style.bottomBar}>
					<div style={style.buttonContainer}>
						<Button key="five" buttonText={this.state.buttonText} _onClick={this.send} />
					</div>
					<div style={style.buttonGroupContainer}>
						{
							this.state.showTip ? <InfoTip tipPosition={this.state.tipPosition} featureDescription={this.state.tipDescription} /> : null
						}
						<ButtonGroup key="six" content={this.state.availableTools} showTip={this.showTip} showTool={this.showTool} activeTool={this.state.activeTool}/>
					</div>
				</div>
				<div>
					{
						this.state.showTool ? 
							<div style={this.state.isMinimized ? style.minToolContainer : style.toolContainer}>
								{(this.state.activeTool === "Scheduling Options") ? <MediumHeadline headline="Scheduling Options" /> : null}
								{(this.state.activeTool === "Queue Options") ? <MediumHeadline headline="Queue Options" /> : null}
								{(this.state.activeTool === "Media") ? <MediumHeadline headline="Media" /> : null}
								{(this.state.activeTool === "Targeting") ? <MediumHeadline headline="Targeting" /> : null}
								{(this.state.activeTool === "Message Approval") ? 
									<div>
										<MediumHeadline headline="Message Approval" />
										<div style={style.filterContain}><Filter onChange={this.filterUserList} /></div>
										<MenuList content={this.state.filteredUsers} checked={this.state.checkedUsers} onClick={this.checkUser} />
									</div> : 
								null}
								{(this.state.activeTool === "Tagging") ?
									<div> 
										<MediumHeadline headline="Tagging" />
										<div style={style.filterContain}><Filter onChange={this.filterTagList}/></div>
										<MenuList content={this.state.filteredTags} checked={this.state.checkedTags} onClick={this.checkTags} /> 
									</div> : 
								null}
							</div> 
						: null
					}
				</div>
			</div>
		);
	}

});

export default Radium(Container);