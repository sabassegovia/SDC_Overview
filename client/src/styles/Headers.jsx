import React from 'react';
import styled from 'styled-components';

const Theme = styled.div`
  color:  ${(props) => {
      if (props.primary) {
        return '#3e3e3e'
      } else if (props.secondary) {
        return '#fffffff0'
      } else {
        return '#3e3e3e'
      }
  }};
  /* background-color: ${(props) => {
    if (props.primary) {
      return '#fffffff0'
    } else if (props.secondary) {
      return '#3e3e3e'
    } else {
      return '#fffffff0'
    }
  }}; */
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
`

const Title = styled(Theme)`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
`;
const Wrapper = styled.section`
  padding: 1em;
  background: #000;
`;

const Header2 = styled(Theme)`
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 23px;
`;

const Header3 = styled(Theme)`
  font-style: normal;
  font-weight: 550;
  font-size: 16px;
  line-height: 19px;
  padding-top: 3px;
`
const Header4 = styled(Theme)`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  padding-top: 3px;
`
const Text = styled(Theme)`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
`
const Typography = styled(Theme)`
color: black;
font-size: 14px;
line-height: 16px;
transition: all 0s ease 0s;
height: 16px;
width: 200px;
display: block;
box-sizing: border-box;
&:hover {
  transition-duration: .3s;
  transform: scale(1.05);
  cursor: pointer;
`;


export {Title, Wrapper, Header2, Header3, Header4, Text, Theme, Typography };