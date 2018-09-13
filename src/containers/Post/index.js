import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toastr } from 'react-redux-toastr';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import FixedPageWrapper from '../../components/PageContainer';
import UpdateLogForm from './Form';
import { db } from '../../firebaseConfig';


export const PageHeader = styled(Col)`
  max-width: 100vw;
  height: 50px;
  background: #F5A800;
  padding: 0 12px;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
`;

export const PageTitle = styled.h3`
  font-size: 18px;
  color: #fff;
  margin: 0;
  padding: 0;
  text-align: center;
  text-transform: uppercase;
`;
export const Content = styled(Col)`
  margin-top: 8vh;
  min-height: 100vh;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
`;

export const Column = styled(Col)`
  width: 100%;
  padding: 12px;
`;

export const Wrapper = styled.div`
  margin: 0;
  padding: 12px;
`;

export async function handleSubmit(values, user, history) {
  // step 1: create the reference
  const timeStamp = new Date().getTime();
  const newUserReference = db.collection('events').doc(values.id);
  // step 2: update the reference with the countries
  newUserReference.set({
    id: values.id,
    uid: user,
    name: values.name,
    location: values.location,
    category: values.category,
    icdCode: values.icdCode,
    procedureCode: values.procedureCode,
    experienceNotes: values.experienceNotes ? values.experienceNotes : 'N/A',
    date: values.date,
    role: values.role,
    assistantOrSupervisor: values.assistantOrSupervisor,
    additionalDetails: values.additionalDetails ? values.additionalDetails : 'N/A',
    complications: values.complications ? values.complications : 'N/A',
    timestamp: timeStamp,
  }).then(() => {
    toastr.success('Event Created', 'You have successfully created an event');
    history.push('/logbook');
  }).catch((error) => {
    toastr.error('Something went wrong', 'Your event was not registered.');
    console.log('error: ', error);
  });
}
class RegisterProfile extends Component {
  render() {
    const { user, history } = this.props;
    return (
      <FixedPageWrapper>
        <PageHeader>
          <Row between='xs'>
            <Column xs={3}>
              <NavLink to='/'>
                CANCEL
              </NavLink>
            </Column>
            <Column xs={6}>
              <PageTitle>Edit Entry</PageTitle>
            </Column>
            <Column xs={3}>
              <NavLink to='/'>
                Save
              </NavLink>
            </Column>
          </Row>
        </PageHeader>
        <Content>
          <UpdateLogForm
            user={user}
            submitFunction={handleSubmit}
            history={history}
          />
        </Content>
      </FixedPageWrapper>

    );
  }
}

export function mapStateToProps(state) {
  return {
    userEvents: state.logbook.userEvents,
  };
}

export default connect(mapStateToProps, null)(RegisterProfile);
