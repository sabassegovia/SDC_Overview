import React from 'react';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className = "related-products-outfits">
          <section className = "related-products"><h1>I AM RELATED PRODUCTS</h1></section>
          <section className = "outfits"><h1>I AM OUTFIT</h1></section>
      </div>
    );
  };
}

export default RelatedItems;