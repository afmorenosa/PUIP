import React, { Component } from "react";
import $ from "jquery";

class MainSidebar extends Component {
  componentDidMount() {
    // We should activate by our own the scrollbars in the sidebar as
    // React doesn't do that
    $(".sidebar").overlayScrollbars({
      className: "os-theme-light",
      scrollbars: {
        autoHide: "leave"
      }
    });
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
          <nav className="mt-2">
            <ul className="nav nav-child-indent nav-flat nav-pills nav-sidebar flex-column"
                data-widget="treeview" role="menu" data-accordion="false">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  <i className="nav-icon fas fa-home"></i>
                  <p>Home</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" role="button">
                  <i className="nav-icon fas fa-boxes"></i>
                  <p>
                    Inventory
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a className="nav-link" href="#products">
                      <i className="nav-icon fas fa-plus"></i>
                      <p>New Product</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}

export default MainSidebar;
