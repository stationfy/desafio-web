import createAction from '../../core/helpers/redux';

export const RepositoryTypes = {
  SET_LOADING: 'REPOSITORIES/SET_LOADING',
  SET_REPOSITORIES: 'REPOSITORIES/SET_REPOSITORIES',
};

export const RepositoryActions = {
  setLoading: createAction(RepositoryTypes.SET_LOADING, ['payload']),
  setRepositories: createAction(RepositoryTypes.SET_REPOSITORIES, ['payload']),
};
