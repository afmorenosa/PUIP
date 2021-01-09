import React, { Component } from "react";
import { HashRouter, Switch, Route } from 'react-router-dom';
import Header from "./components/Header.tsx";
import MainSidebar from "./components/MainSidebar.tsx";
import Footer from "./components/Footer.tsx";
import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);

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

  render() {
    return (
      <>
        <HashRouter>
          <Header />
          <MainSidebar />
          <Switch >
            {this.renderPageList()}
          </Switch>
          <Footer />
        </HashRouter>
      </>
    );
  }
}

export default App;
