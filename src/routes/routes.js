import React from "react";
import { Switch, Route } from "react-router-dom";

import ReposPage from "../pages/ReposPage/ReposPage";
import PullPage from "../pages/PullPage/PullPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ReposPage} />
      <Route exact path="/:login/:name" component={PullPage} />
    </Switch>
  );
};

export default Routes;
