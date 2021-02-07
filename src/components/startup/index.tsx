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
        id: 0,
        name: "",
        address: "",
        city: "",
        postalCode: "",
        phone: "",
        email: ""
      }
    };

    this.handleNew = this.handleNew.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  componentDidMount() {
    document.body.classList = "hold-transition login-page";
    window.$("body").Layout("fixLoginRegisterHeight");
  }

  handleNew(step, business) {
    this.setState({
      step: step,
      business: business
    });
  }

  handleUpload() {
    let databasePath = remote.dialog.showOpenDialogSync({
      title: "Open a PUIP file",
      filters: [
        { name: "PUIP Business File", extensions: ["puip"] }
      ]
    });

    if (databasePath == undefined) {
      return;
    }

    db.loadFile(databasePath[0]);
    db.migrate().then(() => {
      db.loadModels();
    }).finally(() => {
      config.addToConfig("lastFile", databasePath[0]);
      this.props.handleLoad();
    });
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
      config.addToConfig("lastFile", databasePath);
      this.props.handleLoad();
    });
  }

  handleClose() {
    rendererWindow.close();
  }

  render() {
    return (
      <div className="login-box">
        {
          {
            0: <Welcome
                 business={this.state.business}
                 onNew={this.handleNew}
                 onUpload={this.handleUpload}
                 onClose={this.handleClose} />,
            1: <Address
                 business={this.state.business}
                 onContinue={this.handleNew}
                 onClose={this.handleClose} />,
            2: <Contact
                 business={this.state.business}
                 onContinue={this.handleNew}
                 onClose={this.handleClose} />,
            3: <Confirmation
                 business={this.state.business}
                 onReset={this.handleNew}
                 onCreate={this.handleCreate}
                 onClose={this.handleClose} />
          }[this.state.step]
        }
      </div>
    );
  }
}

export default StartUp;
