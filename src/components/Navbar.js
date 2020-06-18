import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Narvar__brand" to="/">
            <img className="Narvar__logo-blove" src={logo} alt="logo Blove" />
            <span className="font-weight-light">Blove</span>
            <span className="font-weight-bold">Donation</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
