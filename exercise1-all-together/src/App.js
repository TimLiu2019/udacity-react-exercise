import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddUser from "./AddUser";
import UserList from "./UserList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  addUser = user => {
    console.log(`reveived user: ${JSON.stringify(user)}`)
    console.log(`before all users: ${JSON.stringify(this.state.users)}`)
    this.setState(oldState => ({
      users: [...oldState.users, user],
    }));
    console.log(`after all users: ${JSON.stringify(this.state.users)}`)
  };
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <AddUser  onAddUser = {this.addUser}  users={this.state.users} />
        <UserList users = {this.state.users} />
      </div>
    );
  }
}

export default App;
