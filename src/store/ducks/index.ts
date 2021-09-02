import { createStore,applyMiddleware, combineReducers } from 'redux'
import auth from "./auth";
import createSagaMiddleware from "redux-saga";
import authSaga from "../sagas/auth";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    auth
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(authSaga)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
