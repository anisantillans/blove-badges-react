import React from "react";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";
import "./styles/BadgesList.css";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="Badges__container-badge">
        <div>
          <Gravatar
            className="BasgesListItem__avatar"
            email={this.props.badge.email}
          />
        </div>
        <div className="Badge__container-info">
          <p className="Badge-names">
            {this.props.badge.firstName} {this.props.badge.lastName}
          </p>
          <div className="Badge-social">
            <img
              className="Social-twitter"
              src="https://logonoid.com/images/twitter-logo.png"
              alt="Twitter"
            />
            <p className="social-account">@{this.props.badge.twitter}</p>
          </div>
          <p>{this.props.badge.bloodType}</p>
        </div>
      </div>
    );
  }
}

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badges, query]);
  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No donor were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create a donor account
        </Link>
      </div>
    );
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      {filteredBadges.map((badge) => {
        return (
          <div key={badge.id}>
            <Link
              className="text-reset text-decoration-none"
              to={`/badges/${badge.id}`}
            >
              <BadgesListItem badge={badge} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default BadgesList;
