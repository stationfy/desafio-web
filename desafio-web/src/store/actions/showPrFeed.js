import Axios from "axios";

export const showPrFeed = (repoOwner, repo, page) => {
  console.log("these are the arguments", repoOwner, repo, page);
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
        console.log("THESE ARE RESULTS PR", results);
        dispatch({
          type: "SHOW_PR_FEED",
          payload: prInfo
        });
      })
      .catch(err => {
        console.log("there was an error during api call", err);
      });
};
