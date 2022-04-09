import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import {StylesSelectionCart} from './OverviewComponents/OverviewStyles.jsx'
import AddToCart from './OverviewComponents/AddToCart.jsx'
import ImageCarousel from './OverviewComponents/ImageCarousel.jsx'
import Carousel from './OverviewComponents/Carousel.jsx'
import ImageGallery from './OverviewComponents/ImageGallery.jsx'
import ProductInformation from './OverviewComponents/ProductInformation.jsx'
import StyleSelector from './OverviewComponents/StyleSelector.jsx'
import axios from 'axios';
import {Axios} from "../AxiosConfig.js"

import {RowContainer, ColumnContainer} from '../styles/Boxes.jsx'

const ProductOverviewContainer = styled(RowContainer)`
  max-height: 1000px;
  min-height: 1000px;
`
const ImageGalleryProductDescription = styled(ColumnContainer)`
  width: 70%;
`

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: null,
      selectedStyle: null,
    }
  }

  componentDidMount() {
    Axios.get(`/products/${this.props.overview.id}/styles`)
      .then(result => {
        this.setState({
          styles: result.data.results,
          selectedStyle: result.data.results[0]
        })
      })
      .catch(err => {
      })
  }
  styleOnClick(style) {
    this.setState({
      selectedStyle: style
    })
  }

  render() {
    var {description, name, slogan, features, id, category} = this.props.overview;
    var {styles, selectedStyle} = this.state

    if (!selectedStyle || !styles) {
      return (<div></div>) // need to implement some loading feature
    } else return (
      <ProductOverviewContainer>
        <ImageGalleryProductDescription>

        <ImageCarousel
          style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
          selectedStyle = {selectedStyle}>

          {selectedStyle.photos.map(photo => {
            return <img src = {photo.url} key = {photo.url} alt = "placeholder"/>
          })}

        </ImageCarousel>
        {/* <Carousel selectedStyle = {selectedStyle}/> */}

        <ProductInformation
          description = {description}
          slogan = {slogan}
          features = {features}
          id = {id}
          />
        </ImageGalleryProductDescription>
          <StylesSelectionCart>
            {styles === null ? <div></div> : <StyleSelector
              scrollToReviews = {this.props.scrollToReviews}
              category = {category}
              name = {name}
              styles = {styles}
              id = {id}
              rating = {this.props.rating}
              selectedStyle = {selectedStyle}
              styleOnClick = {this.styleOnClick.bind(this)}
            /> }

            <AddToCart
            selectedStyle = {selectedStyle}
            />
          </StylesSelectionCart>
      </ProductOverviewContainer>
    );
  };
}

Overview.propTypes = {
  overview: PropTypes.object,
  rating: PropTypes.number,
  scrollToReviews: PropTypes.func,
}


export default Overview;

 {/* <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
          <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
          <img src="https://via.placeholder.com/1600x300" alt="placeholder" /> */}