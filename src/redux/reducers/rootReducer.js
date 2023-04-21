import { combineReducers } from "redux";

import trlReducer from "./trlReducer";
import loaderReducer from "./loaderReducer";
import productReducer from "./productReducer";
import appConfigReducer from "./appConfigReducer";

const rootReducer = combineReducers({
  trlData: trlReducer,
  productData: productReducer,
  loading: loaderReducer,
  appConfig: appConfigReducer,
});

export default rootReducer;
