import React from "react";
import { Switch, Route } from "react-router-dom";

import ReposPage from "../pages/ReposPage/ReposPage";
import PullsPage from "../pages/PullsPage/PullsPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ReposPage} />
      <Route exact path="/:login/:name" component={PullsPage} />
    </Switch>
  );
};

export default Routes;
