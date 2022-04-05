import React from 'react';

var QuestionListItem = (props) => {
  return (
    <div>
      <div className="qa-list-item-container">
        <section className="question">
          Q: Question content goes here?
        </section>
        <section className="answer">A: Answer to your question.</section>
        <section className="answer">A: Another answer to your question.</section>
      </div>

      <div className="qa-list-item-helpful-container">
        <section className="helpful">
          <h3>Helpful? Yes (number) | Add Answer</h3>
        </section>
      </div>
    </div>
  );
}


export default QuestionListItem;