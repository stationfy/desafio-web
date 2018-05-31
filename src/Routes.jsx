import React from 'react';
import {
  Router,
  Route,
  browserHistory,
} from 'react-router';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { thunkMiddleware } from 'redux-thunk';
import Repositories from './containers/Repositories';
import repositories from './state/reducers/repositories';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // eslint-disable-line
const reduxThunk = applyMiddleware(thunkMiddleware);
const reducers = combineReducers({
  reduxThunk,
  repositories,
});
const store = createStore(reducers, reduxDevTools);

export default () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Repositories} />
    </Router>
  </Provider>
);
