import * as types from '../actionTypes.json'
import reposState from '../reducers/reposState'
import pullsState from '../reducers/pullsState'

describe('repoState reducer tests', () => {

	it('should set the initial state to reposState', () => {

		const action = { type : types.REQUEST_REPOS },
			repos = []
		const expectedReturn = { getting: true, isFetching: true, repos }
		expect(reposState({ repos }, action)).toEqual(expectedReturn)
	})

	it('should return a state with fetching false from reposState', () => {
		const action = { type : types.RECEIVE_REPOS },
			repos = []
		const expectedReturn = { getting: true, isFetching: false, repos }
		expect(reposState({ repos }, action)).toEqual(expectedReturn)
	})

	it('should return a state with page number from reposState', () => {
		const action = { type : types.RECEIVE_REPOS_PAGE_COUNT },
			repos = [],
			page = 1

		const expectedReturn = { getting: true, isFetching: false, repos, page }
		expect(reposState({ repos, page }, action)).toEqual(expectedReturn)
	})
})

describe('pullsState reducer tests', () => {

	it('should set the initial state to pullsState', () => {
		const action = { type : types.REQUEST_PULLS },
			full_name = '',
			pulls = [],
			page = 1

		const expectedReturn = { getting: true, pulls, full_name, isFetching: true, page }
		expect(pullsState({ pulls, full_name, page }, action)).toEqual(expectedReturn)
	})

	it('should return a state with fetching false from pullsState', () => {
		const action = { type : types.RECEIVE_PULLS },
			full_name = '',
			pulls = []
		const expectedReturn = { getting: true, pulls, full_name, isFetching: false }
		expect(pullsState({ pulls, full_name }, action)).toEqual(expectedReturn)
	})

	it('should return a state with page number from pullsState', () => {
		const action = { type : types.RECEIVE_PULLS_PAGE_COUNT },
			pulls = [],
			full_name = '',
			page = 1
		const expectedReturn = { getting: true, pulls, full_name, isFetching: false, page }
		expect(pullsState({ pulls, page }, action)).toEqual(expectedReturn)
	})
})
