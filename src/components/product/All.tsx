import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  Table,
  ButtonGroup
} from "react-bootstrap";
import { getRoute } from "../../Routes";
import ContentWrapper from "../common/ContentWrapper";
import Card from "../common/Card";
import db from "../../databases";

class ProductAll extends Component {
  constructor(props) {
    super(props);

    let self = this;

    this.state = {
      products: []
    };

    console.log(db.bsdb);

    db.Product.fetchAll().then((products) => {
      self.setState({
        products: products
      });
    });
  }

  renderProducts() {
    return this.state.products.map((product) => {
      return (
        <tr key={product.get("id")}>
          <td>{product.get("id")}</td>
          <td>{product.get("name")}</td>
          <td>{product.get("code")}</td>
          <td>{product.get("cost")}</td>
          <td>{product.get("price")}</td>
          <td>{product.get("tax") * 100}</td>
          <td>{product.get("price") * (1 + product.get("tax"))}</td>
          <td>{product.get("quantity")}</td>
          <td>
            <ButtonGroup>
                <Link
                  to={getRoute("product.detail", product.get("id"))}
                  replace>
                  <Button variant="outline-info" size="xs">Detail</Button>
                </Link>
            </ButtonGroup>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <ContentWrapper title="All Products">
        <Row>
          <Col>
            <Card className="card-primary">
              <Card.Header>
                <Card.Title as="h3">Products List</Card.Title>
              </Card.Header>
              <Card.Body className="p-0 table-responsive">
                <Table striped hover id="products-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Code</th>
                      <th>Cost</th>
                      <th>Price</th>
                      <th>Tax</th>
                      <th>Total Price</th>
                      <th>Quantity</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderProducts()}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </ContentWrapper>
    );
  }
}

export default withRouter(ProductAll);
