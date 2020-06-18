import React from "react";
import imgError from "../images/404-Error.svg";
import "./styles/NotFound.css";

function NotFound() {
  return (
    <div className="Notfound__container">
      <img src={imgError} alt="404 Error" />
    </div>
  );
}

export default NotFound;
