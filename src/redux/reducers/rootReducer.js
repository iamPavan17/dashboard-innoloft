import { combineReducers } from "redux";

import trlReducer from "./trlReducer";
import loaderReducer from "./loaderReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  trlData: trlReducer,
  productData: productReducer,
  loading: loaderReducer,
});

export default rootReducer;
