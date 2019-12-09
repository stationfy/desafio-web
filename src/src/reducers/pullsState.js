import {
	REQUEST_PULLS,
	RECEIVE_PULLS,
	RECEIVE_PULLS_ERROR,
	RECEIVE_PULLS_PAGE_COUNT,

	CLEAR_PULLS
} from '../actionTypes.json'

import { defGetting, getUnique } from '../functions'

export default (state = { ...defGetting, pulls: [], full_name: '', page: 1 }, action) => {
	const {
		type,
		pulls = [],
		error = '',
		full_name = '',
		getting = false,
		count = 0
	} = action,
		{ pulls: oldPulls } = state

	const filteredPulls = getUnique([...oldPulls, ...pulls], 'id'),
	 page =  state.page + count

	switch (type) {
		case REQUEST_PULLS:
			return { ...state,isFetching: true, ...defGetting, pulls: filteredPulls, full_name }
		case RECEIVE_PULLS:
			return { ...state,isFetching: false, ...defGetting, pulls: filteredPulls, full_name }
		case RECEIVE_PULLS_ERROR:
			return { ...state,isFetching: false, ...defGetting, pulls: error, full_name }
		case RECEIVE_PULLS_PAGE_COUNT:
			return { ...state, isFetching: false,...defGetting, pulls: filteredPulls, full_name, page }
		case CLEAR_PULLS:
			return { pulls: [],isFetching: false, full_name: '', getting, page: 1 }
		default:
			return state
	}
}

