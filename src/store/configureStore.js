import { createStore } from "redux";
import dcpReducer from "../reducers/dcpReducer";

export default () => {
  const store = createStore(dcpReducer);
  return store;
};
