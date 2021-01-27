import React, { Component } from "react";
import { remote } from "electron";
import Welcome from "./Welcome";
import Address from "./Address";
import Contact from "./Contact";

const rendererWindow = remote.getCurrentWindow();

class StartUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNew = this.handleNew.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleNew(step, business) {
    this.setState({
      step: step,
      ...business
    });
  }

  handleOpen() {
    alert("Click open");
  }

  handleClose() {
    rendererWindow.close();
  }

  render() {
    switch (this.state.step) {
    case 1:
      return (
        <Address
          name={this.state.name}
          onContinue={this.handleNew}
          onClose={this.handleClose} />
      );

    case 2:
      return (
        <Contact
          name={this.state.name} />
      );

    default:
      return (
        <Welcome
          onNew={this.handleNew}
        /* onUpload={this.handleUpload} */
          onClose={this.handleClose} />
      );
    }
  }
}

export default StartUp;
