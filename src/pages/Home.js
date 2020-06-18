import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import donationLogo from "../images/donation.png";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-6">
              <h2>Be a hero!</h2>
              <h2>You can save a life</h2>
              <Link to="/badges" className="btn btn-primary">
                Start Now
              </Link>
            </div>
            <div className="Home__col d-none d-md-block col-md-6">
              <img
                className="img-fluid p-2"
                src={donationLogo}
                alt="Blood Donate Logo"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
