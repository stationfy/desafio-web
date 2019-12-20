export const getInfoFromPath = (path) => {
    const info = path.split("/");
    return {
      creator: info[1],
      repo: info[2]
    }
  };
  
  export const getPullsByState = (pulls, state) =>
    pulls.filter(p => p.state === state);