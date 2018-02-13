import configureMockStore from "redux-mock-store";
import moxios from "moxios";
import expect from "expect";
import thunk from "redux-thunk";
import { fetchRepositories, fetchPullRequests }  from "../src/actions/git_action";
import { FETCH_REPOSITORIES_SUCCESS } from "../src/actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("get Repositories from page 1", () => {
  it("creates FETCH_REPOSITORIES_SUCCESS after successfuly fetching response", () => {
    expect(fetchRepositories(1)).toMatchSnapshot();
  });
});

describe("get pull requests from creator and repo", () => {
  it('create FETCH_PULL_REQUESTS_SUCCESS after successfuly fetching response', () => {
    expect(fetchPullRequests('facebook', 'react')).toMatchSnapshot();
  })
});