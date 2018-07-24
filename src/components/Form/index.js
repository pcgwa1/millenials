import React from 'react';
import styled from 'styled-components';
import { Field } from 'redux-form';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 18px;
  margin: 18px 0;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-shadow: ${props => (props.error ? '0 1px 0 0 rgba(255,0,0,0.37)' : '0 1px 0 0 rgba(0,0,0,0.17)')};
  border: none;
  outline: none;
  font-size: 18px;
  margin: 10px 0 18px 0;
`;

export const Error = styled.span`
  color: ${props => props.theme.colors.redAlert};
`;

export const inputField = (props) => {
  const {
    input, type, meta: { touched, error, warning }, placeholder,
  } = props;
  return (
    <div>
      <Input {...input} placeholder={placeholder} type={type} />
      {touched && ((error && (
        <Error>
          {error}
        </Error>
      )) || (warning && (
        <Error>
          {warning}
        </Error>
      )))}
    </div>
  );
};

export const selectField = (props) => {
  const {
    input: { name },
    placeholder,
    meta: { touched, error },
    options,
    disabled,
  } = props;
  return (
    <div>
      <Field name={name} component='select' placeholder={placeholder} disabled={disabled}>
        <option value='' disabled>{placeholder}</option>
        {options.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
      </Field>
      {touched && ((error && <Error>{error}</Error>))}
    </div>
  );
};
