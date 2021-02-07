import React from "react";
import Dashboard from "./components/dashboard";
import Product from "./components/product";

const Routes = {
  home: {
    name: "Home",
    route: "/",
    icon: "fas fa-home",
    component: <Dashboard />
  },
  product: {
    name: "Product",
    route: "/product",
    icon: "fas fa-boxes",
    subroutes: {
      new: {
        name: "New Product",
        route: "/create",
        icon: "fas fa-plus",
        component: <Product.Create />
      },
      all: {
        name: "All Products",
        route: "/all",
        icon: "fas fa-pallet",
        component: <Product.All />
      }
    }
  }
};

function getRoute(route) {
  var searcher = Routes;
  let parsedRoute = "";
  try {
    parsedRoute = route.split(".")
        .reduce((route, direction) => {
          if (searcher[direction] == undefined) {
            throw getRoute("home");
          }
          route = route + searcher[direction].route;
          searcher = searcher[direction].subroutes;
          return route;
        }, "");
  } catch (fallbackRoute) {
    parsedRoute = fallbackRoute;
  }

  return parsedRoute;
};

export {Routes, getRoute};

export default Routes;
