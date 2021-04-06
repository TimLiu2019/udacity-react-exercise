import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

// const messages = [
//   { username: 'Amy', text: 'Hi, Jon!' },
//   { username: 'Amy', text: 'How are you?' },
//   { username: 'John', text: 'Hi, Amy! Good, you?' },
// ];

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
 constructor(props) {
  super(props);
  this.state = {
    messages:  [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  };
}

  isDisabled = () => {
    return false;
  };

  handleMassage=(message)=>{
    console.log('received message', message);
    this.setState(oldState => ({
      messages: [...oldState.messages, message],
    }));

  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[0].username}</div>
            <MessageList  messages ={this.state.messages} users ={users} userId = {0}/>
            <MessageInput username ={users[0].username} onHandleMessage={this.handleMassage}  />
          </div>

          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[1].username}</div>
            <MessageList  messages ={this.state.messages} users ={users} userId = {1}/>
            <MessageInput username ={users[1].username} onHandleMessage={this.handleMassage}  />
            {/* <div>
              <form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>  */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

