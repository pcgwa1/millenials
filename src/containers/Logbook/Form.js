import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FullWidthRow, Column } from '../../components/GridContainer';
import ActionButton from '../../components/SubmitButton';
import {
  Form, inputField, selectField, textArea,
} from '../../components/Form';
import validate from '../../helpers/validate';

const Title = styled.h2`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 600;
    font-size: 22px;
    color: #000;
    padding: 0;
    margin: 12px 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
`;

class CreateLogForm extends Component {
  render() {
    const {
      submitFunction,
      handleSubmit,
      post,
      user,
      history,
    } = this.props;
    const disable = !(post);
    return (
      <Form onSubmit={handleSubmit(values => submitFunction(values, user, history))}>
        <FullWidthRow>
          <Column xs={12}>
            <Field name='post' type='text' label='Add Post' component={textArea} />
          </Column>
        </FullWidthRow>
        <FullWidthRow>
          <Column xs={12}>
            <ActionButton label='Save' type='submit' disabled={disable} />
          </Column>
        </FullWidthRow>
      </Form>
    );
  }
}

const AddLogForm = reduxForm({
  form: 'CreateLogForm',
  validate,
})(CreateLogForm);

const selector = formValueSelector('CreateLogForm');

export function mapStateToProps(state) {
  return {
    post: selector(state, 'post'),
  };
}

export default connect(mapStateToProps, null)(AddLogForm);
