import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import asyncComponent from './components/AsyncComponent';
import { MainWrapper, Footer } from './components/MainWrapper';
import Header from './components/Header';
const Home = asyncComponent(() => import('./containers/Home'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <MainWrapper>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
            <Footer />
          </MainWrapper>
        </Router>
      </div>
    );
  }
}

export default App;