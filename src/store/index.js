
import ReduxPromise from 'redux-promise';
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import reducer from "../reducers";

const middle = [ReduxPromise, thunkMiddleware];

export default createStore(reducer, applyMiddleware(...middle));