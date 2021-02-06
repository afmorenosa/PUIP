import React from "react";
import { render } from "react-dom";
import "./App.global.scss";
import App  from "./App";

render(<App />, window.$(".wrapper")[0]);
