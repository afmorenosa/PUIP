import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./App.global.scss";
import "bootstrap";
import "admin-lte";
import "admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars";
import jQuery from "jquery";
// export for others scripts to use
window.$ = window.jQuery = jQuery;
const $ = jQuery;

render(<App />, $(".wrapper")[0]);
