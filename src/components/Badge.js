import React from "react";
import "./styles/Badge.css";
import Gravatar from "./Gravatar";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img
            className="badge__header-logoblove"
            src="https://meamomecuido.com/wp-content/uploads/2019/07/donacionsangre.jpg"
            alt="Logo Blove"
          ></img>
        </div>
        <div className="Badge__section-name">
          <Gravatar
            className="Badge__avatar"
            email={this.props.email}
            alt="Avatar"
          ></Gravatar>
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.bloodType}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">#BloveDonation</div>
      </div>
    );
  }
}

export default Badge;
