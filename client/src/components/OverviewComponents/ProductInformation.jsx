import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {RowContainer, SloganDescription, ColumnContainer} from './OverviewStyles.jsx';
import {Title, Wrapper, Header2, Header3, Header4, Text} from '../../styles/Headers.jsx'

const Description = styled(Header3)`
margin: 10px;
`
const Features = styled(Header2)`
margin: 5px 0 5px 20px;
`
const FeaturesContainer = styled(ColumnContainer)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30%;
  font-size:20px
  margin: 30px;
`

const Slogan = styled(Title)`
  margin: 5px 0px 10px 10px;

`

const ProductInformation = (props) => {

  // needs start Ratings - ask mingui for hers
  //
  if (!props.features) {
    return <div>nothing here yet</div>
    // will need to implement a loading screen
  } else
  return (

    <ColumnContainer>
      <RowContainer>
        <SloganDescription>
          <Slogan>{props.slogan}</Slogan>
          <Description>{props.description}</Description>
        </SloganDescription>

        <FeaturesContainer>
          {props.features.map(feature => {
            return <Features key = {feature.feature + feature.value}>
                    {`${feature.feature} -   ${feature.value}`}
                    </Features>
          })}
        </FeaturesContainer>
      </RowContainer>
      </ColumnContainer>
  )
}

ProductInformation.propTypes = {
  slogan: PropTypes.string,
  features: PropTypes.array,
  description: PropTypes.string,
  id: PropTypes.number,
}


export default ProductInformation;