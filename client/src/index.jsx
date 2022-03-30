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
    var options = {headers : {
                    authorization: "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"
                  },
                  method: 'get',
                  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/65631/' }
    axios(options)
      .then(result => {
        console.log(result.data)
        this.setState({
          data: result.data
        })
      })
      .catch(err => {
        console.log('hello im back')
        console.log(err)
      })
  }
  render() {
    return (
      <div>
        <h1>ayyyy</h1>
        <Overview />
        <QnA />
        <Ratings />
        <RelatedItems />
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));