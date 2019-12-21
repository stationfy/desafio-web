export const Types = {
  GET_REQUEST: "repos/GET_REQUEST",
  GET_SUCCESS: "repos/GET_SUCCESS",
  GET_MORE_REQUEST: "repos/GET_MORE_REQUEST",
  GET_MORE_SUCCESS: "repos/GET_MORE_SUCCESS"
};

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function repos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case Types.GET_MORE_REQUEST:
      return { ...state, loading: true };
    case Types.GET_MORE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload]
      };
    default:
      return state;
  }
}

export const Creators = {
  getRequest: () => ({ type: Types.GET_REQUEST }),
  getSuccess: payload => ({ type: Types.GET_SUCCESS, payload }),
  getMoreRequest: payload => ({ type: Types.GET_MORE_REQUEST, payload }),
  getMoreSuccess: payload => ({ type: Types.GET_MORE_SUCCESS, payload })
};
