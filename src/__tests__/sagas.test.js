import { runSaga } from 'redux-saga';
import { fetchPullsRequest } from '../store/modules/pulls/sagas';
import { fetchReposRequest } from '../store/modules/repos/sagas';
import { fetchPullsRequestSuccess } from '../store/modules/pulls/actions';
import { fetchReposRequestSuccess } from '../store/modules/repos/actions';
import MockAdapter from 'axios-mock-adapter';
import api from '../services/api';

const apiMock = new MockAdapter(api);

it('should be able to fetch pull requests', async () => {
  const dispatch = jest.fn();

  const action = {
    'type': '@pulls/FETCH_PULLS_REQUEST',
    'payload': {
      login: 'freeCodeCamp',
      name: 'freeCodeCamp'
    }
  }

   apiMock.onGet(
     `/repos/${action.payload.login}/${action.payload.name}/pulls`
     ).reply(200, action.payload);


    await runSaga(
    { dispatch },
    fetchPullsRequest,
    action
    ).toPromise();

  expect(dispatch).toHaveBeenCalledWith(fetchPullsRequestSuccess(action.payload))
});

it('should be able to fetch repositories', async () => {
  const dispatch = jest.fn();

  const action = {
    type: '@repos/FETCH_REPOS_REQUEST',
    payload: 1
  }

   apiMock.onGet(
     `/search/repositories?q=language:Javascript&sort=stars&page=${action.payload}`
     ).reply(200, action.payload);


    await runSaga(
    { dispatch },
    fetchReposRequest,
    action
    ).toPromise();

  expect(dispatch).toHaveBeenCalledWith(fetchReposRequestSuccess())
});