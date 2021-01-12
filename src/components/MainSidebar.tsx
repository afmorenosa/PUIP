import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Routes from "../Routes";

class MainSidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadedPage: props.location.pathname
    };

    this.handleChangePage = this.handleChangePage.bind(this);
    this.renderLinkList = this.renderLinkList.bind(this);
  }

  componentDidMount() {
    // We should activate by our own the scrollbars in the sidebar as
    // React doesn't do that
    window.$(".sidebar").overlayScrollbars({
      className: "os-theme-light",
      scrollbars: {
        autoHide: "leave"
      }
    });

    let item = window.$(".sidebar").find(".active");

    item
      .parent()
      .parents(".nav-item")
      .addClass("menu-open")
      .children(".nav-link")
      .addClass("active");
  }

  handleChangePage(event) {
    let item = window.$(event.currentTarget);
    this.setState(
      {
        loadedPage: event.currentTarget.href.split("#")[1]
      },
      () => {
        window.$(".sidebar *").removeClass("active");
        item.addClass("active");
        item
          .parent()
          .parents(".menu-open")
          .children(".nav-link")
          .addClass("active");
      }
    );
  }

  renderLinkList() {
    let sidebar = this;

    const getList = function(route, parentRoute) {
      let link;
      let fullRoute = parentRoute + route.route;

      if(route.subroutes == undefined) {
        link = (
          <li className="nav-item" key={fullRoute}>
            <Link
              className={
                "nav-link" +
                  (sidebar.state.loadedPage == fullRoute ? " active" : "")
              }
              to={fullRoute}
              onClick={sidebar.handleChangePage}
              replace>
              <i className={"nav-icon " + route.icon}></i>
              <p>{ route.name }</p>
            </Link>
          </li>
        );
      } else {
        link = (
          <li className="nav-item" key={fullRoute}>
            <a role="button" className="nav-link">
              <i className={"nav-icon " + route.icon}></i>
              <p>
                { route.name }
                <i className="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
              {
                route.subroutes.map((route) => {
                  return getList(route, fullRoute);
                })
              }
            </ul>
          </li>
        );
      }

      return link;
    };

    return Routes.map((route) => { return getList(route, ""); });
  }

  render() {
    return (
      <aside className="main-sidebar sidebar-dark-primary">

        {/* PUIP Logo */}
        <a className="brand-link frame-titlebar">
          <span className="brand-text font-weight-light">PUIP</span>
        </a>

        {/* Sidebar */}
        <div className="sidebar">

          {/* Sidebar Search Form */}
          <form className="form-inline">
            <div className="input-group mt-3" data-widget="sidebar-search">
              <input className="form-control form-control-sidebar"
                     type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw"></i>
                </button>
              </div>
            </div>
          </form>

          {/* Sidebar Menu */}
          <nav className="mt-3">
            <ul className="nav nav-child-indent nav-flat nav-pills nav-sidebar flex-column"
                data-widget="treeview" role="menu" data-accordion="false">
              {this.renderLinkList()}
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}

export default withRouter(MainSidebar);
