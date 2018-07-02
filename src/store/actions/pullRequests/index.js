import axios from 'axios';
import * as types from './types';

const URL = 'https://api.github.com/';

export const getPullRequestsStart = () => ({
  type: types.GET_PULLREQUESTS_START,
});

export const getPullRequestsSuccess = payload => ({
  type: types.GET_PULLREQUESTS_SUCCESS,
  payload,
});

export const getPullRequestsFail = payload => ({
  type: types.GET_PULLREQUESTS_FAIL,
  payload,
});

export const getPullRequests = (creator = 'stationfy', repository = 'desafio-web') => ((dispatch) => {
  dispatch(getPullRequestsStart());
  const queryParams = `repos/${creator}/${repository}/pulls`;
  return axios.get(`${URL}${queryParams}`)
    .then((response) => {
      dispatch(getPullRequestsSuccess(response.data));
      return response.data;
    })
    .catch((error) => {
      dispatch(getPullRequestsFail(error.response.data.message));
      return error.response.data.message;
    });
});

export default getPullRequests;
