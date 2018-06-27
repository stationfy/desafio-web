import axios from 'axios';
import * as types from './types';

const URL = 'https://api.github.com/';

const getPullRequestsStart = () => ({
  type: types.SET_PULLREQUESTS_START,
});

const getPullRequestsSucess = payload => ({
  type: types.SET_PULLREQUESTS_SUCCESS,
  payload,
});

const getPullRequestsFail = payload => ({
  type: types.SET_PULLREQUESTS_FAIL,
  payload,
});

const getPullRequests = (creator = 'stationfy', repository = 'desafio-web') => ((dispatch) => {
  dispatch(getPullRequestsStart());
  const queryParams = `repos/${creator}/${repository}/pulls`;
  axios.get(`${URL}${queryParams}`)
    .then((response) => {
      dispatch(getPullRequestsSucess(response.data));
    })
    .catch((error) => {
      dispatch(getPullRequestsFail(error.response.data.message));
    });
});

export default getPullRequests;
