import pullRequestsReducer, {
  initialState,
  getPullRequestsFail,
  getPullRequestsStart,
  getPullRequestsSuccess,
} from '../../store/reducers/pullRequests';
import { pullRequestsTypes } from '../../store/actions';
import { pullRequestsMock, errorMock } from '../__mocks__/pullRequests';

describe('post reducer', () => {
  it('should return the initial state', () => {
    const state = initialState;
    expect(pullRequestsReducer(undefined, {})).toEqual(state);
  });

  it('should handle GET_PULLREQUESTS_START', () => {
    const startAction = {
      type: pullRequestsTypes.GET_PULLREQUESTS_START,
    };
    const state = getPullRequestsStart();
    expect(pullRequestsReducer({}, startAction)).toEqual(state);
  });

  it('should handle GET_PULLREQUESTS_SUCCESS', () => {
    const successAction = {
      type: pullRequestsTypes.GET_PULLREQUESTS_SUCCESS,
      payload: pullRequestsMock,
    };
    const state = getPullRequestsSuccess(initialState, { payload: pullRequestsMock });
    expect(pullRequestsReducer(undefined, successAction)).toEqual(state);
  });

  it('should handle GET_PULLREQUESTS_FAIL', () => {
    const failAction = {
      type: pullRequestsTypes.GET_PULLREQUESTS_FAIL,
      payload: errorMock,
    };
    const state = getPullRequestsFail(initialState, { payload: errorMock });
    expect(pullRequestsReducer(undefined, failAction)).toEqual(state);
  });
});
