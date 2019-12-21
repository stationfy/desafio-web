import produce from 'immer';

const INITIAL_STATE = {
  repository: null,
};

export default function repository(state = INITIAL_STATE, action) {
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
