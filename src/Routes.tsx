import React from "react";
import Dashboard from "./components/dashboard";
import Product from "./components/product";

const Routes = {
  home: {
    name: "Home",
    show: true,
    route: "/",
    icon: "fas fa-home",
    component: Dashboard
  },
  product: {
    name: "Product",
    show: true,
    route: "/product",
    icon: "fas fa-boxes",
    subroutes: {
      all: {
        name: "All Products",
        show: true,
        route: "/all",
        icon: "fas fa-pallet",
        component: Product.All
      },
      new: {
        name: "New Product",
        show: true,
        route: "/create",
        icon: "fas fa-plus",
        component: Product.Create
      },
      detail: {
        name: "Product Detail",
        show: false,
        route: "/detail/:id",
        component: Product.Detail
      }
    }
  }
};

function getRoute(route, id = null) {
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

  if (id !== null) {
    parsedRoute = parsedRoute.replace(":id", id);
  }

  return parsedRoute;
};

export {Routes, getRoute};

export default Routes;
