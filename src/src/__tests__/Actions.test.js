import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import * as actions from '../actions'
import * as types from '../actionTypes.json'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
	it('Should create an initial repos state to be filled after fetch', () => {
		const expectedAction = { type: types.REQUEST_REPOS }
		expect(actions.requestRepos()).toEqual(expectedAction)
	})

	it('Should create an initial pulls state to be filled after fetch', () => {
		const expectedAction = { type: types.REQUEST_PULLS }
		expect(actions.requestPulls()).toEqual(expectedAction)
	})

	it('Should return a repository page number', () => {
		const expectedAction = { type: types.RECEIVE_REPOS_PAGE_COUNT, count: 1 }
		const store = mockStore({ count: Number() })
		const dispatchedAction = store.dispatch(actions.setReposPageCount(1))
		expect(dispatchedAction).toEqual(expectedAction)
	})

	it('Should return a pull-requests page number', () => {
		const expectedAction = { type: types.RECEIVE_PULLS_PAGE_COUNT, count: 1 }
		const store = mockStore({ count: Number() })
		const dispatchedAction = store.dispatch(actions.setPullsPageCount(1))
		expect(dispatchedAction).toEqual(expectedAction)
	})

	it('Should return a boolean value', () => {
		const expectedAction = { type: types.CLEAR_PULLS, getting: false }
		const store = mockStore({ getting: Boolean() })
		const dispatchedAction = store.dispatch(actions.clearPullsState(false))
		expect(dispatchedAction).toEqual(expectedAction)
	})
})

describe('async actions', () => {
	afterEach(() => {
		fetchMock.reset()
		fetchMock.restore()
	})

	const mockResult = []

	it('Should return repositories when fetching is done', () => {
		fetchMock.get(`https://api.github.com/search/repositories?q=language:Javascript&sort=stars&page=1`, mockResult)
		const expectedActions = [
			{ type: types.REQUEST_REPOS },
			{ type  : types.RECEIVE_REPOS, repos : mockResult }
		]

		const store = mockStore({ repos: [] })

		return store.dispatch(actions.fetchRepos(1)).then(data => {
			const dispatchedActions = store.getActions()
			expect(dispatchedActions).toEqual(expectedActions)
		})
	})

	it('Should return pulls-requests when fetching is done', () => {
		const full_name = 'freeCodeCamp/freeCodeCamp',
			page = 1
		fetchMock.get(`https://api.github.com/repos/${full_name}/pulls?page=${page}`, mockResult)
		const expectedActions = [
			{ type: types.REQUEST_PULLS },
			{ type  : types.RECEIVE_PULLS, pulls : mockResult, full_name }
		]

		const store = mockStore({ pulls: [] })

		return store.dispatch(actions.fetchPulls(full_name, page)).then(data => {
			const dispatchedActions = store.getActions()
			expect(dispatchedActions).toEqual(expectedActions)
		})
	})
})
