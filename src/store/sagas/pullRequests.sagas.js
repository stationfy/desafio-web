import { call, put } from "redux-saga/effects";

import api from "../../utils/api";

import { Creators as PullActions } from "../ducks/pullRequests.ducks";

export default function* getPullRequests(action) {
  try {
    const { login, name } = action.payload;
    const response = yield call(api.get, `/repos/${login}/${name}/pulls`);
    yield put(PullActions.getSuccess(response.data));
  } catch (err) {
    console.tron.log("Algo deu errado no pull request", err);
  }
}
