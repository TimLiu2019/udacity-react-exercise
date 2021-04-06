import React, { Component } from "react";
class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };
  }
  inputIsEmpty = () => {
    return this.state.inputText === '';
  };

  handleMessage = (event) => {
    event.preventDefault();
    const message = {
      text: this.state.inputText,
      username: this.props.username,
    };
    console.log('message',message);
    this.props.onHandleMessage(message);
    this.setState({
        inputText: ''
      });
  
  };

  handleChange = (event) => {
      this.setState({
        inputText: event.target.value
      });

      console.log(
        ` change is: ${this.state.inputText} `
      );

    
  };
  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.handleMessage}>
          <input
            type="text"
            value={this.state.inputText}
            className="form-control"
            placeholder="Enter your message..."
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <button className="btn submit-button"  type="submit"  disabled={this.inputIsEmpty()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default MessageInput;
