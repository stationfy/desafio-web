// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { createStore, compose, applyMiddleware } from "redux";
import RootReducer from "./store/RootReducer";
import thunk from "redux-thunk";
// import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const storeFactory = initialState => {
  return createStore(
    RootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
};
