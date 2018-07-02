import * as types from '../actions/repositories/types';

export const initialState = {
  error: null,
  isError: false,
  isLoading: false,
  items: [],
};

export const getRepositoresStart = state => ({
  ...state,
  error: null,
  isError: false,
  isLoading: true,
});

export const getRepositoresSuccess = (state, { payload }) => ({
  ...state,
  error: null,
  isError: false,
  isLoading: false,
  items: [...state.items, ...payload],
});

export const getRepositoresFail = (state, { payload }) => ({
  ...state,
  error: payload,
  isError: true,
  isLoading: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_REPOSITORIES_START: return getRepositoresStart(state);
    case types.GET_REPOSITORIES_SUCCESS: return getRepositoresSuccess(state, action);
    case types.GET_REPOSITORIES_FAIL: return getRepositoresFail(state, action);
    default: return { ...state };
  }
};
