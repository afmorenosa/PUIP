import React, { Component } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  InputGroup
} from "react-bootstrap";
import ContentWrapper from "../common/ContentWrapper";
import Card from "../common/Card";
import $ from "jquery";

class ProductCreate extends Component {
  componentDidMount() {
    $(".form-control-file").fileinput({
      language: "en",
      theme: "fas"
    });
  }

  render() {
    return (
      <ContentWrapper title="New Product">
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
                  <Form.Control type="text"/>
                </Form.Group>
                <Form.Group controlId="product-detail">
                  <Form.Label>Product Detail</Form.Label>
                  <Form.Control as="textarea" rows="4" />
                </Form.Group>
                <Form.Group controlId="product-code">
                  <Form.Label>Product Code</Form.Label>
                  <Form.Control type="text" />
                  <Form.Text className="text-muted">
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
                    data-preview-file-type="image"
                    data-browse-on-zone-click="true" />
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
                    <Form.Control type="number" min="0" />
                  </InputGroup>
                  <Form.Text className="text-muted">
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
                    <Form.Control type="number" min="0" />
                  </InputGroup>
                  <Form.Text className="text-muted">
                    Here goes the price at which you plan to sell the product.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="product-tax">
                  <Form.Label>Product Tax</Form.Label>
                  <InputGroup>
                    <Form.Control type="number" min="0" />
                    <InputGroup.Append>
                      <InputGroup.Text>%</InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                  <Form.Text className="text-muted">
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
                  <Form.Control type="number" min="0" />
                  <Form.Text className="text-muted">
                    Here goes the initial or actuall quantity of product that you own.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="product-storing-detail">
                  <Form.Label>Product Location Details</Form.Label>
                  <Form.Control as="textarea" rows="4" />
                  <Form.Text className="text-muted">
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
            <Button type="button" variant="success" className="float-right">
              Create New Product
            </Button>
          </Col>
        </Row>
      </ContentWrapper>
    );
  }
}

export default ProductCreate;
