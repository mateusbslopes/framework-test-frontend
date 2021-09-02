import { call, put, takeLatest } from "redux-saga/effects";
import Api from "../../api/auth";
import { AuthenticatePayload, Types } from "../ducks/auth";
import { Action } from "../../types";
import sha256 from "crypto-js/sha256";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* authenticate(
  action: Action<AuthenticatePayload>
): Generator<any, any, any> {
  const { user, password, history } = action.payload;
  const encryptedPassword = sha256(password);

  try {
    const { token } = yield call(
      Api.authenticate,
      user,
      encryptedPassword.toString()
    );
    yield put({ type: Types.AUTHENTICATE_SUCCESS, payload: token });
    history.push("/productList");
  } catch (e: Error | any) {
    yield put({ type: Types.AUTHENTICATE_FAILED, payload: e.message });
  }
}

function* authenticateSaga() {
  yield takeLatest(Types.AUTHENTICATE, authenticate);
}

export default authenticateSaga;
