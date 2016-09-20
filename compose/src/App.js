import React from "react";
import SelectButton from "./selectbutton";
import List from "./list";
import Container from "./container";

const App = React.createClass({

  getDefaultProps() {
    return {
      selectButtonText: "Compose",
      socialNetworks: ["Twitter", "Facebook", "LinkedIn", "Google+"],
      networkIcon: "",
      iconColor: "",
    };
  },

  getInitialState() {
    return {
      isButtonClicked: false,
      showCompose: false,
    };
  },

  showMenu() {
    this.setState({
      isButtonClicked: !this.state.isButtonClicked,
    });
  },

  selectNetwork(e) {
    console.log(this);
    switch(e.currentTarget.id) {
      case "Twitter-list":
        this.setState({
          networkIcon: "fa fa-twitter-square",
          iconColor: "#00aced"
        });
        this.showCompose();
        break;
      case "Facebook-list":
        this.setState({
          networkIcon: "fa fa-facebook-square",
          iconColor: "#3b5998"
        });
        this.showCompose();
        break;
      case "LinkedIn-list":
        this.setState({
          networkIcon: "fa fa-linkedin-square",
          iconColor: "#007bb6"
        });
        this.showCompose();
        break;
      case "Google+-list":
        this.setState({
          networkIcon: "fa fa-google-plus-square",
          iconColor: "#dd4b39"
        });
        this.showCompose();
        break;
      default:
        this.showCompose();
        break;
    }
  },

  showCompose() {
    this.setState({
      isButtonClicked: !this.state.isButtonClicked,
      showCompose: true
    });
  },

  close() {
    this.setState({
      showCompose: false
    });
  },

  render() {

    const style = {
      composeButtonContainer: {
        float: "right",
      },

      selectButtonMenu: {
        position: "absolute",
        top: 50,
        right: 8
      }
    };

    return (
      <div>
        <div style={style.composeButtonContainer}>
          <SelectButton selectButtonText={this.props.selectButtonText} _onClick={this.showMenu} />
        </div>
        <div style={style.selectButtonMenu}>
          {this.state.isButtonClicked ? <List listItem={this.props.socialNetworks} handle={this.selectNetwork} /> : null}
        </div>
        {this.state.showCompose ? <Container _close={this.close} icon={this.state.networkIcon} iconColor={this.state.iconColor} /> : null}
      </div>
    );
  }

});

export default App;
