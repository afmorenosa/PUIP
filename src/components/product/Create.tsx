import React, { Component } from "react";
import ContentWrapper from "../common/ContentWrapper";
import Card from "../common/Card";

class ProductCreate extends Component {
  render() {
    return (
      <ContentWrapper title="New Product">
        <Card
          title="Test"
          color="red">
          <p className="card-text">Here goes all the basic product information.</p>
          <div className="form-group">
            <label>Product Name</label>
            <input id="product-name" className="form-control" type="text" />
          </div>
          <div className="form-group">
            <label>Product Detail</label>
            <textarea id="product-detail" className="form-control" rows="4"></textarea>
          </div>
          <div className="form-group">
            <label>Product Code</label>
            <input id="product-code" className="form-control" type="text" />
            <small className="form-text text-muted">
              It's highly encouraged to use the barcode of the product.
            </small>
          </div>
        </Card>
      </ContentWrapper>
    );
  }
}

export default ProductCreate;
