import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import "../config/reactotronConfig";
import { loadState, saveState } from "../services/localStorage";
import sagas from "./sagas/index.sagas";
import reducers from "./ducks/index.ducks";

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = [sagaMiddleware];
const persistedStore = loadState();
const composer =
  process.env.NODE_ENV === "development"
    ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
    : applyMiddleware(...middlewares);

const store = createStore(reducers, persistedStore, composer);

store.subscribe(() => saveState({ users: store.getState().users }));
sagaMiddleware.run(sagas);

export default store;
