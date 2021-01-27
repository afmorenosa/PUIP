import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./App.global.scss";

render(<App />, window.$(".wrapper")[0]);
