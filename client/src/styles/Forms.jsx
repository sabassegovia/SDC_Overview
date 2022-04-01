import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
color: #98999b;
display: block;
widthL 300px;
marginL 50px auto;
`;

const Label = styled.label`
margin-bottom: 0.5em;
color: #000;
display: block;
`;

const Input = styled.input`
padding: 0.5em;
color: #000;
background: #fff;
border: 1px solid #000;
border-radius: 3px;
width: 30%;
margin: 5px;
`;

export {Form, Label, Input};