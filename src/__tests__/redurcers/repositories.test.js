import repositoryReducer, {
  initialState,
  getRepositoresFail,
  getRepositoresStart,
  getRepositoresSuccess,
} from '../../store/reducers/repositories';
import { repositoriesTypes } from '../../store/actions';
import { repositoriesMock, errorMock } from '../__mocks__/repositories';

describe('post reducer', () => {
  it('should return the initial state', () => {
    const state = initialState;
    expect(repositoryReducer(undefined, {})).toEqual(state);
  });

  it('should handle GET_REPOSITORIES_START', () => {
    const startAction = {
      type: repositoriesTypes.GET_REPOSITORIES_START,
    };
    const state = getRepositoresStart();
    expect(repositoryReducer({}, startAction)).toEqual(state);
  });

  it('should handle GET_REPOSITORIES_SUCCESS', () => {
    const successAction = {
      type: repositoriesTypes.GET_REPOSITORIES_SUCCESS,
      payload: repositoriesMock,
    };
    const state = getRepositoresSuccess(initialState, { payload: repositoriesMock });
    expect(repositoryReducer(undefined, successAction)).toEqual(state);
  });

  it('should handle GET_REPOSITORIES_FAIL', () => {
    const failAction = {
      type: repositoriesTypes.GET_REPOSITORIES_FAIL,
      payload: errorMock,
    };
    const state = getRepositoresFail({}, { payload: errorMock });
    expect(repositoryReducer({}, failAction)).toEqual(state);
  });
});
