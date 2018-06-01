import createAction from '../../core/helpers/redux';

export const RepositoryTypes = {
  SET_LOADING: 'REPOSITORIES/SET_LOADING',
  SET_REPOSITORIES: 'REPOSITORIES/SET_REPOSITORIES',
  SET_PULL_REQUESTS: 'REPOSITORIES/SET_PULL_REQUESTS',
};

export const RepositoryActions = {
  setLoading: createAction(RepositoryTypes.SET_LOADING, ['payload']),
  setRepositories: createAction(RepositoryTypes.SET_REPOSITORIES, ['payload']),
  setPullRequests: createAction(RepositoryTypes.SET_PULL_REQUESTS, ['payload']),
};
