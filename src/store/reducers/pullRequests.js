import * as types from '../actions/pullRequests/types';

export const initialState = {
  error: null,
  isError: false,
  isLoading: false,
  items: [],
};

export const getPullRequestsStart = state => ({
  ...state,
  error: null,
  isError: false,
  isLoading: true,
});

export const getPullRequestsSuccess = (state, { payload }) => ({
  ...state,
  error: null,
  isError: false,
  isLoading: false,
  items: [...payload],
});

export const getPullRequestsFail = (state, { payload }) => ({
  ...state,
  error: payload,
  isError: true,
  isLoading: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PULLREQUESTS_START: return getPullRequestsStart(state);
    case types.GET_PULLREQUESTS_SUCCESS: return getPullRequestsSuccess(state, action);
    case types.GET_PULLREQUESTS_FAIL: return getPullRequestsFail(state, action);
    default: return { ...state };
  }
};
