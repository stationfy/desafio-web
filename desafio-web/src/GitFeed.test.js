import React from "react";
import { shallow, mount } from "enzyme";
import { App } from "./App";
import { storeFactory } from "../src/setupTests";
import { Provider } from "react-redux";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  let wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  return wrapper;
};

describe("Rendering App component", () => {
  var testComponent;
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
    testComponent = setup(initialState);
  });

  it("Should initially render TopBanner and GitFeed components", () => {
    expect(testComponent.find("topBanner")).toBeTruthy;
    expect(testComponent.find("GitFeed")).toBeTruthy;
  });

  // it("Should have a TopBanner with an H1", () => {
  //   expect(testComponent.find("h1").length).toBe(1);
  // });

  // it("should not render PrFeed Component initially", () => {
  //   expect(testComponent.find("PrFeed")).toBeFalsy;
  // });
});
