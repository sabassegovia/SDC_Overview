import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import {Title, Wrapper, Header2, Header3, Header4} from '../../styles/Headers.jsx';
import {Form, Label, Input, InputTextArea, InputText} from '../../styles/Forms.jsx';
import {CartContainer, RowContainer, ColumnContainer, AlignmentWrapper} from '../../styles/Boxes.jsx';


const MorePictureUploads = (props) => {

  const [upload, setUpload] = useState(false);

  const handleOnChange = (e) => {
    console.log(e)
    setUpload(prev => prev ? prev : props.photoUploads === 4 ? prev : !prev)
    return props.onImageUpload(e)
  }

  return (
    <React.Fragment>
      <Form action="/action_page.php" onChange={(e) => {handleOnChange(e.target.value)}} >
        <input disabled = {upload || props.photoUploads === 5} type="file" id="myFile" name="filename" accept="image/gif, image/jpeg, image/png"></input>
      </Form>
      {upload? <MorePictureUploads
        onImageUpload = {props.onImageUpload}
        photoUploads = {props.photoUploads}/> : null}
    </React.Fragment>
  )
}


MorePictureUploads.propTypes = {
  onImageUpload: PropTypes.func.isRequired,
  photoUploads: PropTypes.number.isRequired,
}

export default MorePictureUploads;