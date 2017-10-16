import {CLICK} from '../constants';

export const listReducer = (state={}, action)=>{
  switch(action.type){
    case CLICK:
      console.log('action.project', action.project);
      console.log('action.owner', action.owner);
      let newItem = {project:action.project, owner: action.owner};
      return newItem
    default:
      return state;
  }
}
