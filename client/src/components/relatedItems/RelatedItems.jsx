import React from 'react';
import RelatedItemsCarousel from './RelatedItemsCarousel.jsx';
import ComparisonModal from './ComparisonModal.jsx';
//import proptype later

const data = [
  {
    image: 'imageUrl',
    name: 'Product 1',
    cost: 123,
    rating: 3
  },
  {
    image: 'imageUrl',
    name: 'Product 2',
    cost: 123,
    rating: 3
  },
  {
    image: 'imageUrl',
    name: 'Product 3',
    cost: 123,
    rating: 3
  },
  {
    image: 'imageUrl',
    name: 'Product 4',
    cost: 123,
    rating: 3
  }
]

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    //relatedItems array should be a prop passed down?
    //if not, do get request and add to this state
    //pass down to carousel

    this.state = {

      showModal = false
    }
  }

  //dont render until get all 


  render() {
    // let modal;
    // if ( showModal ) {
    //   modal = (
    //     <ComparisonModal />
    //   )
    // }

    return (
      <div className = "related-products-outfits">
        <section className = "related-products">
        <h1>I AM RELATED PRODUCTS</h1>
        <div>
          <RelatedItemsCarousel />
        </div>
        </section>
        {/* {modal} */}
      <section className = "outfits"><h1>I AM OUTFIT</h1></section>
      </div>
    )
  };
}

export default RelatedItems;