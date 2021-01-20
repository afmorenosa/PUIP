import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./App.global.scss";
import db from "./Database";

render(<App />, window.$(".wrapper")[0]);
