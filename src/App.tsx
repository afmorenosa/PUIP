import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/layout";
import Routes from "./Routes";
import StartUp from "./components/startup";
import config from "./config";
import fs from "fs";
import db from "./databases";

class App extends Component {
  constructor(props) {
    super(props);

    let isFirstTime = true;

    if (config.hasKey("last_file") && fs.existsSync(config.getKey("last_file"))) {
      isFirstTime = false;
    }

    this.state = {
      isFirstTime: isFirstTime
    };

    this.renderPageList = this.renderPageList.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }

  renderPageList() {
    const getList = function(route, parentRoute) {
      let link;
      let fullRoute = parentRoute + route.route;

      if(route.subroutes == undefined) {
        return (
          <Route
            key={fullRoute}
            exact path={fullRoute}>
            {route.component}
          </Route>
        );
      } else {
        return (
          route.subroutes.map((route) => {
            return getList(route, fullRoute);
          })
        );
      }
    };

    return Routes.map((route) => { return getList(route, ""); });
  }

  componentDidMount() {
    if (this.state.isFirstTime) {
      document.body.classList = "hold-transition login-page";

      window.$("#wrapper").get(0).classList = "login-box";

      window.$("body").Layout("fixLoginRegisterHeight");
    } else {
      document.body.classList =
        "hold-transition sidebar-mini layout-fixed " +
        "layout-navbar-fixed layout-footer-fixed";

      window.$("#wrapper").get(0).classList = "wrapper";

      window.$("body").Layout("fixLayoutHeight");

      window.$("[data-widget=treeview]").Treeview("init");
    }
  }

  componentDidUpdate() {
    if (this.state.isFirstTime) {
      document.body.classList = "hold-transition login-page";

      window.$("#wrapper").get(0).classList = "login-box";

      window.$("body").Layout("fixLoginRegisterHeight");
    } else {
      document.body.classList =
        "hold-transition sidebar-mini layout-fixed " +
        "layout-navbar-fixed layout-footer-fixed";

      window.$("#wrapper").get(0).classList = "wrapper";

      window.$("body").Layout("fixLayoutHeight");

      window.$("[data-widget=treeview]").Treeview("init");
    }
  }

  handleLoad() {
    this.setState({
      isFirstTime: false
    });
  };

  render() {
    if (this.state.isFirstTime) {
      return (
        <StartUp handleLoad={this.handleLoad}/>
      );
    }

    return (
      <>
        <HashRouter>
          <Layout.Header />
          <Layout.MainSidebar />
          <Switch>
            {this.renderPageList()}
          </Switch>
          <Layout.Footer />
        </HashRouter>
      </>
    );
  }
}

export default App;
