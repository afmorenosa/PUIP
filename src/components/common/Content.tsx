import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Container fluid>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default Content;
