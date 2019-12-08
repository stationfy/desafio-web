import React from "react";
import { shallow, mount } from "enzyme";
import TopBanner from "./components/banner/topBanner";
import GitFeed from "./components/GitFeed";
import { goBackToStream } from "./store/actions/goBackToStream";
import "jest-styled-components";
import { App } from "./App";
import { storeFactory } from "../src/setupTests";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  let wrapper = shallow(<GitFeed store={store} />).dive();
  return wrapper;
};

test("test", () => {
  return undefined;
});

describe("testing GitFeed", () => {
  var wrapper;
  beforeEach(() => {
    const initialState = {
      repos: [],
      pageRepos: 1,
      pagePullRequests: 1,
      showPrFeed: null,
      pullRequests: [],
      currentRepoOwner: null,
      currentRepo: null
    };
    wrapper = setup(initialState);
  });

  test("It should exist", () => {
    expect(wrapper).toBeTruthy;
  });

  test("it should have card components inside", () => {
    console.log("--------", wrapper);
  });
});

// describe("redux props", () => {
//   test("has success piece of state as a prop", () => {
//     const initialState = {
//       repos: [],
//       pageRepos: 1,
//       pagePullRequests: 1,
//       showPrFeed: null,
//       pullRequests: [],
//       currentRepoOwner: null,
//       currentRepo: null
//     };
//     const success = true;
//     const wrapper = setup(initialState);
//     const successProp = wrapper.instance().props.success;
//     console.log(successProp);
//   });
// });

// describe("Action creators", () => {
//   test("Should have an Action creator to return to repo feed", () => {
//     expect(goBackToStream()).toEqual({
//       type: "GO_BACK_TO_STREAM"
//     });
//   });
// });
