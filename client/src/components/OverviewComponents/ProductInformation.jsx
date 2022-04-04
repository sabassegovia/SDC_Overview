import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {RowContainer, SloganDescription, FeaturesContainer} from './OverviewStyles.jsx';

const ProductInformation = (props) => {

  // needs start Ratings - ask mingui for hers
  //
  if (!props.features) {
    return <div>nothing here yet</div>
    // will need to implement a loading screen
  } else
  return (

    <section className = "product-description">
      <RowContainer>
        <SloganDescription>
          <h2>{props.slogan}</h2>
          <p>{props.description}</p>
        </SloganDescription>

        <FeaturesContainer>
          {props.features.map(feature => {
            return <div key = {feature.feature + feature.value}>
                    {`${feature.feature} -   ${feature.value}`}
                    </div>
          })}
        </FeaturesContainer>
      </RowContainer>
      </section>
  )
}

ProductInformation.propTypes = {
  slogan: PropTypes.string,
  features: PropTypes.array,
  description: PropTypes.string,
  id: PropTypes.number,
}


export default ProductInformation;