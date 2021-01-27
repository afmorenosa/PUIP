import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
// import Layout from "./components/layout";
// import Routes from "./Routes";
import StartUp from "./components/startup";
import db from "./Database";

class App extends Component {
  constructor(props) {
    super(props);

    this.status = {
      isFirstTime: true
    };

    this.renderPageList = this.renderPageList.bind(this);
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

  componentDidMount () {
    if (this.status.isFirstTime) {
      document.body.classList = "hold-transition login-page";

      document.body.style = "";

      $("#wrapper").get(0).classList = "login-box";
    } else {
      document.body.classList =
        "hold-transition sidebar-mini layout-fixed " +
        "layout-navbar-fixed layout-footer-fixed";

      $("#wrapper").get(0).classList = "wrapper";
    }
  }

  render() {
    if (this.status.isFirstTime) {
      return (
        <StartUp />
      );
    }

    return (
      <>
        <HashRouter>
          <Layout.Header />
          <Layout.MainSidebar />
          <Switch >
            {this.renderPageList()}
          </Switch>
          <Layout.Footer />
        </HashRouter>
      </>
    );
  }
}

export default App;
