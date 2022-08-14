import { combineReducers } from "redux";
import { userReducer } from "./user";
import { loadingBarReducer } from "react-redux-loading-bar";
import {instageramUserReducer} from "./instageramUser";
import {competitorsReducer} from "./comptitors";

export const reducers = combineReducers({
    competitors: competitorsReducer,
    user: userReducer,
    insgeramUser: instageramUserReducer,
    loadingBar: loadingBarReducer
});
