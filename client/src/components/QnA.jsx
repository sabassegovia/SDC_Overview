import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0.5em 1em;
padding: 0.25em 1em;

${props =>
  props.primary &&
  css`
    background: palevioletred;
    color: white;
  `}
`;

const Container = styled.div`
text-align: center;
`

class QnA extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }



  render() {
    return (
      <div>
        <Container>
          <Button>Normal Button</Button>
          <Button primary>Primary Button</Button>
        </Container>
        <h1>ayyyy</h1>
      </div>
    );
  };
}

export default QnA;