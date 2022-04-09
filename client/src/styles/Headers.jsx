import React from 'react';
import styled from 'styled-components';

const Theme = styled.div`
  color:  ${(props) =>
    {
      if (props.primary) {
        return '#3e3e3e'
      } else if (props.secondary) {
        return '#e4e4e4'
      } else {
        return 'black'
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
    return decoration
  }};
  border: ${(props) => {if (props.border) {
    return `2px solid #3e3e3e`}}};
`

const Title = styled(Theme)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 35px;

`;


const Wrapper = styled.section`
  padding: 1em;
  background: #000;
`;

const Header2 = styled(Theme)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  color: #615D5D;
`;

const Header3 = styled(Theme)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #615D5D;
`
const Header4 = styled(Theme)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #615D5D;
`
const Text = styled(Theme)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #615D5D;
`
export {Title, Wrapper, Header2, Header3, Header4, Text, Theme};