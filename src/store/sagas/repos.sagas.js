import { call, put } from "redux-saga/effects";
import api from "../../utils/api";

import { Creators as ReposActions } from "../ducks/repos.ducks";

export default function* getRepos() {
  try {
    const response = yield call(
      api.get,
      `/search/repositories?q=language:Javascript&sort=stars&page=1`
    );
    yield put(ReposActions.getSuccess(response.data.items));
  } catch (err) {
    console.log("Algo deu errado.", err);
  }
}
