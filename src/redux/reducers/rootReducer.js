import { combineReducers } from "redux";

import trlReducer from "./trlReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  trlData: trlReducer,
  productData: productReducer,
});

export default rootReducer;
