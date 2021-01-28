import React, { Component } from "react";
import { remote } from "electron";
import Welcome from "./Welcome";
import Address from "./Address";
import Contact from "./Contact";
import Confirmation from "./Confirmation";

const rendererWindow = remote.getCurrentWindow();

class StartUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      business: {
        name: "",
        address: "",
        city: "",
        postalCode: "",
        phone: "",
        email: ""
      }
    };

    this.handleNew = this.handleNew.bind(this);
  }

  handleNew(step, business) {
    this.setState({
      step: step,
      business: business
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
          business={this.state.business}
          onContinue={this.handleNew}
          onClose={this.handleClose} />
      );

    case 2:
      return (
        <Contact
          business={this.state.business}
          onContinue={this.handleNew}
          onClose={this.handleClose} />
      );

    case 3:
      return (
        <Confirmation
          business={this.state.business}
          onReset={this.handleNew}
          onClose={this.handleClose} />
      );

    default:
      return (
        <Welcome
          business={this.state.business}
          onNew={this.handleNew}
        /* onUpload={this.handleUpload} */
          onClose={this.handleClose} />
      );
    }
  }
}

export default StartUp;
