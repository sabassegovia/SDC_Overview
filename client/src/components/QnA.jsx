import React from 'react';
import styled, { css } from 'styled-components';

import QuestionList from './QnA Components/QuestionList.jsx';
import QuestionSearch from './QnA Components/QuestionSearch.jsx';

class QnA extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 'test'
    }
  }

  render() {
    return (
      <div>
        <h2>Questions & Answers</h2>
        <QuestionSearch />
        <QuestionList />
      </div>
    );
  };
}

export default QnA;