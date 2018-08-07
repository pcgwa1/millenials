import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import fire from '../../firebaseConfig';


export const Form = styled.form`
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const LinkWrapper = styled(Link)`
    margin: 12px 0;
    font-weight: bold;
    text-decoration: none;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log('promise response success', u.user.uid);
        if(u.user.uid) {
          this.setState({user: u.user.uid});
        }
      })
      .catch((error) => {
        console.log('error: ', error);
      })
  }

  componentWillUpdate(){
    if(this.state.user){
      this.props.history.push('/');
    }
  }

  handleChange(e){
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <PageContainer>
        <Form>

        </Form>
      </PageContainer>
    );
  }
}

export default Login;
