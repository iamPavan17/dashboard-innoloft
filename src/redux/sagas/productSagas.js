import { call, takeLatest, all, put } from "redux-saga/effects";

import { Product } from "api/Product";
import { getProductDetailsSuccess, getProductDetailsFailed } from "../actions";

// sagas
export function* getProductDetailsSaga() {
  try {
    const response = yield call(Product.get);
    if (response.status === 200) {
      yield put(getProductDetailsSuccess(response.data));
    } else {
      yield put(getProductDetailsFailed("Something went wrong!"));
    }
  } catch (err) {
    yield put(getProductDetailsFailed(err));
  }
}

// sagawatchers
export function* getProductDetails() {
  yield takeLatest("GET_PRODUCT_DETAILS", getProductDetailsSaga);
}

// exporting
export function* productSagas() {
  yield all([call(getProductDetails)]);
}
