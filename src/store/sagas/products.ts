import { call, put, takeLatest } from "redux-saga/effects";
import { Action } from "../../types";
import { FetchPayload, Types } from "../ducks/products";
import Api from "../../api/products";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetch(
  action: Action<FetchPayload>
): Generator<any, any, any> {
  const { search } = action.payload;

  try {
    const products = yield call(
      Api.getProducts,
      search
    );
    yield put({ type: Types.FETCH_SUCCESS, payload: products });
  } catch (e: Error | any) {
    yield put({ type: Types.FETCH_FAILED, payload: e.message });
  }
}

function* fetchSaga() {
  yield takeLatest(Types.FETCH, fetch);
}

export default fetchSaga;
