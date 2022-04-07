import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import {Axios} from "./AxiosConfig.js"
import "./index.css"

import Overview from './components/Overview.jsx';
import QnA from './components/QnA.jsx';
import Ratings from './components/Ratings.jsx';
import RelatedItems from './components/relatedItems/RelatedItems.jsx';
import {Title, Wrapper, Header2} from './styles/Headers.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: null,
      product_id: 65631,
      rating: 0
    }
    this.ratings = React.createRef()
    this.handleRating = this.handleRating.bind(this);
    this.scrollToReviews = this.scrollToReviews.bind(this)
  }
  componentDidMount() {
    this.getProduct()
  }
  scrollToReviews() {
    this.ratings.current.scrollIntoView({behavior: 'smooth'})
  }
  handleRating(avgRating) {
    this.setState({rating : avgRating});
  }
  getProduct() {
    Axios.get(`/products/${this.state.product_id}/`)
    .then(result => {
      this.setState({
        overview: result.data
      });
    });
  }


  render() {
    if (!this.state.overview) {
      return (<div></div>) // need to implement some loading feature
    } else
    return (
      <div className = "BIGCONTAINER">
        <div className = "container">
        <header className = "header">
        <Wrapper>
            <Title>
              Header
            </Title>
          </Wrapper>
          <h1 className = "title">HEADER</h1>
          {/* <button onClick = {()=> {this.scrollToReviews()}}>test</button> */}
          <h2 className = "logo">LOGO</h2>
        </header>
        <Overview
        scrollToReviews = {this.scrollToReviews}
        rating = {this.state.rating}
        overview = {this.state.overview}/>

        <RelatedItems overview = {this.state.overview}/>

        <QnA product_id = {this.state.overview.id}/>

      <div ref = {this.ratings}></div>
        <Ratings
          product_id = {this.state.overview.id}
          handleRating={this.handleRating}/>
        </div>
      </div>
    );
  };
}
// ReactDOM.render(<App/>, document.getElementById('app'))

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(<App />);

// ReactDOM.render(<App />, document.getElementById('app'));


