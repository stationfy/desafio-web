import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Home from '../containers/Home';
import PRList from '../containers/PRList';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/pullrequests/:creator/:repository" component={PRList} />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>
);
