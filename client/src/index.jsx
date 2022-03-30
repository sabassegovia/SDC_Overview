import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Overview from './components/Overview.jsx';
import QnA from './components/QnA.jsx';
import Ratings from './components/Ratings.jsx';
import RelatedItems from './components/RelatedItems.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ''
    }
  }

  componentDidMount() {
    axios('/test')
      .then((res) => {
        console.log(res);
      })
  }

  render() {
    return (
      <h1>ayyyy</h1>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));