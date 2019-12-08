import Axios from "axios";

export const getPrFeed = (repoOwner, repo, page) => {
  return dispatch =>
    Axios.get(
      `https://api.github.com/repos/${repoOwner}/${repo}/pulls?state=all&page=${page}`
    )
      .then(results => {
        let prInfo = {
          listOfRepos: results.data,
          currentRepoOwner: repoOwner,
          currentRepo: repo
        };
        dispatch({
          type: "SHOW_PR_FEED",
          payload: prInfo
        });
      })
      .catch(err => {
        console.log("there was an error during api call", err);
      });
};
