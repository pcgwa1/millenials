import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FullWidthRow, Column } from '../../components/GridContainer';
import ActionButton from '../../components/SubmitButton';
import {
  Form, inputField, selectField, textArea,
} from '../../components/Form';
import dropDown from '../../components/Form/searchableDropdown';
import validate from '../../helpers/validate';
import healthFacilities from '../../appData/FormData/healthFacilities';
import categories from '../../appData/FormData/categories';
import icdCodes from '../../appData/FormData/icd10Codes';
import role from '../../appData/FormData/role';
import { db } from '../../firebaseConfig';

const Title = styled.h2`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 600;
    font-size: 22px;
    color: #000;
    padding: 0;
    margin: 12px 0;
`;

const SubTitle = styled.p`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #000;
    padding: 0;
    margin: 0 0 18px 0;
`;


function deleteEvent(id, history) {
  db.collection('events')
    .doc(id)
    .delete()
    .then(() => {
      history.push('/logbook');
    });
}

class UpdateLogForm extends Component {
  render() {
    const {
      submitFunction,
      handleSubmit,
      id,
      name,
      location,
      category,
      icdCode,
      procedureCode,
      user,
      history,
    } = this.props;
    const disable = !(name && location && category && icdCode && procedureCode);
    return (
      <Form onSubmit={handleSubmit(values => submitFunction(values, user, history))}>
        <FullWidthRow>
          <Column xs={12}>
            <Title>
              LOCATION & CATEGORY
            </Title>
          </Column>
          <Column xs={12}>
            <SubTitle>
              Set the location and specify the category of treatment provided,
              e.g. Theatre, ward, out-patient, etc.
            </SubTitle>
          </Column>
          <Column xs={12}>
            <Field name='name' type='text' label='Event name' component={inputField} />
          </Column>
          <Column xs={12}>
            <Field
              name='location'
              label='Select Location'
              placeholder=''
              options={healthFacilities.facility}
              component={dropDown}
            />
          </Column>
          <Column xs={12}>
            <Field
              name='category'
              label='Select Category'
              placeholder=''
              options={categories.options}
              component={selectField}
            />
          </Column>
        </FullWidthRow>
        <FullWidthRow>
          <Column xs={12}>
            <Title>
              CLASSIFICATION
            </Title>
          </Column>
          <Column xs={12}>
            <SubTitle>
              Enter the calssification of the event,
              add ICD-10 diagnosis code, MDCM procedure code and text for the experience.
            </SubTitle>
          </Column>
          <Column xs={12}>
            <Field
              name='icdCode'
              label='ICD-10 Code'
              placeholder=''
              options={icdCodes.options}
              component={dropDown}
            />
          </Column>
          <Column xs={12}>
            <Field name='procedureCode' type='text' label='Procedure Code' component={inputField} />
          </Column>
          <Column xs={12}>
            <Field name='experienceNotes' type='text' label='Experience Notes' component={textArea} />
          </Column>
        </FullWidthRow>
        <FullWidthRow>
          <Column xs={12}>
            <Title>
              DETAILS
            </Title>
          </Column>
          <Column xs={12}>
            <SubTitle>
              Enter the date of the event, your role, additional
              text details and possible complications.
            </SubTitle>
          </Column>
          <Column xs={12}>
            <Field name='date' type='text' label='Select Date' component={inputField} />
          </Column>
          <Column xs={12}>
            <Field
              name='role'
              label='Role'
              placeholder=''
              options={role.options}
              component={selectField}
            />
          </Column>
          <Column xs={12}>
            <Field name='assistantOrSupervisor' type='text' label='Assistant/Supervisor' component={inputField} />
          </Column>
          <Column xs={12}>
            <Field name='additionalDetails' type='text' label='Additional Details' component={textArea} />
          </Column>
          <Column xs={12}>
            <Field name='complications' type='text' label='Complications' component={textArea} />
          </Column>
          <Column xs={12}>
            <ActionButton label='Save' type='submit' disabled={disable} />
          </Column>
          <Column xs={12}>
            <ActionButton
              type='button'
              onClick={() => deleteEvent(id, history)}
            >
              Delete
            </ActionButton>
          </Column>
        </FullWidthRow>
      </Form>
    );
  }
}

const EditLogForm = reduxForm({
  form: 'UpdateLogForm',
  initialValues: {},
  validate,
  destroyOnUnmount: false,
})(UpdateLogForm);

const selector = formValueSelector('UpdateLogForm');

export function mapStateToProps(state) {
  return {
    id: selector(state, 'id'),
    name: selector(state, 'name'),
    location: selector(state, 'location'),
    category: selector(state, 'category'),
    icdCode: selector(state, 'icdCode'),
    procedureCode: selector(state, 'procedureCode'),
    experienceNotes: selector(state, 'experienceNotes'),
  };
}

export default connect(mapStateToProps, null)(EditLogForm);
