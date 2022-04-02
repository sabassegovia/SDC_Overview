import React from 'react';

class QuestionSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      queryString: ''
    }
  }

  render() {
    return (
      <div>
        <section className = "qa-search-container">
          <div className = "qa-searchbar">
            <h3>I AM QUESTION SEARCH BAR</h3>
          </div>
        </section>
      </div>
    );
  }
}

export default QuestionSearch;