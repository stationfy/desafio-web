import { all } from "redux-saga/effects";

import repos from "./repos/sagas";
import pulls from "./pulls/sagas";

export default function* rootSaga() {
  return yield all([repos, pulls]);
}
