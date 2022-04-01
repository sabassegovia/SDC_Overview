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
        <section className = "qa-search-container">
          <div className = "qa-search"><h3>I AM QUESTION SEARCH BAR</h3></div>
          <div className = "question-answer-helpful-container">

            <div className = "question-answer-container">
              <section className = "question">I am question</section>
              <section className = "answer">I am answer</section>
            </div>
            <section className = "helpful"><h3>I AM HELPFUL</h3></section>
          </div>

          <div className = "question-answer-helpful-container">

            <div className = "question-answer-container">
              <section className = "question">I am question</section>
              <section className = "answer">I am answer</section>
              <section className = "answer">I am answer</section>
              <section className = "answer">I am answer</section>
            </div>
            <section className = "helpful"><h3>I AM HELPFUL</h3></section>
          </div>

        </section>
      </div>
    );
  };
}

export default QnA;