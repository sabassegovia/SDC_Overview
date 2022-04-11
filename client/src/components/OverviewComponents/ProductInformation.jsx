import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Title, Wrapper, Header2, Header3, Header4, Text} from '../../styles/Headers.jsx'

import {RowContainer, ColumnContainer, AlignmentWrapper, EmptyBox} from '../../styles/Boxes.jsx'


const DescriptionSloganContainer = styled(RowContainer)`
  justify-content: flex-start;
  border-left: none;
  border-right: none;
  border-bottom: none;
  padding: 40px 0 40px 0;
`
const FeaturesContainer = styled(ColumnContainer)`
  justify-content: flex-start;
  height: min-content;
  width: 15%;
`
const SloganDescription = styled(ColumnContainer)`
  padding-top:10px;
  width: 65%;
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
        <EmptyBox />
        <SloganDescription >
          <AlignmentWrapper>
            <Header2 primary = {true} underline = {true}>{props.slogan}</Header2>
          </AlignmentWrapper>
          <AlignmentWrapper>
            <Header3 primary = {true}>{props.description}</Header3>
          </AlignmentWrapper>
        </SloganDescription>

        <FeaturesContainer>
          <AlignmentWrapper >
          {props.features.map(feature => {
            if (feature.value) {

              return (

                <Features border = {true} primary = {true} key = {feature.feature + feature.value}>
                    {`${feature.feature} -   ${feature.value}`}
                  </Features>
              )
            }
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