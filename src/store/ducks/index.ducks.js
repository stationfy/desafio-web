import { combineReducers } from "redux";

import repos from "./repos.ducks";
import pullRequests from "./pullRequests.ducks";

export default combineReducers({
  repos,
  pullRequests
});
