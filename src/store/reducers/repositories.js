import * as types from '../actions/repositories/types';

const initialState = {
  error: null,
  isError: false,
  isLoading: false,
  items: [],
};

const setRepositoresStart = state => ({
  ...state,
  error: null,
  isError: false,
  isLoading: true,
});

const setRepositoresSuccess = (state, { payload }) => ({
  ...state,
  error: null,
  isError: false,
  isLoading: false,
  items: [...state.items, ...payload],
});

const setRepositoresFail = (state, { payload }) => ({
  ...state,
  error: payload,
  isError: true,
  isLoading: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_REPOSITORIES_START: return setRepositoresStart(state);
    case types.SET_REPOSITORIES_SUCCESS: return setRepositoresSuccess(state, action);
    case types.SET_REPOSITORIES_FAIL: return setRepositoresFail(state, action);
    default: return { ...state };
  }
};
