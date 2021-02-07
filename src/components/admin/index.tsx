import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Layout from "../layout";
import Routes from "../../Routes";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadSidebarPlugins: props.isFileCreate
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
          Object.values(route.subroutes).map((route) => {
            return getList(route, fullRoute);
          })
        );
      }
    };

    return Object.values(Routes).map((route) => { return getList(route, ""); });
  }

  componentDidMount() {
    document.body.classList =
      "hold-transition sidebar-mini layout-fixed " +
      "layout-navbar-fixed layout-footer-fixed";
    window.$("body").Layout("fixLayoutHeight");
  }

  render() {
    return (
      <div className="wrapper">
        <HashRouter>
          <Layout.Header />
          <Layout.MainSidebar loadPlugins={this.state.loadSidebarPlugins} />
          <Switch>
            {this.renderPageList()}
          </Switch>
          <Layout.Footer />
        </HashRouter>
      </div>
    );
  }
}

export default Admin;
