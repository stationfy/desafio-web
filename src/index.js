import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";

import { Router, hashHistory, Route } from "react-router";

import Repository from "./components/repositories/Repository";
import PullRequests from './components/pullRequests/PullRequests';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Repository} />
      <Route path="pulls/:creator/:repo" component={PullRequests} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
