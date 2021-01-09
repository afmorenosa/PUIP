import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./App.global.scss";
import "bootstrap";
import "admin-lte";
import "admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars";
import $ from "jquery";
window.jQuery = window.$ = $;
import "bootstrap-fileinput";
require("bootstrap-fileinput/themes/fas/theme");

render(<App />, $(".wrapper")[0]);
