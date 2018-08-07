import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import asyncComponent from './components/AsyncComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import setUserData from './actions';
import firebase from './firebaseConfig';

const Home = asyncComponent(() => import('./containers/Home'));
const Podcast = asyncComponent(() => import('./containers/Podcast'));
const Profile = asyncComponent(() => import('./containers/Profile'));
const JoinGroupIntro = asyncComponent(() => import('./containers/JoinGroupIntro'));
const RegisterProfile = asyncComponent(() => import('./containers/RegisterProfile'));
const Contact = asyncComponent(() => import('./containers/Contact'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    const { setUserDataToState } = this.props;
    this.authListener(setUserDataToState);
  }

  authListener(setUserDataToState) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserDataToState(user.uid);
      } else {
        setUserDataToState(null);
      }
    });
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <Router>
          <div>
            <Header user={user} />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/join' component={JoinGroupIntro} />
              <Route exact path='/signup' component={RegisterProfile} />
              <Route exact path='/profile' component={() => <Profile user={user} />} />
              <Route exact path='/podcast' component={Podcast} />
              <Route exact path='/contact' component={Contact} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    user: state.app.user,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    setUserDataToState: data => dispatch(setUserData(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);