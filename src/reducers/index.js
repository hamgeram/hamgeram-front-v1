import { combineReducers } from "redux";
import { userReducer } from "./user";
import { loadingBarReducer } from "react-redux-loading-bar";

export const reducers = combineReducers({
    user: userReducer,
    loadingBar: loadingBarReducer
});
