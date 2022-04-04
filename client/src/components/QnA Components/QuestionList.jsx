import React from 'react';

import QuestionListItem from './QuestionListItem.jsx';

var QuestionList = (props) => {
  return (
    <div className="qa-list-container">
      <QuestionListItem />
      <QuestionListItem />
    </div>
  );
}

export default QuestionList;