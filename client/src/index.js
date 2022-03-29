import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/Overview.js';
import QnA from './components/QnA.js';
import Ratings from './components/Ratings.js';
import RelatedItems from './components/RelatedItems.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <h1>ayyyy</h1>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));