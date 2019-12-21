export const Types = {
  GET_REQUEST: "pullRequests/GET_REQUEST",
  GET_SUCCESS: "pullRequests/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function pullRequests(state = INITIAL_STATE, action) {
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
  getRequest: payload => ({ type: Types.GET_REQUEST, payload }),
  getSuccess: payload => ({ type: Types.GET_SUCCESS, payload })
};
