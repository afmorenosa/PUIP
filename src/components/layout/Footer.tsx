import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">

        {/* Footer Right Side */}
        <div className="float-right d-sm-inline">
          PUIP
        </div>

        {/* Footer Left Side */}
        <div>
          Here goes the PUIP actual status.
        </div>
      </footer>
    );
  }
}

export default Footer;
