import React from "react"; //analogous of createElement
import ReactDom from "react-dom"; //analogous of appendChild
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import App from "./components/App";

const container = document.getElementById("app");

ReactDom.render(<App />, container);
