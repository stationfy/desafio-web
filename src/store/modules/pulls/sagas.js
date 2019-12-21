import { all, call, put, takeLatest } from "redux-saga/effects";
import { toast } from 'react-toastify';

import api from "../../../services/api";

import { fetchPullsRequestSuccess } from "./actions";

export function* fetchPullsRequest(action) {
  try {
    const { login, name } = action.payload;
    const response = yield call(api.get, `/repos/${login}/${name}/pulls`);
    yield put(fetchPullsRequestSuccess(response.data));
    toast.success("Pull Requests fetched");
  } catch (err) {
    toast.error("Couldn't fetch pull requests");
    throw Error(err);
  }
}

export default all([
  takeLatest('@pulls/FETCH_PULLS_REQUEST', fetchPullsRequest),
]);
