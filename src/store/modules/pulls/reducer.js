export default function pulls(state = {}, action) {
  switch (action.type) {
    case "@pulls/FETCH_PULLS_REQUEST":
      return { ...state, loading: true };
    case "@pulls/FETCH_PULLS_REQUEST_SUCCESS":
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
}
