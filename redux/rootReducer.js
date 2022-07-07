import { combineReducers } from "redux";
import { counterReducer, fetchReducer } from "./reducers";

export const rootReducer = combineReducers({
  counterReducer,
  fetchReducer,
});
