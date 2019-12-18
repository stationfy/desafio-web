import * as pulls from '../store/modules/pulls/actions';
import * as repos from '../store/modules/repos/actions';

describe('Pulls Actions', () => {
   it('should create an action with correct type', () => {
      const expectedAction = {
              type: '@pulls/FETCH_PULLS_REQUEST'
             }
      expect(pulls.fetchPullsRequest()).toEqual(expectedAction)
  })

   it('should create an action with correct type', () => {
      const expectedAction = {
              type: '@pulls/FETCH_PULLS_REQUEST_SUCCESS'
             }
      expect(pulls.fetchPullsRequestSuccess()).toEqual(expectedAction)
  })
})

describe('Repos Actions', () => {
   it('should create an action with correct type', () => {
      const expectedAction = {
              type: '@repos/FETCH_REPOS_REQUEST'
             }
      expect(repos.fetchReposRequest()).toEqual(expectedAction)
  })

   it('should create an action with correct type', () => {
      const expectedAction = {
              type: '@repos/FETCH_REPOS_REQUEST_SUCCESS'
             }
      expect(repos.fetchReposRequestSuccess()).toEqual(expectedAction)
  })
})