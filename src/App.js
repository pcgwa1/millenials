import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import asyncComponent from './components/AsyncComponent';
import Grid from './components/GridContainer';
import Header from './components/Header';
// import Header from './components/Menu';
import Footer from './components/Footer';
const Home = asyncComponent(() => import('./containers/Home'));
const Podcast = asyncComponent(() => import('./containers/Podcast'));
const JoinGroup = asyncComponent(() => import('./containers/JoinGroup'));
const JoinGroupIntro = asyncComponent(() => import('./containers/JoinGroupIntro'));
const SignUp = asyncComponent(() => import('./containers/SignUp'));
const RegisterProfile = asyncComponent(() => import('./containers/RegisterProfile'));
const Contact = asyncComponent(() => import('./containers/Contact'));

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/join/og' component={JoinGroup} />
              <Route exact path='/join' component={JoinGroupIntro} />
              <Route exact path='/signup/og' component={SignUp} />
              <Route exact path='/signup' component={RegisterProfile} />
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

export default App;