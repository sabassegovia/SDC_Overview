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

const CartContainer = styled(ColumnContainer)`
  width: 100%;
  /* border-top: 3px solid rgb(117, 117, 117); */
  justify-content: center;
  align-items: center;
  margin: 10px;
`

export {CartContainer, RowContainer, ColumnContainer}