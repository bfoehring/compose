// props are from above | state is what you change.

import React from "react";
import Radium from "radium";
import Button from "./button";
import TextArea from "./textarea";
import ButtonGroup from "./buttongroup";
import List from "./list";
import ProfilePicker from "./profilepicker";
import InfoTip from "./infotip";
import MediumHeadline from "./mediumheadline";
import MenuList from "./menulist";
import Filter from "./filter";
import Draggable from "react-draggable";
import TextLink from "./textlink";
import Radio from "./radio";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Message from "./message";
import Tabs from "./tabs";

var moment = require("moment");

const Container = React.createClass({

	getDefaultProps() {
		return {
			_close: () => {},
			icon: '',
			iconColor: 'black',
			profiles: ["15charactername", "16charactername", "17charactername", "bill_foehring", "anotherHandle"],
			textRows: "4",
			availableTools: [
				{toolName: "Schedule", toolIcon: "fa fa-calendar"}, 
				{toolName: "Queue", toolIcon: "fa fa-hourglass-half"}, 
				{toolName: "Media", toolIcon: "fa fa-paperclip"}, 
				{toolName: "Targeting", toolIcon: "fa fa-bullseye"}, 
				{toolName: "Tagging", toolIcon: "fa fa-tag"}, 
				{toolName: "Message Approval", toolIcon: "fa fa-check-circle"},
				{toolName: "URL Tracking", toolIcon: "fa fa-link"},
				{toolName: "Message Preview", toolIcon: "fa fa-eye"},
				{toolName: "Notifications", toolIcon: "fa fa-bell"}
			],
			messageTypes: ["Compose", "Schedule", "Queue", "Draft"],
			users: ["Arnita Hayden", "Bill Foehring", "Henry Millison", "Cory Danielson", "Brian Cordionnier", "Ryan Skurkis", "Austin Gundry", "Viju Hullur"],
			tags: ["sproutsocial", "social media", "sprout coffee", "YOLO", "getsocial", "productideas", "customer support", "compose 2.0", "new compose"],
			queueOptions: ["Queue Next", "Queue Last"],
			messages: [
				{
					message: "The @ChiSproutCoffee staff are true artists. I had the coolest latte art this morning! #mysproutcafe", 
					network: "fa fa-twitter-square",
					profile: "Sprout Coffee Co.",
					user: "Laura Lozano",
					date: "Oct 3, 2016",
					time: "8:23AM"
				},
				{
					message: "Brr...it’s cold out there! Stop by for a custom hot chocolate - vanilla, hazelnut and cinnamon flavored! #mysproutcafe", 
					network: "fa fa-twitter-square",
					profile: "Sprout Coffee Co.",
					user: "Gilbert Lara",
					date: "Oct 4, 2016",
					time: "3:45PM"
				},
			],
			queueTimes: "8:30am, 10:00am, 11:45am, 12:15pm, 1:30pm, 2:00pm, 3:38pm, 5:23pm",
			addtionalOptions: ["Customize", "Targeting", "Scheduling", "Queue"],
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
			defaultTools: [],
			toolOverflow: [],
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
			enableSchedule: false,
			enableQueue: false,
			position: {
				x: 0,
				y: 0
			},
			radioActive: 0,
			scheduleStartDate: moment(),
			scheduledDates: [],
			queueStartDate: null,
			addtionalOptions: this.props.addtionalOptions,
			additionalOptionSelected: 0,
		};
	},

	componentWillMount() {
		this.setState({
			filteredTags: this.state.unfilteredTags,
			filteredUsers: this.state.unfilteredUsers,
		});
		this.configureDynamicGroup(this.props.availableTools);
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
				this.props._close();
				break;
			case "Schedule":
				alert("your message was scheduled");
				this.props._close();
				break;
			case "Queue":
				alert("your message was queued");
				this.props._close();
				break;
			default:
				alert("there was an error");
				break;
		}
	},

	draft() {
		alert("Your message has been saved");
		this.props._close();
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
			isMinimized: !this.state.isMinimized,
			position: {
				x: 0,
				y: 0
			}
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

	toggleMessageType(messageType) {
		
		switch(messageType) {
			case "Schedule":
				this.setState({
					enableSchedule: true,
					enableQueue: false,
					messageType: messageType,
					buttonText: messageType,
				});	
				break;
			case "Queue":
				this.setState({
					enableQueue: true,
					enableSchedule: false,
					messageType: messageType,
					buttonText: messageType,
				});	
				break;
			default:
				console.log("not a message type");
				break;
		}
	},

	showToolChangeMessage(e) {

		var tool = e.currentTarget.id;
		var name = tool.replace("-buttonGroup", "");

		this.toggleMessageType(name);
		this.showTool(e);

		console.log(name);
	},

	queueNextLast(num) {
		this.setState({
			radioActive: num,
			queueStartDate: null
		});
	},

	changeScheduleDate(date) {

		this.state.scheduledDates.push(date);

		this.setState({
			scheduleStartDate: date,
		});

		console.log(this.state.scheduledDates);
	},

	changeQueueDate(date) {
		this.setState({
			queueStartDate: date,
			radioActive: null
		});
	},

	chooseAdditionalOption(num) {
		this.setState({
			additionalOptionSelected: num
		});
	},

	configureDynamicGroup(content) {
		if(content.length > 5) {
			var toolOverflow = content.slice(5);
			var defaultTools = content.slice(0, 5);
			defaultTools.push({toolName: "More Options", toolIcon: "fa fa-ellipsis-h"});
			this.setState({
				toolOverflow: toolOverflow,
				defaultTools: defaultTools
			});
		} else {
			this.setState({
				defaultTools: content
			});
		}
	},
	
	render() {

		const style = {
			container: {
				background: "#fff",
				boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.25)",
				width: 680,
				padding: 0,
			},

			minimize: {
				background: "#fff",
				boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.25)",
				width: 452,
				height: 330,
				overflow: "scroll",
				padding: 0,
				position: "absolute",
				bottom: 0,
				right: 10
			},

			bottomBar: {
				padding: 20,
				borderTop: "1px solid #eee",
				width: "calc(100%-40px)",
				height: 36,
				position: "relative"
			},

			buttonContainer: {
				width: "25%",
				float: "right"
			},

			buttonGroupContainer: {
				//width: "65%",
				float: "left",
				margin: 0
			},

			topBar: {
				background: "#4d4d4e",
				float: "left",
				width: "100%",

				":hover": {
					cursor: "move"
				}
			},

			profilePickerBar: {
				background: "#eee",
				float: "left",
				width: "100%",
			},

			profPickerMenu: {
				position: "absolute",
				top: 76,
				left: 0,
				zIndex: 4000
			},

			menuWithToken: {
				position: "absolute",
				top: 84,
				left: 0,
				zIndex: 4000
			},

			messageTypeDisplay: {
				fontFamily: "Proxima Nova",
				background: "#4d4d4d",
				padding: 10,
				float: "left",
				color: "#fff"
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
				maxHeight: 280,
				overflow: "scroll"
			},

			minToolContainer: {
				padding: "0px 20px 20px 20px",
			},

			filterContain: {
				margin: "0px 0px 10px 0px"
			},

			checkboxContain: {
				float: "left",
				margin: "0px 10px 0px 0px",
			},

			label: {
				fontFamily: "Proxima Nova",
				fontSize: 16,
				color: "#333",
			},

			mediaList: {
				padding: 0,
				margin: 0,
			},

			mediaItem: {
				listStyle: "none",
				display: "inline-block",
				fontSize: 38,
				color: "#b3b3b3",
				margin: "0px 30px 0px 0px",
				textAlign: "center",

				":hover": {
					color: "rgb(23, 184, 206)",
					cursor: "pointer"
				}
			},

			mediaLabel: {
				fontFamily: "Proxima Nova",
				fontSize: 16,
				color: "#333",
				marginBottom: 0
			},

			draftContainer: {
				float: "right",
				margin: "0px 10px 0px 0px",
				width: "16%"
			},

			draftContainerMin: {
				float: "right",
				margin: "0px 10px 0px 0px",
				//width: "16%",
				padding: 8,
				border: "1px solid #fff",
				borderRadius: 3,

				":hover": {
					border: "1px solid rgb(23, 184, 206)",
					cursor: "pointer"
				}
			},

			queueRadioContain: {
				float: "left",
				width: "25%"
			},

			queueMessageContain: {
				float: "left",
				margin: "0px 0px 0px 30px",
				width: "calc(75% - 30px)"
			},

			yourToolbar: {
				padding: 10,
				border: "2px dashed #eee",
				float: "left"
			},

			additionalTools: {
				padding: 10,
				border: "2px dashed #eee",
				float: "left",
				margin: "0px 0px 0px 20px"
			},

			datePickerInputContain: {
				margin: "10px 0px 20px 0px",
				float: "left"
			},

			h3: {
				textTransform: "uppercase",
				letterSpacing: "0.1em",
				fontSize: 12,
				fontWeight: 600,
				color: "#b3b3b3",
				fontFamily: "Proxima Nova",
				margin: "0px 0px 10px 0px"
			},

			queueTimes: {
				fontFamily: "Proxima Nova",
				fontSize: 14,
				fontWeight: 300,
				lineHeight: "21px",
				color: "#4d4d4d",
				margin: "10px 0px 0px 0px"
			},

			minDraftIcon: {
				color: "rgb(23, 184, 206)"
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

		var isMinimized = this.state.isMinimized;

		return(
			<Draggable handle=".handle" axis={isMinimized ? "x" : "both"} bounds={"html"} position={isMinimized ? this.state.position : null}>
				<div style={this.state.isMinimized ? style.minimize : style.container}>
					<div style={style.topBar} className="handle">
						<div style={style.messageTypeDisplay}>
							{this.state.messageType + " " + "New Message"}
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
						{ (this.state.isMinimized) ?
							<div style={style.draftContainerMin} key="draftContainer" onClick={this.draft}> 
								<i style={style.minDraftIcon} className="fa fa-file-text" aria-hidden="true"></i>
							</div> :
							<div style={style.draftContainer} key="draftContainer" onClick={this.draft}>
								<TextLink textLinkName="Save Draft" />
							</div>
						}
						<div style={style.buttonGroupContainer}>
							{
								this.state.showTip ? <InfoTip tipPosition={this.state.tipPosition} featureDescription={this.state.tipDescription} /> : null
							}
							<ButtonGroup 
								key="six" 
								content={this.state.defaultTools} 
								showTip={this.showTip} 
								showTool={this.showToolChangeMessage} 
								activeTool={this.state.activeTool}
								enableSchedule={this.state.enableSchedule}
								enableQueue={this.state.enableQueue}
							/>
						</div>
					</div>
					<div>
						{
							this.state.showTool ? 
								<div style={this.state.isMinimized ? style.minToolContainer : style.toolContainer}>
									{(this.state.activeTool === "Schedule") ?
										<div> 
											<MediumHeadline headline="Scheduling Options" />
											<DatePicker 
												selected={this.state.scheduleStartDate}
												onChange={this.changeScheduleDate}
												inline
												todayButton={"Today"}
												className="inputStyle"
											/>
										</div> : 
									null}
									{(this.state.activeTool === "Queue") ? 
										<div>
											<MediumHeadline headline="Queue Options" />
											<div style={style.queueRadioContain}>
												<Radio 
													options={this.props.queueOptions} 
													radioActive={this.state.radioActive} 
													onClick={this.queueNextLast}
													button={true} 
												/>
												<div style={style.datePickerInputContain}>
													<DatePicker 
														selected={this.state.queueStartDate}
														onChange={this.changeQueueDate}
														todayButton={"Today"}
														className="inputStyle"
														placeholderText="Choose Date"
														fixedHeight
													/>
												</div>
												<h3 style={style.h3}>Everyday</h3>
												<p style={style.queueTimes}>{this.props.queueTimes}</p>
											</div>
											<div style={style.queueMessageContain}>
												<h3 style={style.h3}>Next Two Messages</h3>
												<Message message={this.props.messages} />
											</div>
										</div> : 
									null}
									{(this.state.activeTool === "Media") ?
										<div> 
											<MediumHeadline headline="Media" />
											<ul style={style.mediaList}>
												<li style={style.mediaItem} key="listImage">
													<i className="fa fa-file-image-o" aria-hidden="true"></i>
													<p style={style.mediaLabel}>Upload Image</p>
												</li>
												<li style={style.mediaItem} key="listLibrary">
													<i className="fa fa-bank" aria-hidden="true"></i>
													<p style={style.mediaLabel}>Asset Library</p>
												</li>
											</ul> 
										</div> : 
									null}
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
									{(this.state.activeTool === "More Options") ?
										<div> 
											<MediumHeadline headline="More Options" />
											<Tabs options={this.state.addtionalOptions} onClick={this.chooseAdditionalOption} selectedTab={this.state.additionalOptionSelected}/>
												<div style={style.yourToolbar}>
													<h3 style={style.h3}>Your Toolbar</h3>
													<ButtonGroup 
														key="sortableButtonGroup" 
														content={this.state.defaultTools} 
													/>
												</div>
												<div style={style.additionalTools}>
													<h3 style={style.h3}>More Tools</h3>
													<ButtonGroup 
														key="sortableButtonGroupOverflow" 
														content={this.state.toolOverflow} 
													/>
												</div>
										</div> : 
									null}
								</div> 
							: null
						}
					</div>
				</div>
			</Draggable>
		);
	}

});

export default Radium(Container);