import axios from 'axios';
import * as types from './types';

const URL = 'https://api.github.com/';

const getRepositoriesStart = () => ({
  type: types.SET_REPOSITORIES_START,
});

const getRepositoriesSucess = payload => ({
  type: types.SET_REPOSITORIES_SUCCESS,
  payload,
});

const getRepositoriesFail = payload => ({
  type: types.SET_REPOSITORIES_FAIL,
  payload,
});

const getRepositories = (page = 1, sort = 'stars', q = 'language:Javascript') => ((dispatch) => {
  dispatch(getRepositoriesStart());
  const queryParams = `search/repositories?q=${q}&sort=${sort}&page=${page}`;
  axios.get(`${URL}${queryParams}`)
    .then((response) => {
      dispatch(getRepositoriesSucess(response.data.items));
    })
    .catch((error) => {
      dispatch(getRepositoriesFail(error.response.data.message));
    });
});

export default getRepositories;
