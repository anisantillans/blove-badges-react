import React from "react";

class BadgeForm extends React.Component {
  // state = {};
  // handleChange = (e) => {
  //   // console.log({ name: e.target.name, value: e.target.value });
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };
  handleClick = (e) => {
    console.log("button is clicked");
  };
  //esto es enlazar eventos (onclick), lo que está haciendo el usuario con
  //los componentes de react
  handleSubmit = (e) => {
    //el dedault es enviar el formulario pero no queremos eso
    e.preventDefault();
    console.log("se esta submit");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Donor</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            ></input>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            ></input>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            ></input>
          </div>
          <div className="form-group">
            <label>Blood Type</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="bloodType"
              value={this.props.formValues.bloodType}
            ></input>
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            ></input>
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
