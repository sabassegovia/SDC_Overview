import React from 'react';
import styled from 'styled-components';


const ButtonTheme = styled.button`
  &:hover {
  transition-duration: .3s;
  transform: scale(1.05)
};


`

const Button = styled(ButtonTheme)`
    background: ${props => props.primary ? "black" : "#000"};
    color: ${props => props.primary ? "white" : "#fff" };
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #000;
    border-radius: 3px;
    `;
export default Button;