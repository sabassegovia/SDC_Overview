import React from 'react';
import styled from 'styled-components';

const ButtonTheme = styled.button`
  color:  ${(props) => {
      if (props.primary) {
        return '#3e3e3e'
      } else if (props.secondary) {
        return '#fffffff0'
      } else {
        return '#3e3e3e'
      }
  }};
  background-color: ${(props) => {
    if (props.primary) {
      return '#fffffff0'
    } else if (props.secondary) {
      return '#3e3e3e'
    } else {
      return '#fffffff0'
    }
  }};
    text-decoration: ${(props) => {
    let decoration = ''
    if (props.line_through) {
      decoration += `line-through`
    }
    if (props.underline) {
      decoration += ` underline`
    }
    if (props.overline) {
      decoration += ' overline'
    }
    return decoration
  }};
  font-style: ${(props) => {props.italic ? italic : null}};
  border: ${(props) => {if (props.border) {
    return `2px solid #3e3e3e`}}};
  font-family: "Helvetica";
  &:hover {
  transition-duration: .3s;
  transform: scale(1.05);
  background-color: '#3e3e3e';
  color: '#fffffff0';
  };
`


const MainButton = styled(ButtonTheme)`

`

const Button = styled(ButtonTheme)`

  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #000;
  border-radius: 3px;
`;
export default Button;