import createAction from '../../core/helpers/redux';

export const PullRequestTypes = {
  SET_LOADING: 'PULL_REQUESTS/SET_LOADING',
  SET_PULL_REQUESTS: 'PULL_REQUESTS/SET_PULL_REQUESTS',
};

export const PullRequestsActions = {
  setLoading: createAction(PullRequestTypes.SET_LOADING, ['payload']),
  setPullRequests: createAction(PullRequestTypes.SET_PULL_REQUESTS, ['payload']),
};
