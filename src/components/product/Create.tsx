import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Row,
  Col,
  Form,
  Button,
  InputGroup
} from "react-bootstrap";
import ContentWrapper from "../common/ContentWrapper";
import Card from "../common/Card";
import { getRoute } from "../../Routes";
import db from "../../databases";
import jValidateOpt from "../../helpers/jQueryValidation";
import fs from "fs";

class ProductCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      detail: "",
      code: "",
      cost: "",
      price: "",
      tax: "",
      quantity: "",
      storing: ""
    };

    this.imageInput = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.$(".form-control-file").fileinput({
      language: "en",
      theme: "fas"
    });

    window.$("#create-product-form").validate({
      messages: {
        name: {
          required: "Insert a proper product name"
        },
        detail: {
          required: "Insert a brief description of the product"
        },
        code: {
          required: "Insert the code of the product",
          minlength: "The product code must have at least 3 characters"
        },
        cost: {
          required: "Insert the product cost",
          min: "The cost can't be negative"
        },
        price: {
          required: "Insert the product price",
          min: "The product price can't be negative"
        },
        tax: {
          required: "Insert the product tax",
          min: "THe product tax can't be negative"
        },
        image: {
          required: "Insert a product image"
        },
        quantity: {
          required: "Insert the product actual quantity",
          min: "The quantity can't be negative"
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
    this.setState(
      {
        image: fs.readFileSync(this.imageInput.current.files[0].path)
      },
      () => {
        new db.Product({
          name: this.state.name,
          detail: this.state.detail,
          code: this.state.code,
          image: this.state.image,
          cost: this.state.cost,
          price: this.state.price,
          tax: this.state.tax / 100,
          quantity: this.state.quantity,
          storing: this.state.storing || null
        }).save();

        this.props.history.push(getRoute("product.all"));
      }
    );

    event.preventDefault();
  }

  render() {
    return (
      <ContentWrapper title="New Product">
        <Form id="create-product-form" onSubmit={this.handleSubmit}>
          <Row>
            <Col lg="6">
              <Card className="card-primary">
                <Card.Header>
                  <Card.Title as="h3">General Information</Card.Title>
                  <Card.Tools>
                    <Button variant="tool" data-card-widget="collapse">
                      <i className="fas fa-minus" />
                    </Button>
                  </Card.Tools>
                </Card.Header>
                <Card.Body>
                  <Card.Text>Here goes all the basic product information.</Card.Text>
                  <Form.Group controlId="product-name">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                      name="name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      type="text"
                      required />
                  </Form.Group>
                  <Form.Group controlId="product-detail">
                    <Form.Label>Product Detail</Form.Label>
                    <Form.Control
                      name="detail"
                      value={this.state.detail}
                      onChange={this.handleInputChange}
                      as="textarea"
                      rows="4"
                      required />
                  </Form.Group>
                  <Form.Group controlId="product-code">
                    <Form.Label>Product Code</Form.Label>
                    <Form.Control
                      name="code"
                      value={this.state.code}
                      onChange={this.handleInputChange}
                      type="text"
                      minLength="3"
                      required />
                    <Form.Text muted>
                      It's highly encouraged to use the barcode of the product.
                    </Form.Text>
                  </Form.Group>
                </Card.Body>
              </Card>

              <Card className="card-warning">
                <Card.Header>
                  <Card.Title as="h3">Display Information</Card.Title>
                  <Card.Tools>
                    <Button variant="tool" data-card-widget="collapse">
                      <i className="fas fa-minus" />
                    </Button>
                  </Card.Tools>
                </Card.Header>
                <Card.Body>
                  <Card.Text>Here goes all the display information</Card.Text>
                  <Form.Group controlId="product-image">
                    <Form.Label>Product Image</Form.Label>
                    <Form.File.Input
                      name="image"
                      ref={this.imageInput}
                      data-preview-file-type="image"
                      data-browse-on-zone-click="true"
                      required />
                    <Form.Text muted>
                      Use a square sized image, it will be resized to
                      600x600 when uploaded.
                    </Form.Text>
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>

            <Col lg="6">
              <Card className="card-success">
                <Card.Header>
                  <Card.Title as="h3">Financial Information</Card.Title>
                  <Card.Tools>
                    <Button variant="tool" data-card-widget="collapse">
                      <i className="fas fa-minus"></i>
                    </Button>
                  </Card.Tools>
                </Card.Header>
                <Card.Body>
                  <Card.Text>Here goes the price and costs of the product.</Card.Text>
                  <Form.Group controlId="product-cost">
                    <Form.Label>Product Cost</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        name="cost"
                        value={this.state.cost}
                        onChange={this.handleInputChange}
                        type="number"
                        min="0"
                        step="any"
                        required />
                    </InputGroup>
                    <Form.Text muted>
                      Here goes the price at which the product is
                      purchased from the distributor.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="product-price">
                    <Form.Label>Product Price</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        name="price"
                        value={this.state.price}
                        onChange={this.handleInputChange}
                        type="number"
                        min="0"
                        step="any"
                        required />
                    </InputGroup>
                    <Form.Text muted>
                      Here goes the price at which you plan to sell
                      the product without taxes.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="product-tax">
                    <Form.Label>Product Tax</Form.Label>
                    <InputGroup>
                      <Form.Control
                        name="tax"
                        value={this.state.tax}
                        onChange={this.handleInputChange}
                        type="number"
                        min="0"
                        step="any"
                        required />
                      <InputGroup.Append>
                        <InputGroup.Text>%</InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
                    <Form.Text muted>
                      Here goes the product product tax percentage.
                    </Form.Text>
                  </Form.Group>
                </Card.Body>
              </Card>

              <Card className="card-info">
                <Card.Header>
                  <Card.Title as="h3">Storing Information</Card.Title>
                  <Card.Tools>
                    <Button variant="tool" data-card-widget="collapse">
                      <i className="fas fa-minus"></i>
                    </Button>
                  </Card.Tools>
                </Card.Header>
                <Card.Body>
                  <Card.Text>Here goes all the storing information</Card.Text>
                  <Form.Group controlId="product-quantity">
                    <Form.Label>Product Initial Inventory</Form.Label>
                    <Form.Control
                      name="quantity"
                      value={this.state.quantity}
                      onChange={this.handleInputChange}
                      type="number"
                      min="0"
                      required />
                    <Form.Text muted>
                      Here goes the initial or actuall quantity of product that you own.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="product-storing-detail">
                    <Form.Label>Product Location Details</Form.Label>
                    <Form.Control
                      name="storing"
                      value={this.state.storing}
                      onChange={this.handleInputChange}
                      as="textarea"
                      rows="4" />
                    <Form.Text muted>
                      Here goes the storing location of the product, in
                      case that needed. <br/>

                      E.G. First shelf, third section.
                    </Form.Text>
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="pb-3">
            <Col>
              <Button type="button" variant="danger">
                Cancel
              </Button>
              <Button type="submit" variant="success" className="float-right">
                Create New Product
              </Button>
            </Col>
          </Row>
        </Form>
      </ContentWrapper>
    );
  }
}

export default withRouter(ProductCreate);
