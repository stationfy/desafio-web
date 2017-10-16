import {CLICK} from '../constants';

export const click = (project, owner) => {
    return{
      type: CLICK,
      project,
      owner,	
    }
}
