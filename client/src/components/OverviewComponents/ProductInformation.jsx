import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Title, Wrapper, Header2, Header3, Header4, Text} from '../../styles/Headers.jsx'

import {RowContainer, ColumnContainer, AlignmentWrapper} from '../../styles/Boxes.jsx'


const DescriptionSloganContainer = styled(RowContainer)`
  max-height: 400px;
  border-left: none;
  border-right: none;
  border-bottom: none;
`
const FeaturesContainer = styled(ColumnContainer)`
  justify-content: flex-start;
  height: min-content;
  width: 25%;

`
const SloganDescription = styled(ColumnContainer)`
  padding-top:10px;
  width: 75%;
  height: 100%;
`
const Features = styled(Header3)`
  padding: 10px 0 5px 5px;
  border-top: none;
  border-bottom: none;
  border-right: none;
`
const ProductInformation = (props) => {

  // needs start Ratings - ask mingui for hers
  //
  if (!props.features) {
    return <div></div>
    // will need to implement a loading screen
  } else
  return (
      <DescriptionSloganContainer border = {true}>
        <SloganDescription >
          <AlignmentWrapper>
            <Title primary = {true} underline = {true}>{props.slogan}</Title>
          </AlignmentWrapper>
          <AlignmentWrapper>
            <Header3 primary = {true}>{props.description}</Header3>
          </AlignmentWrapper>
        </SloganDescription>

        <FeaturesContainer>
          <AlignmentWrapper >
          {props.features.map(feature => {
            return (

              <Features border = {true} primary = {true} key = {feature.feature + feature.value}>
                  {`${feature.feature} -   ${feature.value}`}
                </Features>
            )
          })}
          </AlignmentWrapper>
        </FeaturesContainer>
      </DescriptionSloganContainer>

  )
}

ProductInformation.propTypes = {
  slogan: PropTypes.string,
  features: PropTypes.array,
  description: PropTypes.string,
  id: PropTypes.number,
}


export default ProductInformation;