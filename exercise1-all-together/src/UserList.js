import React, {Component} from "react";
import User from "./User";

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numHidden : true,
        };
      }

    
     handleChange = () =>{
       console.log('clicked change name');
      if(this.state.numHidden)  {
        console.log('clicked change name in true block' );
        this.setState({ 
        numHidden :false });
         }

       else {
        this.setState({ 
        numHidden : true });
       }

    };
    render(){
  return (
    <div >
          <button  
          type="submit"
          className="btn btn-primary m-3 float-right"
          onClick = {this.handleChange}
        >
          {this.state.numHidden ? 'Show the Number of Games Played' : 'Hide the Number of Games Played' }
        </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Username </th>
            <th scope="col">Number of Games Played</th>
          </tr>
        </thead>
        <tbody>
          {this.props.users.map((user, index) => (
            <User key={index} indexNum={index + 1} user={user} numHidden={this.state.numHidden} />
          ))}
        </tbody>
      </table>
    </div>
  );}}


export default UserList;
