import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import axiosMiddleware from "./axiosMiddleware";


const store = createStore(reducers, applyMiddleware(thunk, axiosMiddleware));

export default store;