export const Types = {
  GET_REQUEST: "repos/GET_REQUEST",
  GET_SUCCESS: "repos/GET_SUCCESS"
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
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  getRequest: () => ({ type: Types.GET_REQUEST }),
  getSuccess: payload => ({ type: Types.GET_SUCCESS, payload })
};
