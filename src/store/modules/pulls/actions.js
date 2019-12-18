export const fetchPullsRequest = payload => ({
  type: "@pulls/FETCH_PULLS_REQUEST",
  payload
});

export const fetchPullsRequestSuccess = payload => ({
  type: "@pulls/FETCH_PULLS_REQUEST_SUCCESS",
  payload
});
