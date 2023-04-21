import { call, takeLatest, put } from "redux-saga/effects";

import { Product } from "api/Product";
import {
  getProductDetailsSuccess,
  getProductDetailsFailed,
  updateProductDetailsSuccess,
  updateProductDetailsFailed,
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

export function* updateProductDetailsSaga({ payload }) {
  try {
    yield put(setLoader({ updateProduct: true }));
    const response = yield call(Product.update, payload);
    console.log(response);
    yield put(updateProductDetailsSuccess(response.data));
  } catch (err) {
    yield put(updateProductDetailsFailed(err));
  } finally {
    yield put(setLoader({ updateProduct: false }));
  }
}

// sagawatchers
export function* productSagas() {
  yield takeLatest("GET_PRODUCT_DETAILS", getProductDetailsSaga);
  yield takeLatest("UPDATE_PRODUCT_DETAILS", updateProductDetailsSaga);
}
