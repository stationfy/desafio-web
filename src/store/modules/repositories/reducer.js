import produce from 'immer';

const INITIAL_STATE = {
  repository: null,
};

export default function repository(state = INITIAL_STATE, action) {
  if (process.env.NODE_ENV === 'development') {
    console.tron.log(action.payload);
  }

  return produce(state, draft => {
    switch (action.type) {
      case '@repository/UPDATE_SELECTED_REPOSITORY': {
        draft.repository = action.payload.repository;
        break;
      }
      default:
    }
  });
}
