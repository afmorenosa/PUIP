import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class ContentHeader extends Component {
  render() {
    return (
      <div className="content-header">
        <Container fluid>
          <Row mb="2">
            <Col className="col">
              <h1 className="m-0">{this.props.children}</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ContentHeader;
