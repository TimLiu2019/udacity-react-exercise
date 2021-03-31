import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'',
            
          };
      }
      handleChange = event => {
        this.setState({ value: event.target.value });
        console.log(` change is: ${this.state.value}`)
      };
    
      addItem = event => {
        event.preventDefault();
    
        this.props.onAddItem(this.state.value);
        console.log(`add ${this.state.value}`)
      };
      inputIsEmpty = () => {
        return this.state.value === '';
      };
    render(){
        return(
            <form onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter New Item"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button disabled={this.inputIsEmpty()}>Add</button>
          </form>
        )

    }
}

export default AddItem