import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import browserHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Application from './App';
import createStore from './Store';
import theme from './theme';
import './index.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import registerServiceWorker from './registerServiceWorker';

const initialState = {};

const { store, persistor } = createStore(initialState, browserHistory);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Router basename={window.location.pathname}>
          <Application />
        </Router>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();