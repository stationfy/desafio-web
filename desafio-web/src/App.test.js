import React from "react";
import { shallow, mount } from "enzyme";
import TopBanner from "./components/banner/topBanner";
import PrFeed from "./components/PrFeed";
import GitFeed from "./components/GitFeed";
import styled from "styled-components";
import "jest-styled-components";
import { App } from "./App";
import reducer from "./store/RootReducer";
import configureStore from "redux-mock-store";
import { storeFactory } from "../src/setupTests";
import InfiniteScroll from "react-infinite-scroll-component";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  let wrapper = mount(<GitFeed store={store} />);
  return wrapper;
};

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

describe("Initial Render the top banner", () => {
  test("It Should Render the top banner", () => {
    const wrapper = shallow(<TopBanner />);
    expect(wrapper).toBeTruthy;
  });

  test("App should have 2 children initially", () => {
    const wrapper = shallow(<App />);
    var size = wrapper.children().length;
    expect(size).toBe(2);
  });
});
