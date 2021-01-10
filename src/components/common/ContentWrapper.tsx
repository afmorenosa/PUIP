import React, { Component } from "react";
import ContentHeader from "./ContentHeader";
import Content from "./Content";

class ContentWrapper extends Component {
  componentDidMount() {
    window.$(".content-wrapper").overlayScrollbars({
      sizeAutoCapable : true,
      paddingAbsolute : true,
      autoUpdate: true,
      scrollbars: {
        autoHide: "scroll"
      }
    });
  }

  render() {
    return (
      <div className="content-wrapper">
        <ContentHeader>{this.props.title}</ContentHeader>
        <Content>
          {this.props.children}
        </Content>
      </div>
    );
  }
}

export default ContentWrapper;
