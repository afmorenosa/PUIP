import React, { Component } from "react";
import { remote } from "electron";
import $ from "jquery";

const window = remote.getCurrentWindow();

class Header extends Component {
  constructor(props) {
    super(props);

    window.on("maximize", this.updateMaximizeButton);
    window.on("unmaximize", this.updateMaximizeButton);
  }

  render() {
    return (
      <nav className="main-header navbar navbar-expand navbar-light frame-titlebar">

        {/* Left Navbar Links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" role="button">
              <i className="fas fa-bars"></i>
            </a>
          </li>
        </ul>

        {/* Global Search */}
        <form className="form-inline ml-3">
          <div className="input-group input-group-sm">
            <input className="form-control form-control-navbar"
                   type="search" placeholder="Search" />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>

        {/* Right Frame Links */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              id="frame-iconize"
              className="nav-link"
              role="button"
              onClick={this.handleIconizeButtonClick}>
              <i className="align-middle far fa-window-minimize"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              id="frame-maximize"
              className="nav-link"
              role="button"
              onClick={this.handleMaximizeButtonClick}>
              <i className="align-middle far fa-window-restore"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              id="frame-close"
              className="nav-link"
              role="button"
              onClick={this.handleCloseButtonClick}>
              <i className="align-middle far fa-window-close"></i>
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  handleCloseButtonClick() {
    window.close();
  }

  handleMaximizeButtonClick() {
    if (window.isMaximized()) {
      window.unmaximize();
    } else {
      window.maximize();
    }
  }

  updateMaximizeButton() {
    if (window.isMaximized()) {
      $("#frame-maximize")
        .find($(".fa-window-maximize"))
        .removeClass("fa-window-maximize")
        .addClass("fa-window-restore");
    } else {
      $("#frame-maximize")
        .find($(".fa-window-restore"))
        .removeClass("fa-window-restore")
        .addClass("fa-window-maximize");
    }
  }

  handleIconizeButtonClick() {
    window.minimize();
  }
}

export default Header;
