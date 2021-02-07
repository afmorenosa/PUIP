import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/layout";
import Routes from "./Routes";
import StartUp from "./components/startup";
import Admin from "./components/admin";
import config from "./config";
import fs from "fs";

class App extends Component {
  constructor(props) {
    super(props);

    let isFirstTime = true;

    if (config.hasKey("lastFile") && fs.existsSync(config.getKey("lastFile"))) {
      isFirstTime = false;
    }

    this.state = {
      isFirstTime: isFirstTime,
      createNewFile: false
    };

    this.handleLoad = this.handleLoad.bind(this);
  }

  handleLoad() {
    this.setState({
      createNewFile: true,
      isFirstTime: false
    });
  };

  render() {
    if (this.state.isFirstTime) {
      return (
        <StartUp handleLoad={this.handleLoad} />
      );
    }

    return (
      <Admin isFileCreate={this.state.createNewFile}/>
    );
  }
}

export default App;
