import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";

import rootSaga from "./sagas/rootSaga";
import rootReducer from "./reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware))
  );
  return store;
};

const store = configureStore();
sagaMiddleware.run(rootSaga);

export default store;
