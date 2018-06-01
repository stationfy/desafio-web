const initialState = {
  isLoading: false,
  isEmpty: false,
  isError: false,
  edges: [],
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PULL_REQUESTS/SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
        isEmpty: false,
        isError: false,
      };
    case 'PULL_REQUESTS/SET_PULL_REQUESTS':
      return {
        ...state,
        edges: action.payload,
        isLoading: false,
        isEmpty: false,
        isError: false,
      };
    default:
      return { ...state };
  }
};
