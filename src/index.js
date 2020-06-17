import React from "react"; //analogous of createElement
import ReactDom from "react-dom"; //analogous of appendChild
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";

const container = document.getElementById("app");

ReactDom.render(<Badges />, container);
