import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import {Axios} from "./AxiosConfig.js"


import Overview from './components/Overview.jsx';
import QnA from './components/QnA.jsx';
import Ratings from './components/Ratings.jsx';
import RelatedItems from './components/RelatedItems.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: {
        id: 65631,
        campus: 'rfp',
        name: 'Camo Onesie',
        slogan: 'Blend in to your crowd',
        description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
        category: 'Jackets',
        default_price: '140.00',
        created_at: '2022-03-29T15:08:08.445Z',
        updated_at: '2022-03-29T15:08:08.445Z',
      },
      product_id: 65631,
      rendered: false,
    }
  }
  componentDidMount() {
    this.getProduct()
  }
  getProduct() {
    // var params = {
    //   product_id: this.state.product_id
    //   // sort: this.state.sort
    // }
    Axios.get(`/products/${this.state.product_id}/`)
    .then(result => {
      // console.log(result.data)
      this.setState({
        overview: result.data
      });
    });
  }
  test() {

    var params = {
      product_id: 65631,
      // count:10,
      rating: 4,
      summary: "was meh",
      body: "pretty meh i but could be better",
      recommend: true,
      name: "Bob Bloblaw",
      email: "bobbloblaw@gmail.com",
      photos: ["https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"],
      characteristics: {"220232": 5,
                          "220230": 5,
                          "220231": 5,
                          "220233": 5
    }
  }
    Axios.post(`reviews/`, params)
      .then(result => {
        console.log(result.data)
      })


    // Axios.put("")
    // Axios.post("")

  }

  render() {

    return (
      <div>
        <button onClick = {this.test.bind(this)}>Test</button>
        <Overview overview = {this.state.overview}/>
        <QnA product_id = {this.state.overview.id}/>
        <Ratings product_id = {this.state.overview.id}/>
        <RelatedItems product_id = {this.state.overview.id}/>
      </div>
    );
  };
}

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(<App />);

// ReactDOM.render(<App />, document.getElementById('app'));