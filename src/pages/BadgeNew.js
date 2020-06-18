import React from "react";
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      bloodType: "",
      twitter: "",
    },
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="img-fluid"
            src="https://riograndeplus.com.ar/wp-content/uploads/2019/05/unnamed-5-2.jpg"
            alt="Hero img"
          />
        </div>
        <div className="container pt-4">
          <div className="row">
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                avatarUrl="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                bloodType={this.state.form.bloodType}
                email={this.state.form.email}
                twitter={this.state.form.twitter}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
