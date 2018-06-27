import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import PRList from '../containers/PRList';

export default () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/pullrequests/:creator/:repository" component={PRList} />
        <Route component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);
