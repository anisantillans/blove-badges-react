import React from "react";
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
import PageLoading from "../components/PageLoading";
import api from "../api";

import "./styles/BadgeEdit.css";

class BadgeEdit extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      bloodType: "",
      twitter: "",
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: null });
    }
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img
            className="img-fluid"
            src="https://riograndeplus.com.ar/wp-content/uploads/2019/05/unnamed-5-2.jpg"
            alt="Hero img"
          />
        </div>
        <div className="container pt-4">
          <div className="row">
            <div className="col-6">
              <h1>Edit Donor</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                avatarUrl="https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
                bloodType={this.state.form.bloodType || "BLOOD_TYPE"}
                email={this.state.form.email || "EMAIL"}
                twitter={this.state.form.twitter || "TWITTER"}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
