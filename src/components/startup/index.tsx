import React, { Component } from "react";
import { remote } from "electron";
import Welcome from "./Welcome";
import Address from "./Address";
import Contact from "./Contact";
import Confirmation from "./Confirmation";
import path from "path";
import fs from "fs";
import config from "../../config";
import db from "../../databases";

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
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleNew(step, business) {
    this.setState({
      step: step,
      business: business
    });
  }

  handleUpload() {
    alert("Click open");
  }

  handleCreate() {
    let databasePath = remote.dialog.showSaveDialogSync({
      title: "Create a new PUIP file",
      filters: [
        { name: "PUIP Business File", extensions: ["puip"] }
      ]
    });

    if (databasePath == undefined) {
      return;
    }

    if(fs.existsSync(databasePath)) {
      fs.unlinkSync(databasePath);
    }

    db.loadFile(databasePath);
    db.migrate().then(() => {
      db.loadModels();
      db.bsdb.knex.insert([this.state.business]).into("business")
        .then();
    }).finally(() => {
      config.addToConfig("last_file", databasePath);
      this.props.handleCreate();
    });
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
          onCreate={this.handleCreate}
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
