import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FullWidthRow, Column } from '../../components/GridContainer';
import { Button } from '../../components/Button';
import { Form, inputField } from '../../components/Form';
import validate from '../../helpers/validate';

const SectionTitle = styled.h2`
    font-weight: bold;
    font-size: 28px;
    color: #000;
    padding: 0;
    margin: 12px 0;
`;

class RegisterProfileForm extends Component {
  render() {
    const {
      submitFunction,
      handleSubmit,
      history,
    } = this.props;
    return (
      <Form onSubmit={handleSubmit(values => submitFunction(values, history))}>
        <FullWidthRow>
          <Column xs={12} md={8}>
            <SectionTitle>
              YOUR DETAILS
            </SectionTitle>
          </Column>
          <Column xs={12} md={8}>
            <Field name='firstname' type='text' placeholder='First Name*' component={inputField} />
          </Column>
          <Column xs={12} md={8}>
            <Field name='lastname' type='text' placeholder='Last Name*' component={inputField} />
          </Column>
          <Column xs={12} md={8}>
            <Field name='mobileNumber' type='phone' placeholder='Mobile Number*' component={inputField} />
          </Column>
          <Column xs={12} md={8}>
            <Field name='email' type='email' placeholder='Email*' component={inputField} />
          </Column>
          <Column xs={12} md={8}>
            <Field name='password' type='password' placeholder='Password*' component={inputField} />
          </Column>
        </FullWidthRow>
        <FullWidthRow>
          <Column xs={12} md={8}>
            <SectionTitle>
              SOCIAL MEDIA
            </SectionTitle>
          </Column>
          <Column xs={12} md={8}>
            <Field name='facebook' type='text' placeholder='Facebook Name*' component={inputField} />
          </Column>
          <Column xs={12} md={8}>
            <Field name='instagram' type='text' placeholder='Instagram Name*' component={inputField} />
          </Column>
          <Column xs={12} md={8}>
            <Field name='twitter' type='phone' placeholder='Twitter Handle' component={inputField} />
          </Column>
        </FullWidthRow>
        <FullWidthRow>
          <Column xs={12} md={8}>
            <SectionTitle>
              MORE ABOUT YOU
            </SectionTitle>
          </Column>
          <Column xs={12} md={8}>
            <Field name='age' type='number' placeholder='Age*' component={inputField} />
          </Column>
          <Column xs={12} md={8}>
            <Field name='location' type='text' placeholder='Where do you stay?*' component={inputField} />
          </Column>
          <Column xs={12} md={8}>
            <Field name='studies' type='text' placeholder='Where did you study?*' component={inputField} />
          </Column>
          <Column xs={12} md={8}>
            <Field name='currentJob' type='text' placeholder='Where do you work?*' component={inputField} />
          </Column>
          <Column xs={12} md={8}>
            <Field name='currentJobDuration' type='text' placeholder='Work period (Years)?*' component={inputField} />
          </Column>
          <Column xs={12} md={8}>
            <Field name='dreamJob' type='text' placeholder='What is your dream job?*' component={inputField} />
          </Column>
        </FullWidthRow>
        <FullWidthRow>
          <Column xs={12}>
            <Button type='submit' >
              Submit Information
            </Button>
          </Column>
        </FullWidthRow>
      </Form>
    );
  }
}

const ProfileForm = reduxForm({
  form: 'RegisterProfileForm',
  validate,
})(RegisterProfileForm);

const selector = formValueSelector('RegisterProfileForm');

export function mapStateToProps(state) {
  return {
    firstname: selector(state, 'firstname'),
    lastname: selector(state, 'lastname'),
    mobileNumber: selector(state, 'mobileNumber'),
    country: selector(state, 'country'),
    passportNumber: selector(state, 'passportNumber'),
    role: selector(state, 'role'),
  };
}

export default connect(mapStateToProps, null)(ProfileForm);
