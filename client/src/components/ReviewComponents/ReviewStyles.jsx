import React from 'react';
import styled from 'styled-components';
import {Title, Wrapper, Header2, Header3, Header4} from '../../styles/Headers.jsx';
import {Form, Label, Input} from '../../styles/Forms.jsx';
import {DescriptionBox, BigBox, LittleBox, CharacteristicsContainer, CharacteristicsBox, CharacteristicsButtons, IndividualCharacteristic} from '../../styles/Boxes.jsx';

const AddSubmitButton = styled.button`
  width: 30%;
  height: 40px;
  background: #E4E4E4;
  color:  #3E3E3E;
  border-radius: 10px;
  &:hover {
    transition-duration: .3s;
    transform: scale(1.1);
    background: #3E3E3E;
    color: #E4E4E4;
  };
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 5px;
  padding: 10px;
  border: 1px solid #000;
`

const TextArea = styled.textarea`
padding: 0.5em;
color: #000;
background: #fff;
border: 1px solid #000;
border-radius: 3px;
width: 70%;
margin-top: 3px;
`;

const SummaryInput = styled(Input)`
  width: 70%;
  height: 25px;
`;


const Background = styled.div`
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);
position: fixed;
top:0%;
right: 0%;
display: flex;
justify-content: center;
align-items: center;
border: 20px;
opacity: 1;
transition: opacity 0.6s linear;
z-index: 999;
`;
const ModalWrapper = styled.div`
border: 1px solid #000;
width: 1400px;
position: absolute;
z-index: 100;
align-items: center;
background: #FAFAFA;
border-radius: 12px;
column-gap: 10px;
@keyframes fadein {
  from { opacity: 0; }
  to { opacity: 1; }
};
animation: fadein .3s linear;
`;

const NewReviewBox = styled(BigBox)`
  height: 100%;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: flex-start;
`;

const InnerReviewBox = styled(NewReviewBox)`
width: 100%;
  flex-direction: row;
`;


const BodyInput = styled(Input)`
  width: 70%;
  inline-size: 500px;
  overflow-wrap: break-word;
  height: 60px;
`;
const FadedLabel = styled(Label)`
margin-top: 0px;
margin-bottom: 0.5em;
color: #989898;
font-size: 14px;
padding: 0px;
`;

const Outermost = styled.div`
height: 100%;
/* width: 100%; */
display: flex;
flex-direction: column;
`;

const Mid = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: row;
`;

const InnerMost = styled.div`
height: 100%;
width: 50%;
margin: 10px;
padding: 10px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`;

const SuperInnerMost = styled.div`
height: 100%;
width: 100%;
padding-top: 10px;
padding-bottom: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const AddReviewHeader = styled.div`
width: 95%;
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export {AddSubmitButton, TextArea, Background, ModalWrapper, NewReviewBox, InnerReviewBox, SummaryInput, BodyInput, FadedLabel, Outermost, Mid, InnerMost, SuperInnerMost, AddReviewHeader}