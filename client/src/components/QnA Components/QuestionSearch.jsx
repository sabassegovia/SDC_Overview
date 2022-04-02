import React from 'react';

class QuestionSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      queryString: ''
    }
  }

  handleChange(event) {
    this.setState({
      queryString: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchHandler(this.state.queryString);
  }

  render() {
    return (
      <div>
        <section className="qa-search-container">
          <div className="qa-searchbar">
            <form>
              <input type="text" onChange={this.handleChange} />
              <input type="submit" onClick={this.handleSubmit} />
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default QuestionSearch;