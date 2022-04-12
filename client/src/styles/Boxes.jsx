import React from 'react';
import styled from 'styled-components';
import {Theme} from './Headers.jsx'

const RowContainer = styled(Theme)`
  display: flex;
  flex-direction: row;
`

const ColumnContainer = styled(Theme)`
  display: flex;
  flex-direction: column;
`
const AlignmentWrapper = styled.div`
  margin: 10px;
`
const RatingsReviewContainer = styled(ColumnContainer)`
  border-radius: 12px;
`



const MainHeader = styled(RowContainer)`
  justify-content: space-between;
  align-content: space-around;
  align-items: center;
  min-height: 100px;
  background-color: #3e3e3e;
  border: 5px solid #FAFAFA;
  border-radius: 20px;
  margin: 10px 0 30px 0;
`

const DescriptionBox = styled.div`
  height: 300px;
  width: 250px;
  border: none;
  margin: 5px;
  padding: 20px;
`;

const BreakdownBox = styled(ColumnContainer)`
  height: min-content;
  min-width: 400px;
  border-left: none;
  border-bottom: none;
  border-top: none;
  row-gap: 15px ;
`;

const BreakDownAlignment = styled(AlignmentWrapper)`
  display:flex;
  flex-direction: column;
  column-gap: 20px;
`

const BigBox = styled.div`
  height: 500px;
  width: 600px;
  border: 1px solid #000;
  margin: 10px;
  padding: 10px;
`;
const ReallyBigBox = styled(RowContainer)`
  width: 100%;
  justify-content: flex-start;
  border-right: none;
  border-left: none;
  border-bottom:none;
  margin: 15px 0 15px 0;
`;

const LittleBox = styled.div`
  height: 200px;
  width: 200px;
  border: 1px solid #000;
  margin: 5px;
  padding: 10px;
`;

const ReviewsContainer = styled(ColumnContainer)`
  width: 100%;
`;

const InnerReviewsContainer = styled(ColumnContainer)`
  row-gap: 10px;
`

const ReviewBox = styled(ColumnContainer)`
  display: flex;
  border: 1px dashed rgb(199, 197, 197);
`;

const ReviewTop = styled(RowContainer)`
  justify-content: space-between;
`;

const EmptyBox = styled(ColumnContainer)`
  width: 45px;
`
const UserMoment = styled(RowContainer)`
  min-width: 250px;
  justify-content: space-between;
`

const CharacteristicsContainer = styled.div`
  height: 100%;
  width: 700px;
  margin: 1px;
  padding: 1px;
  display: flex;
  flex-direction: column;
  border: none;
`;

const CharacteristicsBox = styled.div`
  height: 100%;
  width: 650px;
  margin: 1px;
  padding: 1px;
  display: flex;
  flex-direction: column;
`;
const CharacteristicsButtons = styled.div`
  height: 100%;
  width: 650px;
  margin: 1px;
  padding: 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const IndividualCharacteristic = styled(CharacteristicsButtons)`
  height: 30px;
  padding-top: 0px;
  padding-bottom: 0px;
`;

const ReviewImages = styled.div`
  height: 130px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

`;

export {MainHeader, EmptyBox, BreakDownAlignment, InnerReviewsContainer, RatingsReviewContainer, RowContainer, ColumnContainer, AlignmentWrapper, DescriptionBox, BigBox, LittleBox, ReviewBox, ReviewTop, ReviewsContainer, BreakdownBox, ReallyBigBox, CharacteristicsContainer, CharacteristicsBox, CharacteristicsButtons, IndividualCharacteristic, Theme, UserMoment, ReviewImages }