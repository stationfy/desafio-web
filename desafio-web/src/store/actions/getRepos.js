import Axios from "axios";

export const getRepos = page => {
  //include page parameter here
  return dispatch =>
    Axios.get(
      `https://api.github.com/search/repositories?q=language:Javascript&page=${page}`
    )
      .then(results => {
        dispatch({
          type: "SEARCH",
          payload: results.data.items
        });
      })
      .catch(err => {
        console.log("there was an error during api call", err);
      });
};
