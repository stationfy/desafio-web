import pulls from "../store/modules/pulls/reducer";
import repos from "../store/modules/repos/reducer";

describe('Pulls Reducer', () => {
   it('should return the initial state', () =>
     expect(pulls(undefined, {})).toEqual({})
    )
   it('should handle "@pulls/FETCH_PULLS_REQUEST" action', () => {
    expect(pulls({}, { type: '@pulls/FETCH_PULLS_REQUEST' }))
      .toEqual({ loading: true })
   })
   it('should handle "@pulls/FETCH_PULLS_REQUEST_SUCCESS" action', () => {
      const payload = [{
        "author": "Tralala",
        "title": "Mocking Data",
        "description": "Your data has been mocked"
       }];
     expect(pulls({}, { type: "@pulls/FETCH_PULLS_REQUEST_SUCCESS", payload }))
       .toEqual({ data: payload, loading: false })
   })
})

describe('Repos Reducer', () => {
   it('should return the initial state', () =>
     expect(repos(undefined, {})).toEqual({})
    )
   it('should handle "@repos/FETCH_REPOS_REQUEST" action', () => {
    expect(repos({}, { type: '@repos/FETCH_REPOS_REQUEST' }))
      .toEqual({ loading: true })
   })
   it('should handle "@repos/FETCH_REPOS_REQUEST_SUCCESS" action', () => {
      const payload = [{
        "author": "Tralala",
        "title": "Mocking Data",
        "description": "Your data has been mocked"
       }];
     expect(repos({}, { type: "@repos/FETCH_REPOS_REQUEST_SUCCESS", payload }))
       .toEqual({ data: payload, loading: false })
   })
})