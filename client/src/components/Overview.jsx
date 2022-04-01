import React from 'react';
import AddToCart from './OverviewComponents/AddToCart.jsx'
import ImageGallery from './OverviewComponents/ImageGallery.jsx'
import ProductInformation from './OverviewComponents/ProductInformation.jsx'
import StyleSelector from './OverviewComponents/StyleSelector.jsx'
import axios from 'axios';
import {Axios} from "../AxiosConfig.js"



class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className = "product-overview-container">
        <div className = "image-gallery-product-description">
        <main className = "image-gallery">
          <section><h1>I AM IMAGE GALLERY</h1></section>
        </main>
        <section className = "product-description"><h3>I AM DESCRIPTION</h3></section>
          </div>
          <aside className = "style-selection-cart">
            <section className = "style-selection" ><h1>I AM STYLE SELECTION</h1></section>
            <section className = "cart"><h1>I AM CART</h1></section>
          </aside>
      </div>
    );
  };
}

export default Overview;

{/* <ImageGallery />
        <ProductInformation />
        <StyleSelector />
        <AddToCart /> */}