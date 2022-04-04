import React, {useState} from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

import {CartContainer, RowContainer} from './OverviewStyles.jsx'


const AddToCart = (props) => {

  var skus_ids = Object.keys(props.selectedStyle.skus)
  var {skus} = props.selectedStyle
  const [sku, setSku] = useState(null)



  return (
    <CartContainer>
        <h1>This the Cart</h1>
        <RowContainer>
          <select>
            <option>Select Size</option>
            {skus_ids.map(sku => {
              return <option key = {sku}> {skus[sku].size}</option>
            })}
          </select>
          <select>
            <option>Select Quantity</option>
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