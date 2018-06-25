import { createStore, compose } from "redux";
import dcpReducer from "../reducers/dcpReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    dcpReducer,
    composeEnhancers()
  );
  return store;
};
