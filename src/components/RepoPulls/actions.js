import * as c from "./constants";

export const fetchPulls = ({ creator, repo }) => (
  dispatch
) => {
  dispatch({
    type: c.FETCH_PULLS,
    payload: {
      request: {
        url: `/repos/${creator}/${repo}/pulls`,
        method: "GET"
      },
      options: {
        onSuccess: ({ getState, dispatch, response }) => {
          dispatch({
            type: c.FETCH_PULLS_SUCCESS,
            payload: {
              data: response.data
            }
          });
        },
        onError: ({ getState, dispatch, error }) => {
          dispatch({
            type: c.FETCH_PULLS_FAIL,
            payload: {
              error
            }
          })
        }
      }
    }
  })
};