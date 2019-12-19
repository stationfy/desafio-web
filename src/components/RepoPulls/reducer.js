import produce from "immer";
import * as c from "./constants";

const INITIAL_STATE = {
  pulls: [],
  empty: false,
  error: "",
};

const pulls = (state = INITIAL_STATE, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case c.FETCH_PULLS:
        return;

      case c.FETCH_PULLS_SUCCESS:
        if (payload.data) {
          draft.pulls = payload.data;
          console.log(payload.data)
        } else {
          draft.empty = true;
        }
        return;

      case c.FETCH_PULLS_FAIL:
        draft.error = payload.error;
        return;

      default:
        return;
    }
  });

export default pulls;