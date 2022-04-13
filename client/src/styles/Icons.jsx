import React from 'react';
import styled from 'styled-components';
import {FiShoppingCart} from 'react-icons/fi';
import { MdClose } from 'react-icons/md';



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
    /* &:hover {
    background: #3e3e3e;
    color: #e4e4e4;
    transition-duration: 2s linear;
    transform: scale(1.1);
  }; */
  width: ${props => props.large ? '80px' : '40px'};
  height: ${props => props.large ? '80px' : '40px'};

  /* ${(props) => {props.big&&`
    width:100px;
    height:100px;
  `}}; */
  padding: 0;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 0;
`;


export {ShoppingCart, CloseModalButton}