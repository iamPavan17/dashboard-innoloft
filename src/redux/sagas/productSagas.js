import { call, takeLatest, all } from "redux-saga/effects";

// sagas
export function* getProductDetailsSaga() {
  console.log("getProductDetailsSaga");
  //   yield call(createUserCollection, u.user.uid, formData);
  //   yield put({ type: "LOGIN_SUCCESS" });
}

// sagawatchers
export function* getProductDetails() {
  yield takeLatest("GET_PRODUCT_DETAILS", getProductDetailsSaga);
}

// exporting
export function* productSagas() {
  yield all([call(getProductDetails)]);
}
