import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { persistStore, persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import 'firebase/auth';
import 'firebase/database';
import firebaseInit from './firebaseConfig';
import app from './reducer';
import profile from './containers/Profile/reducer';
import logbook from './containers/Logbook/reducer';

const persistConfig = {
  key: 'root',
  storage: localStorage,
};

const middleware = applyMiddleware(thunk);

export default (initialState = {}) => {
  const createStoreWithFirebase = compose(
    reactReduxFirebase(firebaseInit),
    middleware, window.devToolsExtension ? window.devToolsExtension() : f => f,
  )(createStore);

  const rootReducer = combineReducers({
    firebase: persistReducer(
      { key: 'firepersist', storage: localStorage, stateReconciler: hardSet },
      firebaseReducer,
    ),
    form: reduxFormReducer,
    toastr: toastrReducer,
    app,
    profile,
    logbook,
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStoreWithFirebase(persistedReducer, initialState);
  const persistor = persistStore(store);

  return { store, persistor };
};
