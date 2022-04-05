import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {Select} from '../../styles/Forms.jsx';
import Button from '../../styles/Buttons.jsx';
import {CartContainer, RowContainer, ColumnContainer} from './OverviewStyles.jsx';

const SizeSelect = styled(Select)`
width: 180px;
height: 60px;
background: #E5E5E5;
border: 2px solid #AFA9A9;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const QuantitySelect = styled(Select)`
width: 60px;
`
const AddtoCartButton = styled(Button)`
width: 217px;
height: 63px;
background: #E5E5E5;
color: #000;
border: 2px solid #AFA9A9;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const AddToCart = (props) => {

  var skus_ids = Object.keys(props.selectedStyle.skus)
  var {skus} = props.selectedStyle


  const [currentSku, setSku] = useState('')
  const [quantity, setQuantity] = useState('')

  console.log(currentSku, skus, '<<<<<<<<<<<<<<')

  return (
    <CartContainer>
        <RowContainer>
          <ColumnContainer>
            <h4>select size</h4>
            <SizeSelect value = {currentSku}

              onChange = {(e) => {setSku(e.target.value); setQuantity('')}}>

              {skus_ids.map(sku => {
                if (skus[sku].quantity > 0) {
                  return <option
                  key = {sku}
                  value = {sku}
                  > {skus[sku].size}</option>
                }
              })}
              {skus_ids.filter(sku => {
                return skus[sku].quantity > 0
              }).length === 0 ? <option>CURRENT STYLE OUT OF STOCK</option> : null}
            </SizeSelect>
          </ColumnContainer>
          <ColumnContainer>
            <h4>select quantity</h4>
            <QuantitySelect value = {quantity}
              onChange = {(e) => {setQuantity(e.target.value)}}>
              {!(skus[currentSku]) ? <option></option> : [...Array(skus[currentSku].quantity).keys()].map(x => {
                if (x !== 0) {
                  return <option key = {x}>{x}</option>
                }
              })}
            </ QuantitySelect>
          </ColumnContainer>
        </RowContainer>
            <AddtoCartButton>Add to cart</AddtoCartButton>

    </CartContainer>
  );
};


AddToCart.propTypes = {
  selectedStyle: PropTypes.object,
}

export default AddToCart;