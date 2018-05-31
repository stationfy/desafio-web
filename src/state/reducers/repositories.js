const initialState = {
  isLoading: false,
  isEmpty: false,
  isError: false,
  edges: [],
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REPOSITORIES/SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
        isEmpty: false,
        isError: false,
      };
    case 'REPOSITORIES/SET_REPOSITORIES':
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
