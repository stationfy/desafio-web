import { combineReducers } from "redux";

import repos from "./repos/reducer";
import pulls from "./pulls/reducer";

export default combineReducers({
  repos,
  pulls
});
