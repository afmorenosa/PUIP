import React from "react";
import ProductCreate from "./components/product/Create";
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
        "component": <ProductCreate />
      }
    ]
  }
];

export default Routes;
