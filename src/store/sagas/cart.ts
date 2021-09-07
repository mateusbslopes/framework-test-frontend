import { put, takeLatest } from "redux-saga/effects";
import { CART_DATA_KEY, Types } from "../ducks/cart";

function* fetch(): Generator<any, any, any> {
  try {
    const localStorageCart = localStorage.getItem(CART_DATA_KEY);
    if (localStorageCart) {
      const cart = JSON.parse(localStorageCart);
      yield put({ type: Types.FETCH_SUCCESS, payload: cart });
    }
  } catch (e: Error | any) {
    yield put({ type: Types.FETCH_FAILED, payload: e.message });
  }
}

function* fetchSaga() {
  yield takeLatest(Types.FETCH, fetch);
}

export default fetchSaga;
