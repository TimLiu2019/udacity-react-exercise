import React, { Component } from "react";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName:'',
      username:''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(` change is: ${this.state.firstName} ${this.state.lastName} ${this.state.username}`);
  };
  
  handleUser = event => {
    event.preventDefault();
    const user = {firstName:this.state.firstName, lastName: this.state.lastName, userName: this.state.username, numOfGames:0}
    this.props.onAddUser(user);
    console.log(`add a new user: ${JSON.stringify(user)}`)
  };
  render() {
    return (
      <form className="mt-5 " onSubmit={this.handleUser}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">
            First Name
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">
            Last Name
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    );
  }
}

export default AddUser;
