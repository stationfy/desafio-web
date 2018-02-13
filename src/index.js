import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";

import { Router, browserHistory, Route } from "react-router";

import Repository from "./components/repositories/Repository";
import PullRequests from './components/pullRequests/PullRequests';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Repository} />
      <Route path="pulls/:creator/:repo" component={PullRequests} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
