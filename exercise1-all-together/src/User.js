import React from "react";
//import PropTypes from 'prop-types'

const User = props => {
    let numberOfGames = props.numHidden ? '\\*' : props.user.numOfGames;
  //let numberOfGames = '/*';
  return (
      <tr key={props.indexNum - 1}>
        <td>{props.indexNum} </td>
        <td>{props.user.firstName} </td>
        <td>{props.user.lastName}</td>
        <td>{props.user.username}</td>
        <td>{props.user.username} palyed {numberOfGames} games</td>
      </tr>
  );


};

export default User;
