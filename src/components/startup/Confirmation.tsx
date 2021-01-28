import React, { Component } from "react";
import {
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  ListGroup
} from "react-bootstrap";
import Card from "../common/Card";
import jValidateOpt from "../../helpers/jQueryValidation";

class Confirmation extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.business;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleSubmit(event) {
    location.reload();

    event.preventDefault();
  }

  handleReset() {
    this.props.onReset(0, this.state);
  }

  handleClose() {
    this.props.onClose();
  }

  render() {
    return (
      <Card className="card-primary">
        <Card.Header className="text-center">
          <a className="h1"><b>{this.state.name}</b></a>
        </Card.Header>
        <Card.Body>
          <p className="login-box-msg">
            It's all the information correct?
          </p>
          <Form id="create-new-business-form" onSubmit={this.handleSubmit}>
            <ListGroup variant="unbordered" className="mb-3">
              <ListGroup.Item>
                <b>Address</b>
                <a className="float-right">{this.state.address}</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <b>City</b>
                <a className="float-right">{this.state.city}</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Postal Code</b>
                <a className="float-right">{this.state.postalCode}</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Phone</b>
                <a className="float-right">{this.state.phone}</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Email</b>
                <a className="float-right">{this.state.email}</a>
              </ListGroup.Item>
            </ListGroup>
            <Row>
              <Col>
                <Button onClick={this.handleReset} variant="warning">
                  No
                </Button>
              </Col>
              <Col className="text-right">
                <Button type="submit" variant="success">
                  Yes
                </Button>
              </Col>
            </Row>
          </Form>
          <div className="social-auth-links text-center mt-5">
            <Button onClick={this.handleClose} block variant="danger">
              Close PUIP
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default Confirmation;
