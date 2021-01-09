import React, { Component } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import ContentWrapper from "../common/ContentWrapper";
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
              </Card.Header>
              <Card.Body>
                <Card.Text>Here goes all the display information</Card.Text>
                <Form.Group controlId="product-image">
                  <Form.Label>Product Image</Form.Label>
                  <Form.File.Input data-preview-file-type="image" />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </ContentWrapper>
    );
  }
}

export default ProductCreate;
