import {CLICK} from '../constants';

export const listReducer = (state={
  project:'react',
  owner:'facebook',
  pulls:false
}, action)=>{
  switch(action.type){
    case CLICK:
      console.log('action.project', action.project);
      console.log('action.owner', action.owner);
      let newItem = {
	project:action.project,
	owner: action.owner,
	pulls: action.pulls,
      };
      return newItem
    default:
      return state;
  }
}
