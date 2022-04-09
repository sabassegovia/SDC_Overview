import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Title, Wrapper, Header2, Header3, Header4, Text} from '../../styles/Headers.jsx'

import {RowContainer, ColumnContainer, AlignmentWrapper} from '../../styles/Boxes.jsx'


const FeaturesContainer = styled(ColumnContainer)`
  justify-content: flex-start;
  height: min-content;
  width: 30%;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-width: 1px;
`
const SloganDescription = styled(ColumnContainer)`
  width: 70%;
  height: 100%;
`
const DescriptionSloganContainer = styled(RowContainer)`
  height: 100%;
  border-left: none;
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

        <FeaturesContainer border = {true}>
          {props.features.map(feature => {
            return (
              <AlignmentWrapper key = {feature.feature + feature.value}>
                <Header2>
                  {`${feature.feature} -   ${feature.value}`}
                </Header2>
              </AlignmentWrapper>
            )
          })}
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