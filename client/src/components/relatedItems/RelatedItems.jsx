import React from 'react';
import axios from 'axios';
//1. put this into debug log
import {Axios} from "../../AxiosConfig.js"
import RelatedItemsCarousel from './RelatedItemsCarousel.jsx';
import ComparisonModal from './ComparisonModal.jsx';
//import proptype later

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    //do get request and add to this state
    //pass down to carousel
    this.state = {
      currentItem: this.props.overview,
      //relateditems
      relatedItemsId: [],
      relatedItems: [],
      //modal
      showModal: false,
      modalItems: [],
      //outfits
      selectedOutfit: []
    }
    this.updateModal = this.updateModal.bind(this);
    this.getItemData = this.getItemData.bind(this);
  }

  //related items rendered according to overview product
  componentDidMount() {
    console.log(this.props.overview.id);
    let {id} = this.props.overview;
    // this.getItemData(id);

    Axios.get(`/test`)
    .then(result => {
      console.log(result.data, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
    })
    .catch(err => {
      console.log(err, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
    })
  }

  //render when all data is retrieved
  getItemData(overviewId) {

    return Axios.get(`/products/${this.props.overview.id}`)
      .then(result => {
        console.log(result);
        // for loop over related items array
        // return Promise.all(result.data.map((itemId) => {
        //   Axios.get(`products/${itemId}`)
        //   .then((result) => {
        //     return result.data;
        //   })
        // }))
      })
      // .then((results) => {
      //   console.log(results)
      // //get related items data
      // // //setState
      // // .then((result) => {
      // //   this.setState({relatedItems: result});
      // // })
      // })
      .catch(err => {

      })
  }

  updateModal(compareItem) {
    let {currentItem} = this.state;
    let flip = !this.state.showModal;
    this.setState({
      showModal: flip,
      //3. check if this works
      modalItems: [currentItem, compareItem]
    })
  }

  //dont render until get all
  render() {
    // let modal;
    // if ( showModal ) {
    //   modal = (
    //     <ComparisonModal />
    //   )
    // }
    let {relatedItems} = this.state;

    return (
      <div className = "related-products-outfits">
        <section className = "related-products">
          <h1>I AM RELATED PRODUCTS</h1>
          <div>
            <RelatedItemsCarousel>
              <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
              <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
              <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
            </RelatedItemsCarousel>
            {/* <RelatedItemsCarousel relatedItems={relatedItems} updateModal={this.updateModal}/> */}
          </div>
        </section>
        {/* {modal} */}
        <section className = "outfits">
          <h1>I AM OUTFIT</h1>
        </section>
      </div>
    )
  };
}

export default RelatedItems;