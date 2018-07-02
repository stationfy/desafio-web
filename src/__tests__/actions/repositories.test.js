import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

// Actions and types
import {
  getRepositories,
  getRepositoriesStart,
  getRepositoriesSucess,
  getRepositoriesFail,
  repositoriesTypes,
} from '../../store/actions';

// Mocks
import { repositoriesMock, errorMock } from '../__mocks__/repositories';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Async repositories actions ', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should GET_REPOSITORIES_SUCCESS after successfuly fetching repositories', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          items: repositoriesMock,
        },
      });
    });

    const expectedActions = [
      { type: repositoriesTypes.GET_REPOSITORIES_START },
      { type: repositoriesTypes.GET_REPOSITORIES_SUCCESS, payload: repositoriesMock },
    ];

    const store = mockStore({ repositories: {} });
    return store.dispatch(getRepositories())
      .then((payload) => {
        expect(payload).toEqual(repositoriesMock);
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
      { type: repositoriesTypes.GET_REPOSITORIES_START },
      { type: repositoriesTypes.GET_REPOSITORIES_FAIL, payload: errorMock },
    ];

    const store = mockStore({ repositories: {} });
    return store.dispatch(getRepositories())
      .then((payload) => {
        expect(payload).toEqual(errorMock);
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('Sync repositories actions', () => {
  it('should setup getRepositoriesStart action object', () => {
    const action = getRepositoriesStart();
    expect(action).toEqual({
      type: repositoriesTypes.GET_REPOSITORIES_START,
    });
  });

  it('should setup getRepositoriesFail action object', () => {
    const errorMessage = 'Error message';
    const action = getRepositoriesFail(errorMessage);
    expect(action).toEqual({
      type: repositoriesTypes.GET_REPOSITORIES_FAIL,
      payload: errorMessage,
    });
  });

  it('should setup getRepositoriesSucess action object', () => {
    const payload = repositoriesMock;
    const action = getRepositoriesSucess(payload);
    expect(action).toEqual({
      type: repositoriesTypes.GET_REPOSITORIES_SUCCESS,
      payload,
    });
  });
});
