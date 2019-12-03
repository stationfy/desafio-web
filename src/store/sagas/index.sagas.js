import { all, takeLatest } from "redux-saga/effects";

import { Types as ReposTypes } from "../ducks/repos.ducks";

import getRepos from "./repos.sagas";

export default function* rootSaga() {
  yield all([takeLatest(ReposTypes.GET_REQUEST, getRepos)]);
}
