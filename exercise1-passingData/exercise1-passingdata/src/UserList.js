import React, { Component } from 'react';

class UserList extends Component {
  

 render() {
      
            return (


                <ul>
       
                  {this.props.profiles.map(profile => {
                    const userName = this.props.users[profile.userID].name;
                    const favMovieName = this.props.movies[profile.favoriteMovieID].name;
        
                    return (
                  
                      <li key={profile.id}>
                      
                        <p>{`${userName}\'s favorite movie is "${favMovieName}."`}</p>
                      </li>
                    );
                  })}
                </ul>
              
            );
          }
        }

export default UserList