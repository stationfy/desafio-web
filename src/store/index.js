import { createStore, combineReducers } from 'redux';

export default () => {
  const store = createStore(
    combineReducers({
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
  );

  return store;
};
