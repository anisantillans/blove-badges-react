import React from "react";
import "./styles/BadgeDetails.css";
import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0);
  if (count > max) {
    setCount(0);
  }
  return [count, setCount];
}

function BadgeDetails(props) {
  const [count, setCount] = useIncreaseCount(4);

  const badge = props.badge;
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6 text-center">
              <img
                className="Badges_hero-img"
                src="https://riograndeplus.com.ar/wp-content/uploads/2019/05/unnamed-5-2.jpg"
                alt="Hero img"
              />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container badge-cont">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              bloodType={badge.bloodType}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  className="btn btn-primary mr-4"
                >
                  Increase count {count}
                </button>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>
            </div>
            <div>
              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BadgeDetails;
