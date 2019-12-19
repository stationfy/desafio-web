export const FETCH_REPOS = "FETCH_REPOS";
export const FETCH_REPOS_SUCCESS = "FETCH_REPOS_SUCCESS";
export const FETCH_REPOS_FAIL = "FETCH_REPOS_ERROR";
export const INCREASE_PAGE = "INCREASE_PAGE";
export const SORT_OPTIONS = [
    {
      value: "stars",
      display: "Stars"
    },
    {
      value: "fork",
      display: "Fork"
    },
    {
      value: "help-wanted-issues",
      display: "Help wanted issues"
    },
    {
      value: "updated",
      display: "Updated"
    },
  ];
  export const ORDER_OPTIONS = [
    {
      value: "desc",
      display: "Descendent"
    },
    {
      value: "asc",
      display: "Ascendent"
    },
  ]