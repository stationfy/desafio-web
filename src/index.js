import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { browserHistory, Router, Route  } from 'react-router'
import Repository from './container/Repository'
import PullRequest from './container/PullRequest'
import { listReducer } from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(listReducer);


ReactDOM.render(

  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
	<Route path="/" component={Repository} />
	<Route path="/pulls" component={PullRequest} />
      </Route>
    </Router>
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
