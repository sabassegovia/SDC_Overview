import React from 'react';

var QuestionListItem = (props) => {
  return (
    <div>
      <div className = "qa-list-item-container">
        <section className = "question">I am question</section>
        <section className = "answer">I am answer</section>
        <section className = "answer">I am answer</section>
        <section className = "answer">I am answer</section>
      </div>

      <div className = "qa-list-item-helpful-container">
        <section className = "helpful">
          <h3>I AM HELPFUL</h3>
        </section>
      </div>
    </div>
  );
}

export default QuestionListItem;