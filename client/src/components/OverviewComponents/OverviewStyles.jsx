import styled from 'styled-components'

const RowContainer = styled.div`
display: flex;
flex-direction: row;
`
const ColumnContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`
const SloganDescription = styled(ColumnContainer)`
  justify-content: space-around;
  width: 70%;
  font-size:20px
`
const FeaturesContainer = styled(ColumnContainer)`
  width: 30%;
  font-size:24px
`

const StylesSelectionCart = styled(ColumnContainer)`

  width: 30%;
  border-right: 3px solid rgb(117, 117, 117);
  border-bottom: 3px solid rgb(117, 117, 117);
  border-top:none;
  border-left:none;
  justify-content: flex-start;
`

const StyleHeader = styled(ColumnContainer)`
  height: 60%
`

const RatingsHeader = styled(RowContainer)`
  align-items: center;
  /* justify-content: space-around; */
  font-size: 20px
`

const Thumbnail = styled.img`
border-radius: 50%;
width: 80px;
height: 80px;
background: url(${(props) => props.url || 'fallback-image.jpg' }) center;
`

const StyleThumbnail = styled.div`
width: 21%;
margin: 8px;
`

const StyleThumbnails = styled(RowContainer)`
flex-wrap: wrap
`

const CartContainer = styled(ColumnContainer)`

  width: 100%;
  border-top: 3px solid rgb(117, 117, 117);
  justify-content: center;
  align-items: center;
  margin: 10px;

`


export {CartContainer, RowContainer, StyleThumbnail, StyleThumbnails, Thumbnail, RatingsHeader, StyleHeader, StylesSelectionCart, ColumnContainer, SloganDescription, FeaturesContainer}