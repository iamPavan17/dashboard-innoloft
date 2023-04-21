import { call, all } from "redux-saga/effects";

import { productSagas } from "./productSagas";
import { appConfigSagas } from "./appConfigSagas";

export default function* rootSaga() {
  yield all([call(productSagas), call(appConfigSagas)]);
}
