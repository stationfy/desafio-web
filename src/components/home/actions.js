import * as c from "./constants";

export const fetchRepos = (payload) => (
  dispatch
) => {
  const { queryString, sort, page, order } = payload;
  return dispatch({
    type: c.FETCH_REPOS,
    payload: {
      request: {
        url: `/search/repositories?q=${queryString}&sort=${sort}&page=${page}&order=${order}`,
        method: "GET"
      },
      options: {
        onSuccess: ({ getState, dispatch, response }) => {
          const state = getState();
          dispatch({
            type: c.FETCH_REPOS_SUCCESS,
            payload: {
              data: {...response.data, page: state.home.page + 1 }
            }
          });
        },
        onError: ({ getState, dispatch, error }) => {
          dispatch({
            type: c.FETCH_REPOS_FAIL,
            payload: {
              error
            }
          })
        }
      }
    }
  })
}