import { all, call, put, takeLatest } from "redux-saga/effects";
import { toast } from 'react-toastify';

import api from "../../../services/api";

import { fetchReposRequestSuccess } from "./actions";

export function* fetchReposRequest(action) {
  try {
    const response = yield call(
      api.get,
      `/search/repositories?q=language:Javascript&sort=stars&page=${action.payload}`
    );
    yield put(fetchReposRequestSuccess(response.data.items));
    toast.success("Repositories fetched");
  } catch (err) {
    toast.error("Couldn't fetch repositories");
    throw Error(err);
  }
}

export default all([
  takeLatest('@repos/FETCH_REPOS_REQUEST', fetchReposRequest),
]);
