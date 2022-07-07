import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk"; //more biti i da je const ThunkMiddleware
import { rootReducer } from "../redux/rootReducer";

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
