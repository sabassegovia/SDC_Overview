import React from 'react';
import axios from "axios"
import ReactDom from 'react-dom';

import { Axios } from "../../AxiosConfig.js"
import styled, { css } from 'styled-components';
import {Title, Wrapper, Header2, Header3, Header4} from '../../styles/Headers.jsx';
import {Form, Label, Input, InputTextArea, InputText} from '../../styles/Forms.jsx';
import {RowContainer, ColumnContainer, AlignmentWrapper, MainHeader, EmptyBox} from '../../styles/Boxes.jsx';
import PropTypes from 'prop-types';

import {CloseModalButton} from '../../styles/Icons.jsx'

const Background = styled(ColumnContainer)`
  position: absolute;
  top: ${props => window.scrollY + props.AddQuestionButtonPosition.y - props.ModalPosition.height - 20}px;
  left: ${props =>  props.AddQuestionButtonPosition.left - props.ModalPosition.width/2 + props.AddQuestionButtonPosition.width/2}px;
  z-index: 100;
  align-items: center;
  background: #FAFAFA;
  border-radius: 12px;
  @keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
};
  animation: fadein .3s linear;
`;

const AddQuestionContainer = styled(ColumnContainer)`
  row-gap: 10px;
`
const FormContainer = styled(ColumnContainer)`
  display: flex;
  flex-direction:column;
  row-gap: 10px;
`

const AddSubmitButton = styled.button`
  width: 20%;
  height: 40px;
  background: #e4e4e4;
  color:  #3e3e3e;
  border-radius: 12px;
  &:hover {
    transition-duration: .3s;
    transform: scale(1.1);
    background: #3e3e3e;
    color: #e4e4e4;
  };
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`


class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.state = {
      body: '',
      name: '',
      email: '',
      product_id: 0,
      ModalPosition: {},
    }
    this.AddQuestionModal = React.createRef()

  };

  componentDidMount() {
    this.setState({
      product_id: this.props.id,
      ModalPosition: this.AddQuestionModal.current.getBoundingClientRect()
    })
  }




  handleBody(event) {
    this.setState({
      body: event.target.value
    })
  }

  handleName(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    var params = {
      product_id: this.state.product_id,
      body: this.state.body,
      name: this.state.name,
      email: this.state.email
    }
    console.log(params)
    console.log('submitting question!')
    console.log(typeof params.body)
    console.log(typeof params.product_id)
    Axios.post(`/qa/questions`,  params )
    .then(result => {console.log(result.data)
      this.props.handleAddQuestionModal()})
    .catch(err => {console.log(err)})
  }

  render() {
    return ReactDom.createPortal (
      <Background
        // onBLur = {this.handleOnBlur.bind(this)}
        border = {true}
        AddQuestionButtonPosition = {this.props.AddQuestionButtonPosition}
        ModalPosition = {this.state.ModalPosition}
        ref = {this.AddQuestionModal}
        >
        <AlignmentWrapper
          css = {`
            margin: 30px;
          `}
        >
          <AddQuestionContainer>
            <RowContainer css = {`justify-content: space-between;`}>
              <Header2
                border = {true}
                css = {`
                border-right: none;
                border-top: none;
                border-left: none;

                `}
                >Ask Your Question</Header2>
                <CloseModalButton onClick = {()=> {this.props.handleAddQuestionModal()}}/>
              </RowContainer>
            <Header2
              css = {`font-size: 20px;`}
              >About the {this.props.name}</Header2>
            <FormContainer>
              <Header3>What is your question ?</Header3>
              <InputTextArea type="text" name="question" maxLength="1000" onChange={this.handleBody}/>

              <Header3>Nickname</Header3>
              <InputText type="text" name="name" placeholder=" Example: jackson11!" maxLength="60" onChange={this.handleName}></InputText>
              <Header4>For privacy reasons, do not use your full name or email address</Header4>

              <Header3>e-mail</Header3>
              <InputText type="text" name="email" placeholder=" Example: jackson11@email.com" maxLength="60" onChange={this.handleEmail}></InputText>
              <Header4>For authentication reasons, you will not be emailed</Header4>

              <AddSubmitButton type = "submit" onClick={(e) => {this.handleSubmit(e)}}>Submit</AddSubmitButton>
            </FormContainer>
          </AddQuestionContainer>
        </AlignmentWrapper>
      </Background>, document.getElementById('portal3')
    );
  };
}

AddQuestion.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  AddQuestionButtonPosition: PropTypes.object,
  handleAddQuestionModal: PropTypes.func,


}

export default AddQuestion;