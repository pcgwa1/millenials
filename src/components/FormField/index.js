// SurveyField contains logic to render a single
// label and text input
import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100%;
`;

export const FieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
  margin: 18px 0;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

export const Input = styled.input`
  align-self: flex-end;
  width: 500px;
  padding: 8px;
  box-shadow: ${props => props.error ? '0 1px 0 0 rgba(255,0,0,0.37)' : '0 1px 0 0 rgba(0,0,0,0.17)'};
  border: none;
  outline: none;
  font-size: 18px;
`;

export const Error = styled.div`
  color: red;
`;

export default ({ label, type, name, value, onChangeHandler }) => {
  return (
    <Wrapper>
      <FieldWrapper>
        <Label>{label}</Label>
        <Input type={type} name={name} value={value} onChange={onChangeHandler} />
      </FieldWrapper>
    </Wrapper>
  );
};
