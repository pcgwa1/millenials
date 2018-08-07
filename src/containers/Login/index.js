import React, { Component } from 'react';
import { toastr } from 'react-redux-toastr';
import LoginForm from './loginForm';
import firebase from '../../firebaseConfig';

export async function handleSubmit(values, history) {
  firebase.auth()
    .signInWithEmailAndPassword(values.email, values.password)
    .then((u) => {
      toastr.success('Login Successful', 'Welcome to Millennials');
      history.push('/news')
    })
    .catch((error) => {
      toastr.error('Unregistered Email', 'The email you provided is not registered with AHP.');
      console.log('error: ', error);
    });
}
class Login extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <LoginForm
          submitFunction={handleSubmit}
          history={history}
        />
      </div>
    );
  }
}

export default Login;
