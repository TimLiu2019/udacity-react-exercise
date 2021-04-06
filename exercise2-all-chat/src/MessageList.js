import React from "react";
//import PropTypes from 'prop-types'

const MessageList = props => {
    
  //let numberOfGames = '/*';
  return (
    <ul className="message-list">
    {props.messages.map((message, index) => (
      <li
        key={index}
        className={
          message.username === props.users[props.userId].username ? 'message sender' : 'message recipient'
        }
      >
        <p>{`${message.username}: ${message.text}`}</p>
      </li>
    ))}
  </ul>
  );


};

export default MessageList;