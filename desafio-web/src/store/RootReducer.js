let initState = {
  repos: [],
  pageRepos: 1,
  pagePullRequests: 1,
  showPrFeed: null,
  pullRequests: [],
  currentRepoOwner: null,
  currentRepo: null
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        pageRepos: state.pageRepos + 1,
        repos: state.repos.concat(action.payload),
        showPrFeed: false
      };

    case "SHOW_PR_FEED":
      return {
        ...state,
        repos: [],
        pageRepos: 1,
        pagePullRequests: state.pagePullRequests + 1,
        showPrFeed: true,
        pullRequests: state.pullRequests.concat(action.payload.listOfRepos),
        currentRepoOwner: action.payload.currentRepoOwner,
        currentRepo: action.payload.currentRepo
      };

    case "GO_BACK_TO_STREAM":
      return {
        ...state,
        showPrFeed: false,
        pullRequests: [],
        pagePullRequests: 1
      };

    default:
      return state;
  }
};

export default rootReducer;
