import {CLICK} from '../constants';

export const click = (project, owner, pulls) => {
    return{
      type: CLICK,
      project,
      owner,
      pulls,
    }
}
