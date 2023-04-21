import { call, takeLatest, all } from "redux-saga/effects";

// sagas
export function* createUser({ formData }) {
  //   yield call(createUserCollection, u.user.uid, formData);
  //   yield put({ type: "LOGIN_SUCCESS" });
}

// sagawatchers
export function* onCreateUser() {
  yield takeLatest("CREATE_USER_START", createUser);
}

// exporting
export function* productSagas() {
  yield all([call(onCreateUser)]);
}
