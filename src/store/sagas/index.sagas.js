import { all, takeLatest } from "redux-saga/effects";

import { Types as ReposTypes } from "../ducks/repos.ducks";
import { Types as PullTypes } from "../ducks/pullRequests.ducks";

import getRepos from "./repos.sagas";
import getMoreRepos from "./moreRepos.sagas";
import getPullRequests from "./pullRequests.sagas";

export default function* rootSaga() {
  yield all([
    takeLatest(ReposTypes.GET_REQUEST, getRepos),
    takeLatest(ReposTypes.GET_MORE_REQUEST, getMoreRepos),
    takeLatest(PullTypes.GET_REQUEST, getPullRequests)
  ]);
}
