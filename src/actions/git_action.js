import axios from "axios";
import {
  FETCH_REPOSITORIES,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_FAIL,
  FETCH_PULL_REQUESTS,
  FETCH_PULL_REQUESTS_SUCCESS,
  FETCH_PULL_REQUESTS_FAIL
} from "./types";

const ROOT_URL = "https://api.github.com/";

export function fetchRepositories(page) {
  return function(dispatch) {
    dispatch({
      type: FETCH_REPOSITORIES
    });

    const url = `${ROOT_URL}search/repositories?q=language:Javascript&sort=stars&page=${page}`;
    axios
      .get(url)
      .then(res => {
        dispatch({
          type: FETCH_REPOSITORIES_SUCCESS,
          payload: res
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_REPOSITORIES_FAIL,
          payload: error.message
        });
      });
  };
}

export function fetchPullRequests(creator, repo) {
  return function(dispatch) {
    dispatch({
      type: FETCH_PULL_REQUESTS
    });

    const url = `${ROOT_URL}repos/${creator}/${repo}/pulls`;
    axios
      .get(url)
      .then(res => {
        dispatch({
          type: FETCH_PULL_REQUESTS_SUCCESS,
          payload: res
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_PULL_REQUESTS_FAIL,
          payload: error.message
        });
      });
  };
}
