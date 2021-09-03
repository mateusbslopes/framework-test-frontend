import { createStore,applyMiddleware, combineReducers } from 'redux'
import auth from "./auth";
import products from "./products";
import createSagaMiddleware from "redux-saga";

import authSagas from "../sagas/auth";
import productsSagas from "../sagas/products";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    auth, products
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(authSagas);
sagaMiddleware.run(productsSagas);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
