import React from "react";
import { Link } from "react-router-dom";
import "./styles/Badges.css";
import BadgesList from "../components/BadgesList";
import api from "../api";

class Badge extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true) {
      return "Loading...";
    }
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_hero-img"
                src="https://riograndeplus.com.ar/wp-content/uploads/2019/05/unnamed-5-2.jpg"
                alt="Hero img"
              ></img>
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Donor
            </Link>
          </div>
          <div className="Badges__list">
            <BadgesList badges={this.state.data} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badge;
