import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

// Actions and types
import {
  getPullRequests,
  getPullRequestsFail,
  getPullRequestsStart,
  getPullRequestsSuccess,
  pullRequestsTypes,
} from '../../store/actions';

// Mocks
import { pullRequestsMock, errorMock } from '../__mocks__/pullRequests';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Async pullrequests actions ', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should GET_PULLREQUESTS_SUCCESS after successfuly fetching repositories', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: pullRequestsMock,
      });
    });

    const expectedActions = [
      { type: pullRequestsTypes.GET_PULLREQUESTS_START },
      { type: pullRequestsTypes.GET_PULLREQUESTS_SUCCESS, payload: pullRequestsMock },
    ];

    const store = mockStore({});
    return store.dispatch(getPullRequests('vuejs', 'vue'))
      .then((payload) => {
        expect(payload).toEqual(pullRequestsMock);
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should GET_REPOSITORIES_FAIL after failing fetching repositories', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 403,
        response: {
          message: errorMock,
        },
      });
    });

    const expectedActions = [
      { type: pullRequestsTypes.GET_PULLREQUESTS_START },
      { type: pullRequestsTypes.GET_PULLREQUESTS_FAIL, payload: errorMock },
    ];

    const store = mockStore({});
    return store.dispatch(getPullRequests())
      .then((payload) => {
        expect(payload).toEqual(errorMock);
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('Sync pullrequests actions', () => {
  it('should setup getPullRequestsStart action object', () => {
    const action = getPullRequestsStart();
    expect(action).toEqual({
      type: pullRequestsTypes.GET_PULLREQUESTS_START,
    });
  });

  it('should setup getPullRequestsFail action object', () => {
    const errorMessage = 'Error message';
    const action = getPullRequestsFail(errorMessage);
    expect(action).toEqual({
      type: pullRequestsTypes.GET_PULLREQUESTS_FAIL,
      payload: errorMessage,
    });
  });

  it('should setup getPullRequestsSuccess action object', () => {
    const payload = pullRequestsMock;
    const action = getPullRequestsSuccess(payload);
    expect(action).toEqual({
      type: pullRequestsTypes.GET_PULLREQUESTS_SUCCESS,
      payload,
    });
  });
});
