import React from 'react'
import PropTypes from 'prop-types'


const Item = props =>{
  return <li> {props.item}</li>
};

Item.prototype = {
    Item: PropTypes.string.isRequired
}
export default Item
