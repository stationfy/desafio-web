import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LazyImport from '../../utils/lazyImport';

const PullRequestsPage = LazyImport({
  loader: () => import('../../../containers/PullRequests' /* webpackChunkName: 'app-chunk-pullrequests-page' */),
});

const ReposPage = LazyImport({
  loader: () => import('../../../containers/Repos' /* webpackChunkName: 'app-chunk-repos-page' */),
});

export default (() => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ReposPage} />
        <Route path="/pulls/:creator/:repo" component={PullRequestsPage} />
      </Switch>
    </>
  );
});