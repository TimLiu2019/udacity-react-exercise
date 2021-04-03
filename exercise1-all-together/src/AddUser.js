import React, { Component } from "react";
import Joi from "joi-browser";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(
      ` change is: ${this.state.firstName} ${this.state.lastName} ${this.state.username}`
    );
  };

  inputIsEmpty = () => {
    return (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.username === ""
    );
  };

  handleUser = event => {
    event.preventDefault();
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      numOfGames: 0
    };
    const newUser = this.props.users.find(u =>u.username === user.username)
    if(!newUser){
        console.log('no this username, can be added');
    this.props.onAddUser(user);
    console.log(`add a new user: ${JSON.stringify(user)}`);}
    else {console.log('we already have this user');}
  };

  validate = () => {
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      numOfGames: 0
    };
    //  const options = { abortEarly: false };
    const schema = Joi.object.keys({
      username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
      firstName: Joi.string()
        .min(3)
        .max(30)
        .required(),
      lastName: Joi.string()
        .min(3)
        .max(30)
        .required()
    });
    const options = { abortEarly: false };
    const result = Joi.validate(user, schema, options);

    return result;
  };
  render() {
    return (
      <form className="mt-5 " onSubmit={this.handleUser}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">First Name</label>
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
          <label className="col-sm-2 col-form-label">Last Name</label>
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
          <label className="col-sm-2 col-form-label">Username</label>
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
        <button
          type="submit"
          className="btn btn-primary"
          disabled={this.inputIsEmpty()}
        >
          Add
        </button>
      </form>
    );
  }
}

export default AddUser;
