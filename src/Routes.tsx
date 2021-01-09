import React from "react";

const Routes = [
  {
    "name": "Home",
    "route": "/",
    "icon": "fas fa-home",
    "component": <div></div>
  },
  {
    "name": "Product",
    "route": "/product",
    "icon": "fas fa-boxes",
    "subroutes": [{
      "name": "New Product",
      "route": "/create",
      "icon": "fas fa-plus",
      "component": <div>Works?</div>
    }]
  }
];

export default Routes;
