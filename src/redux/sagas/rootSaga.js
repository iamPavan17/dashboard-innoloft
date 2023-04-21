import { call, all } from "redux-saga/effects";

import { productSagas } from "./productSagas";

export default function* rootSaga() {
  yield all([call(productSagas)]);
}
