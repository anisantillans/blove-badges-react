import React from "react";
import { Link } from "react-router-dom";
import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No donor were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create a donor account
          </Link>
        </div>
      );
    }
    return (
      <div className="Badges__container">
        {this.props.badges.map((badge) => {
          return (
            <div className="Badges__container-badge" key={badge.id}>
              <div className="Badge__container-img">
                <img src={badge.avatarUrl} alt="avatar" />
              </div>
              <div className="Badge__container-info">
                <p className="Badge-names">
                  {badge.firstName} {badge.lastName}
                </p>
                <div className="Badge-social">
                  <img
                    className="Social-twitter"
                    src="https://logonoid.com/images/twitter-logo.png"
                    alt="Twitter"
                  />
                  <p className="social-account">@{badge.twitter}</p>
                </div>
                <p>{badge.bloodType}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BadgesList;
