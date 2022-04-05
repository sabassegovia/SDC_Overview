import React, {useState} from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

import {CartContainer, RowContainer} from './OverviewStyles.jsx'


const AddToCart = (props) => {

  var skus_ids = Object.keys(props.selectedStyle.skus)
  var {skus} = props.selectedStyle

  const [currentSku, setSku] = useState(null)

  return (
    <CartContainer>
        <RowContainer>
          <select onChange = {(e) => {setSku(e.target.value)}}>
            <option name = "select size">Select Size</option>
            {skus_ids.map(sku => {
              return <option
                key = {sku}
                value = {sku}
                > {skus[sku].size}</option>
            })}
          </select>
          <select>
            <option>Select Quantity</option>
            {!currentSku ? <option></option> : [...Array(skus[currentSku].quantity).keys()].map(x => {
              return <option key = {x}>{x}</option>
            })}
          </select>
        </RowContainer>
        <button>Add to Cart</button>
    </CartContainer>
  );
};


AddToCart.propTypes = {
  selectedStyle: PropTypes.object,
}

export default AddToCart;