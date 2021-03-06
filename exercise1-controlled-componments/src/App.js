import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state ={
    echoContent:''
  }

  updateEcho = (event) => {
    this.setState(() => ({
      echoContent: event.target.value
    }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" placeholder="Say Something" value={this.state.echoContent}
             onChange={this.updateEcho} />
          <p className="echo">Echo:</p>
          <p>{this.state.echoContent}</p>
        </div>
      </div>
    );
  }
}

export default App;
