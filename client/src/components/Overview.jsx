import React from 'react';
import PropTypes from 'prop-types'
import {StylesSelectionCart} from './OverviewComponents/OverviewStyles.jsx'
import AddToCart from './OverviewComponents/AddToCart.jsx'
import ImageCarousel from './OverviewComponents/ImageCarousel.jsx'
import ImageGallery from './OverviewComponents/ImageGallery.jsx'
import ProductInformation from './OverviewComponents/ProductInformation.jsx'
import StyleSelector from './OverviewComponents/StyleSelector.jsx'
import axios from 'axios';
import {Axios} from "../AxiosConfig.js"


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
        console.log(err)
      })
  }

  styleOnClick(style) {
    this.setState({
      selectedStyle: style
    })
  }

  render() {

    var {description, name, slogan, features, id, styles, category} = this.props.overview;
    var {styles, selectedStyle} = this.state

    if (!selectedStyle) {
      return (<div>
      </div>)
    } else

    return (
      <div className = "product-overview-container">
        <div className = "image-gallery-product-description">

        <ImageCarousel
          style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
          selectedStyle = {selectedStyle}
        >
          {/* <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
          <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
          <img src="https://via.placeholder.com/1600x300" alt="placeholder" /> */}
          {selectedStyle.photos.map(photo => {
            return <img src = {photo.url} key = {photo.url}/>
          })}

        </ImageCarousel>

        <ProductInformation
          description = {description}
          slogan = {slogan}
          features = {features}
          id = {id}
          />
          </div>
          <StylesSelectionCart>
            {styles === null ? <div>nothing here yet</div> : <StyleSelector
              category = {category}
              name = {name}
              styles = {styles}
              id = {id}
              selectedStyle = {selectedStyle}
              styleOnClick = {this.styleOnClick.bind(this)}
            /> }

            <AddToCart
            selectedStyle = {selectedStyle}
            />
          </StylesSelectionCart>
      </div>
    );
  };
}

Overview.propTypes = {
  overview: PropTypes.object
}


export default Overview;

