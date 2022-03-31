import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import cors from 'cors';


import Overview from './components/Overview.jsx';
import QnA from './components/QnA.jsx';
import Ratings from './components/Ratings.jsx';
import RelatedItems from './components/RelatedItems.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overview: []
    }
  }


  componentDidMount() {
    axios.get('test')
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.log(err)
    })
  }

  // componentDidMount() {
  //   var options = {headers : {
  //                   authorization: process.env.TOKEN,
  //                 },
  //                 method: 'get',
  //                 url: 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/65631/' }
  //   axios(options)
  //     .then(result => {
  //       console.log(result.data)
  //       this.setState({
  //         data: result.data
  //       })
  //     })
  //     .catch(err => {
  //       console.log('hello im back')
  //       console.log(err)
  //     })
  // }

  test() {
    var params = {
      product_id: 65631
      // sort: this.state.sort
    }
    axios.get("http://localhost:3000/reviews", {params: params})
    .then(result => {
      console.log(result.data);
    });
  }

  render() {
    return (
      <div>
        <h1>ayyyy</h1>
        <button onClick = {this.test.bind(this)}>Test</button>
        <Overview />
        <QnA />
        <Ratings />
        <RelatedItems />
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));