import { call, takeLatest, put } from "redux-saga/effects";

import { Product } from "api/Product";
import {
  getProductDetailsSuccess,
  getProductDetailsFailed,
  updateProductDetailsSuccess,
  updateProductDetailsFailed,
  setLoader,
} from "../actions";

const ERR_MESSAGE = "Something went wrong, Please try again later!";

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
    // err object does not have a proper error message, so assigning constant message.
    yield put(getProductDetailsFailed(ERR_MESSAGE));
  } finally {
    yield put(setLoader({ getProduct: false }));
  }
}

export function* updateProductDetailsSaga({ payload }) {
  try {
    yield put(setLoader({ updateProduct: true }));
    yield call(Product.update, payload);
    yield put(updateProductDetailsSuccess(true));
  } catch (err) {
    yield put(updateProductDetailsFailed(ERR_MESSAGE));
  } finally {
    yield put(setLoader({ updateProduct: false }));
  }
}

// sagawatchers
export function* productSagas() {
  yield takeLatest("GET_PRODUCT_DETAILS", getProductDetailsSaga);
  yield takeLatest("UPDATE_PRODUCT_DETAILS", updateProductDetailsSaga);
}
