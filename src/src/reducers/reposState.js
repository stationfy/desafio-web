import {
	REQUEST_REPOS,
	RECEIVE_REPOS,
	RECEIVE_REPOS_ERROR,
	RECEIVE_REPOS_PAGE_COUNT /* ,
	CLEAR_REPOS */
} from '../actionTypes.json'

import { defGetting, getUnique } from '../functions'

export default (state = { ...defGetting, repos: [], page: 1 }, action) => {
	const { type, repos = [], error = '', count = 0 } = action,
		{ repos: oldRepos } = state

	const filteredRepos = getUnique([ ...oldRepos, ...repos ], 'id'),
		page = state.page + count

	switch (type) {
		case REQUEST_REPOS:
			return {
				...state,
				isFetching: true,
				...defGetting,
				repos: filteredRepos
			}
		case RECEIVE_REPOS:
			return {
				...state,
				isFetching: false,
				...defGetting,
				repos: filteredRepos
			}
		case RECEIVE_REPOS_ERROR:
			return { ...state, isFetching: false, ...defGetting, repos: error }
		case RECEIVE_REPOS_PAGE_COUNT:
			return {
				...state,
				isFetching : false,
				...defGetting,
				repos : filteredRepos,
				page
			}
		/* case CLEAR_REPOS:
			return { repos: [], ...notFetched } */
		default:
			return state
	}
}
