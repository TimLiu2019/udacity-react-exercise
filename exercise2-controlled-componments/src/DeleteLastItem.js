import react from 'react'
import PropTypes from 'prop-types'


  const DeleteLastItem = (props) =>{
      const handleDeleteItem = event => {
          props.OnDeleteLastItem();
      }
      return (
        <button onClick={handleDeleteItem} disabled = {props.buttonDisabled} >
        Delete Last Item
      </button>
    )
  }

  DeleteLastItem.prototype = {
      deleteLastItem: PropTypes.func.isRequired,
      buttonDisabled: PropTypes.func.isRequired
  }


export default DeleteLastItem