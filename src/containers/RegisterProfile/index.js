import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import RegisterProfileForm from './RegisterProfileForm';
import firebase, { db } from '../../firebaseConfig';

export const PageHeader = styled(Col)`
  max-width: 100vw;
  background: #fff;
  padding: 12px;
`;

const PageHeaderTitle = styled.h1`
    font-weight: bold;
    font-size: 38px;
    color: #000;
    padding: 0;
    margin: 7.5vh 0 12px 0;
`;

export const Content = styled(Col)`
  min-height: 77vh;
`;

export const Column = styled(Col)`
  width: 100%;
  padding: 12px;
`;

export const SubText = styled.p`
  margin: 0;
  padding: 0;
  color: #808080;
`;

export const Wrapper = styled.div`
  margin: 0;
  padding: 12px;
`;

export async function handleSubmit(values) {
  let userId = null;
  firebase.auth()
          .createUserWithEmailAndPassword(values.email, values.password)
          .then((u) => {
              console.log('success!!!!! in auth', u.user.uid);
              if(u.user.uid) {
                // step 1: create the reference
                const newUserReference = db.collection('users').doc(u.user.uid);
                // step 2: update the reference with the data
                newUserReference.set({
                  id: newUserReference.id,
                  firstname: values.firstname,
                  lastname: values.lastname,
                  mobileNumber: values.mobileNumber,
                  email: values.email,
                  facebook: values.facebook,
                  instagram: values.instagram,
                  twitter: values.twitter,
                  age: values.age,
                  location: values.location,
                  studies: values.studies,
                  currentJob: values.currentJob,
                  currentJobDuration: values.currentJobDuration,
                  dreamJob: values.dreamJob,

                }).then((data) => {
                  console.log('success in registration!!!!!', data);
                }).catch((error) => {
                  console.log('error: ', error);
                });
              }
            }).catch(function(error) {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log('error code: ', errorCode);
              console.log('error message: ', errorMessage);
              // ...
            });

}
class RegisterProfile extends Component {
  render() {
    const { user, history } = this.props;
    console.log(this.props);
    return (
      <div>
        <PageHeader>
          <Row start='xs' center='md' style={{ height: '100%' }}>
            <Column xs={12}>
              <Wrapper>
                <PageHeaderTitle>
                Register Profile
                </PageHeaderTitle>
                <SubText>
                  To create a profile, please enter your details below.
                </SubText>
              </Wrapper>
            </Column>
          </Row>
        </PageHeader>
        <Content>
          <RegisterProfileForm
            submitFunction={handleSubmit}
          />
        </Content>
      </div>

    );
  }
}

export default RegisterProfile;
