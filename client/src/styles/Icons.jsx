import React from 'react';
import styled from 'styled-components';
import {FiShoppingCart} from 'react-icons/fi';


const ShoppingCart = styled(FiShoppingCart)`
  color:  ${(props) => {
      if (props.primary) {
        return '#3e3e3e'
      } else if (props.secondary) {
        return '#fffffff0'
      } else {
        return '#3e3e3e'
      }
  }};
  width: ${props => props.big ? '80px' : '40px'};
  height: ${props => props.big ? '80px' : '40px'};

  /* ${(props) => {props.big&&`
    width:100px;
    height:100px;
  `}}; */
  padding: 0;
`;



export {ShoppingCart}