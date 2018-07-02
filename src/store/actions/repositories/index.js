import axios from 'axios';
import * as types from './types';

const URL = 'https://api.github.com/';

export const getRepositoriesStart = () => ({
  type: types.GET_REPOSITORIES_START,
});

export const getRepositoriesSucess = payload => ({
  type: types.GET_REPOSITORIES_SUCCESS,
  payload,
});

export const getRepositoriesFail = payload => ({
  type: types.GET_REPOSITORIES_FAIL,
  payload,
});

export const getRepositories = (page = 1, sort = 'stars', q = 'language:Javascript') => ((dispatch) => {
  dispatch(getRepositoriesStart());
  const queryParams = `search/repositories?q=${q}&sort=${sort}&page=${page}`;
  return axios.get(`${URL}${queryParams}`)
    .then((response) => {
      dispatch(getRepositoriesSucess(response.data.items));
      return response.data.items;
    })
    .catch((error) => {
      dispatch(getRepositoriesFail(error.response.data.message));
      return error.response.data.message;
    });
});

export default getRepositories;
