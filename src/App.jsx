import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Routes from './routers';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
