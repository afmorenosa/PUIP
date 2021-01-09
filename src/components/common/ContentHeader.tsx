import React, { Component } from "react";

class ContentHeader extends Component {
  render() {
    return (
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col">
              <h1 className="m-0">{this.props.title}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentHeader;
