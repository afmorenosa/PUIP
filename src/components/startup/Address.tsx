import React, { Component } from "react";
import {
  Form,
  InputGroup,
  Button
} from "react-bootstrap";
import Card from "../common/Card";
import jValidateOpt from "../../helpers/jQueryValidation";

class Address extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.business;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    window.$("#create-new-business-form").validate({
      messages: {
        address: {
          required: "Insert the address of your business"
        },
        city: {
          required: "Insert the city of your business"
        },
        postalCode: {
          required: "Insert the postal code of your business"
        }
      },
      ...jValidateOpt
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    this.props.onContinue(2, this.state);

    event.preventDefault();
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
            Let's continue defining the address of your business
          </p>
          <Form id="create-new-business-form" onSubmit={this.handleSubmit}>
            <Form.Group controlId="business-address">
              <InputGroup>
                <Form.Control
                  name="address"
                  value={this.state.address}
                  onChange={this.handleInputChange}
                  placeholder="Address"
                  type="text"
                  required />
                <InputGroup.Append>
                  <InputGroup.Text>
                    <i className="fas fa-map-marked-alt"></i>
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="business-city">
              <InputGroup>
                <Form.Control
                  name="city"
                  value={this.state.city}
                  onChange={this.handleInputChange}
                  placeholder="City"
                  type="text"
                  required />
                <InputGroup.Append>
                  <InputGroup.Text>
                    <i className="fas fa-city"></i>
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="business-postal-code">
              <InputGroup>
                <Form.Control
                  name="postalCode"
                  value={this.state.postalCode}
                  onChange={this.handleInputChange}
                  placeholder="Postal Code"
                  type="number"
                  required />
                <InputGroup.Append>
                  <InputGroup.Text>
                    <i className="fas fa-mail-bulk"></i>
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
            <div className="text-right">
              <Button type="submit" variant="primary">
                Continue
              </Button>
            </div>
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

export default Address;
