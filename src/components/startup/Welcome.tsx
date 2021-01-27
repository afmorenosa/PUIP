import React, { Component } from "react";
import {
  Form,
  InputGroup,
  Button
} from "react-bootstrap";
import Card from "../common/Card";
import jValidateOpt from "../../helpers/jQueryValidation";

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    window.$("#create-new-business-form").validate({
      messages: {
        name: {
          required: "Insert the business name"
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
    this.props.onNew(1, this.state);

    event.preventDefault();
  }

  handleClose() {
    this.props.onClose();
  }

  render() {
    return (
      <Card className="card-primary">
        <Card.Header className="text-center">
          <a className="h1"><b>PUIP</b></a>
        </Card.Header>
        <Card.Body>
          <p className="login-box-msg">
            This is your first time?
          </p>
          <p className="login-box-msg">
            Start by entering your business name
          </p>
          <Form id="create-new-business-form" onSubmit={this.handleSubmit}>
            <Form.Group controlId="business-name">
              <InputGroup>
                <Form.Control
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  placeholder="Name"
                  type="text"
                  required />
                <InputGroup.Append>
                  <InputGroup.Text>
                    <i className="fas fa-store"></i>
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
            <div className="text-right">
              <Button type="submit" variant="primary">
                Start
              </Button>
            </div>
          </Form>
          <div className="social-auth-links text-center mt-5">
            <Button onClick={this.handleOpen} block variant="secondary">
              Use an already created business
            </Button>
            <Button onClick={this.handleClose} block variant="danger">
              Close PUIP
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default Welcome;
