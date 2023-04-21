import { call, takeLatest, all, put } from "redux-saga/effects";

import { Product } from "api/Product";
import {
  getProductDetailsSuccess,
  getProductDetailsFailed,
  setLoader,
} from "../actions";

// sagas
export function* getProductDetailsSaga() {
  try {
    yield put(setLoader({ getProduct: true }));
    const response = yield call(Product.get);
    if (response.status === 200) {
      yield put(getProductDetailsSuccess(response.data));
    } else {
      yield put(getProductDetailsFailed("Something went wrong!"));
    }
  } catch (err) {
    yield put(getProductDetailsFailed(err));
  } finally {
    yield put(setLoader({ getProduct: false }));
  }
}

export function* updateProductDetailsSaga() {
  try {
  } catch (err) {}
}

// sagawatchers
export function* getProductDetails() {
  yield takeLatest("GET_PRODUCT_DETAILS", getProductDetailsSaga);
  yield takeLatest("UPDATE_PRODUCT_DETAILS", updateProductDetailsSaga);
}

// exporting
export function* productSagas() {
  yield all([call(getProductDetails)]);
}
