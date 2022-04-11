import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
// import {BrowserRouter, Routes, Route, useParams} from "react-router-dom"
import axios from 'axios';
import {Axios} from "./AxiosConfig.js"
import "./index.css"
import Overview from './components/Overview.jsx';
import QnA from './components/QnA.jsx';
import Ratings from './components/Ratings.jsx';
import RelatedItems from './components/relatedItems/RelatedItems.jsx';
import {Title, Wrapper, Header2} from './styles/Headers.jsx';
import styled from 'styled-components';

import {ColumnContainer, RowContainer, AlignmentWrapper, Theme, MainHeader} from './styles/Boxes.jsx'

const BigContainer = styled(RowContainer)`
  justify-content: center;
  min-width: 1000px;
  opacity: ${props => props.isRender ? 1 : 0};
  transition: opacity 1.5s ease-in;
`
const AppContainer = styled(ColumnContainer)`
  background-color: #FAFAFA;
  margin: 10px;
  min-width: 1000px;
  max-width: 1400px;
  border-radius: 12px;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: null,
      product_id: 65631,
      rating: 0,
      documentTitle: null,
      isRender: false,
    }
    this.ratings = React.createRef()
    this.handleRating = this.handleRating.bind(this);
    this.scrollToReviews = this.scrollToReviews.bind(this)
  }

  test() {
    console.log('im hit test')
    Axios.get('/test');
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
      // console.log(result.data)
      this.setState({
        overview: result.data,
        documentTitle: `${result.data.category} - ${result.data.name}`,
        isRender: true,
      }, () => {document.title = this.state.documentTitle});
    });
  }

  render() {

    return (
      <BigContainer isRender = {this.state.isRender}>
        <AppContainer border = {true} >
          <MainHeader >
            <AlignmentWrapper>
              <Title secondary = {true} underline = {true} >Project Atelier</Title>
            </AlignmentWrapper>
            {/* <button onClick = {()=> {this.test()}}>test</button> */}
            <AlignmentWrapper>
              <Title secondary = {true} >LOGO</Title>
            </AlignmentWrapper>
          </MainHeader>
        {!this.state.overview ? <div></div> :
        <React.Fragment>
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
        </React.Fragment>
        }
        </AppContainer>
      </BigContainer>
    );
  };
}
// ReactDOM.render(<App/>, document.getElementById('app'))

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(<App />);

// ReactDOM.render(<App />, document.getElementById('app'));


