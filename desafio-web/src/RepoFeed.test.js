import React from "react";
import { shallow, mount } from "enzyme";
import TopBanner from "./components/banner/topBanner";
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
    // var other = testComponent.find("topBanner");
    // var another = testComponent.find("GitFeed");
    // console.log("this is another", another.debug());
    // console.log(testComponent.debug());
    // console.log(another.children().length);
    // console.log(other.children().length);
    expect(testComponent.find("topBanner")).toBeTruthy;
    expect(testComponent.find("GitFeed")).toBeTruthy;
  });

  it("Should have a TopBanner with an H1", () => {
    expect(testComponent.find("h1").length).toBe(1);
  });

  it("should not render PrFeed Component initially", () => {
    expect(testComponent.find("PrFeed")).toBeFalsy;
  });
});

describe("Initial state of App component", () => {
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
  it("should have some state", () => {
    console.log(testComponent.props());
  });
});

//   test("App should have 2 children initially", () => {
//     const wrapper = shallow(<App />);
//     var size = wrapper.children().length;
//     expect(size).toBe(2);
//   });
// });

// test("mount", () => {
//   const setup = (initialState = {}) => {
//     const store = storeFactory(initialState);
//     let wrapper = mount(
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );
//     return wrapper;
//   };
//   const initialState = {
//     repos: [],
//     pageRepos: 1,
//     pagePullRequests: 1,
//     showPrFeed: null,
//     pullRequests: [],
//     currentRepoOwner: null,
//     currentRepo: null
//   };
//   var wrapper = setup(initialState);
//   var componentTest = wrapper.find("[data-test='component-app']");
//   expect(componentTest.length).toBe(1);
// });

// test("should render a top banner", () => {
//   const setup = (initialState = {}) => {
//     const store = storeFactory(initialState);
//     let wrapper = mount(
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );
//     return wrapper;
//   };
//   const initialState = {
//     repos: [],
//     pageRepos: 1,
//     pagePullRequests: 1,
//     showPrFeed: null,
//     pullRequests: [],
//     currentRepoOwner: null,
//     currentRepo: null
//   };
//   var wrapper = setup(initialState);
//   var componentTest = wrapper.find("topBanner");
//   console.log(componentTest.debug());
//   expect(componentTest.length).toBe(1);
// });

// describe("Initial Render the top banner", () => {
//   test("It Should Render the top banner", () => {
//     const wrapper = shallow(<TopBanner />);
//     expect(wrapper).toBeTruthy;
//   });

//   test("App should have 2 children initially", () => {
//     const wrapper = shallow(<App />);
//     var size = wrapper.children().length;
//     expect(size).toBe(2);
//   });
// });

// describe("Initial fetch of repos", () => {
//   test("Get the initial list of repos", () => {});
// });
