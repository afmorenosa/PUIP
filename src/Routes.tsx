import React from "react";
import Product from "./components/product";
import ContentWrapper from "./components/common/ContentWrapper";

const Routes = [
  {
    "name": "Home",
    "route": "/",
    "icon": "fas fa-home",
    "component": <ContentWrapper title="Home" />
  },
  {
    "name": "Product",
    "route": "/product",
    "icon": "fas fa-boxes",
    "subroutes": [
      {
        "name": "New Product",
        "route": "/create",
        "icon": "fas fa-plus",
        "component": <Product.Create />
      }
    ]
  }
];

export default Routes;
