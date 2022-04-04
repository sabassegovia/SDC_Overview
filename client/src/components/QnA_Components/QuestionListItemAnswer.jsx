import React from 'react';

var QuestionListItemAnswer = (props) => (
  <div>
    <section className="answer">A: {props.answer.body}</section>

    <div className="qa-list-item-helpful-container">
      <section className="helpful">
        <h3>Helpful? Yes ({props.answer.helpfulness}) | Add Answer</h3>
      </section>
    </div>
  </div>
);

export default QuestionListItemAnswer;