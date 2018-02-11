import {
  FETCH_REPOSITORIES,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_FAIL,
  FETCH_PULL_REQUESTS,
  FETCH_PULL_REQUESTS_SUCCESS,
  FETCH_PULL_REQUESTS_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  repositories: [],
  pullRequests: [],
  messageError: false,
  fetching: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_REPOSITORIES:
      return { ...state, fetching: true };
    case FETCH_REPOSITORIES_SUCCESS:
      return { ...state, repositories: action.payload.data };
    case FETCH_REPOSITORIES_FAIL:
      return { ...state, messageError: action.payload };
    case FETCH_PULL_REQUESTS:
      return { ...state, fetching: true };
    case FETCH_PULL_REQUESTS_SUCCESS:
      return { ...state, fetching: false, pullRequests: action.payload.data };
    case FETCH_PULL_REQUESTS_FAIL:
      return { ...state, fetching: false, messageError: action.payload };
    default:
      return state;
  }
}
