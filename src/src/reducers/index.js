import { combineReducers } from 'redux'

import reposState from './reposState'
import pullsState from './pullsState'

export default combineReducers({ reposState, pullsState })
