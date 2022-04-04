import React from 'react';
import RelatedItemsCard from './RelatedItemsCard.jsx';
//import proptype later

class RelatedItemsCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //change to related items array
      itemsArray: []
    }
  }

  render() {
    let {itemsArray} = this.state;
    //remember to pass in updateModal function
    return (
      <div className='carousel-container'>
        <div className='carousel-wrapper'>
          <button className='left-arrow'>
            &lt;
          </button>
          <div className='carousel-content-wrapper'>
            <div className='carousel-content'>
              {itemsArray.map((item) => {
                <RelatedItemsCard item={item}/>
              })}
            </div>
          </div>
          <button className='right-arrow'>
            &gt;
          </button>
        </div>
      </div>
    )
  }
}

export default RelatedItemsCarousel;