import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../config/ReactotronConfig';

import Main from '../pages/Main';
import PullRequests from '../pages/PullRequests';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/pullrequests" component={PullRequests} />
    </Switch>
  );
}
