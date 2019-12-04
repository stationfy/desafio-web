import { call, put } from "redux-saga/effects";
import api from "../../utils/api";

import { Creators as ReposActions } from "../ducks/repos.ducks";

export default function* getMoreRepos(action) {
  try {
    const response = yield call(
      api.get,
      `/search/repositories?q=language:Javascript&sort=stars&page=${action.payload}`
    );
    yield put(ReposActions.getMoreSuccess(response.data.items));
  } catch (err) {
    console.tron.log("Algo deu errado", err);
  }
}
