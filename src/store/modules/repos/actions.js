export const fetchReposRequest = payload => ({
  type: "@repos/FETCH_REPOS_REQUEST",
  payload
});

export const fetchReposRequestSuccess = payload => ({
  type: "@repos/FETCH_REPOS_REQUEST_SUCCESS",
  payload
});
