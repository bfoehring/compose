import React from "react";
import Radium from "radium";

const Message = React.createClass({
	render() {

		const style = {

			messageList: {
				margin: 0,
				padding: 0
			},

			messageItem: {
				margin: "20px 0px 0px 0px",
				borderTop: "1px solid #eee",
				paddingTop: 20
			},

			messageFirstChild: {
				margin: 0,
				borderTop: "1px solid #eee",
				paddingTop: 20
			},

			message: {
				fontFamily: "Proxima Nova",
				fontSize: 14,
				color: "#4d4d4d",
				lineHeight: "21px",
				margin: "0px 0px 10px 0px"
			},

			byline: {
				margin: 0,
				padding: 0
			},

			bylineItem: {
				listStyle: "none",
				display: "inline",
				margin: "0px 0px 0px 5px",
				fontFamily: "Proxima Nova",
				fontSize: 14,
				color: "#808080",
				fontWeight: 300
			},

			bylineItemFirst: {
				listStyle: "none",
				display: "inline",
				margin: "0px 0px 0px 0px",
				fontFamily: "Proxima Nova",
				fontSize: 14,
				color: "#808080",
				fontWeight: 300
			},

			twitter: {
				color: "rgb(85, 172, 238)"
			}
		};

		return (
			<ul style={style.messageList}>
				{
					this.props.message.map(
						function(content, i) {

							const key = content.profile + "-" + content.user + "-" + i + "message";
							const messageFirstChild = (i === 0) ? style.messageFirstChild : style.messageItem;
							var networkColor = "";

							if(content.network === "fa fa-twitter-square") {
								networkColor = style.twitter;
							}

							return (
								<div style={messageFirstChild} key={key}>
									<p style={style.message}>{content.message}</p>
									<ul style={style.byline}>
										<li style={style.bylineItemFirst}><i style={networkColor} className={content.network}></i></li>
										<li style={style.bylineItem}>{content.profile}</li>
										<li style={style.bylineItem}>{content.date}</li>
										<li style={style.bylineItem}>{content.time}</li>
										<li style={style.bylineItem}>{"by" + " " + content.user}</li>
									</ul>
								</div>
							);
						}
					)
				}
			</ul>
		);
	}
});

export default Radium(Message);