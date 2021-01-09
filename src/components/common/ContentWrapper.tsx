import React, { Component } from "react";
import ContentHeader from "./ContentHeader";
import Content from "./Content";

class ContentWrapper extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <ContentHeader title={this.props.title} />
        <Content>
          {this.props.children}
        </Content>
      </div>
    );
  }
}

export default ContentWrapper;
