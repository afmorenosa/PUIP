import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup
} from "react-bootstrap";
import ContentWrapper from "../common/ContentWrapper";
import Card from "../common/Card";
import db from "../../databases";
import fs from "fs";

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null,
      imageUrl: ""
    };

    new db.Product({id: props.match.params.id}).fetch().then((product) => {
      console.log(product.get("image"));
      var blob = new window.Blob([product.get("image")], {type: "image/png"});
      var url = window.URL.createObjectURL(blob);
      this.setState({
        product: product,
        imageUrl: url
      });
    });;
  }

  render () {
    if (this.state.product === null) {
      return (
        <ContentWrapper title="Product Detail Loading" />
      );
    }

    return (
      <ContentWrapper title="Product Detail">
        <Row>
          <Col md="3">
            <Card className="card-primary card-outline">
              <Card.Body className="box-profile">
                <div className="text-center">
                  <img
                    className="profile-user-img img-fluid img-square"
                    style={{width: "200px"}}
                    src={this.state.imageUrl} />
                </div>
                <h3 className="profile-username text-center">
                  {this.state.product.get("name")}
                </h3>
                <p className="text-muted text-center">
                  {this.state.product.get("detail")}
                </p>
                <ListGroup variant="unbordered">
                  <ListGroup.Item>
                    <b>ID</b>
                    <a className="float-right">
                      {this.state.product.get("id")}
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Code</b>
                    <a className="float-right">
                      {this.state.product.get("code")}
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Cost</b>
                    <a className="float-right">
                      {this.state.product.get("cost")}
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Price</b>
                    <a className="float-right">
                      {this.state.product.get("price")}
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Tax</b>
                    <a className="float-right">
                      {this.state.product.get("tax") * 100}
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Quantity</b>
                    <a className="float-right">
                      {this.state.product.get("quantity")}
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Storing</b>
                    <a className="float-right">
                      {this.state.product.get("storing")}
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3"></Col>
        </Row>
      </ContentWrapper>
    );
  }
}

export default ProductDetail;
