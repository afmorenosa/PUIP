import React, { Component } from "react";
import {
  Form,
  InputGroup,
  Button
} from "react-bootstrap";
import Card from "../common/Card";
import jValidateOpt from "../../helpers/jQueryValidation";

class New extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      phone: "",
      email: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    window.$("#create-new-business-form").validate({
      messages: {
        phone: {
          required: "Insert a contact phone number"
        },
        email: {
          required: "Insert a contact email",
          email: "Please enter a valid email address"
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
    location.reload();

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
            Now define the contact information of your business
          </p>
          <Form id="create-new-business-form" onSubmit={this.handleSubmit}>
            <Form.Group controlId="business-phone">
              <InputGroup>
                <Form.Control
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleInputChange}
                  placeholder="Phone Number"
                  type="phone"
                  required />
                <InputGroup.Append>
                  <InputGroup.Text>
                    <i className="fas fa-phone"></i>
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="business-email">
              <InputGroup>
                <Form.Control
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  placeholder="Email"
                  type="email"
                  required />
                <InputGroup.Append>
                  <InputGroup.Text>
                    <i className="fas fa-envelope"></i>
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
            <div className="text-right">
              <Button type="submit" variant="success">
                Create
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

export default New;
