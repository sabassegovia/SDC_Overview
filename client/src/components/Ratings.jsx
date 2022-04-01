import React from 'react';

class Ratings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <section className = "ratings-reviews-container">

          <section className = "ratings-meta-container">
            <div>RATING AND META</div>
          </section>

          <div className = "reviews-container">
            <nav className = "reviews-header">to sort reviews</nav>
            <section className = "review-container">
              <div>rating</div>
              <div>Summary</div>
              <div>body</div>
              <div>helpful report</div>

            </section>

            <section className = "review-container">
              <div>rating</div>
              <div>Summary</div>
              <div>body</div>
              <div>helpful report</div>

            </section>
          </div>
        </section>
    );
  };
}

export default Ratings;