import { call, takeLatest, put } from "redux-saga/effects";

import { AppConfig } from "api/AppConfig";
import { setLoader, getAppConfigFailed, getAppConfigSuccess } from "../actions";

const ERR_MESSAGE = "Something went wrong, Please try again later!";

// sagas
export function* getAppConfigSaga() {
  console.log("getAppConfigSaga");
  try {
    yield put(setLoader({ getAppConfig: true }));
    const response = yield call(AppConfig.get);
    if (response.status === 200) {
      yield put(getAppConfigSuccess(response.data));
    } else {
      yield put(getAppConfigFailed("Something went wrong!"));
    }
  } catch (err) {
    // err object does not have a proper error message, so assigning constant message.
    yield put(getAppConfigFailed(ERR_MESSAGE));
  } finally {
    yield put(setLoader({ getAppConfig: false }));
  }
}

// sagawatchers
export function* appConfigSagas() {
  yield takeLatest("GET_APP_CONFIG", getAppConfigSaga);
}
