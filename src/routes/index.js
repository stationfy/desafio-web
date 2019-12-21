import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import '../config/ReactotronConfig';
import history from '../services/history';

import Main from '../pages/Main';
import Repository from '../pages/Repository';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </Router>
  );
}
