import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FullWidthRow, Column } from '../../components/GridContainer';
import ActionButton from '../../components/SubmitButton';
import { Form, inputField } from '../../components/Form';
import validate from '../../helpers/validate';

export const FormWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class LoginForm extends Component {
  render() {
    const {
      submitFunction,
      handleSubmit,
      email,
      password,
      history,
    } = this.props;
    const disable = !(email && password);
    return (
      <Form onSubmit={handleSubmit(values => submitFunction(values, history))}>
        <FormWrapper>
          <FullWidthRow>
            <Column xs={12}>
              <Field name='email' type='email' label='Email' component={inputField} />
            </Column>
            <Column xs={12}>
              <Field name='password' type='password' label='Password' component={inputField} />
            </Column>
            <Column xs={12}>
              <ActionButton label='Login' type='submit' disabled={disable} />
            </Column>
          </FullWidthRow>
        </FormWrapper>
      </Form>
    );
  }
}

const Login = reduxForm({
  form: 'LoginForm',
  validate,
})(LoginForm);

const selector = formValueSelector('LoginForm');

export function mapStateToProps(state) {
  return {
    email: selector(state, 'email'),
    password: selector(state, 'password'),
  };
}

export default connect(mapStateToProps, null)(Login);
