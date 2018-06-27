import * as types from '../actions/pullRequests/types';

const initialState = {
  error: null,
  isError: false,
  isLoading: false,
  items: [],
};

const getPullRequestsStart = state => ({
  ...state,
  error: null,
  isError: false,
  isLoading: true,
});

const getPullRequestsSucess = (state, { payload }) => ({
  ...state,
  error: null,
  isError: false,
  isLoading: false,
  items: [...payload],
});

const getPullRequestsFail = (state, { payload }) => ({
  ...state,
  error: payload,
  isError: true,
  isLoading: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PULLREQUESTS_START: return getPullRequestsStart(state);
    case types.SET_PULLREQUESTS_SUCCESS: return getPullRequestsSucess(state, action);
    case types.SET_PULLREQUESTS_FAIL: return getPullRequestsFail(state, action);
    default: return { ...state };
  }
};
