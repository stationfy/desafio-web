import { combineReducers } from "redux";

const context = require.context("../", true, /reducer\.jsx?/);

export const reducers = context.keys().reduce(
    (result, current) => ({
        ...result,
        [current
            .split("/")
            .slice(-2)[0]
            .toLowerCase()]: context(current).default
    }),
    {}
);

export default combineReducers(reducers);