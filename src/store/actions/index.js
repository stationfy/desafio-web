// Repositories imports
import {
  getRepositories,
  getRepositoriesFail,
  getRepositoriesStart,
  getRepositoriesSucess,
} from './repositories';
import {
  GET_REPOSITORIES_FAIL,
  GET_REPOSITORIES_START,
  GET_REPOSITORIES_SUCCESS,
} from './repositories/types';

// PullRequests imports
import {
  getPullRequests,
  getPullRequestsFail,
  getPullRequestsStart,
  getPullRequestsSuccess,
} from './pullRequests';
import {
  GET_PULLREQUESTS_FAIL,
  GET_PULLREQUESTS_START,
  GET_PULLREQUESTS_SUCCESS,
} from './pullRequests/types';

// Repositories exports
export {
  getRepositories,
  getRepositoriesFail,
  getRepositoriesStart,
  getRepositoriesSucess,
};
export const repositoriesActions = { getRepositories };
export const repositoriesTypes = {
  GET_REPOSITORIES_START,
  GET_REPOSITORIES_SUCCESS,
  GET_REPOSITORIES_FAIL,
};

// PullRequests exports
export {
  getPullRequests,
  getPullRequestsFail,
  getPullRequestsStart,
  getPullRequestsSuccess,
};
export const pullRequestsActions = { getPullRequests };
export const pullRequestsTypes = {
  GET_PULLREQUESTS_FAIL,
  GET_PULLREQUESTS_START,
  GET_PULLREQUESTS_SUCCESS,
};
