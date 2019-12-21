export default function repos(state = {}, action) {
  switch (action.type) {
    case "@repos/FETCH_REPOS_REQUEST":
      return { ...state, loading: true };
    case "@repos/FETCH_REPOS_REQUEST_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
